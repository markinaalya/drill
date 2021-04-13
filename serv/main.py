from flask import Flask, Blueprint, g, jsonify
from flask_cors import CORS
from serv.auth.users import users

app = Flask(__name__)
CORS(app)

def getUsers():
    if 'Users' not in g:
        g.Users = users()
    return g.Users

@app.route("/")
def hello():
    return jsonify({'text':'Hello World!'})

@app.route("/signin/<log>/<password>")
def validUser(log, password):
    print(log, password)
    item = getUsers().get_user(log)
    print(item.login)
    return jsonify({'login': item.login, 'password': item.password, 'permission': item.permission})

@app.route("/add")
def add():
    item = getUsers().add_user()
    print(item)
    return jsonify('succsess')


if __name__ == '__main__':
     app.run(port=5002)

