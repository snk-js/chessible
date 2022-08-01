import { createContext, useEffect } from 'react'
import { useState } from 'react'
import { boardInitialState } from '../constants'

const GameContext = createContext(null)

const GameContextProvider = ({ children }) => {
  const [boardState, setBoardState] = useState(boardInitialState())

  const [turn, setTurn] = useState(false)

  const select = ({ row, column }) => {
    //
  }

  return (
    <GameContext.Provider value={{ boardState }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContextProvider, GameContext }
