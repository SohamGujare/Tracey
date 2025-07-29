from flask import Flask, request, jsonify
from flask_cors import CORS
from ultimate_debugger import UltimateDebugger  # Import your class from the existing module

app = Flask(__name__)
CORS(app)  # Allows communication with React (localhost:5173)

@app.route('/debug', methods=['POST'])
def debug_code():
    data = request.json
    code = data.get("code")

    debugger = UltimateDebugger()
    result_text = debugger.trace_execution(code)

    # (Optional) Parse `result_text` into structured JSON
    return jsonify({
        "output": result_text
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)
