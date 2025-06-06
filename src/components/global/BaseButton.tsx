// src/components/global/BaseButton.tsx

// === IMPORTS ===
import type { FC, MouseEventHandler } from 'react'

// === PROPS INTERFACE ===
interface BaseButtonProps {
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
  icon?: string
  text?: string
  className?: string
  ariaLabel?: string
}

/**
 * === BaseButton Component ===
 * A reusable button component with support for optional icon, text, and accessibility.
 *
 * @param {('button' | 'submit' | 'reset')} [type='button'] - Button type attribute.
 * @param {MouseEventHandler<HTMLButtonElement>} [onClick] - Callback for click events.
 * @param {string} [icon] - Optional Material Symbols icon name.
 * @param {string} [text] - Optional text to display inside the button.
 * @param {string} [className] - Additional CSS class names.
 * @param {string} [ariaLabel] - ARIA label for screen readers.
 * @returns {JSX.Element} Rendered button element.
 */
export const BaseButton: FC<BaseButtonProps> = ({
  type = 'button',
  onClick,
  icon,
  text,
  className = '',
  ariaLabel,
}) => {
  return (
    <button type={type} onClick={onClick} className={`button ${className}`} aria-label={ariaLabel}>
      {icon && (
        <span className={`material-symbols-rounded button-icon ${className}`} aria-hidden="true">
          {icon}
        </span>
      )}
      {text && <span className={`button-text ${className}`}>{text}</span>}
    </button>
  )
}
