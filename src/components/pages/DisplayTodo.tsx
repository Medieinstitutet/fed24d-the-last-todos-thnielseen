// src/components/pages/DisplayTodo.tsx
import './style/DisplayTodo.scss'
import { useState, useEffect } from 'react'
import { TodoList } from '../display/TodoList'
import { FilterBar } from '../display/filterbar/FilterBar'
import type Todo from '../../models/Todo'
import type { StatusFilter } from '../display/filterbar/filterBarUtils'

interface DisplayTodoProps {
  myTodos: Todo[]
  toggleCompleted: (id: string) => void
  deleteTodo: (id: string) => void
}

export const DisplayTodo: React.FC<DisplayTodoProps> = ({
  myTodos,
  toggleCompleted,
  deleteTodo,
}) => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [visibleTodos, setVisibleTodos] = useState<Todo[]>([])

  useEffect(() => {
    // Initiera direkt
    setVisibleTodos(myTodos)
  }, [myTodos])

  return (
    <section className="display">
      <FilterBar
        todos={myTodos}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        setFilteredTodos={setVisibleTodos}
      />

      <TodoList myTodos={visibleTodos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
    </section>
  )
}
