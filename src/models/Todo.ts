// src/model/Todo.ts
/**
 * Represents a Todo item with optional description and due date.
 * Tracks creation time, completion status, and optional completion timestamp.
 *
 * @param title - The title of the task.
 * @param description - Optional text describing the task.
 * @param dueDate - Optional due date for the task.
 */

export default class Todo {
  id: string
  title: string
  description?: string
  dueDate?: Date
  completed: boolean
  createdAt: Date
  completedAt?: Date

  constructor(title: string, description?: string, dueDate?: Date) {
    this.id = crypto.randomUUID()
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.completed = false
    this.createdAt = new Date()
    this.completedAt = undefined
  }
}
