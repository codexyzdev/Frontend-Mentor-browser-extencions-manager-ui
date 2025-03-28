import { useState, useEffect } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [iconSrc, setIconSrc] = useState("../assets/images/icon-moon.svg");
  const [iconAlt, setIconAlt] = useState("Dark Mode");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      setIconSrc("../assets/images/icon-sun.svg");
      setIconAlt("Light Mode");
    } else {
      document.documentElement.classList.remove("dark");
      setIconSrc("../assets/images/icon-moon.svg");
      setIconAlt("Dark Mode");
    }
  }, [isDark]);

  const toggleTheme = (e) => {
    console.log(e);

    setIsDark(!isDark);
  };

  return (
    <button
      className='p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 shadow-xs transition-colors duration-300 ease-in-out'
      onClick={(e) => toggleTheme(e)}
    >
      <img src={iconSrc} alt={iconAlt} />
    </button>
  );
}

export default ThemeToggle;
