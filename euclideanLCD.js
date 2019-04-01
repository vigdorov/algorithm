let lcd = function (a, b) {
  if (a === b) return a;
  if (a  >  b) return lcd(a - b, b);
  if (a  <  b) return lcd(a, b - a);
};

console.log( lcd(988840, 2000) );