const url = 'http://localhost:3000/posts'

const headers = {
  'Content-Type': 'application/json'
}

export async function fetchTodos() {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export async function addTodo(todo) {
  const requestConfig = {
    headers,
    method: 'POST',
    body: JSON.stringify(todo)
  }
  const response = await fetch(url, requestConfig)
  const data = await response.json()
  return data
}

export async function updateTodo(todo) {
  const requestConfig = {
    headers,
    method: 'PUT',
    body: JSON.stringify(todo)
  }
  const response = await fetch(`${url}/${todo.id}`, requestConfig)
  const data = await response.json()
  return data
}

export async function deleteTodo() {
  const requestConfig = { method: 'DELETE' }
  const response = await fetch(url, requestConfig)
  const data = await response.json()
  return data
}