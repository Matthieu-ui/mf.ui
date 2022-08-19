import { useEffect, useState } from "preact/hooks";
import Styles from './styles.module.scss';
import { FunctionalComponent } from "preact";

export default function ThemeToggle() {
 



  return (

    <div className={Styles.switch}>
    <input type="checkbox" id="switch" onClick={''}/><label for="switch">Toggle</label>
  </div>



  );
}
