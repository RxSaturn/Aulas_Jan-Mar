import { useForm } from "react-hook-form";
import CardProduct from "./CardProduct";

const FormProduct = ({ produtos }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (dados) => {
    //Limpa o formulário após o envio
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Faça suas compras</h1>
      {produtos.map((p) => {
        <div>
          <CardProduct
            title={p.title}
            description={p.description}
            category={p.category}
            rate={p.rate}
            countRating={p.countRating}
          />
          <p>
            <label htmlFor="quantidade">
              Quantidade:
              <input
                id="quantidade"
                type="number"
                min="1"
                {...register("quantidade", { required: true })}
              />
            </label>
            <button type="submit">Adicionar ao carrinho</button>
          </p>
        </div>;
      })}
    </form>
  );
};

export default FormProduct;
