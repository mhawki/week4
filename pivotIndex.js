function pivotIndex(nums) {
    let totalSum = 0;
    let num;
    for (let i = 0; i < nums.length; i++) {
        num = nums[i];
        totalSum += num;  
    }
  
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;  
        }
        leftSum += nums[i]; 
    }
  
    return -1; 
  }
  
  let nums1 = [1, 7, 3, 6, 5, 6];
  console.log(pivotIndex(nums1)); 
  
  let nums2 = [1, 2, 3];
  console.log(pivotIndex(nums2)); 
  
  let nums3 = [2, 1, -1];
  console.log(pivotIndex(nums3)); 