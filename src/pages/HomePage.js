import { Botao } from "../style";
import { useNavigate } from "react-router-dom";
import {goToHome, goToProduct, goToProfile} from '../routes/coordinator'

function HomePage() {
  const navigate = useNavigate()


  return (
    <section>
      <Botao onClick={() => goToHome(navigate)} >
        Página inicial
      </Botao>
      <Botao onClick={() => goToProfile(navigate)} >
        Página de perfil
      </Botao>
      <Botao onClick={() => goToProduct(navigate, `Banana`)} >
        Página de produto
      </Botao>
      <h1>Página inicial</h1>
    </section>
  );
}

export default HomePage;
