import React from 'react';

const CodeEditorPanel = ({ code, onCodeChange, onDebug, onTranslate }) => {
  const handleCodeChange = (e) => {
    onCodeChange(e.target.value);
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <h2><i className="fas fa-code text-blue-400"></i> Code Editor</h2>
        <div className="panel-header-badge">Python 3.11</div>
      </div>
      <div className="panel-body">
        <div className="code-editor-container">
          <div className="editor-header">
            <div className="editor-dot dot-red"></div>
            <div className="editor-dot dot-yellow"></div>
            <div className="editor-dot dot-green"></div>
            <div className="editor-filename">example.py</div>
          </div>

          {/* ✅ Replaced <pre> with a safe <textarea> */}
          <textarea
            className="code-editor-textarea"
            value={code}
            onChange={handleCodeChange}
            rows={12}
            style={{
              width: '100%',
              backgroundColor: '#1e1e1e',
              color: '#d4d4d4',
              fontFamily: 'monospace',
              fontSize: '14px',
              borderRadius: '8px',
              padding: '12px',
              border: '1px solid #444',
              resize: 'vertical'
            }}
          />
        </div>

        <div className="editor-actions">
          <button className="action-btn debug-btn" onClick={onDebug}>
            <i className="fas fa-bug"></i> Debug & Explain
          </button>
          <button className="action-btn translate-btn" onClick={onTranslate}>
            <i className="fas fa-exchange-alt"></i> Translate to JavaScript
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorPanel;
