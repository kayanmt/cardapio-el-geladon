import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json();

const transformPaleta = (paleta) => {
  const [name, type] = paleta.name.split(" de ");

  return {
    ...paleta,
    id: paleta._id,
    type: paleta.name,
    name,
    ...(type && { type }),
    possuitype: Boolean(type),
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((paletas) => paletas.map(transformPaleta));

export const PaletaService = {
  create: (paleta) => fetch(Api.createPaleta(), { method: "POST", body: JSON.stringify(paleta), mode: "cors", headers: {
    "Content-Type": "application/json",
} }).then(parseTransformLista),
  getLista: () =>
    fetch(Api.paletaLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.paletaById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createPaleta(), { method: "POST" }).then(parseResponse),
    updtateById: (id, paleta) => fetch(Api.updatePaletaById(id), { method: "PUT", body: JSON.stringify(paleta), mode: "cors", headers: {
      "Content-Type": "application/json",
      } }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletePaletaById(id), { method: "DELETE" }).then(parseResponse),
};