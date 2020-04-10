'''
from flask import Response
from flask import Flask
from flask import render_template
import threading
import datetime

app = Flask(__name__)

@app.route('/')
def index():
    return 'index'

@app.route('/emotion', method = ['GET','POST'])
def emotion():
    return 'login'

@app.route('/user/<username>')
def profile(username):
    return '{}\'s profile'.format(escape(username))

with app.test_request_context():
    print(url_for('index'))
    print(url_for('login'))
    print(url_for('login', next='/'))
    print(url_for('profile', username='John Doe'))
'''
from emotions import emotion_tag
from flask import Flask, url_for,redirect
from flask import request
from flask import jsonify,make_response
from flask_cors import CORS
import os
app = Flask(__name__)
CORS(app)

@app.route('/')
def api_root():
    return 'Welcome'

@app.route('/music', methods = ['POST'])
def api_articles():
    return jsonify({'about':"shshsh"})


@app.route('/emotion', methods=['GET','POST'])
def api_emotion(video = None):
    if request.method == 'POST':
        print('IAM CALLED -------**************--------')
        if request.files:
            print("FILE RECEIVED")
        f = request.files['em']
        f.save(os.path.join(os.getcwd(), 'em.mp4'))
    video = 'em.mp4'
    print(video)
    res = emotion_tag(video)
    res = {"emotion" : res}
    print(jsonify(res))
    return jsonify(res)

if __name__ == '__main__':
    app.run()