import { useState, useEffect } from "react";
import styled from "styled-components";
import { HiMoon, HiSun } from "react-icons/hi";

const ToggleButton = styled.button`
  height: 40px;
  width: 40px;
  background: var(--color-body-alt);
  color: var(--color-text);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 100%;

  :hover {
    background: var(--color-btn);
  }
`;

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  const icon =
    inactiveTheme === "dark" ? <HiMoon size={18} /> : <HiSun size={18} />;

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);
  return (
    <ToggleButton
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      <span>{icon}</span>
    </ToggleButton>
  );
};

export default ThemeToggle;
