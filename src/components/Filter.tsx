import { useState, useEffect } from "react";
import styled from "styled-components";
import { CommonBox } from "./CommonBox";
import { SelectorIcon } from "./Icons";

interface FilterProps {
  region: string;
  handleRegion: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export default function Filter({ region, handleRegion }: FilterProps) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (
      target.id !== "filter-selector" &&
      !target.closest("#filter-selector")
    ) {
      setIsSelected(false);
    }
  };

  const handleClick = () => {
    setIsSelected((prev) => !prev);
  };

  const selectorClassName: string = isSelected ? "open" : "closed";

  return (
    <S.FilterContainer id="filter-selector" onClick={handleClick}>
      <S.FilterValue>{region}</S.FilterValue>
      <S.FilterSelector $isSelected={isSelected} onClick={handleRegion}>
        <S.FilterOption $first>Africa</S.FilterOption>
        <S.FilterOption>Americas</S.FilterOption>
        <S.FilterOption>Asia</S.FilterOption>
        <S.FilterOption>Europe</S.FilterOption>
        <S.FilterOption>Oceania</S.FilterOption>
        <S.FilterOption $last>All regions</S.FilterOption>
      </S.FilterSelector>
      <SelectorIcon className={selectorClassName} />
    </S.FilterContainer>
  );
}

const S = {
  FilterContainer: styled(CommonBox)<{ theme: object }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    min-width: 200px;
    height: 3rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.element};
  `,
  FilterSelector: styled(CommonBox)<{ theme: object; $isSelected: boolean }>`
    visibility: ${({ $isSelected }) => ($isSelected ? "visible" : "hidden")};
    position: absolute;
    top: 3.4rem;
    left: 0;
    min-width: 200px;
    height: max-content;
    background-color: ${({ theme }) => theme.element};
    z-index: 1;
    cursor: default;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
  FilterValue: styled.span<{ theme: object }>`
    color: ${({ theme }) => theme.text};
  `,
  FilterOption: styled.span<{
    theme: object;
    $first?: boolean;
    $last?: boolean;
  }>`
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    width: 100%;
    padding: 0.4rem 0rem 0.4rem 1rem;
    padding-top: ${({ $first }) => $first && "0.6rem"};
    padding-bottom: ${({ $last }) => $last && "0.6rem"};
    border-radius: ${({ $first }) => $first && "0.4rem 0.4rem 0 0"};
    border-radius: ${({ $last }) => $last && "0 0 0.4rem 0.4rem"};
    &:hover {
      background-color: ${({ theme }) => theme.hover};
    }
  `,
};
