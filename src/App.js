import React, {useState} from 'react';
import UserTable from './components/UserTable';
import AddMedicamentoForm from './components/AddMedicamentoForm';
import EditYo from './components/EditYo';
import { v4 as uuidv4 } from 'uuid';
import { Button, Divider } from '@material-ui/core';
import ListaMedicamentos from './components/ListaMedicamentos';

function App() {

  // Agregar usuarios
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = uuidv4()
    console.log(user)
    setUsers([
      ...users,
      user
    ])
  }

  // Eliminar usuario
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  // Editar usuario
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true) 
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>Laboratorio</h1>
      <Button color="primary">Medicamentos "Aerosol"</Button>
      <Button color="secondary">Medicamentos Init "A"</Button>


      <ListaMedicamentos />

      <Divider></Divider>
      <div className="flex-row">
        <div className="flex-large">
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditYo 
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Agregar Medicamento</h2>
            <AddMedicamentoForm addUser={addUser}  />
          </div>
        )}
      </div>
        <div className="flex-large">
          <h2>Listado de medicamentos</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
