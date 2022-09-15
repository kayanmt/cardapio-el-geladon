import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

const transformPaleta = (paleta) => {
  const [sabor, recheio] = paleta.sabor.split(" com ");

  return {
    ...paleta,
    id: paleta._id,
    titulo: paleta.sabor,
    sabor,
    ...(recheio && { recheio }),
    possuiRecheio: Boolean(recheio),
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((paletas) => paletas.map(transformPaleta));

export const PaletaService = {
  create: (paleta) => fetch(Api.createPaleta(), { method: "POST", body: JSON.stringify(paleta), mode: "cors", headers: {
    "Content-Type": "application/json",
} }).then(parseTransformItem),
  getLista: () =>
    fetch(Api.paletaLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.paletaById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createPaleta(), { method: "POST" }).then(parseResponse),
  updateById: (id) =>
    fetch(Api.updatePaletaById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletePaletaById(id), { method: "DELETE" }).then(parseResponse),
};