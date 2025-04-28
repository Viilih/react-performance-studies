import { useEffect, useState } from "react";
import ThemeOption from "./themeToggle";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="theme-options">
      <ThemeOption theme="light" setTheme={setTheme} />
      <ThemeOption theme="dark" setTheme={setTheme} />
    </div>
  );
}

export default ThemeSwitcher;
