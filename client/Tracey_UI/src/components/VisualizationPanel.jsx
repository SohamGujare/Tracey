import React from 'react';

const VisualizationPanel = ({ flowChart, translatedCode }) => {
  return (
    <div className="visualization-container">
      <div className="panel">
        <div className="panel-header">
          <h2><i className="fas fa-project-diagram text-cyan-400"></i> Code Flow Visualization</h2>
          <div className="panel-header-badge">Mermaid.js</div>
        </div>
        <div className="panel-body">
          <div className="mermaid-container">
            <div className="mermaid">{flowChart}</div>
          </div>
        </div>
      </div>
      
      <div className="panel">
        <div className="panel-header">
          <h2><i className="fas fa-exchange-alt text-purple-400"></i> Translated Code</h2>
          <div className="panel-header-badge">JavaScript</div>
        </div>
        <div className="panel-body">
          <div className="translation-container">
            <div className="translation-header">
              <div className="editor-dot dot-red"></div>
              <div className="editor-dot dot-yellow"></div>
              <div className="editor-dot dot-green"></div>
              <div className="editor-filename">translated.js</div>
            </div>
            <pre className="translated-code">{translatedCode}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualizationPanel;