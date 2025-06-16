// === IMPORTS ===
import type { FC } from 'react'
import type Todo from '../../models/Todo'
import { formatDate } from '../../utils/formatDate'

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
    <section className="todo-list" aria-label="List of todos">
      <ul>
        {myTodos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'done' : ''}>
            <div className="todo-item">
              <button
                className="icon-button"
                title={todo.completed ? 'Markera som ofärdig' : 'Markera som klar'}
                onClick={() => toggleCompleted(todo.id)}
                aria-label={`Toggle ${todo.title}`}
              >
                <span className="material-symbols-rounded">
                  {todo.completed ? 'task_alt' : 'circle'}
                </span>
              </button>

              <div className="todo-text">
                <p>
                  <strong>Title:</strong> {todo.title}
                </p>
                <p>
                  <strong>Description:</strong> {todo.description ?? '—'}
                </p>
                <p>
                  <strong>Due date:</strong> {todo.dueDate ? formatDate(todo.dueDate) : '—'}
                </p>
                <p>
                  <strong>Completed:</strong> {todo.completed ? 'true' : 'false'}
                </p>
                <p>
                  <strong>Created at:</strong> {formatDate(todo.createdAt)}
                </p>
                <p>
                  <strong>Completed at:</strong>{' '}
                  {todo.completedAt ? formatDate(todo.completedAt) : '—'}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
