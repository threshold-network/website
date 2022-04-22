import { useCallback } from "react"

const useFormatDate = () => {
  return useCallback((date: string | number | Date) => {
    return new Date(date).toLocaleDateString("en-gb", {
      year: "numeric",
      month: "short",
    })
  }, [])
}

export default useFormatDate
