import { useState } from "react";
import styles from "./App.module.css";
import Display from "./Component/Display";
import ButtonContainer from "./Component/ButtonContainer";

function App() {
  const [calVal, setCalVal] = useState("");
  const buttonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.container}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer buttonClick={buttonClick}></ButtonContainer>
    </div>
  );
}

export default App;
