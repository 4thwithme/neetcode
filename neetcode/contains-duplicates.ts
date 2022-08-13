// Given an integer array nums, return true if
// any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

const containsDuplicate = (nums: number[]): boolean => {
  const set = new Set();
  let i = 0;

  while (i < nums.length) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
    i++;
  }
  return false;
};

const res = containsDuplicate([1, 3, 4, 6, 3, 3, 3, 3, 7, 8]);
console.log(res);

const res2 = containsDuplicate([1, 3, 4, 6, 7, 8]);
console.log(res2);

// 2 option
const containsDuplicate2 = (nums: number[]): boolean => {
  const set = new Set(nums);
  return set.size !== nums.length;
};

const res3 = containsDuplicate2([1, 3, 4, 3, 3, 3, 36, 3, 7, 8]);
console.log(res3);
