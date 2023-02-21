let a = 0;
console.log(a);

setTimeout(() => {
  a = 1;
  console.log(a);
}, 2000);

console.log(a);
