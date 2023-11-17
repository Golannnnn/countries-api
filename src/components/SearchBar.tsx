import styled from "styled-components";
import { SearchIcon } from "./Icons";
import { CommonBox } from "./CommonBox";

interface SearchBarProps {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({
  searchTerm,
  handleSearch,
}: SearchBarProps) {
  return (
    <S.SearchBar>
      <SearchIcon width={20} />
      <S.SearchInput
        type="text"
        placeholder="Search for a country..."
        onChange={handleSearch}
        value={searchTerm}
      />
    </S.SearchBar>
  );
}

const S = {
  SearchBar: styled(CommonBox)<{ theme: object }>`
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 0 1rem;
    min-width: 300px;
    width: 450px;
    height: 3rem;
    background-color: ${({ theme }) => theme.element};
  `,

  SearchInput: styled.input<{ theme: object }>`
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 1rem;
    outline: none;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text};
    &::placeholder {
      color: ${({ theme }) => theme.placeholder};
    }
  `,
};
