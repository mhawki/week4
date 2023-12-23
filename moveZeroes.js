function moveZeroes(nums) {
  let zero = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          let temp = nums[zero];
          nums[zero] = nums[i];
          nums[i] = temp;
          zero++;
      }
  }
  return nums
}
const nums = [0, 1, 0, 3, 12]
console.log(moveZeroes(nums));