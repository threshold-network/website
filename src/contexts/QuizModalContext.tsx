import React, { useContext, createContext, useState } from "react"

export const QuizModalContext = createContext<{
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}>({
  isOpen: false,
  setIsOpen: () => {},
})

export const QuizModalContextProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  console.log("the wquiz contet ", isOpen)

  return (
    <QuizModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </QuizModalContext.Provider>
  )
}

export const useQuizModal = () => useContext(QuizModalContext)
