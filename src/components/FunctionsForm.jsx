import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { esPrioritario, verificar } from '../functions'

const FunctionsForm = () => {
  const [codigo, setCodigo] = useState('')
  const [mensaje, setMensaje] = useState('')

  const onClickVerificar = (e) => {
    const resultado = verificar(codigo)
    resultado
      ? setMensaje('Digito verificador correcto')
      : setMensaje('Digito verificador incorrecto')
    e.preventDefault()
  }

  const onClickEsPrioritario = (e) => {
    const resultado = esPrioritario(codigo)
    resultado ? setMensaje('Es prioritario') : setMensaje('No es prioritario')
    e.preventDefault()
  }

  return (
    <div>
      <form>
        <label>Codigo</label>
        <TextField
          fullWidth
          type="text"
          name="codigo"
          variant="filled"
          onChange={(e) => setCodigo(e.target.value)}
          required
        />
        <Button
          type="submit"
          color="primary"
          onClick={(e) => onClickEsPrioritario(e)}
        >
          Verificar prioridad
        </Button>
        <Button
          type="submit"
          color="primary"
          onClick={(e) => onClickVerificar(e)}
        >
          Comprobar digito verificador
        </Button>
      </form>
      <h5>{mensaje}</h5>
    </div>
  )
}

export default FunctionsForm
