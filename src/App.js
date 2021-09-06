import React, {useState} from 'react';
import AddTipo from './components/AddTipo';
import AddMedicamentoForm from './components/AddMedicamentoForm';
import { v4 as uuidv4 } from 'uuid';
import { Button, Divider } from '@material-ui/core';
import ListaMedicamentos from './components/ListaMedicamentos';

function App() {


  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <div>
            <h2>Agregar Medicamento</h2>
            <AddMedicamentoForm  />
          </div>
      </div>
        <div className="flex-large">
          <h2>Listado de medicamentos</h2>
          <AddTipo  />
        </div>
      </div>
      <Divider></Divider>

      <h1>Laboratorio</h1>
      <Button color="primary">Medicamentos "Aerosol"</Button>
      <Button color="secondary">Medicamentos Init "A"</Button>


      <ListaMedicamentos />
    </div>
  );
}

export default App;
