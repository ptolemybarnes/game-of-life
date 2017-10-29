import { compose, join, map } from 'lodash/fp'

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

const gameOfLife = (board) => board.map(
  line => line.map(cell => {
    if (cell === 'x') {
      if (cellIsDead(cell)) return ' ' 
    }
    return ' ';
  })
);

export default compose(createBoard, gameOfLife, parseBoard);
