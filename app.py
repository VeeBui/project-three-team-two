from flask import Flask, render_template

#################################################
# Flask Setup
#################################################

app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route('/')
def index():
    return render_template('index.html')
