
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
    
  }
const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#0b4b2b'
      showalert("dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showalert("light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
      
    }
  }
  return (
    <>  
      <Router>
        <Navbar title="TextUtilss" aboutText="About" mode={mode} toggleMode={toggleMode} /> 
        <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route> 
          <Route exact path="/">
              <TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
