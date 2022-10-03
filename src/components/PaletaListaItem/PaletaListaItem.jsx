import "./PaletaListaItem.css";

function PaletaListaItem({
  paleta,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
}) {
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        className="Acoes__remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        remover
      </button>
    );

  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="PaletaListaItem__badge"> {quantidadeSelecionada} </span>
    );

  return (
    <div className="PaletaListaItem" onClick={() => clickItem(paleta.id)}>
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="PaletaListaItem__priority"> {paleta.priority} </div>
        <div className="PaletaListaItem__deadline"> R$ {paleta.deadline.toFixed(2)} </div>
        <div className="PaletaListaItem__note"> {paleta.note} </div>
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
        className="PaletaListaItem__link"
        src={paleta.link}
        alt={`Paleta de ${paleta.name}`}
      />
    </div>
  );
}

export default PaletaListaItem;