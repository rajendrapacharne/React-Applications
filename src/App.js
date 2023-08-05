
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import NavBar from './Components/NavBar'
import TextForm from './Components/TextForm'
import React , {useState} from 'react'


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
     

      <NavBar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className='container' >
      <TextForm  showAlert={showAlert} heading="Enter the text To Analyze" mode={mode}/>
      {/* <About/> */}
      </div>
     
  </>
  );
}

export default App;
