import { genPossibleMoves } from '@/utils/move'

describe('return all possible moves given a origin and piece', () => {
  it('should return valid moves for queen at [0,0] of the border', () => {
    // simulate queen at [0,0]
    const result = genPossibleMoves('q', [0, 0])
    const answer = [
      // vertical on the first column
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      [7, 0],
      // horizontal on the first line
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      [7, 0],
      // diagonal
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6],
      [7, 7],
    ]
    expect(result).toEqual(expect.arrayContaining(answer))
  })

  it('should return valid moves for queen at [7,7] of the border', () => {
    // simulate queen at [0,0]
    const result = genPossibleMoves('q', [7, 7])

    const answer = [
      // vertical on the first column
      [7, 0],
      [7, 1],
      [7, 2],
      [7, 3],
      [7, 4],
      [7, 5],
      [7, 6],
      // horizontal on the first line
      [1, 7],
      [2, 7],
      [3, 7],
      [4, 7],
      [5, 7],
      [6, 7],
      [0, 7],
      // diagonal
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6],
    ]
    expect(result).toEqual(expect.arrayContaining(answer))
  })

  it('should return valid moves for bishop at [4,5] on the border', () => {
    // simulate queen at [0,0]
    const result = genPossibleMoves('b', [4, 5])

    const answer = [
      // vertical on the first column
      [5, 6],
      [6, 7],
      [3, 4],
      [2, 3],
      [1, 2],
      [0, 1],

      [0, 1],
      [0, 1],
      [0, 1],
      [0, 1],
    ]

    console.log(result)
    expect(result).toEqual(expect.arrayContaining(answer))
  })
})
