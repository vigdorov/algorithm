let towerOfHanoi = function(output, input, tmp, n) {
  if (n > 1) {
    towerOfHanoi(output, tmp, input, n-1);
  }
  input.push(output.pop());
  if(n > 1) {
    towerOfHanoi(tmp, input, output, n-1)
  }
};

let ar = [7, 6, 5, 4, 3, 2, 1];
let br = [];
let cr = [];

console.log('Start test:');
console.log('ar:', ar);
console.log('br:', br);
console.log('cr:', cr);

console.log('game start...');
towerOfHanoi(ar, cr, br, ar.length);

console.log('ar:', ar);
console.log('br:', br);
console.log('cr:', cr);