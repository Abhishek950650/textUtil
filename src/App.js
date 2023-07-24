import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // here we set false for darkmode
  const [alert, setAlert] = useState(null);

  const showAlert = ((message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  })

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Has Been Enabled", "success");

    }
  };
  return (
    <>
      <Navbar
        title="textUtils"
        homeText="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
