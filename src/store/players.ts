import { middlewares } from './middlewares'
import { create } from 'zustand'

type PlayerSide = 'w' | 'b'

interface Player {
  side: PlayerSide,
  points: {
    actionPoints: number
    total: number
  },
  spendPoints: (cost: number) => void,
  reset: () => void
}


const player = (side: PlayerSide, set) => ({
  side: side,
  points: {
    actionPoints: 90,
    total: 90,
  },
  spendPoints: (cost: number) => set(
    (state) => {
      state.points.actionPoints = state.points.actionPoints - cost
    }),

  reset: () => set(
    (state) => {
      state.points.actionPoints = state.points.total
    }
  )
})

export const w = create(middlewares<Player>((set) => player('w', set)))
export const b = create(middlewares<Player>((set) => player('b', set)))

const players = { w, b }

export const clear = (side: PlayerSide) => {
  return players[side].getState().reset()
}

export const spend = (side: PlayerSide, cost: 30) => {
  return players[side].getState().spendPoints(cost)
}






