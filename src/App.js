
import './App.css';
// import About from './Components/About';
import NavBar from './Components/NavBar'
import TextForm from './Components/TextForm'
import React , {useState} from 'react'


function App() {
  const [mode, setMode] = useState('dark'); 
  
  const toggleMode=()=>
  {
      if (mode ==='dark')
      {
        setMode('light');
        document.body.style.backgroundColor='white';
      }
      else
      {
        setMode('dark');
        document.body.style.backgroundColor='grey';
      }
  }

  return (
    <>
     

      <NavBar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      
      <div className='container' >
      <TextForm heading="Enter the text To Analyze" mode={mode}/>
      {/* <About/> */}
      </div>
     
  </>
  );
}

export default App;
