import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const AddTipo = (props) => {

  const [tipo,setTipo] = useState('');  

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
      console.log(event.target.value);
    setTipo({value: event.target.value});
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <TextField
        fullWidth
        type="text"
        name="tipo"
        variant="filled"
        onChange={handleChange}
      />
      <Button type="submit" color="primary">
        Agregar Medicamento
      </Button>
    </form>
  );
};
export default AddTipo;
