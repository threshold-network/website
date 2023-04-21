// Define an array of time units, each with a name and number of seconds
const timeUnits = [
  { unit: "year", seconds: 31536000 },
  { unit: "month", seconds: 2592000 },
  { unit: "day", seconds: 86400 },
  { unit: "hour", seconds: 3600 },
  { unit: "minute", seconds: 60 },
  { unit: "second", seconds: 1 },
]

const rtf = new Intl.RelativeTimeFormat("en-gb", { style: "long" })

/**
 * Returns a string based on a give timestamp that represents relative time e.g.:
 * - just now
 * - 10 seconds ago
 * - 2 hours ago
 * @param {string} timestamp Timestamp in seconds
 * @return { string } String representing relative time
 */
export const getRelativeTime = (timestamp: number): string => {
  // Get the current time in seconds
  const now = Math.floor(Date.now() / 1000)

  // Calculate the time difference in seconds
  const secondsAgo = now - timestamp

  // Loop through the time units (in a descending order) and divide `secondsAgo`
  // by `seconds` that represents that time unit. If the result is greater or
  // equal than 1 then we can use that unit.
  for (const { unit, seconds } of timeUnits) {
    const unitCount = Math.floor(secondsAgo / seconds)
    if (unitCount >= 1) {
      // Return a string representing the time difference in the chosen unit
      return rtf.format(-unitCount, unit as Intl.RelativeTimeFormatUnit)
    }
  }

  // If all time units have a count of 0, return "just now"
  return "just now"
}
