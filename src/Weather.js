import React from "react";
import SearchEngine from "./SearchEngine";
import Overview from "./Overview";
import Footer from "./Footer";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <SearchEngine />
          <Overview />
        </div>
        <Footer />
      </div>
    </div>
  );
}
