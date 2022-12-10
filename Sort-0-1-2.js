//Sort an array of 0s, 1s and 2s

input[(1, 2, 1, 1, 1, 0, 0, 0, 1, 2)];
output[(0, 0, 0, 1, 1, 1, 1, 2, 2, 2)];

input[(1, 0, 1)];
output[(0, 1, 1)];

input[(2, 0, 1, 2)];
output[(0, 1, 2, 2)];

// Algo:
// 1. Create 3 blank arrays.
// 2. Apply 1st loop on main array.
// 3. Create condition for 0 if array[i]<1 push it into new arr1.
// 4. Create condition for 1 if array[i]=1 push it into new arr2.
// 5. Create condition for 2 if array[i]>1 push it into new arr3.
// 6. Mearge all 3 array

//Using one loop
function result(arr) {
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 1) {
      arr1.push(arr[i]);
    } else if (arr[i] > 1) {
      arr3.push(arr[i]);
    } else if ((arr[i] = 1)) {
      arr2.push(arr[i]);
    }
  }
  myArray = [...arr1, ...arr2, ...arr3];
  console.log(myArray);
}
result([1, 2, 1, 0, 2, 2, 0, 1, 1, 2]);
//Algo 2: 2nd way using swaping technique

// 2.1. Create 2 for loop
// 2.2. compare arr[i] > arr[j] is yes than swap them
// store = arr[i];
// arr[i] = arr[j];
// arr[j] = store;
// 2.3 if not continoue the loop

function result(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}
result([1, 2, 1, 1, 1, 0, 0, 0, 1, 2]);
