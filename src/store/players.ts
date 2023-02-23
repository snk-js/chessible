import produce from 'immer'
import create, { UseBoundStore, StoreApi, SetState } from 'zustand'

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

const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log('  applying', args)
      set(...args)
      console.log('  new state', get())
    },
    get,
    api
  )

const player: (side: PlayerSide, set: SetState<Player>) => Player = (side, set) => ({
  side: side,
  points: {
    actionPoints: 90,
    total: 90,
  },
  spendPoints: (cost: number) => set(
    produce((state: Player) => {
      state.points.actionPoints = state.points.actionPoints - cost
    })
  ),

  reset: () => set(
    produce((state: Player) => {
      state.points.actionPoints = state.points.total
    })
  )
})

export const w: UseBoundStore<StoreApi<Player>> = create(log((set) => player('w', set)))
export const b: UseBoundStore<StoreApi<Player>> = create(log((set) => player('b', set)))

const players = { w, b }

export const clear = (side: PlayerSide) => {
  return players[side](state => state.reset)
}

export const spend = (side: PlayerSide) => {
  return players[side](state => state.spendPoints)
}






