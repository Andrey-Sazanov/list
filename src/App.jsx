import React from 'react'
import useLocalStorage from'use-local-storage';
import Header from './components/Header';
import List from './components/List';

import './components/dark.css'
function App() {
  const [theme,setTheme] = useLocalStorage('theme'?'dark':'light')
  const change=()=>{
      const newTheme = theme==='light'?'dark':'light'
      setTheme(newTheme)
    }
  return (
    <div className="App" data-theme={theme}>
      <Header  change={change} />
      <List/>
    </div>
  );
}

export default App;
