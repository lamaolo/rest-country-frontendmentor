import React from "react";
import { Link } from "react-router-dom";

import "../static/styles/components/Cards.css";
import loadingGif from "../static/imgs/loading-gif.gif";

function Cards({
  isLoading,
  countries,
  giveMoreCountries,
  query,
  filteredRegion,
  numberCountries,
}) {
  let countriesToRender;
  let showLoadMoreButton;

  if (query.length < 1 && filteredRegion === "") {
    showLoadMoreButton = true;
  } else {
    showLoadMoreButton = false;
  }

  if (filteredRegion.length > 0) {
    countriesToRender = countries.filter(
      (country) => country.region === filteredRegion
    );
  } else {
    countriesToRender = countries.slice(0, numberCountries);
  }

  if (isLoading) {
    return (
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-12">
            <img src={loadingGif} alt="Cargando..." />
          </div>
        </div>
      </div>
    );
  }

  if (countriesToRender.length < 1) {
    return (
      <div className="container">
        <div className="row mb-4">
          <h2>{filteredRegion}</h2>
        </div>
        <div className="row">
          <h2>
            <strong>
              No country was found. Try searching again or changing the filters.
            </strong>
          </h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row pl-3 mb-3">
          <h2>{filteredRegion ? filteredRegion : "All countries"}</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {countriesToRender.map((country, index) => (
            <Link
              className="unstyled-text  col-12 col-md-6 col-lg-4 col-xl-3 country-card"
              key={index}
              to={`/country/${country.alpha3Code.toLowerCase()}`}
            >
              <div
                className="card"
                style={{ maxWidth: "350px", margin: "15px 0" }}
              >
                <img
                  src={country.flag}
                  className="card-img-top"
                  alt={country.name}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{country.name}</strong>
                  </h5>
                  <p className="card-text d-flex flex-column">
                    <span>
                      <strong>Population: </strong>
                      {country.population}
                    </span>
                    <span>
                      <strong>Region: </strong>
                      {country.region}
                    </span>
                    <span>
                      <strong>Capital: </strong>
                      {country.capital}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}

          {showLoadMoreButton && (
            <div className="container my-3">
              <button
                onClick={() => giveMoreCountries()}
                className="btn btn-primary py-3 btn-block"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cards;
