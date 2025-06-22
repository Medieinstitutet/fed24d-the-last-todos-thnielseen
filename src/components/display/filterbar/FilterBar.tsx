// src/components/display/filterbar/FilterBar.tsx
import type { FC } from 'react'
import type Todo from '../../../models/Todo'
import { FilterTodo } from './FilterTodo'
import { filterTodos, type StatusFilter } from './filterBarUtils'

interface FilterBarProps {
  todos: Todo[]
  statusFilter: StatusFilter
  setStatusFilter: (value: StatusFilter) => void
  setFilteredTodos: (todos: Todo[]) => void
}

export const FilterBar: FC<FilterBarProps> = ({
  todos,
  statusFilter,
  setStatusFilter,
  setFilteredTodos,
}) => {
  const handleFilterChange = (newFilter: StatusFilter) => {
    setStatusFilter(newFilter)
    const filtered = filterTodos(todos, newFilter)
    setFilteredTodos(filtered)
  }

  return (
    <div className="filter-bar">
      <FilterTodo statusFilter={statusFilter} setStatusFilter={handleFilterChange} />
    </div>
  )
}
