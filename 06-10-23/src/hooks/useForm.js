import { useState } from 'react'

const useForm = (initialFormState) => {
  const [formData, setformData] = useState(initialFormState)
  const [isDirty, setisDirty] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, type, checked, value } = target

    setformData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' || type === 'radio' ? checked : value
    }))
    setisDirty(true)
  }

  const resetForm = () => {
    setformData(initialFormState)
    setisDirty(false)
  }

  return {
    formData,
    handleChange,
    isDirty,
    resetForm
  }
}

export default useForm

/*
Definiremos un hook personalizado que albergue los datos de nuestro formulario
Nos permitirá almacenar los datos de input de tipo texto, número, checkbox y fecha.

En el componente desde el que lo invoquemos tendremos acceso al objeto que contiene los datos, al controlador del evento "onChange" de cada input, saber si el formulario ha sido manipulado (isDirty) y una función que devuelva el formulario a su punto inicial.

Este hook aceptará un parámetro, el estado inicial del objeto.
*/
