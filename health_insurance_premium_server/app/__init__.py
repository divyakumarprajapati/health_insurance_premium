from flask import Flask
from flask_pymongo import PyMongo
import pandas as pd

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
mongo = PyMongo(app)

df = pd.read_excel("seed_data/assignment_raw_rate.xlsx")
seedData = []

for index, row in df.iterrows():
    rowJson = {}
    for field in df:
        rowJson[field] = row[field]
    seedData.append(rowJson)

mongo.db.premiumRate.insert_many(documents=seedData)
from app import routes
