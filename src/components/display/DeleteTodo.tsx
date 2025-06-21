// src/components/todos/RemoveTodo.tsx
import type { FC } from 'react'
import { BaseButton } from '../global/BaseButton'

interface DeleteTodoProps {
  title: string
  onCancel: () => void
  onConfirm: () => void
}

export const DeleteTodo: FC<DeleteTodoProps> = ({ title, onCancel, onConfirm }) => {
  return (
    <div className="todo__delete">
      <div className="todo__delete-msg">
        <p>Are you sure you want to delete:</p>
        <h3 className="todo__delete-msg-title">
          "{title}"<span>?</span>
        </h3>
      </div>

      <div className="todo__delete-actions">
        <BaseButton
          text="no"
          baseClass="todo__delete-button"
          onClick={onCancel}
          ariaLabel="Cancel delete"
        />
        <BaseButton
          text="yes"
          baseClass="todo__delete-button"
          onClick={onConfirm}
          ariaLabel="Confirm delete"
        />
      </div>
    </div>
  )
}
