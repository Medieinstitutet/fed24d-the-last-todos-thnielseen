// === IMPORTS ===
import type { FC } from 'react'
import type Todo from '../../models/Todo'
import { TodoList } from '../display/TodoList'

import './style/DisplayTodo.scss'
// === PROPS ===
interface DisplayTodoProps {
  myTodos: Todo[]
  toggleCompleted: (id: string) => void
}

/** === DisplayTodo Component ===
 * Renders a list of Todo items with their metadata and a button to toggle completion state.
 *
 * @component
 * @param {Todo[]} myTodos - Array of Todo objects to display.
 * @param {Function} toggleCompleted - Function to toggle a todo's completion state by ID.
 * @returns {JSX.Element} Rendered list of todos with details and toggle buttons.
 */
export const DisplayTodo: FC<DisplayTodoProps> = ({ myTodos, toggleCompleted }) => {
  return (
    <section className="display">
      <TodoList myTodos={myTodos} toggleCompleted={toggleCompleted} />
    </section>
  )
}
