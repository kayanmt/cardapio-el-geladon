import "./AdicionaPaletaModal.css";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { PaletaService } from "../../services/PaletaService";

function AdicionaPaletaModal({ closeModal, onCreatePaleta }) {
    const form = {
        deadline: "",
        name: "",
        type: "",
        note: "",
        link: "",
    };

    const [state, setState] = useState(form);
    const [canDisable, setCanDisable] = useState(true);

    const canDisableSendButton = () => {
        const response = !Boolean(
            state.note.length &&
            state.link.length &&
            state.name.length &&
            state.deadline.length
        );

        setCanDisable(response);
    };

    const handleChange = (e, name) => {
        setState({ ...state, [name]: e.target.value });
    };

    useEffect(() => {
        canDisableSendButton();
    });

    const createPaleta = async () => {
        const renomeiaCaminholink = (linkPath) => linkPath.split("\\").pop();

        const { name, type, note, deadline, link } = state;

        const total = name + (type && " de " + type);

        const paleta = {
            name: total,
            note,
            deadline,
            link,
        };

        const response = await PaletaService.create(paleta);
        onCreatePaleta(response);
        closeModal();
    };

    return (
        <Modal closeModal={closeModal}>
            <div className="AdicionaPaletaModal">
                <form autocomplete="off">
                    <h2> Adicionar ao Cardápio </h2>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="deadline"> deadline: </label>
                        <input
                            id="deadline"
                            placeholder="Cinco dias"
                            type="text"
                            value={state.deadline}
                            required
                            onChange={(e) => handleChange(e, "deadline")} />
                    </div>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="name"> name: </label>
                        <input
                            id="name"
                            placeholder="Nome"
                            type="text"
                            value={state.name}
                            required
                            onChange={(e) => handleChange(e, "name")} />
                    </div>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="priority"> priority: </label>
                        <input
                            id="priority"
                            placeholder="Um"
                            type="text"
                            value={state.priority}
                            onChange={(e) => handleChange(e, "priority")} />
                    </div>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="type"> type: </label>
                        <input
                            id="type"
                            placeholder="Comida, calcado, ..."
                            type="text"
                            value={state.type}
                            onChange={(e) => handleChange(e, "type")} />
                    </div>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="note"> note: </label>
                        <input
                            id="note"
                            placeholder="Detalhe do produto"
                            type="text"
                            value={state.note}
                            required
                            onChange={(e) => handleChange(e, "note")} />
                    </div>
                    <div>
                        <label className="AdicionaPaletaModal__text" htmlFor="link" > link: </label>
                        <input
                            className=" AdicionaPaletaModal__text"
                            id="link"
                            placeholder=" link"
                            type="text"
                            value={state.link}
                            required
                            onChange={(e) => handleChange(e, "link")} />
                    </div>

                    <button
                        className="AdicionaPaletaModal__enviar"
                        type="button"
                        disabled={canDisable}
                        onClick={createPaleta} >
                        Enviar
                    </button>
                </form>
            </div>
        </Modal>
    );
}

export default AdicionaPaletaModal;