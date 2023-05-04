import { useState, useEffect } from "react";

function Button() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    // <div className="h-screen bg-white dark:bg-black flex justify-center items-center">
    <button
      className="bg-green-200 p-1 rounded-3xl"
      onClick={handleThemeSwitch}
    >
      Dark
    </button>
    // </div>
  );
}

export default Button;
