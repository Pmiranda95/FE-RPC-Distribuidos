import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from 'yup'

const AddMedicamentoForm = () => {

  const [tiposMedicamentos,setTiposMedicamentos] = useState([])

  const [init,setInit] = useState({
    nombre:'',
    codNumerico:'',
    codAlfabetico:'',
    digito:0,
    droga:'',
    tipo:'',
  })

  useEffect( async() => {
   const tipos = await axios('https://localhost:5001/api/TraerTiposMedicamentos');
   setTiposMedicamentos(tipos.data)
  }, [])

  const onSubmit = async  (values)  => {
    console.log(values);
    const body = {
      nombre:values.nombre,
      codNumerico: Number(values.codNumerico),
      codAlfabetico:values.codAlfabetico,
      digito:0,
      droga:values.droga,
      tipo:values.tipo,
    }
    await axios.post('https://localhost:5001/api/AltaMedicamento', body).then(response => response.status)
    .catch(err => console.warn(err));

  };

  return (
    <div>
      <Formik
      initialValues={init}
      validationSchema={Yup.object().shape({
        nombre: Yup.string().required('Campo obligatorio'),
        codNumerico: Yup.string().min(5,'Minimo 5 digitos').required('Campo obligatorio'),
        codAlfabetico: Yup.string().min(3,'Minimo 3 caracteres').matches(/^[aA-zZ\s]+$/, "Unicamente letras").required('Campo obligatorio'),
        droga: Yup.string().required('Campo obligatorio'),
        tipo: Yup.string().required('Campo obligatorio'),
      })}
      onSubmit={(values,{resetForm})=>{onSubmit(values)
        resetForm(init)
      }}
      >
      {
        ({handleSubmit, handleChange, errors}) => (
          <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="nombre"
          placeholder="Nombre medicamento"
          variant="filled"
          margin="none"
          error={errors.nombre?true:false}
          helperText={errors.nombre}
          onChange={handleChange}
        />
        <label>Codigo Numerico</label>
        <TextField
          fullWidth
          type="number"
          name="codNumerico"
          variant="filled"
          margin="none"
          onChange={handleChange}
          error={errors.codNumerico?true:false}
          helperText={errors.codNumerico}
        />
        <label>Codigo Alfabetico</label>
        <TextField
          fullWidth
          type="text"
          name="codAlfabetico"
          variant="filled"
          margin="none"
          onChange={handleChange}
          error={errors.codAlfabetico?true:false}
          helperText={errors.codAlfabetico}
        />
        <label>Droga</label>
        <TextField
          fullWidth
          type="text"
          name="droga"
          variant="filled"
          margin="none"
          onChange={handleChange}
        />
        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="tipo"
          onChange={handleChange}
          fullWidth
        >
          {tiposMedicamentos.map(res => <MenuItem value={res.id}>{res.tipo}</MenuItem>)}
        </Select>
        <Button variant="outlined" type="submit" color="primary">
          Agregar Medicamento
        </Button>
      </form>
        )
      }
      </Formik>
    </div>
  );
};

export default AddMedicamentoForm;
