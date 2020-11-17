import React, { useState, useEffect } from "react";
import getData from "../services/getData";
import useSearchCountries from "../hooks/useSearchCountries";

import FilterSearch from "../components/FilterSearch";
import Cards from "../components/Cards";

const API = "https://restcountries.eu/rest/v2/";



function Home() {
  const [filteredRegion, setFilteredRegion] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [numberCountries, setNumberCountries] = useState(12);
  const [query, setQuery, filteredCountries] = useSearchCountries(countries);

  useEffect(() => {
    if (!countries.length) {
      getData(API)
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
          setIsLoading(false);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  function giveMoreCountries() {
    setNumberCountries(numberCountries + 8);
  }

  return (
    <>
      <FilterSearch
        setFilteredRegion={setFilteredRegion}
        query={query}
        setQuery={setQuery}
      />
      <Cards
        isLoading={isLoading}
        giveMoreCountries={giveMoreCountries}
        countries={filteredCountries}
        numberCountries={numberCountries}
        query={query}
        filteredRegion={filteredRegion}
      />
    </>
  );
}



export default Home;
