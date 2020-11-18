import React, { useState, useEffect } from "react";

import getData from "../services/getData";

import loadingGif from "../static/imgs/loading-gif.gif";

function CardDetail(props) {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(
      `https://restcountries.eu/rest/v2/alpha?codes=${props.match.params.name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.name]);

  if (isLoading) {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <img src={loadingGif} alt="Loading..." />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container my-5">
        <div className="back-button d-flex">
          <h5
            style={{ cursor: "pointer" }}
            onClick={props.history.goBack}
            className="box-shadow px-4 py-2"
          >
            <i className="fas fa-long-arrow-alt-left"></i> Back
          </h5>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <figure className="flag">
              <img
                style={{ width: "100%" }}
                src={country.flag}
                alt={country.name}
              />
            </figure>
          </div>

          <div className="col-12 col-md-6 align-self-center country-details">
            <h3 className="mb-3">
              <strong>{country.name}</strong>
            </h3>
            <div className="row">
              <div className="col-12 col-md-6">
                <p>
                  <strong>Native Name:</strong> {country.nativeName}
                </p>
                <p>
                  <strong>Population:</strong> {country.population}
                </p>
                <p>
                  <strong>Region:</strong> {country.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {country.subregion}
                </p>
                <p>
                  <strong>Capital:</strong> {country.capital}
                </p>
              </div>
              <div className="col-12 mt-3 mt-md-0 col-md-6">
                <p>
                  <strong>Top Level Domain:</strong> {country.topLevelDomain}
                </p>
                <p>
                  <strong>Currencies:</strong>{" "}
                  {country.currencies.map(({ code }) => code + ". ")}
                </p>
                <p>
                  <strong>Languages:</strong>{" "}
                  {country.languages.map(({ name }) => {
                    return name + ". ";
                  })}
                </p>
              </div>
            </div>

            {country.borders.length ? (
              <div className="container mt-5">
                <div className="row align-items-center">
                  <strong className="mr-2">Border Countries:</strong>
                  {country.borders.map((c, index) => (
                    <span key={index} className="mr-2 my-2">
                      <a href={`/country/${c.toLowerCase()}`} className="unstyled-text">
                        <p className="border-country pr-2 pl-2 pt-1 pb-1 box-shadow">
                          {c}
                        </p>
                      </a>
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="container mt-5">
                <div className="row align-items-center">
                  <strong>This country has not border countries.</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


export default CardDetail;
