function ThemeOption({ theme, setTheme }) {
  const handleClick = () => {
    setTheme(theme);
  };

  return (
    <div
      onClick={handleClick}
      className="theme-option"
      id={`theme-${theme}`}
    ></div>
  );
}

export default ThemeOption;
