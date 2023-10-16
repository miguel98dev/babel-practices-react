import { connect } from "react-redux"
import { todoFormChanged, todoAdded } from "./todosSlice"

function mapStateToProps(globalState, ownProps) {
  return {
    author: globalState.todos.form.author,
    title: globalState.todos.form.title,
  }
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     onChange: (params) => dispatch(todoFormChanged(params)),
//     addTodo: (params) => dispatch(todoAdded(params))
//   }
// }

const mapDispatchToProps = {
  onChange: todoFormChanged,
  addTodo: todoAdded
}

function TodosForm({ author, title, onChange, addTodo }) {

  function handleSubmit(event) {
    event.preventDefault()
    addTodo({ id: Date.now(), author, title, isDone: false })
  }

  function handleChange(event) {
    const { name, value } = event.target
    onChange({ name, value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="author" value={author} onChange={handleChange} />
      <input name="title" value={title} onChange={handleChange} />
      <input type="submit" value="Crear" />
    </form>
  )
}

// export default TodosForm

export default connect(mapStateToProps, mapDispatchToProps)(TodosForm)

// export default connect(null, mapDispatchToProps)

