import styled from "styled-components";
import Card from "./Card";
import { CommonBox } from "./CommonBox";
import { Country as CountryInterface } from "./MainContent";
import { useState } from "react";

interface CardListProps {
  countries: CountryInterface[];
  handleSelectCountry: (name: string) => void;
}

export default function CardList({
  countries,
  handleSelectCountry,
}: CardListProps) {
  const [numberOfCountriesToShow, setNumberOfCountriesToShow] = useState(12);

  const countriesToShow = countries.slice(0, numberOfCountriesToShow);

  const renderCards = countriesToShow.map((country: CountryInterface) => {
    return (
      <Card
        key={country.name}
        flag={country.flag}
        name={country.name}
        population={country.population}
        region={country.region}
        capital={country.capital}
        subregion={[]}
        topLevelDomain={""}
        currencies={undefined}
        languages={[]}
      />
    );
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const targetId = target.closest("div")?.id;
    handleSelectCountry(targetId as string);
  };

  const handleShowMore = () => {
    setNumberOfCountriesToShow((prev) => prev + 12);
  };

  const showButton = numberOfCountriesToShow < countries.length;

  return (
    <>
      <S.CardList onClick={handleClick}>{renderCards}</S.CardList>
      {showButton && <S.Button onClick={handleShowMore}>Show more</S.Button>}
    </>
  );
}

const S = {
  CardList: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: center;
    gap: 3rem;
    width: 100%;
    height: 100%;
  `,
  Button: styled(CommonBox)<{ theme: object }>`
    background-color: ${({ theme }) => theme.element};
    color: ${({ theme }) => theme.text};
    border: none;
    border-radius: 5px;
    padding: 1rem 3rem;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 3rem;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.01);
    }
  `,
};
