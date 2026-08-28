//
/*
Objective: Find the two indiceshva in the array which gives the sum

Main idea: Initialize two pointers, one at the first and last index. If the sum is bigger than target, then move the right pointer to decrease the sum. 
If the sum is smaller than target then move the left pointer to increase the sum. Using that the array is sorted, you know what numbers are either making
the sum too small or too big, that you discard the index and it therefore wont be solution.

Prerequisites: Array must be sorted

Loop invariant: If there exist a solution, then the indices must be within the interval of [left pointer; right pointer]

Complexity:
Time: O(n)
Space: O(1)
*/

//

let arr = [-7, -3, 0, 2, 5, 9, 11, 14, 18];
let target = 11;

function findSum(arr, target){
    let leftPointer = 0;
    let rightPointer = arr.length-1;

    while(leftPointer < rightPointer){
        let tempSum = arr[leftPointer]+arr[rightPointer];
        if(tempSum === target){
            return {left: leftPointer, right: rightPointer}
        }
        else if(tempSum < target){
            // sum is too small, increment left pointer to increase sum //
            leftPointer++;
        }
        else{
            // sum is too big, decrement right pointer to decrease sum //
            rightPointer--;
        }
    }
    return {left: -1, right: -1}
}

let response = findSum(arr, target);
console.log(response.left);
console.log(response.right);

console.log(arr[0]+arr[8])
