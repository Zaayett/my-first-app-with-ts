import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
import HelloWorld4 from './components/HelloWorld4';
import HelloWorld9 from './components/HelloWorld9';

const App: React.FC = () => {
    return (
      <div className="Container">
        <div className="Column3">
          <HelloWorld9 />
        </div>
      </div>
    );
  }

export default App;