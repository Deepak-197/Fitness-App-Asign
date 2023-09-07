
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


// https://64f86f4cdd15577a0c5a81dc--statuesque-gumdrop-2d6051.netlify.app/
