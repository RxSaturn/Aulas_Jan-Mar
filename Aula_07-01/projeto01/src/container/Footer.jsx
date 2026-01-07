{
  /* Uso de children */
}
const Footer = ({ children, login }) => {
  return (
    <h5>
      Mensagem do sistema para {login}: {children}
    </h5>
  );
};

export default Footer;
