import { Outlet, Link } from "react-router-dom"
import TodosForm from "./TodosForm"
import TodosList from "./TodosList"

function TodosPage() {

  return (
    <div>
      <h1>Page for todos</h1>
      <TodosForm />
      <TodosList />
    </div>

  )

}

export default TodosPage