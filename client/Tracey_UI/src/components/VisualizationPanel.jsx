// src/components/VisualizationPanel.jsx
export default function VisualizationPanel() {
  return (
    <div className="bg-secondary mt-5 p-4 rounded shadow">
      <h4 className="text-info mb-3">🧠 Code Flow Visualization</h4>
      <div className="bg-dark text-white p-3 rounded small">
        <pre className="text-success">
{`graph TD;
  A[Start] --> B{Function Called};
  B --> C[Print "Hello, Soham"];
  C --> D[End];`}
        </pre>
        <p className="mt-2 text-muted small">
          Flowchart mock-up generated using Mermaid syntax. Live visualization coming soon.
        </p>
      </div>
    </div>
  );
}
