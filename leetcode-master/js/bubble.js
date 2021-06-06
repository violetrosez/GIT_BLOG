/**
 * 冒泡排序
 */

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([10, 5, 7, 11, 1, 2, 6, 9, 3, 20, 12]));

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 1; j < arr.length - i; j++) {
//       if (arr[j] > arr[j - 1]) {
//         let t = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = t;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([10, 5, 7, 11, 1, 2, 6, 9, 3, 8, 4]));


