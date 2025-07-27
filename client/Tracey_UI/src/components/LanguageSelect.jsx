// src/components/LanguageSelect.jsx
export default function LanguageSelect() {
  return (
    <div className="d-flex justify-content-between flex-wrap gap-3 mb-4">
      <div>
        <label className="form-label">📝 Code Language</label>
        <select className="form-select bg-dark text-white border-secondary">
          <option selected>Python</option>
          <option disabled>JavaScript (soon)</option>
          <option disabled>C++ (soon)</option>
          <option disabled>Java (soon)</option>
        </select>
      </div>

      <div>
        <label className="form-label">🌍 Translate To</label>
        <select className="form-select bg-dark text-white border-secondary">
          <option disabled selected>JavaScript (soon)</option>
          <option disabled>C++</option>
          <option disabled>Java</option>
        </select>
      </div>
    </div>
  );
}
