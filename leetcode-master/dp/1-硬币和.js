// 题目描述:给定不同面额的硬币 coins 和一个总金额 amount。
// 编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1
// 示例1：
// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3
// 解释: 11 = 5 + 5 + 1

// 示例2：
// 输入: coins = [2], amount = 3
// 输出: -1

/**
 * 思路:
 * coins = [1, 2, 5], amount = 11
 * f[0] = 0 表示 组成 0元的最少硬币数为0
 * f[1] = 1 f[1] =  min(f[1-1],f[1-2],f[1-5]) + 1
 * f[2] = 1 f[2] =  min(f[2-1],f[2-2],f[2-5]) + 1
 * f[3] = 2 f[3] =  min(f[3-1],f[3-2],f[3-5]) + 1
 * f[4] = 2 f[4] =  min(f[4-1],f[4-2],f[4-5]) + 1
 * 以此类推...
 */

function minCoins(coins, amount) {
  let arr = []; // 暂存数据
  arr[-1] = Infinity;
  arr[0] = 0;
  for (let i = 1; i <= amount; i++) {
    let _arr = coins.map((e) => arr[i - e >= 0 ? i - e : -1] + 1);
    arr[i] = Math.min(..._arr)
  
  }
  return arr[amount] == Infinity ? -1 : arr[amount]
}
console.log(minCoins([2],3));
