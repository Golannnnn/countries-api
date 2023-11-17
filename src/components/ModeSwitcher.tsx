import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "./Icons";
import styled from "styled-components";

export default function ModeSwitcher() {
  const { lightMode, toggleMode } = useContext(ThemeContext);
  const icon: JSX.Element = lightMode ? (
    <MoonIcon width={30} />
  ) : (
    <SunIcon width={30} />
  );

  return <S.Button onClick={toggleMode}>{icon}</S.Button>;
}

const S = {
  Button: styled.button<{ theme: object }>`
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    transition: 0.5s;
    &:hover {
      background-color: ${({ theme }) => theme.iconBg};
      box-shadow: ${({ theme }) => theme.iconShadow};
    }
  `,
};
