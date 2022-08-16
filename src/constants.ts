export const NORTH_EAST = [1, 1]
export const NORTH_WEST = [-1, 1]
export const SOUTH_EAST = [1, -1]
export const SOUTH_WEST = [-1, -1]
export const NORTH = [0, 1]
export const SOUTH = [0, -1]
export const EAST = [1, 0]
export const WEST = [-1, 0]

export const scalars = ['wb', 'wq', 'wr', 'bb', 'bq', 'br']

export const L = [
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

export const DIAGONAL = [NORTH_EAST, NORTH_WEST, SOUTH_EAST, SOUTH_WEST]

export const VERTICAL_HORIZONTAL = [NORTH, SOUTH, EAST, WEST]

export const actions = {
  att: 'yellow-500',
  def: 'cyan-500',
  move: 'green-500',
}
