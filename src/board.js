import { compose, join, map } from 'lodash/fp';

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

export { parseBoard, createBoard };
