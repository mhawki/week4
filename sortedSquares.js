function sortedSquares(nums1,m, nums2, n) {
   const array1 = [];
   const array2 = [];
  for (let i = 0; i < nums1.length; i++) {
    if (i < m) {
      array1.push(nums1[i]);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (i < n) {
      array2.push(nums2[i]);
    }
  }
  return [...array1, ...array2].sort();
}

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
let m = 3;
let n = 3;
console.log(sortedSquares(nums1, m, nums2, n));
