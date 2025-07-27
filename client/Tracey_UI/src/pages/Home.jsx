// src/pages/Home.jsx
import { useState } from "react";
import Header from "../components/Header";
import LanguageSelect from "../components/LanguageSelect";
import CodeEditor from "../components/CodeEditor";
import OutputPanel from "../components/OutputPanel";
import TranslationPanel from "../components/TranslationPanel";
import VisualizationPanel from "../components/VisualizationPanel";

export default function Home() {
  const [output, setOutput] = useState(null);

  return (
    <div
      className="text-white"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0D1117",
        padding: "2rem",
        fontFamily: "'Fira Code', monospace",
      }}
    >
      <Header />
      <LanguageSelect />

      {/* Main Section: Editor + Output */}
      <div className="row mt-4 g-4">
        <div className="col-12 col-md-6">
          <div
            className="p-3 rounded"
            style={{ backgroundColor: "#161B22", minHeight: "400px" }}
          >
            <h5 className="text-info mb-3">
              <i className="bi bi-file-earmark-code"></i> Code Editor
            </h5>
            <CodeEditor setOutput={setOutput} />
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary fw-bold">
                🔍 Debug & Explain
              </button>
              <button className="btn btn-purple fw-bold" disabled>
                📘 Translate to JavaScript (soon)
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          {output && (
            <div
              className="p-3 rounded"
              style={{ backgroundColor: "#161B22", minHeight: "400px" }}
            >
              <h5 className="text-info mb-3">
                <i className="bi bi-box-arrow-in-right"></i> Output & Explanation
              </h5>
              <OutputPanel output={output} />
            </div>
          )}
        </div>
      </div>

      {/* Optional Sections */}
      <div className="mt-4">
        <TranslationPanel />
        <VisualizationPanel />
      </div>

      {/* Custom CSS for purple button */}
      <style>{`
        .btn-purple {
          background-color: #a855f7;
          color: white;
        }
        .btn-purple:disabled {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}
