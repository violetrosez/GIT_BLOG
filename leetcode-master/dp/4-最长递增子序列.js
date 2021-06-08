// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
// 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
// ---  [0,1,2,7]

/**
 * 思路：
 * f[i] 表示下标为i的最长上升子序列
 */

function maxInCrease(arr) {
  let f = [];
  f[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    f[i] = 1;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        f[i] = Math.max(f[i], f[j] + 1);
      }
    }
  }
  return Math.max(...f);
}

console.log(maxInCrease([1, 3, 6, 7, 9, 4, 10, 5, 6]));
