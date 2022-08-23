import { useEffect, useState } from "preact/hooks";
import Styles from './styles.module.scss';


export default function ThemeToggle() {
  const [Theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : light))
  } 

  let darkMode = false;
  useEffect(() => {
    console.log(`Is in dark mode? ${darkMode}`);
  }, [darkMode]);


  return (
    <Theme.Provider value={{ Theme, toggleTheme }}>
    <div className={Styles.switch} >
    <input type="checkbox" id="switch"  onChange={toggleTheme} checked={Theme === "dark"}/><label for="switch">Toggle</label>
  </div>
  </Theme.Provider>



  );
}
