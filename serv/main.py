from flask import Flask, Blueprint, g, jsonify
from flask_cors import CORS
from auth.users import users
import socket
from flask_socketio import SocketIO,emit,send
from threading import Thread
import time
#тут думаю всё понятно, чисто конфигурация
# Then create socketio variable where cors_allowed_origin = * to acept communication with other domains.
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
socketio = SocketIO(app, cors_allowed_origins='*')
thread = None
clients = 0


# This is the api that we can run by calling http://ip:5000/api/socket
# this API is called from the Angular client and it creates a separate thread from the main thread
# and executess the function ini_socket.
#тестим соединение
@app.route('/api/socket')
def index():
    print('Route socket init')
    return ('{"ok":"success"}')


#дальше идут слушатели событий или, как их называют порядочные люди, EventListeners
#это встроенная хуйня, её клиент сам триггернёт
@socketio.on('connect')
def test_connect():
    global clients
    clients += 1
    print('Client connected test')
    emit('sent', clients)


# считываем данные
@socketio.on('new-message')
def handle_message(message):
    print('received message' + message)
    emit('sent', {'temperature': 'sd', 'humedity': 'sd'}) #отправляем данные


#это встроенная хуйня, её клиент сам триггернёт
@socketio.on('disconnect')
def test_disconnect():
    global clients
    clients -= 1
    print('Client disconnected')


if __name__ == '__main__':
    socketio.run(app, port=5002)


"""
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
     app.run(port=5002) """
