// === IMPORTS ===
import './App.css'
import { useState } from 'react'

import Todos from './data/Todos'
import Todo from './models/Todo'
import { AddNewTodo } from './components/AddNewTodo'
import { DisplayTodo } from './components/DisplayTodo'

/** === App Component ===
 * Root component of the Todo application.
 * Manages state for todos and renders both form and list.
 *
 * @component
 * @returns {JSX.Element} The main layout with form input and displayed todos.
 */
function App() {
  // === STATE ===
  const [myTodos, setMyTodos] = useState<Todo[]>([...Todos])

  /**
   * Adds a new Todo to the top of the list.
   *
   * @param {Todo} todo - The Todo object to add.
   */
  const handleAdd = (todo: Todo) => {
    setMyTodos((prev) => [todo, ...prev])
  }

  /**
   * Toggles the completed state of a Todo by ID.
   * Updates completedAt if marked complete, or removes it if unmarked.
   *
   * @param {string} id - The ID of the Todo to toggle.
   */
  const toggleCompleted = (id: string) => {
    setMyTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: !todo.completed ? new Date() : undefined,
            }
          : todo
      )
    )
  }

  // === RENDER ===
  return (
    <main className="app">
      <h1 className="app-title">Todo app</h1>

      <section className="todo-form">
        <AddNewTodo onAdd={handleAdd} />
      </section>

      <section className="todo-list">
        <DisplayTodo myTodos={myTodos} toggleCompleted={toggleCompleted} />
      </section>
    </main>
  )
}

export default App
