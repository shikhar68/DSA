//Sort an array of 0s, 1s and 2s

input [1,2,1,1,1,0,0,0,1,2]
output [0,0,0,1,1,1,1,2,2,2]

input [1,0,1]
output [0,1,1]

input [2,0,1,2]
output [0,1,2,2]

// Algo:
// 1. Create a new blank array2.
// 2. Apply 1st loop on array.
// 3. Create condition for 0 if array[i]===0 push it into new array2.
// 4. Apply 2nd loop on array.
// 5. Create condition for 1 if array[i]===1 push it into new array2.
// 6. Apply 3rd loop on array.
// 7. Create condition for 2 if array[i]===2 push it into new array2.