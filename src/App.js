
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('white');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);

    }, 3000)

  }



  const toggleMode = ()=>{
     if(mode === 'light'){
       setMode ('dark')
       document.body.style.backgroundColor ='#1d2152';
       showAlert("Dark mode has enable...!!", 'success...!!');
       document.title= "husain Dark mode";
       setInterval(()=>{
         document.title= 'Saddam'
       },1500);
       setInterval(()=>{
         document.title= 'Husain'
       },1500)
     }
     else{
       setMode ( 'light')
       document.body.style.backgroundColor ='#7bedda';
       showAlert ("light mode has enable...!!", 'success...!!')
     }
  }
  return (
    <>
   {/* <Router> */}
      <Navbar title="Husain" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
       {/* <Routes>
      
          <Route exact path="/about" element= {<About />} />
            
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>
      }/> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>
        {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>

  );
}

export default App;
