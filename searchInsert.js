function searchInsert(nums, target){
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= target){
            return i
        }
    }
    return nums.length
} 

let nums1 = [1, 3, 5, 6]
console.log(searchInsert(nums1, 5));
console.log(searchInsert(nums1, 2));
console.log(searchInsert(nums1, 7));

