/*
Objective: Find the sum between two indices

Main idea: Calculate all cummulative sums for indices using O(n) only once so retriaval is O(1).
To find the sum for specific indices, it can be done purely smart subtracting with the cummulative values.

Prerequisites: None

Loop invariant: The constructed prefix array consist of the correct cummulative values from the normal array

Complexity (for the solution):
Time: O(n) the first time, always O(1) afterwards
Space: O(n)
*/

let arr = [8, 3, 6, 1, 9, 2, 7, 5];
let arr2 = [8, 3, 5];

let startIndex = 2;
let endIndex = 6;


// use function to find prefix array //
function prefix(arr){
    let prefixArray = [arr[0]];
    for(let i=0; i<arr.length-1; i++){
        // making prefixArray //
        prefixArray.push(prefixArray[i]+arr[i+1]);
    }
    return prefixArray
}

// use the prefix array to find the sum between the indices //
function findSum(prefixArray, startIndex, endIndex){
    if(startIndex === 0){
        // edge case //
        return prefixArray[endIndex]
    }
    return prefixArray[endIndex]-prefixArray[startIndex-1]
}

let prefixArr = prefix(arr);



