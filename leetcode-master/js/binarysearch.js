/**
 * 二分查找
 * 确定一个数在一个有序数组中的位置
 */
function binarysearch(arr, target) {
  let left = arr[0],
    right = arr[arr.length - 1];
    
    while(left < right) {
        let mid = parseInt((left + right) / 2);
   
        if(arr[mid] == target) return mid

        if(arr[mid] > target) {
            right = mid - 1
        }

        if(arr[mid] < target) {
            left = mid + 1
        }
    }

    return -1
}
console.log(binarysearch([1,2,3,4,5],5));