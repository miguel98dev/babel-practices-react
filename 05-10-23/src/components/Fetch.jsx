import { useState, useEffect } from 'react'
import './App.css'

const url = 'http://localhost:3003/posts'

function App () {
  const [posts, setPosts] = useState([])

  async function getPosts () {
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    setPosts(data)
  }

  async function handleCreatePost () {
    const newPost = {
      id: posts.length + 1,
      author: 'francisco',
      title: 'some-title'
    }
    const requestConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    }
    const response = await fetch(url, requestConfig)
    console.log(response)
    const data = await response.json()
    console.log(data)
    // meter el newPost en posts
    getPosts()
  }

  async function handleUpdatePost () {
    const newPost = {
      id: posts.length,
      author: 'francisco josé',
      title: 'some-title-updated'
    }
    const requestConfig = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    }
    const response = await fetch(`${url}/${newPost.id}`, requestConfig)
    console.log(response)
    const data = await response.json()
    console.log(data)
    getPosts()
  }

  async function handleDeletePost () {
    const requestConfig = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(`${url}/${posts[0].id}`, requestConfig)
    console.log(response)
    const data = await response.json()
    console.log(data)
    getPosts()
  }

  useEffect(() => {
    // Ejecución inicial
    getPosts()
  }, [])

  return (
    <>
      <h1>Hello world</h1>
      <ol>
        {posts.map((p) => (
          <li key={p.id}>
            <p>
              <strong>{p.author}: </strong>
              {p.title}
            </p>
          </li>
        ))}

        <button onClick={handleCreatePost}>New</button>
        <button onClick={handleUpdatePost}>Update last</button>
        <button onClick={handleDeletePost}>Delete first</button>
      </ol>
    </>
  )
}

export default App
