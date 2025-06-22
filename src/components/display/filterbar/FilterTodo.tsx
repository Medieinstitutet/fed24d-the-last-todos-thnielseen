// components/display/FilterTodo.tsx
import type { FC } from 'react'
import type { StatusFilter } from './filterBarUtils'
import { BaseInput } from '../../global/BaseInput'

interface Props {
  statusFilter: StatusFilter
  setStatusFilter: (value: StatusFilter) => void
}

export const FilterTodo: FC<Props> = ({ statusFilter, setStatusFilter }) => {
  const options: StatusFilter[] = ['all', 'today', 'week', 'month', 'completed']
  const labels: Record<StatusFilter, string> = {
    all: 'All',
    today: 'Today',
    week: 'This week',
    month: 'This month',
    completed: 'Completed',
  }

  return (
    <BaseInput
      label="Filter todos"
      id="filter-select"
      baseClass="display__filter-bar__filter"
      as="select"
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {labels[opt]}
        </option>
      ))}
    </BaseInput>
  )
}
