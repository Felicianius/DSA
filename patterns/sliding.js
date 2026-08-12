/*
Main idea: Keep track of windowSum as the array is extended every iteration. 
As soon as the windowSum is exceeded for a window, then the left pointer gets 
incremented to decrease the window untill the sum of the window counts.
The main idea is that the Sum of the window is handled dynamically, as certain indexes
gets added or removed from the window. 

Prerequisites: Array must consist of positive numbers.

Loop invariant: given window is always between indexes from arraypointers left and right. 
So windowSum represents the sum of the values of indexes left to right.

Complexity:
Time: O(n)
Space: O(1)
*/

let arr = [2, 1, 5, 1, 2, 3, 2];
let maxSum = 7;

function longestWindow (arr, maxSum){
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let windowSum = 0;

    for(right; right<=arr.length-1; right++){
        windowSum += arr[right];
            while(windowSum > maxSum){
                windowSum -= arr[left++];
            }
        maxLength = Math.max(maxLength, (right-left+1));
    }
    return maxLength;
}

console.log(longestWindow(arr, maxSum));

