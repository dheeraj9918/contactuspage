import styles from "./Button.module.css";
const Button = (props) => {
  const {outLine,icon,text,...rest}= props
  return (
    <button {...rest} className={outLine ? styles.sec_btn: styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
