from app import app, mongo

@app.route('/', methods=['GET'])
def ping():
    return 'Pong! The API is up and running.'

@app.route('/premium', methods=['GET'])
def index():
    mongo.db.users.insert_one({'name': 'dk'})
    return 'Hello, Flask!'