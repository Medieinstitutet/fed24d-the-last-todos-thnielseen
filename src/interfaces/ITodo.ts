// src/interface/ITodo.ts

/**
 * Interface representing the shape of a Todo item stored or retrieved from localStorage.
 */
export interface ITodo {
  id: string
  title: string
  description?: string
  dueDate?: string
  completed: boolean
  createdAt: string
  completedAt?: string
}
