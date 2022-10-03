const baseUrl = "https://loginapirm.herokuapp.com";

    export const paletaManagementApi = {
      paletaLista: async () => {
        const response = await fetch(baseUrl + "/paleta/get-all-paleta", {
          method: "GET",
          headers: new Headers({
            Authorization: "Bearer " + localStorage.getItem("userToken"),
            Accept: "application/json",
            "Content-Type": "application/json",
          }),
        });
        const data = await response.json();
        return data;
      },
    
      deletePaleta: async (paletaName) => {
        const response = await fetch(
          baseUrl + "/paleta/delete-paleta/" + paletaName,
          {
            method: "DELETE",
            headers: new Headers({
              Authorization: "Bearer " + localStorage.getItem("userToken"),
              Accept: "application/json",
              "Content-Type": "application/json",
            }),
          }
        );
        const data = await response.json();
        return data;
      },
    
      updatePaleta: async (paletaName, paletaBody) => {
        const response = await fetch(
          baseUrl + "/paleta/update-paleta/" + paletaName,
          {
            method: "PUT",
            headers: new Headers({
              Authorization: "Bearer " + localStorage.getItem("userToken"),
              Accept: "application/json",
              "Content-Type": "application/json",
            }),
            body: JSON.stringify({ ...paletaBody }),
          }
        );
        const data = await response.json();
        return data;
      },
    
      createPaleta: async (paletaBody) => {
        const response = await fetch(baseUrl + "/paleta/create-paleta", {
          method: "POST",
          headers: new Headers({
            Authorization: "Bearer " + localStorage.getItem("userToken"),
            Accept: "application/json",
            "Content-Type": "application/json",
          }),
          body: JSON.stringify({ ...paletaBody }),
        });
        const data = await response.json();
        return data;
      },
    };