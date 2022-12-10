// To find kth smallest or largest element in an array
// const arr = [2,1,4,3,6,5,7];
// const input = findKthSmallestOrLargest([2,1,4,3,6,5,7], 3);

// // Output
// {
//   smallest: 3,
//   largest: 5,
// }

//ALGO: new update
// 1. Create a function with two parameter arr and k
// 2. Sort the arr
// 2.1. Creare 2 for loop
// 2.2. compare arr[i] > arr[j] is yes than swap them
// 3. Now return the arr[k-1] as smalest value
// 4. And return arr[array.length-k] as the largest value

function result(arr, k) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log("sorted array:", arr);

  console.log("kth smallest:", arr[k - 1]);
  console.log("kth largest:", arr[arr.length - k]);
}
result([2, 1, 4, 3, 6, 5, 7], 3);
