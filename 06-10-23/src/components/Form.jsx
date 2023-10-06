import useForm from '../hooks/useForm'

const Form = () => {
  const initialFormState = {
    textInput: '',
    numberInput: 0,
    checkInput: false,
    dateInput: '',
    radioInput: false,
    fileInput: ''
  }

  const { formData, handleChange, isDirty, resetForm } = useForm(initialFormState)

  function handleSubmit (e) {
    e.preventDefault()
  }

  return (
    <div className='container-form'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='textInput' onChange={handleChange} value={formData.textInput} />
        <input type='number' name='numberInput' onChange={handleChange} value={formData.numberInput} />
        <input type='checkbox' name='checkInput' onChange={handleChange} checked={formData.checkInput} />
        <input type='date' name='dateInput' onChange={handleChange} value={formData.dateInput} />
        <input type='radio' name='radioInput' onChange={handleChange} checked={formData.radioInput} />
        <input type='file' name='fileInput' onChange={handleChange} value={formData.fileInput} />
        <button type='submit' disabled={!isDirty}>Enviar</button>
        <button type='button' onClick={resetForm}>Restablecer</button>
      </form>
    </div>
  )
}

export default Form
