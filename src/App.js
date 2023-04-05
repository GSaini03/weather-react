import React from "react";
import Footer from "./Footer";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather defaultCity="New York" />
        </header>
        <Footer />
      </div>
    </div>
  );
}
