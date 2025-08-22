// src/components/display/filterbar/filterBar.ts
import type Todo from '../../../models/Todo'

export type StatusFilter = 'all' | 'completed' | 'today' | 'week' | 'month' | 'overdue'
export type SortField = 'title' | 'created' | 'dueDate' | 'completedDate'
export type SortDirection = 'asc' | 'desc'

export const filterTodos = (todos: Todo[], filter: StatusFilter): Todo[] => {
  const now = new Date()
  const today = new Date(now.toDateString())
  const endOfWeek = new Date(today)
  endOfWeek.setDate(today.getDate() + (6 - today.getDay()))
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

  return todos.filter((todo) => {
    const dueDate = todo.dueDate ? new Date(todo.dueDate) : null
    const isIncomplete = !todo.completed

    if (filter === 'all') return true
    if (filter === 'completed') return todo.completed

    if (filter === 'today') {
      return isIncomplete && (dueDate === null || dueDate <= today)
    }

    if (filter === 'week') {
      return isIncomplete && (dueDate === null || dueDate <= endOfWeek)
    }

    if (filter === 'month') {
      return isIncomplete && (dueDate === null || dueDate <= endOfMonth)
    }

    if (filter === 'overdue') {
      return isIncomplete && dueDate !== null && dueDate < today
    }

    return true
  })
}

export const sortTodos = (todos: Todo[], field: SortField, direction: SortDirection): Todo[] => {
  return [...todos].sort((a, b) => {
    let aValue: string | number | Date | null = null
    let bValue: string | number | Date | null = null

    switch (field) {
      case 'title':
        aValue = a.title.toLowerCase()
        bValue = b.title.toLowerCase()
        break
      case 'created':
        aValue = new Date(a.createdAt)
        bValue = new Date(b.createdAt)
        break
      case 'dueDate':
        aValue = a.dueDate ? new Date(a.dueDate) : new Date(0)
        bValue = b.dueDate ? new Date(b.dueDate) : new Date(0)
        break
      case 'completedDate':
        aValue = a.completedAt ? new Date(a.completedAt) : new Date(0)
        bValue = b.completedAt ? new Date(b.completedAt) : new Date(0)
        break
    }

    if (aValue! < bValue!) return direction === 'asc' ? -1 : 1
    if (aValue! > bValue!) return direction === 'asc' ? 1 : -1
    return 0
  })
}
