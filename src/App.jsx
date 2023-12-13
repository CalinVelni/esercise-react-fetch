import "./App.scss";
import { useEffect } from "react";
import { useState } from "react";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((obj) => setCountries(obj))
        .catch((error) => console.error(error));
  }, []);

  return (<>
      <SearchBar
        value={searchValue}
        onChange={(newValue) => {
          setSearchValue(newValue);
        }}
        onSearch={() => {
          fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
            .then((response) => response.json())
            .then((obj) => setCountries(obj))
            .catch((error) => console.error(error));
          setSearchValue("");
        }}
      />
      <div id="cardsWrapper">
        {countries.map((country, i)=> (
          <CountryCard
            key={`country-${i}`}
            countryName={country.name.common}
            flagUrl={country.flags.svg}
            population={country.population}
            capital={country.capital}
          />
        ))}
      </div>
  </>);
}

export default App;
