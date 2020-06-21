/* Merge sort takes a divide and conquer approach to sorting. It breaks the array down into continually smaller chunks, then merges them back together in the correct order*/

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  // The Math.floor function returns the largest integer less than or equal to a given number.
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
};

// 2 sorted halves are merged together in the correct order
function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
        array[outputIndex++] = left[leftIndex++];
    } else {
        array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
  console.log(array);
};

// Merge sort has a best, average, and worst-case performance of O(nlog(n))

/*Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

What is the resulting list that will be sorted after 3 recursive calls to mergesort?
1st call: [21, 1, 26, 45, 29, 28, 2, 9], [16, 49, 39, 27, 43, 34, 46, 40]
2nd call: [21, 1, 26, 45], [29, 28, 2, 9], [16, 49, 39, 27], [43, 34, 46, 40]
3rd call: [21, 1], [26, 45], [29, 28], [2, 9], [16, 49], [43, 34], [46, 40]

What is the resulting list that will be sorted after 16 recursive calls to mergesort?
What are the first 2 lists to be merged?
Which two lists would be merged on the 7th merge?
no idea for these questions...

Honestly not sure why they are asking these questions...
sorted result is: [1,  2,  9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49]
*/

/* Given a Linked List, sort the linked list using merge sort. You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.*/

//requires Node and LinkedList class

function sortedLinkedList(head) {
  if (head === null || head.next !== null) {
      return head;
  }

  let prev = null;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
  }

  prev.next = null;
  const list1 = sortedLinkedList(head);
  const list2 = sortedLinkedList(slow);

  return mergeLinkedList(list1, list2)
}

function mergeLinkedList(link1, link2) {
  const head = new _Node();
  let current = head;
  while(link1 !== null && link2 !== null) {
      if (link1.val < link2.val) {
          current.next = link1;
          link1 = link1.next;
      } else {
          current.next = link2;
          link2 = link2.next;
      }
      current = current.next;
  }
  current.next = link1 === null ? link2 : link1;
  return head.next;
}
