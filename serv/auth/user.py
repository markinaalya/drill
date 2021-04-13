class user:
    def __init__(self):
        self.id = -1
        self.login = ''
        self.password = ''
        self.permission = ''

    def DBLoad(self, r):
        print(r)
        self.id = r['id']
        self.login = r['login']
        self.password = r['password']
        self.permission = r['permission']

    def DBStore(self, db):
        db.execute("insert into users values(NULL,?, ?, ?)", (self.login, self.password, self.permission))


