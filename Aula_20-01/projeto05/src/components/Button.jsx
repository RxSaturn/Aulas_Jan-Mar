import "./Button.css";
const Button = ({ label, nome, tipo, onClick, disabled }) => {
  return (
    <button
      className="btn"
      id={nome}
      name={nome}
      type={tipo}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
