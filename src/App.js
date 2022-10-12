import "./App.css";
import React, { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  // Whether Dark Mode is enabled or not.
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgba(45, 49, 53, 1)";
      showAlert("Dark Mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "Success");
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      {/* <Routes>
        <Route
          path="/"
          element={ */}
            <TextForm
              showAlert={showAlert}
              mode={mode}
              heading="Enter the text below to process :"
            />
          {/* }
        ></Route>

        <Route path="/about" element={<About mode={mode} />}></Route>
      </Routes> */}
    {/* </Router> */}

    </>
  );
}

export default App;
