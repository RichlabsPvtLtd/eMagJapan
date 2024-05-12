import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "./Carousel"; // Corrected to named import
import ImageUploader from "./ImageUploader"; // Corrected to named import
import React, { useState, useEffect } from "react";
import Login from "./Login"; // Assuming Login is default exported

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  useEffect(() => {
    document.title = "E-Mag | RichServer";
  }, []);
  const handleLogout = () => {
    setFileUploaded(false);
    setLoggedIn(false);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <Carousel onLogout={handleLogout} />
      ) : (
        <Login onLogin={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
