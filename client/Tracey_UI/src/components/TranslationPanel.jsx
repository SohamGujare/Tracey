// src/components/TranslationPanel.jsx
export default function TranslationPanel() {
  return (
    <div className="bg-secondary bg-opacity-25 mt-5 p-4 rounded shadow opacity-50">
      <h4 className="text-info mb-3">🔁 Translated Code (coming soon)</h4>
      <pre className="bg-dark text-warning p-3 rounded small overflow-auto">
{`function greet(name) {
  console.log("Hello, " + name);
}

greet("Soham");`}
      </pre>
    </div>
  );
}

