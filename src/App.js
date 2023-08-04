
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar'
// import TextForm from './Components/TextForm'

function App() {
  return (
    <>
      
      <NavBar title="TextUtils" about="About Us"/>
      
      <div className='container' >
      {/* <TextForm heading="Enter the text To Analyze"/> */}
      <About/>
      </div>
     
  </>
  );
}

export default App;
