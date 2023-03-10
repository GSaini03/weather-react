import React from "react";

import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <form className="mb-4">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city"
            className="form-control shadow-sm border border-success p-2 border-opacity-10 rounded-pill"
            autoComplete="off"
            autoFocus="on"
          />
        </div>

        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="form control shadow-sm border border-success p-2 border-opacity-10 rounded-pill btn btn-info w-100"
          />
        </div>
      </div>
    </form>
  );
}
