import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";



const AddMedicamentoForm = () => {
  const [tipo, setTipo] = useState("");
  const [name,setName] = useState('');  
  const [codigo,setCodigo] = useState('');  
  const [descripcion,setDescripcion] = useState('');  

  const handleChange = (event) => {
    setTipo(event.target.value);
  };

  const onSubmit = (e) => {
    const body = {
      name:name,
      codigo:codigo,
      descripcion:descripcion,
      tipo:tipo,
    }
    console.log(body);
    e.target.reset();
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          name="name"
          placeholder="Nombre medicamento"
          variant="filled"
          margin="none"
          onChange={(event) => {setName(event.target.value)}}
        />
        <label>Codigo</label>
        <TextField
          fullWidth
          type="text"
          name="codigo"
          variant="filled"
          margin="none"
          onChange={(event) => {setCodigo(event.target.value)}}
        />
        <label>Descripcion</label>
        <TextField
          fullWidth
          type="text"
          name="descripcion"
          variant="filled"
          margin="none"
          onChange={(event) => {setDescripcion(event.target.value)}}
        />
        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tipo}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value={10}>Droga</MenuItem>
          <MenuItem value={20}>Analgesicos</MenuItem>
          <MenuItem value={30}>Morfina</MenuItem>
        </Select>
        <Button type="submit" color="primary">
          Agregar Medicamento
        </Button>
      </form>
    </div>
  );
};

export default AddMedicamentoForm;
