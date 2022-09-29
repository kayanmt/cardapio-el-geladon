import PaletaLista from "./PaletaLista";
import './Home.css';
import sacola from "../assets/icons/sacola.svg";
import logo from "../assets/logo.svg";
import AdicionaPaletaModal from "../components/AdicionaPaletaModal/AdicionaPaletaModal";
import { useState } from "react";

function Home() {
    const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] = useState(false);
    const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();
    return (
    <div className="Home">    
    <Navbar createPaleta={() => setCanShowAdicionaPaletaModal(true)} />
    <div className="Home__header Header">
  <div className="row">
      <div className="Header__logo Logo">
      <img
          src={logo}
          width="70px"
          alt="Logo El Geladon"
          className="Logo__icone"
      />
      <span className="Logo__titulo"> El Geladon </span>
      </div>
      <div className="Header__opcoes Opcoes">
      <div className="Opcoes__sacola Sacola">
          <img
          src={sacola}
          width="40px"
          className="Sacola__icone"
          alt="Sacola de compras"
          />
      </div>
      </div>
  </div>
</div>  
        <div className="Home__container">
        <PaletaLista paletaCriada={paletaParaAdicionar} />
                {
                    canShowAdicionaPaletaModal && (
                    <AdicionaPaletaModal
                        closeModal={() => setCanShowAdicionaPaletaModal(false)}
                        onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)} />
                    )
                }
        <PaletaLista />
        {
                    canShowAdicionaPaletaModal &&
                    (<AdicionaPaletaModal closeModal={() => setCanShowAdicionaPaletaModal(false)} />)
                }
        <AdicionaPaletaModal />
        </div>
    </div>
    
  );
  {
    canShowAdicionaPaletaModal &&
    <AdicionaPaletaModal
        closeModal={() => setCanShowAdicionaPaletaModal(false)}
        onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)}
        />
}
  }
  
  export default Home;