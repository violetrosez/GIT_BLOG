/**
 * 快排思想
 * 基准数
 * @param {*} arr
 */
function quicksort(arr) {
  if (arr.length < 2) return arr;
  let flag = arr[0];
  // 这一步比较关键  没有就死循环了
  let left = arr.filter((item, index) => item <= flag && index !== 0);
  let right = arr.filter((item, index) => item > flag);
  // console.log(left, right);
  return [...quicksort(left), flag, ...quicksort(right)];
}

console.log(quicksort([4, 1, 4, 3, 5, 2]));
