/**
 * Converts a date string to a timestamp.
 * @param { Date } dateField - The date string in the format "YYYY-MM-DD" or a full ISO
 * datetime string.
 * @return { number } A number representing the timestamp.
 */
export const convertDateToTimestamp = (dateField: Date): number => {
  // Create a new Date object based on the provided dateField
  const dateObject = new Date(dateField)
  // Convert the Date object to a timestamp
  return dateObject.getTime()
}
