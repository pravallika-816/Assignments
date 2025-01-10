let n = 5; 
let grid = '';
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    grid += '* ';
  }
  grid += '\n';
}
console.log(grid);

let triangle = '';
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    triangle += '* ';
  }
  triangle += '\n';
}
console.log(triangle);

let sparsePattern = '';
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i==j || i+j==6) { 
      sparsePattern += '* ';
    }
    else {
      console.log("&nbsp;&nbsp"); 
    }
  }
  sparsePattern += '\n';
}
console.log(sparsePattern);