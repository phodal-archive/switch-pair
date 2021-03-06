from flask import Flask, flash, render_template
from flask.ext import restful
from flask_restful import reqparse, Resource

from redisdb.pr import PR
from db import get_db, post_story

app = Flask(__name__, static_url_path='')
app.secret_key = 'why would I tell you my secret key?'

api = restful.Api(app)
pr = PR()
all_info = pr.get_info_from_csv(pr, [])


class All(Resource):
    @staticmethod
    def get():
        return all_info, 201, {'Access-Control-Allow-Origin': '*'}


parser = reqparse.RequestParser()
parser.add_argument('user', type=str)
parser.add_argument('story_number', type=str)
parser.add_argument('story_type', type=str)
parser.add_argument('story_title', type=str)
parser.add_argument('story_day', type=int)
parser.add_argument('story_description', type=str)


class Story(Resource):
    @staticmethod
    def post():
        args = parser.parse_args()
        post_story(args)
        flash('New entry was successfully posted')
        return args, 201

    @staticmethod
    def get():
        db = get_db()
        results = []
        cursor = db.execute('select * from pair')
        for information in cursor.fetchall():
            result = {"story_type": information["story_type"],
                      "story_number": information["story_number"],
                      "story_description": information["story_description"],
                      "story_title": information["story_title"],
                      "user": information["user"],
                      "story_day": information["story_day"]}
            results.append(result)
        db.commit()
        return results, 201, {'Access-Control-Allow-Origin': '*'}


@app.route('/')
def root():
    return app.send_static_file('index.html')


@app.route('/<path:path>')
def static_proxy(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(path)


api.add_resource(All, '/all/account')
api.add_resource(Story, '/story')

if __name__ == '__main__':
    app.run(debug=True)