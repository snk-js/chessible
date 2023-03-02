import { create } from 'zustand'
import { Vec2 } from '@/models/board'
import { middleware } from './middlewares'

const chessCoordinates = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
]

const rpgChessActions = [
  'm',
  'a',
  'd',
  'mx',
  'ax'
] as const

type Action = {
  actor: Vec2,
  action: keyof typeof rpgChessActions,
  target: Vec2
}

export interface Actions {
  sequence: Array<Action>,
  back: () => void,
  spend: (actor: Vec2, action: keyof typeof rpgChessActions, target: Vec2) => void,
  reset: () => void
}

export const useActions = create(middleware<Actions>((set) => ({
  sequence: [],
  spend: (actor: Vec2, action: keyof typeof rpgChessActions, target: Vec2) => set(
    (state: Actions) => {
      state.sequence.push({ actor, action, target })
    }
  ),

  back: () => set(
    (state: Actions) => {
      state.sequence.pop()
    }
  ),

  reset: () => set(
    (state: Actions) => {
      state.sequence = []
    }
  )
})))


export const playOne = ({ actor, action, target }: Action) => {
  const actions = useActions.getState()
  actions.spend(actor, action, target)
}

export const playBack = () => {
  const actions = useActions.getState()
  actions.back()
}

export const playReset = () => {
  const actions = useActions.getState()
  actions.reset()
}


