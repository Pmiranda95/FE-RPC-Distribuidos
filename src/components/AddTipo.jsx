import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";

const AddTipo = (props) => {

  const [tipo,setTipo] = useState('');  

  const onSubmit = async(e) => {
    const body = {tipo:tipo}
    await axios.post('https://localhost:5001/api/AltaTipoMedicamento', body).then(response => response.status)
    .catch(err => console.warn(err));
    setTipo('')
    props.traerTiposMedicamento();
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Nombre</label>
      <TextField
        fullWidth
        type="text"
        name="tipo"
        variant="filled"
        onChange={(e)=>setTipo(e.target.value)}
        required
      />
      <Button type="submit" color="primary">
        Agregar Tipo medicamento
      </Button>
    </form>
  );
};
export default AddTipo;
