function hasTargetSum(nums, target) {
  // Write your algorithm here
  const previousValues = {}
  for(let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i]
    const needednum = target - currentNumber
    const index2 = previousValues[needednum]
    if (index2 != null) {
      return [index2, 1]
    }else {
      previousValues[currentNumber] = i
    }
  }

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
In your array , iterate over each item
for each num1 index1 in nums
  for each num2 index2 in nums
  return [index1, index2]

*/

/*
  Add written explanation of your solution here
  //here we are give an array of numbers and a target
  //if there is a pair of numbers that add up tothe target
  //assuming there exixts only a pair for any target pased
  //then return those two numbers
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
