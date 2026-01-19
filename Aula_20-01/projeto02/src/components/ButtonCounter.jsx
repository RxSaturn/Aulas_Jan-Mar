const ButtonCounter = ({ handleIncrementar, label }) => {
  return (
    <button onClick={handleIncrementar} style={{ border: "2px solid #008CBA" }}>
      {label}
    </button>
  );
};

export default ButtonCounter;
