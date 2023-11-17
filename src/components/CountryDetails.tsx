import { CommonBox } from "./CommonBox";
import { BackIcon } from "./Icons";
import { Country as CountryInterface } from "./MainContent";
import styled from "styled-components";
import data from "../data/countries.json";

interface CountryDetailsProps {
  country: CountryInterface;
  handleBack: () => void;
  handleSelectCountry: (name: string) => void;
}

export default function CountryDetails({
  country,
  handleBack,
  handleSelectCountry,
}: CountryDetailsProps) {
  function renderMultipleItems(items: object[]) {
    if (!items?.length) return "-";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return items.map((item: any, index) => {
      if (index === items.length - 1) {
        return <span key={item.name}>{item.name}</span>;
      }
      return <span key={item.name}>{`${item.name}, `}</span>;
    });
  }

  function renderBorderCountries(countries: string[]) {
    if (!countries?.length) return "-";
    return countries.map((country) => {
      const borderCountry = getCountryByCode(country)?.name;
      return (
        <S.Border
          key={country}
          onClick={() => handleSelectCountry(borderCountry as string)}
        >
          {borderCountry}
        </S.Border>
      );
    });
  }

  function getCountryByCode(code: string) {
    return data.find((country) => country.alpha3Code === code);
  }

  return (
    <S.Container>
      <S.BackButton onClick={handleBack}>
        <BackIcon width={20} />
        <span>Back</span>
      </S.BackButton>
      <S.DetailsContainer>
        <S.ImageWrapper>
          <S.Image src={country.flag} alt={`${country.name} flag`} />
        </S.ImageWrapper>
        <S.RightContainer>
          <h1>{country.name}</h1>
          <S.FactsWrapper>
            <S.LeftFacts>
              <S.FactTitle>
                Native Name:<S.Fact>{country.nativeName}</S.Fact>
              </S.FactTitle>
              <S.FactTitle>
                Population:<S.Fact>{country.population}</S.Fact>
              </S.FactTitle>
              <S.FactTitle>
                Region:<S.Fact>{country.region}</S.Fact>
              </S.FactTitle>
              <S.FactTitle>
                Sub Region:
                <S.Fact>{country.subregion ? country.subregion : "-"}</S.Fact>
              </S.FactTitle>
              <S.FactTitle>
                Capital:
                <S.Fact>{country.capital ? country.capital : "-"}</S.Fact>
              </S.FactTitle>
            </S.LeftFacts>
            <S.RightFacts>
              <S.FactTitle>
                Top Level Domain:<S.Fact>{country.topLevelDomain}</S.Fact>
              </S.FactTitle>
              <S.FactTitle>
                Currencies:
                <S.Fact>
                  {renderMultipleItems(country.currencies as object[])}
                </S.Fact>
              </S.FactTitle>
              <S.FactTitle>
                Languages:
                <S.Fact>{renderMultipleItems(country.languages)}</S.Fact>
              </S.FactTitle>
            </S.RightFacts>
          </S.FactsWrapper>
          <S.BordersWrapper>
            <b>Border Countries:</b>
            {renderBorderCountries(country.borders as string[])}
          </S.BordersWrapper>
        </S.RightContainer>
      </S.DetailsContainer>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    gap: 3rem;
  `,
  BackButton: styled(CommonBox)<{ theme: object }>`
    display: flex;
    font-size: 0.9rem;
    align-items: center;
    width: min-content;
    padding: 0.5rem 1.5rem;
    gap: 0.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.element};
  `,
  DetailsContainer: styled.div<{ theme: object }>`
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    align-items: center;
    color: ${({ theme }) => theme.text};
  `,
  ImageWrapper: styled(CommonBox)<{ theme: object }>`
    display: flex;
    min-width: 300px;
    max-width: 600px;
    padding: 1rem;
    background-color: ${({ theme }) => theme.element};
  `,
  Image: styled.img`
    width: 100%;
  `,
  RightContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    flex: 1;
  `,
  FactsWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 3rem;
  `,
  LeftFacts: styled.div``,
  RightFacts: styled.div``,
  FactTitle: styled.p`
    display: flex;
    font-weight: 600;
    margin-bottom: 0.3rem;
    font-size: 1rem;
  `,
  Fact: styled.span`
    font-weight: 300;
    margin-left: 0.3rem;
  `,
  BordersWrapper: styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  `,
  Border: styled(CommonBox)<{ theme: object }>`
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.element};
    width: max-content;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.01);
    }
  `,
};
