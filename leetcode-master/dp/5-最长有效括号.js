// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
// 输入：s = ")()())"
// 输出：4
// 解释：最长有效括号子串是 "()()"

/**
 * 思路： f[i] 表示以s[i]为结尾的子串中，形成的最长有效子串的长度，且有效子串是以s[i]为结尾。
 * @param {*} str
 * @returns
 */
function maxLen(str) {
  let f = new Array(str.length).fill(0);
  let max = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index] == ")") {
      // ...()的情况
      if (str[index - 1] == "(") {
        f[index] = index > 2 ? f[index - 2] + 2 : 2;
      } else if (str[index - f[index - 1] - 1] == "(") {
        // console.log(f[index - f[index - 1] - 2]);
        f[index] =
          f[index - 1] +
          (f[index - f[index - 1] - 2] ? f[index - f[index - 1] - 2] : 0) + //不存在 = 0
          2;
      }
      max = Math.max(max, f[index]);
    }
  }
  //   console.log(f);
  return max;
}

console.log(maxLen("(())"));
