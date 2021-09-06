import { fetchFunction } from "./fetch";

export const traerMedicamentosConA = async () =>{
      const response = await fetchFunction(`TipoDocumentaciones`);
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const lista = await response.json();
         
          }
        }
      
    