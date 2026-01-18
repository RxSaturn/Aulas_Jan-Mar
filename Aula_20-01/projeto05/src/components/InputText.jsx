const InputText = ({ nome, tipo, label }) => {
  return (
    <>
      <label htmlFor={nome}>
        {label}:
        <input type={tipo} id={nome} name={nome} />
      </label>
    </>
  );
};

export default InputText;
