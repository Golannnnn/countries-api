import { ReactNode } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface IconProps {
  width?: number;
  className?: string;
}

export function BackIcon({ width }: IconProps) {
  const { lightMode } = useContext(ThemeContext);

  return (
    <Icon width={width} stroke={lightMode ? "grey" : "#fff"}>
      {/* make a path for a arrow pointing to the left */}
      <path d="M5 12h19" />
      <path d="M12 5l-7 7l7 7" />
    </Icon>
  );
}

export function SelectorIcon({ width, className }: IconProps) {
  const { lightMode } = useContext(ThemeContext);

  return (
    <Icon
      width={width}
      stroke={lightMode ? "grey" : "#fff"}
      className={className}
    >
      <path d="M5 9l4 4l4 -4" />
    </Icon>
  );
}

export function SearchIcon({ width }: IconProps) {
  const { lightMode } = useContext(ThemeContext);
  return (
    <Icon width={width} stroke={lightMode ? "grey" : "#fff"}>
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </Icon>
  );
}

export function MoonIcon({ width }: IconProps) {
  return (
    <Icon width={width}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
        strokeWidth="0"
        fill="currentColor"
      />
    </Icon>
  );
}

export function SunIcon({ width }: IconProps) {
  return (
    <Icon width={width}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
      <path d="M6.343 17.657l-1.414 1.414" />
      <path d="M6.343 6.343l-1.414 -1.414" />
      <path d="M17.657 6.343l1.414 -1.414" />
      <path d="M17.657 17.657l1.414 1.414" />
      <path d="M4 12h-2" />
      <path d="M12 4v-2" />
      <path d="M20 12h2" />
      <path d="M12 20v2" />
    </Icon>
  );
}

interface IconWrapperProps {
  width?: number;
  stroke?: string;
  children: ReactNode;
  className?: string;
}

function Icon({
  width = 30,
  stroke = "#fff",
  className,
  children,
}: IconWrapperProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={stroke}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{
        ...(className === "open" && { transform: "scaleY(-1)" }),
        transition: "0.5s",
      }}
    >
      {children}
    </svg>
  );
}
