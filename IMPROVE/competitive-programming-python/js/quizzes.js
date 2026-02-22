// ============================================
// COMPETITIVE PROGRAMMING - QUIZ DATABASE
// ============================================

const quizQuestions = {
    // ==========================================
    // MODULE 1: FOUNDATIONS QUIZ
    // ==========================================
    foundations: [
        {
            id: 'FQ-1',
            question: 'What is Big O notation used for?',
            options: ['A. Describing memory usage', 'B. Describing algorithm efficiency', 'C. Describing code readability', 'D. Describing input size'],
            correct: 'B',
            explanation: 'Big O notation describes the upper bound of an algorithm\'s time or space complexity as a function of input size.'
        },
        {
            id: 'FQ-2',
            question: 'What is the time complexity of binary search on a sorted array?',
            options: ['A. O(1)', 'B. O(log n)', 'C. O(n)', 'D. O(n^2)'],
            correct: 'B',
            explanation: 'Binary search halves the search space at each step, resulting in logarithmic O(log n) time complexity.'
        },
        {
            id: 'FQ-3',
            question: 'What is the time complexity of a nested loop where both loops run n times?',
            options: ['A. O(n)', 'B. O(n log n)', 'C. O(n^2)', 'D. O(2^n)'],
            correct: 'C',
            explanation: 'Nested loops multiply their complexities. With n iterations each, total operations = n * n = n^2 = O(n^2).'
        },
        {
            id: 'FQ-4',
            question: 'Which operation is O(1) in Python lists?',
            options: ['A. Searching for an element', 'B. Inserting at the beginning', 'C. Accessing by index', 'D. Deleting by value'],
            correct: 'C',
            explanation: 'List access by index is constant time O(1) because memory location can be directly computed.'
        },
        {
            id: 'FQ-5',
            question: 'What is amortized time complexity?',
            options: ['A. Worst case per operation', 'B. Best case per operation', 'C. Average over sequence of operations', 'D. Space complexity only'],
            correct: 'C',
            explanation: 'Amortized analysis gives the average cost per operation over a sequence, even when individual operations vary significantly.'
        },
        {
            id: 'FQ-6',
            question: 'What is the space complexity of a function with no recursion or dynamic allocation?',
            options: ['A. O(log n)', 'B. O(n)', 'C. O(1)', 'D. O(n^2)'],
            correct: 'C',
            explanation: 'If a function uses only a fixed amount of memory (local variables) regardless of input, space complexity is O(1).'
        },
        {
            id: 'FQ-7',
            question: 'What is the time complexity of Python\'s sorted() function?',
            options: ['A. O(n)', 'B. O(n log n)', 'C. O(n^2)', 'D. O(log n)'],
            correct: 'B',
            explanation: 'Python uses Timsort, which has average and worst-case time complexity of O(n log n).'
        },
        {
            id: 'FQ-8',
            question: 'What happens to time complexity when the input doubles for O(n log n)?',
            options: ['A. Doubles', 'B. More than doubles', 'C. Less than doubles', 'D. Stays same'],
            correct: 'B',
            explanation: 'For O(n log n), if input doubles: time ≈ 2 * n * log(2n) = 2n * (log n + 1), which is more than double.'
        },
        {
            id: 'FQ-9',
            question: 'Which is faster: O(log n) or O(n)?',
            options: ['A. O(n)', 'B. O(log n)', 'C. They are equal', 'D. Depends on n'],
            correct: 'B',
            explanation: 'O(log n) grows slower than O(n), making it faster for large inputs. For n=1000, log n ≈ 10 vs n = 1000.'
        },
        {
            id: 'FQ-10',
            question: 'What is the worst-case space complexity of recursion with depth n?',
            options: ['A. O(1)', 'B. O(log n)', 'C. O(n)', 'D. O(n^2)'],
            correct: 'C',
            explanation: 'Recursion uses a call stack. With maximum depth n, space needed is O(n) for the stack frames.'
        },
        {
            id: 'FQ-11',
            question: 'What is the time complexity of appending to a Python list?',
            options: ['A. O(n)', 'B. O(log n)', 'C. O(1) amortized', 'D. O(n log n)'],
            correct: 'C',
            explanation: 'List append is amortized O(1). Occasionally the list resizes (O(n)), but over many operations, average is constant.'
        },
        {
            id: 'FQ-12',
            question: 'Which sorting algorithm has best O(n log n) time?',
            options: ['A. Bubble sort', 'B. Insertion sort', 'C. Merge sort', 'D. Selection sort'],
            correct: 'C',
            explanation: 'Merge sort consistently achieves O(n log n) time. Bubble/Insertion/Selection sort are O(n^2) in worst case.'
        }
    ],

    // ==========================================
    // MODULE 2: DATA STRUCTURES QUIZ
    // ==========================================
    datastructures: [
        {
            id: 'DSQ-1',
            question: 'What is the main advantage of a linked list over an array?',
            options: ['A. Faster access by index', 'B. Efficient insertion/deletion', 'C. Less memory overhead', 'D. Better cache performance'],
            correct: 'B',
            explanation: 'Linked lists allow O(1) insertion/deletion at known positions. Arrays require shifting elements O(n).'
        },
        {
            id: 'DSQ-2',
            question: 'What is the disadvantage of linked lists compared to arrays?',
            options: ['A. More memory overhead', 'B. No random access', 'C. Poor cache locality', 'D. All of the above'],
            correct: 'D',
            explanation: 'Linked lists require extra memory for pointers, don\'t support random access, and have poor cache locality.'
        },
        {
            id: 'DSQ-3',
            question: 'Which data structure is LIFO (Last In First Out)?',
            options: ['A. Queue', 'B. Stack', 'C. Hash Table', 'D. Linked List'],
            correct: 'B',
            explanation: 'Stack follows LIFO: last element added is first removed. Queue follows FIFO.'
        },
        {
            id: 'DSQ-4',
            question: 'What is the most efficient data structure for priority queue?',
            options: ['A. Array', 'B. Linked List', 'C. Heap', 'D. Hash Table'],
            correct: 'C',
            explanation: 'Heap provides O(log n) insert and O(log n) extract-min (or max), making it ideal for priority queues.'
        },
        {
            id: 'DSQ-5',
            question: 'What is the time complexity of hash table lookup in average case?',
            options: ['A. O(1)', 'B. O(log n)', 'C. O(n)', 'D. O(n log n)'],
            correct: 'A',
            explanation: 'Hash tables provide average O(1) lookup by computing hash and going directly to that bucket.'
        },
        {
            id: 'DSQ-6',
            question: 'What can cause O(n) lookup in a hash table?',
            options: ['A. All elements at same index', 'B. Hash function is perfect', 'C. Small table', 'D. Few elements'],
            correct: 'A',
            explanation: 'If all elements hash to same bucket (collision), lookup degrades to linear search through chain: O(n).'
        },
        {
            id: 'DSQ-7',
            question: 'What does deque stand for?',
            options: ['A. Double-ended queue', 'B. Dynamic queue', 'C. De-queue', 'D. Data queue'],
            correct: 'A',
            explanation: 'Deque (double-ended queue) allows insertions and deletions from both ends in O(1) time.'
        },
        {
            id: 'DSQ-8',
            question: 'How do you implement a queue using two stacks?',
            options: ['A. Both stacks for enqueue', 'B. Both for dequeue', 'C. One for enqueue, one for dequeue', 'D. Not possible'],
            correct: 'C',
            explanation: 'Use stack1 for enqueue. For dequeue, if stack2 empty, transfer all from stack1 to stack2 (reversing order), then pop from stack2.'
        },
        {
            id: 'DSQ-9',
            question: 'What is the primary use of a hash map?',
            options: ['A. Sorted storage', 'B. Fast key-value lookup', 'C. Sequential access', 'D. Minimum element'],
            correct: 'B',
            explanation: 'Hash maps provide fast (average O(1)) key-value lookups, insertions, and deletions.'
        },
        {
            id: 'DSQ-10',
            question: 'What is the time complexity of inserting at the beginning of a linked list?',
            options: ['A. O(1)', 'B. O(n)', 'C. O(log n)', 'D. O(n log n)'],
            correct: 'A',
            explanation: 'Inserting at head of linked list is O(1) - just create node and update head pointer.'
        },
        {
            id: 'DSQ-11',
            question: 'What is used to detect a cycle in a linked list?',
            options: ['A. Binary search', 'B. Floyd\'s cycle detection', 'C. Hash table', 'D. Both B and C'],
            correct: 'D',
            explanation: 'Both Floyd\'s (slow-fast pointers) and hash table (track visited nodes) can detect cycles.'
        },
        {
            id: 'DSQ-12',
            question: 'Which Python module provides efficient queue/deque operations?',
            options: ['A. queue', 'B. collections.deque', 'C. heapq', 'D. array'],
            correct: 'B',
            explanation: 'collections.deque provides O(1) operations on both ends. queue.Queue is for threading. heapq is for priority queue.'
        }
    ],

    // ==========================================
    // MODULE 3: HASH TABLES QUIZ
    // ==========================================
    hashtables: [
        {
            id: 'HTQ-1',
            question: 'Which problem pattern is best solved with a hash table?',
            options: ['A. Finding minimum in subarray', 'B. Finding if elements sum to target', 'C. Sorting elements', 'D. Binary search'],
            correct: 'B',
            explanation: 'Two-sum, group anagrams, and frequency-based problems use hash tables to track seen elements efficiently.'
        },
        {
            id: 'HTQ-2',
            question: 'What is the Two Sum problem solution with hash table?',
            options: ['A. Check all pairs', 'B. For each element, check if target - element exists in hash', 'C. Sort and use two pointers', 'D. Binary search'],
            correct: 'B',
            explanation: 'Iterate through array, check if (target - current) exists in hash table. This gives O(n) time.'
        },
        {
            id: 'HTQ-3',
            question: 'How do you group anagrams?',
            options: ['A. Sort each string, use as key', 'B. Hash the characters', 'C. Compare all pairs', 'D. Use tree'],
            correct: 'A',
            explanation: 'Group by sorted version of each string (which is same for anagrams) as hash map key. All anagrams have same sorted string.'
        },
        {
            id: 'HTQ-4',
            question: 'Which data structure is ideal for frequency counting?',
            options: ['A. Array', 'B. Linked List', 'C. Hash Map', 'D. Stack'],
            correct: 'C',
            explanation: 'Hash map efficiently counts frequencies: map[element] = map.get(element, 0) + 1, in O(1) per update.'
        },
        {
            id: 'HTQ-5',
            question: 'What is subarray sum equals k using hash?',
            options: ['A. Track all subarrays', 'B. Track prefix sums, check if prefix_sum - k exists', 'C. Binary search', 'D. Two pointers'],
            correct: 'B',
            explanation: 'Track running sum. If (current_sum - k) seen before, subarray between those indices sums to k. Store prefix sums in hash.'
        },
        {
            id: 'HTQ-6',
            question: 'How to find duplicates in an array efficiently?',
            options: ['A. Compare all pairs', 'B. Use hash set, if already in set, it\'s duplicate', 'C. Sort', 'D. Use stack'],
            correct: 'B',
            explanation: 'Iterate elements, add to hash set. If element already in set, it\'s a duplicate. O(n) time, O(n) space.'
        },
        {
            id: 'HTQ-7',
            question: 'What problem uses "hash map from character to last seen index"?',
            options: ['A. Two sum', 'B. Longest substring without repeating characters', 'C. Group anagrams', 'D. Merge intervals'],
            correct: 'B',
            explanation: 'Track last seen index of each character. When duplicate appears, move left boundary past previous occurrence, tracking max length.'
        },
        {
            id: 'HTQ-8',
            question: 'How to check if two strings are anagrams?',
            options: ['A. Compare length and character counts', 'B. Check if they are equal', 'C. Binary search', 'D. Stack'],
            correct: 'A',
            explanation: 'Two approaches: 1) Sort both strings, compare. 2) Count character frequencies using hash maps, compare.'
        },
        {
            id: 'HTQ-9',
            question: 'What is time complexity of hash operations in average case?',
            options: ['A. O(n)', 'B. O(1)', 'C. O(log n)', 'D. O(n log n)'],
            correct: 'B',
            explanation: 'Hash table operations (insert, delete, lookup) are average O(1) due to direct hashing.'
        },
        {
            id: 'HTQ-10',
            question: 'What collision resolution does Python\'s dict use?',
            options: ['A. Separate chaining', 'B. Open addressing', 'C. Both', 'D. Neither'],
            correct: 'B',
            explanation: 'Python\'s dict uses open addressing with linear probing: if collision, probes next slots until empty found.'
        }
    ],

    // ==========================================
    // MODULE 4: SLIDING WINDOW QUIZ
    // ==========================================
    slidingwindow: [
        {
            id: 'SWQ-1',
            question: 'What is the time complexity of sliding window algorithm?',
            options: ['A. O(n^2)', 'B. O(n)', 'C. O(log n)', 'D. O(n log n)'],
            correct: 'B',
            explanation: 'Sliding window processes each element at most twice (once entering, once exiting), giving O(n) time.'
        },
        {
            id: 'SWQ-2',
            question: 'What are the two types of sliding window?',
            options: ['A. Static and rotating', 'B. Fixed-size and variable-size', 'C. Fast and slow', 'D. Left and right'],
            correct: 'B',
            explanation: 'Fixed-size maintains constant length k. Variable-size adjusts size based on conditions.'
        },
        {
            id: 'SWQ-3',
            question: 'How to find maximum sum of subarray of size k?',
            options: ['A. Check all subarrays', 'B. Maintain sliding window sum', 'C. Use binary search', 'D. Use recursion'],
            correct: 'B',
            explanation: 'Calculate sum of first k elements. Then slide: add new element, subtract element leaving window. Track maximum.'
        },
        {
            id: 'SWQ-4',
            question: 'How to find longest substring without repeating characters?',
            options: ['A. Hash all substrings', 'B. Expand right, shrink left when duplicate found', 'C. Binary search', 'D. Two pointers from ends'],
            correct: 'B',
            explanation: 'Use hash map to store last index of each character. Expand right. When duplicate found, move left after previous occurrence.'
        },
        {
            id: 'SWQ-5',
            question: 'When does variable-size window shrink?',
            options: ['A. Always', 'B. When condition violated', 'C. When condition satisfied', 'D. Never'],
            correct: 'B',
            explanation: 'Variable-size window expands until invalid, then shrinks from left until valid again.'
        },
        {
            id: 'SWQ-6',
            question: 'What data structure helps in variable-size sliding window?',
            options: ['A. Stack', 'B. Queue', 'C. Hash map or frequency array', 'D. Linked list'],
            correct: 'C',
            explanation: 'Hash map (or array for fixed alphabet) tracks element frequencies within the window.'
        },
        {
            id: 'SWQ-7',
            question: 'How to find longest substring with at most k distinct characters?',
            options: ['A. Try all substrings', 'B. Expand right, shrink when distinct > k', 'C. Binary search', 'D. Hash all'],
            correct: 'B',
            explanation: 'Expand right, tracking distinct count with frequency map. When distinct > k, shrink left until condition satisfied.'
        },
        {
            id: 'SWQ-8',
            question: 'How is fixed-size sliding window different from variable-size?',
            options: ['A. Fixed doesn\'t change size', 'B. Variable doesn\'t change size', 'C. Both same', 'D. Fixed has no boundaries'],
            correct: 'A',
            explanation: 'Fixed-size maintains exact size k (left moves with right). Variable-size adjusts based on validity.'
        },
        {
            id: 'SWQ-9',
            question: 'What problem uses sliding window maximum?',
            options: ['A. Find minimum', 'B. Maximum in every subarray of size k', 'C. Longest palindrome', 'D. Two sum'],
            correct: 'B',
            explanation: 'Use deque (monotonic queue) to maintain decreasing order of values. Front always has max for current window.'
        },
        {
            id: 'SWQ-10',
            question: 'What is the key invariant in sliding window?',
            options: ['A. Window always same size', 'B. Window satisfies problem condition', 'C. Window always empty', 'D. Window always full'],
            correct: 'B',
            explanation: 'At each step, the window should satisfy the problem condition (valid). Invalid windows trigger adjust (shrink).'
        }
    ],

    // ==========================================
    // MODULE 5: TWO POINTERS QUIZ
    // ==========================================
    twopointers: [
        {
            id: 'TPQ-1',
            question: 'What is the primary use of two pointers pattern?',
            options: ['A. Sorting', 'B. Operating on arrays/strings simultaneously from both ends', 'C. Recursion', 'D. Hash tables'],
            correct: 'B',
            explanation: 'Two pointers maintain two indices moving through data, often from opposite ends (left-right) or at different speeds (slow-fast).'
        },
        {
            id: 'TPQ-2',
            question: 'When is left-right two pointers used?',
            options: ['A. Unsorted arrays', 'B. Sorted arrays', 'C. Linked lists', 'D. Trees'],
            correct: 'B',
            explanation: 'Left-right works on sorted data where we can compare elements from both ends to find target or property.'
        },
        {
            id: 'TPQ-3',
            question: 'What is slow-fast two pointers used for?',
            options: ['A. Finding sum', 'B. Detecting cycles or finding middle', 'C. Sorting', 'D. Hashing'],
            correct: 'B',
            explanation: 'Slow-fast pointers detect cycles (if fast meets slow, cycle exists) or find middle element (fast reaches end, slow at middle).'
        },
        {
            id: 'TPQ-4',
            question: 'How does two-sum with two pointers work?',
            options: ['A. Hash all first, check pairs', 'B. Start at ends, move based on sum vs target', 'C. Check all elements', 'D. Binary search'],
            correct: 'B',
            explanation: 'Sorted array: if sum < target, move left right (increase sum). If sum > target, move right left (decrease sum).'
        },
        {
            id: 'TPQ-5',
            question: 'What does the container with most water problem optimize?',
            options: ['A. Volume', 'B. Area = width * min(height[left], height[right])', 'C. Perimeter', 'D. Depth'],
            correct: 'B',
            explanation: 'Area between two lines = distance (right - left) * min(height[left], height[right]), maximizing this value.'
        },
        {
            id: 'TPQ-6',
            question: 'Which pointer moves in container with most water?',
            options: ['A. Always left', 'B. Always right', 'C. Pointer at smaller height', 'D. Both always'],
            correct: 'C',
            explanation: 'Move pointer at smaller height inward, as moving the taller cannot increase area (width decreases, height limited by shorter).'
        },
        {
            id: 'TPQ-7',
            question: 'How to check palindrome with two pointers?',
            options: ['A. Reverse and compare', 'B. Compare s[left] and s[right], move inward', 'C. Hash', 'D. Sort'],
            correct: 'B',
            explanation: 'Place left at 0, right at end. Compare chars. If equal, move both inward. Continue until pointers meet.'
        },
        {
            id: 'TPQ-8',
            question: 'What is the time complexity of two pointers on array?',
            options: ['A. O(n^2)', 'B. O(n)', 'C. O(log n)', 'D. O(n log n)'],
            correct: 'B',
            explanation: 'Each pointer moves at most n steps in total, resulting in O(n) time complexity.'
        },
        {
            id: 'TPQ-9',
            question: 'How to find middle of linked list with two pointers?',
            options: ['A. Count nodes first', 'B. Slow-fast: fast moves 2x speed, return slow when fast reaches end', 'C. Recursive', 'D. Hash map'],
            correct: 'B',
            explanation: 'Slow moves 1 step, fast moves 2 steps. When fast reaches last node, slow is exactly at middle.'
        },
        {
            id: 'TPQ-10',
            question: 'How to detect cycle in linked list?',
            options: ['A. Hash visited nodes', 'B. Floyd\'s algorithm (slow-fast pointers)', 'C. Both', 'D. Neither'],
            correct: 'C',
            explanation: 'Both approaches work. Floyd\'s (slow-fast) is O(1) extra space: if they ever meet, cycle exists.'
        }
    ],

    // ==========================================
    // MODULE 6: BINARY SEARCH QUIZ
    // ==========================================
    binarysearch: [
        {
            id: 'BSQ-1',
            question: 'What data does binary search require?',
            options: ['A. Any array', 'B. Sorted array', 'C. Linked list', 'D. Tree'],
            correct: 'B',
            explanation: 'Binary search requires sorted data. On unsorted data, it doesn\'t work correctly.'
        },
        {
            id: 'BSQ-2',
            question: 'What is the time complexity of binary search?',
            options: ['A. O(n)', 'B. O(log n)', 'C. O(1)', 'D. O(n log n)'],
            correct: 'B',
            explanation: 'Binary search halves the search space each iteration, giving logarithmic O(log n) time.'
        },
        {
            id: 'BSQ-3',
            question: 'What is the correct mid calculation to avoid overflow?',
            options: ['A. (left + right) // 2', 'B. left + (right - left) // 2', 'C. (left - right) // 2', 'D. none'],
            correct: 'B',
            explanation: 'left + (right - left) // 2 avoids potential overflow that (left + right) // 2 has with large values.'
        },
        {
            id: 'BSQ-4',
            question: 'When do you update left = mid + 1?',
            options: ['A. target < arr[mid]', 'B. target > arr[mid]', 'C. target == arr[mid]', 'D. always'],
            correct: 'B',
            explanation: 'When target > arr[mid], target must be in right half. Set left = mid + 1 to search there (excluding mid).'
        },
        {
            id: 'BSQ-5',
            question: 'What is binary search on answer (decision space)?',
            options: ['A. Binary searching original array', 'B. Searching for optimal value by checking predicate', 'C. Searching in hash table', 'D. Always sorting first'],
            correct: 'B',
            explanation: 'Binary search on answer searches range of possible values, checking predicate to find optimal threshold.'
        },
        {
            id: 'BSQ-6',
            question: 'How to find first occurrence of element (lower bound)?',
            options: ['A. When found, move right', 'B. When found, search left half further', 'C. Return immediately', 'D. Use hash'],
            correct: 'B',
            explanation: 'When target == arr[mid], continue searching left (right = mid - 1) to find if there are earlier occurrences.'
        },
        {
                id: 'BSQ-7',
            question: 'How to handle binary search on rotated array?',
            options: ['A. Sort first', 'B. Determine which half is sorted, search accordingly', 'C. Hash all', 'D. Linear search'],
            correct: 'B',
            explanation: 'In rotated array, one half is always sorted. Check if target is in sorted half, search there. Else search other half.'
        },
        {
            id: 'BSQ-8',
            question: 'What is the stopping condition of binary search loop?',
            options: ['A. left < right', 'B. left > right', 'C. left == right', 'D. never'],
            correct: 'B',
            explanation: 'Stop when left > right (no valid search space remaining). At this point, element not found.'
        },
        {
            id: 'BSQ-9',
            question: 'What is upper bound (strictly greater)?',
            options: ['A. First element >= target', 'B. First element > target', 'C. Last element <= target', 'D. Exact match'],
            correct: 'B',
            explanation: 'Upper bound returns first position where element is strictly greater than target (not equal).'
        },
        {
            id: 'BSQ-10',
            question: 'How to search in 2D sorted matrix with binary search?',
            options: ['A. One binary search on whole flattened array', 'B. Treat as 1D or start top-right staircase', 'C. Row-wise binary search only', 'D. Sort rows then search'],
            correct: 'B',
            explanation: 'Two approaches: 1) Treat as sorted 1D array. 2) Start top-right: if current > target, move left; if <, move down.'
        }
    ],

    // ==========================================
    // MODULE 7: DYNAMIC PROGRAMMING QUIZ
    // ==========================================
    dynamicprogramming: [
        {
            id: 'DPQ-1',
            question: 'What are the two key DP properties?',
            options: ['A. Time and space complexity', 'B. Overlapping subproblems and optimal substructure', 'C. Memory and speed', 'D. Input and output'],
            correct: 'B',
            explanation: 'DP requires overlapping subproblems (same subproblems recur) and optimal substructure (optimal solution contains optimal sub-solutions).'
        },
        {
            id: 'DPQ-2',
            question: 'What is memoization?',
            options: ['A. Bottom-up iterative', 'B. Top-down with caching', 'C. No caching', 'D. Recursive without storage'],
            correct: 'B',
            explanation: 'Memoization is top-down DP: recursive with caching to store results and avoid recomputation.'
        },
        {
            id: 'DPQ-3',
            question: 'What is tabulation?',
            options: ['A. Top-down recursive', 'B. Bottom-up iterative table building', 'C. Caching in database', 'D. Hashing'],
            correct: 'B',
            explanation: 'Tabulation is bottom-up DP: solve smaller subproblems first, store in table, build up to final solution.'
        },
        {
            id: 'DPQ-4',
            question: 'How to solve climbing stairs (n steps, can take 1 or 2)?',
            options: ['A. ways[n] = ways[n-1] + ways[n-2]', 'B. ways[n] = ways[n-1]', 'C. ways[n] = n + 1', 'D. Fibonacci-like DP'],
            correct: 'A',
            explanation: 'At step n, can come from n-1 or n-2: ways[n] = ways[n-1] + ways[n-2]. Same as Fibonacci.'
        },
        {
            id: 'DPQ-5',
            question: 'What is 0/1 knapsack?',
            options: ['A. Take any amount of each item', 'B. Each item taken 0 or 1 time, maximize value under weight limit', 'C. Unlimited items', 'D. All items must be taken'],
            correct: 'B',
            explanation: '0/1 knapsack: each item can be taken at most once (0 or 1), maximize value subject to weight constraint.'
        },
        {
            id: 'DPQ-6',
            question: 'How to optimize knapsack space from O(nW) to O(W)?',
            options: ['A. Use 1D array, process weights in reverse', 'B. Use hash table', 'C. Use sorted', 'D. Not possible'],
            correct: 'A',
            explanation: 'Use 1D dp array (capacity only). Process weights in reverse order so each item used at most once. Forward order = unbounded.'
        },
        {
            id: 'DPQ-7',
            question: 'What is house robber problem?',
            options: ['A. Maximize sum of adjacent houses', 'B. Maximize sum of non-adjacent houses', 'C. Minimum sum', 'D. All houses'],
            correct: 'B',
            explanation: 'Rob houses to maximize money, but cannot rob adjacent houses. DP: rob[i] = max(rob[i-1], rob[i-2] + money[i]).'
        },
        {
            id: 'DPQ-8',
            question: 'How to find longest increasing subsequence (LIS)?',
            options: ['A. dp[i] = longest ending at i based on j < i, arr[j] < arr[i]', 'B. Sort and compare', 'C. Hash', 'D. BFS'],
            correct: 'A',
            explanation: 'dp[i] = 1 + max(dp[j]) for all j < i where arr[j] < arr[i]. Track longest across all i. O(n^2) naive, O(n log n) optimized.'
        },
        {
            id: 'DPQ-9',
            question: 'What is longest common subsequence?',
            options: ['A. Longest subarray in common', 'B. Longest subsequence (not necessarily contiguous) common to both sequences', 'C. Same string', 'D. Equal lengths'],
            correct: 'B',
            explanation: 'LCS finds longest subsequence (not necessarily contiguous) that appears in both sequences in same order (not necessarily continuously).'
        },
        {
            id: 'DPQ-10',
            question: 'What recurrence is used for LCS?',
            options: ['A. dp[i][j] = dp[i-1][j] + dp[i][j-1]', 'B. If match: 1 + dp[i-1][j-1], else: max(dp[i-1][j], dp[i][j-1])', 'C. dp[i][j] = i * j', 'D. dp[i][j] = dp[i][j-1]'],
            correct: 'B',
            explanation: 'If chars match: LCS includes this character: 1 + LCS of previous prefix. Else: max of excluding last char from either string.'
        },
        {
            id: 'DPQ-11',
            question: 'What is unbounded knapsack?',
            options: ['A. Each item once', 'B. Items can be used unlimited times', 'C. Different items', 'D. Limited weight'],
            correct: 'B',
            explanation: 'Unbounded knapsack: each item can be taken multiple times. Recurrence: dp[i][w] = max(dp[i-1][w], dp[i][w-wt[i]] + val[i]).'
        },
        {
            id: 'DPQ-12',
            question: 'What is the space complexity of typical DP?',
            options: ['A. Always O(1)', 'B. Depends on problem, often O(n) or O(n*m)', 'C. Always O(n^2)', 'D. Always O(2^n)'],
            correct: 'B',
            explanation: 'DP space complexity depends on problem: 1D DP is O(n), 2D DP is O(n*m), can sometimes be optimized.'
        }
    ],

    // ==========================================
    // MODULE 8: GREEDY ALGORITHMS QUIZ
    // ==========================================
    greedy: [
        {
            id: 'GRQ-1',
            question: 'What makes a greedy algorithm work?',
            options: ['A. Always optimal', 'B. Local optimal choices lead to global optimum', 'C. All problems', 'D. Random choices'],
            correct: 'B',
            explanation: 'Greedy works when problem has greedy choice property: making locally optimal choices at each step leads to global optimum.'
        },
        {
            id: 'GRQ-2',
            question: 'How to solve activity selection (max non-overlapping)?',
            options: ['A. Sort by start time, greedily pick', 'B. Sort by finish time, greedily pick earliest finishing compatible', 'C. Binary search', 'D. Hash'],
            correct: 'B',
            explanation: 'Sort activities by finish time. Greedily pick earliest finishing activity that doesn\'t overlap previously selected. This is optimal.'
        },
        {
            id: 'GRQ-3',
            question: 'Why sort by finish time in activity selection?',
            options: ['A. Arbitrary', 'B. Leaves maximum room for remaining activities', 'C. Faster sorting', 'D. Tradition'],
            correct: 'B',
            explanation: 'Picking earliest finishing leaves maximum remaining time for other activities. Can be proved optimal by exchange argument.'
        },
        {
            id: 'GRQ-4',
            question: 'How does fractional knapsack differ from 0/1?',
            options: ['A. Same problem', 'B. Fractional allows taking parts of items', 'C. Different weight limits', 'D. Same optimal solution'],
            correct: 'B',
            explanation: 'Fractional knapsack can take fractions of items. Greedy on value/weight ratio works for fractional, not for 0/1 which needs DP.'
        },
        {
            id: 'GRQ-5',
            question: 'What is Huffman coding?',
            options: ['A. Sorting', 'B. Optimal prefix code using greedy by combining lowest frequency chars', 'C. Encryption', 'D. Hashing'],
            correct: 'B',
            explanation: 'Huffman encoding builds optimal prefix tree by repeatedly combining the two lowest frequency characters into a new node with combined frequency.'
        },
        {
            id: 'GRQ-6',
            question: 'Does greedy work for all coin change problems?',
            options: ['A. Yes always', 'B. Only for some coin systems (canonical)', 'C. Never', 'D. Depends on order'],
            correct: 'B',
            explanation: 'Greedy (largest coin first) works for canonical systems like US coins. Fails for systems like {1,3,4} making sum 6 (greedy 4+1+1 vs optimal 3+3).'
        },
        {
            id: 'GRQ-7',
            question: 'How to find if gas station circuit is possible?',
            options: ['A. Sum all gas, sum all cost', 'B. If total gas >= total cost, solution exists, find start', 'C. Try each start', 'D. Hash'],
            correct: 'B',
            explanation: 'If total gas >= total cost, solution exists. Find by tracking tank: if tank negative at any point, restart from next station.'
        },
        {
            id: 'GRQ-8',
            question: 'What is Dijkstra\'s algorithm?',
            options: ['A. BFS', 'B. Greedy shortest path with priority queue (min-heap)', 'C. DFS', 'D. DP'],
            correct: 'B',
            explanation: 'Dijkstra finds shortest paths from source using greedy: always process closest unvisited vertex (extract min from priority queue).'
        },
        {
            id: 'GRQ-9',
            question: 'Why does Dijkstra require non-negative weights?',
            options: ['A. Implementation detail', 'B. Negative weights break greedy assumption', 'C. Not important', 'D. Works either way'],
            correct: 'B',
            explanation: 'With negative weights, vertex marked as "closest" by greedy might later have shorter path via negative edge. Use Bellman-Ford for negatives.'
        },
        {
            id: 'GRQ-10',
            question: 'Difference between Prim\'s and Kruskal\'s MST?',
            options: ['A. Same algorithm', 'B. Prim grows tree, Kruskal adds edges globally sorted', 'C. Faster vs slower', 'D. No difference'],
            correct: 'B',
            explanation: 'Prim grows MST from a starting vertex, adding min edge connecting tree to outside. Kruskal adds edges in global weight order (uses Union-Find to prevent cycles).'
        }
    ],

    // ==========================================
    // MODULE 9: GRAPH ALGORITHMS QUIZ
    // ==========================================
    graphs: [
        {
            id: 'GQ-1',
            question: 'What is BFS?',
            options: ['A. Depth-first exploration', 'B. Breadth-first level-order traversal using queue', 'C. Binary search', 'D. Greedy'],
            correct: 'B',
            explanation: 'BFS explores graph level by level using a queue. Guarantees shortest path in unweighted graphs.'
        },
        {
            id: 'GQ-2',
            question: 'What is DFS?',
            options: ['A. Breadth-first using queue', 'B. Depth-first exploring as deep as possible before backtracking', 'C. Sorting', 'D. Hashing'],
            correct: 'B',
            explanation: 'DFS explores as deep as possible along each branch before backtracking. Uses stack or recursion.'
        },
        {
            id: 'GQ-3',
            question: 'How to detect cycle in undirected graph with DFS?',
            options: ['A. Track visited, if back edge to visited but not parent', 'B. Count all paths', 'C. Binary search', 'D. Hash table'],
            correct: 'A',
            explanation: 'During DFS, if we encounter visited vertex that is not our direct parent, we found back edge, indicating cycle.'
        },
        {
            id: 'GQ-4',
            question: 'What is topological sort?',
            options: ['A. Sorting by value', 'B. Linear ordering where u precedes v for every edge u->v', 'C. Random order', 'D. Alphabetical'],
            correct: 'B',
            explanation: 'Topological sort produces ordering where for every directed edge u->v, u comes before v. Only for DAGs (no cycles).'
        },
        {
            id: 'GQ-5',
            question: 'What algorithms do topological sort?',
            options: ['A. Binary search only', 'B. DFS post-order or Kahn\'s BFS (remove zero indegree)', 'C. Just BFS', 'D. Just DFS'],
            correct: 'B',
            explanation: 'Kahn\'s: repeatedly remove vertices with zero indegree. DFS: add vertices after fully exploring (post-order).'
        },
        {
            id: 'GQ-6',
            question: 'What is Union-Find (DSU)?',
            options: ['A. Sorting algorithm', 'B. Data structure for disjoint set operations (find, union)', 'C. Graph traversal', 'D. Searching'],
            correct: 'B',
            explanation: 'Union-Find maintains disjoint sets with efficient find (which set?) and union (merge sets) operations.'
        },
        {
            id: 'GQ-7',
            question: 'What optimizations make Union-Find efficient?',
            options: ['A. None', 'B. Path compression and union by rank', 'C. Hash table', 'D. Sorting'],
            correct: 'B',
            explanation: 'Path compression (flatten tree during find) and union by rank (attach shorter under taller) make operations nearly constant amortized.'
        },
        {
            id: 'GQ-8',
            question: 'What is Dijkstra\'s time complexity?',
            options: ['A. O(V)', 'B. O((V + E) log V)', 'C. O(V^2)', 'D. O(V^3)'],
            correct: 'B',
            explanation: 'With binary heap for priority queue: Dijkstra is O((V + E) log V) where V=vertices, E=edges.'
        },
        {
            id: 'GQ-9',
            question: 'What handles negative weights in shortest path?',
            options: ['A. Dijkstra', 'B. Bellman-Ford', 'C. BFS', 'D. DFS'],
            correct: 'B',
            explanation: 'Bellman-Ford can handle negative weights and detect negative cycles. Dijkstra does not work correctly with negatives.'
        },
        {
            id: 'GQ-10',
            question: 'What is Floyd-Warshall used for?',
            options: ['A. Single-source shortest paths', 'B. All-pairs shortest paths', 'C. MST', 'D. Cycle detection'],
            correct: 'B',
            explanation: 'Floyd-Warshall computes shortest paths between all pairs of vertices. O(V^3) time, good for dense graphs or when all pairs needed.'
        },
        {
            id: 'GQ-11',
            question: 'What are MST algorithms?',
            options: ['A. Dijkstra and BFS', 'B. Prim and Kruskal', 'C. DFS and Bellman-Ford', 'D. Union-Find only'],
            correct: 'B',
            explanation: 'Prim (node-based, grows tree) and Kruskal (edge-based, adds edges by weight using Union-Find) compute minimum spanning tree.'
        },
        {
            id: 'GQ-12',
            question: 'What is bipartite graph?',
            options: ['A. Has cycles', 'B. Vertices can be 2-colored (divisible into two sets with all edges crossing)', 'C. Is tree', 'D. Is directed'],
            correct: 'B',
            explanation: 'Bipartite graph vertices can be partitioned into two sets where all edges go between sets (no edges within same set).'
        }
    ],

    // ==========================================
    // MODULE 10: ADVANCED QUIZ
    // ==========================================
    advanced: [
        {
            id: 'ADQ-1',
            question: 'What does segment tree support efficiently?',
            options: ['A. Insert only', 'B. Range queries and point updates', 'C. Just storage', 'D. Sorting'],
            correct: 'B',
            explanation: 'Segment tree supports range queries (sum, min, max, etc.) and point updates efficiently in O(log n).'
        },
        {
            id: 'ADQ-2',
            question: 'What is Fenwick tree (Binary Indexed Tree) good for?',
            options: ['A. Complex queries', 'B. Prefix sums and point updates', 'C. Longest substring', 'D. Hashing'],
            correct: 'B',
            explanation: 'BIT is efficient for prefix sum queries and point update operations, often simpler than segment tree for these operations.'
        },
        {
            id: 'ADQ-3',
            question: 'What is a Trie?',
            options: ['A. Binary tree', 'B. Prefix tree for efficient string operations', 'C. Balanced BST', 'D. Heap'],
            correct: 'B',
            explanation: 'Trie (prefix tree) stores strings with common prefixes shared, enabling efficient prefix search, insertion, and lookup in O(L) where L is word length.'
        },
        {
            id: 'ADQ-4',
            question: 'What is KMP algorithm used for?',
            options: ['A. Sorting', 'B. String pattern matching in O(n + m)', 'C. Graph traversal', 'D. Hashing'],
            correct: 'B',
            explanation: 'Knuth-Morris-Pratt finds all pattern occurrences in text in O(n + m) time by preprocessing pattern to compute LPS table.'
        },
        {
            id: 'ADQ-5',
            question: 'What is LPS in KMP?',
            options: ['A. Longest Path Shortest', 'B. Longest Proper Prefix which is also Suffix', 'C. Least Possible Space', 'D. Linear Programming Structure'],
            correct: 'B',
            explanation: 'LPS[i] = length of longest proper prefix of pattern[0..i] that is also suffix. Used to skip ahead in matching, avoiding backtracking.'
        },
        {
            id: 'ADQ-6',
            question: 'What is backtracking?',
            options: ['A. Linear scan', 'B. Systematic trial-and-error with pruning, recursive exploration', 'C. Greedy', 'D. Hashing'],
            correct: 'B',
            explanation: 'Backtracking explores all possibilities recursively, abandoning branches that can\'t lead to solution (pruning). Used for combinatorial problems.'
        },
        {
            id: 'ADQ-7',
            question: 'What is bitmask DP?',
            options: ['A. DP using bitmask as state', 'B. DP using only integers', 'C. Non-integer DP', 'D. Graph DP only'],
            correct: 'A',
            explanation: 'Bitmask DP uses integer bits to represent subsets (each bit = element included/excluded). Enables subset enumeration in DP state. O(2^n) for n elements.'
        },
        {
            id: 'ADQ-8',
            question: 'Example of bitmask DP?',
            options: ['A. 0/1 knapsack', 'B. Traveling Salesman (TSP)', 'C. Fibonacci', 'D. LIS'],
            correct: 'B',
            explanation: 'TSP: dp[mask][i] = minimum cost starting at node 0, visiting cities in mask, ending at i. State includes which cities visited (mask).'
        },
        {
            id: 'ADQ-9',
            question: 'What is monotonic stack?',
            options: ['A. Stack that never changes', 'B. Stack maintaining monotonic (increasing/decreasing) order', 'C. Queue', 'D. Hash'],
            correct: 'B',
            explanation: 'Monotonic stack keeps elements in increasing or decreasing order. Used to find next greater/smaller elements efficiently.'
        },
        {
            id: 'ADQ-10',
            question: 'How to find next greater element using monotonic stack?',
            options: ['A. Maintain increasing stack, pop smaller', 'B. Maintain decreasing stack, pop smaller', 'C. Sort', 'D. Hash'],
            correct: 'A',
            explanation: 'Maintain decreasing stack visually, but algorithm: pop smaller elements (current is their NGE), then push. Actually stack maintains candidates of "yet to find NGE".'
        }
    ],

    // ==========================================
    // FINAL EXAM
    // ==========================================
    final: [
        {
            id: 'FE-1',
            question: 'What is the time complexity of merge sort?',
            options: ['A. O(n)', 'B. O(n log n)', 'C. O(n^2)', 'D. O(log n)'],
            correct: 'B',
            explanation: 'Merge sort consistently achieves O(n log n) time in all cases by dividing array and merging sorted halves.'
        },
        {
            id: 'FE-2',
            question: 'Which pattern finds longest substring without repeating characters?',
            options: ['A. Binary search', 'B. Sliding window', 'C. Two pointers', 'D. Greedy'],
            correct: 'B',
            explanation: 'Sliding window: expand right, when duplicate found, move left after previous occurrence, tracking max length.'
        },
        {
            id: 'FE-3',
            question: 'What is the optimal substructure property in DP?',
            options: ['A. Subproblems are independent', 'B. Optimal solution contains optimal sub-solutions', 'C. All subproblems same', 'D. No subproblems'],
            correct: 'B',
            explanation: 'Optimal substructure: an optimal solution to problem contains optimal solutions to its subproblems.'
        },
        {
            id: 'FE-4',
            question: 'How does Union-Find help in Kruskal\'s algorithm?',
            options: ['A. Sorting edges', 'B. Efficiently check if adding edge creates cycle', 'C. Finding shortest path', 'D. DFS'],
            correct: 'B',
            explanation: 'Union-Find tracks connected components. When adding edge, if vertices already in same set, adding would create cycle, so skip.'
        },
        {
            id: 'FE-5',
            question: 'What is the space complexity of BFS/DFS?',
            options: ['A. O(1)', 'B. O(V + E)', 'C. O(V)', 'D. O(E)'],
            correct: 'C',
            explanation: 'Space complexity is O(V) for storing visited and queue/stack. O(V + E) includes adjacency list input representation.'
        },
        {
            id: 'FE-6',
            question: 'When to use DP over greedy?',
            options: ['A. When greedy choice property doesn\'t hold', 'B. Always', 'C. Never', 'D. When sorting is needed'],
            correct: 'A',
            explanation: 'DP is needed when greedy choice property doesn\'t hold, i.e., local optimal choices don\'t guarantee global optimum.'
        },
        {
            id: 'FE-7',
            question: 'What is the key insight in two-sum with hash table?',
            options: ['A. Sort two arrays', 'B. For each element, check if complement (target - element) exists', 'C. Check all pairs', 'D. Binary search'],
            correct: 'B',
            explanation: 'For each element, compute complement = target - element. If complement in hash map of seen elements, found pair.'
        },
        {
            id: 'FE-8',
            question: 'What is binary search on answer?',
            options: ['A. Searching array', 'B. Searching for optimal value in range by checking predicate', 'C. Hash table', 'D. Linear search'],
            correct: 'B',
            explanation: 'Binary search on answer searches decision space, not input array. Find minimal/maximal value satisfying predicate.'
        },
        {
            id: 'FE-9',
            question: 'How to detect palindrome with two pointers?',
            options: ['A. Reverse string and compare', 'B. Compare characters from both ends moving inward', 'C. Hash', 'D. Sorting'],
            correct: 'B',
            explanation: 'Place pointers at string ends. Compare characters. If equal, move both inward. Stop when pointers meet or mismatch found.'
        },
        {
            id: 'FE-10',
            question: 'What is the main limitation of greedy algorithms?',
            options: ['A. Always fast', 'B. May not give optimal solution for some problems', 'C. Always optimal', 'D. Uses recursion'],
            correct: 'B',
            explanation: 'Greedy algorithms are efficient but only give optimal solutions when problem has greedy choice property. Not all problems have this property.'
        },
        {
            id: 'FE-11',
            question: 'What is the time complexity of Trie operations?',
            options: ['A. O(1)', 'B. O(L) where L is word length', 'C. O(n)', 'D. O(n log n)'],
            correct: 'B',
            explanation: 'Trie operations (search, insert, delete) take O(L) where L is length of word, following nodes per character.'
        },
        {
            id: 'FE-12',
            question: 'What problem uses monotonic stack?',
            options: ['A. Two sum', 'B. Next greater/smaller element', 'C. Binary search', 'D. DFS'],
            correct: 'B',
            explanation: 'Monotonic stack efficiently solves problems like next greater element, daily temperatures, by maintaining order and processing.'
        },
        {
            id: 'FE-13',
            question: 'How to compute minimum spanning tree?',
            options: ['A. BFS', 'B. Prim or Kruskal algorithm', 'C. Dijkstra', 'D. Floyd-Warshall'],
            correct: 'B',
            explanation: 'Kruskal (global sorted edges with Union-Find) and Prim (grow from vertex using priority queue) compute MST.'
        },
        {
            id: 'FE-14',
            question: 'What is backtracking primarily used for?',
            options: ['A. Sorting', 'B. Combinatorial problems (N-Queens, Sudoku, permutations)', 'C. Graph DFS', 'D. Hashing'],
            correct: 'B',
            explanation: 'Backtracking is ideal for combinatorial problems where we need to explore all possibilities: N-Queens, Sudoku, generating all permutations/subsets, etc.'
        },
        {
            id: 'FE-15',
            question: 'What constraint suggests O(n log n) solution expected?',
            options: ['A. n <= 10', 'B. n <= 10^5', 'C. n <= 10^9', 'D. No constraint'],
            correct: 'B',
            explanation: 'n = 10^5 allows O(n log n) or O(n) time. O(n^2) would be too slow (10^10 operations). Look for greedy, binary search, or DP with optimization.'
        },
        {
            id: 'FE-16',
            question: 'What is primary advantage of segment tree over array?',
            options: ['A. Simpler code', 'B. Efficient range queries and updates', 'C. Less memory', 'D. Always faster'],
            correct: 'B',
            explanation: 'Segment tree supports range queries (sum, min, max) and point updates in O(log n) instead of O(n) for naive array approach.'
        },
        {
            id: 'FE-17',
            question: 'How does Floyd-Warshall differ from Dijkstra?',
            options: ['A. Same algorithm', 'B. Floyd-Warshall: all pairs O(V^3), Dijkstra: single source O((V+E)log V)', 'C. Only Dijkstra optimal', 'D. Floyd-Warshall always faster'],
            correct: 'B',
            explanation: 'Floyd-Warshall computes all pairs in O(V^3). Dijkstra computes single source in O((V+E)log V). Use Floyd-Warshall when need all pairs or graph dense.'
        },
        {
            id: 'FE-18',
            question: 'What is key to pattern recognition?',
            options: ['A. Random guessing', 'B. Identify problem category and specific sub-pattern', 'C. Use only brute force', 'D. Always sort'],
            correct: 'B',
            explanation: 'Pattern recognition involves categorizing problem (DP, greedy, graph, string, etc.) and identifying specific pattern (e.g., DP 0/1 knapsack, graph shortest path).'
        },
        {
            id: 'FE-19',
            question: 'What is space complexity of memoized recursion?',
            options: ['A. O(1)', 'B. O(n) for recursion depth O(n) for memo table', 'C. O(n^2)', 'D. O(log n)'],
            correct: 'B',
            explanation: 'Memoization uses O(n) for recursion depth (call stack) and O(n) for memoization table, total O(n) for 1D problems.'
        },
        {
            id: 'FE-20',
            question: 'What does "exchange argument" prove in greedy algorithms?',
            options: ['A. Sorting order', 'B. Greedy choice can replace any optimal choice without worsening solution', 'C. Time complexity', 'D. Space'],
            correct: 'B',
            explanation: 'Exchange argument shows that any optimal solution can be modified to include greedy choice without making solution worse, proving greedy optimal.'
        }
    ]
};