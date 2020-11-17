import { useMemo, useState } from "react";

function useSearchCountries(countries) {
  const [query, setQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useMemo(() => {
    const result = countries.filter((country) => {
      return country.name.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredCountries(result);
  }, [countries, query]);

  return [query, setQuery, filteredCountries];
}

export default useSearchCountries;
