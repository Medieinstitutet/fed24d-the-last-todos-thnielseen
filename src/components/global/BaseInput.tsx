// === IMPORTS ===
import './style/BaseInput.scss'
import type {
  FC,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
} from 'react'

// === PROPS INTERFACE ===
type BaseInputProps = {
  type?: 'text' | 'date'
  as?: 'input' | 'textarea' | 'select'
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> &
  SelectHTMLAttributes<HTMLSelectElement>

interface CommonProps {
  id: string
  label: string
  baseClass: string
  button?: ReactNode
}

/**
 * === BaseInput Component ===
 * Reusable input component supporting <input>, <textarea> and <select>.
 * Class names are generated based on the provided BEM-style baseClass.
 *
 * @param {string} id - Unique identifier for the field
 * @param {string} label - Label text associated with the field
 * @param {string} baseClass - Base BEM block (e.g. "add__quick-field")
 * @param {'input' | 'textarea' | 'select'} [as='input'] - Determines the element type to render
 * @param {'text' | 'date'} [type='text'] - Input type (only applies to <input>)
 * @param {ReactNode} [button] - Optional element (e.g. icon button) rendered next to the input
 * @returns {JSX.Element}
 */
export const BaseInput: FC<BaseInputProps & CommonProps> = ({
  id,
  label,
  baseClass,
  button,
  as = 'input',
  children,
  ...props
}) => {
  return (
    <div className={baseClass}>
      <label htmlFor={id} className={`${baseClass}__label`}>
        {label}
      </label>

      {as === 'textarea' ? (
        <textarea id={id} className={`${baseClass}__textarea`} {...props} />
      ) : as === 'select' ? (
        <select id={id} className={`${baseClass}__select`} {...props}>
          {children}
        </select>
      ) : (
        <input id={id} className={`${baseClass}__input`} {...props} />
      )}

      {button && <span className={`${baseClass}__button`}>{button}</span>}
    </div>
  )
}
