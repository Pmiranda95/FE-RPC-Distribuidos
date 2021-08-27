import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";



const AddMedicamentoForm = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const [tipo, setTipo] = React.useState("");

  const handleChange = (event) => {
    setTipo(event.target.value);
  };

  const onSubmit = (data, e) => {
    data.id = null;
    console.log(data);
    props.addUser(data);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          name="name"
          ref={register({
            required: { value: true, message: "Valor requerido" },
          })}
          placeholder="Nombre medicamento"
          variant="filled"
          margin="none"
        />

        <div>{errors?.name?.message}</div>
        <label>Codigo</label>
        <TextField
          fullWidth
          type="text"
          name="username"
          ref={register({
            required: { value: true, message: "Valor requerido" },
          })}
          variant="filled"
          margin="none"
        />
        <div>{errors?.username?.message}</div>
        <label>Descripcion</label>
        <TextField
          fullWidth
          type="text"
          name="descripcion"
          ref={register({
            required: { value: true, message: "Valor requerido" },
          })}
          variant="filled"
          margin="none"
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
