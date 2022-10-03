import "./PaletaDetalhesModal.css";
import Modal from "../Modal/Modal";

function PaletaDetalhesModal({ paleta, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="PaletaDetalhesModal">
        <div>
          <div className="PaletaDetalhesModal__priority"> {paleta.priority} </div>
          <div className="PaletaDetalhesModal__deadline">
            {" "}
            R$ {Number(paleta.deadline).toFixed(2)}{" "}
          </div>
          <div className="PaletaDetalhesModal__note">
            {" "}
            <b>Name:</b> {paleta.name}{" "}
          </div>
          {paleta.type && (
            <div className="PaletaDetalhesModal__note">
              {" "}
              <b>type:</b> {paleta.type}{" "}
            </div>
          )}
          <div className="PaletaDetalhesModal__note">
            {" "}
            <b>Descrição:</b> {paleta.note}{" "}
          </div>
        </div>
        <img
          className="PaletaDetalhesModal__link"
          src={paleta.link}
          alt={`Paleta de ${paleta.name}`}
        />
      </div>
    </Modal>
  );
}

export default PaletaDetalhesModal;