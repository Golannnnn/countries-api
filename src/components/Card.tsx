import styled from "styled-components";
import { CommonBox } from "./CommonBox";
import { Country as CountryInterface } from "./MainContent";

export default function Card({
  flag,
  name,
  population,
  region,
  capital,
}: CountryInterface) {
  return (
    <S.Card id={name}>
      <S.Flag src={flag} />
      <S.Body id={name}>
        <S.Title>{name}</S.Title>
        <S.DescriptionTitle>
          Population:<S.Description>{population}</S.Description>
        </S.DescriptionTitle>
        <S.DescriptionTitle>
          Region:<S.Description>{region}</S.Description>
        </S.DescriptionTitle>
        <S.DescriptionTitle>
          Capital:<S.Description>{capital}</S.Description>
        </S.DescriptionTitle>
      </S.Body>
    </S.Card>
  );
}

const S = {
  Card: styled(CommonBox)<{ theme: object }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 250px;
    height: 350px;
    background-color: ${({ theme }) => theme.element};
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.01);
    }
  `,
  Flag: styled.img`
    object-fit: cover;
    width: 100%;
    height: 50%;
    border-radius: 5px 5px 0 0;
  `,
  Body: styled.div<{ theme: object }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    color: ${({ theme }) => theme.text};
  `,
  Title: styled.p`
    font-weight: 800;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  `,
  DescriptionTitle: styled.p`
    display: flex;
    font-weight: 600;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
  `,
  Description: styled.span`
    font-weight: 300;
    margin-left: 0.3rem;
  `,
};
