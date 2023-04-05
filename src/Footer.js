import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <span>
        {" "}
        This project was coded by {""}
        <a href="/" target="_blank" rel="noreferrer">
          Geetanjali Saini {""}
        </a>
        and is {""}
        <a
          href="https://github.com/GSaini03/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          {""}
          open-sourced on GitHub
        </a>
      </span>
    </div>
  );
}
