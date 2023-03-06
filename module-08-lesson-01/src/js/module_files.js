const sqrt = Math.sqrt;
//
// export const square = x => x * x;
// export const diag = (x, y) => sqrt(square(x) + square(y));
//
const square = x => x * x;
const diag = (x, y) => sqrt(square(x) + square(y));
export { square, diag };

// let myFileName
// export default myFileName = 'Here is another module!';

// export default function myFunc() {
//     console.log('Im from another module!');
// }

// export default 5;
// export default 10;


