// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {

   const [mode, setmode] = useState('light') // darke mode enable

   const [alert, setAlert] = useState(null)

   const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
   }

   const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert(" Dark Mode! is active", "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert(" Light Mode! is active", "success")


    }
   }

  return (
    <>
   <Router>
   <Navbar title="TextUtils"  abouttext="About TextUtils" mode={mode} toggleMode={toggleMode} />

<Alert alert={alert} />

 <div className='container my-3'>
 <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
         
          <Route exact path="/">
 <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
          
          </Route>
        </Switch>

 {/* <About></About> */}
 </div>
   </Router>
   </>
  );
}
 

export default App;
