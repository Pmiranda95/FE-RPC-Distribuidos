import React, { useEffect, useState } from 'react'
import AddTipo from './components/AddTipo'
import AddMedicamentoForm from './components/AddMedicamentoForm'
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core'
import ListaMedicamentos from './components/ListaMedicamentos'
import axios from 'axios'
import DeleteIcon from '@material-ui/icons/Delete'
import FunctionsForm from './components/FunctionsForm'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}))

function App() {
  const [lista, setLista] = useState([])
  const [tipos, setTiposMedicamentos] = useState([])
  const classes = useStyles()

  useEffect(() => {
    traerTiposMedicamento()
  }, [])

  const traerMedicamentos = async (url) => {
    const resp = await axios(`https://localhost:5001/api/${url}`)
    setLista(resp.data)
  }

  const traerTiposMedicamento = async () => {
    const tipos = await axios(
      'https://localhost:5001/api/TraerTiposMedicamentos',
    )
    setTiposMedicamentos(tipos.data)
  }

  const eliminarTipo = async (tipo) => {
    const resp = await axios.delete(
      `https://localhost:5001/api/BajaTipoMedicamento?tipo=${tipo}`,
    )
    traerTiposMedicamento()
  }

  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <div>
            <h2>Agregar Medicamento</h2>
            <AddMedicamentoForm />
          </div>
        </div>
        <div className="flex-large">
          <h2>Listado de medicamentos</h2>
          <AddTipo traerTiposMedicamento={traerTiposMedicamento} />
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Verificaciones</h2>
          <FunctionsForm />
        </div>
      </div>

      <Divider></Divider>

      <h1>Laboratorio</h1>
      <Button
        color="primary"
        onClick={() => traerMedicamentos('TraerAerosoles')}
      >
        Medicamentos "Aerosol"
      </Button>
      <Button
        color="secondary"
        onClick={() => traerMedicamentos('TraerMedicamenosConA')}
      >
        Medicamentos que comienzan con "A"
      </Button>
      <Divider></Divider>
      <ListaMedicamentos lista={lista} />
      <Divider></Divider>
      <br />
      <Typography variant="h3" component="h7">
        Eliminar tipos de medicamento
      </Typography>
      <List dense className={classes.root} width>
        {tipos.map((value) => (
          <ListItem button>
            <ListItemText id={value.id} primary={value.tipo} />
            <Button onClick={() => eliminarTipo(value.tipo)}>
              <DeleteIcon />
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default App
