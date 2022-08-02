import { genPossibleMoves } from '@/utils/move'

it('should return all possible moves given a origin and piece', () => {
  // simulate queen at [0,0]
  const result = genPossibleMoves('q', [7, 7])

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

  console.log(result)

  expect(result).toBe(answer)
})
