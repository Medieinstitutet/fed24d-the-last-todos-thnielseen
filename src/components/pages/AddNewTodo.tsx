// === IMPORTS ===
import { useState } from 'react'
import type { FC } from 'react'
import { QuickAddTodo } from '../add/QuickAddTodo'
import { FullAddTodo } from '../add/FullAddTodo'
import Todo from '../../models/Todo'
import { BaseButton } from '../global/BaseButton'

// === PROPS ===
interface AddTodoProps {
  onAdd: (todo: Todo) => void
}

/** === AddNewTodo Component ===
 * Main form component for adding new todos, either quick or detailed.
 *
 * @component
 * @param {function} onAdd - Callback to send a new Todo object to parent state.
 * @returns {JSX.Element} A form with toggle between quick input and full detail input.
 */
export const AddNewTodo: FC<AddTodoProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState<string | undefined>()
  const [showCustomDate, setShowCustomDate] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  /** Handles predefined date shortcuts and toggles custom date input */
  const handleDateShortcut = (option: 'today' | 'tomorrow' | 'other') => {
    if (option === 'today') {
      const today = new Date().toISOString().split('T')[0]
      setDueDate(today)
      setShowCustomDate(false)
    } else if (option === 'tomorrow') {
      const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]
      setDueDate(tomorrow)
      setShowCustomDate(false)
    } else {
      setDueDate(undefined)
      setShowCustomDate(true)
    }
  }

  /** Creates a new Todo object and resets the form */
  const createTodo = () => {
    if (!title.trim()) return

    const parsedDate = dueDate ? new Date(dueDate) : undefined
    const newTodo = new Todo(title, showDetails ? description : undefined, parsedDate)
    onAdd(newTodo)

    // Reset
    setTitle('')
    setDescription('')
    setDueDate(undefined)
    setShowCustomDate(false)
    setShowDetails(false)
  }

  /** Handles form submission to create todo */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createTodo()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {!showDetails && <QuickAddTodo title={title} setTitle={setTitle} onAdd={createTodo} />}

      <BaseButton
        type="button"
        onClick={() => setShowDetails((prev) => !prev)}
        className="detail"
        icon={showDetails ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
        text={showDetails ? 'Hide details' : 'Add detailed todo'}
      />

      {showDetails && (
        <FullAddTodo
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          dueDate={dueDate}
          setDueDate={setDueDate}
          showCustomDate={showCustomDate}
          handleDateShortcut={handleDateShortcut}
          handleCancel={() => setShowDetails(false)}
          handleAdd={handleSubmit}
        />
      )}
    </form>
  )
}
