// src/components/global/BaseForm.tsx

// === IMPORTS ===
import './style/BaseForm.scss'
import type { FC, ReactNode, FormEventHandler } from 'react'

// === PROPS INTERFACE ===
interface BaseFormProps {
  baseClass: string
  legend: string
  onSubmit: FormEventHandler
  children: ReactNode
}

/**
 * === BaseForm Component ===
 * Reusable form component with BEM-based class names.
 *
 * @param {string} baseClass - Base BEM block (e.g. "add__quick-form")
 * @param {string} legend - Fieldset legend text
 * @param {FormEventHandler} onSubmit - Submit callback
 * @param {ReactNode} children - Form content
 * @returns {JSX.Element}
 */
export const BaseForm: FC<BaseFormProps> = ({ baseClass, legend, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className={`${baseClass} ${baseClass}`}>
      <fieldset className={`${baseClass}__fieldset`}>
        <legend className={`${baseClass}__legend`}>{legend}</legend>
        {children}
      </fieldset>
    </form>
  )
}
