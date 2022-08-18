import { useEffect, useState } from "preact/hooks";
import Styles from './styles.module.scss';

import { FunctionalComponent } from "preact";

export default function ThemeToggle(): FunctionalComponent {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);



  return (

    <div className={Styles.switch}>
    <input type="checkbox" id="switch" onClick={handleClick}/><label for="switch">Toggle</label>
  </div>



  );
}

// <label className={Styles.switch}>
// <input typeName={Styles.checkbox}/>
//   <switch className={Styles.slider.round} onClick={handleClick}>{theme === "light" ? "🌙" : "🌞"}
//   </switch>
// </label>