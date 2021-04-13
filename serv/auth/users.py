from .storage import DBStorage
from .user import user
from dataclasses import dataclass

@dataclass()
class users():
    def __init__(self):
        self.users = DBStorage(self)

    def add_user(self):
        item = user()
        item.login = 'drilling_engineer'
        item.password = 'qwerty123'
        item.permission = 'drilling_engineer'
        self.users.store(item)
        return item

    def get_user(self, log):
        return self.users.get_user_store(log)