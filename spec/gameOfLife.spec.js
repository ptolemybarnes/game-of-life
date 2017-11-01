import { compose } from 'lodash/fp';
import gameOfLife from '../src/gameOfLife';
import { parseBoard, createBoard } from '../src/board';

// Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
//
const life = compose(createBoard, gameOfLife, parseBoard);

describe('Game of Life', () => {
  it('lone cell dies', () => {
    const board = 
`
 ________
|        |
|        |
| x      |
|        |
 --------
`
    expect(life(board)).toEqual(
`
 ________
|        |
|        |
|        |
|        |
 --------
`
    );
  });

  it('a cell with exactly three neighbours lives', () => {
    const board = 
`
 ________
|        |
|  x     |
| xx     |
|        |
 --------
`
    expect(life(board)).toEqual(
`
 ________
|        |
| xx     |
| xx     |
|        |
 --------
`
    );
  });

  it('a cell with exactly two neighbours lives', () => {
    const board = 
`
 ________
|        |
|  x     |
|  x     |
|  x     |
 --------
`
    expect(life(board)).toEqual(
`
 ________
|        |
|        |
| xxx    |
|        |
 --------
`
    );
  });

  it('a cell with more than 3 neighbours dies', () => {
    const board = 
`
 ________
|        |
|  x     |
| xxx    |
|  x     |
 --------
`
    expect(life(board)).toEqual(
`
 ________
|        |
| xxx    |
| x x    |
| xxx    |
 --------
`
    );
  });
});
