/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numIndexes = new Map();

    for(let i =0; i<nums.length; i++){
        let rest = target - nums[i] 

        if(numIndexes.has(rest)){
            return [numIndexes.get(rest),i]
        }

        numIndexes.set(nums[i],i)
    }
};