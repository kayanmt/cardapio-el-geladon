import "./PaletaListaItem.css";
import { PaletaService } from "../../services/PaletaService";
import PaletaLista from "../PaletaLista";
import { useState, useEffect } from "react";
import PaletaDetalhesModal from "../PaletaDetalhesModal/PaletaDetalhesModal";


function PaletaListaItem({ paleta, quantidadeSelecionada, index, onRemove, onAdd }) 
{

  <button className={`Acoes__adicionar ${!quantidadeSelecionada && "Acoes__adicionar--preencher"}`} onClick={() => onAdd(index)}>adicionar</button>


  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="PaletaListaItem__badge"> {quantidadeSelecionada} </span>
    );

  return (
    <div className="PaletaListaItem" onClick={() => clickItem(paleta.id)}>
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="PaletaListaItem__titulo"> {paleta.titulo} </div>
        <div className="PaletaListaItem__preco"> R$ {paleta.preco.toFixed(2)} </div>
        <div className="PaletaListaItem__descricao"> {paleta.descricao} </div>
        <div className="PaletaListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${ !quantidadeSelecionada && "Acoes__adicionar--preencher" }`}
            onClick={(e) => { e.stopPropagation(); onAdd(index); }} >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img
        className="PaletaListaItem__foto"
        src={paleta.foto}
        alt={`Paleta de ${paleta.sabor}`}
      />
    </div>
  );
}
{
    paletas.map((paleta, index) => (
      <PaletaListaItem
        key={`PaletaListaItem-${index}`}
        paleta={paleta}
        quantidadeSelecionada={paletaSelecionada[index]}
        index={index}
        onAdd={(index) => adicionarItem(index)}
        onRemove={(index) => removerItem(index)}
        clickItem={(paletaId) => setPaletaModal(paleta)}
      />
    ));
  }

export default PaletaListaItem;