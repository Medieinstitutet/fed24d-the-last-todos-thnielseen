// src/utils/formatDate.ts

/**
 * Formats a given Date object into a string with the format "YYYY-MM-DD".
 *
 * If no date is provided, returns the string "Ingen information".
 *
 * @param {Date} [date] - The date to format.
 * @returns {string} A formatted date string in "YYYY-MM-DD" format, or a fallback message.
 */
export function formatDate(date?: Date): string {
  if (!date) return 'Ingen information'
  const d = new Date(date)
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const year = d.getFullYear()
  return `${year}-${month}-${day}`
}
