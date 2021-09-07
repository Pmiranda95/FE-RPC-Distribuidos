import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";

const AddTipo = (props) => {

  const [tipo,setTipo] = useState('');  

  const onSubmit = (e) => {
    const body = {tipo:tipo}
    e.preventDefault();
    axios.post('https://localhost:5001/api/AltaTipoMedicamento', body).then(response => response.status)
    .catch(err => console.warn(err));
    setTipo('')
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <TextField
        fullWidth
        type="text"
        name="tipo"
        variant="filled"
        onChange={(e)=>setTipo(e.target.value)}
      />
      <Button type="submit" color="primary">
        Agregar Medicamento
      </Button>
    </form>
  );
};
export default AddTipo;
