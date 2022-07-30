import { createContext } from 'react'
import { useState } from 'react'
import { initialState } from './constants'

const GameContext = createContext(null)

const GameContextProvider = ({ children }) => {
  const [board, setBoard] = useState(initialState)

  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>
}

export { GameContextProvider, GameContext }
