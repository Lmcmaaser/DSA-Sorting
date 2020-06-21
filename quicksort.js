/* Quicksort uses a divide and conquer approach.
Partition the array into 2 halves around a pivot value.
All of the values which are less than the pivot value go to 1 half of the array, and all of the values which are greater than the pivot go to the other half of the array.
Then recursively sort the 2 halves of the array until the halves are of length 0 or 1.*/

// quicksort is more commonly used than merge sort
// more cache-efficient and can easily be performed without additional memory allocations
// O(nlog(n)) best and average-case performance, although it is O(n^2) in the worst case

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

// Lomuto's algorithm (common in-place algorithm)
/* The pivot is the final value in the array.
Loop through the array, swapping values as you go to put them on either side of the pivot point.
Finally, put the pivot into the correct place in the array.*/

function partition(array, start, end) {
    const pivot = array[end - 1];
    console.log(pivot)
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
    console.log(j)
};

// swap function swaps the values at 2 indices in an array.
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

/* 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

The pivot could have been 17, but could not have been 14
  False b/c All of the values which are less than the pivot value go to 1 half of the array, and all of the values which are greater than the pivot go to the other half of the array. all other values are either less than 14 or greater than 17
The pivot could have been either 14 or 17
  True, b/c see above
Neither 14 nor 17 could have been the pivot
  False
The pivot could have been 14, but could not have been 17
  False
...these questions seem redundant and all have the same explanation

2) Given the following list of numbers:
  14, 17, 13, 15, 19, 10, 3, 16, 9, 12
  show the resulting list after the second partitioning according to the quicksort algorithm.

When using the last item on the list as a pivot
When using the first item on the list as a pivot*/


//Write a function qSort that sorts a dataset using the quicksort algorithm.
// Write a function mSort that sorts the dataset above using the merge sort algorithm.
//why do I need a function for this? Can't I just call quickSort(testArr) and mergeSort(testArr)?
let testStr = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
let stringArr = testStr.split(' ')
let testArr = []
stringArr.map(str => testArr.push(Number(str)))
