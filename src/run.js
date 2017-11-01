import life from './gameOfLife';

let board = `
 __________________
|    x             |
|     x            |
|   xxx            |
|                  |
|                  |
|                  |
|                  |
|                  |
 __________________
`

for(var i = 10; i; i--) {
  board = life(board);
  console.log('GENERATION: ', i);
  console.log(board);
}
