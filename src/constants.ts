import { Vec2 } from './models/board'

export const NORTH_EAST: Vec2 = [1, 1]
export const NORTH_WEST: Vec2 = [-1, 1]
export const SOUTH_EAST: Vec2 = [1, -1]
export const SOUTH_WEST: Vec2 = [-1, -1]
export const NORTH: Vec2 = [0, 1]
export const SOUTH: Vec2 = [0, -1]
export const EAST: Vec2 = [1, 0]
export const WEST: Vec2 = [-1, 0]

export const scalars = ['wb', 'wq', 'wr', 'bb', 'bq', 'br']

export const L: Vec2[] = [
  [2, 1],
  [2, -1],
  [1, 2],
  [1, -2],
  [-2, 1],
  [-2, -1],
  [1, -2],
  [-1, -2],
  [-1, 2],
]

export const DIAGONAL: Vec2[] = [NORTH_EAST, NORTH_WEST, SOUTH_EAST, SOUTH_WEST]

export const VERTICAL_HORIZONTAL = [NORTH, SOUTH, EAST, WEST]

export const actions = {
  att: 'yellow-500',
  def: 'cyan-500',
  move: 'green-500',
}
