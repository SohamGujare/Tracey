import React, { useState, useEffect } from 'react';
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
  const [debugResults, setDebugResults] = useState([
    {
      id: 1,
      type: 'critical',
      title: 'Syntax Error',
      line: 'Line 11',
      description: 'Missing closing parenthesis in print statement',
      fix: 'print("Average:", calculate_average(data))',
      explanation: 'Python requires parentheses for function calls. The print statement is missing its closing parenthesis. This is a common mistake when transitioning from Python 2 to Python 3, where print became a function.'
    },
    {
      id: 2,
      type: 'warning',
      title: 'Code Style',
      line: 'Line 1',
      description: 'Function name could be more descriptive',
      fix: 'def calculate_mean(numbers):',
      explanation: 'While \'calculate_average\' is acceptable, \'calculate_mean\' is more precise for this mathematical operation. Using precise terminology improves code readability and maintainability.'
    },
    {
      id: 3,
      type: 'suggestion',
      title: 'Optimization',
      line: 'Line 7',
      description: 'Use built-in functions for better performance',
      fix: 'return sum(numbers) / len(numbers) if numbers else 0',
      explanation: 'Python\'s built-in sum() function is more efficient and readable than manually iterating through the list. This reduces code complexity and improves performance for large datasets.'
    }
  ]);

  const [code, setCode] = useState(`def <span class="syntax-function">calculate_average</span>(<span class="syntax-variable">numbers</span>):
    <span class="syntax-keyword">if</span> <span class="syntax-function">len</span>(<span class="syntax-variable">numbers</span>) == 0:
        <span class="syntax-keyword">return</span> 0
    total = 0
    <span class="syntax-keyword">for</span> <span class="syntax-variable">num</span> <span class="syntax-keyword">in</span> <span class="syntax-variable">numbers</span>:
        total += num
    average = total / <span class="syntax-function">len</span>(<span class="syntax-variable">numbers</span>)
    <span class="syntax-keyword">return</span> average

<span class="syntax-comment"># Test the function</span>
<span class="syntax-variable">data</span> = [10, 20, 30, 40]
<span class="syntax-function">print</span>(<span class="syntax-string">"Average:"</span>, <span class="syntax-function">calculate_average</span>(<span class="syntax-variable">data</span>)`);

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
    setNotification({
      message: 'Analysis complete! Found 3 issues in your code.',
      type: 'success'
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