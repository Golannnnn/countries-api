import styled from "styled-components";
import CardList from "./CardList";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import { useState } from "react";

export interface Country {
  subregion: string[];
  topLevelDomain: string;
  currencies: object[] | undefined;
  languages: object[];
  name: string;
  flag: string;
  population: number;
  region: string;
  capital?: string;
  nativeName?: string;
  borders?: string[] | undefined;
}

interface MainContentProps {
  countries: Country[];
  handleSelectCountry: (name: string) => void;
}

export default function MainContent({
  countries,
  handleSelectCountry,
}: MainContentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("Filter by region");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleRegion = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    setRegion(target.innerText);
  };

  const filteredCountries = countries.filter((country) => {
    const regex = new RegExp(searchTerm ?? "", "gi");
    const match =
      regex.test(country.name) ||
      regex.test(country.nativeName as string) ||
      regex.test(country.capital as string);
    return match;
  });

  const countriesToShow = searchTerm ? filteredCountries : countries;

  const countriesToShowByRegion = countriesToShow.filter(
    (country) => country.region.toLowerCase() === region.toLowerCase()
  );

  let finalCountriesToShow;

  if (region === "Filter by region" || region === "All regions") {
    finalCountriesToShow = countriesToShow;
  } else {
    finalCountriesToShow = countriesToShowByRegion;
  }

  return (
    <S.MainContent>
      <S.SearchRow>
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <Filter region={region} handleRegion={handleRegion} />
      </S.SearchRow>
      <CardList
        countries={finalCountriesToShow}
        handleSelectCountry={handleSelectCountry}
      />
    </S.MainContent>
  );
}

const S = {
  MainContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    flex: 1;
    flex-grow: 1;
    height: 100%;
  `,
  SearchRow: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 3rem;
  `,
};
