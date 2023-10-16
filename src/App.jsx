import React from "react";
import { Routes, Route } from 'react-router-dom'
import { Counter } from "./features/counter/Counter";

import TodosPage from './features/todos/TodosPage'

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/counter" element={<Counter />} />
      <Route path="/todos" element={<TodosPage />} />
    </Routes>
  );
}

export default App;
