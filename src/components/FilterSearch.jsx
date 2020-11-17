import React from "react";

import "../static/styles/components/FilterSearch.css";

function FilterSearch({ setQuery, query, setFilteredRegion }) {
  function handleSearch(e) {
    setQuery(e.target.value);
  }

  function handleDropdown(e) {
    if (e.target.innerText == "All countries") {
      setFilteredRegion("");
    } else {
      setFilteredRegion(e.target.innerText);
    }
  }

  return (
    <div className="container my-5">
      <div className="row  d-flex justify-content-center justify-content-md-between flex-column flex-md-row ">
        <div className="col-12 col-md-6 mb-4">
          <div className="search box-shadow">
            <div className="search__icon">
              <i className="fas fa-search"></i>
            </div>
            <div className="search__input ">
              <input
                type="text"
                placeholder="Search for a country"
                autoComplete="off"
                onChange={handleSearch}
                value={query}
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 d-md-flex justify-content-end">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Filter by region
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={handleDropdown}
              >
                All countries
              </div>
              <div
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={handleDropdown}
              >
                Africa
              </div>
              <div
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={handleDropdown}
              >
                Americas
              </div>
              <div
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={handleDropdown}
              >
                Asia
              </div>
              <div
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={handleDropdown}
              >
                Europe
              </div>
              <div
                className="dropdown-item"
                style={{ cursor: "pointer" }}
                onClick={handleDropdown}
              >
                Oceania
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSearch;
