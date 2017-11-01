import { nth, compose, join, map, filter, isEqual, size } from 'lodash/fp'

const LIFE = 'x';
const DEATH = ' ';

const getCell = board => coords => (board[coords[1]] || [])[coords[0]] || DEATH
const getNeightboursOfCell = (board, x, y) => (
  [
    [x + 1, y + 1],
    [x + 1, y],
    [x + 1, y - 1],
    [x, y - 1],
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y + 1]
  ].map(getCell(board))
)

const isAlive = isEqual(LIFE);

const countLivingNeighbours = compose(
  size,
  filter(isAlive),
  getNeightboursOfCell
)

const gameOfLife = (board) => board.map(
  (line, y) => line.map((cell, x) => {
    const numberOfNeighbours = countLivingNeighbours(board, x, y);
    if (numberOfNeighbours === 3) return LIFE;
    if (isAlive(cell) && numberOfNeighbours === 2) return LIFE;
    return DEATH;
  })
);

export default gameOfLife;
