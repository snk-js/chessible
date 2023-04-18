import { create } from 'zustand'
import { Action } from './actions'
import { middleware } from './middlewares'

export type PlayerSide = 'w' | 'b'

export interface turn {
  current: PlayerSide
  next: () => void
}

export const useTurn = create(
  middleware<turn>((set) => ({
    current: 'w',
    next: () =>
      set((state) => {
        state.current = state.current === 'w' ? 'b' : 'w'
      }),
  }))
)

export const nextTurn = () => {
  useTurn().next()
}
