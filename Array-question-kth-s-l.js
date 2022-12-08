// To find kth smallest or largest element in an array
// const arr = [2,1,4,3,6,5,7];
// const input = findKthSmallestOrLargest([2,1,4,3,6,5,7], 3);

// // Output
// {
//   smallest: 3,
//   largest: 5,
// }

//ALGO: neww update
// 1. Create a function with two parameter arr and k
// 2. Sort the arr
// 3. Now return the arr[k] as smalest value
// 4. And return arr[array.length-k] as the largest value

function result(arr, k) {
  arr.sort();
  console.log(arr);
}
result([2, 1, 4, 3, 6, 5, 7], 3);
