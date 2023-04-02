function hasTargetSum(array, target) {
  // Write your algorithm here
    const hash = {};
  
    for (let i = 0; i < array.length; i++) {
      const currentNumber = array[i];
      const difference = target - currentNumber;
  
      if (hash[difference]) {
        return true;
      }
  
      hash[currentNumber] = true;
    }
  
    return false;
  }
  


/* 
  Write the Big O time complexity of your function here
  The time complexity of the above JavaScript function is O(n^2). 
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target):
    Create an empty set called seenNumbers
    For each number in the array:
        Compute the difference between the target and the current number
        If the difference is in seenNumbers:
            Return true
        Add the current number to seenNumbers
    Return false

*/

/*
  Add written explanation of your solution here
  The hasTargetSum function creates an empty hash table to keep track of numbers that have been seen so far. It then iterates over each number in the input array and calculates the difference between the target and the current number. It checks if the difference is already in the hash table; if it is, that means there is a pair of numbers in the array that adds up to the target, so the function returns true. If the difference is not in the hash table, the current number is added to the hash table so that it can be used in future iterations. If no pair of numbers adds up to the target, the function returns false.
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
