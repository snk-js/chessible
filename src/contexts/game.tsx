import { createContext, useEffect } from 'react'
import { useState } from 'react'
import { boardInitialState } from './constants'

const GameContext = createContext(null)

const GameContextProvider = ({ children }) => {
  const [boardState, setBoardState] = useState(boardInitialState())
  return (
    <GameContext.Provider value={{ boardState }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContextProvider, GameContext }
