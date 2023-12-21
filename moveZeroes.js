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
}