// src/components/QuickAddTodo.tsx

// === IMPORTS ===
import type { FC } from 'react'
import { BaseButton } from '../global/BaseButton'

// === PROPS ===
interface QuickAddTodoProps {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  onAdd: () => void
}

/** === QuickAddTodo Component ===
 * A minimal input form for quickly adding a new Todo item.
 *
 * @component
 * @param {string} title - The current value of the title input field.
 * @param {React.Dispatch<React.SetStateAction<string>>} setTitle - State updater for the title input.
 * @param {() => void} onAdd - Callback function triggered when the add button is clicked.
 * @returns {JSX.Element} A fieldset containing a text input and a submit button for adding a Todo.
 */
export const QuickAddTodo: FC<QuickAddTodoProps> = ({ title, setTitle, onAdd }) => {
  return (
    <fieldset className="fieldset" aria-label="Quick add Todo">
      <div className="field quick">
        <label htmlFor="todoTitleQuick" className="label sr-only">
          Todo title
        </label>
        <input
          id="todoTitleQuick"
          name="title"
          className="input quick"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What to do?"
          required
        />
        <BaseButton
          type="submit"
          onClick={onAdd}
          icon="add_task"
          className="quick"
          ariaLabel="Quick add todo"
        />
      </div>
    </fieldset>
  )
}
