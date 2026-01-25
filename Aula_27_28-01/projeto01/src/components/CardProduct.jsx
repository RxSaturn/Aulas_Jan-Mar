const CardProduct = ({
  title,
  description,
  price,
  category,
  rate,
  countRating,
}) => {
  return (
    <>
      <h4>
        Produto: {title} - $ {price}
      </h4>
      <p>
        {category}: {description}
      </p>
      <p>
        Veja o que os clientes falaram desse produto:
        <span>Quantidade de avaliações: {countRating}</span>
        <span>Nota média das avaliações: {rate}</span>
      </p>
    </>
  );
};

export default CardProduct;
