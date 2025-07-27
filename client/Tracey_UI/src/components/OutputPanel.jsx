export default function OutputPanel({ output }) {
  if (!output) return null;

  return (
    <div className="bg-dark p-4 rounded text-light shadow border border-secondary mt-4">
      <h5 className="text-info mb-3">🔧 Output & Explanation</h5>

      {output.error && (
        <p className="text-danger mb-2">
          🔴 <strong>Line:</strong> {output.error}
        </p>
      )}

      {output.fix && (
        <p className="text-success mb-3">
          ✅ <strong>Fix:</strong> <code>{output.fix}</code>
        </p>
      )}

      {output.explanation && (
        <div>
          <h6 className="text-warning mb-2">💡 Explanation</h6>
          <p className="text-light mb-0">{output.explanation}</p>
        </div>
      )}
    </div>
  );
}
