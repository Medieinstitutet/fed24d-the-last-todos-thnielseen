// components/DueDatePicker.tsx
import type { FC } from 'react'
import { BaseButton } from '../global/BaseButton'
import { BaseInput } from '../global/BaseInput'

interface DatePickerProps {
  selectedShortcut: 'today' | 'tomorrow' | 'other' | null
  onSelect: (option: 'today' | 'tomorrow' | 'other') => void
  dueDate?: string
  onDueDateChange: (date: string) => void
}

/**
 * DatePicker Component
 * Allows the user to select a deadline using quick shortcuts or a custom date input.
 */
export const DatePicker: FC<DatePickerProps> = ({
  selectedShortcut,
  onSelect,
  dueDate,
  onDueDateChange,
}) => {
  return (
    <div className="add__full__dates">
      <p className="add__full__dates-label">Choose deadline:</p>

      <div className="add__full__dates-options">
        <BaseButton
          type="button"
          baseClass="add__full__dates-button"
          text="Today"
          ariaLabel="Set deadline to today"
          onClick={() => onSelect('today')}
          isActive={selectedShortcut === 'today'}
        />
        <BaseButton
          type="button"
          baseClass="add__full__dates-button"
          text="Tomorrow"
          ariaLabel="Set deadline to tomorrow"
          onClick={() => onSelect('tomorrow')}
          isActive={selectedShortcut === 'tomorrow'}
        />
        <BaseButton
          type="button"
          baseClass="add__full__dates-button"
          text="Other"
          ariaLabel="Choose custom deadline"
          onClick={() => onSelect('other')}
          isActive={selectedShortcut === 'other'}
        />
      </div>
      {selectedShortcut === 'other' && (
        <BaseInput
          id="todoDueDate"
          label="Deadline (optional)"
          name="dueDate"
          baseClass="add__full__dates-field"
          type="date"
          value={dueDate || ''}
          onChange={(e) => onDueDateChange(e.target.value)}
        />
      )}
      {dueDate && (
        <p className="add__full__dates-selected">
          <span className="add__full__dates-selected-label">Selected date:</span>
          <span className="add__full__dates-selected-value">{dueDate}</span>
        </p>
      )}
    </div>
  )
}
