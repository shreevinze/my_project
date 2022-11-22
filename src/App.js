import "./App.css";
import React, { useState } from "react";

// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [bgColor, setbgColor] = useState("white");

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
      document.body.style.backgroundColor = "grey";
      setbgColor("grey");

      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setbgColor("white");
      showAlert("Light mode has been enabled", "success");
    }
  };

  const toggleMode0 = () => {
    document.body.style.backgroundColor = "grey";
    setbgColor("grey");
  };

  const toggleMode1 = () => {
    document.body.style.backgroundColor = "#203c69";
    setbgColor("#203c69");
  };

  const toggleMode2 = () => {
    document.body.style.backgroundColor = "#104152";
    setbgColor("#104152");
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          toggleMode1={toggleMode1}
          toggleMode2={toggleMode2}
          toggleMode0={toggleMode0}
        ></Navbar>
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route
              path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  bgColor={bgColor}
                  mode={mode}
                  heading="Enter the text to analyze below:"
                 />
              
             
          {/* // </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
