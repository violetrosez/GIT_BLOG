// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// [1,-2,3,2,-4]

/**
 * 思路：
 * f[i] 表示到0-i的最大和
 *
 * @param {*} arr
 */
function maxSum(arr) {
  let f = [];
  f[0] = 0;
  let res = 0;
  for (let index = 1; index < arr.length; index++) {
    f[index] = f[index - 1] < 0 ? arr[index] : f[index - 1] + arr[index];
    res = Math.max(res, f[index]);
  }

  return res;
}
console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
