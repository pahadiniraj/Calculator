import styles from "./ButtonContainer.module.css";
function ButtonContainer({ buttonClick }) {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.container}>
      {buttons.map((button) => (
        <button
          key={button}
          className={`${styles.button} btn btn-info`}
          onClick={() => buttonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}
export default ButtonContainer;
