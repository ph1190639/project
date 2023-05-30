import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
 import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode ha been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode ha been enabled", "success");
    }
  };
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />  */}
      
      <div className="container">
      <Routes>
        <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} /> } />
        <Route path="about" element={ <About mode={mode}/> } />
        
      </Routes>
      </div>
    
    </>
  );
}

export default App;
