function rotate(nums, k) {
  const n = nums.length;
  k = k % n;
  const rotated = [];

  for (let i = 0; i < nums.length; i++) {
      rotated[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
      nums[i] = rotated[i];
  }
  return nums
}

let nums1 = [1, 2, 3, 4, 5, 6, 7];
let k1 = 4;
console.log(rotate(nums1, k1));