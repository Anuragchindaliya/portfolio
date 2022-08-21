import React, { useEffect } from "react";
import useDarkMode from "../Hooks/useDarkMode";
const ThemeBtn = () => {
  const { isDarkMode, toggle } = useDarkMode();
  const colorTheme = isDarkMode ? "dark" : "light";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(!isDarkMode ? "dark" : "light");
    localStorage.setItem("next-dark", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  return (
    <button
      suppressHydrationWarning
      onClick={toggle}
      data-tooltip-target="default-navbar-example-toggle-dark-mode-tooltip"
      type="button"
      data-toggle-dark="light"
      className="toggle-dark-state-example mr-2 flex items-center rounded-lg border border-gray-200 bg-white p-2 text-xs font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500"
      title={isDarkMode ? "Dark Mode" : "Light Mode"}
    >
      {isDarkMode ? (
        <svg
          aria-hidden="true"
          data-toggle-icon="moon"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          data-toggle-icon="sun"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
      <span className="sr-only">Toggle dark/light mode</span>
    </button>
  );
};

export default ThemeBtn;
