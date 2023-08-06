
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import NavBar from './Components/NavBar'
import TextForm from './Components/TextForm'
import React , {useState} from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  const toggleMode=()=>
  {
      if (mode ==='dark')
      {
        setMode('light');
        showAlert("light mode has been enabled", "success");
        document.title="TextUtils-Light Mode"
        document.body.style.backgroundColor='white';
        // setInterval( ()=>
        // {
        //   // alert("TextUti1s is Amazing Mode");
        //   window.alert("TextUti1s is Amazing Website");
        // },1000
        // );
        // Hacked 

      }
      else
      {
        setMode('dark');
        showAlert("Dark mode has been enabled", "success");
        document.title="TextUtils-Dark Mode"
        document.body.style.backgroundColor='grey';
      }
  }

  return (
    <>
     
      {/* <Router> */}
      <NavBar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className='container' >
      <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
      {/* <Switch>
   
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
    </Switch> */}
    
      </div>
      {/* </Router> */}
     
  </>
  );
}

export default App;
