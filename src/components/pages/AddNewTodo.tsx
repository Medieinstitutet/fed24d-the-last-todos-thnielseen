// === IMPORTS ===
import './style/AddNewTodo.scss'
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
  const [showDetails, setShowDetails] = useState(false)
  const [selectedShortcut, setSelectedShortcut] = useState<'today' | 'tomorrow' | 'other' | null>(
    null,
  )

  /** Handles predefined date shortcuts and toggles custom date input */
  const handleDateShortcut = (option: 'today' | 'tomorrow' | 'other') => {
    const today = new Date()

    if (option === 'today') {
      setDueDate(today.toISOString().split('T')[0])
    } else if (option === 'tomorrow') {
      const tomorrow = new Date(today)
      tomorrow.setDate(today.getDate() + 1)
      setDueDate(tomorrow.toISOString().split('T')[0])
    } else if (option === 'other') {
      // Om användaren inte har valt något datum, sätt ett förslag 3 dagar fram
      if (!dueDate) {
        const future = new Date(today)
        future.setDate(today.getDate() + 3)
        setDueDate(future.toISOString().split('T')[0])
      }
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
    setShowDetails(false)
  }

  /** Handles form submission to create todo */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createTodo()
  }

  return (
    <section className="add">
      <h2 className="add__title">Add new todo</h2>
      {!showDetails && <QuickAddTodo title={title} setTitle={setTitle} onAdd={createTodo} />}

      <div className="add__toggle">
        <BaseButton
          type="button"
          onClick={() => setShowDetails((prev) => !prev)}
          baseClass="add__toggle-button"
          icon={showDetails ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          text={showDetails ? 'Add quick ' : 'Add details'}
        />
      </div>

      {showDetails && (
        <FullAddTodo
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          dueDate={dueDate}
          setDueDate={setDueDate}
          selectedShortcut={selectedShortcut}
          setSelectedShortcut={setSelectedShortcut}
          handleDateShortcut={handleDateShortcut}
          handleCancel={() => setShowDetails(false)}
          handleAdd={handleSubmit}
        />
      )}
    </section>
  )
}
