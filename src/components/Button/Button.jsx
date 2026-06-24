import "./Button.css";

function Button({
  text,
  onClick,
  type = "button",
  className = ""
}) {

  return (
    <button
      className={`custom-btn ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );

}

export default Button;