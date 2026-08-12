/*
Main idea: Divide and conquer, split the array logically until you find the index of the target you are searching for.
For every iteration go to the middle. If target is bigger than value of middle index, then discard the left side of array.
If target is smaller than the value of middle index then discard the right side of of array. 
If though target is equal to the value of middle index, then the algorithm will simply return the index as the target is found.

Prerequisites: Array must be sorted.

Loop invariant: If target exists then it will always be between the index pointers left and right.

Complexity:
Time: O(log n)
Space: O(1)

*/

let array = [2, 4, 7, 12, 20, 25, 45, 70];

function binSearch(arr, target){
    // intialize index pointers left and right //
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        
        if(target === arr[mid]){
            if (arr[mid] === arr[mid-1]){
                right = mid-1;
            }
            else{
                return mid;
            }
        }
        else if(target > arr[mid]){
            // left side is discarded cause it is smaller than both mid and target //
            left = mid+1;
        }
        else{
            // right side of the array is  discarded cause it is larger or equal than both mid and target //
            right = mid-1;
        }
    }
    return -1;
}
