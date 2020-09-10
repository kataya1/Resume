from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('resume.html')

if __name__ == '__main__':
    app.run(host='192.168.1.101', debug=True)