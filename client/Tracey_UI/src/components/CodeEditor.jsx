import axios from 'axios';
import { useState } from 'react';

export default function CodeEditor({ setOutput }) {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    axios.post('http://localhost:5000/debug', { code })
      .then(res => setOutput(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="mb-4">
      <label className="form-label">Paste Python Code:</label>
      <textarea
        className="form-control"
        rows="8"
        placeholder="def greet(name):\n    print('Hello, ' + name)"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <button className="btn btn-success mt-3" onClick={handleSubmit}>
        🔍 Debug & Explain
      </button>
    </div>
  );
}
