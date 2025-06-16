// add/dateUtils.ts

/** Returns today's date in YYYY-MM-DD format */
export const getTodayDate = (): string => {
  return new Date().toISOString().split('T')[0]
}

/** Returns tomorrow's date in YYYY-MM-DD format */
export const getTomorrowDate = (): string => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
}

/** Returns a suggested future date (e.g. 3 days from now) in YYYY-MM-DD format */
export const getSuggestedFutureDate = (daysAhead = 3): string => {
  const future = new Date()
  future.setDate(future.getDate() + daysAhead)
  return future.toISOString().split('T')[0]
}

/** Parses a YYYY-MM-DD string to a Date object (with safety check) */
export const parseDateString = (dateStr?: string): Date | undefined => {
  if (!dateStr) return undefined
  const parsed = new Date(dateStr)
  return isNaN(parsed.getTime()) ? undefined : parsed
}
