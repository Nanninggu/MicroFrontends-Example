from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    sys_info = {
        'Running_port': '5000',
        'Address_name': 'localhost',
        'Run_Script' : 'localhost:5000',
        'Position' : 'Main - 메인 서비스로 이 프로젝트가 내려가면 서비스가 실행 안된다.'
    }
    return render_template('index.html', info=sys_info) # type: ignore

if __name__ == '__main__':
    app.run(debug=True)