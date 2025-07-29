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
          <pre 
            className="code-editor" 
            contentEditable={true}
            dangerouslySetInnerHTML={{ __html: code }}
            onInput={(e) => onCodeChange(e.currentTarget.innerHTML)} 
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