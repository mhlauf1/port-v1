import React from "react";
import useLocalStorage from "use-local-storage";
import Sqaure from './components/Square';
import "./App.css";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <h1>ml products</h1>
      <button onClick={switchTheme}>
        Switch to { theme === 'light' ? 'Dark' : 'Light' } theme
      </button>
      <Sqaure />
    </div>
  );
}

export default App;
