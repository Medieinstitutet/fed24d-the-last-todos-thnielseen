// components/FullAddTodo.tsx
import type { FC } from 'react'
import { BaseButton } from '../global/BaseButton'
import { DatePicker } from './DatePicker'
import { getTodayDate, getTomorrowDate, getSuggestedFutureDate } from './DateUtils'
import { BaseInput } from '../global/BaseInput'
import { BaseForm } from '../global/BaseForm'

interface FullAddTodoProps {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
  dueDate?: string
  setDueDate: React.Dispatch<React.SetStateAction<string | undefined>>
  selectedShortcut: 'today' | 'tomorrow' | 'other' | null
  setSelectedShortcut: React.Dispatch<React.SetStateAction<'today' | 'tomorrow' | 'other' | null>>
  handleDateShortcut: (option: 'today' | 'tomorrow' | 'other') => void
  handleCancel: () => void
  handleAdd: (e: React.FormEvent) => void
}

export const FullAddTodo: FC<FullAddTodoProps> = ({
  title,
  setTitle,
  description,
  setDescription,
  dueDate,
  setDueDate,
  selectedShortcut,
  setSelectedShortcut,
  handleCancel,
  handleAdd,
}) => {
  const handleClick = (option: 'today' | 'tomorrow' | 'other') => {
    setSelectedShortcut(option)
    if (option === 'today') {
      setDueDate(getTodayDate())
    } else if (option === 'tomorrow') {
      setDueDate(getTomorrowDate())
    } else if (option === 'other' && !dueDate) {
      setDueDate(getSuggestedFutureDate())
    }
  }

  return (
    <BaseForm baseClass="add__full" legend="Add new todo" onSubmit={handleAdd}>
      <BaseInput
        id="todoTitle"
        name="title"
        label="What to do?"
        baseClass="add__full-field"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <DatePicker
        selectedShortcut={selectedShortcut}
        onSelect={handleClick}
        dueDate={dueDate}
        onDueDateChange={setDueDate}
      />

      <BaseInput
        id="todoDescription"
        name="description"
        label="Add description:"
        baseClass="add__full-field"
        as="textarea"
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="add__full__actions">
        <BaseButton
          type="button"
          onClick={handleCancel}
          text="Cancel"
          baseClass="add__full__actions-cancel-button"
          ariaLabel="Cancel todo"
        />
        <BaseButton
          type="submit"
          onClick={handleAdd}
          text="Add todo"
          baseClass="add__full__actions-add-button"
          ariaLabel="Add todo"
        />
      </div>
    </BaseForm>
  )
}
