import React, { useContext, createContext, useState } from "react"

export const QuizModalContext = createContext<{
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

export const QuizModalContextProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <QuizModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </QuizModalContext.Provider>
  )
}

export const useQuizModal = () => useContext(QuizModalContext)
