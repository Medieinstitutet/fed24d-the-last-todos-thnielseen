// src/components/display/filterbar/filterBar.ts
import type Todo from '../../../models/Todo'

export type StatusFilter = 'all' | 'completed' | 'today' | 'week' | 'month'

export const filterTodos = (todos: Todo[], filter: StatusFilter): Todo[] => {
  const now = new Date()
  const today = new Date(now.toDateString())
  const endOfWeek = new Date(today)
  endOfWeek.setDate(today.getDate() + (6 - today.getDay()))
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

  return todos.filter((todo) => {
    if (filter === 'all') return true
    if (filter === 'completed') return todo.completed

    const dueDate = todo.dueDate ? new Date(todo.dueDate) : null
    const isIncomplete = !todo.completed

    if (filter === 'today') {
      return isIncomplete && (dueDate === null || dueDate <= today)
    }

    if (filter === 'week') {
      return isIncomplete && (dueDate === null || dueDate <= endOfWeek)
    }

    if (filter === 'month') {
      return isIncomplete && (dueDate === null || dueDate <= endOfMonth)
    }

    return true
  })
}
