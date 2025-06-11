// src/components/global/BaseButton.tsx

// === IMPORTS ===
import './style/BaseButton.scss'
import type { FC, MouseEventHandler } from 'react'

// === PROPS INTERFACE ===
interface BaseButtonProps {
  type?: 'button' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
  icon?: string
  text?: string
  className?: string
  variant?: 'quick' | 'default' | 'date' | 'add' | 'cancel'
  ariaLabel?: string
  isActive?: boolean
}

/**
 * === BaseButton Component ===
 * A reusable button component with support for optional icon, text, active state, and accessibility.
 *
 * @param {('button' | 'submit')} [type='button'] - Button type attribute.
 * @param {MouseEventHandler<HTMLButtonElement>} [onClick] - Callback for click events.
 * @param {string} [icon] - Optional Material Symbols icon name.
 * @param {string} [text] - Optional text to display inside the button.
 * @param {string} [variant='primary'] - Button visual variant.
 * @param {string} [ariaLabel] - ARIA label for screen readers.
 * @param {boolean} [isActive] - Adds 'active' class to indicate current/selected.
 * @returns {JSX.Element} Rendered button element.
 */
export const BaseButton: FC<BaseButtonProps> = ({
  type = 'button',
  onClick,
  icon,
  text,
  variant,
  ariaLabel,
  isActive = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variant}button ${isActive ? ' active' : ''}`}
      aria-label={ariaLabel}
    >
      {icon && (
        <span className={`material-symbols-rounded ${variant}button-icon icon `} aria-hidden="true">
          {icon}
        </span>
      )}
      {text && <span className={`${variant}button-text text`}>{text}</span>}
    </button>
  )
}
