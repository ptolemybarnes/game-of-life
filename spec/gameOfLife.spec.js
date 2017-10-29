import gameOfLife from '../src/gameOfLife';

// Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

const parseBoard = boardLiteral => 

describ('Game of Life', () => {
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
    expect(gameOfLife(parseBoard(board))).toEqual(
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
});