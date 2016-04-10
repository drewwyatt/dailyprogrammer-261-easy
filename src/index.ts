import {MagicSquare} from './magicsquare';

console.log(new MagicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2]).isValid);
console.log(new MagicSquare([2, 7, 6, 9, 5, 1, 4, 3, 8]).isValid);
console.log(new MagicSquare([3, 5, 7, 8, 1, 6, 4, 9, 2]).isValid);
console.log(new MagicSquare([8, 1, 6, 7, 5, 3, 4, 9, 2]).isValid);
console.log(new MagicSquare([17, 24, 1, 8, 15, 23, 5, 7, 14, 16, 4, 6, 13, 20, 22, 10, 12, 19, 21, 3, 11, 18, 25, 2, 9]).isValid);