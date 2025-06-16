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
  baseClass: string
  ariaLabel?: string
  isActive?: boolean
}

/**
 * === BaseButton Component ===
 * Reusable button using BEM-based class names via baseClass prop.
 *
 * @param baseClass - BEM block name (e.g., "add__quick-button")
 * @returns A button element with optional icon and text.
 */
export const BaseButton: FC<BaseButtonProps> = ({
  type = 'button',
  onClick,
  icon,
  text,
  baseClass,
  ariaLabel,
  isActive = false,
}) => {
  const className = `${baseClass}${isActive ? ' active' : ''}`

  return (
    <button type={type} onClick={onClick} className={className} aria-label={ariaLabel}>
      {icon && (
        <span className={`${baseClass}__icon material-symbols-rounded`} aria-hidden="true">
          {icon}
        </span>
      )}
      {text && <span className={`${baseClass}__text`}>{text}</span>}
    </button>
  )
}
