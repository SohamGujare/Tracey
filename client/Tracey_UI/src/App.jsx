import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import LanguageSelection from './components/LanguageSelection';
import CodeEditorPanel from './components/CodeEditorPanel';
import DebugResultsPanel from './components/DebugResultsPanel';
import VisualizationPanel from './components/VisualizationPanel';
import Footer from './components/Footer';
import Notification from './components/Notification';
import mermaid from 'mermaid';

function App() {
  const [notification, setNotification] = useState(null);
  const [debugResults, setDebugResults] = useState([]);

  const [code, setCode] = useState(`def calculate_average(numbers):
    if len(numbers) == 0:
        return 0
    total = 0
    for num in numbers:
        total += num
    average = total / len(numbers)
    return average

# Test the function
data = [10, 20, 30, 40]
print("Average:", calculate_average(data))`);

  const [translatedCode, setTranslatedCode] = useState(`function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  const average = total / numbers.length;
  return average;
}

// Test the function
const data = [10, 20, 30, 40];
console.log("Average:", calculateAverage(data));`);

  const [flowChart] = useState(`graph TD
    A([Start]) --> B{Function calculate_average}
    B --> C[Check if numbers is empty]
    C -->|Yes| D[Return 0]
    C -->|No| E[Initialize total = 0]
    E --> F[Loop through numbers]
    F --> G[Add num to total]
    G --> F
    F -->|Loop end| H[Calculate average = total / len(numbers)]
    H --> I[Return average]
    I --> J([End])`);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: false,
        htmlLabels: true,
        curve: 'basis'
      }
    });
    mermaid.contentLoaded();
  }, []);

  const handleAnalyze = () => {
    setNotification({
      message: 'Analysis complete! Found 3 issues in your code.',
      type: 'success'
    });
  };

  const handleDebug = () => {
    axios.post('http://localhost:5000/debug', { code })
      .then(res => {
        setDebugResults([
          {
            id: 1,
            type: 'output',
            title: 'Execution Result',
            line: '',
            description: '',
            fix: '',
            explanation: res.data.output
          }
        ]);
        setNotification({
          message: 'Code analyzed successfully!',
          type: 'success'
        });
      })
      .catch(err => {
        console.error("Error during debugging:", err);
        setNotification({
          message: 'Failed to debug the code.',
          type: 'error'
        });
      });
  };

  const handleTranslate = () => {
    setNotification({
      message: 'Code successfully translated to JavaScript!',
      type: 'translate'
    });
  };

  const handleExport = () => {
    setNotification({
      message: 'Results exported successfully!',
      type: 'export'
    });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div className="container">
      <Header onExport={handleExport} />
      
      <LanguageSelection onAnalyze={handleAnalyze} />
      
      <div className="main-content">
        <CodeEditorPanel 
          code={code} 
          onCodeChange={setCode} 
          onDebug={handleDebug} 
          onTranslate={handleTranslate} 
        />
        <DebugResultsPanel results={debugResults} />
      </div>
      
      <VisualizationPanel 
        flowChart={flowChart} 
        translatedCode={translatedCode} 
      />
      
      <Footer />
      
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onClose={closeNotification} 
        />
      )}
    </div>
  );
}

export default App;
