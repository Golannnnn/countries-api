import styled from "styled-components";
import ModeSwitcher from "./ModeSwitcher";
import { CommonBox } from "./CommonBox";

export default function Header() {
  return (
    <S.Header>
      <h2>Where in the world?</h2>
      <ModeSwitcher />
    </S.Header>
  );
}

const S = {
  Header: styled(CommonBox)<{ theme: object }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 3rem;
    z-index: 1;
    border-radius: 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
    background-color: ${({ theme }) => theme.element};
    color: ${({ theme }) => theme.text};
  `,
};
