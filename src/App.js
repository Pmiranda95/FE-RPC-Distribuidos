import React, {useEffect, useState} from 'react';
import AddTipo from './components/AddTipo';
import AddMedicamentoForm from './components/AddMedicamentoForm';
import { Button, Divider } from '@material-ui/core';
import ListaMedicamentos from './components/ListaMedicamentos';
import axios from 'axios';

function App() {

  const [lista,setLista] = useState([]);

  const traerMedicamentos = async (url)  => {
    const resp = await axios(`https://localhost:5001/api/${url}`)
    setLista(resp.data)
  }

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
      <Button color="primary" onClick={() => traerMedicamentos('TraerAerosoles')}>Medicamentos "Aerosol"</Button>
      <Button color="secondary"  onClick={()=>traerMedicamentos('TraerMedicamenosConA')}>Medicamentos Init "A"</Button>


      <ListaMedicamentos lista={lista}/>
    </div>
  );
}

export default App;
