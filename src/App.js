
import { useState } from 'react';
import './App.css';

import { SearchAndResults } from './components/SearchAndResults';

function App() {
      const [query, setQuery] = useState('')
      
    
  
      

  return (
    <div className="App"> 
        <SearchAndResults query={query} />
    </div>
  );
}

export default App;
