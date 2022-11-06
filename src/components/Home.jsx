import PaletaLista from "./PaletaLista";
import './Home.css';
import sacola from "../assets/icons/sacola.svg";
import logo from "../assets/logo.svg";
import AdicionaPaletaModal from "../components/AdicionaPaletaModal/AdicionaPaletaModal";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import AdicionaEditaPaletaModal from "components/AdicionaEditaPaletaModal/AdicionaEditaPaletaModal";
import { ActionMode } from "constants/index";
import DeletaPaletaModal from "components/DeletaPaletaModal/DeletaPaletaModal";
import SacolaModal from "components/SacolaModal/SacolaModal";
import { SacolaService } from "services/SacolaService";

function Home() {
    const [canShowAdicionaPaletaModal, setCanShowAdicionaPaletaModal] = useState(false);
    const [paletaEditada, setPaletaEditada] = useState();
    const [paletaParaAdicionar, setPaletaParaAdicionar] = useState();
    const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);
    const [paletaParaEditar, setPaletaParaEditar] = useState();
    const [paletaParaDeletar, setPaletaParaDeletar] = useState();
    const [paletaRemovida, setPaletaRemovida] = useState();
    const [canOpenBag, setCanOpenBag] = useState();
    
    const handleDeletePaleta = (paletaToDelete) => {
        setPaletaParaDeletar(paletaToDelete);
      }
      
      
      const handleUpdatePaleta = (paletaToUpdate) => {
        setPaletaParaEditar(paletaToUpdate);
        setCanShowAdicionaPaletaModal(true);
      }

      const handleCloseModal = () => {
        setCanShowAdicionaPaletaModal(false);
        setPaletaParaAdicionar();
        setPaletaParaDeletar();
        setPaletaParaEditar();
        setModoAtual(ActionMode.NORMAL);
      }

      const abrirSacola = async () => {
        const lista = JSON.parse(localStorage.getItem('sacola'));
        const sacola = lista.filter(i => i.quantidade > 0);
      
        await SacolaService.create(sacola)
      
        setCanOpenBag(true)
      }   

    return (
    <div className="Home">    
    <Navbar
  mode={modoAtual}
  createPaleta={() => setCanShowAdicionaPaletaModal(true)}
  deletePaleta={() => handleActions(ActionMode.DELETAR)}
  openBag={abrirSacola}
  updatePaleta={() =>  handleActions(ActionMode.ATUALIZAR)} />
    <div className="Home__header Header">
  <div className="row">
      <div className="Header__logo Logo">
      <img
          src={logo}
          width="70px"
          alt="Logo El Geladon"
          className="Logo__icone"
      />
      <span className="Logo__type"> El Geladon </span>
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
        <PaletaLista
  mode={modoAtual}
  paletaCriada={paletaParaAdicionar}
  paletaEditada={paletaEditada}
  paletaRemovida={paletaRemovida}
  deletePaleta={handleDeletePaleta}
  updatePaleta={handleUpdatePaleta} />
                {
                    canShowAdicionaPaletaModal && (
                    <AdicionaPaletaModal
                        closeModal={() => setCanShowAdicionaPaletaModal(false)}
                        onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)} />
                    )
                }

{
  canShowAdicionaPaletaModal &&
  <AdicionaEditaPaletaModal
    mode={modoAtual}
    paletaToUpdate={paletaParaEditar}
    onUpdatePaleta={(paleta) => setPaletaEditada(paleta)}
    closeModal={handleCloseModal}
    onCreatePaleta={(paleta) => setPaletaParaAdicionar(paleta)}
    />
};

{
  paletaParaDeletar &&
  <DeletaPaletaModal
    paletaParaDeletar={paletaParaDeletar}
    closeModal={handleCloseModal}
    onDeletePaleta={(paleta) => setPaletaRemovida(paleta)}
    />
}

{
  canOpenBag &&
  <SacolaModal closeModal={() => setCanOpenBag(false)} />
}

        </div>
    </div>

  );
  };
  
  export default Home;