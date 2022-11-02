import classes from "./Button.module.css";

const Button = (props) => {
  const buttonClass = `${classes.button} ${props.className}`;
  const buttonType = props.type === "" ? "button" : props.type;

  return (
    <div className={buttonClass}>
      <button type={buttonType} onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
};

export default Button;
