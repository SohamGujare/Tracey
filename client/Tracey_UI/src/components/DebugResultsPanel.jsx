import React from 'react';

const DebugResultsPanel = ({ results }) => {
  const getResultClass = (type) => {
    switch (type) {
      case 'critical':
        return 'result-critical';
      case 'warning':
        return 'result-warning';
      case 'suggestion':
        return 'result-suggestion';
      default:
        return '';
    }
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <h2><i className="fas fa-chart-bar text-green-400"></i> Debugging Results</h2>
        <div>
          <span className="panel-header-badge">
            Critical: {results.filter(r => r.type === 'critical').length}
          </span>
          <span 
            className="panel-header-badge" 
            style={{ background: 'rgba(234,179,8,0.15)', color: '#fde047', borderColor: '#eab308' }}
          >
            Warning: {results.filter(r => r.type === 'warning').length}
          </span>
        </div>
      </div>
      <div className="panel-body">
        <div className="results-container">
          {results.map(result => (
            <div key={result.id} className={`result-item ${getResultClass(result.type)}`}>
              <div className="result-header">
                <div className="result-title">{result.title}</div>
                <div className="result-line">{result.line}</div>
              </div>
              <div className="result-description">{result.description}</div>
              <div className="result-fix">{result.fix}</div>
              <div className="result-explanation">{result.explanation}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DebugResultsPanel;