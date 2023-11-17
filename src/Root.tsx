/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useState } from "react";
import data from "./data/countries.json";
import { Country as CountryInterface } from "./components/MainContent";
import CountryDetails from "./components/CountryDetails";

export default function Root() {
  const [countries] = useState<any>(data);
  const [selectedCountry, setSelectedCountry] = useState<
    CountryInterface | any
  >();

  const handleSelectCountry = (name: string) => {
    const selectedCountry = countries.find(
      (country: { name: string }) => country.name === name
    );
    setSelectedCountry(selectedCountry);
  };

  const handleBack = () => {
    setSelectedCountry(null);
  };

  return (
    <S.Root>
      <Header />
      {selectedCountry ? (
        <CountryDetails
          country={selectedCountry}
          handleBack={handleBack}
          handleSelectCountry={handleSelectCountry}
        />
      ) : (
        <MainContent
          countries={countries}
          handleSelectCountry={handleSelectCountry}
        />
      )}
    </S.Root>
  );
}

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `,
};
