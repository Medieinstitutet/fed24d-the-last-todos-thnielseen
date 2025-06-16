// src/components/QuickAddTodo.tsx

// === IMPORTS ===

import type { FC } from 'react'
import { BaseButton } from '../global/BaseButton'
import { BaseInput } from '../global/BaseInput'
import { BaseForm } from '../global/BaseForm'

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
    <BaseForm baseClass="add__quick" legend="Add quick" onSubmit={onAdd}>
      <BaseInput
        id="todoQuickTitle"
        name="title"
        type="text"
        baseClass="add__quick-field"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="What to do?"
        placeholder="What to do?"
        required
        button={
          <BaseButton
            type="submit"
            onClick={onAdd}
            icon="add_task"
            baseClass="add__quick-button"
            ariaLabel="Quick add todo"
          />
        }
      />
    </BaseForm>
  )
}
