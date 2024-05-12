import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "./Carousel"; // Corrected to named import
import React, { useState } from "react";
import Login from "./Login"; // Assuming Login is default exported

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {loggedIn ? (
        <Carousel onLogout={setLoggedIn} />
      ) : (
        <Login onLogin={setLoggedIn} />
      )}
    </div>
  );
}

export default App;
