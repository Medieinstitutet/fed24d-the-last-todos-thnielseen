// === IMPORTS ===
import './App.scss'
import { useState } from 'react'

import Todos from './data/Todos'
import type Todo from './models/Todo'
import { AddNewTodo } from './components/pages/AddNewTodo'
import { DisplayTodo } from './components/pages/DisplayTodo'

/**
 * === App Component ===
 * Root component of the Todo application.
 * Initializes todos from localStorage or mock data,
 * and handles creation and updating of todos.
 *
 * @component
 * @returns {JSX.Element} The main layout with form input and displayed todos.
 */
function App() {
  // === STATE ===
  const [myTodos, setMyTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('myTodos')
    if (saved) {
      return JSON.parse(saved)
    } else {
      const initialTodos = [...Todos]
      localStorage.setItem('myTodos', JSON.stringify(initialTodos))
      return initialTodos
    }
  })

  /**
   * Saves todos to both state and localStorage.
   *
   * @param {Todo[]} todos - Array of Todo objects to save.
   */
  const saveTodos = (todos: Todo[]) => {
    setMyTodos(todos)
    localStorage.setItem('myTodos', JSON.stringify(todos))
    console.log('Saved todos:', todos)
  }

  /**
   * Adds a new Todo to the top of the list and persists the change.
   *
   * @param {Todo} todo - The Todo object to add.
   */
  const handleAdd = (todo: Todo) => {
    const updated = [todo, ...myTodos]
    saveTodos(updated)
  }

  /**
   * Toggles the completed state of a Todo by ID.
   * Updates completedAt if marked complete, or removes it if unmarked.
   *
   * @param {string} id - The ID of the Todo to toggle.
   */
  const toggleCompleted = (id: string) => {
    const updated = myTodos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
            completedAt: !todo.completed ? new Date() : undefined,
          }
        : todo,
    )
    saveTodos(updated)
  }

  // === RENDER ===
  return (
    <>
      <header className="app__header">
        <h1 className="app__title">Todo app</h1>
      </header>

      <main className="app__main">
        <AddNewTodo onAdd={handleAdd} />

        <section className="todo-list">
          <DisplayTodo myTodos={myTodos} toggleCompleted={toggleCompleted} />
        </section>
      </main>

      <footer className="app__footer">
        <p>@ tess_prog 2025</p>
      </footer>
    </>
  )
}

export default App
