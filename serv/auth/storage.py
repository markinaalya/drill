import os, sys, re, codecs, binascii, cgi, cgitb, datetime, pickle, sqlite3
from flask import request
from .user import user

class DBStorage:
    def __init__(self, users):
        self.load()

    def load(self):
        self.db = sqlite3.connect('db.sqlite', detect_types=sqlite3.PARSE_DECLTYPES)
        self.db.execute("""
				   create table if not exists users(
					   id integer primary key autoincrement,
					   login text,
					   password text,
					   permission text
					   )""")
        self.db.row_factory = sqlite3.Row
        self.dbc = self.db.cursor()

     # получить определнный объект
    def get_user_store(self, login):
        item = user()
        self.dbc.execute("select * from users where login=?", (login,))
        item.DBLoad(self.dbc.fetchone())
        return item

    def store(self, item):
        print(self.db)
        item.DBStore(self.db)
        self.commit()

    def commit(self):
        self.db.commit()
        self.db.close()