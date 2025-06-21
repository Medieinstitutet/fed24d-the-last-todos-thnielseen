// src/components/display/TodoList.tsx

import type { FC } from 'react'
import { useState } from 'react'
import type Todo from '../../models/Todo'
import { formatDate } from '../../utils/formatDate'
import { BaseButton } from '../global/BaseButton'
import { DeleteTodo } from './DeleteTodo'

interface TodoListProps {
  myTodos: Todo[]
  toggleCompleted: (id: string) => void
  deleteTodo: (id: string) => void
}
/**
 * === TodoList Component ===
 * Renders a list of todos with metadata and toggle button.
 * Each todo is displayed in a grid layout with:
 * - a toggle button (left),
 * - title (center-right),
 * - and optional fields (description, dates) spanning all columns.
 *
 * @component
 * @param {Todo[]} myTodos - Array of Todo items to display.
 * @param {Function} toggleCompleted - Callback to toggle completion status for a todo by ID.
 * @returns {JSX.Element} List of todo items rendered with structured layout.
 */

export const TodoList: FC<TodoListProps> = ({ myTodos, toggleCompleted, deleteTodo }) => {
  const [showConfirm, setShowConfirm] = useState(false)
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null)

  const cancelDelete = () => {
    setShowConfirm(false)
    setSelectedTodoId(null)
  }

  const confirmDelete = (id: string) => {
    deleteTodo(id)
    cancelDelete()
  }

  return (
    <article className="display__todos">
      <h2 className="display__todos-title">My todos</h2>
      <ul className="display__todos-list">
        {myTodos.map((todo) => (
          <li key={todo.id} className={`display__todos-item todo${todo.completed ? ' done' : ''}`}>
            <BaseButton
              icon={todo.completed ? 'task_alt' : 'circle'}
              onClick={() => toggleCompleted(todo.id)}
              baseClass="todo__button-toggle"
              ariaLabel="Toggle complete"
              isActive={todo.completed}
            />
            <h3 className="todo__title">{todo.title}</h3>

            {todo.description && <p className="todo__description">{todo.description}</p>}

            {todo.dueDate && (
              <p className="todo__due">
                <span>Due by: </span>
                <span>{formatDate(todo.dueDate)}</span>
              </p>
            )}

            {todo.createdAt && (
              <p className="todo__created">
                <span>Created: </span>
                <span>{formatDate(todo.createdAt)}</span>
              </p>
            )}

            {todo.completed && todo.completedAt && (
              <p className="todo__completed">
                <span>Done: </span>
                <span>{formatDate(todo.completedAt)}</span>
              </p>
            )}

            <BaseButton
              baseClass="todo__button-delete"
              type="button"
              icon="delete"
              ariaLabel="Delete todo"
              onClick={() => {
                setSelectedTodoId(todo.id)
                setShowConfirm(true)
              }}
            />

            {showConfirm && selectedTodoId === todo.id && (
              <DeleteTodo
                title={todo.title}
                onCancel={cancelDelete}
                onConfirm={() => confirmDelete(todo.id)}
              />
            )}
          </li>
        ))}
      </ul>
    </article>
  )
}
