import { compose, join, map, filter, isEqual } from 'lodash/fp'

const parseBoard = board => board.match(/\|(.+|\s+)\|/g)
  .map(line => line.replace(/\|/g, ''))
  .map(line => line.split(''))

const topLine = '\n ________\n';
const bottomLine = '\n --------\n';



const createBoard = compose(
  join(''),
  board => [topLine].concat(board).concat(bottomLine),
  join('\n'),
  map(line => ['|'].concat(line).concat(['|']).join(''))
)

const cellIsDead = (cell) => true;

const getSafe = board => coords => (board[coords[1]] || [])[coords[0]] || ' '

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
  ].map(getSafe(board))
)

const gameOfLife = (board) => board.map(
  (line, yIndex) => line.map((cell, xIndex) => {
    const neighbours = getNeightboursOfCell(board, xIndex, yIndex);
    const numberOfNeighbours = filter(isEqual('x'), neighbours).length;
    if (numberOfNeighbours === 3) return 'x';
    if (cell === 'x' && numberOfNeighbours === 2) return 'x';
    return ' ';
  })
);

export default compose(createBoard, gameOfLife, parseBoard);
