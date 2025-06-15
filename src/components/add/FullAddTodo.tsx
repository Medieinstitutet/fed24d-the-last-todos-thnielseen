// === IMPORTS ===
import type { FC } from 'react'
import { BaseButton } from '../global/BaseButton'

// === PROPS ===
interface FullAddTodoProps {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
  dueDate?: string
  setDueDate: React.Dispatch<React.SetStateAction<string | undefined>>
  showCustomDate: boolean
  handleDateShortcut: (option: 'today' | 'tomorrow' | 'other') => void
  handleCancel: () => void
  handleAdd: (e: React.FormEvent) => void
}

/** === FullAddTodo Component ===
 * A detailed input form for creating a new Todo with title, deadline, and description.
 *
 * @component
 * @param {string} title - The current todo title input value.
 * @param {function} setTitle - State updater for the todo title.
 * @param {string} description - The current todo description.
 * @param {function} setDescription - State updater for the description.
 * @param {string} [dueDate] - Optional selected deadline in string format.
 * @param {function} setDueDate - State updater for dueDate string.
 * @param {boolean} showCustomDate - Whether to display the custom date input.
 * @param {function} handleDateShortcut - Handles quick date options ('today', 'tomorrow', 'other').
 * @param {function} handleCancel - Called when the cancel button is clicked.
 * @param {function} handleAdd - Called on form submit to add the todo.
 * @returns {JSX.Element} The rendered form with title, date picker, description, and action buttons.
 */
export const FullAddTodo: FC<FullAddTodoProps> = ({
  title,
  setTitle,
  description,
  setDescription,
  dueDate,
  setDueDate,
  showCustomDate,
  handleDateShortcut,
  handleCancel,
  handleAdd,
}) => {
  return (
    <fieldset className="fieldset full-add" aria-label="Add new todo">
      <legend className="legend sr-only">Add new todo</legend>

      <div className="field">
        <label htmlFor="todoTitle" className="label">
          What to do?
        </label>
        <input
          id="todoTitle"
          name="title"
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <p className="label date">Choose deadline:</p>
      <div className="buttons date">
        <BaseButton
          type="button"
          onClick={() => handleDateShortcut('today')}
          text="Today"
          className="date"
          ariaLabel="Set deadline to today"
        />
        <BaseButton
          type="button"
          onClick={() => handleDateShortcut('tomorrow')}
          text="Tomorrow"
          className="date"
          ariaLabel="Set deadline to tomorrow"
        />
        <BaseButton
          type="button"
          onClick={() => handleDateShortcut('other')}
          text="Other"
          className="date"
          ariaLabel="Choose custom deadline"
        />
      </div>

      {showCustomDate && (
        <div className="field deadline-input">
          <label htmlFor="todoDueDate" className="label sr-only">
            Deadline (optional)
          </label>
          <input
            id="todoDueDate"
            name="dueDate"
            type="date"
            className="input date"
            value={dueDate || ''}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      )}

      <div className="field description">
        <label htmlFor="todoDescription" className="label">
          Add description:
        </label>
        <textarea
          id="todoDescription"
          name="description"
          className="input description"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="actions">
        <BaseButton
          type="button"
          onClick={handleCancel}
          text="Cancel"
          className="add"
          ariaLabel="Cancel todo"
        />
        <BaseButton
          type="submit"
          onClick={handleAdd}
          text="Add todo"
          className="add"
          ariaLabel="Add todo"
        />
      </div>
    </fieldset>
  )
}
