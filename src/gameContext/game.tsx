import { createContext, useEffect } from 'react'
import { useState } from 'react'

import Board from '@/models/board'

const GameContext = createContext(null)

const GameContextProvider = ({ children }) => {
  const [board] = useState(new Board())
  const [boardState, setBoardState] = useState(board.state)

  const flipBoard = () => {
    setBoardState(board.flip().state)
  }

  const select = ({ row, column }) => {
    //
  }

  return (
    <GameContext.Provider value={{ boardState, flipBoard }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContextProvider, GameContext }
