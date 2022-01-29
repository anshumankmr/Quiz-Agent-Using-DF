from flask import Flask, request, send_from_directory,render_template
app = Flask(__name__, static_url_path='/static',template_folder='./')

@app.route("/")
def shadow():
    return render_template("index.html")#assuming this is the name of your html file

if __name__ == "__main__":
    app.run(host='localhost' , port=5000 , debug=True)
