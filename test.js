var a = [1, 2, 4, 5, 10];
var searchValue = 1;

var index = -1;

var left = 0;
var right = a.length - 1;

while (left <= right) {
  middle = Math.floor((left + right) / 2);

  if (a[middle] == searchValue) {
    index = middle;
    break;
  } else if (a[middle] < searchValue) {
    left = middle + 1;
  } else {
    right = middle - 1;
  }
}

console.log(a[index]);
console.log("aidjud9jijvf");
