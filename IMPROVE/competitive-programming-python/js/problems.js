// ============================================
// COMPETITIVE PROGRAMMING - PRACTICE PROBLEMS DATABASE
// ============================================

// 500+ practice problems organized by module

const practiceProblems = {
    // ==========================================
    // MODULE 1: FOUNDATIONS & PREREQUISITES
    // ==========================================
    foundations: {
        complexity: [
            {
                id: 'F-1',
                type: 'time-complexity',
                difficulty: 'easy',
                question: 'What is the time complexity of a simple for loop that iterates n times?',
                answer: 'O(n)',
                alternatives: ['O(n)', 'O n'],
                hint: 'The loop runs n times, once for each element.',
                explanation: 'A simple loop that iterates n times performs a constant amount of work in each iteration, resulting in O(n) time complexity.'
            },
            {
                id: 'F-2',
                type: 'time-complexity',
                difficulty: 'easy',
                question: 'What is the time complexity of a nested loop where both loops run n times?',
                answer: 'O(n^2)',
                alternatives: ['O(n^2)', 'O(n*n)', 'O(n²)'],
                hint: 'For each iteration of the outer loop, the inner loop runs n times.',
                explanation: 'Nested loops multiply their complexities. With n iterations of outer loop and n inner iterations for each, total is n*n = O(n^2).'
            },
            {
                id: 'F-3',
                type: 'time-complexity',
                difficulty: 'easy',
                question: 'What is the time complexity of binary search on a sorted array?',
                answer: 'O(log n)',
                alternatives: ['O(log n)', 'O(logn)', 'O(log(n))'],
                hint: 'Binary search halves the search space each time.',
                explanation: 'Binary search divides the array in half each time, resulting in logarithmic time complexity O(log n).'
            },
            {
                id: 'F-4',
                type: 'time-complexity',
                difficulty: 'medium',
                question: 'What is the time complexity of: for i in range(n): if i % 2 == 0: for j in range(n): print(j)',
                answer: 'O(n^2)',
                alternatives: ['O(n^2)', 'O(n*n)'],
                hint: 'Approximately half of the outer loop iterations trigger the inner loop.',
                explanation: 'The conditional runs the inner loop about n/2 times, each inner loop runs n times. Total is approximately n/2 * n = O(n^2).'
            },
            {
                id: 'F-5',
                type: 'time-complexity',
                difficulty: 'easy',
                question: 'What is the time complexity of accessing an element in a list by index?',
                answer: 'O(1)',
                alternatives: ['O(1)', 'O()'],
                hint: 'List indexing in Python is constant time.',
                explanation: 'List access by index is constant time O(1) because we can directly compute the memory location.'
            },
            {
                id: 'F-6',
                type: 'time-complexity',
                difficulty: 'easy',
                question: 'What is the time complexity of appending to the end of a Python list?',
                answer: 'O(1)',
                alternatives: ['O(1)', 'amortized O(1)'],
                hint: 'Python lists use dynamic arrays with amortized O(1) append.',
                explanation: 'Appending to a Python list is amortized O(1). Occasionally it may resize the array, but on average it is constant time.'
            },
            {
                id: 'F-7',
                type: 'time-complexity',
                difficulty: 'medium',
                question: 'What is the time complexity of sorting a list of n elements using Timsort (Python\'s sorted())?',
                answer: 'O(n log n)',
                alternatives: ['O(n log n)', 'O(n*log n)', 'O(nlogn)'],
                hint: 'Timsort is a hybrid stable sorting algorithm.',
                explanation: 'Timsort used by Python\'s sorted() has average and worst-case time complexity of O(n log n).'
            },
            {
                id: 'F-8',
                type: 'space-complexity',
                difficulty: 'easy',
                question: 'What is the space complexity of storing an array of n integers?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'We need to store n elements.',
                explanation: 'Storing n integers requires O(n) space, proportional to the number of elements.'
            },
            {
                id: 'F-9',
                type: 'space-complexity',
                difficulty: 'easy',
                question: 'What is the space complexity of a recursive function with maximum call depth of n?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'Each recursive call adds a stack frame.',
                explanation: 'The call stack grows linearly with the recursion depth, giving O(n) space complexity.'
            },
            {
                id: 'F-10',
                type: 'time-complexity',
                difficulty: 'medium',
                question: 'What is the time complexity of: for i in range(n): for j in range(i): print(j)',
                answer: 'O(n^2)',
                alternatives: ['O(n^2)', 'O(n*n)'],
                hint: 'Sum the series: 0 + 1 + 2 + ... + (n-1)',
                explanation: 'The inner loop runs i times for each i from 0 to n-1, giving the sum of 0 to n-1 which equals n(n-1)/2 = O(n^2).'
            },
            {
                id: 'F-11',
                type: 'time-complexity',
                difficulty: 'medium',
                question: 'What is the time complexity of: for i in range(n, 0, -1): for j in range(i): print(j)',
                answer: 'O(n^2)',
                alternatives: ['O(n^2)', 'O(n*n)'],
                hint: 'Sum the series: n + (n-1) + (n-2) + ... + 1',
                explanation: 'The inner loop runs decreasingly from n to 1, giving sum of 1 to n which equals n(n+1)/2 = O(n^2).'
            },
            {
                id: 'F-12',
                type: 'time-complexity',
                difficulty: 'hard',
                question: 'What is the time complexity of: for i in range(n): for j in range(n, i, -1): print(j)',
                answer: 'O(n^2)',
                alternatives: ['O(n^2)', 'O(n*n)'],
                hint: 'For i=0, inner runs n times. For i=1, runs n-1 times, etc.',
                explanation: 'The inner loop runs n-i times for each i, summing from n to 1, which is O(n^2).'
            },
            {
                id: 'F-13',
                type: 'time-complexity',
                difficulty: 'hard',
                question: 'What is the time complexity of: i = 1 while i < n: i *= 2',
                answer: 'O(log n)',
                alternatives: ['O(log n)', 'O(logn)', 'O(log(n))'],
                hint: 'How many times can you multiply by 2 until reaching n?',
                explanation: 'Starting from 1 and doubling, we reach n after log2(n) steps, so it is O(log n).'
            },
            {
                id: 'F-14',
                type: 'time-complexity',
                difficulty: 'hard',
                question: 'What is the time complexity of: i = n while i > 1: i //= 3',
                answer: 'O(log n)',
                alternatives: ['O(log n)', 'O(logn)', 'O(log(n))'],
                hint: 'How many times can you divide by 3 until reaching 1?',
                explanation: 'We divide by 3 each time, so we need log3(n) divisions, which is O(log n).'
            },
            {
                id: 'F-15',
                type: 'space-complexity',
                difficulty: 'medium',
                question: 'What is the space complexity of creating a set from a list of n elements?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'A set stores all unique elements.',
                explanation: 'Creating a set from a list requires storing all elements (unique ones), so it uses O(n) space.'
            },
            {
                id: 'F-16',
                type: 'time-complexity',
                difficulty: 'medium',
                question: 'What is the time complexity of finding an element in a sorted list using binary search?',
                answer: 'O(log n)',
                alternatives: ['O(log n)', 'O(logn)', 'O(log(n))'],
                hint: 'Binary search reduces the search space by half each time.',
                explanation: 'Binary search on a sorted list divides the search space in half each iteration, giving O(log n).'
            },
            {
                id: 'F-17',
                type: 'time-complexity',
                difficulty: 'easy',
                question: 'What is the time complexity of inserting at the beginning of a Python list?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'All existing elements need to shift.',
                explanation: 'Inserting at the beginning of a list requires shifting all existing elements, taking O(n) time.'
            },
            {
                id: 'F-18',
                type: 'time-complexity',
                difficulty: 'medium',
                question: 'What is the time complexity of Python\'s "in" operator on a list?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'It performs a linear search.',
                explanation: 'The "in" operator on a list performs a linear scan, checking each element until found, giving O(n) in worst case.'
            },
            {
                id: 'F-19',
                type: 'time-complexity',
                difficulty: 'medium',
                question: 'What is the time complexity of Python\'s "in" operator on a set?',
                answer: 'O(1)',
                alternatives: ['O(1)', 'amortized O(1)'],
                hint: 'Sets use hash tables for O(1) lookup.',
                explanation: 'Sets use hash tables allowing O(1) average-case lookup for the "in" operator.'
            },
            {
                id: 'F-20',
                type: 'time-complexity',
                difficulty: 'hard',
                question: 'What is the time complexity of: while n > 1: n = n - n//2',
                answer: 'O(log n)',
                alternatives: ['O(log n)', 'O(logn)', 'O(log(n))'],
                hint: 'Half of n is removed each iteration.',
                explanation: 'Each iteration removes half of the remaining elements, similar to binary search, giving O(log n).'
            },
            {
                id: 'F-21',
                type: 'time-complexity',
                difficulty: 'medium',
                question: 'What is the time complexity of: for i in range(1, n): for j in range(1, i): for k in range(1, j): print(k)',
                answer: 'O(n^3)',
                alternatives: ['O(n^3)', 'O(n*n*n)', 'O(n³)'],
                hint: 'This is a triple nested loop with each level approximately n iterations.',
                explanation: 'Triple nested loops each running approximately n times gives O(n^3) complexity.'
            },
            {
                id: 'F-22',
                type: 'time-complexity',
                difficulty: 'hard',
                question: 'What is the time complexity of finding the sum of all elements in a 2D array of size n x n?',
                answer: 'O(n^2)',
                alternatives: ['O(n^2)', 'O(n*n)'],
                hint: 'There are n*n elements to sum.',
                explanation: 'We need to visit each of the n^2 elements once, giving O(n^2) time complexity.'
            },
            {
                id: 'F-23',
                type: 'space-complexity',
                difficulty: 'medium',
                question: 'What is the space complexity of a function that only uses local variables and no recursion?',
                answer: 'O(1)',
                alternatives: ['O(1)'],
                hint: 'Constant amount of space is used regardless of input.',
                explanation: 'If no dynamic memory allocation or recursion is used, space usage is constant O(1).'
            },
            {
                id: 'F-24',
                type: 'time-complexity',
                difficulty: 'hard',
                question: 'What is the time complexity of the following: count = 0 for i in range(n): for j in range(n): if i == j: count += 1',
                answer: 'O(n^2)',
                alternatives: ['O(n^2)', 'O(n*n)'],
                hint: 'The if-statement doesn\'t change the iteration count.',
                explanation: 'Even though the condition restricts the inner loop execution, we still loop through all pairs (i, j) = O(n^2).'
            },
            {
                id: 'F-25',
                type: 'time-complexity',
                difficulty: 'hard',
                question: 'What is the time complexity of Floyd-Warshall algorithm for all-pairs shortest paths on n nodes?',
                answer: 'O(n^3)',
                alternatives: ['O(n^3)', 'O(n*n*n)', 'O(n³)'],
                hint: 'It has a triple nested loop over nodes.',
                explanation: 'Floyd-Warshall uses three nested loops over all n nodes, resulting in O(n^3) time complexity.'
            },
            {
                id: 'F-26',
                type: 'time-complexity',
                difficulty: 'medium',
                question: 'What is the time complexity of checking if a string is a palindrome (by comparing characters from both ends)?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'We compare each pair of characters once.',
                explanation: 'We only need to iterate through half of the string, comparing characters from both ends, giving O(n).'
            },
            {
                id: 'F-27',
                type: 'time-complexity',
                difficulty: 'easy',
                question: 'What is the time complexity of removing the last element from a Python list?',
                answer: 'O(1)',
                alternatives: ['O(1)'],
                hint: 'No shifting of elements is required.',
                explanation: 'Removing the last element from a list is constant time O(1) as no elements need to shift.'
            },
            {
                id: 'F-28',
                type: 'time-complexity',
                difficulty: 'easy',
                question: 'What is the time complexity of deleting an element by value in a Python list?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'First you search, then you shift.',
                explanation: 'Deleting by value requires searching for the element O(n) and shifting elements O(n), so total is O(n).'
            },
            {
                id: 'F-29',
                type: 'time-complexity',
                difficulty: 'medium',
                question: 'What is the time complexity of Python\'s .count() method on a list?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'It needs to iterate through all elements.',
                explanation: 'The .count() method scans the entire list to count occurrences, taking O(n) time.'
            },
            {
                id: 'F-30',
                type: 'complexity-concept',
                difficulty: 'easy',
                question: 'Which of O(n), O(log n), O(n log n), O(n^2) is the fastest for large n?',
                answer: 'O(log n)',
                alternatives: ['O(log n)', 'O(logn)', 'O(log(n))'],
                hint: 'Logarithmic growth is slower than linear or polynomial.',
                explanation: 'O(log n) grows the slowest among these options, making it the fastest for large inputs.'
            }
        ],
        python: [
            {
                id: 'F-31',
                type: 'python-basic',
                difficulty: 'easy',
                question: 'What is the output of: print(list(range(5)))?',
                answer: '[0, 1, 2, 3, 4]',
                alternatives: ['[0, 1, 2, 3, 4]', '[0,1,2,3,4]'],
                hint: 'range(5) generates numbers from 0 to 4.',
                explanation: 'range(5) generates 0, 1, 2, 3, 4, and list() converts it to this list.'
            },
            {
                id: 'F-32',
                type: 'python-basic',
                difficulty: 'easy',
                question: 'What does len("hello") return?',
                answer: '5',
                alternatives: ['5', '5.0'],
                hint: 'Count the number of characters.',
                explanation: 'The string "hello" has 5 characters, so len() returns 5.'
            },
            {
                id: 'F-33',
                type: 'python-basic',
                difficulty: 'easy',
                question: 'What is the result of "ab" + "cd"?',
                answer: 'abcd',
                alternatives: ['abcd'],
                hint: 'String concatenation combines strings.',
                explanation: 'The + operator concatenates strings, producing "abcd".'
            },
            {
                id: 'F-34',
                type: 'python-basic',
                difficulty: 'easy',
                question: 'What is the result of "abc" * 3?',
                answer: 'abcabcabc',
                alternatives: ['abcabcabc'],
                hint: 'String multiplication repeats the string.',
                explanation: 'Multiplying a string by an integer repeats it that many times: "abcabcabc".'
            },
            {
                id: 'F-35',
                type: 'python-basic',
                difficulty: 'easy',
                question: 'What does [1, 2, 3][-1] return?',
                answer: '3',
                alternatives: ['3'],
                hint: 'Negative indices count from the end.',
                explanation: '-1 is the last element, so it returns 3.'
            },
            {
                id: 'F-36',
                type: 'python-basic',
                difficulty: 'medium',
                question: 'What is the result of [1, 2, 3][1:]?',
                answer: '[2, 3]',
                alternatives: ['[2, 3]', '[2,3]'],
                hint: 'Slicing with [1:] gives elements from index 1 to end.',
                explanation: 'Slice [1:] starts from index 1, returning [2, 3].'
            },
            {
                id: 'F-37',
                type: 'python-basic',
                difficulty: 'medium',
                question: 'What does {1, 2, 3, 2, 1} return when printed?',
                answer: '{1, 2, 3}',
                alternatives: ['{1, 2, 3}', '{1,2,3}'],
                hint: 'Sets cannot contain duplicate elements.',
                explanation: 'Sets automatically remove duplicates, so {1, 2, 3, 2, 1} becomes {1, 2, 3}.'
            },
            {
                id: 'F-38',
                type: 'python-basic',
                difficulty: 'easy',
                question: 'What does {} represent in Python?',
                answer: 'dict',
                alternatives: ['dict', 'dictionary', 'dictionaries'],
                hint: 'An empty curly brace creates what data structure?',
                explanation: '{}' creates an empty dictionary. Use set() for an empty set.'
            },
            {
                id: 'F-39',
                type: 'python-basic',
                difficulty: 'medium',
                question: 'What is the result of "hello".find("ll")?',
                answer: '2',
                alternatives: ['2'],
                hint: 'find() returns the starting index of the substring.',
                explanation: '"ll" starts at index 2 in "hello" (0-indexed).'
            },
            {
                id: 'F-40',
                type: 'python-basic',
                difficulty: 'medium',
                question: 'What does "hello".upper() return?',
                answer: 'HELLO',
                alternatives: ['HELLO'],
                hint: 'Converts all characters to uppercase.',
                explanation: 'The .upper() method converts all letters to uppercase: "HELLO".'
            },
            {
                id: 'F-41',
                type: 'python-basic',
                difficulty: 'medium',
                question: 'What does sorted([3, 1, 4, 1, 5]) return?',
                answer: '[1, 1, 3, 4, 5]',
                alternatives: ['[1, 1, 3, 4, 5]', '[1,1,3,4,5]'],
                hint: 'sorted() returns a new sorted list.',
                explanation: 'sorted() returns a new list sorted in ascending order: [1, 1, 3, 4, 5].'
            },
            {
                id: 'F-42',
                type: 'python-basic',
                difficulty: 'medium',
                question: 'What does reversed([1, 2, 3]) return?',
                answer: 'reversed object',
                alternatives: ['reversed object', 'reversed', '{3, 2, 1}'],
                hint: 'Does it return a list directly?',
                explanation: 'reversed() returns a reversed iterator, not a list. Use list(reversed()) to get [3, 2, 1].'
            },
            {
                id: 'F-43',
                type: 'python-basic',
                difficulty: 'medium',
                question: 'What does list(reversed([1, 2, 3])) return?',
                answer: '[3, 2, 1]',
                alternatives: ['[3, 2, 1]', '[3,2,1]'],
                hint: 'Convert the reversed iterator to a list.',
                explanation: 'list(reversed([1, 2, 3])) converts the reversed iterator to [3, 2, 1].'
            },
            {
                id: 'F-44',
                type: 'python-basic',
                difficulty: 'easy',
                question: 'What is the output of: max([1, 2, 3, 4])?',
                answer: '4',
                alternatives: ['4'],
                hint: 'max() returns the maximum value.',
                explanation: 'The maximum value in [1, 2, 3, 4] is 4.'
            },
            {
                id: 'F-45',
                type: 'python-basic',
                difficulty: 'easy',
                question: 'What is the output of: min([1, 2, 3, 4])?',
                answer: '1',
                alternatives: ['1'],
                hint: 'min() returns the minimum value.',
                explanation: 'The minimum value in [1, 2, 3, 4] is 1.'
            },
            {
                id: 'F-46',
                type: 'python-basic',
                difficulty: 'easy',
                question: 'What is the output of: sum([1, 2, 3])?',
                answer: '6',
                alternatives: ['6'],
                hint: 'sum() adds all elements together.',
                explanation: '1 + 2 + 3 = 6'
            },
            {
                id: 'F-47',
                type: 'python-basic',
                difficulty: 'medium',
                question: 'What is the result of "hello world".split()?',
                answer: "['hello', 'world']",
                alternatives: ["['hello', 'world']", '["hello","world"]'],
                hint: 'split() divides a string by whitespace by default.',
                explanation: '"hello world".split() splits on whitespace, returning ["hello", "world"].'
            },
            {
                id: 'F-48',
                type: 'python-basic',
                difficulty: 'medium',
                question: 'What is "1,2,3".split(",")?',
                answer: "['1', '2', '3']",
                alternatives: ["['1', '2', '3']", '["1","2","3"]'],
                hint: 'The separator is provided as an argument.',
                explanation: 'spliting on "," gives ["1", "2", "3"].'
            },
            {
                id: 'F-49',
                type: 'python-basic',
                difficulty: 'easy',
                question: 'What is the output of: type([1, 2, 3])?',
                answer: 'list',
                alternatives: ['<class \'list\'>', 'list'],
                hint: 'What data structure is [1, 2, 3]?',
                explanation: '[1, 2, 3] is a list, so type() returns <class \'list\'>.'
            },
            {
                id: 'F-50',
                type: 'python-basic',
                difficulty: 'medium',
                question: 'What does [x**2 for x in range(3)] return?',
                answer: '[0, 1, 4]',
                alternatives: ['[0, 1, 4]', '[0,1,4]'],
                hint: 'This is a list comprehension.',
                explanation: 'The list comprehension squares each number 0, 1, 2, giving [0, 1, 4].'
            }
        ]
    },

    // ==========================================
    // MODULE 2: DATA STRUCTURES
    // ==========================================
    datastructures: {
        arrays: [
            {
                id: 'DS-1',
                type: 'array',
                difficulty: 'easy',
                question: 'How do you access the third element of an array nums?',
                answer: 'nums[2]',
                alternatives: ['nums[2]', 'nums[2]'],
                hint: 'Arrays are 0-indexed.',
                explanation: 'Arrays are 0-indexed, so the third element is at index 2: nums[2].'
            },
            {
                id: 'DS-2',
                type: 'array',
                difficulty: 'easy',
                question: 'How do you get the length of an array arr?',
                answer: 'len(arr)',
                alternatives: ['len(arr)'],
                hint: 'Use the len() function.',
                explanation: 'len(arr) returns the number of elements in the array.'
            },
            {
                id: 'DS-3',
                type: 'array',
                difficulty: 'easy',
                question: 'What method removes the last element from a list?',
                answer: 'pop()',
                alternatives: ['pop()', 'list.pop()'],
                hint: 'It also returns the removed element.',
                explanation: 'The pop() method removes and returns the last element from a list.'
            },
            {
                id: 'DS-4',
                type: 'array',
                difficulty: 'medium',
                question: 'What is the time complexity of inserting into the middle of a list?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'Elements need to shift to make room.',
                explanation: 'Inserting into the middle of a list requires shifting all subsequent elements, taking O(n) time.'
            },
            {
                id: 'DS-5',
                type: 'array',
                difficulty: 'medium',
                question: 'How do you reverse a list in-place?',
                answer: 'reverse()',
                alternatives: ['reverse()', '.reverse()', 'list.reverse()'],
                hint: 'It\'s a method, not a function.',
                explanation: 'list.reverse() reverses the list in-place. Use reversed() or slicing [::-1] for a new reversed list.'
            },
            {
                id: 'DS-6',
                type: 'array',
                difficulty: 'medium',
                question: 'What does arr[:3] return if arr = [1, 2, 3, 4, 5]?',
                answer: '[1, 2, 3]',
                alternatives: ['[1, 2, 3]', '[1,2,3]'],
                hint: 'Slicing stops before the end index.',
                explanation: 'arr[:3] gives elements from index 0 to 2 (excluding 3): [1, 2, 3].'
            },
            {
                id: 'DS-7',
                type: 'array',
                difficulty: 'medium',
                question: 'What does arr[-2:] return if arr = [1, 2, 3, 4, 5]?',
                answer: '[4, 5]',
                alternatives: ['[4, 5]', '[4,5]'],
                hint: 'Negative indices count from the end.',
                explanation: '-2 is the second-to-last element. arr[-2:] gives [4, 5].'
            },
            {
                id: 'DS-8',
                type: 'array',
                difficulty: 'hard',
                question: 'What does arr[::2] return if arr = [1, 2, 3, 4, 5]?',
                answer: '[1, 3, 5]',
                alternatives: ['[1, 3, 5]', '[1,3,5]'],
                hint: 'The third number in slice is the step.',
                explanation: 'arr[::2] uses a step of 2, selecting every other element: [1, 3, 5].'
            },
            {
                id: 'DS-9',
                type: 'array',
                difficulty: 'hard',
                question: 'How do you rotate an array by k positions to the right?',
                answer: 'arr[-k:] + arr[:-k]',
                alternatives: ['arr[-k:] + arr[:-k]', 'arr[len(arr)-k:] + arr[:len(arr)-k]'],
                hint: 'Use slicing and concatenation.',
                explanation: 'To rotate right by k, take the last k elements and put them at the beginning: arr[-k:] + arr[:-k].'
            },
            {
                id: 'DS-10',
                type: 'array',
                difficulty: 'easy',
                question: 'Which method adds an element to the end of a list?',
                answer: 'append()',
                alternatives: ['append()', 'list.append()'],
                hint: 'It takes one element as argument.',
                explanation: 'append() adds a single element to the end of a list.'
            },
            {
                id: 'DS-11',
                type: 'array',
                difficulty: 'medium',
                question: 'What does list.extend([4, 5]) do to [1, 2, 3]?',
                answer: '[1, 2, 3, 4, 5]',
                alternatives: ['[1, 2, 3, 4, 5]', '[1,2,3,4,5]'],
                hint: 'It adds multiple elements.',
                explanation: 'extend() adds all elements from the iterable to the end of the list, resulting in [1, 2, 3, 4, 5].'
            },
            {
                id: 'DS-12',
                type: 'array',
                difficulty: 'medium',
                question: 'How do you remove the first occurrence of value x from a list?',
                answer: 'remove(x)',
                alternatives: ['remove(x)', '.remove(x)'],
                hint: 'It removes by value, not index.',
                explanation: 'list.remove(x) removes the first occurrence of value x from the list.'
            },
            {
                id: 'DS-13',
                type: 'array',
                difficulty: 'easy',
                question: 'What does arr.index(3) return if arr = [1, 3, 5]?',
                answer: '1',
                alternatives: ['1'],
                hint: 'index() finds the position of a value.',
                explanation: 'The value 3 is at index 1 in [1, 3, 5].'
            },
            {
                id: 'DS-14',
                type: 'array',
                difficulty: 'medium',
                question: 'How do you count occurrences of value x in a list?',
                answer: 'count(x)',
                alternatives: ['count(x)', '.count(x)'],
                hint: 'It returns the number of times x appears.',
                explanation: 'list.count(x) returns the number of times x appears in the list.'
            },
            {
                id: 'DS-15',
                type: 'array',
                difficulty: 'hard',
                question: 'What is the time complexity of removing an element by index from a list?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'Elements after the removed one need to shift.',
                explanation: 'Removing by index requires shifting all subsequent elements, taking O(n) time.'
            }
        ],
        strings: [
            {
                id: 'DS-16',
                type: 'string',
                difficulty: 'easy',
                question: 'Are Python strings mutable or immutable?',
                answer: 'immutable',
                alternatives: ['immutable'],
                hint: 'Can you change a character in place?',
                explanation: 'Python strings are immutable - you cannot change characters in place; you must create a new string.'
            },
            {
                id: 'DS-17',
                type: 'string',
                difficulty: 'easy',
                question: 'How do you get the first character of string s?',
                answer: 's[0]',
                alternatives: ['s[0]'],
                hint: 'Strings are 0-indexed like lists.',
                explanation: 'Use index 0 to access the first character: s[0].'
            },
            {
                id: 'DS-18',
                type: 'string',
                difficulty: 'medium',
                question: 'What method checks if a string starts with a substring?',
                answer: 'startswith()',
                alternatives: ['startswith()', '.startswith()'],
                hint: 'It returns True or False.',
                explanation: 's.startswith(substring) returns True if s starts with the given substring.'
            },
            {
                id: 'DS-19',
                type: 'string',
                difficulty: 'medium',
                question: 'What method converts a string to lowercase?',
                answer: 'lower()',
                alternatives: ['lower()', '.lower()'],
                hint: 'Similar to upper() but opposite.',
                explanation: 's.lower() converts all characters in s to lowercase.'
            },
            {
                id: 'DS-20',
                type: 'string',
                difficulty: 'medium',
                question: 'What method removes leading and trailing whitespace?',
                answer: 'strip()',
                alternatives: ['strip()', '.strip()'],
                hint: 'Also called trim in some languages.',
                explanation: 's.strip() removes leading and trailing whitespace from the string.'
            },
            {
                id: 'DS-21',
                type: 'string',
                difficulty: 'hard',
                question: 'How do you replace all occurrences of "old" with "new" in string s?',
                answer: 's.replace("old", "new")',
                alternatives: ['replace("old", "new")', 's.replace("old", "new")'],
                hint: 'There\'s a method for this.',
                explanation: 's.replace("old", "new") returns a new string with all occurrences of "old" replaced by "new".'
            },
            {
                id: 'DS-22',
                type: 'string',
                difficulty: 'medium',
                question: 'What does "hello".split("l") return?',
                answer: "['he', '', 'o']",
                alternatives: ["['he', '', 'o']", '["he","","o"]'],
                hint: 'Splitting on "l",
                explanation: 'Splitting "hello" on "l" gives ["he", "", "o"].'
            },
            {
                id: 'DS-23',
                type: 'string',
                difficulty: 'medium',
                question: 'What does "-".join(["a", "b", "c"]) return?',
                answer: 'a-b-c',
                alternatives: ['a-b-c'],
                hint: 'join() is called on the separator.',
                explanation: '"-".join(["a", "b", "c"]) joins the list elements with "-" as separator: "a-b-c".'
            },
            {
                id: 'DS-24',
                type: 'string',
                difficulty: 'hard',
                question: 'What is the time complexity of checking if a character exists in a string?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'String search is linear.',
                explanation: 'Checking if a character exists in a string requires scanning the string in worst case: O(n).'
            },
            {
                id: 'DS-25',
                type: 'string',
                difficulty: 'medium',
                question: 'How do you get a substring from index 2 to 5 (exclusive) in string s?',
                answer: 's[2:5]',
                alternatives: ['s[2:5]'],
                hint: 'Use string slicing.',
                explanation: 's[2:5] returns the substring from index 2 to 4 (excluding 5).'
            },
            {
                id: 'DS-26',
                type: 'string',
                difficulty: 'medium',
                question: 'What method checks if a string contains a substring (returns bool)?',
                answer: 'in operator',
                alternatives: ['in', 'in operator', "'in'"],
                hint: 'Use: substring in string',
                explanation: 'Use the "in" operator: substring in string returns True if substring exists in string.'
            },
            {
                id: 'DS-27',
                type: 'string',
                difficulty: 'easy',
                question: 'How do you repeat a string s 5 times?',
                answer: 's * 5',
                alternatives: ['s * 5', 's*5'],
                hint: 'Use the multiplication operator.',
                explanation: 's * 5 repeats string s five times.'
            },
            {
                id: 'DS-28',
                type: 'string',
                difficulty: 'medium',
                question: 'What does "Hello".index("e") return?',
                answer: '1',
                alternatives: ['1'],
                hint: 'index() finds the first occurrence.',
                explanation: '"e" first appears at index 1 in "Hello" (0-indexed).'
            },
            {
                id: 'DS-29',
                type: 'string',
                difficulty: 'hard',
                question: 'How do you convert a string to a list of characters?',
                answer: 'list(s)',
                alternatives: ['list(s)'],
                hint: 'Use list() constructor.',
                explanation: 'list(s) converts string s into a list of individual characters.'
            },
            {
                id: 'DS-30',
                type: 'string',
                difficulty: 'medium',
                question: 'What method capitalizes the first character of a string?',
                answer: 'capitalize()',
                alternatives: ['capitalize()', '.capitalize()'],
                hint: 'Only the first character.',
                explanation: 's.capitalize() returns a string with the first character capitalized.'
            }
        ],
        linkedlist: [
            {
                id: 'DS-31',
                type: 'linkedlist',
                difficulty: 'medium',
                question: 'What is the time complexity of inserting at the beginning of a singly-linked list?',
                answer: 'O(1)',
                alternatives: ['O(1)'],
                hint: 'Just change the head pointer.',
                explanation: 'Inserting at the beginning of a linked list is O(1) - just update the head pointer to the new node.'
            },
            {
                id: 'DS-32',
                type: 'linkedlist',
                difficulty: 'hard',
                question: 'What is the time complexity of accessing the last element of a singly-linked list?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'You must traverse from the head.',
                explanation: 'To reach the last element, you must traverse all nodes, making it O(n).'
            },
            {
                id: 'DS-33',
                type: 'linkedlist',
                difficulty: 'medium',
                question: 'What technique finds the middle of a linked list in one pass?',
                answer: 'two pointers',
                alternatives: ['fast slow pointers', 'fast and slow pointers', 'floyd\'s algorithm'],
                hint: 'One pointer moves twice as fast as the other.',
                explanation: 'Use fast and slow pointers: fast moves 2 steps, slow moves 1 step. When fast reaches end, slow is at middle.'
            },
            {
                id: 'DS-34',
                type: 'linkedlist',
                difficulty: 'medium',
                question: 'Which operation is faster in a linked list than an array?',
                answer: 'insertion at head',
                alternatives: ['insert', 'insertion at head', 'insertion', 'deletion at head'],
                hint: 'Remember: O(1) insertion at any point if you have the reference.',
                explanation: 'Linked lists allow O(1) insertion/deletion if you have a reference to the node, unlike arrays which require shifting.'
            },
            {
                id: 'DS-35',
                type: 'linkedlist',
                difficulty: 'medium',
                question: 'What data structure could you use to reverse a linked list iteratively?',
                answer: 'three pointers',
                alternatives: ['three pointers', 'prev curr next', 'previous current next'],
                hint: 'Track the previous, current, and next nodes.',
                explanation: 'Use three pointers (prev, curr, next) to reverse the links as you traverse the list.'
            },
            {
                id: 'DS-36',
                type: 'linkedlist',
                difficulty: 'hard',
                question: 'What algorithm detects a cycle in a linked list?',
                answer: 'Floyd\'s Cycle Detection',
                alternatives: ['Floyd\'s cycle detection', 'fast slow pointers', 'tortoise and hare'],
                hint: 'Uses slow and fast pointers.',
                explanation: 'Floyd\'s cycle detection uses slow (1x) and fast (2x) pointers. If they meet, a cycle exists.'
            },
            {
                id: 'DS-37',
                type: 'linkedlist',
                difficulty: 'medium',
                question: 'What is the time complexity of removing a node (given reference) in a linked list?',
                answer: 'O(1)',
                alternatives: ['O(1)'],
                hint: 'If you already have the node reference.',
                explanation: 'Removal is O(1) when you have the node reference: just adjust the next pointer of the previous node.'
            },
            {
                id: 'DS-38',
                type: 'linkedlist',
                difficulty: 'easy',
                question: 'What is the main disadvantage of linked lists compared to arrays?',
                answer: 'no random access',
                alternatives: ['no random access', 'no array indexing', 'O(n) access'],
                hint: 'Can you do list[i]? No.',
                explanation: 'Linked lists don\'t support random access - you must traverse from the head to reach an element.'
            },
            {
                id: 'DS-39',
                type: 'linkedlist',
                difficulty: 'medium',
                question: 'In a doubly-linked list, what pointer(s) does each node have?',
                answer: 'next and prev',
                alternatives: ['next and previous', 'next and prev', 'next and previous pointers'],
                hint: 'Can go both directions.',
                explanation: 'Each node in a doubly-linked list has two pointers: next (to following node) and prev (to previous node).'
            },
            {
                id: 'DS-40',
                type: 'linkedlist',
                difficulty: 'hard',
                question: 'How do you find the node where a cycle begins (if it exists)?',
                answer: 'move both pointers to meet point',
                alternatives: ['reset slow to head', 'Floyd\'s algorithm variant'],
                hint: 'After detecting a cycle, move one pointer to head.',
                explanation: 'After detecting a cycle, reset slow to head, move both at 1x speed; they\'ll meet at cycle start.'
            }
        ],
        stack_queue: [
            {
                id: 'DS-41',
                type: 'stack',
                difficulty: 'easy',
                question: 'What is the primary characteristic of a stack?',
                answer: 'LIFO',
                alternatives: ['last in first out', 'LIFO', 'Last In First Out'],
                hint: 'Last element added is first removed.',
                explanation: 'Stacks follow LIFO: Last In First Out. The most recently added element is the first one removed.'
            },
            {
                id: 'DS-42',
                type: 'queue',
                difficulty: 'easy',
                question: 'What is the primary characteristic of a queue?',
                answer: 'FIFO',
                alternatives: ['first in first out', 'FIFO', 'First In First Out'],
                hint: 'First element added is first removed.',
                explanation: 'Queues follow FIFO: First In First Out. Elements are removed in the same order they were added.'
            },
            {
                id: 'DS-43',
                type: 'stack',
                difficulty: 'easy',
                question: 'What method adds an element to a stack?',
                answer: 'push',
                alternatives: ['push()', 'push()', 'append'],
                hint: 'Think of pushing onto a pile.',
                explanation: 'push() adds an element to the top of a stack.'
            },
            {
                id: 'DS-44',
                type: 'stack',
                difficulty: 'easy',
                question: 'What method removes the top element from a stack?',
                answer: 'pop',
                alternatives: ['pop()', 'pop'],
                hint: 'Think of popping from a pile.',
                explanation: 'pop() removes and returns the top element from a stack.'
            },
            {
                id: 'DS-45',
                type: 'stack',
                difficulty: 'medium',
                question: 'What method returns the top element without removing it?',
                answer: 'peek',
                alternatives: ['peek()', 'peek', 'top'],
                hint: 'Just look, don\'t remove.',
                explanation: 'peek() returns the top element without removing it from the stack.'
            },
            {
                id: 'DS-46',
                type: 'queue',
                difficulty: 'medium',
                question: 'What method adds an element to a queue?',
                answer: 'enqueue',
                alternatives: ['enqueue', 'append', 'push'],
                hint: 'Get in line.',
                explanation: 'enqueue() adds an element to the back of a queue.'
            },
            {
                id: 'DS-47',
                type: 'queue',
                difficulty: 'medium',
                question: 'What method removes an element from a queue?',
                answer: 'dequeue',
                alternatives: ['dequeue', 'pop', 'popleft'],
                hint: 'Get served at the front.',
                explanation: 'dequeue() removes and returns the front element from the queue.'
            },
            {
                id: 'DS-48',
                type: 'stack',
                difficulty: 'easy',
                question: 'What Python data structure is commonly used as a stack?',
                answer: 'list',
                alternatives: ['list', 'array'],
                hint: 'Use append() and pop().',
                explanation: 'Python lists can serve as stacks with append() = push, pop() = pop.'
            },
            {
                id: 'DS-49',
                type: 'queue',
                difficulty: 'easy',
                question: 'What Python module provides an efficient queue implementation?',
                answer: 'collections.deque',
                alternatives: ['deque', 'collections.deque', 'from collections import deque'],
                hint: 'Double-ended queue.',
                explanation: 'collections.deque provides O(1) operations for both ends, making it ideal for queues.'
            },
            {
                id: 'DS-50',
                type: 'stack',
                difficulty: 'hard',
                question: 'How do you implement a queue using two stacks?',
                answer: 'one for enqueue one for dequeue',
                alternatives: ['push stack pop stack', 'enqueue stack dequeue stack'],
                hint: 'One stack handles insertion, the other handles removal.',
                explanation: 'Use two stacks: one for push (enqueue), transfer to the second for pop (dequeue).'
            },
            {
                id: 'DS-51',
                type: 'stack',
                difficulty: 'medium',
                question: 'What is the time complexity of stack push and pop?',
                answer: 'O(1)',
                alternatives: ['O(1)'],
                hint: 'Only the top element is affected.',
                explanation: 'Stack push and pop only affect the top element, making them O(1) operations.'
            },
            {
                id: 'DS-52',
                type: 'queue',
                difficulty: 'medium',
                question: 'What is the time complexity of queue enqueue and dequeue (using deque)?',
                answer: 'O(1)',
                alternatives: ['O(1)'],
                hint: 'Only the ends are affected.',
                explanation: 'With collections.deque, enqueue (append) and dequeue (popleft) are O(1) operations.'
            },
            {
                id: 'DS-53',
                type: 'stack',
                difficulty: 'hard',
                question: What algorithm uses a stack to check if parentheses are balanced?',
                answer: 'push closing compare with popped',
                alternatives: ['push opening and compare', 'stack matching'],
                hint: 'Push opening brackets, pop and verify closing ones.',
                explanation: 'Stack algorithm: push opening brackets; on closing, check if stack top matches by popping.'
            },
            {
                id: 'DS-54',
                type: 'stack',
                difficulty: 'medium',
                question: 'How do you find the minimum element in a stack in O(1)?',
                answer: 'use auxiliary stack',
                alternatives: ['auxiliary stack', 'track min in another stack'],
                hint: 'Keep track separately.',
                explanation: 'Use an auxiliary stack that tracks the minimum for each level of the main stack.'
            },
            {
                id: 'DS-55',
                type: 'stack',
                difficulty: 'hard',
                question: 'How do you sort a stack using only stack operations?',
                answer: 'recursive sort with temporary stack',
                alternatives: ['temp stack', 'insertion sort using stack'],
                hint: 'Use a temporary stack for sorting.',
                explanation: 'Use recursion or a temporary stack to implement insertion sort on the stack.'
            },
            {
                id: 'DS-56',
                type: 'queue',
                difficulty: 'hard',
                question: 'How do you implement a stack using two queues?',
                answer: 'pop all elements to second push new pop all back',
                alternatives: ['push always to one dequeue from other', 'rotate for pop'],
                hint: 'For push: move all elements to one queue, add new, move back.',
                explanation: 'All elements go to one queue; for pop, transfer all but last to second queue, pop last, then transfer back.'
            },
            {
                id: 'DS-57',
                type: 'stack',
                difficulty: 'medium',
                question: 'What is the time complexity of checking if a stack is empty?',
                answer: 'O(1)',
                alternatives: ['O(1)'],
                hint: 'Just check size or compare to None.',
                explanation: 'Checking if a stack is empty is O(1) - just check if size is 0 or top is None.'
            },
            {
                id: 'DS-58',
                type: 'stack',
                difficulty: 'medium',
                question: 'What is the time complexity of getting the size of a stack?',
                answer: 'O(1)',
                alternatives: ['O(1)'],
                hint: 'If size is tracked or using list size.',
                explanation: 'Stack size can be returned in O(1) if tracked, or from list length if using Python list.'
            },
            {
                id: 'DS-59',
                type: 'queue',
                difficulty: 'medium',
                question: 'What is a priority queue?',
                answer: 'dequeues highest priority first',
                alternatives: ['priority based', 'not FIFO'],
                hint: 'Order is determined by priority, not insertion order.',
                explanation: 'A priority queue removes elements based on priority (typically smallest or largest first), not FIFO.'
            },
            {
                id: 'DS-60',
                type: 'queue',
                difficulty: 'medium',
                question: 'What Python module implements a priority queue?',
                answer: 'heapq',
                alternatives: ['heapq', 'queue.PriorityQueue', 'heap'],
                hint: 'It uses a heap internally.',
                explanation: 'Python\'s heapq module provides priority queue functionality using a binary heap.'
            }
        ],
        hash: [
            {
                id: 'DS-61',
                type: 'hash',
                difficulty: 'easy',
                question: 'What is the average time complexity of insertion in a hash table?',
                answer: 'O(1)',
                alternatives: ['O(1)'],
                hint: 'Direct access via hash function.',
                explanation: 'Hash tables provide average O(1) insertion due to direct indexing via hash function.'
            },
            {
                id: 'DS-62',
                type: 'hash',
                difficulty: 'easy',
                question: 'What is the average time complexity of lookup in a hash table?',
                answer: 'O(1)',
                alternatives: ['O(1)'],
                hint: 'Direct access via hash function.',
                explanation: 'Hash table lookup is average O(1) - compute hash and go directly to that bucket.'
            },
            {
                id: 'DS-63',
                type: 'hash',
                difficulty: 'medium',
                question: 'What is the worst case time complexity of hash table lookup?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'What happens when all elements hash to the same bucket?',
                explanation: 'Worst case is O(n) when all elements hash to the same bucket, causing linear search through chain.'
            },
            {
                id: 'DS-64',
                type: 'hash',
                difficulty: 'medium',
                question: 'What is a common method for handling hash collisions?',
                answer: 'chaining',
                alternatives: ['linked list', 'chaining', ' chaining'],
                hint: 'Store multiple items at the same index.',
                explanation: 'Chaining stores colliding elements in a linked list at each bucket.'
            },
            {
                id: 'DS-65',
                type: 'hash',
                difficulty: 'medium',
                question: 'What method handles collisions by finding the next empty slot?',
                answer: 'open addressing',
                alternatives: ['probing', 'linear probing', 'open addressing'],
                hint: 'Find another slot instead of chaining.',
                explanation: 'Open addressing handles collisions by finding the next empty slot in the table through probing.'
            },
            {
                id: 'DS-66',
                type: 'hash',
                difficulty: 'hard',
                question: 'What happens when a hash table\'s load factor gets too high?',
                answer: 'rehashing',
                alternatives: ['resize', 'expand', 'rehashing'],
                hint: 'Too many collisions degrade performance.',
                explanation: 'High load factor causes many collisions, triggering rehashing to a larger table with redistributed keys.'
            },
            {
                id: 'DS-67',
                type: 'hash',
                difficulty: 'easy',
                question: 'What Python dict method returns a list of all keys?',
                answer: 'keys()',
                alternatives: ['keys()', '.keys()'],
                hint: 'Returns view of keys.',
                explanation: 'dict.keys() returns a view object of all keys in the dictionary.'
            },
            {
                id: 'DS-68',
                type: 'hash',
                difficulty: 'easy',
                question: 'What Python dict method returns a list of all values?',
                answer: 'values()',
                alternatives: ['values()', '.values()'],
                hint: 'Returns view of values.',
                explanation: 'dict.values() returns a view object of all values in the dictionary.'
            },
            {
                id: 'DS-69',
                type: 'hash',
                difficulty: 'easy',
                question: 'What Python dict method returns a list of all key-value pairs?',
                answer: 'items()',
                alternatives: ['items()', '.items()'],
                hint: 'Returns view of items.',
                explanation: 'dict.items() returns a view object of (key, value) tuples.'
            },
            {
                id: 'DS-70',
                type: 'hash',
                difficulty: 'medium',
                question: 'How do you check if a key exists in a Python dict?',
                answer: 'key in dict',
                alternatives: ['in', 'in operator', 'key in d'],
                hint: 'Use the "in" operator.',
                explanation: 'Use "key in dict" to check if a key exists; returns True or False.'
            },
            {
                id: 'DS-71',
                type: 'hash',
                difficulty: 'medium',
                question: 'What dict method returns a value for a key, with a default if missing?',
                answer: 'get()',
                alternatives: ['get()', 'dict.get()', '.get()'],
                hint: 'Safer than direct indexing for missing keys.',
                explanation: 'dict.get(key, default) returns the value or default if key not found, avoiding KeyError.'
            },
            {
                id: 'DS-72',
                type: 'hash',
                difficulty: 'medium',
                question: 'What dict method removes and returns a value for a key?',
                answer: 'pop()',
                alternatives: ['pop()', '.pop()', 'dict.pop()'],
                hint: 'Like list pop but for keys.',
                explanation: 'dict.pop(key) removes and returns the value for that key, similar to list pop().'
            },
            {
                id: 'DS-73',
                type: 'hash',
                difficulty: 'easy',
                question: 'What dict method removes all items?',
                answer: 'clear()',
                alternatives: ['clear()', '.clear()', 'dict.clear()'],
                hint: 'Empty the dict.',
                explanation: 'dict.clear() removes all key-value pairs from the dictionary.'
            },
            {
                id: 'DS-74',
                type: 'hash',
                difficulty: 'medium',
                question: 'How do you merge one dict into another in Python?',
                answer: 'dict.update(other_dict)',
                alternatives: ['update()', 'dict.update()', '.update()'],
                hint: 'It modifies the original dict.',
                explanation: 'dict.update(other_dict) adds all key-values from other_dict into dict, overwriting duplicates.'
            },
            {
                id: 'DS-75',
                type: 'hash',
                difficulty: 'hard',
                question: 'What is the space complexity of a hash table with n items?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'Need to store all items plus some overhead.',
                explanation: 'A hash table stores all n items, so space is O(n) with some constant factor for buckets/'
            }
        ],
        trees: [
            {
                id: 'DS-76',
                type: 'tree',
                difficulty: 'easy',
                question: 'What is the maximum number of nodes at depth d in a binary tree?',
                answer: '2^d',
                alternatives: ['2^d', '2**d', '2 to the power of d'],
                hint: 'Each level doubles.',
                explanation: 'At depth d, there can be at most 2^d nodes (each parent has 2 children).'
            },
            {
                id: 'DS-77',
                type: 'tree',
                difficulty: 'medium',
                question: 'What is the maximum number of nodes in a binary tree of height h?',
                answer: '2^(h+1)-1',
                alternatives: ['2^(h+1)-1', '2**(h+1)-1', '2 to the power of h+1 minus 1'],
                hint: 'Sum of geometric series: 2^0 + 2^1 + ... + 2^h',
                explanation: 'Full binary tree of height h has 2^(h+1) - 1 nodes (sum of 2^0 to 2^h).'
            },
            {
                id: 'DS-78',
                type: 'tree',
                difficulty: 'easy',
                question: 'What is the time complexity of searching a BST?',
                answer: 'O(h)',
                alternatives: ['O(h)', 'O(log n)', 'O(n)'],
                hint: 'Depends on tree height. Balanced is better.',
                explanation: 'BST search is O(h), where h is height. In balanced trees, h = O(log n). In worst case, h = O(n).'
            },
            {
                id: 'DS-79',
                type: 'tree',
                difficulty: 'medium',
                question: 'What property defines a Binary Search Tree?',
                answer: 'left < node < right',
                alternatives: ['left child < node < right child', 'left smaller right bigger'],
                hint: 'Ordering property.',
                explanation: 'In a BST, all left subtree nodes are less than the node, and all right subtree nodes are greater.'
            },
            {
                id: 'DS-80',
                type: 'tree',
                difficulty: 'medium',
                question: 'What is the height of a balanced BST with n nodes?',
                answer: 'O(log n)',
                alternatives: ['O(log n)', 'log n'],
                hint: 'Balanced trees minimize height.',
                explanation: 'A balanced BST has height O(log n), giving O(log n) search time.'
            },
            {
                id: 'DS-81',
                type: 'tree',
                difficulty: 'medium',
                question: 'What tree traversal visits root, left, right?',
                answer: 'preorder',
                alternatives: ['preorder traversal', 'pre-order'],
                hint: 'Root first.',
                explanation: 'Preorder traversal: Visit root, then left subtree, then right subtree (root-left-right).'
            },
            {
                id: 'DS-82',
                type: 'tree',
                difficulty: 'medium',
                question: 'What tree traversal visits left, root, right?',
                answer: 'inorder',
                alternatives: ['inorder traversal', 'in-order'],
                hint: 'In the middle.',
                explanation: 'Inorder traversal: Visit left subtree, then root, then right subtree (left-root-right).'
            },
            {
                id: 'DS-83',
                type: 'tree',
                difficulty: 'medium',
                question: 'What tree traversal visits left, right, root?',
                answer: 'postorder',
                alternatives: ['postorder traversal', 'post-order'],
                hint: 'Root last.',
                explanation: 'Postorder traversal: Visit left subtree, then right subtree, then root (left-right-root).'
            },
            {
                id: 'DS-84',
                type: 'tree',
                difficulty: 'hard',
                question: 'What tree data structure guarantees O(log n) operations?',
                answer: 'AVL or Red-Black',
                alternatives: ['self-balancing tree', 'AVL tree', 'red-black tree'],
                hint: 'Self-balancing.',
                explanation: 'Self-balancing trees like AVL or Red-Black guarantee O(log n) height, ensuring O(log n) operations.'
            },
            {
                id: 'DS-85',
                type: 'tree',
                difficulty: 'medium',
                question: 'What is the difference between BFS and DFS on a tree?',
                answer: 'BFS uses queue DFS uses stack',
                alternatives: ['BFS level-by-level', 'BFS breadth DFS depth'],
                hint: 'Breadth vs Depth.',
                explanation: 'BFS explores level by level using a queue. DFS goes deep first using a stack/recursion.'
            },
            {
                id: 'DS-86',
                type: 'tree',
                difficulty: 'medium',
                question: 'How do you find the minimum value in a BST?',
                answer: 'go left until null',
                alternatives: ['leftmost node', 'keep going left'],
                hint: 'Smallest values are on the left.',
                explanation: 'In a BST, the minimum value is the leftmost node - keep traversing left until you reach null.'
            },
            {
                id: 'DS-87',
                type: 'tree',
                difficulty: 'medium',
                question: 'How do you find the maximum value in a BST?',
                answer: 'go right until null',
                alternatives: ['rightmost node', 'keep going right'],
                hint: 'Largest values are on the right.',
                explanation: 'In a BST, the maximum value is the rightmost node - keep traversing right until null.'
            },
            {
                id: 'DS-88',
                type: 'tree',
                difficulty: 'hard',
                question: 'What is the time complexity of inserting into a balanced BST?',
                answer: 'O(log n)',
                alternatives: ['O(log n)'],
                hint: 'Balanced keeps height at log n.',
                explanation: 'Insertion in a balanced BST is O(log n) because we traverse down the tree of height O(log n).'
            },
            {
                id: 'DS-89',
                type: 'tree',
                difficulty: 'hard',
                question: 'What is the time complexity of inserting into an unbalanced BST?',
                answer: 'O(n)',
                alternatives: ['O(n)'],
                hint: 'Worst case height is n.',
                explanation: 'In worst case (sorted input), BST becomes a linked list of height n, so insertion is O(n).'
            },
            {
                id: 'DS-90',
                type: 'tree',
                difficulty: 'medium',
                question: 'What tree traversal is commonly used for expression evaluation?',
                answer: 'postorder',
                alternatives: ['postorder', 'post-order'],
                hint: 'Evaluate children before parent.',
                explanation: 'Postorder evaluates children before the parent, making it ideal for arithmetic expression evaluation.'
            }
        ],
        graphs: [
            {
                id: 'DS-91',
                type: 'graph',
                difficulty: 'easy',
                question: 'What is the time complexity of BFS on a graph with V vertices and E edges?',
                answer: 'O(V + E)',
                alternatives: ['O(V + E)', 'O(V+E)', 'O(n + m)'],
                hint: 'Visit all vertices and edges.',
                explanation: 'BFS visits all V vertices and examines all E edges, giving O(V + E) time.'
            },
            {
                id: 'DS-92',
                type: 'graph',
                difficulty: 'easy',
                question: 'What is the time complexity of DFS on a graph with V vertices and E edges?',
                answer: 'O(V + E)',
                alternatives: ['O(V + E)', 'O(V+E)', 'O(n + m)'],
                hint: 'Visit all vertices and edges.',
                explanation: 'DFS visits all V vertices and examines all E edges, giving O(V + E) time.'
            },
            {
                id: 'DS-93',
                type: 'graph',
                difficulty: 'medium',
                question: 'What data structure does BFS use?',
                answer: 'queue',
                alternatives: ['queue', 'FIFO'],
                hint: 'Explores level by level.',
                explanation: 'BFS uses a queue to explore vertices level by level (FIFO order).'
            },
            {
                id: 'DS-94',
                type: 'graph',
                difficulty: 'medium',
                question: 'What data structure does DFS use?',
                answer: 'stack',
                alternatives: ['stack', 'recursion'],
                hint: 'Goes deep first.',
                explanation: 'DFS uses a stack (or recursion) to go as deep as possible before backtracking.'
            },
            {
                id: 'DS-95',
                type: 'graph',
                difficulty: 'medium',
                question: 'How do you represent a sparse graph adjacently?',
                answer: 'adjacency list',
                alternatives: ['list of lists', 'linked list'],
                hint: 'Only store existing edges.',
                explanation: 'Adjacency lists store only existing edges, making them efficient for sparse graphs.'
            },
            {
                id: 'DS-96',
                type: 'graph',
                difficulty: 'medium',
                question: 'How do you represent a dense graph densely?',
                answer: 'adjacency matrix',
                alternatives: ['2D array', 'matrix'],
                hint: 'Store all possible edges.',
                explanation: 'Adjacency matrices use O(V^2) space but allow O(1) edge existence checks, good for dense graphs.'
            },
            {
                id: 'DS-97',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is the space complexity of adjacency list representation?',
                answer: 'O(V + E)',
                alternatives: ['O(V + E)', 'O(V+E)'],
                hint: 'Need to store vertices and edges.',
                explanation: 'Adjacency lists store V vertices and E edges, so space is O(V + E).'
            },
            {
                id: 'DS-98',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is the space complexity of adjacency matrix representation?',
                answer: 'O(V^2)',
                alternatives: ['O(V^2)', 'O(V*V)'],
                hint: 'V by V matrix.',
                explanation: 'Adjacency matrix is a V x V matrix, requiring O(V^2) space regardless of edges.'
            },
            {
                id: 'DS-99',
                type: 'graph',
                difficulty: 'hard',
                question: 'What algorithm finds all shortest paths in a weighted graph?',
                answer: 'Floyd-Warshall',
                alternatives: ['Floyd Warshall', 'FW'],
                hint: 'All-pairs shortest path.',
                explanation: 'Floyd-Warshall finds shortest paths between all pairs of vertices in O(V^3) time.'
            },
            {
                id: 'DS-100',
                type: 'graph',
                difficulty: 'hard',
                question: 'What algorithm finds MST using greedy edge selection?',
                answer: 'Kruskal',
                alternatives: ['Kruskal\'s', 'Kruskal\'s algorithm'],
                hint: 'Uses Union-Find. Sort edges by weight.',
                explanation: 'Kruskal\'s algorithm uses Union-Find and builds MST by greedily adding lightest edges.'
            },
            {
                id: 'DS-101',
                type: 'graph',
                difficulty: 'hard',
                question: 'What algorithm finds MST using vertex-based greedy selection?',
                answer: 'Prim',
                alternatives: ['Prim\'s', 'Prim\'s algorithm'],
                hint: 'Grows tree from a vertex.',
                explanation: 'Prim\'s algorithm grows MST from a starting vertex by adding minimum weight edges to the growing tree.'
            },
            {
                id: 'DS-102',
                type: 'graph',
                difficulty: 'medium',
                question: 'What data structure is used with Kruskal\'s algorithm?',
                answer: 'Union-Find',
                alternatives: ['Disjoint Set Union', 'DSU'],
                hint: 'Detects cycles efficiently.',
                explanation: 'Kruskal\'s uses Union-Find (DSU) to efficiently detect cycles when adding edges.'
            },
            {
                id: 'DS-103',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is the time complexity of Kruskal\'s algorithm?',
                answer: 'O(E log E)',
                alternatives: ['O(E log E)', 'O(E log V)'],
                hint: 'Sorting edges is the bottleneck.',
                explanation: 'Kruskal\'s is O(E log E) due to sorting edges; with Union-Find, edge operations are nearly O(1).'
            },
            {
                id: 'DS-104',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is the time complexity of Prim\'s algorithm with binary heap?',
                answer: 'O(E log V)',
                alternatives: ['O(E log V)', 'O((V+E) log V)'],
                hint: 'Heap operations dominate.',
                explanation: 'Prim\'s with binary heap is O(E log V) due to heap operations for each edge.'
            },
            {
                id: 'DS-105',
                type: 'graph',
                difficulty: 'medium',
                question: 'What does a directed graph edge (u, v) indicate?',
                answer: 'direction from u to v',
                alternatives: ['one-way', 'u points to v'],
                hint: 'Not symmetric like undirected.',
                explanation: 'In a directed graph, edge (u, v) goes from u to v only; v to u is not automatically an edge.'
            },
            {
                id: 'DS-106',
                type: 'graph',
                difficulty: 'medium',
                question: 'What algorithm finds the shortest path in a weighted graph?',
                answer: 'Dijkstra',
                alternatives: ['Dijkstra\'s', 'Dijkstra\'s algorithm'],
                hint: 'Greedy, uses min-heap.",
                explanation: 'Dijkstra\'s algorithm finds shortest paths from a source using a greedy min-heap approach.'
            },
            {
                id: 'DS-107',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is the time complexity of Dijkstra with binary heap?',
                answer: 'O(E log V)',
                alternatives: ['O(E log V)', 'O((V+E) log V)'],
                hint: 'Heap operations per edge.',
                explanation: 'Dijkstra with binary heap has O(E log V) complexity due to heap operations.'
            },
            {
                id: 'DS-108',
                type: 'graph',
                difficulty: 'hard',
                question: 'What algorithm handles negative edge weights for single-source shortest paths?',
                answer: 'Bellman-Ford',
                alternatives: ['Bellman Ford', 'Bellman-Ford'],
                hint: 'Relaxes all edges V-1 times.',
                explanation: 'Bellman-Ford handles negative weights (and detects negative cycles) by relaxing all edges V-1 times: O(VE).'
            },
            {
                id: 'DS-109',
                type: 'graph',
                difficulty: 'medium',
                question: 'How do you detect a cycle in a directed graph?',
                answer: 'DFS with colors',
                alternatives: ['topological sort', 'visited and recursion stack'],
                hint: 'Use DFS and marked states.',
                explanation: 'Use DFS to mark nodes as visited; if you encounter a node already in the current recursion stack, a cycle exists.'
            },
            {
                id: 'DS-110',
                type: 'graph',
                difficulty: 'medium',
                question: 'What ordering arranges vertices such that all edges go left to right?',
                answer: 'topological',
                alternatives: ['topological sort', 'topological order', 'topo sort'],
                hint: 'For DAGs only.',
                explanation: 'Topological order arranges vertices so that for every edge (u, v), u comes before v. Only possible for DAGs.'
            }
        ]
    },

    // ==========================================
    // MODULE 3: HASH TABLES PATTERN
    // ==========================================
    hashtables: [
        {
            id: 'HT-1',
            type: 'hashtable-problem',
            difficulty: 'easy',
            question: 'Given a list of integers, return the indices of two numbers that add up to target.',
            answer: 'use dict to store complements',
            alternatives: ['hash map', 'dictionary approach', 'one-pass'],
            hint: 'Check each element\'s complement (target - num).',
            explanation: 'Use a hash map to store num: index. For each num, check if (target - num) exists in the map. O(n) time, O(n) space.'
        },
        {
            id: 'HT-2',
            type: 'hashtable-problem',
            difficulty: 'easy',
            question: 'Given a string, return the first non-repeating character.',
            answer: 'use dict to count frequencies',
            alternatives: ['frequency map', 'count occurrences', 'two-pass'],
            hint: 'First pass count, second pass find first with count 1.',
            explanation: 'Pass 1: Build frequency map of characters. Pass 2: Find first character with frequency 1. O(n) time.'
        },
        {
            id: 'HT-3',
            type: 'hashtable-problem',
            difficulty: 'easy',
            question: 'Given an array, find if any value appears at least twice.',
            answer: 'use set',
            alternatives: ['hash set', 'seen set'],
            hint: 'Add elements to a set, check for duplicate.',
            explanation: 'Use a set to track seen elements. If an element is already in the set, return True. O(n) time.'
        },
        {
            id: 'HT-4',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given an array, return the intersection of two arrays.',
            answer: 'use set intersection',
            alternatives: ['hash map counts', 'two sets'],
            hint: 'Put all elements of first array in a set.',
            explanation: 'Convert first array to set, then check each element of second array against it. O(n) time.'
        },
        {
            id: 'HT-5',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a list of strings, group anagrams together.',
            answer: 'sort each string as key',
            alternatives: ['character count as key', 'frequency tuple as key'],
            hint: 'Anagrams have the same sorted characters.',
            explanation: 'Group strings by their sorted version as key: {"eat", "tea", "ate"} all become "aet". O(n * k * log k).'
        },
        {
            id: 'HT-6',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given an array, find the most frequent element.',
            answer: 'use frequency map',
            alternatives: ['count frequencies', 'hash map counting'],
            hint: 'Count occurrences of each element.',
            explanation: 'Use a frequency map to count each element, then find the maximum. O(n) time.'
        },
        {
            id: 'HT-7',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given an array, find all elements appearing more than n/3 times.',
            answer: 'use frequency map',
            alternatives: ['hash map counting'],
            hint: 'Maximum 2 such elements possible.',
            explanation: 'Count frequencies with a hash map, return all with count > n/3. O(n) time, O(n) space.'
        },
        {
            id: 'HT-8',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given integers nums and target, find indices i < j such that nums[i] + nums[j] = target.',
            answer: 'hash map with complement',
            alternatives: ['two sum', 'one-pass dict'],
            hint: 'For each element, look for target - element previously seen.',
            explanation: 'Store each element\'s index. For current num, check if (target - num) exists. O(n) time.'
        },
        {
            id: 'HT-9',
            type: 'hashtable-problem',
            difficulty: 'easy',
            question: 'Given a string, determine if it is a permutation of a palindrome.',
            answer: 'count character frequencies',
            alternatives: ['frequency map', 'check odd counts'],
            hint: 'Palindrome has at most one odd-count character.',
            explanation: 'Count character frequencies. At most one character can have odd count for a palindrome. O(n) time.'
        },
        {
            id: 'HT-10',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given an array, find the longest subarray with sum divisible by k.',
            answer: 'store remainder frequencies',
            alternatives: ['hash map of remainders', 'prefix sum remainders'],
            hint: 'If two prefix sums have same remainder mod k, their subarray is divisible.',
            explanation: 'Store prefix sum % k frequencies. Longest subarray is between same remainders. O(n) time.'
        },
        {
            id: 'HT-11',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a pattern and a string, find if string follows pattern (e.g., pattern "abba", string "dog cat cat dog").',
            answer: 'two-way map pattern<->word',
            alternatives: ['bijection mapping', 'pattern to word and word to pattern'],
            hint: 'Need to ensure one-to-one mapping.',
            explanation: 'Use two maps: pattern->word and word->pattern to ensure bijection. O(n) time.'
        },
        {
            id: 'HT-12',
            type: 'hashtable-problem',
            difficulty: 'easy',
            question: 'Given a list, find a pair with given difference k.',
            answer: 'use set',
            alternatives: ['hash set'],
            hint: 'Check if arr[i] - k or arr[i] + k exists.',
            explanation: 'For each element x, check if x-k or x+k exists in the set of seen elements. O(n) time.'
        },
        {
            id: 'HT-13',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given two strings, check if they are isomorphic (same pattern).',
            answer: 'two-way character mapping',
            alternatives: ['bijection', 'two maps'],
            hint: 'Each character must map to exactly one character.',
            explanation: 'Use two maps: s_char->t_char and t_char->s_char to ensure one-to-one mapping. O(n) time.'
        },
        {
            id: 'HT-14',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given an array of integers, return all unique triplets that sum to zero.',
            answer: 'sort and use two pointers',
            alternatives: ['sort two-pointer', 'hash map approach'],
            hint: 'Fix one element, use two pointers for the remaining two.',
            explanation: 'Sort array, fix one element, use two pointers to find pairs summing to complement. Skip duplicates. O(n^2).'
        },
        {
            id: 'HT-15',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a string, find the length of the longest substring without repeating characters.',
            answer: 'sliding window with set or dict',
            alternatives: ['sliding window', 'hash map of last seen'],
            hint: 'Track characters in current window.',
            explanation: 'Use sliding window with set/dict to track characters. Remove from left when duplicate found. O(n) time.'
        },
        {
            id: 'HT-16',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given two arrays, return their intersection with duplicates.',
            answer: 'frequency map',
            alternatives: ['count frequencies'],
            hint: 'Count frequencies in first array, decrement for second.',
            explanation: 'Build frequency map from first array. Check each element of second against map, decrement count. O(n).'
        },
        {
            id: 'HT-17',
            type: 'hashtable-problem',
            difficulty: 'hard',
            question: 'Given a string, find the longest substring with at most k distinct characters.',
            answer: 'sliding window with character count map',
            alternatives: ['hash map sliding window'],
            hint: 'Maintain count of each character in window.',
            explanation: 'Sliding window with hash map tracking character counts. Shrink when distinct > k. O(n) time.'
        },
        {
            id: 'HT-18',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given an array and integer k, check if there are two distinct indices with difference k.',
            answer: 'hash map value to last index',
            alternatives: ['value to index map'],
            hint: 'Track last occurrence of each value.',
            explanation: 'Map each value to its last seen index. Check if current index - last index of value == k. O(n) time.'
        },
        {
                id: 'HT-19',
            type: 'hashtable-problem',
            difficulty: 'easy',
            question: 'Given an array, return the majority element (appears more than n/2 times).',
            answer: 'frequency map or Boyer-Moore',
            alternatives: ['count frequencies', 'hash map'],
            hint: 'Count all frequencies, find max.',
            explanation: 'Count frequencies with hash map, return element with count > n/2. O(n) time, O(n) space (or O(1) with Boyer-Moore).'
        },
        {
            id: 'HT-20',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a string, find if any permutation of it is a palindrome.',
            answer: 'count odds',
            alternatives: ['frequency count', 'odd count check'],
            hint: 'Check how many characters have odd frequencies.',
            explanation: 'Count character frequencies. At most one odd count allowed for palindrome permutation. O(n) time.'
        },
        {
            id: 'HT-21',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given two arrays, find if one is a subset of another.',
            answer: 'use set',
            alternatives: ['hash set'],
            hint: 'Put all elements of larger array in a set.',
            explanation: 'Add all elements from larger array to set. Check if each element of smaller array exists in set. O(m+n).'
        },
        {
            id: 'HT-22',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a string, find all duplicate characters.',
            answer: 'frequency map',
            alternatives: ['hash map counting'],
            hint: 'Count each character\'s occurrences.',
            explanation: 'Build frequency map. Return all characters with count > 1. O(n) time.'
        },
        {
            id: 'HT-23',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given integers, find if any subarray sums to 0.',
            answer: 'prefix sum set',
            alternatives: ['hash set of prefix sums'],
            hint: 'If prefix sum repeats, subarray between them sums to 0.',
            explanation: 'Track prefix sums in a set. If a sum repeats, subarray between the two occurrences sums to 0. O(n) time.'
        },
        {
            id: 'HT-24',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a string and pattern, find the smallest substring containing all pattern characters.',
            answer: 'sliding window with frequency map',
            alternatives: ['hash map sliding window'],
            hint: 'Maintain required character counts.',
            explanation: 'Use sliding window with hash maps for pattern and window counts. Expand right, shrink left. O(n) time.'
        },
        {
            id: 'HT-25',
            type: 'hashtable-problem',
            difficulty: 'hard',
            question: 'Given an array, find subarray sum equals k, return count of such subarrays.',
            answer: 'prefix sum frequencies',
            alternatives: ['hash map of prefix sum counts'],
            hint: 'For each prefix sum, check if (prefix - k) exists.',
            explanation: 'Track prefix sums and their frequencies. For current sum, if (sum - k) was seen, add its count. O(n) time.'
        },
        {
            id: 'HT-26',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given two sentences, return all uncommon words (appear only once).',
            answer: 'frequency map of all words',
            alternatives: ['hash map word counts'],
            hint: 'Combine both sentences, count frequencies.',
            explanation: 'Count all word frequencies across both sentences. Return words with count == 1. O(n) time.'
        },
        {
            id: 'HT-27',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a string, find if it can be segmented into space-separated words from a dictionary.',
            answer: 'DP with hash set',
            alternatives: ['dynamic programming with set'],
            hint: 'Check if substring from start to i exists and rest is valid.',
            explanation: 'DP[i] = True if [0:i] is valid word or if DP[j] and [j:i] is a word for some j. O(n^2) time.'
        },
        {
            id: 'HT-28',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a list of words, return words that appear only once in exactly one sentence.',
            answer: 'hash map of (word, sentence_id)',
            alternatives: ['track word appearance per sentence'],
            hint: 'Need to track which sentence each word appears in.',
            explanation: 'Use map of (word, sentence_id) to count. Return words with total count 1 across all sentences. O(n).'
        },
        {
            id: 'HT-29',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a string, find the length of the longest consecutive sequence.',
            answer: 'set and expand around',
            alternatives: ['use set for O(1) lookup'],
            hint: 'For each number that could be start of sequence, expand.',
            explanation: 'Put all in set. For each number, if num-1 not in set, it\'s a start. Expand counting upwards. O(n) time.'
        },
        {
            id: 'HT-30',
            type: 'hashtable-problem',
            difficulty: 'hard',
            question: 'Given an integer array, find the number of Arithmetic Slices (consecutive, same difference).',
            answer: 'DP with hash map of differences',
            alternatives: ['hash map DP for each index'],
            hint: 'At each index, store DP[difference] = count of sequences ending here.',
            explanation: 'For each j > i, dp[j][nums[j]-nums[i]] += dp[i][nums[j]-nums[i]] + 1. Sum all dp[i][diff]. O(n^2).'
        },
        {
            id: 'HT-31',
            type: 'hashtable-problem',
            difficulty: 'easy',
            question: 'Given a list of domains, visit count in format "count domain", return aggregated counts.',
            answer: 'split domain build map',
            alternatives: ['hash map for subdomains'],
            hint: 'Split domain into subdomains and accumulate counts.',
            explanation: 'Split each domain by ".", accumulate count for each subdomain and parent subdomains. O(n * k).'
        },
        {
            id: 'HT-32',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a string and character set, find the length of the longest substring with only those characters.',
            answer: 'sliding window with character count',
            alternatives: ['set or map sliding window'],
            hint: 'Expand right, shrink left when invalid character.',
            explanation: 'Sliding window with set/dict. Expand right, shrink left when character not in allowed set. O(n) time.'
        },
        {
            id: 'HT-33',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given an array, return the top k frequent elements.',
            answer: 'frequency map and heap/bucket sort',
            alternatives: ['count frequencies then sort', 'heap'],
            hint: 'Count frequencies then get top k.',
            explanation: 'Count frequencies with hashmap. Use heap (O(n log k)) or bucket sort (O(n)) to get top k.'
        },
        {
            id: 'HT-34',
            type: 'hashtable-problem',
            difficulty: 'easy',
            question: 'Given two strings s and t, return true if t is an anagram of s.',
            answer: 'character frequency map',
            alternatives: ['sort strings', 'count characters'],
            hint: 'Same characters with same counts.',
            explanation: 'Count character frequencies for both strings, compare they are equal. O(n) time.'
        },
        {
            id: 'HT-35',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a string, find if it can be rearranged to form a palindrome.',
            answer: 'at most one odd count',
            alternatives: ['check odd frequencies'],
            hint: 'Even length: all even counts. Odd length: one odd count.',
            explanation: 'Count character frequencies. For palindrome: at most one character can have odd count. O(n) time.'
        },
        {
            id: 'HT-36',
            type: 'hashtable-problem',
            difficulty: 'hard',
            question: 'Given an array, find the longest subarray with sum at most k.',
            answer: 'prefix sum and binary search',
            alternatives: ['monotonic queue', 'prefix sum with tracking'],
            hint: 'Track earliest indices for prefix sums.',
            explanation: 'Use prefix sums. For each position, find earliest prefix sum making current sum <= k. O(n log n).'
        },
        {
            id: 'HT-37',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a string, find the longest word in dictionary that can be formed by deleting some characters.',
            answer: 'check each word in dictionary',
            alternatives: ['two pointers per word'],
            hint: 'For each dictionary word, check if it is subsequence.',
            explanation: 'Sort dictionary by length (descending). Check if each word is subsequence of given string. O(n*m).'
        },
        {
            id: 'HT-38',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given an array, return all elements that appear more than n/3 times.',
            answer: 'frequency map',
            alternatives: ['hash map counting'],
            hint: 'Maximum 2 such elements.',
            explanation: 'Count frequencies with hashmap, return all with count > n/3. O(n) time.'
        },
        {
            id: 'HT-39',
            type: 'hashtable-problem',
            difficulty: 'easy',
            question: 'Given a list of IDs and logs, find users with at least 5 logs that failed or had suspicious activity.',
            answer: 'frequency map per user',
            alternatives: ['count users'],
            hint: 'Count failed or suspicious logs per user.',
            explanation: 'Parse logs, count failures/suspicious per user. Return users with count >= 5. O(n) time.'
        },
        {
            id: 'HT-40',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given an array and value k, find all pairs with difference k.',
            answer: 'hash set',
            alternatives: ['two-pointer after sort'],
            hint: 'Check if x+k or x-k exists.',
            explanation: 'Use set for O(1) lookup. For each x, check if x+k or x-k exists. Handle k=0 specially. O(n) time.'
        },
        {
            id: 'HT-41',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a string, find the length of the longest substring without repeating characters.',
            answer: 'sliding window with set/dict',
            alternatives: ['hash map of last seen'],
            hint: 'Track characters in current window.',
            explanation: 'Sliding window with set tracking window characters. When duplicate found, shrink from left. O(n) time.'
        },
        {
            id: 'HT-42',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given an array, find the longest harmonious subsequence (max-min=1).',
            answer: 'frequency map',
            alternatives: ['count frequencies'],
            hint: 'For each value x, check frequencies of x and x+1.',
            explanation: 'Count all frequencies. For each value, sum freq[x] + freq[x+1] if both > 0. Track max. O(n) time.'
        },
        {
            id: 'HT-43',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given an array, find the number of good pairs (i<j and nums[i]==nums[j]).',
            answer: 'frequency map',
            alternatives: ['running count'],
            hint: 'For each value, count how many same values seen before.',
            explanation: 'For each element, add current frequency to result, then increment frequency. Sum of combinations. O(n).'
        },
        {
            id: 'HT-44',
            type: 'hashtable-problem',
            difficulty: 'hard',
            question: 'Given an array, find continuous subarrays that sum to k. Return count.',
            answer: 'prefix sum map frequencies',
            alternatives: ['hash map of prefix sums'],
            hint: 'If current prefix sum minus k was seen before, add its count.',
            explanation: 'Track prefix sum frequencies. For each sum, add freq[sum-k] to result. O(n) time.'
        },
        {
            id: 'HT-45',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a string, find if all characters have same frequency after at most one removal.',
            answer: 'check frequency patterns',
            alternatives: ['frequency map and edge cases'],
            hint: 'Valid if: all same freq, or one char has extra, or one char has freq 1.',
            explanation: 'Check patterns: all same freq, one freq 1, one freq differs by 1. O(n) time.'
        },
        {
            id: 'HT-46',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a list of tasks and cooldown, return least number of intervals to finish all tasks.',
            answer: 'max frequency-based schedule',
            alternatives: ['priority queue with frequencies'],
            hint: 'Most frequent task determines the layout.',
            explanation: '(max_freq - 1) * (n + 1) + count_max_freq or len(tasks), whichever is larger. O(n).'
        },
        {
            id: 'HT-47',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given an array, find the minimum window substring containing all characters from pattern.',
            answer: 'sliding window with two frequency maps',
            alternatives: ['hash map sliding window'],
            hint: 'Expand right, shrink left when all conditions met.',
            explanation: 'Use sliding window with maps for pattern and window counts with a formed counter. O(n) time.'
        },
        {
            id: 'HT-48',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given two strings, return minimum index sum of common restaurants.',
            answer: 'hash map name->index for first list',
            alternatives: ['one map then scan second'],
            hint: 'Build map from first string, check second string.',
            explanation: 'Map restaurant->index from first list. For each common restaurant found in second, track min index sum. O(n+m).'
        },
        {
            id: 'HT-49',
            type: 'hashtable-problem',
            difficulty: 'medium',
            question: 'Given a string, find the length of the longest palindrome that can be built.',
            answer: 'sum of evens + largest odd',
            alternatives: ['sum all even counts add 1 if any odd'],
            hint: 'Use all pairs, add one for center if odd exists.',
            explanation: 'Sum all even counts. For odds: (odd-1) to make pairs. Add 1 if any odd exists. O(n) time.'
        },
        {
            id: 'HT-50',
            type: 'hashtable-problem',
            difficulty: 'easy',
            question: 'Given a string and character, find first occurrence using hash map.',
            answer: 'build character index map',
            alternatives: ['direct find'],
            hint: 'Map each character to its position(s).',
            explanation: 'Build map of character->first_index, or find directly with string.find(). O(n) time.'
        }
    ],

    // ==========================================
    // MODULE 4: SLIDING WINDOW PATTERN
    // ==========================================
    slidingwindow: [
        {
            id: 'SW-1',
            type: 'sliding-window',
            difficulty: 'easy',
            question: 'Given an array and integer k, find the maximum sum of any subarray of size k.',
            answer: 'sliding window of fixed size k',
            alternatives: ['fixed window', 'k-size window'],
            hint: 'Maintain sum of window of k elements, slide by one.',
            explanation: 'Calculate sum of first k elements, then slide window: subtract left, add right. Track max sum. O(n) time.'
        },
        {
            id: 'SW-2',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given an array of positive integers, find the length of the smallest subarray with sum >= s.',
            answer: 'expand right shrink left variable window',
            alternatives: ['two-pointer sliding window', 'variable size window'],
            hint: 'Expand right while sum < s, shrink left while sum >= s.',
            explanation: 'Use two pointers with variable window size. Expand right to build window, shrink left when valid. O(n).'
        },
        {
            id: 'SW-3',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a string, find the length of the longest substring with at most k distinct characters.',
            answer: 'expand right shrink left with character count map',
            alternatives: ['hash map sliding window'],
            hint: 'Track distinct count. Shrink when > k.',
            explanation: 'Use hash map for character counts. Expand right, increment count. If distinct > k, shrink left. O(n).'
        },
        {
            id: 'SW-4',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a string, find the longest substring without repeating characters.',
            answer: 'expand right shrink left with character last seen',
            alternatives: ['sliding window with set/dict'],
            hint: 'Track characters in window. Remove from left on duplicate.',
            explanation: 'Use set/dict to track window. On duplicate, shrink from left until duplicate removed. Track max length. O(n).'
        },
        {
            id: 'SW-5',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a string and pattern p, find all anagrams of p in s.',
            answer: 'sliding window of len(p) with character counts',
            alternatives: ['fixed-size window permutation'],
            hint: 'Window size equals pattern length.',
            explanation: 'Maintain two frequency maps: pattern and window. Slide window of fixed size len(p), compare counts. O(n).'
        },
        {
            id: 'SW-6',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given an array of positive integers and target, find subarray summing to target.',
            answer: 'two pointers sliding window',
            alternatives: ['expand right shrink left'],
            hint: 'Expand right to increase sum, shrink left to decrease.',
            explanation: 'Two pointers: right to expand, left to shrink. Works because all numbers are positive. O(n).'
        },
        {
            id: 'SW-7',
            type: 'sliding-window',
            difficulty: 'hard',
            question: 'Given a string, find the minimum window substring containing all characters from pattern.',
            answer: 'sliding window with required and formed counters',
            alternatives: ['expand contract two maps'],
            hint: 'Track how many unique characters are satisfied.',
            explanation: 'Use maps for pattern and window counts. Expand right, shrink left when all conditions satisfied. Track min. O(n).'
        },
        {
            id: 'SW-8',
            type: 'sliding-window',
            difficulty: 'easy',
            question: 'Given an array, find the maximum of each subarray of size k.',
            answer: 'sliding window with deque',
            alternatives: ['monotonic deque', 'double-ended queue'],
            hint: 'Use deque to maintain decreasing order.',
            explanation: 'Use deque maintaining decreasing order. Front always has max. Remove out-of-window and smaller elements. O(n).'
        },
        {
            id: 'SW-9',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a string, find if it contains a permutation of another string.',
            answer: 'sliding window compare character counts',
            alternatives: ['fixed-size window permutation check'],
            hint: 'Window size equals pattern length.',
            explanation: 'Use frequency maps for pattern and sliding window of size len(pattern). Compare maps. O(n).'
        },
        {
            id: 'SW-10',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a binary array, find maximum consecutive ones with flipping at most k zeros.',
            answer: 'sliding window tracking zeros count',
            alternatives: ['window flip zeros'],
            hint: 'Track number of zeros in window.',
            explanation: 'Sliding window counting zeros. Expand right; if zeros > k, shrink left from rightmost zero. Track max length. O(n).'
        },
        {
            id: 'SW-11',
            type: 'sliding-window',
            difficulty: 'hard',
            question: 'Given a string, find the length of the longest substring with at most two distinct characters.',
            answer: 'sliding window with character count limit',
            alternatives: ['at most 2 chars window'],
            hint: 'Track distinct characters in window.',
            explanation: 'Use hash map for character counts. Maintain at most 2 distinct chars. Shrink when > 2 distinct. O(n).'
        },
        {
            id: 'SW-12',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a string, find length of longest substring with same letters after replacing at most k characters.',
            answer: 'expand right shrink left track max count',
            alternatives: ['window with max frequency'],
            hint: 'Track maximum frequency character in window.',
            explanation: 'Expand right, track max freq. Valid if (length - max_freq) <= k. Shrink when invalid. O(n).'
        },
        {
            id: 'SW-13',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a string, count subarrays with at most k distinct characters.',
            answer: 'sliding window count valid subarrays',
            alternatives: ['for each right count valid windows'],
            hint: 'For each right position, count valid subarrays ending there.',
            explanation: 'For each right, find smallest left where window valid. Number of valid subarrays = right - left + 1. O(n).'
        },
        {
            id: 'SW-14',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a string and character set, find longest substring with only those characters.',
            answer: 'sliding window check character validity',
            alternatives: ['valid character window'],
            hint: 'Expand right, shrink left on invalid character.',
            explanation: 'Use set for valid characters. Expand right, shrink left when invalid char found. Track max length. O(n).'
        },
        {
            id: 'SW-15',
            type: 'sliding-window',
            difficulty: 'hard',
            question: 'Given array of integers, find longest subarray where difference between max and min <= limit.',
            answer: 'sliding window with two deques track min and max',
            alternatives: ['monotonic deques'],
            hint: 'Need efficient access to max and min in window.',
            explanation: 'Use monotonic deques for min and max. Validate on each step. Expand right, shrink when invalid. O(n).'
        },
        {
            id: 'SW-16',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a string, find if any permutation can form a palindrome.',
            answer: 'character frequency check',
            alternatives: ['at most one odd count'],
            hint: 'Count character frequencies.',
            explanation: 'For palindrome permutation, at most one character can have odd count. O(n).'
        },
        {
            id: 'SW-17',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a binary string, find max length substring with equal 0s and 1s.',
            answer: 'prefix sum with hash map',
            alternatives: ['replace 0 with -1'],
            hint: 'Replace 0s with -1s, find max subarray sum = 0.',
            explanation: 'Replace 0 with -1. Find longest subarray with sum 0 using prefix sum map. O(n).'
        },
        {
            id: 'SW-18',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a string, find longest substring where no character appears more than twice.',
            answer: 'sliding window with character count limit',
            alternatives: ['max frequency 2'],
            hint: 'Ensure no character count exceeds 2.',
            explanation: 'Use hash map for counts. Expand right, shrink when any count > 2. Track max length. O(n).'
        },
        {
            id: 'SW-19',
            type: 'sliding-window',
            difficulty: 'hard',
            question: 'Given a string, find minimum window containing all a-z characters.',
            answer: 'sliding window with 26 character tracking',
            alternatives: ['expand contract'],
            hint: 'Track which letters from a-z are in window.',
            explanation: 'Sliding window tracking all 26 letters. Expand, contract when all present. Track minimum. O(n).'
        },
        {
            id: 'SW-20',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given an array, find minimum subarray length with sum >= target (positive numbers).',
            answer: 'sliding window expand right contract left',
            alternatives: ['two pointers'],
            hint: 'Expand to build sum, contract to maintain constraint.',
            explanation: 'Two pointers: expand right, when sum >= target, contract left to find minimum. O(n).'
        },
        {
            id: 'SW-21',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given string s and t, find min window in s containing all chars of t.',
            answer: 'sliding window expand contract with maps',
            alternatives: ['minimum window substring'],
            hint: 'Track required characters and how many satisfied.',
            explanation: 'Use maps for required and window. Expand right, contract left when all formed. Track minimum. O(n).'
        },
        {
            id: 'SW-22',
            type: 'sliding-window',
            difficulty: 'easy',
            question: 'Given array and k, find maximum average of subarray of least size k.',
            answer: 'sliding window track prefix sums',
            alternatives: ['prefix sums binary search'],
            hint: 'Check all subarrays of size k, k+1, etc.',
            explanation: 'Use prefix sums. For each right, compute average for valid subarray sizes. Binary search for optimization. O(n log n).'
        },
        {
            id: 'SW-23',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a string, find max vowels in any substring of length k.',
            answer: 'sliding window of size k count vowels',
            alternatives: ['fixed window vowel count'],
            hint: 'Window size fixed at k.',
            explanation: 'Fixed window size k. Count vowels in first k, slide updating with added/removed char. Track max. O(n).'
        },
        {
            id: 'SW-24',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given array, find total number of subarrays with product less than k.',
            answer: 'sliding window count valid subarrays',
            alternatives: ['expand right shrink left'],
            hint: 'For each right, find smallest left where product < k.',
            explanation: 'For each right, find how many subarrays ending at right have product < k. Expand and shrink window. O(n).'
        },
        {
            id: 'SW-25',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a string, find minimum length containing all characters of pattern.',
            answer: 'sliding window expand contract',
            alternatives: ['min window substring'],
            hint: 'Similar to finding minimum window with required chars.',
            explanation: 'Expand right to include all pattern chars, contract left to minimize. Use frequency maps. O(n).'
        },
        {
            id: 'SW-26',
            type: 'sliding-window',
            difficulty: 'hard',
            question: 'Given a string, find number of substrings with exactly k distinct characters.',
            answer: 'atMost(k) - atMost(k-1)',
            alternatives: ['count windows'],
            hint: 'Number with exactly k = number with at most k - number with at most k-1.',
            explanation: 'Function atMost(k) counts subarrays with <= k distinct. Answer = atMost(k) - atMost(k-1). O(n).'
        },
        {
            id: 'SW-27',
            type: 'sliding-window',
            difficulty: 'easy',
            question: 'Given array and k, find if there exists subarray of size k with sum divisible by k.',
            answer: 'sliding window check sum % k',
            alternatives: ['fixed window modulo'],
            hint: 'Track sum of window and check modulo.',
            explanation: 'Fixed-size window, track sum modulo k. If sum % k == 0 at any point, return true. O(n).'
        },
        {
            id: 'SW-28',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a string, find if there exist two non-overlapping substrings of length k that are identical.',
            answer: 'sliding window with hash map',
            alternatives: ['store window hashes'],
            hint: 'Store each substring with positions.',
            explanation: 'For each window of size k, store in map with position list. Check if any positions differ by >= k. O(n).'
        },
        {
            id: 'SW-29',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given an array, find minimum length of contiguous subarray with sum >= target (positive numbers).',
            answer: 'two pointer sliding window',
            alternatives: ['expand right shrink left'],
            hint: 'Expand right to build sum, contract left to find min.',
            explanation: 'Two pointers: right expands sum, left contracts when valid. Track minimum valid window size. O(n).'
        },
        {
            id: 'SW-30',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given binary string, find max length substring with equal 0s and 1s after flipping at most k zeros.',
            answer: 'sliding window track zeros',
            alternatives: ['window flip zeros'],
            hint: 'Allow flipping up to k zeros to ones.',
            explanation: 'Sliding window counting zeros. Allow up to k zeros. When > k, shrink left. Track max length. O(n).'
        },
        {
            id: 'SW-31',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given array, find longest subarray with same elements after at most k replacements.',
            answer: 'sliding window track max frequency',
            alternatives: ['expand right shrink left max freq'],
            hint: 'Window valid if (length - max_freq) <= k.',
            explanation: 'Track max frequency in window. Replace non-max elements. When replacements > k, shrink left. O(n).'
        },
        {
            id: 'SW-32',
            type: 'sliding-window',
            difficulty: 'easy',
            question: 'Given array and k, find minimum sum subarray of size k.',
            answer: 'sliding window of fixed size k',
            alternatives: ['fixed window'],
            hint: 'Track sum, slide, track minimum.',
            explanation: 'Calculate sum of first k, slide window: subtract left, add right. Track minimum sum. O(n).'
        },
        {
            id: 'SW-33',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given string, count minimum brackets to add to make string valid.',
            answer: 'stack-like sliding window',
            alternatives: ['count balance'],
            hint: 'Track unmatched open and close brackets.',
            explanation: 'Count unmatched open and close. Scan left-right for close, right-left for open. O(n).'
        },
        {
            id: 'SW-34',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given array of characters, find max consecutive repeating character.',
            answer: 'simple scan count consecutive',
            alternatives: ['sliding window'],
            hint: 'Track current run and max run.',
            explanation: 'Scan counting consecutive same chars. Track max. Reset on different char. O(n).'
        },
        {
            id: 'SW-35',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given binary array, find the maximum length subarray that will add up to target sum.',
            answer: 'prefix sum map',
            alternatives: ['zero-based binary hash'],
            hint: 'Not sliding window directly, use prefix sums.',
            explanation: 'Use prefix sum hash map to find if there exists subarray summing to target. O(n). For binary, can use 0/1 transform.'
        },
        {
            id: 'SW-36',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given a string, find length of longest substring with all vowels.',
            answer: 'expand right reset on consonant',
            alternatives: ['count consecutive vowels'],
            hint: 'Counter resets on consonant.',
            explanation: 'Scan and count consecutive vowels. Reset to 0 on consonant. Track maximum. O(n).'
        },
        {
            id: 'SW-37',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given array, find max subarray length where absolute difference <= limit.',
            answer: 'two deques track min and max',
            alternatives: ['monotonic deques'],
            hint: 'Need efficient min and max in window.',
            explanation: 'Use monotonic deques for min and max. Expand right, validate, shrink when needed. O(n).'
        },
        {
            id: 'SW-38',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given string s and t, find all start indices of anagrams of t in s.',
            answer: 'sliding window compare frequency maps',
            alternatives: ['fixed window size'],
            hint: 'Window size = len(t).',
            explanation: 'Fixed window size len(t), slide and compare character frequency maps with t. Collect match indices. O(n).'
        },
        {
            id: 'SW-39',
            type: 'sliding-window',
            difficulty: 'hard',
            question: 'Given a string, find longest repeating character replacement with at most k changes.',
            answer: 'sliding window track max frequency',
            alternatives: ['freq based window'],
            hint: 'Window valid if length - max_freq <= k.',
            explanation: 'Track max frequency in window. Valid if other chars can be replaced within k. Expand right, shrink when invalid. O(n).'
        },
        {
            id: 'SW-40',
            type: 'sliding-window',
            difficulty: 'medium',
            question: 'Given array of positive integers and target, find maximum subarray length with sum <= target.',
            answer: 'sliding window expand contract',
            alternatives: ['two pointer'],
            hint: 'Expand right, contract when sum > target.',
            explanation: 'Two pointers: expand right increasing sum, contract left when sum > target. Track max valid length. O(n).'
        }
    ],

    // ==========================================
    // MODULE 5: TWO POINTERS PATTERN
    // ==========================================
    twopointers: [
        {
            id: 'TP-1',
            type: 'two-pointers',
            difficulty: 'easy',
            question: 'Given a sorted array and target, find two numbers that sum to target.',
            answer: 'left and right pointers from ends',
            alternatives: ['start and end pointers'],
            hint: 'Start with left at 0, right at end. Move towards each other.',
            explanation: 'Left at 0, right at end. Check sum: if < target, move left++; if > target, move right--. O(n).'
        },
        {
            id: 'TP-2',
            type: 'two-pointers',
            difficulty: 'easy',
            question: 'Given a sorted array and target, check if target exists.',
            answer: 'binary search',
            alternatives: ['binary search algorithm'],
            hint: 'Use divide and conquer on sorted array.',
            explanation: 'Binary search: repeatedly divide search space in half. O(log n).'
        },
        {
            id: 'TP-3',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given sorted array, find three numbers that sum to target.',
            answer: 'fix one use two pointers for remaining',
            alternatives: ['outer loop inner two pointers'],
            hint: 'Fix first element, use two pointers for remaining subarray.',
            explanation: 'Outer loop fixes first element. For each, use two-pointer technique on subarray to find pair. O(n^2).'
        },
        {
            id: 'TP-4',
            type: 'two-pointers',
            difficulty: 'easy',
            question: 'Given a string, check if it is a palindrome.',
            answer: 'left and right pointers compare',
            alternatives: ['start end pointers compare'],
            hint: 'Compare characters from both ends moving inward.',
            explanation: 'Left at 0, right at end. While left < right: if chars differ, not palindrome. Move both inward. O(n).'
        },
        {
            id: 'TP-5',
            type: 'two-pointers',
            difficulty: 'easy',
            question: 'Given a string, reverse it.',
            answer: 'left and right pointers swap',
            alternatives: ['start end swap'],
            hint: 'Swap characters from both ends moving inward.',
            explanation: 'Left at 0, right at end. Swap chars, move left++, right-- until they meet. O(n).'
        },
        {
            id: 'TP-6',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given two sorted arrays, merge them into one sorted array.',
            answer: 'two pointers one for each array',
            alternatives: ['merge by comparing'],
            hint: 'Compare and take smaller, advance that pointer.',
            explanation: 'i for arr1, j for arr2. Compare arr1[i] and arr2[j], add smaller, advance pointer. O(n+m).'
        },
        {
            id: 'TP-7',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given sorted array, remove duplicates in-place.',
            answer: 'slow and fast pointers',
            alternatives: ['two pointers'],
            hint: 'Slow pointer tracks position of last unique.',
            explanation: ' Fast pointer finds new unique. When arr[fast] != arr[slow], increment slow and copy. O(n).'
        },
        {
            id: 'TP-8',
            type: 'two-pointers',
            difficulty: 'easy',
            question: 'Given array of non-zero numbers, move all zeros to end.',
            answer: 'two pointers one for non-zero elements',
            alternatives: ['slow fast pointers'],
            hint: 'Use slow pointer for non-zero position.',
            explanation: 'Fast pointer finds non-zero, swap with slow position. Slow pointer tracks last non-zero position. O(n).'
        },
        {
            id: 'TP-9',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given array of colors (0, 1, 2), sort them (Dutch National Flag).',
            answer: 'three pointers low mid high',
            alternatives: ['Dutch flag algorithm'],
            hint: 'Red-white-blue: partition into three sections.',
            explanation: 'Low for reds, mid for processed, high for blues. Compare arr[mid] with 0,1,2 and swap accordingly. O(n).'
        },
        {
            id: 'TP-10',
            type: 'two-pointers',
            difficulty: 'hard',
            question: 'Given array, find container with most water (max area between two lines).',
            answer: 'left and right pointers from ends track max area',
            alternatives: ['outer pointers shrink inward'],
            hint: 'Area = min(height[l], height[r]) * (r - l).',
            explanation: 'Start at ends. Calculate area, update max. Move pointer with smaller height inward. O(n).'
        },
        {
            id: 'TP-11',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given sorted array, remove a specific value in-place.',
            answer: 'slow and fast pointers',
            alternatives: ['two pointers'],
            hint: 'Slow tracks position of elements to keep.',
            explanation: 'Fast iterates all. When arr[fast] != val, copy to arr[slow], increment slow. O(n).'
        },
        {
            id: 'TP-12',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given two sorted lists, find their intersection.',
            answer: 'two pointers one for each list',
            alternatives: ['advance smaller pointer'],
            hint: 'Compare elements, move smaller pointer forward.',
            explanation: 'i and j pointers. If values equal, add to result. If arr[i] < arr[j], i++. Else j++. O(n+m).'
        },
        {
            id: 'TP-13',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given a sorted array, find if any two elements differ by k.',
            answer: 'two pointers from start',
            alternatives: ['start both at 0'],
            hint: 'Keep j ahead of i.',
            explanation: 'i, j both start at 0. While j < n: if diff == k, return True. If diff < k, j++. Else i++. If i == j, j++. O(n).'
        },
        {
            id: 'TP-14',
            type: 'two-pointers',
            difficulty: 'easy',
            question: 'Given sorted array, find if value exists using two pointers.',
            answer: 'binary search not two pointers',
            alternatives: ['use binary search'],
            hint: 'With full access, prefer binary search.',
            explanation: 'Binary search is O(log n), better than two-pointers O(n). But two-pointers can work by adjusting window.'
        },
        {
            id: 'TP-15',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given string, remove all occurrences of a character in-place.',
            answer: 'two pointers slow fast',
            alternatives: ['overwrite approach'],
            hint: 'Slow pointer tracks write position.',
            explanation: 'Fast reads all. When char != remove_char, write to slow position, increment slow. O(n).'
        },
        {
            id: 'TP-16',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given two strings, check if one is a subsequence of another.',
            answer: 'two pointers one for each string',
            alternatives: ['traverse both strings'],
            hint: 'Advance subsequence pointer when match found.',
            explanation: 'i for main string, j for subsequence. When chars match, increment j. If j reaches end, true. O(n).'
        },
        {
            id: 'TP-17',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given sorted array, return squares of array in sorted order.',
            answer: 'two pointers from ends fill from end',
            alternatives: ['largest squares first'],
            hint: 'Largest squares come from ends (negative numbers).',
            explanation: 'Pointers at ends. Compare abs(arr[l]), abs(arr[r]), add square of larger to result from end. O(n).'
        },
        {
            id: 'TP-18',
            type: 'two-pointers',
            difficulty: 'hard',
            question: 'Given array of intervals, merge overlapping intervals.',
            answer: 'sort and merge with two pointers',
            alternatives: ['sort intervals then merge'],
            hint: 'First sort by start time.',
            explanation: 'Sort by start. Merge overlapping: extend current interval end if overlap, else start new. O(n log n).'
        },
        {
            id: 'TP-19',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given sorted array, find longest consecutive elements sequence (difference = 1).',
            answer: 'two pointers track current sequence',
            alternatives: ['scan and track'],
            hint: 'Scan array, track current run length.',
            explanation: 'Scan, if arr[i+1] == arr[i] + 1, continue sequence. Else reset to length 1. Track max. O(n).'
        },
        {
            id: 'TP-20',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given string, find the longest palindromic substring.',
            answer: 'expand around center two pointers',
            alternatives: ['center expansion'],
            hint: 'Try each position as center (two possibilities).',
            explanation: 'For each position, expand left-right as palindrome center (odd and even). Track max length. O(n^2).'
        },
        {
            id: 'TP-21',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given linked list, determine if it has a cycle.',
            answer: 'fast and slow pointers',
            alternatives: ['Floyd\'s cycle detection'],
            hint: 'Fast moves 2 steps, slow moves 1 step.',
            explanation: 'Fast (2x) and slow (1x) pointers. If they meet, cycle exists. If fast reaches None, no cycle. O(n).'
        },
        {
            id: 'TP-22',
            type: 'two-pointers',
            difficulty: 'hard',
            question: 'Given linked list with cycle, find the start of the cycle.',
            answer: 'reset slow to head move both at same speed',
            alternatives: ['after detection move both at 1x'],
            hint: 'After detection, reset and move both at 1x.',
            explanation: 'After fast and slow meet, reset slow to head. Move both at 1x until they meet again - that\\'s cycle start. O(n).'
        },
        {
            id: 'TP-23',
            type: 'two-pointers',
            difficulty: 'easy',
            question: 'Given linked list, find the middle node.',
            answer: 'fast and slow pointers',
            alternatives: ['tortoise and hare'],
            hint: 'When fast reaches end, slow is at middle.',
            explanation: 'Fast moves 2 steps, slow moves 1 step. When fast reaches end, slow is at middle. O(n).'
        },
        {
            id: 'TP-24',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given two strings, find if they are anagrams.',
            answer: 'sort and compare OR frequency map',
            alternatives: ['character count'],
            hint: 'Same characters, same counts.',
            explanation: 'Count frequencies for both strings. Compare if frequency maps are equal. O(n).'
        },
        {
            id: 'TP-25',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given sorted array, find all pairs with given difference k.',
            answer: 'two pointers one ahead of other',
            alternatives: ['start at 0 advance as needed'],
            hint: 'Maintain gap of k between pointers.',
            explanation: 'Start i, j at 0. While j < n: if arr[j] - arr[i] == k, found pair. If < k, j++. Else i++. O(n).'
        },
        {
            id: 'TP-26',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given string and character set, find minimum window substring.',
            answer: 'sliding window (not typical two-pointer)',
            alternatives: ['expand contract'],
            hint: 'Need to track required characters.',
            explanation: 'Use sliding window (variant of two-pointer) with character tracking. Expand right, contract left. O(n).'
        },
        {
            id: 'TP-27',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given sorted array, remove elements in-place while maintaining order.',
            answer: 'two pointers overwrite',
            alternatives: ['slow fast pointers'],
            hint: 'Slow tracks new position.',
            explanation: 'Fast finds elements to keep, copies to slow position. Increment both when keeping. O(n).'
        },
        {
            id: 'TP-28',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given a mountain array (first increasing then decreasing), find peak.',
            answer: 'two pointers from ends',
            alternatives: ['start end meet at peak'],
            hint: 'Mountain peak is where array stops increasing and starts decreasing.',
            explanation: 'Two pointers from ends: left moves up while increasing, right moves down while decreasing. Peak where they meet. O(n).'
        },
        {
            id: 'TP-29',
            type: 'two-pointers',
            difficulty: 'hard',
            question: 'Given array of intervals, find minimum number of intervals to remove for non-overlapping.',
            answer: 'sort by end time greedy',
            alternatives: ['greedy with end time'],
            hint: 'Sort by end time for greedy selection.',
            explanation: 'Sort by end. Select intervals greedily (can fit with current end). Count selected, answer = total - selected. O(n log n).'
        },
        {
            id: 'TP-30',
            type: 'two-pointers',
            difficulty: 'medium',
            question: 'Given two strings, find minimum window in one containing all characters of another.',
            answer: 'sliding window with character tracking',
            alternatives: ['two-pointer expand contract'],
            hint: 'Expand right, contract left when all chars found.',
            explanation: 'Use sliding window (two-pointer variant) with frequency maps. Expand to satisfy, contract to minimize. O(n).'
        }
    ],

    // ==========================================
    // MODULE 6: BINARY SEARCH PATTERN
    // ==========================================
    binarysearch: [
        {
            id: 'BS-1',
            type: 'binary-search',
            difficulty: 'easy',
            question: 'Given a sorted array and target, return index if target exists.',
            answer: 'standard binary search',
            alternatives: ['binary search', 'divide conquer'],
            hint: 'Compare with mid, narrow search space.',
            explanation: 'While lo <= hi: mid = (lo+hi)//2. If arr[mid] == target, return mid. If <, lo = mid+1. Else hi = mid-1. O(log n).'
        },
        {
            id: 'BS-2',
            type: 'binary-search',
            difficulty: 'easy',
            question: 'Given a sorted array, return -1 if target not found.',
            answer: 'binary search with -1 return',
            alternatives: ['standard search'],
            hint: 'Implement standard binary search.',
            explanation: 'Standard binary search. If loop ends without finding target, return -1. O(log n).'
        },
        {
            id: 'BS-3',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given a sorted array with duplicates, find first occurrence of target.',
            answer: 'binary search find leftmost',
            alternatives: ['lower bound'],
            hint: 'When arr[mid] == target, continue searching left.',
            explanation: 'Standard BS but when arr[mid] == target, set hi = mid - 1 to search left. Return lo after loop. O(log n).'
        },
        {
            id: 'BS-4',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given a sorted array with duplicates, find last occurrence of target.',
            answer: 'binary search find rightmost',
            alternatives: ['upper bound'],
            hint: 'When arr[mid] == target, continue searching right.',
            explanation: 'Standard BS but when arr[mid] == target, set lo = mid + 1 to search right. Return hi after loop. O(log n).'
        },
        {
            id: 'BS-5',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given a sorted array, find insertion position for target.',
            answer: 'binary search lower bound',
            alternatives: ['find position where target fits'],
            hint: 'Find first position >= target.',
            explanation: 'Binary search for first position >= target. If target exists, return its index; otherwise, return insertion point. O(log n).'
        },
        {
            id: 'BS-6',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given a sorted array rotated at some pivot, find target.',
            answer: 'binary search check sorted half',
            alternatives: ['rotated binary search'],
            hint: 'One half is always sorted.',
            explanation: 'Check which half is sorted. If target in sorted half, search there. Else search other half. O(log n).'
        },
        {
            id: 'BS-7',
            type: 'binary-search',
            difficulty: 'hard',
            question: 'Given a sorted array rotated, find minimum element.',
            answer: 'binary search compare mid with right',
            alternatives: ['find rotation point'],
            hint: 'Minimum is at pivot point.',
            explanation: 'Compare arr[mid] with arr[hi]. If arr[mid] > arr[hi], min is in right half. Else in left. O(log n).'
        },
        {
            id: 'BS-8',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given function that is monotonic, find when value >= target.',
            answer: 'binary search on answer',
            alternatives: ['binary search on value'],
            hint: 'Check if f(mid) >= target; adjust search space.',
            explanation: 'Binary search on domain: if f(mid) < target, go right; else go left. Find first where f(x) >= target. O(log n) evaluations.'
        },
        {
            id: 'BS-9',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given target and sorted array, count occurrences of target.',
            answer: 'find first and last occurrence',
            alternatives: ['upper and lower bound'],
            hint: 'Last - first + 1 gives count.',
            explanation: 'Binary search for first and last occurrence. Count = last - first + 1. If not found, return 0. O(log n).'
        },
        {
            id: 'BS-10',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given 2D matrix with rows sorted ascending, search for target.',
            answer: 'search from top-right or bottom-left',
            alternatives: ['two-pointer matrix search'],
            hint: 'Eliminate row or column each step.',
            explanation: 'Start top-right: if > target, go left; if < target, go down. O(m + n).'
        },
        {
            id: 'BS-11',
            type: 'binary-search',
            difficulty: 'hard',
            question: 'Given unbounded sorted array (no length), find index of target.',
            answer: 'find range then binary search',
            alternatives: ['exponential search + binary search'],
            hint: 'First find bounds using exponential search.',
            explanation: 'Exponential search to find range [0, 2^k] containing target, then binary search in that range. O(log n).'
        },
        {
            id: 'BS-12',
            type: 'binary-search',
            difficulty: 'hard',
            question: 'Given infinite sorted array, find index of target.',
            answer: 'exponential search then binary search',
            alternatives: ['find bounds doubling'],
            hint: 'Double end index until arr[end] > target.',
            explanation: 'Double end (0, 1, 2, 4, 8...) until arr[end] > target. Binary search in [end/2, end]. O(log n).'
        },
        {
            id: 'BS-13',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given N piles of bananas, eating rate k hours to eat all, find minimum k.',
            answer: 'binary search on answer (eating rate)',
            alternatives: ['minimize maximum hourly rate'],
            hint: 'Can check if rate k works in H hours.',
            explanation: 'Binary search answer on rates [1, max]. Check if can eat with rate k in H hours: sum(min(pile, k) + ceil((pile-k)/k)). O(n log max).'
        },
        {
            id: 'BS-14',
            type: 'binary-search',
            difficulty: 'hard',
            question: 'Given books pages and m readers, minimize maximum pages allocated.',
            answer: 'binary search on answer (max pages)',
            alternatives: ['allocate books binary search'],
            hint: 'Check if max pages x needs <= m readers.',
            explanation: 'Binary search on max pages [max(pages), sum(pages)]. Check if allocation with max x uses <= m readers. O(n log sum).'
        },
        {
            id: 'BS-15',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given array and target, find ceiling (smallest >= target).',
            answer: 'binary search upper bound',
            alternatives: ['find first >= target'],
            hint: 'After binary search, lo is the answer.',
            explanation: 'Standard BS but search for first >= target. If found, return index. If all < target, return -1. O(log n).'
        },
        {
            id: 'BS-16',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given array and target, find floor (largest <= target).',
            answer: 'binary search lower bound - 1',
            alternatives: ['find largest <= target'],
            hint: 'Similar to ceiling, but find largest less than or equal.',
            explanation: 'Binary search: lo ends at first > target. Return lo - 1 if in bounds. O(log n).'
        },
        {
            id: 'BS-17',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given positive integer and find if it is perfect square.',
            answer: 'binary search 1 to n',
            alternatives: ['search for sqrt(n)'],
            hint: 'Check if mid^2 == n.',
            explanation: 'Binary search from 1 to n. Check mid*mid vs n. Handle overflow. O(log n).'
        },
        {
            id: 'BS-18',
            type: 'binary-search',
            difficulty: 'hard',
            question: 'Given function f(x) that is monotonic, find if f(x) == target has solution.',
            answer: 'binary search root finding',
            alternatives: ['search for zero of f(x) - target'],
            hint: 'Search for where f(x) crosses target.',
            explanation: 'Binary search on x domain. Check f(mid) vs target. O(log range * f_eval_time).'
        },
        {
            id: 'BS-19',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given sorted array, find peak element (greater than neighbors).',
            answer: 'binary search compare with right neighbor',
            alternatives: ['check mid with mid+1'],
            hint: 'If mid > mid+1, peak in left half. Else right.',
            explanation: 'If arr[mid] > arr[mid+1], peak in left (including mid). Else peak in right (excluding mid). O(log n).'
        },
        {
            id: 'BS-20',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given sorted array with duplicates, count elements in range [a, b].',
            answer: 'lower bound a to upper bound b',
            alternatives: ['find first >= a and last <= b'],
            hint: 'Find first >= a and first > b.',
            explanation: 'Lower bound of a, upper bound of b. Count = ub - lb. O(log n).'
        },
        {
            id: 'BS-21',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given two sorted arrays, find median of combined array.',
            answer: 'binary search partition',
            alternatives: ['partition both arrays'],
            hint: 'Binary search on smaller array to find partition.',
            explanation: 'Partition both arrays so left side has (n+m+1)/2 elements. Binary search partition points. O(log(min(n,m))).'
        },
        {
            id: 'BS-22',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given N eggs and K floors, find minimum drops needed to find critical floor.',
            answer: 'binary search on answer (drops)',
            alternatives: ['minimize worst case drops'],
            hint: 'Check if x drops enough for given eggs and floors.',
            explanation: 'Binary search on number of drops. Check if can determine critical floor in x drops with given eggs. O(n log K).'
        },
        {
            id: 'BS-23',
            type: 'binary-search',
            difficulty: 'hard',
            question: 'Given N workers and jobs with times, minimize time to finish all jobs.',
            answer: 'binary search on time',
            alternatives: ['minimize maximum workload'],
            hint: 'Given time T, check if workers can finish.',
            explanation: 'Binary search on total time [max_job, sum_jobs]. For each T, simulate worker allocation. O(n * K * log sum).'
        },
        {
            id: 'BS-24',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given array and target, find if target exists using binary search.',
            answer: 'standard binary search algorithm',
            alternatives: ['divide and conquer search'],
            hint: 'Compare with midpoint element.',
            explanation: 'Recurse or iterate: lo, hi indices. mid = (lo+hi)//2. Compare arr[mid] to target, adjust lo/hi. O(log n).'
        },
        {
            id: 'BS-25',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given monotonic function f and values with f(x) = y, find x.',
            answer: 'binary search on domain',
            alternatives: ['inverse function'],
            hint: 'Check if f(mid) <, =, or > y.',
            explanation: 'Binary search in x domain. Compare f(mid) with y. Adjust search space until found or determined impossible. O(log domain).'
        },
        {
            id: 'BS-26',
            type: 'binary-search',
            difficulty: 'hard',
            question: 'Given 2D matrix where each row and column sorted, find target.',
            answer: 'staircase search from corner',
            alternatives: ['start at corner eliminate row/col'],
            hint: 'One corner lets you eliminate row or column.',
            explanation: 'Start top-right: if = target, found. If > target, move left (eliminate column). If < target, move down. O(m+n).'
        },
        {
            id: 'BS-27',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given a bitonic array (first increasing then decreasing), find peak.',
            answer: 'binary search compare mid and mid+1',
            alternatives: ['find maximum element'],
            hint: 'Peak is where array changes direction.',
            explanation: 'If arr[mid] < arr[mid+1], moving up (right of peak). If arr[mid] > arr[mid+1], moving down (at or left of peak). O(log n).'
        },
        {
            id: 'BS-28',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given rotated sorted array, find rotation point (minimum).',
            answer: 'binary search compare mid with h',
            alternatives: ['find pivot'],
            hint: 'Compare mid with end to see side.',
            explanation: 'If arr[mid] > arr[hi], pivot is right of mid. Else pivot is at or left of mid. O(log n).'
        },
        {
            id: 'BS-29',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given sorted array, find smallest element >= target (ceiling).',
            answer: 'binary search lower bound',
            alternatives: ['first position >= target'],
            hint: 'After search, lo contains answer or len.',
            explanation: 'Search for first >= target. If lo < len and arr[lo] >= target, return lo. Else -1. O(log n).'
        },
        {
            id: 'BS-30',
            type: 'binary-search',
            difficulty: 'medium',
            question: 'Given sorted array, find largest element <= target (floor).',
            answer: 'binary search - if arr[lo] > target, lo-1 else lo',
            alternatives: ['last position <= target'],
            hint: 'After lower bound search, adjust.',
            explanation: 'Find first > target. Answer is index-1 if index > 0, else -1. O(log n).'
        }
    ],

    // ==========================================
    // MODULE 7: DYNAMIC PROGRAMMING
    // ==========================================
    dynamicprogramming: [
        {id:'DP-1',type:'dp',difficulty:'easy',question:'Compute Fibonacci number at position n.',answer:'memoization or tabulation',alternatives:['recursive with memo','iterative DP'],hint:'Store results to avoid recomputation.',explanation:'Memoization: cache results. Tabulation: build table bottom-up. Both O(n) time, O(n) space (or O(1) with optimization).'},
        {id:'DP-2',type:'dp',difficulty:'easy',question:'Find number of ways to climb n stairs (take 1 or 2 steps).',answer:'dp[i] = dp[i-1] + dp[i-2]',alternatives:['fibonacci pattern'],hint:'Similar to Fibonacci: dp[n] = dp[n-1] + dp[n-2].',explanation:'Base: dp[0]=1, dp[1]=1. For i>=2: dp[i]=dp[i-1]+dp[i-2]. Return dp[n]. O(n) time, O(1) space.'},
        {id:'DP-3',type:'dp',difficulty:'medium',question:'Given grid, count paths from top-left to bottom-right (move right or down).',answer:'dp[i][j] = dp[i-1][j] + dp[i][j-1]',alternatives:['2D grid DP'],hint:'Paths to (i,j) = paths from above + paths from left.',explanation:'Initialize first row and first column to 1. dp[i][j]=dp[i-1][j]+dp[i][j-1]. Return dp[m-1][n-1]. O(mn).'},
        {id:'DP-4',type:'dp',difficulty:'medium',question:'Coin Change: find minimum coins to make amount given coin denominations.',answer:'dp[amount] = min(dp[amount - coin] + 1)',alternatives:['unbounded knapsack variant'],hint:'For each coin, update dp values.',explanation:'Initialize dp[0]=0, rest=inf. For each coin, for amount from coin: dp[a]=min(dp[a],dp[a-coin]+1). Return dp[amount] if != inf. O(amount*coins).'},
        {id:'DP-5',type:'dp',difficulty:'medium',question:'Coin Change 2: find number of ways to make amount with coins.',answer:'dp[i] = dp[i] + dp[i-coin]',alternatives:['count combinations'],hint:'Process coins in outer loop to avoid counting permutations multiple times.',explanation:'Initialize dp[0]=1. For each coin, for amount from coin to target: dp[a]+=dp[a-coin]. Return dp[amount]. O(amount*coins).'},
        {id:'DP-6',type:'dp',difficulty:'medium',question:'Longest Increasing Subsequence.',
            answer:'dp[i] = max(dp[j]) + 1 for j < i and arr[j] < arr[i]',alternatives:['patience sorting O(n log n)'],hint:'LIS ending at i is 1 + max LIS of all valid previous elements.',explanation:'O(n^2): dp[i]=1+max(dp[j]) for j<i, arr[j]<arr[i]. O(n log n): use patience sorting with binary search. Return max(dp).'},
        {id:'DP-7',type:'dp',difficulty:'medium',question:'Longest Common Subsequence between two strings.',answer:'if s1[i]==s2[j]: dp[i][j]=1+dp[i-1][j-1] else: dp[i][j]=max(dp[i-1][j], dp[i][j-1])',alternatives:['2D DP strings'],hint:'Compare characters at each position.',explanation:'2D DP (len(s1)+1) x (len(s2)+1). If chars match, extend diagonal. Else take max of top/left. Return dp[m][n]. O(mn).'},
        {id:'DP-8',type:'dp',difficulty:'medium',question:'Edit Distance between two strings (insert, delete, replace).',answer:'if equal: dp[i][j]=dp[i-1][j-1] else: 1+min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])',alternatives:['Levenshtein distance'],hint:'Three operations: replace, delete, insert.',explanation:'2D DP. If chars equal, inherit from diagonal. Else: 1 + min(replace, delete, insert). Return dp[m][n]. O(mn).'},
        {id:'DP-9',type:'dp',difficulty:'medium',question:'House Robber: maximize sum of non-adjacent houses.',answer:'dp[i] = max(dp[i-1], dp[i-2] + nums[i])',alternatives:['skip or take'],hint:'At each house: skip (take dp[i-1]) or take (nums[i] + dp[i-2]).',explanation:'Base: dp[0]=nums[0], dp[1]=max(nums[0],nums[1]). For i>=2: dp[i]=max(dp[i-1],dp[i-2]+nums[i]). Return dp[n-1]. O(n).'},
        {id:'DP-10',type:'dp',difficulty:'medium',question:'Maximum Subarray Sum.',
            answer:'max_ending_here = max(num, max_ending_here + num)',alternatives:['Kadane\'s algorithm'],hint:'Track maximum sum of subarray ending at current position.',explanation:'Kadane: max_ending_here = max(num, max_ending_here + num), max_so_far = max(max_so_far, max_ending_here). O(n).'},
        {id:'DP-11',type:'dp',difficulty:'medium',question:'Partition Equal Subset Sum.',answer:'check if sum/2 achievable with DP',alternatives:['subset sum DP'],hint:'If total not even, impossible. Check if subset sum = total/2 exists.',explanation:'Check if total sum is even. Target = sum/2. Subset sum DP: dp[i] = True if subset with sum i exists. Return dp[target]. O(n*sum).'},
        {id:'DP-12',type:'dp',difficulty:'medium',question:'Decode Ways: count ways to decode message (A=1, B=2, ..., Z=26).',answer:'dp[i] = dp[i-1] + dp[i-2] if valid',alternatives:['decode string'],hint:'Single digit or combination of two digits.',explanation:'dp[i] for first i chars. Add dp[i-1] if s[i-1]!=\'0\'. Add dp[i-2] if 10<=int(s[i-2:i])<=26. Base dp[0]=1. Return dp[n]. O(n).'},
        {id:'DP-13',type:'dp',difficulty:'medium',question:'Unique Paths with Obstacles in grid.',answer:'dp[i][j]=0 if obstacle else dp[i-1][j]+dp[i][j-1]',alternatives:['grid DP with obstacles'],hint:'Same as unique paths but skip obstacles.',explanation:'Initialize dp[0][0] if no obstacle. For each cell: if obstacle, dp[i][j]=0. Else dp[i][j]=dp[i-1][j]+dp[i][j-1]. Return dp[m-1][n-1]. O(mn).'},
        {id:'DP-14',type:'dp',difficulty:'medium',question:'0/1 Knapsack Problem.',answer:'dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i])',alternatives:['capacity DP'],hint:'For each item, decide include or exclude.',explanation:'2D DP: items x capacity. dp[i][w] = max value using first i items with capacity w. dp[n][W] is answer. O(n*W).'},
        {id:'DP-15',type:'dp',difficulty:'medium',question:'Climbing Stairs with 1, 2, or 3 steps.',answer:'dp[i] = dp[i-1] + dp[i-2] + dp[i-3]',alternatives:['tribonacci'],hint:'Extension of Fibonacci/Climbing Stairs.',explanation:'Base: dp[0]=1, dp[1]=1, dp[2]=2. For i>=3: dp[i]=dp[i-1]+dp[i-2]+dp[i-3]. Return dp[n]. O(n).'},
        {id:'DP-16',type:'dp',difficulty:'hard',question:'Word Break: determine if string can be segmented into dictionary words.',answer:'dp[i] = OR of (dp[j] and s[j:i] in dict) for j < i',alternatives:['segmentation DP'],hint:'Check all possible splits where left dp[j] is true and right word in dict.',explanation:'dp[j] = True if s[0:j] can be segmented. For each i, check any j < i where dp[j] true and s[j:i] in dict. Return dp[n]. O(n^2) with dict lookup.'},
        {id:'DP-17',type:'dp',difficulty:'medium',question:'Maximum Product Subarray.',answer:'track both max and min (for negatives)',alternatives:['Kadane variant'],hint:'Negatives can flip max to min.',explanation:'Track max_prod and min_prod ending at each position. For each num: new_max = max(num, max_prod*num, min_prod*num), similarly for min. Track global max. O(n).'},
        {id:'DP-18',type:'dp',difficulty:'hard',question:'Palindrome Partitioning: find minimum cuts to partition into palindromes.',answer:'dp[i] = min cuts for s[0:i] + palindrome expand',alternatives:['palindrome DP'],hint:'Check if substring is palindrome, or precompute palindrome table.',explanation:'Precompute is_palindrome[i][j]. dp[i] = min over all j: dp[j] + 1 if s[j:i] palindrome. Return dp[n]. O(n^2).'},
        {id:'DP-19',type:'dp',difficulty:'medium',question:'Jump Game: determine if can reach last index (jump length = nums[i]).',answer:'greedy or dp max_reach',alternatives:['max reachable index'],hint:'Track farthest index reachable so far.',explanation:'Greedy: track max_reachable = max(max_reachable, i+nums[i]). If max_reachable >= n-1, can reach. O(n).'},
        {id:'DP-20',type:'dp',difficulty:'medium',question:'Jump Game II: minimum jumps to reach last index.',answer:'dp or greedy BFS levels',alternatives:['greedy range expansion'],hint:'Each jump can reach a new range.',explanation:'Greedy: track current range, max_reachable. Each time current_range exhausted, jumps++ and update range to max_reachable. O(n).'},
        {id:'DP-21',type:'dp',difficulty:'hard',question:'Longest Palindromic Substring.',answer:'dp[i][j] = (s[i]==s[j]) and (j-i<=2 or dp[i+1][j-1])',alternatives:['expand around center O(n^2)'],hint:'Check all centers (odd and even length).',explanation:'2D DP: dp[i][j] = True if s[i:j+1] palindrome. Base: single chars true. Expand from centers tracking max. O(n^2) time, O(n^2) or O(1) space.'},
        {id:'DP-22',type:'dp',difficulty:'hard',question:'Regular Expression Matching (pattern with . and *).',answer:'dp[i][j] based on chars and * handling',alternatives:['regex DP'],hint:'Handle . (any) and * (zero or more of previous).',explanation:'2D DP: dp[i][j] = s[0:i] matches p[0:j]. Handle *: zero occurrences or one+ occurrences. O(mn).'},
        {id:'DP-23',type:'dp',difficulty:'hard',question:'Wildcard Matching (pattern with * and ?).',answer:'dp with 2 pointers greedy possible',alternatives:['greedy backtracking O(mn)'],hint:'* matches any sequence, ? matches any single char.',explanation:'DP: dp[i][j] = match. Greedy with backtracking often faster. O(mn).'},
        {id:'DP-24',type:'dp',difficulty:'medium',question:'Min Cost Climbing Stairs (each stair has cost).',answer:'dp[i] = cost[i] + min(dp[i-1], dp[i-2])',alternatives:['min cost to reach top'],hint:'Can start from index 0 or 1.',explanation:'dp[i] = min cost to reach step i. dp[0]=cost[0], dp[1]=cost[1]. For i>=2: dp[i]=cost[i]+min(dp[i-1],dp[i-2]). Return min(dp[n-1],dp[n-2]). O(n).'},
        {id:'DP-25',type:'dp',difficulty:'medium',question:'Triangle: minimum path sum from top to bottom.',answer:'bottom-up dp: dp[j] = min(dp[j], dp[j+1]) + value',alternatives:['triangle path minimum'],hint:'Start from bottom row and work up.',explanation:'Work bottom-up: dp[j] = value + min(dp[j], dp[j+1]). Start from row-2 to row 0. Return dp[0]. O(n^2).'},
        {id:'DP-26',type:'dp',difficulty:'hard',question:'Best Time to Buy and Sell Stock with cooldown (sell then wait one day).',answer:'state machine: hold, sold, rest',alternatives:['DP with states'],hint:'Track three states using DP.',explanation:'Three states: hold (have stock), sold (just sold), rest (no stock, can buy). Update states each day. Return max(sold[n], rest[n]). O(n).'},
        {id:'DP-27',type:'dp',difficulty:'hard',question:'Best Time to Buy and Sell Stock with transaction fee.',answer:'hold and cash states',alternatives:['DP two states'],hint:'Hold = max(hold, cash - price). Cash = max(cash, hold + price - fee).',explanation:'Two states: hold (stock), cash (no stock). Update each day. Return cash[n]. O(n).'},
        {id:'DP-28',type:'dp',difficulty:'medium',question:'Maximum Product of Three Numbers.',answer:'max of (max1*max2*max3) and (max1*min1*min2)',alternatives:['track extremes'],hint:'Either 3 largest or 1 largest + 2 smallest.',explanation:'Track top 3 largest and bottom 2 smallest numbers. Return max(max1*max2*max3, max1*min1*min2). O(n).'},
        {id:'DP-29',type:'dp',difficulty:'medium',question:'Number of Dice Rolls With Target Sum (n dice, each 1-k faces).',answer:'dp[target] = sum of dp[target-face] for faces 1..k',alternatives:'mod 1e9+7',hint:'For each die, update reachable sums.',explanation:'dp[sum] = ways to reach sum. For each die, update dp from high to low. Return dp[target]. O(n*target).'},
        {id:'DP-30',type:'dp',difficulty:'hard',question:'Russian Doll Envelopes: maximum enveloping chain (width < width and height < height).',answer:'sort by width then LIS on height',alternatives:['sort + LIS 2D'],hint:'Sort by one dimension, find LIS on other.',explanation:'Sort by width ascending, for equal width sort height descending. Find LIS on heights. O(n log n or n^2).'},
        {id:'DP-31',type:'dp',difficulty:'medium',question:'Palindrome Partitioning: can you partition string into palindromes.',answer:'palindrome DP or expand + backtrack',alternatives:['check all partitions'],hint:'Check if any partition exists.',explanation:'precompute palindrome table or expand centers. Then check if complete partition possible using DP similar to word break. O(n^2).'},
        {id:'DP-32',type:'dp',difficulty:'hard',question:'Scramble String: are s1 and s2 scrambled versions.',answer:'DP or recursion with memoization',alternatives:['recursive partition check'],hint:'Try all possible partition points.',explanation:'Memoized recursion: scramble(s1,s2) if direct equal or partitions exist where subparts are scrambled. O(n^4) or optimized.'},
        {id:'DP-33',type:'dp',difficulty:'medium',question:'Coin Change: ways to make amount with unlimited coins.',answer:'unbounded knapsack',alternatives:['count combinations'],hint:'Outer loop over coins to avoid permutations duplicated.',explanation:'dp[0]=1. For each coin, for sum from coin to amount: dp[sum] += dp[sum-coin]. Return dp[amount]. O(amount*coins).'},
        {id:'DP-34',type:'dp',difficulty:'medium',question:'Combination Sum IV: count combinations (permutations counted) that sum to target.',answer:'dp[target] = sum(dp[target - num]) for nums',alternatives:['ordered combinations'],hint:'Permutations count, so process targets first.',explanation:'Outer loop over target, inner over nums: dp[t] += dp[t-num] if t >= num. Return dp[target]. O(target*n).'},
        {id:'DP-35',type:'dp',difficulty:'medium',question:'Unique Paths: from (0,0) to (m-1,n-1) moving down or right.',answer:'C(m+n-2, m-1) or DP',alternatives:['combinatorics or DP'],hint:'Can use DP or combinatorial formula.',explanation:'DP: dp[i][j] = dp[i-1][j] + dp[i][j-1] with dp[0][*] = dp[*][0] = 1. Combinatorics: C(m+n-2, m-1). O(mn) or O(min(m,n)).'},
        {id:'DP-36',type:'dp',difficulty:'medium',question:'Maximum Subarray (Kadane) with at most one deletion allowed.',answer:'dp with delete or not states',alternatives:['two DP arrays'],hint:'Track max with and without deletion.',explanation:'Two DP: no_del[i] and one_del[i]. Update using nums[i]. Handle deletion at each position. Track global max. O(n).'},
        {id:'DP-37',type:'dp',difficulty:'hard',question:'Burst Balloons: maximize coins by bursting in optimal order.',answer:'DP subarray dp[left+1][right-1]',alternatives:['interval DP'],hint:'Consider each balloon as last to burst in interval.',explanation:'dp[i][j] = max over k in (i,j): nums[i]*nums[k]*nums[j] + dp[i][k] + dp[k][j]. Add sentinel 1s at ends. O(n^3).'},
        {id:'DP-38',type:'dp',difficulty:'medium',question:'Target Sum: assign +/- to numbers to reach target.',answer:'dp[count][sum] or subset sum variant',alternatives:['knapsack offset by sum'],hint:'Transform to subset sum: find subset with sum (target + total)/2.',explanation:'If (target+total)/2 invalid, return 0. Count subsets with that sum using DP. O(n*sum).'},
        {id:'DP-39',type:'dp',difficulty:'hard',question:'Best Time to Buy and Sell Stock with k transactions.',answer:'dp[trans][day] states',alternatives]['k transactions DP'],hint:'Generalization of two transactions case.',explanation:'2D DP: dp[t][d] = max profit with t transactions up to day d. Update: either no sell or sell at day d. O(k*n).'},
        {id:'DP-40',type:'dp',difficulty:'hard',question:'Largest Divisible Subset.',answer:'sort then DP LIS variant check divisibility',alternatives:['longest chain divisible'],hint:'Sort then find longest chain where each divides the next.',explanation:'Sort array. For each element, check all previous (smaller) elements if divisible. Track longest chain and predecessor. Reconstruct subset. O(n^2).'}
    ]
};

// Export for use in HTML files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = practiceProblems;
}    // ==========================================
    // MODULE 4: SLIDING WINDOW PATTERN
    // ==========================================
    slidingwindow: {
        fixed: [
            {
                id: 'SW-1',
                type: 'sliding-window',
                difficulty: 'easy',
                question: 'What is sliding window used for?',
                answer: 'contiguous subarray problems',
                alternatives: ['subarray', 'contiguous subsequences'],
                hint: 'Think about finding patterns in ranges.',
                explanation: 'Sliding window is best for problems involving contiguous subarrays where we need to find some property (max, min, sum, etc.).'
            },
            {
                id: 'SW-2',
                type: 'sliding-window',
                difficulty: 'easy',
                question: 'What are the two types of sliding window?',
                answer: 'fixed-size and variable-size',
                alternatives: ['fixed and dynamic', 'static and adaptive'],
                hint: 'One keeps constant size, one grows/shrinks.',
                explanation: 'Fixed-size maintains constant length, variable-size expands and contracts based on conditions.'
            },
            {
                id: 'SW-3',
                type: 'sliding-window',
                difficulty: 'easy',
                question: 'What is the time complexity of sliding window algorithm?',
                answer: 'O(n)',
                alternatives: ['O(n)', 'linear'],
                hint: 'Each element is processed at most twice.',
                explanation: 'Sliding window is O(n) because each element enters and exits the window at most once.'
            },
            {
                id: 'SW-4',
                type: 'sliding-window',
                difficulty: 'easy',
                question: 'How do you implement a fixed-size sliding window?',
                answer: 'maintain start and end pointers',
                alternatives: ['two pointers', 'left and right indices'],
                hint: 'Track window boundaries.',
                explanation: 'Use two pointers (left and right), with right advancing and left = right - window_size + 1.'
            },
            {
                id: 'SW-5',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How do you find maximum sum of subarray of size k?',
                answer: 'sliding window sum',
                alternatives: ['maintain window sum'],
                hint: 'Update sum by adding new element and removing old.',
                explanation: 'Calculate sum of first k elements, then slide: add new, remove element leaving window.'
            },
            {
                id: 'SW-6',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How do you implement a variable-size sliding window?',
                answer: 'expand right, shrink left when condition met',
                alternatives: ['grow until invalid, shrink until valid'],
                hint: 'Adjust window size based on validity.',
                explanation: 'Expand right until window invalid, then shrink left until valid again.'
            },
            {
                id: 'SW-7',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What happens when the window becomes invalid in variable-size sliding window?',
                answer: 'shrink from left',
                alternatives: ['move left pointer', 'decrease window size'],
                hint: 'Move the left boundary.',
                explanation: 'When window invalid, move left pointer right (shrink) to restore validity.'
            },
            {
                id: 'SW-8',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How to find longest substring with at most k distinct characters?',
                answer: 'expand right, shrink when k+1 distinct',
                alternatives: ['variable window with character frequency map'],
                hint: 'Track characters in window, maintain count of distinct.',
                explanation: 'Use window with char frequency. Expand right, shrink left when distinct > k.'
            },
            {
                id: 'SW-9',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What data structure helps track frequency in variable-size sliding window?',
                answer: 'hash map or frequency array',
                alternatives: ['dictionary', 'counter'],
                hint: 'Store counts of elements in window.',
                explanation: 'Hash map (or array for known alphabet) tracks element frequencies in the window.'
            },
            {
                id: 'SW-10',
                type: 'sliding-window',
                difficulty: 'hard',
                question: 'How to find minimum window substring containing all characters of pattern?',
                answer: 'sliding window with formed counter',
                alternatives: ['variable window with two maps'],
                hint: 'Use maps for pattern and window, track matches.',
                explanation: 'Expand right, when window contains all pattern chars, shrink left to find minimum. Use counter showing how many unique chars matched required frequency.'
            },
            {
                id: 'SW-11',
                type: 'sliding-window',
                difficulty: 'easy',
                question: 'What is the space complexity of sliding window?',
                answer: 'O(k) or O(1)',
                alternatives: ['O(window size)', 'constant for fixed'],
                hint: 'Depends on what you\'re tracking.',
                explanation: 'Space complexity is O(k) where k is window size for tracking elements, or O(1) for fixed-size with simple sums.'
            },
            {
                id: 'SW-12',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How to find maximum in every subarray of size k?',
                answer: 'sliding window with deque',
                alternatives: ['deque storing indices in decreasing order'],
                hint: 'Use deque to efficiently track max.',
                explanation: 'Use deque to store indices, maintaining elements in decreasing order. Front gives current max.'
            },
            {
                id: 'SW-13',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How to find longest substring without repeating characters?',
                answer: 'expand right, shrink left when duplicate found',
                alternatives: ['track last occurrence of each char'],
                hint: 'Use map to store character positions.',
                explanation: 'Expand right, when character repeats, move left after previous occurrence of that character.'
            },
            {
                id: 'SW-14',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'When would you choose sliding window over two pointers?',
                answer: 'contiguous subarray with condition',
                alternatives: ['when need window state', 'when tracking aggregates'],
                hint: 'Sliding window maintains more state.',
                explanation: 'Sliding window is chosen when you need to maintain window state (sum, frequencies, counts) and process contiguous subarrays.'
            },
            {
                id: 'SW-15',
                type: 'sliding-window',
                difficulty: 'hard',
                question: 'How to find smallest subarray with sum >= target?',
                answer: 'expand right, shrink left when sum >= target',
                alternatives: ['variable window tracking sum'],
                hint: 'Continue shrinking while maintaining condition.',
                explanation: 'Expand right tracking sum. When sum >= target, shrink from left while still >= target, tracking minimum length.'
            }
        ],
        variable: [
            {
                id: 'SW-16',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What characterizes a variable-size sliding window?',
                answer: 'window grows and shrinks',
                alternatives: ['adaptive size', 'dynamic window'],
                hint: 'Size is not fixed at k.',
                explanation: 'Variable-size windows expand to meet conditions and shrink to maintain optimality.'
            },
            {
                id: 'SW-17',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'When does the window shrink in variable-size sliding window?',
                answer: 'when condition is violated',
                alternatives: ['when window invalid', 'when criteria not met'],
                hint: 'Check validity before/after shrink.',
                explanation: 'The window shrinks when it becomes invalid (violates the problem condition).'
            },
            {
                id: 'SW-18',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How to track number of elements meeting criteria in window?',
                answer: 'condition counter',
                alternatives: ['match counter', 'formed counter'],
                hint: 'Increment when element meets condition.',
                explanation: 'Use a counter that tracks how many unique elements or conditions are satisfied within the window.'
            },
            {
                id: 'SW-19',
                type: 'sliding-window',
                difficulty: 'hard',
                question: 'How to count anagrams of a string in another string?',
                answer: 'sliding window with frequency map comparison',
                alternatives: ['fixed window with character counts'],
                hint: 'Fixed length window, compare frequency with pattern.',
                explanation: 'Use fixed window of pattern length. Compare frequency map of current window with pattern\'s frequency map.'
            },
            {
                id: 'SW-20',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What happens when left pointer moves past right pointer?',
                answer: 'reset window',
                alternatives: ['empty window', 'window becomes invalid'],
                hint: 'Left cannot exceed right.',
                explanation: 'If left passes right, the window becomes empty/invalid. This typically means no valid window and might restart search.'
            },
            {
                id: 'SW-21',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What is the "formed" counter in variable-size sliding window?',
                answer: 'counts how many unique elements meet target',
                alternatives: ['number of conditions satisfied'],
                hint: 'Tracks satisfaction progress.',
                explanation: 'Formed counter increments when a unique element reaches its target frequency in the window.'
            },
            {
                id: 'SW-22',
                type: 'sliding-window',
                difficulty: 'hard',
                question: 'How to find longest subarray with sum <= k (negative numbers allowed)?',
                answer: 'prefix sum with binary search',
                alternatives: ['cannot use simple sliding window'],
                hint: 'Standard sliding window requires all positive.',
                explanation: 'With negative numbers, shrinking may not help. Use prefix sum and binary search on sorted prefix sums.'
            },
            {
                id: 'SW-23',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What technique helps with "at most k" problems?',
                answer: 'sliding window with counter',
                alternatives: ['track distinct elements'],
                hint: 'Count how many elements exceed limit.',
                explanation: 'Track count of elements violating "at most" condition, shrink when count > k.'
            },
            {
                id: 'SW-24',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What\'s the key difference between fixed and variable sliding window?',
                answer: 'window size constant vs dynamic',
                alternatives: ['fixed: always same length', 'variable: expands/shrinks'],
                hint: 'Does size change?',
                explanation: 'Fixed maintains exact size k, variable adjusts based on validity conditions.'
            },
            {
                id: 'SW-25',
                type: 'sliding-window',
                difficulty: 'hard',
                question: 'How to implement minimum window substring with O(n) complexity?',
                answer: 'expand to include all, shrink for minimum',
                alternatives: ['two pointers with frequency maps and formed counter'],
                hint: 'Don\'t restart window each time.',
                explanation: 'Expand right until window contains all pattern chars, then shrink left while still containing them, tracking minimum.'
            },
            {
                id: 'SW-26',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How does the "formed" counter help optimize?',
                answer: 'avoid recounting all elements each time',
                alternatives: ['O(1) check of window validity'],
                hint: 'Know when condition satisfied without full scan.',
                explanation: 'Formed counter allows O(1) validity check rather than O(k) scan of all elements each time.'
            },
            {
                id: 'SW-27',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'When comparing frequency maps, what optimization helps?',
                answer: 'use match counter instead',
                alternatives: ['track matches incrementally'],
                hint: 'Update matches when frequencies align.',
                explanation: 'Instead of comparing full maps, track how many characters have matching frequencies incrementally.'
            },
            {
                id: 'SW-28',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What happens when duplicate enters window in "no repeating" problem?',
                answer: 'move left past previous occurrence',
                alternatives: ['shrink until unique again'],
                hint: 'Skip over the duplicate.',
                explanation: 'When character repeats, move left pointer to after the previous occurrence of that character.'
            },
            {
                id: 'SW-29',
                type: 'sliding-window',
                difficulty: 'hard',
                question: 'How to find all anagrams in a string efficiently?',
                answer: 'sliding window + match counter',
                alternatives: ['compare maps incrementally'],
                hint: 'Slide window of pattern length.',
                explanation: 'Maintain window of pattern length, slide character by character, use match counter for O(1) comparison.'
            },
            {
                id: 'SW-30',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'Can fixed-size sliding window work for "smallest subarray" problems?',
                answer: 'no need variable-size',
                alternatives: ['variable-size required'],
                hint: 'We don\'t know optimal size ahead.',
                explanation: 'Smallest subarray problems require variable-size because we don\'t know the target size beforehand.'
            },
            {
                id: 'SW-31',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What is the initial window size in variable-size problems?',
                answer: 'empty or single element',
                alternatives: ['starts at 0 or 1', 'starts minimal'],
                hint: 'Window grows from nothing.',
                explanation: 'Variable-size windows typically start empty (or with first element) and expand from there.'
            },
            {
                id: 'SW-32',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How to handle negative numbers in "sum equals k" subarray?',
                answer: 'hash map of prefix sums',
                alternatives: ['cannot use sliding window', 'cumulative sum map'],
                hint: 'Sliding window fails if shrinking may increase sum.',
                explanation: 'With negatives, use prefix sums stored in hash map, look for target - currentSum.'
            },
            {
                id: 'SW-33',
                type: 'sliding-window',
                difficulty: 'hard',
                question: 'How to find the pattern "Permutation in String"?',
                answer: 'fixed window equal to pattern length',
                alternatives: ['compare frequency pattern'],
                hint: 'Window size equals pattern length.',
                explanation: 'Use fixed-size window of pattern length, slide through string, compare frequency maps.'
            },
            {
                id: 'SW-34',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'Why does fixed-size sliding window maintain O(n) complexity?',
                answer: 'each element enters and exits once',
                alternatives: ['single pass', 'no backtracking'],
                hint: 'Count operations per element.',
                explanation: 'Each element is added once (enters window) and removed once (exits window), resulting in linear complexity.'
            },
            {
                id: 'SW-35',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What data structure efficiently finds maximum in sliding window?',
                answer: 'deque',
                alternatives: ['double-ended queue'],
                hint: 'Maintain decreasing order of elements.',
                explanation: 'Deque stores indices in decreasing value order; front always has max for current window.'
            },
            {
                id: 'SW-36',
                type: 'sliding-window',
                difficulty: 'hard',
                question: 'How does the deque approach for max in sliding window work?',
                answer: 'remove smaller elements before adding new',
                alternatives: ['maintain decreasing order', 'pop from back'],
                hint: 'Keep only relevant candidates for max.',
                explanation: 'Before adding new element, remove from back all elements smaller than it. Then remove front if out of window.'
            },
            {
                id: 'SW-37',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How to find subarray with product less than k?',
                answer: 'expand right, shrink when product >= k',
                alternatives: ['divide when shrinking'],
                hint: 'Track product in window.',
                explanation: 'Expand right multiplying. When product >= k, shrink left dividing until product < k. Count subarrays ending at each right.'
            },
            {
                id: 'SW-38',
                type: 'sliding-window',
                difficulty: 'hard',
                question: 'How to count all subarrays (not just longest) satisfying condition?',
                answer: 'count all valid windows ending at each position',
                alternatives: ['for each right, count left positions that work'],
                hint: 'Each valid left for current right forms a subarray.',
                explanation: 'For each right, count how many left positions create valid windows. Sum across all positions.'
            },
            {
                id: 'SW-39',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'When would sliding window NOT work?',
                answer: 'non-contiguous elements',
                alternatives: ['need arbitrary subsets', 'not subarray problems'],
                hint: 'Sliding window requires contiguity.',
                explanation: 'Sliding window only works for contiguous subarrays. For subsets or non-contiguous problems, other techniques needed.'
            },
            {
                id: 'SW-40',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What is the key invariant in variable-size window?',
                answer: 'window remains valid after shrink',
                alternatives: ['validity restored before continuing'],
                hint: 'After shrinking, what state must be true?',
                explanation: 'The key is that after shrinking, the window must be valid again before we continue expanding right.'
            },
            {
                id: 'SW-41',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How many subarrays satisfy condition if condition satisfied?',
                answer: 'count depends on left positions',
                alternatives: ['multiple subarrays can end at same right'],
                hint: 'Each left to right is a valid subarray.',
                explanation: 'If window [left, right] is valid, all windows where left moves forward are also valid (until invalid). Count accordingly.'
            },
            {
                id: 'SW-42',
                type: 'sliding-window',
                difficulty: 'hard',
                question: 'How to optimize "at most K distinct" to "exactly K distinct"?',
                answer: 'at most K minus at most (K-1)',
                alternatives: ['subtract results'],
                hint: 'Use formula: exactly(K) = atMost(K) - atMost(K-1).',
                explanation: 'Count subarrays with at most K distinct, subtract count with at most K-1 distinct to get exactly K.'
            },
            {
                id: 'SW-43',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How does shrinking affect the sum/aggregate in window?',
                answer: 'subtract element leaving window',
                alternatives: ['remove left element contribution'],
                hint: 'Update aggregate when left moves.',
                explanation: 'When moving left pointer, subtract or remove the contribution of the element that is leaving the window.'
            },
            {
                id: 'SW-44',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How to find if a string contains permutation of another?',
                answer: 'sliding window with character count comparison',
                alternatives: ['fixed window of pattern length'],
                hint: 'Same as anagram checking.',
                explanation: 'Use fixed window of pattern length, compare character counts or use match counter with maps.'
            },
            {
                id: 'SW-45',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What is the template for fixed-size sliding window?',
                answer: 'calculate initial window, then slide',
                alternatives: ['initialize, loop from k to n, add new, remove old'],
                hint: 'Window starts at [0,k-1], slides to [1,k], etc.',
                explanation: 'Calculate initial result for first k elements. For i from k to n-1: add arr[i], remove arr[i-k], update result.'
            },
            {
                id: 'SW-46',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What is the template for variable-size sliding window?',
                answer: 'expand right while valid, shrink when invalid',
                alternatives: ['adjust left pointer based on condition'],
                hint: 'Right always moves, left conditionally.',
                explanation: 'Right pointer always moves forward. Left pointer moves only when window becomes invalid.'
            },
            {
                id: 'SW-47',
                type: 'sliding-window',
                difficulty: 'hard',
                question: 'How to find minimum window containing all pattern characters?',
                answer: 'expand to include all, shrink to minimum',
                alternatives: ['variable window with formed counter'],
                hint: 'Once all chars included, tighten from left.',
                explanation: 'Expand right until window contains all pattern chars. Then shrink left while still containing all chars, tracking minimum.'
            },
            {
                id: 'SW-48',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How to handle finding maximum of subarrays sorted order?',
                answer: 'sliding window max algorithm with deque',
                alternatives: ['monotonic deque'],
                hint: 'Keep candidates for maximum.',
                explanation: 'Use monotonic deque storing indices in decreasing order. Front is always max for current window.'
            },
            {
                id: 'SW-49',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'What is the initial expansion in variable-size problems?',
                answer: 'expand until invalid or end',
                alternatives: 'grow window first',
                hint: 'Start from empty/small.',
                explanation: 'Initially expand right pointer until window becomes invalid, then start the shrink-expand cycle.'
            },
            {
                id: 'SW-50',
                type: 'sliding-window',
                difficulty: 'medium',
                question: 'How do you update frequency maps in sliding window?',
                answer: 'increment added, decrement removed',
                alternatives: ['add element entering, remove element leaving'],
                hint: 'Track as elements enter/exit window.',
                explanation: 'When element enters window, increment its frequency. When element leaves window, decrement its frequency.'
            }
        ]
    },

    // ==========================================
    // MODULE 5: TWO POINTERS PATTERN
    // ==========================================
    twopointers: {
        basic: [
            {
                id: 'TP-1',
                type: 'two-pointers',
                difficulty: 'easy',
                question: 'What is the core idea of two pointers technique?',
                answer: 'two indices simultaneously',
                alternatives: ['track two positions'],
                hint: 'Using two pointers at the same time.',
                explanation: 'Two pointers technique maintains two indices that move through the data structure, often approaching the solution from both ends.'
            },
            {
                id: 'TP-2',
                type: 'two-pointers',
                difficulty: 'easy',
                question: 'What are the common two-pointer patterns?',
                answer: 'left-right and slow-fast',
                alternatives: ['opposite ends and chasing'],
                hint: 'One at ends, one chasing.',
                explanation: 'Left-right pointers start at opposite ends (often on sorted array). Slow-fast pointers move at different speeds.'
            },
            {
                id: 'TP-3',
                type: 'two-pointers',
                difficulty: 'easy',
                question: 'When is left-right two pointers used?',
                answer: 'sorted array or string',
                alternatives: ['pairs from ends', 'two sums in sorted'],
                hint: 'Need order or sorted data.',
                explanation: 'Left-right pointers work on sorted data where we can compare elements from both ends to find a target or property.'
            },
            {
                id: 'TP-4',
                type: 'two-pointers',
                difficulty: 'easy',
                question: 'What problem is classic for two pointers on sorted array?',
                answer: 'two sum',
                alternatives: ['find pair with target sum'],
                hint: 'Finding 2 numbers that add to target.',
                explanation: 'In sorted array, two sum uses left and right pointers. If sum < target, move left. If sum > target, move right.'
            },
            {
                id: 'TP-5',
                type: 'two-pointers',
                difficulty: 'easy',
                question: 'What happens when sum equals target in two-sum?',
                answer: 'return or record the pair',
                alternatives: ['found the solution'],
                hint: 'Success condition met.',
                explanation: 'When a[left] + a[right] equals target, we found our pair and return or record the result.'
            },
            {
                id: 'TP-6',
                type: 'two-pointers',
                difficulty: 'easy',
                question: 'What happens when sum is less than target?',
                answer: 'move left pointer right',
                alternatives: ['increment left', 'increase left index'],
                hint: 'Need larger sum.',
                explanation: 'When sum < target,移动 left pointer right (increase its value) to increase the sum.'
            },
            {
                id: 'TP-7',
                type: 'two-pointers',
                difficulty: 'easy',
                question: 'What happens when sum is greater than target?',
                answer: 'move right pointer left',
                alternatives: ['decrement right', 'decrease right index'],
                hint: 'Need smaller sum.',
                explanation: 'When sum > target, moving right pointer left decreases the sum.'
            },
            {
                id: 'TP-8',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'What is slow-fast two pointers used for?',
                answer: 'detect cycles or find middle',
                alternatives: ['linked list cycle, middle element'],
                hint: 'One moves faster.',
                explanation: 'Slow-fast pointers detect cycles in linked lists or find middle elements (when fast reaches end, slow is at middle).'
            },
            {
                id: 'TP-9',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'How does slow-fast detect cycle?',
                answer: 'they meet if cycle exists',
                alternatives: ['intersection indicates cycle'],
                hint: 'If they ever meet.',
                explanation: 'If slow and fast pointers ever meet at same node, there is a cycle. If fast reaches null, no cycle.'
            },
            {
                id: 'TP-10',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'How fast does fast pointer move compared to slow?',
                answer: 'twice as fast',
                alternatives: ['2x speed', '2 nodes vs 1 node per step'],
                hint: 'Ratio of speeds.',
                explanation: 'Fast pointer typically moves 2 nodes per step while slow moves 1 node per step.'
            },
            {
                id: 'TP-11',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'How to find middle of linked list with two pointers?',
                answer: 'slow-fast, return slow when fast reaches end',
                alternatives: ['fast at 2x speed, returns slow when fast done'],
                hint: 'Fast goes to end, slow ends up middle.',
                explanation: 'When fast reaches last node (fast.next is null), slow is exactly at middle.'
            },
            {
                id: 'TP-12',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'How to remove nth node from end of linked list?',
                answer: 'two pointers with n distance',
                alternatives: ['gap of n between pointers'],
                hint: 'Lead pointer ahead by n.',
                explanation: 'Move fast pointer n nodes ahead. Then move both until fast reaches end. Slow is at node before target.'
            },
            {
                id: 'TP-13',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'What is the time complexity of two pointers on array?',
                answer: 'O(n)',
                alternatives: ['linear'],
                hint: 'Single pass typically.',
                explanation: 'Each pointer moves at most n steps, resulting in O(n) total time.'
            },
            {
                id: 'TP-14',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'What is the space complexity of two pointers?',
                answer: 'O(1)',
                alternatives: ['constant'],
                hint: 'Only storing two indices.',
                explanation: 'Two pointers only need to store the two indices, making O(1) space.'
            },
            {
                id: 'TP-15',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'How to check if string is palindrome with two pointers?',
                answer: 'compare s[left] and s[right], move toward center',
                alternatives: ['left at start, right at end, compare'],
                hint: 'Check ends, move inward.',
                explanation: 'Place left at 0, right at len-1. Compare chars, move both inward. If all match, palindrome.'
            },
            {
                id: 'TP-16',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'What problem uses two pointers on linked list?',
                answer: 'detect cycle',
                alternatives: ['Floyd\'s algorithm'],
                hint: 'Slow meeting fast.',
                explanation: 'Floyd\'s cycle detection uses slow (1x) and fast (2x) pointers on linked list.'
            },
            {
                id: 'TP-17',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'How to find all triplets summing to zero?',
                answer: 'sort, use two-sum with two pointers for each element',
                alternatives: ['fix first, then two pointers for rest'],
                hint: 'Two-sum for 3-sum problem.',
                explanation: 'Sort array. For each element, use two-sum (two pointers) on remaining part to find pairs summing to negate current element.'
            },
            {
                id: 'TP-18',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to handle duplicates in 3-sum problem?',
                answer: 'skip duplicate elements',
                alternatives: ['check adjacent before processing'],
                hint: 'After finding a triplet, skip same values.',
                explanation: 'After processing element, skip duplicates. After finding pair, skip duplicates of pointers too.'
            },
            {
                id: 'TP-19',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'How to find intersection of two linked lists?',
                answer: 'get lengths, advance longer, then move both',
                alternatives: ['align start points'],
                hint: 'Make them start from same distance to end.',
                explanation: 'Calculate lengths of both lists. Move head of longer list by difference in lengths. Then move both heads together until they meet.'
            },
            {
                id: 'TP-20',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'What is container with most water problem?',
                answer: 'find max area with two lines',
                alternatives: ['max width * min height'],
                hint: 'Line positions determine width, heights determine area.',
                explanation: 'Use left-right on heights. Area = width * min(height[left], height[right]). Move pointer with smaller height inward.'
            },
            {
                id: 'TP-21',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'Which pointer to move in container with most water?',
                answer: 'pointer with smaller height',
                alternatives: ['move the shorter one'],
                hint: 'To potentially increase area.',
                explanation: 'Move the pointer with smaller height, as moving the taller one cannot increase area (width decreases but min-height may stay same or decrease).'
            },
            {
                id: 'TP-22',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'How to square sorted array?',
                answer: 'two pointers from ends, fill result from back',
                alternatives: ['left-right on input, fill result array'],
                hint: 'Largest squares at ends.',
                explanation: 'Use left-right on original array (largest squares at ends). Compare squares, place larger at end of result array.'
            },
            {
                id: 'TP-23',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'How to find if substring exists in another string?',
                answer: 'sliding window or two pointers',
                alternatives: ['check character by character'],
                hint: 'Could be brute force or optimized.',
                explanation: 'Can use simple two pointers comparison or optimized with sliding window/Rabin-Karp.'
            },
            {
                id: 'TP-24',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to find start of cycle in linked list?',
                answer: 'reset slow to head, move both at same speed',
                alternatives: ['after meeting, reset one to start'],
                hint: 'Use additional step after detecting cycle.',
                explanation: 'After slow meets fast, reset slow to head. Move both at 1x. They meet at cycle start.'
            },
            {
                id: 'TP-25',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'What does moving left pointer do in two-sum?',
                answer: 'increases sum',
                alternatives: ['makes sum larger'],
                hint: 'Smaller index has smaller value in sorted array.',
                explanation: 'In sorted array, moving left right accesses larger elements, increasing the sum.'
            },
            {
                id: 'TP-26',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'What does moving right pointer do in two-sum?',
                answer: 'decreases sum',
                alternatives: ['makes sum smaller'],
                hint: 'Larger index has larger value in sorted array.',
                explanation: 'In sorted array, moving right left accesses smaller elements, decreasing the sum.'
            },
            {
                id: 'TP-27',
                type: 'two-pointers',
                question: 'How to approach with two pointers on string?',
                difficulty: 'medium',
                answer: 'one at start, one at end',
                alternatives: ['left at 0, right at len-1'],
                hint: 'Both ends, compare inward.',
                explanation: 'Common approach: left at start, right at end. Compare or operate and move inward.'
            },
            {
                id: 'TP-28',
                type: 'two-pointers',
                question: 'What is the stopping condition for two pointers?',
                difficulty: 'medium',
                answer: 'left >= right or pointers meet',
                alternatives: ['left catches up to right'],
                hint: 'When do they stop?',
                explanation: 'Stop when left >= right (left crosses right) - the pointers have met or crossed.'
            },
            {
                id: 'TP-29',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'How to merge two sorted arrays?',
                answer: 'three pointers or use merge',
                alternatives: ['pointer in each array, one in result'],
                hint: 'Compare and take smaller.',
                explanation: 'Use pointer in each array to compare, add smaller to result, advance that pointer. Third pointer for result.'
            },
            {
                id: 'TP-30',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'Which palindrome problems use two pointers?',
                answer: 'valid palindrome, longest palindromic substring',
                alternatives: ['check if palindrome'],
                hint: 'Compare characters from ends.',
                explanation: 'Two pointers work for palindrome checks and variants like longest palindromic substring (with expansion).'
            }
        ],
        advanced: [
            {
                id: 'TP-31',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to find duplicate in array with n+1 elements (1 to n)?',
                answer: 'slow-fast pointers on values as indices',
                alternatives: ['treat as linked list with cycle'],
                hint: 'Value at index points to next index.',
                explanation: 'Treat array values as indices pointing to next node, treating as linked list with cycle where duplicate points to same node.'
            },
            {
                id: 'TP-32',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to reorder array even-odd indices?',
                answer: 'two pointers swapping',
                alternatives: ['swap odd-even positions'],
                hint: 'Use even and odd pointers.',
                explanation: 'Use two pointers, one at even indices, one at odd indices. Compare or swap as needed.'
            },
            {
                id: 'TP-33',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to find all triplets with sum closest to target?',
                answer: '3-sum, track min difference from target',
                alternatives: ['optimize like 3-sum with absolute difference'],
                hint: 'Similar to regular 3-sum.',
                explanation: 'Similar to 3-sum, but track minimum |sum - target| and update closest sum whenever found.'
            },
            {
                id: 'TP-34',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to find 4-sum target?',
                answer: 'generalize 3-sum with extra loop',
                alternatives: ['two nested loops + two pointers'],
                hint: 'Fix two elements, then two-sum.',
                explanation: 'Fix first two elements with two nested loops, then use two pointers on remaining part for two-sum.'
            },
            {
                id: 'TP-35',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to remove duplicates from sorted array in-place?',
                answer: 'two pointers, slow for unique, fast for scan',
                alternatives: ['write pointer and read pointer'],
                hint: 'Slow writes, fast reads.',
                explanation: 'Slow pointer tracks position to write next unique. Fast pointer scans. When fast finds new unique, write to slow, advance slow.'
            },
            {
                id: 'TP-36',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to trap rain water problem?',
                answer: 'two pointers tracking max from both sides',
                alternatives: ['left max and right max'],
                hint: 'Water at each position depends on min(max-left, max-right).',
                explanation: 'Use two pointers. Track max from left and right. Water at position = min(max-left, max-right) - height[position].'
            },
            {
                id: 'TP-37',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'Which pointer moves in trap rain water?',
                answer: 'pointer at smaller max',
                alternatives: ['move with smaller maximum height'],
                hint: 'Water limited by smaller wall.',
                explanation: 'Move pointer at smaller max height side, because water limited by that side (min determines water level).'
            },
            {
                id: 'TP-38',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'What is the key insight in trap rain water?',
                answer: 'water trapped at each index',
                alternatives: ['local minima between higher walls'],
                hint: 'Calculate position by position.',
                explanation: 'Water trapped at each index is min(max to left, max to right) - height[index].
            },
            {
                id: 'TP-39',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'How to reverse linked list with pointers?',
                answer: 'three pointers (prev, curr, next)',
                alternatives: ['prev, current, next'],
                hint: 'Need to track three nodes.',
                explanation: 'Use prev, curr, next pointers. For each node, reverse link to prev by setting curr.next = prev. Update all three pointers.'
            },
            {
                id: 'TP-40',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to reverse linked list in k groups?',
                answer: 'reverse k nodes, connect to next group',
                alternatives: ['recursive or iterative with group count'],
                hint: 'Reverse each group of k.',
                explanation: 'Find k nodes, reverse them, connect to (reversed) next group. Use recursion or iteration with counting.'
            },
            {
                id: 'TP-41',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to find palindrome linked list?',
                answer: 'find middle, reverse second half, compare',
                alternatives: ['slow-fast to find middle, reverse, compare'],
                hint: 'Need to compare first half to reversed second half.',
                explanation: 'Use slow-fast to find middle. Reverse second half. Compare first half with reversed second half character by character.'
            },
            {
                id: 'TP-42',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to sort colors (Dutch flag problem)?',
                answer: 'three pointers low mid high',
                alternatives: ['0s, 1s, 2s partitions'],
                hint: 'Partition into three sections.',
                explanation: 'Low pointer for 0s boundary, mid for current, high for 2s boundary. Swap and move as needed to partition.'
            },
            {
                id: 'TP-43',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'What is Dutch flag algorithm?',
                answer: 'sort array into three sections',
                alternatives: ['three-way partition'],
                hint: 'For three colors or 0s, 1s, 2s.',
                explanation: 'Algorithm partitions array into three sections: elements equal to 0, elements equal to 1, elements equal to 2.'
            },
            {
                id: 'TP-44',
                type: 'two-pointers',
                difficulty: 'medium',
                question: 'How to find if one string is subsequence of another?',
                answer: 'two pointers, iterate through both',
                alternatives: ['check if all chars of subsequence appear in main'],
                hint: 'Match each character in order.',
                explanation: 'Pointer for subsequence moves only when match found. Pointer for main always moves. Reached end of subsequence means true.'
            },
            {
                id: 'TP-45',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to find longest palindromic substring?',
                answer: 'expand around center (two types)',
                alternatives: ['odd and even length centers'],
                hint: 'Try all centers, expand outward.',
                explanation: 'For each position, try expanding odd length (from center) and even length (from center+1). Track longest.'
            },
            {
                id: 'TP-46',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'What are the two types of center for longest palindrome?',
                answer: 'between characters and on character',
                alternatives: ['even and odd centers'],
                hint: 'One for even length, one for odd.',
                explanation: 'Odd-length palindromes centered on a character. Even-length palindromes centered between two characters.'
            },
            {
                id: 'TP-47',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to remove element from array by value?',
                answer: 'two pointers, copy non-target to front',
                alternatives: ['write pointer and read pointer'],
                hint: 'Similar to remove duplicates.',
                explanation: 'Write pointer tracks position to write. Read pointer scans all elements. Copy element when not equal to target.'
            },
            {
                id: 'TP-48',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to merge intervals?',
                answer: 'sort intervals, then merge overlapping',
                alternatives: ['check overlap with last merged'],
                hint: 'Need intervals to overlap to merge.',
                explanation: 'Sort intervals by start time. Iterate, if current overlaps with last merged, merge them. Otherwise, add current to result.'
            },
            {
                id: 'TP-49',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'What is the condition for intervals to overlap?',
                answer: 'current.start <= last.end',
                alternatives: ['start <= previous end'],
                hint: 'Current starts before or at previous ends.',
                explanation: 'Two intervals [a, b] and [c, d] overlap if c <= b (current starts before or when previous ends).'
            },
            {
                id: 'TP-50',
                type: 'two-pointers',
                difficulty: 'hard',
                question: 'How to find minimum window sorting to make entire array sorted?',
                answer: 'two pointers from left and right to find unsorted boundaries',
                alternatives: ['find leftmost and rightmost out-of-order elements'],
                hint: 'Find where order breaks.',
                explanation: 'From left, find first element larger than all to its left. From right, find first smaller than all to its right.'
            }
        ]
    },

    // ==========================================
    // MODULE 6: BINARY SEARCH PATTERN
    // ==========================================
    binarysearch: {
        basic: [
            {
                id: 'BS-1',
                type: 'binary-search',
                difficulty: 'easy',
                question: 'What is binary search used for?',
                answer: 'find element in sorted array',
                alternatives: ['search sorted data'],
                hint: 'Requires sorted input.',
                explanation: 'Binary search efficiently finds an element (or position) in a sorted array by repeatedly halving the search space.'
            },
            {
                id: 'BS-2',
                type: 'binary-search',
                difficulty: 'easy',
                question: 'What is the time complexity of binary search?',
                answer: 'O(log n)',
                alternatives: ['O(log n)', 'logarithmic'],
                hint: 'Halves search space each step.',
                explanation: 'Binary search halves the search space each iteration, giving O(log n) time.'
            },
            {
                id: 'BS-3',
                type: 'binary-search',
                difficulty: 'easy',
                question: 'What is the space complexity of binary search?',
                answer: 'O(1)',
                alternatives: ['constant'],
                hint: 'Just using a few pointers.',
                explanation: 'Iterative binary search uses constant space O(1) for the indices.'
            },
            {
                id: 'BS-4',
                type: 'binary-search',
                difficulty: 'easy',
                question: 'What does binary search require?',
                answer: 'sorted array',
                alternatives: ['sorted data'],
                hint: 'Unsorted data won\'t work.',
                explanation: 'Binary search requires the array (or data structure) to be sorted for correct behavior.'
            },
            {
                id: 'BS-5',
                type: 'binary-search',
                difficulty: 'easy',
                question: 'What is the middle index formula in binary search?',
                answer: 'left + (right - left) // 2',
                alternatives: ['(left + right) // 2'],
                hint: 'Avoid overflow in calculation.',
                explanation: 'Using `left + (right - left) // 2` avoids potential overflow with large values compared to `(left + right) // 2`.'
            },
            {
                id: 'BS-6',
                type: 'binary-search',
                difficulty: 'easy',
                question: 'When do you update left = mid + 1?',
                answer: 'when target > arr[mid]',
                alternatives: ['target greater than middle'],
                hint: 'Target is in right half.',
                explanation: 'When target > arr[mid], target must be in right half. Set left = mid + 1 to search there.'
            },
            {
                id: 'BS-7',
                type: 'binary-search',
                difficulty: 'easy',
                question: 'When do you update right = mid - 1?',
                answer: 'when target < arr[mid]',
                alternatives: ['target less than middle'],
                hint: 'Target is in left half.',
                explanation: 'When target < arr[mid], target must be in left half. Set right = mid - 1 to search there.'
            },
            {
                id: 'BS-8',
                type: 'binary-search',
                difficulty: 'easy',
                question: 'What is the stopping condition of binary search?',
                answer: 'left > right',
                alternatives: ['left crosses right'],
                hint: 'When do we stop searching?',
                explanation: 'Stop when left > right (no valid search space remaining).\n'
            },
            {
                id: 'BS-9',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'What is binary search on answer?',
                answer: 'search on decision space not array indices',
                alternatives: ['search for condition threshold'],
                hint: 'Not searching in original array.',
                explanation: 'Binary search on answer searches for minimal/maximal value satisfying some predicate, not for a specific target.'
            },
            {
                id: 'BS-10',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'What is binary search on rotated array?',
                answer: 'determine which half is sorted, then search',
                alternatives: ['check rotation pivot'],
                hint: 'One half is always sorted.',
                explanation: 'In rotated array, one half is always sorted. Check if target is in sorted half, search there, else search other half.'
            },
            {
                id: 'BS-11',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'How to find first/last occurrence of element?',
                answer: 'binary search with condition on equality',
                alternatives: ['continue searching when equal'],
                hint: 'Don\'t stop on finding.',
                explanation: 'When target found, continue searching in one direction (depending on first/last) to find boundary.'
            },
            {
                id: 'BS-12',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'How to find first occurrence (lower bound)?',
                answer: 'when found, search left half',
                alternatives: ['continue on left'],
                hint: 'Keep looking left.',
                explanation: 'When target == arr[mid], continue searching left (right = mid - 1) to find first occurrence.'
            },
            {
                id: 'BS-13',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'How to find last occurrence (upper bound)?',
                answer: 'when found, search right half',
                alternatives: ['continue on right'],
                hint: 'Keep looking right.',
                explanation: 'When target == arr[mid], continue searching right (left = mid + 1) to find last occurrence.'
            },
            {
                id: 'BS-14',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'How to count occurrences of element in sorted array?',
                answer: 'last - first + 1',
                alternatives: ['upper bound - lower bound + 1'],
                hint: 'Find first and last positions.',
                explanation: 'Find first and last occurrence of target using binary search. Count = last_pos - first_pos + 1.'
            },
            {
                id: 'BS-15',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'What is the template for binary search?',
                answer: 'while left <= right, calculate mid, compare',
                alternatives: ['invariant: left <= right'],
                hint: 'Standard loop condition.',
                explanation: 'Template: while left <= right: mid = calc, if target == arr[mid] return, elif target < arr[mid] right = mid - 1, else left = mid + 1.'
            },
            {
                id: 'BS-16',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'How to handle binary search with no exact match?',
                answer: 'return left or -1 based on need',
                alternatives: ['return insertion point'],
                hint: 'What to return when not found?',
                explanation: 'Can return -1 for not found, or return left (insertion position) depending on problem requirements.'
            },
            {
                id: 'BS-17',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'When to use inclusive high/right vs exclusive?',
                answer: 'depends on implementation, be consistent',
                alternatives: ['inclusive: left <= right, exclusive: left < right'],
                hint: 'Match loop condition with update.',
                explanation: 'Inclusive (left <= right): right = mid - 1. Exclusive (left < right): right = mid. Be consistent.'
            },
            {
                id: 'BS-18',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'What is ceiling of target?',
                answer: 'smallest element >= target',
                alternatives: ['upper bound'],
                hint: 'Element at or above target.',
                explanation: 'Ceiling is the smallest element in the array greater than or equal to the target.'
            },
            {
                id: 'BS-19',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'What is floor of target?',
                answer: 'largest element <= target',
                alternatives: ['lower bound'],
                hint: 'Element at or below target.',
                explanation: 'Floor is the largest element in the array less than or equal to the target.'
            },
            {
                id: 'BS-20',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'How to find peak element?',
                answer: 'binary search comparing neighbors',
                alternatives: ['middle > neighbor direction'],
                hint: 'Peak defined by neighbors.',
                explanation: 'Compare arr[mid] with neighbors. If arr[mid] < arr[mid+1], peak is to right. Else, peak is to left or is mid.'
            }
        ],
        advanced: [
            {
                id: 'BS-21',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'How to binary search in 2D matrix?',
                answer: 'start from top-right or treat as 1D',
                alternatives: ['two techniques available'],
                hint: 'Two approaches.',
                explanation: 'Approach 1: Start top-right, move left if current > target, down if current < target. Approach 2: Treat as 1D sorted array.'
            },
            {
                id: 'BS-22',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'What is minimize-maximize pattern?',
                answer: 'binary search for minimum of maximums',
                alternatives: ['find smallest feasible max'],
                hint: 'Searching for optimal value.',
                explanation: 'Binary search on answer: find minimum value of some maximum (e.g., minimize maximum subarray sum).'
            },
            {
                id: 'BS-23',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'What is maximize-minimize pattern?',
                answer: 'binary search for maximum of minimums',
                alternatives: ['find largest feasible min'],
                hint: 'Find largest minimum satisfying condition.',
                explanation: 'Binary search on answer: find maximum value of some minimum (e.g., maximize minimum distance).'
            },
            {
                id: 'BS-24',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'How to search in rotated sorted array?',
                answer: 'determine sorted half, narrow search',
                alternatives: ['check mid, determine rotation'],
                hint: 'One half sorted, other rotated.',
                explanation: 'Check if left half is sorted (arr[left] <= arr[mid]). If yes, check if target in this range. Else check right half symmetrically.'
            },
            {
                id: 'BS-25',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'How to find minimum in rotated array?',
                answer: 'binary search comparing with rightmost',
                alternatives: ['find rotation point'],
                hint: 'Minimum is at rotation point.',
                explanation: 'Compare arr[mid] with arr[right]. If arr[mid] > arr[right], min is to right. Else min is to left or is mid.'
            },
            {
                id: 'BS-26',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'What template for binary search on answer?',
                answer: 'find boundary predicate changes from false to true',
                alternatives: ['search for decision boundary'],
                hint: 'Find smallest value where condition holds.',
                explanation: 'Define predicate P(x). Find smallest x where P(x) is true using binary search on range of possible values.'
            },
            {
                id: 'BS-27',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'How to allocate minimum number of pages?',
                answer: 'binary search on max pages per student',
                alternatives: ['minimize maximum allocation'],
                hint: 'Minimize maximum pages.
            },
            {
                id: 'BS-28',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'What is predicate in binary search on answer?',
                answer: 'function returning true/false for value',
                alternatives: ['decision function'],
                hint: 'Tests if value satisfies condition.',
                explanation: 'Predicate P(x) returns true if value x is feasible/satisfies constraints, false otherwise.'
            },
            {
                id: 'BS-29',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'How to find k-th closest element?',
                answer: 'binary search on distance',
                alternatives: ['search for threshold distance'],
                hint: 'Finding boundary based on distance.',
                explanation: 'Binary search on distance threshold. Find smallest distance where at least k elements are within that distance.'
            },
            {
                id: 'BS-30',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'How to search in row-wise and column-wise sorted matrix?',
                answer: 'staircase search from top-right',
                alternatives: ['start from corner, eliminate row/col'],
                hint: 'Can eliminate row or column each step.',
                explanation: 'Start at top-right. If current > target, move left ( eliminates column). If current < target, move down ( eliminates row).\n'
            },
            {
                id: 'BS-31',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'How to find smallest letter greater than target?',
                answer: 'binary search, handle wrap-around',
                alternatives: ['with circular condition'],
                hint: 'Handle reaching end.',
                explanation: 'Binary search. If found or at end, need to wrap around if target is last or not found and need circular.'
            },
            {
                id: 'BS-32',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'What is the typical range for binary search on answer?',
                answer: 'min possible to max possible values',
                alternatives: ['feasible range'],
                hint: 'Search space boundaries.',
                explanation: 'Set low to minimum feasible value, high to maximum feasible value based on problem constraints.'
            },
            {
                id: 'BS-33',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'How to find minimum capacity to ship packages within D days?',
                answer: 'binary search answer: capacity range, check feasibility',
                alternatives: ['minimize maximum daily load'],
                hint: 'Check if capacity works for D days.',
                explanation: 'Binary search on capacity. For each capacity, check if can ship within D days (greedy allocation). Minimize capacity.'
            },
            {
                id: 'BS-34',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'How to split array largest sum?',
                answer: 'minimize maximum subarray sum with m subarrays',
                alternatives: ['binary search on sum threshold'],
                hint: 'Find minimal maximum sum.',
                explanation: 'Binary search on maximum allowed sum. For each threshold, check if can split into <= m subarrays. Minimize the maximum.'
            },
            {
                id: 'BS-35',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'What is the key in binary search on answer?',
                answer: 'predicate monotonicity',
                alternatives: ['function must be monotonic'],
                hint: 'Transition from false to true (or vice versa).',
                explanation: 'Predicates used in binary search on answer must be monotonic (all false then all true, not alternating).'
            },
            {
                id: 'BS-36',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'How to find k-th smallest element in sorted matrix?',
                answer: 'binary search on value range, count <= mid',
                alternatives: ['count elements smaller or equal'],
                hint: 'Count elements in each row <= mid.',
                explanation: 'Binary search on value range [min, max]. Count elements <= mid in each row (binary search per row). Adjust range based on count vs k.'
            },
            {
                id: 'BS-37',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'How to find square root of integer?',
                answer: 'binary search on answer space',
                alternatives: ['search for x where x*x = n'],
                hint: 'Use binary search on possible values.',
                explanation: 'Binary search on integer range [0, n]. Find largest x such that x*x <= n.'
            },
            {
                id: 'BS-38',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'How to search in nearly sorted array?',
                answer: 'check mid, mid-1, mid+1',
                alternatives: ['adjust comparisons'],
                hint: 'Element could be adjacent position.',
                explanation: 'Element can be at mid, mid-1, or mid+1. Compare all three, adjust search range accordingly.'
            },
            {
                id: 'BS-39',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'How to find insertion position for element?',
                answer: 'binary search, return left when not found',
                alternatives: ['left pointer is insertion point'],
                hint: 'Left is where element would go.',
                explanation: 'Binary search for element. When not found, left pointer is the correct insertion position.'
            },
            {
                id: 'BS-40',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'What is lower_bound in binary search?',
                answer: 'first element >= target',
                alternatives: ['first position not less than'],
                hint: 'Starting at or beyond target.',
                explanation: 'Lower bound returns first position where element is >= target (could be equal or greater).'
            },
            {
                id: 'BS-41',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'What is upper_bound in binary search?',
                answer: 'first element > target',
                alternatives: ['first position greater than'],
                hint: 'Strictly greater position.',
                explanation: 'Upper bound returns first position where element is > target (strictly greater).'
            },
            {
                id: 'BS-42',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'How to find target in infinite sorted array?',
                answer: 'find range with exponential search, then binary search',
                alternatives: ['double bounds, then search'],
                hint: 'Don\'t know array size.',
                explanation: 'Exponential search: Start with small range, double end until found range containing target. Then binary search that range.'
            },
            {
                id: 'BS-43',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'What is exponential search?',
                answer: 'find range doubling bounds, then binary search',
                alternatives: ['bounds expanding exponentially'],
                hint: 'Used for infinite arrays or unbounded search.',
                explanation: 'Start at index 1, double to find range containing target. Then binary search in that range.'
            },
            {
                id: 'BS-44',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'How to find peak in bitonic array?',
                answer: 'binary search comparing arr[mid] with arr[mid+1]',
                alternatives: ['find maximum point'],
                hint: 'Peak is maximum element.',
                explanation: 'Compare arr[mid] with arr[mid+1]. If arr[mid] > arr[mid+1], peak is left or mid. Else peak is right.'
            },
            {
                id: 'BS-45',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'What template condition when element found may continue?',
                answer: 'left = mid + 1 or right = mid - 1',
                alternatives: ['don\'t return immediately'],
                hint: 'Based on finding first or last.',
                explanation: 'For first occurrence, move right when found. For last occurrence, move left when found.'
            },
            {
                id: 'BS-46',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'How to search element in sorted but rotated array with duplicates?',
                answer: 'need linear search when equal on boundaries',
                alternatives: ['can\'t always determine sorted half'],
                hint: 'Duplicates complicate sorted half detection.',
                explanation: 'When arr[left] == arr[mid] == arr[right], can\'t determine sorted half. May need to skip edges with linear search.'
            },
            {
                id: 'BS-47',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'How to find minimum in rotated sorted array with duplicates?',
                answer: 'handle arr[mid] == arr[right] case separately',
                alternatives: ['may need to reduce right by 1'],
                hint: 'Duplicates prevent straightforward comparison.',
                explanation: 'When arr[mid] == arr[right], can\'t decide which direction. Reduce right by 1 to eliminate duplicate.'
            },
            {
                id: 'BS-48',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'What is the generic binary search on answer template?',
                answer: 'search range [low, high], find boundary where predicate true',
                alternatives: ['bisection on decision space'],
                hint: 'Works for monotonic predicates.',
                explanation: 'While low < high: mid, if predicate(mid): high = mid, else: low = mid + 1. Return low.'
            },
            {
                id: 'BS-49',
                type: 'binary-search',
                difficulty: 'hard',
                question: 'How to find k-th smallest prime fraction?',
                answer: 'binary search on value, count fractions',
                alternatives: ['count fractions <= threshold'],
                hint: 'Search on value range, count how many fractions <= mid.',
                explanation: 'Binary search on fraction value [0, 1]. Count fractions with value <= mid. Adjust search based on count vs k.'
            },
            {
                id: 'BS-50',
                type: 'binary-search',
                difficulty: 'medium',
                question: 'How many comparisons in binary search for worst case?',
                answer: 'log2(n) rounded up',
                alternatives: ['ceiling(log base 2 of n)'],
                hint: 'Each comparison halves space.',
                explanation: 'In worst case, binary search makes ceil(log2(n)) comparisons where n is the array size.'
            }
        ]
    }
};
    // ==========================================
    // MODULE 7: DYNAMIC PROGRAMMING
    // ==========================================
    dynamicprogramming: {
        basics: [
            {
                id: 'DP-1',
                type: 'dp',
                difficulty: 'easy',
                question: 'What is dynamic programming?',
                answer: 'breaking problems into overlapping subproblems',
                alternatives: ['optimal substructure + overlapping subproblems'],
                hint: 'Solve subproblems once, reuse.',
                explanation: 'Dynamic programming solves complex problems by breaking them into simpler subproblems, solving each once, and storing solutions for reuse.'
            },
            {
                id: 'DP-2',
                type: 'dp',
                difficulty: 'easy',
                question: 'What are the two key DP properties?',
                answer: 'overlapping subproblems and optimal substructure',
                alternatives: ['memoization and tabulation'],
                hint: 'Characteristics of problems suitable for DP.',
                explanation: 'Overlapping subproblems: same subproblems recur. Optimal substructure: optimal solution contains optimal solutions to subproblems.'
            },
            {
                id: 'DP-3',
                type: 'dp',
                difficulty: 'easy',
                question: 'What is memoization?',
                answer: 'top-down with caching',
                alternatives: ['recursive with stored results'],
                hint: 'Caching computed results.',
                explanation: 'Memoization is a top-down approach where recursive calls cache results to avoid recomputation.'
            },
            {
                id: 'DP-4',
                type: 'dp',
                difficulty: 'easy',
                question: 'What is tabulation?',
                answer: 'bottom-up iterative',
                alternatives: ['iterative table building'],
                hint: 'Build solutions from base cases up.',
                explanation: 'Tabulation is a bottom-up approach where we solve all smaller subproblems first, storing results in a table, then build up to final solution.'
            },
            {
                id: 'DP-5',
                type: 'dp',
                difficulty: 'easy',
                question: 'When to use memoization vs tabulation?',
                answer: 'memoization for complex recursion, tabulation for simpler cases',
                alternatives: ['top-down vs bottom-up tradeoffs'],
                hint: 'Consider stack depth and simplicity.',
                explanation: 'Memoization is often easier to implement but has recursion overhead. Tabulation is iterative, avoids recursion depth issues.'
            },
            {
                id: 'DP-6',
                type: 'dp',
                difficulty: 'easy',
                question: 'What is Fibonacci using DP?',
                answer: 'fib(n) = fib(n-1) + fib(n-2), store results',
                alternatives: ['memoize or tabulate Fibonacci'],
                hint: 'State based on position.',
                explanation: 'Fibonacci DP: Compute fib from base cases (fib(0)=0, fib(1)=1), storing/computing each once using recurrence.'
            },
            {
                id: 'DP-7',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is 1D dynamic programming?',
                answer: 'DP state based on single variable',
                alternatives: ['one-dimensional state'],
                hint: 'State is single index/position.',
                explanation: '1D DP has states depending on one variable, typically using a 1D array to store solutions.'
            },
            {
                id: 'DP-8',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is 2D dynamic programming?',
                answer: 'DP state based on two variables',
                alternatives: ['two-dimensional state'],
                hint: 'State uses two indices.',
                explanation: '2D DP has states depending on two variables, typically using a 2D grid/matrix to store solutions.'
            },
            {
                id: 'DP-9',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is the climbing stairs problem?',
                answer: 'ways(n) = ways(n-1) + ways(n-2)',
                alternatives: ['Fibonacci variant'],
                hint: 'Take 1 or 2 steps at a time.',
                explanation: 'At step n, can come from n-1 or n-2. Same recurrence as Fibonacci: ways[n] = ways[n-1] + ways[n-2].'
            },
            {
                id: 'DP-10',
                type: 'dp',
                difficulty: 'medium',
                question: 'How to solve min cost climbing stairs?',
                answer: 'dp[i] = cost[i] + min(dp[i-1], dp[i-2])',
                alternatives: ['minimum cost to reach step i'],
                hint: 'Come from either previous step.',
                explanation: 'dp[i] is minimum cost to reach step i. Start from base cases (steps 0 and 1), compute recurrence.'
            },
            {
                id: 'DP-11',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is the house robber problem?',
                answer: 'max money from non-adjacent houses',
                alternatives: ['rob[i] = max(rob[i-1], rob[i-2] + money[i])'],
                hint: 'Cannot rob adjacent houses.',
                explanation: 'At each house, choose between robbing it (add to rob[i-2]) or skipping it (stay at rob[i-1]).'
            },
            {
                id: 'DP-12',
                type: 'dp',
                difficulty: 'medium',
                question: 'How to solve coin change (minimum coins)?',
                answer: 'dp[amount] = min(dp[amount], dp[amount-coin] + 1)',
                alternatives: ['build up from 0'],
                hint: 'Try each coin for each amount.',
                explanation: 'For each amount, try using each coin and keep minimum. dp[amount] = min over all coins of dp[amount - coin] + 1.'
            },
            {
                id: 'DP-13',
                type: 'dp',
                difficulty: 'medium',
                question: 'How to solve coin change (number of ways)?',
                answer: 'dp[amount] += dp[amount-coin]',
                alternatives: ['sum ways using each coin'],
                hint: 'Count combinations (order doesn\'t matter).',
                explanation: 'Process coins one at a time. For each coin, add ways: dp[amount] += dp[amount - coin].'
            },
            {
                id: 'DP-14',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is longest increasing subsequence length?',
                answer: 'dp[i] = 1 + max(dp[j] for j < i if arr[j] < arr[i])',
                alternatives: ['LIS length DP'],
                hint: 'Check all previous elements.',
                explanation: 'dp[i] stores LIS ending at i. For each i, check all j < i where arr[j] < arr[i], take max dp[j] + 1.'
            },
            {
                id: 'DP-15',
                type: 'dp',
                difficulty: 'medium',
                question: 'How to optimize LIS from O(n^2) to O(n log n)?',
                answer: 'binary search on tails array',
                alternatives: ['patience sorting'],
                hint: 'Maintain smallest ending of increasing sequences.',
                explanation: 'Maintain tails array where tails[i] is smallest ending element of LIS of length i+1. Use binary search.'
            },
            {
                id: 'DP-16',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is longest common subsequence?',
                answer: 'LCS based on matching characters',
                alternatives: ['dp[i][j] for prefixes of two strings'],
                hint: 'Compare characters from two strings.',
                explanation: 'dp[i][j] = LCS of first i chars of s1 and first j chars of s2. If chars match: 1 + dp[i-1][j-1]. Else: max(dp[i-1][j], dp[i][j-1]).'
            },
            {
                id: 'DP-17',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is base case in DP?',
                answer: 'smallest subproblem with known answer',
                alternatives: 'initial condition',
                hint: 'Where recurrence stops.',
                explanation: 'Base cases provide known answers for smallest subproblems (e.g., dp[0] = 0, dp[1] = 1).'
            },
            {
                id: 'DP-18',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is space optimization in DP?',
                answer: 'use only needed states',
                alternatives: ['reduce memory'],
                hint: 'Often only need previous states.',
                explanation: 'If dp[i] only depends on dp[i-1] and dp[i-2], we can use two variables instead of full array.'
            },
            {
                id: 'DP-19',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is the 0/1 knapsack problem?',
                answer: 'max value with limited weight, each item once',
                alternatives: ['dp[w] or dp[i][w] approach'],
                hint: 'Each item can be taken 0 or 1 time.',
                explanation: 'For each item and weight capacity, choose between taking it (add value, subtract weight) or skipping it.'
            },
            {
                id: 'DP-20',
                type: 'dp',
                difficulty: 'medium',
                question: 'How to solve 0/1 knapsack?',
                answer: 'dp[i][w] = max(dp[i-1][w], dp[i-1][w-wt[i]] + val[i])',
                alternatives: ['consider take or skip item i'],
                hint: 'Decide for each item.',
                explanation: 'dp[i][w] is max value using first i items with capacity w. Either skip item (dp[i-1][w]) or take (dp[i-1][w-wt[i]] + val[i]).'
            }
        ],
        advanced: [
            {
                id: 'DP-21',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is unbounded knapsack?',
                answer: 'items can be used multiple times',
                alternatives: ['unlimited quantity per item'],
                hint: 'Unlike 0/1, can reuse.",
                explanation: 'Same as 0/1 but can take same item multiple times. Change recurrence to dp[i][w] = max(dp[i-1][w], dp[i][w-wt[i]] + val[i]).'
            },
            {
                id: 'DP-22',
                type: 'dp',
                difficulty: 'hard',
                question: 'How to optimize knapsack space to O(W)?',
                answer: '1D array, iterate weights backwards',
                alternatives: ['reverse inner loop'],
                hint: 'Single DP array for capacity.',
                explanation: 'Use 1D dp[w] of size W. Iterate weights in reverse order to avoid using same item multiple times (for 0/1). Forward for unbounded.'
            },
            {
                id: 'DP-23',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is partition equal subset sum?',
                answer: 'check if subset sums to total/2',
                alternatives: ['subset sum DP'],
                hint: 'Find subset with specific sum.',
                explanation: 'Check if any subset sums to total/2 using subset sum DP: dp[s] = dp[s] or dp[s-num] for each number.'
            },
            {
                id: 'DP-24',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is edit distance?',
                answer: 'minimum operations to convert one string to another',
                alternatives: ['Levenshtein distance'],
                hint: 'Operations: insert, delete, replace.',
                explanation: 'dp[i][j] = min operations to convert s1[0..i-1] to s2[0..j-1]. Consider match/insert/delete/replace.'
            },
            {
                id: 'DP-25',
                type: 'dp',
                difficulty: 'hard',
                question: 'How to compute edit distance DP?',
                answer: 'if chars match: dp[i-1][j-1], else: 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])',
                alternatives: ['3 operations when mismatch'],
                hint: 'Compare characters at each position.',
                explanation: 'If chars match: no operation, use dp[i-1][j-1]. Else: 1 + min(delete (dp[i-1][j]), insert (dp[i][j-1]), replace (dp[i-1][j-1])).'
            },
            {
                id: 'DP-26',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is word break problem?',
                answer: 'check if string can be segmented into dictionary words',
                alternatives: ['dp[i] true if prefix can be segmented'],
                hint: 'Try matching words at each position.',
                explanation: 'dp[i] = true if s[0..i-1] can be segmented. dp[i] = OR over all dict words matching suffix of s[0..i-1].'
            },
            {
                id: 'DP-27',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is decode ways problem?',
                answer: 'count ways to decode digit string to letters',
                alternatives: ['1=A, 2=B, ..., 26=Z'],
                hint: 'Take 1 or 2 digits as a code.',
                explanation: 'dp[i] = ways to decode first i chars. If s[i-1] valid: dp[i] += dp[i-1]. If s[i-2:i] valid: dp[i] += dp[i-2].'
            },
            {
                id: 'DP-28',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is unique paths problem (grid)?',
                answer: 'paths[i][j] = paths[i-1][j] + paths[i][j-1]',
                alternatives: ['only move down or right'],
                hint: 'Can only move in two directions.',
                explanation: 'Paths to reach cell m[i][j] = paths from above + paths from left. Start base: paths[0][*] = paths[*][0] = 1.'
            },
            {
                id: 'DP-29',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is unique paths with obstacles?',
                answer: 'paths[i][j] = 0 if obstacle, else paths[i-1][j] + paths[i][j-1]',
                alternatives: 'obstacle cells have 0 paths',
                hint: 'Cannot move through obstacles.',
                explanation: 'Same as unique paths but if cell is obstacle, paths there is 0. Cannot reach cell or pass through it.'
            },
            {
                id: 'DP-30',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is minimum path sum in grid?',
                answer: 'dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])',
                alternatives: ['minimum sum to reach each cell'],
                hint: 'Accumulate minimum path cost.',
                explanation: 'dp[i][j] = minimum sum to reach cell (i,j). Add current grid value to min of coming from above or left.'
            },
            {
                id: 'DP-31',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is triangle minimum path sum?',
                answer: 'dp[i][j] = triangle[i][j] + min(dp[i-1][j-1], dp[i-1][j])',
                alternatives: ['top to bottom or bottom to top'],
                hint: 'Move to adjacent numbers below.',
                explanation: 'In triangle, from position can go to same or next index in next row. Take minimum path sum.'
            },
            {
                id: 'DP-32',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is palindrome partitioning?',
                answer: 'dp[i] = true if s[i:j] is palindrome and dp[j] is true',
                alternatives: ['partition into palindromes'],
                hint: 'Check all possible cuts.',
                explanation: 'dp[i] means s[i:] can be partitioned. For each j > i, if s[i:j] palindrome and dp[j] true, then dp[i] true.'
            },
            {
                id: 'DP-33',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is maximum subarray sum (Kadane)?',
                answer: 'dp[i] = max(nums[i], dp[i-1] + nums[i])',
                alternatives: ['Kadane\'s algorithm'],
                hint: 'Extend or start new subarray.',
                explanation: 'At each position, either extend current subarray (add current) or start new (use just current). Track maximum.'
            },
            {
                id: 'DP-34',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is product array except self?',
                answer: 'two passes, left and right products',
                alternatives: ['prefix and suffix products'],
                hint: 'Exclude self from product.',
                explanation: 'First pass: compute prefix products. Second pass: multiply by suffix products. Result[i] = prefix[i] * suffix[i].'
            },
            {
                id: 'DP-35',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is DP with bitmask?',
                answer: 'state includes subset as bitmask',
                alternatives: ['subset DP'],
                hint: 'Represent subset with bits.',
                explanation: 'DP state includes bitmask representing which elements are included/used. Used for TSP or assignment problems.'
            },
            {
                id: 'DP-36',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is TSP (Traveling Salesman) DP?',
                answer: 'dp[mask][i] = min cost to visit cities in mask ending at i',
                alternatives: ['bitmask DP for shortest path'],
                hint: 'Visit all cities exactly once.',
                explanation: 'State: set of visited cities (mask) and current city i. dp[mask][i] = minimum cost starting from city 0, visiting all in mask, ending at i.'
            },
            {
                id: 'DP-37',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is perfect squares problem?',
                answer: 'dp[n] = 1 + min(dp[n - i*i] for all i*i <= n)',
                alternatives: ['least number of perfect squares summing to n'],
                hint: 'Try adding each perfect square.',
                explanation: 'dp[n] = minimum squares summing to n. Try subtracting each perfect square and take min of result + 1.'
            },
            {
                id: 'DP-38',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is interleaving string?',
                answer: 'dp[i][j] = (s1[i-1] == s3[i+j-1] and dp[i-1][j]) or (s2[j-1] == s3[i+j-1] and dp[i][j-1])',
                alternatives: ['check if s3 is interleaving of s1 and s2'],
                hint: 'Match character from either string.',
                explanation: 'dp[i][j] true if first i chars of s1 and first j chars of s2 form first i+j chars of s3. Match from s1 or s2.'
            },
            {
                id: 'DP-39',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is bursting balloons problem?',
                answer: 'dp[left][right] = max over k of dp[left][k] + dp[k][right] + nums[left]*nums[k]*nums[right]',
                alternatives: ['max coins from bursting sequence'],
                hint: 'Last balloon to burst in interval.',
                explanation: 'Reverse thinking: consider which balloon to burst last in interval [left, right]. It splits into two subproblems.'
            },
            {
                id: 'DP-40',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is longest palindrome subsequence?',
                answer: 'dp[i][j] based on matching characters at ends',
                alternatives: ['LPS DP'],
                hint: 'Similar to LCS with reversed string.',
                explanation: 'If chars match: 2 + dp[i+1][j-1]. Else: max(dp[i+1][j], dp[i][j-1]). Or treat as LCS with reversed version.'
            },
            {
                id: 'DP-41',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is distinct subsequences problem?',
                answer: 'numDistinct(s, t) = numDistinct(s[1:], t[1:]) if match, plus numDistinct(s[1:], t)',
                alternatives: ['count subsequences of s equal to t'],
                hint: 'Match first char or skip it.',
                explanation: 'If s[0] == t[0]: dp[i][j] = dp[i+1][j+1] + dp[i+1][j]. Else: dp[i][j] = dp[i+1][j].'
            },
            {
                id: 'DP-42',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is regular expression matching DP?',
                answer: 'dp[i][j] depends on match/star patterns',
                alternatives: ['match s and regex pattern'],
                hint: 'Handle ., *, and normal chars.',
                explanation: 'dp[i][j] = match(s[i:], pattern[j:]). Consider wildcard *, dot ., regular chars with careful state transitions.'
            },
            {
                id: 'DP-43',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is wildcard matching?',
                answer: 'dp[i][j] handling ? and * patterns',
                alternatives: ['match with ? for any char, * for any sequence'],
                hint: 'Similar to regex DP.',
                explanation: '? matches single char. * matches any sequence (including empty). DP recurrence handles each case.'
            },
            {
                id: 'DP-44',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is dungeon game (min health)?',
                answer: 'dp[i][j] = max(1, 1 - min(dp[i+1][j], dp[i][j+1]) + dungeon[i][j])',
                alternatives: ['minimum initial HP to reach princess'],
                hint: 'Work backwards from goal.',
                explanation: 'From bottom-right, compute minimum HP needed at each cell. Need HP >= 1 always. Work backwards to start.'
            },
            {
                id: 'DP-45',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is regular expression and wildcard matching difference?',
                answer: 'regex uses patterns, wildcard uses ? and * only',
                alternatives: ['regex has special operators, wildcard simpler'],
                hint: 'Wildcard is simpler version.',
                explanation: 'Regular expression has more complex patterns. Wildcard only has ? (single) and * (any sequence).'
            },
            {
                id: 'DP-46',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is egg dropping problem?',
                answer: 'dp[eggs][floors] = 1 + min(max(dp[eggs-1][k-1], dp[eggs][floors-k]))',
                alternatives: ['minimum moves to find critical floor'],
                hint: 'Binary decisions from dropping.',
                explanation: 'For each floor to try, consider worst case (egg breaks or not). Minimize over all floors tried.'
            },
            {
                id: 'DP-47',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is paint house (minimum cost)?',
                answer: 'dp[i][color] = cost[i][color] + min(dp[i-1][other colors])',
                alternatives: ['adjacent houses different colors'],
                hint: 'Cannot use same color consecutively.',
                explanation: 'To paint house i with color c, add cost[i][c] to min of painting house i-1 with any other color.'
            },
            {
                id: 'DP-48',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is paint house II (k colors)?',
                answer: 'dp[i][j] = cost[i][j] + second minimum of dp[i-1]',
                alternatives: ['track min and second min'],
                hint: 'Optimization to avoid O(k^2).',
                explanation: 'Instead of checking all k colors each time, track minimum and second minimum of previous row. Use second min when same color.'
            },
            {
                id: 'DP-49',
                type: 'dp',
                difficulty: 'hard',
                question: 'What is delete operation for two strings?',
                answer: 'dp[i][j] = min operations to make s1[0:i] and s2[0:j] equal',
                alternatives: ['delete chars to make equal'],
                hint: 'Delete from either string.',
                explanation: 'If chars match: dp[i-1][j-1]. Else: min(delete from s1: dp[i-1][j] + 1, delete from s2: dp[i][j-1] + 1, both: dp[i-1][j-1] + 2).'
            },
            {
                id: 'DP-50',
                type: 'dp',
                difficulty: 'medium',
                question: 'What is max profit stock (one transaction)?',
                answer: 'min price so far, compute max profit',
                alternatives: ['track minimum buying price'],
                hint: 'Buy low, sell high.',
                explanation: 'Track minimum price seen so far. At each day, profit = price - min_price_seen. Track maximum.'
            }
        ]
    },

    // ==========================================
    // MODULE 8: GREEDY ALGORITHMS
    // ==========================================
    greedy: {
        basics: [
            {
                id: 'GR-1',
                type: 'greedy',
                difficulty: 'easy',
                question: 'What is a greedy algorithm?',
                answer: 'makes locally optimal choice at each step',
                alternatives: ['local optimum hoping for global'],
                hint: 'Greedy = take best now.',
                explanation: 'Greedy algorithms make the locally optimal choice at each step with the hope of finding a global optimum.'
            },
            {
                id: 'GR-2',
                type: 'greedy',
                difficulty: 'easy',
                question: 'What are greedy algorithms used for?',
                answer: 'optimization problems',
                alternatives: ['simpler than DP when applicable'],
                hint: 'Finding optimal solution.',
                explanation: 'Greedy algorithms solve optimization problems by making the best local decision without extensive lookahead.'
            },
            {
                id: 'GR-3',
                type: 'greedy',
                difficulty: 'easy',
                question: 'When does greedy work?',
                answer: 'when local optimal leads to global optimal',
                alternatives: ['problem has greedy choice property'],
                hint: 'Not always optimal.',
                explanation: 'Greedy works when the problem has the greedy choice property and optimal substructure, ensuring local choices lead to global optimum.'
            },
            {
                id: 'GR-4',
                type: 'greedy',
                difficulty: 'easy',
                question: 'What is activity selection problem?',
                answer: 'select max non-overlapping activities',
                alternatives: ['interval scheduling'],
                hint: 'Tasks with start/end times.',
                explanation: 'Select maximum number of non-overlapping activities (intervals). Greedy: sort by finish time, always pick earliest finishing compatible activity.'
            },
            {
                id: 'GR-5',
                type: 'greedy',
                difficulty: 'medium',
                question: 'How to solve activity selection?',
                answer: 'sort by finish time, pick greedily',
                alternatives: ['earliest finish first'],
                hint: 'Greedy choice: earliest finishing.',
                explanation: 'Sort activities by end time. Greedily pick earliest finishing activity, remove overlapping, repeat.'
            },
            {
                id: 'GR-6',
                type: 'greedy',
                difficulty: 'medium',
                question: 'Why sort by finish time in activity selection?',
                answer: 'leaves maximum room for remaining activities',
                alternatives: ['optimal by exchange argument'],
                hint: 'Maximizes future opportunities.',
                explanation: 'Picking earliest finishing leaves maximum remaining time for other activities, which can be proved optimal by exchange argument.'
            },
            {
                id: 'GR-7',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is fractional knapsack?',
                answer: 'take items based on value/weight ratio',
                alternatives: ['can take fractions of items'],
                hint: 'Unlike 0/1, can split items.',
                explanation: 'Sort by value/weight ratio, take items greedily (can take fraction). Works but 0/1 requires DP.'
            },
            {
                id: 'GR-8',
                type: 'greedy',
                difficulty: 'medium',
                question: 'Why greedy works for fractional knapsack but not 0/1?',
                answer: 'fractional allows partial, 0/1 is all-or-nothing',
                alternatives: ['continuous vs discrete'],
                hint: 'Fractional can split items.',
                explanation: 'Fractional allows taking fractions, so greedy on ratio works. 0/1 requires all-or-nothing decisions, needs DP for global optimum.'
            },
            {
                id: 'GR-9',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is Huffman coding?',
                answer: 'optimal prefix code using greedy',
                alternatives: ['data compression'],
                hint: 'Compression algorithm.',
                explanation: 'Huffman coding creates optimal prefix-free codes by greedily combining two lowest frequency characters.'
            },
            {
                id: 'GR-10',
                type: 'greedy',
                difficulty: 'medium',
                question: 'How does Huffman coding work?',
                answer: 'build min-heap, repeatedly combine two minimum',
                alternatives: ['priority queue greedy'],
                hint: 'Use min-heap for frequencies.',
                explanation: 'Put all characters in min-heap (frequency). Pop two minimum, combine to new node with summed frequency, push back. Repeat.'
            },
            {
                id: 'GR-11',
                type: 'greedy',
                difficulty: 'easy',
                question: 'What is the greedy choice property?',
                answer: 'global optimum reachable by locally optimal choices',
                alternatives: ['safe greedy choices'],
                hint: 'Making local best leads to global best.',
                explanation: 'Greedy choice property means a globally optimal solution can be reached by making locally optimal (greedy) choices.'
            },
            {
                id: 'GR-12',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is optimal substructure for greedy?',
                answer: 'optimal solution contains optimal sub-solutions',
                alternatives: ['problem can be broken into subproblems'],
                hint: 'Component solutions are optimal.',
                explanation: 'Optimal substructure means an optimal solution contains optimal solutions to its subproblems.'
            },
            {
                id: 'GR-13',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is the coin change greedy problem?',
                answer: 'use largest denomination first',
                alternatives: ['greedy works for some coin systems'],
                hint: 'Not always optimal for all coin systems.',
                explanation: 'Greedy uses largest coins possible. Works for canonical coin systems (like US coins), but not all (e.g., {1, 3, 4} for sum 6).'
            },
            {
                id: 'GR-14',
                type: 'greedy',
                difficulty: 'medium',
                question: 'When does coin change greedy fail?',
                answer: 'non-canonical coin systems',
                alternatives: ['coins not in right ratio'],
                hint: 'Example: coins {1,3,4} for sum 6.',
                explanation: 'For coins like {1, 3, 4}, greedy gives 4+1+1=3 coins, but optimal is 3+3=2 coins. Coin system not canonical.'
            },
            {
                id: 'GR-15',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is minimum number of platforms needed?',
                answer: 'sort all arrivals and departures, use two pointers',
                alternatives: ['track max concurrent trains'],
                hint: 'Find maximum overlapping intervals.',
                explanation: 'Merge and sort arrival and departure times. Use two pointers to count concurrent trains, track maximum.'
            },
            {
                id: 'GR-16',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is job sequencing with deadlines?',
                answer: 'sort by profit, schedule at latest possible slot',
                alternatives: ['maximize total profit'],
                hint: 'Each job has deadline and profit.',
                explanation: 'Sort jobs by profit descending. For each job, schedule at latest possible slot before deadline using boolean array for slots.'
            },
            {
                id: 'GR-17',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is jump game (reaching end)?',
                answer: 'track furthest reachable index as we go',
                alternatives: ['greedy reachable'],
                hint: 'Can we jump to the end?',
                explanation: 'Track furthest index reachable. At each step, if current index > furthest reached or furthest >= end, return true.'
            },
            {
                id: 'GR-18',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is minimum number of jumps to reach end?',
                answer: 'track range of current jump, next max reachable',
                alternatives: ['level-order like BFS'],
                hint: 'Min jumps, not just can reach.',
                explanation: 'Track range of current jump indices. In this range, find furthest reachable, that becomes next range. Count jumps.'
            },
            {
                id: 'GR-19',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is gas station problem?',
                answer: 'if total gas >= total cost, solution exists, find start',
                alternatives: ['circular route fuel check'],
                hint: 'Check if possible circular trip.',
                explanation: 'If total gas >= total cost, solution exists. Find starting index where running total never goes negative.'
            },
            {
                id: 'GR-20',
                type: 'greedy',
                difficulty: 'medium',
                question: 'How to find gas station start index?',
                answer: 'track total and current tank, reset when negative',
                alternatives: ['negative tank means bad start'],
                hint: 'If tank goes negative, restart from next.',
                explanation: 'Traverse with current tank. If tank goes negative, reset start to next station and tank to 0. Track total for feasibility.'
            }
        ],
        advanced: [
            {
                id: 'GR-21',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is Dijkstra\'s algorithm?',
                answer: 'shortest path using greedy with priority queue',
                alternatives: ['minimum distance path'],
                hint: 'Single-source shortest path.',
                explanation: 'Greedy: Always pick closest unvisited node. Extract min from priority queue, relax edges. Works for non-negative weights.'
            },
            {
                id: 'GR-22',
                type: 'greedy',
                difficulty: 'hard',
                question: 'Why Dijkstra needs priority queue?',
                answer: 'always pick closest node next',
                alternatives: ['min-heap for efficiency'],
                hint: 'Greedy choice is minimum.',
                explanation: 'Greedy choice: pick minimum distance unvisited node. Priority queue efficiently extracts minimum.'
            },
            {
                id: 'GR-23',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is Prim\'s algorithm?',
                answer: 'MST using greedy growing tree',
                alternatives: ['minimum spanning tree'],
                hint: 'Grow one tree from start.',
                explanation: 'Start from any node. Repeatedly add the minimum weight edge connecting current tree to new node, until all nodes in tree.'
            },
            {
                id: 'GR-24',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is Kruskal\'s algorithm?',
                answer: 'MST sorting edges, use Union-Find',
                alternatives: ['edge-based MST'],
                hint: 'Sort all edges by weight.',
                explanation: 'Sort edges by weight. Process edges in order, add edge if it connects different components (check with Union-Find).'
            },
            {
                id: 'GR-25',
                type: 'greedy',
                difficulty: 'hard',
                question: 'Difference between Prim and Kruskal?',
                answer: 'Prim grows tree, Kruskal adds edges by weight',
                alternatives: ['node vs edge based'],
                hint: 'Different greedy strategies.',
                explanation: 'Prim grows MST from starting node, adding minimum edge to new nodes. Kruskal adds edges in weight order globally, using Union-Find to prevent cycles.'
            },
            {
                id: 'GR-26',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What data structure for Kruskal?',
                answer: 'Union-Find (Disjoint Set Union)',
                alternatives: ['DSU'],
                hint: 'Need to check connectivity.',
                explanation: 'Union-Find efficiently maintains connected components and checks if adding edge would create cycle.'
            },
            {
                id: 'GR-27',
                type: 'greedy',
                difficulty: 'medium',
                question: 'When is greedy better than DP?',
                answer: 'when problem has greedy choice property',
                alternatives: ['faster, simpler'],
                hint: 'Greedy is often O(n log n) vs DP.',
                explanation: 'Greedy is simpler and often more efficient (O(n log n)) when applicable, while DP may be O(n^2) or worse.'
            },
            {
                id: 'GR-28',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is interval scheduling (activity selection) proof?',
                answer: 'exchange argument',
                alternatives: ['can replace any solution\'s first choice with greedy\'s'],
                hint: 'Prove greedy choice is safe.',
                explanation: 'Exchange argument: Show that any optimal solution can be modified to start with greedy choice without worsening it.'
            },
            {
                id: 'GR-29',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is partition problem greedy vs DP?',
                answer: 'greedy may fail, DP always works',
                alternatives: ['not all problems greedy'],
                hint: 'Subset sum for equal partition.',
                explanation: 'Partition equal subset sum needs DP (subset sum). Greedy (largest first) doesn\'t guarantee optimal.'
            },
            {
                id: 'GR-30',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is scheduling to minimize waiting time?',
                answer: 'shortest job first',
                alternatives: ['SJF'],
                hint: 'Order by processing time.',
                explanation: 'Sort jobs by processing time, execute in that order. Greedy gives optimal average waiting time.'
            },
            {
                id: 'GR-31',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is the best time to buy and sell stock?',
                answer: 'track min price, max profit',
                alternatives: ['one-pass greedy'],
                hint: 'Buy low, sell high once.',
                explanation: 'On one pass, track minimum price so far. At each day, update max profit by considering selling at current price after buying at min.'
            },
            {
                id: 'GR-32',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is best time to buy and sell stock II (multiple transactions)?',
                answer: 'sum all positive differences',
                alternatives: ['buy-sell whenever profitable'],
                hint: 'Can hold only one at a time.',
                explanation: 'Whenever price[t] > price[t-1], add difference to profit. This is equivalent to making all profitable single-day buys.'
            },
            {
                id: 'GR-33',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is meeting rooms (check availability)?',
                answer: 'sort intervals, check for any overlap',
                alternatives: ['sweep line or sort'],
                hint: 'Can attend all meetings?',
                explanation: 'Sort by start time. Check if any interval starts before previous ends. If overlap, cannot attend all.'
            },
            {
                id: 'GR-34',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is meeting rooms II (minimum rooms)?',
                answer: 'min-heap of end times, sort start times',
                alternatives: ['track concurrent meetings'],
                hint: 'How many meeting rooms needed?',
                explanation: 'Sort by start. Use min-heap of end times. For each meeting, pop ended meetings (from heap before next start), add current meeting, track heap size.'
            },
            {
                id: 'GR-35',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is reconstruct queue by height?',
                answer: 'sort by height descending, then by k ascending, insert at k',
                alternatives: ['people with height h and k others ahead'],
                hint: 'Place taller people first.',
                explanation: 'Sort by height descending, k ascending. Insert each person at index k (the number of taller people needed ahead).'
            },
            {
                id: 'GR-36',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is the largest number problem (arrange digits for largest number)?',
                answer: 'sort by custom comparator concatenation',
                alternatives: ['compare a+b vs b+a'],
                hint: 'Custom string comparison.',
                explanation: 'Sort numbers by comparing concatenations: if a+b > b+a, a should come first to maximize result.'
            },
            {
                id: 'GR-37',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is partition labels problem?',
                answer: 'find last occurrence of each character, extend intervals',
                alternatives: ['partition string with unique chars'],
                hint: 'Each partition has unique letters.',
                explanation: 'Record last occurrence of each character. Build partitions: extend current partition until end equals furthest last index of chars seen.'
            },
            {
                id: 'GR-38',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is task scheduler (cooldown period)?',
                answer: 'most frequent tasks determine minimum slots',
                alternatives: ['formula: (max_freq-1)*(n+1) + count_max_freq'],
                hint: 'Tasks need n cooldown between same.',
                explanation: 'Most frequent task(s) determine structure. Minimum: (max_freq-1)*(n+1) + number_of_tasks_with_max_freq. Or array length if larger.'
            },
            {
                id: 'GR-39',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is insert interval?',
                answer: 'binary search for position, then merge overlapping',
                alternatives: ['find insert location and merge'],
                hint: 'Insert new interval into sorted non-overlapping list.',
                explanation: 'Find position to insert using binary search. Then merge with neighbors if overlapping.'
            },
            {
                id: 'GR-40',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is merge intervals?',
                answer: 'sort by start, merge if overlapping',
                alternatives: ['overlap: end = max(end, next.end)'],
                hint: 'Combine overlapping intervals.',
                explanation: 'Sort by start. Iterate: if current overlaps next, merge by updating end to max of both. Else add current to result and move to next.'
            },
            {
                id: 'GR-41',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is non-overlapping intervals (max removals)?',
                answer: 'sort by end, count overlaps',
                alternatives: ['max non-overlapping, take complement'],
                hint: 'Min removals = total - max non-overlapping.',
                explanation: 'Same as activity selection. Sort by end, greedily pick non-overlapping intervals. Max that can stay = count by greedy. Min removals = total - max.'
            },
            {
                id: 'GR-42',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is course schedule III (max courses)?',
                answer: 'sort by deadline, greedy with max-heap for removals',
                alternatives: ['duration optimization'],
                hint: 'Courses have duration and deadline.',
                explanation: 'Sort by deadline. Track time taken. Use max-heap to drop longest course from schedule if exceed deadline.'
            },
            {
                id: 'GR-43',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is assign cookies?',
                answer: 'two pointers, satisfy greediest child with smallest sufficient cookie',
                alternatives: ['s children sorted, cookies sorted'],
                hint: 'Each child needs cookie size >= greed factor.',
                explanation: 'Sort children and cookies by size. Use two pointers. For each child, find smallest cookie that satisfies. Increment counts.'
            },
            {
                id: 'GR-44',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is boat to save people?',
                answer: 'sort by weight, greedy pairing heaviest with lightest',
                alternatives: ['minimize boats, max 2 per boat, weight limit'],
                hint: 'Each boat carries at most 2 people.',
                explanation: 'Sort. Use two pointers. Try to pair heaviest with lightest. If sum <= limit, both go. Else heaviest goes alone.'
            },
            {
                id: 'GR-45',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is the concept of "safe move" in greedy?',
                answer: 'move that doesn\'t preclude optimality',
                alternatives: ['greedy choice property'],
                hint: 'Making choice that leads to solution.',
                explanation: 'A safe move is a greedy choice that can be part of some optimal solution, not obviously suboptimal.'
            },
            {
                id: 'GR-46',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is the greedy approach vs dynamic programming?',
                answer: 'greedy makes irrevocable choices, DP explores options',
                alternatives: ['local vs global perspective'],
                hint: 'Greedy doesn\'t backtrack.',
                explanation: 'Greedy makes one choice per step without reconsidering. DP considers multiple options and may backtrack.'
            },
            {
                id: 'GR-47',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is the advantage of greedy algorithms?',
                answer: 'often faster and simpler',
                alternatives: ['O(n log n) vs polynomial DP'],
                hint: 'Less computation, when applicable.',
                explanation: 'When applicable, greedy algorithms are often faster (often O(n log n)) and simpler to implement than DP approaches.'
            },
            {
                id: 'GR-48',
                type: 'greedy',
                difficulty: 'medium',
                question: 'What is the disadvantage of greedy algorithms?',
                answer: 'may not always be optimal',
                alternatives: ['wrong answer for some problems'],
                hint: 'Not a silver bullet.',
                explanation: 'Greedy only gives optimal solutions for certain problems. For others, it may produce suboptimal results.'
            },
            {
                id: 'GR-49',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What is the pattern identification for greedy?',
                answer: 'sort by some criteria, process sequentially',
                alternatives: ['usually involves sorting'],
                hint: 'Greedy often sorts then processes.',
                explanation: 'Many greedy problems follow pattern: sort by some criterion (end time, ratio, value), then process greedily.'
            },
            {
                id: 'GR-50',
                type: 'greedy',
                difficulty: 'hard',
                question: 'What are common proof techniques for greedy?',
                answer: 'exchange argument, cut-and-paste, induction',
                alternatives: ['show greedy choice is safe'],
                hint: 'Prove correctness.',
                explanation: 'Exchange argument: can replace any optimal solution\'s first choice with greedy\'s. Induction: base case, inductive step. Cut-and-paste: combine optimal sub-solutions.'
            }
        ]
    },

    // ==========================================
    // MODULE 9: GRAPH ALGORITHMS
    // ==========================================
    graphs: {
        basics: [
            {
                id: 'G-1',
                type: 'graph',
                difficulty: 'easy',
                question: 'What is a graph?',
                answer: 'set of vertices connected by edges',
                alternatives: ['nodes and edges'],
                hint: 'V and E.',
                explanation: 'A graph G = (V, E) consists of a set of vertices (V) and edges (E) connecting pairs of vertices.'
            },
            {
                id: 'G-2',
                type: 'graph',
                difficulty: 'easy',
                question: 'What is the difference between directed and undirected graph?',
                answer: 'directed has ordered edges, undirected has unordered',
                alternatives: ['directed edges have direction'],
                hint: 'Edges have one-way vs two-way.',
                explanation: 'Directed graphs edges have direction (A->B is different from B->A). Undirected edges are bidirectional.'
            },
            {
                id: 'G-3',
                type: 'graph',
                difficulty: 'easy',
                question: 'What is adjacency matrix representation?',
                answer: '2D matrix where matrix[i][j] indicates edge',
                alternatives: ['dense representation'],
                hint: 'Matrix of V x V.',
                explanation: 'Adjacency matrix is V x V where entry [i][j] = 1 if edge exists from i to j (or weight), 0 otherwise.'
            },
            {
                id: 'G-4',
                type: 'graph',
                difficulty: 'easy',
                question: 'What is adjacency list representation?',
                answer: 'list for each vertex with neighbors',
                alternatives: ['sparse efficient'],
                hint: 'Array/list of lists.',
                explanation: 'Adjacency list stores for each vertex a list of its neighbors. Efficient for sparse graphs.'
            },
            {
                id: 'G-5',
                type: 'graph',
                difficulty: 'easy',
                question: 'When to use adjacency matrix?',
                answer: 'dense graphs, need fast edge lookup',
                alternatives: ['O(1) edge check'],
                hint: 'Space O(V^2) but lookup.',
                explanation: 'Adjacency matrix uses O(V^2) space but allows O(1) edge existence checks. Good for dense graphs.'
            },
            {
                id: 'G-6',
                type: 'graph',
                difficulty: 'easy',
                question: 'When to use adjacency list?',
                answer: 'sparse graphs',
                alternatives: ['space efficient for few edges'],
                hint: 'Space O(V + E).',
                explanation: 'Adjacency list uses O(V + E) space, efficient for sparse graphs (E much less than V^2).'
            },
            {
                id: 'G-7',
                type: 'graph',
                difficulty: 'easy',
                question: 'What is BFS?',
                answer: 'breadth-first search, level-order traversal',
                alternatives: ['expand level by level'],
                hint: 'Use queue.',
                explanation: 'BFS explores graph level by level (breadth first) using a queue. Returns shortest path in unweighted graphs.'
            },
            {
                id: 'G-8',
                type: 'graph',
                difficulty: 'easy',
                question: 'What is DFS?',
                answer: 'depth-first search, explore deeply first',
                alternatives: ['go deep, backtrack'],
                hint: 'Use stack or recursion.',
                explanation: 'DFS explores graph as deep as possible along each branch before backtracking. Can use stack or recursive calls.'
            },
            {
                id: 'G-9',
                type: 'graph',
                difficulty: 'medium',
                question: 'Data structure for BFS?',
                answer: 'queue',
                alternatives: ['FIFO'],
                hint: 'First in, first out.',
                explanation: 'BFS uses a queue to process vertices in FIFO order, level by level from the start.'
            },
            {
                id: 'G-10',
                type: 'graph',
                difficulty: 'medium',
                question: 'Data structure for DFS?',
                answer: 'stack or recursion',
                alternatives: ['LIFO'],
                hint: 'Last in, first out.',
                explanation: 'DFS uses a stack (explicit or implicit via recursion call stack) for LIFO order, exploring depth-first.'
            },
            {
                id: 'G-11',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is in-degree of a vertex?',
                answer: 'number of incoming edges',
                alternatives: ['edges pointing to vertex'],
                hint: 'How many ways in?',
                explanation: 'In-degree is the count of edges pointing TO the vertex.'
            },
            {
                id: 'G-12',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is out-degree of a vertex?',
                answer: 'number of outgoing edges',
                alternatives: ['edges from vertex'],
                hint: 'How many ways out?',
                explanation: 'Out-degree is the count of edges pointing FROM the vertex.'
            },
            {
                id: 'G-13',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is connected component?',
                answer: 'maximal set of connected vertices',
                alternatives: ['vertices reachable from each other'],
                hint: 'All connected together.',
                explanation: 'A connected component is a maximal set of vertices where each vertex is reachable from every other in the set.'
            },
            {
                id: 'G-14',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is degree of vertex in undirected graph?',
                answer: 'number of edges incident to it',
                alternatives: ['neighbors count'],
                hint: 'How many edges touch it?',
                explanation: 'In undirected graphs, degree is number of edges directly connected to the vertex (sum of in and out degree for directed).'
            },
            {
                id: 'G-15',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is a path in graph?',
                answer: 'sequence of edges connecting vertices',
                alternatives: ['route from one vertex to another'],
                hint: 'Follow edges.',
                explanation: 'A path is a sequence of adjacent edges connecting a set of vertices from source to destination.'
            },
            {
                id: 'G-16',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is a cycle in graph?',
                answer: 'path that starts and ends at same vertex',
                alternatives: ['closed loop'],
                hint: 'Start = end.',
                explanation: 'A cycle is a path where the first and last vertices are the same. No vertex (except start/end) repeated.'
            },
            {
                id: 'G-17',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is simple graph?',
                answer: 'no loops, no multiple edges between same pair',
                alternatives: ['at most one edge between pair'],
                hint: 'No self-edges, no parallel edges.',
                explanation: 'Simple graphs have no self-loops (edge from vertex to itself) and no multiple edges between the same pair of vertices.'
            },
            {
                id: 'G-18',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is weighted graph?',
                answer: 'edges have weights/costs',
                alternatives: ['edge weights represent cost/distance'],
                hint: 'Numbers on edges.',
                explanation: 'Weighted graphs assign a numerical weight to each edge, representing cost, distance, or some other metric.'
            },
            {
                id: 'G-19',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is tree in graph terms?',
                answer: 'connected, acyclic graph',
                alternatives: ['V edges = V - 1'],
                hint: 'No cycles, all connected.',
                explanation: 'A tree is a connected graph with no cycles. It has exactly V - 1 edges where V is number of vertices.'
            },
            {
                id: 'G-20',
                type: 'graph',
                difficulty: 'easy',
                question: 'What time complexity of BFS/DFS?',
                answer: 'O(V + E)',
                alternatives: ['visit vertices and edges'],
                hint: 'Visits all reachable.',
                explanation: 'BFS and DFS each visit each vertex and edge once (once for directed, twice for undirected), giving O(V + E).'
            }
        ],
        algorithms: [
            {
                id: 'G-21',
                type: 'graph',
                difficulty: 'medium',
                question: 'What does BFS give in unweighted graph?',
                answer: 'shortest path',
                alternatives: ['minimum edges path'],
                hint: 'Fewest edges from start.',
                explanation: 'In unweighted graphs, BFS finds shortest path from source (fewest edges). Explores in increasing distance order.'
            },
            {
                id: 'G-22',
                type: 'graph',
                difficulty: 'medium',
                question: 'How to detect cycle in undirected graph with DFS?',
                answer: 'if neighbor visited and not parent, cycle exists',
                alternatives: ['back edge to ancestor'],
                hint: 'Already visited neighbor not parent.',
                explanation: 'During DFS, if we find an already visited neighbor that is not the parent (direct caller), there is a cycle.'
            },
            {
                id: 'G-23',
                type: 'graph',
                difficulty: 'medium',
                question: 'How to detect cycle in directed graph with DFS?',
                answer: 'track visited and in recursion stack',
                alternatives: ['three colors: white, gray, black'],
                hint: 'If in current recursion path again.',
                explanation: 'Track visited set and recursion stack. If we encounter a vertex in current recursion stack (being processed), cycle exists.'
            },
            {
                id: 'G-24',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is topological sort?',
                answer: 'linear ordering where u comes before v for every edge u->v',
                alternatives: ['DAG ordering'],
                hint: 'For directed acyclic graph.',
                explanation: 'Topological sort creates linear ordering of vertices where for every directed edge u->v, u comes before v in ordering.'
            },
            {
                id: 'G-25',
                type: 'graph',
                difficulty: 'hard',
                question: 'What algorithm does topological sort?',
                answer: 'DFS with post-order or Kahn\'s algorithm (BFS)',
                alternatives: ['finish time ordering'],
                hint: 'Two main approaches.',
                explanation: 'DFS approach: add vertex after fully exploring (post-order). Kahn\'s: repeated BFS removing vertices with zero in-degree.'
            },
            {
                id: 'G-26',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is Kahn\'s algorithm for topological sort?',
                answer: 'repeatedly remove vertices with zero in-degree',
                alternatives: ['BFS-style'],
                hint: 'Start with no incoming edges.',
                explanation: 'Find all vertices with zero indegree, add to result, remove them (reduce indegree of neighbors), repeat.'
            },
            {
                id: 'G-27',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is Union-Find (Disjoint Set Union)?',
                answer: 'data structure for disjoint set operations',
                alternatives: ['find and union operations'],
                hint: 'Tracks connected components.',
                explanation: 'Union-Find maintains disjoint sets with efficient union (merge sets) and find (which set does element belong) operations.'
            },
            {
                id: 'G-28',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is path compression in Union-Find?',
                answer: 'flatten tree during find',
                alternatives: ['make nodes point directly to root'],
                hint: 'Optimizes future finds.',
                explanation: 'Path compression makes nodes on find path point directly to root, making future finds faster (almost constant amortized).'
            },
            {
                id: 'G-29',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is union by rank/size?',
                answer: 'attach smaller tree under larger root',
                alternatives: ['keep trees shallow'],
                hint: 'Prevents tall trees.',
                explanation: 'Union by rank or size merges by attaching shorter tree under root of taller, keeping tree shallow and operations fast.'
            },
            {
                id: 'G-30',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is Dijkstra\'s algorithm?',
                answer: 'shortest path from source to all vertices',
                alternatives: ['single-source shortest paths, non-negative weights'],
                hint: 'Greedy with priority queue.',
                explanation: 'Dijkstra finds shortest paths from source to all vertices. Uses priority queue to always process closest unvisited vertex. Non-negative weights only.'
            },
            {
                id: 'G-31',
                type: 'graph',
                difficulty: 'hard',
                question: 'Why Dijkstra fails with negative weights?',
                answer: 'greedy choice may lead to suboptimal',
                alternatives: ['shorter path discovered later'],
                hint: 'Not always correct with negatives.',
                explanation: 'With negative edges, a vertex processed as "closest" might later have a shorter path through a negative edge. Greedy fails.'
            },
            {
                id: 'G-32',
                type: 'graph',
                difficulty: 'hard',
                question: 'What algorithm handles negative weight edges?',
                answer: 'Bellman-Ford',
                alternatives: ['can detect negative cycles'],
                hint: 'Relaxes all edges V-1 times.',
                explanation: 'Bellman-Ford can handle negative weights and detect negative cycles. Relaxes all edges V-1 times (longest path without cycles).'
            },
            {
                id: 'G-33',
                type: 'graph',
                difficulty: 'hard',
                question: 'How does Bellman-Ford work?',
                answer: 'relax all edges V-1 times, check for improvements',
                alternatives: ['iterative edge relaxation'],
                hint: 'Multiple passes needed.',
                explanation: 'Relax all edges V-1 times (guarantees shortest path if no negative cycles). Check once more; if any improvement, negative cycle exists.'
            },
            {
                id: 'G-34',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is Floyd-Warshall algorithm?',
                answer: 'all-pairs shortest paths',
                alternatives: ['O(V^3) dynamic programming'],
                hint: 'Every pair, every source.',
                explanation: 'Floyd-Warshall computes shortest paths between all pairs of vertices. Uses DP: if going through k is shorter, update.'
            },
            {
                id: 'G-35',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is the recurrence for Floyd-Warshall?',
                answer: 'dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])',
                alternatives: ['try all intermediate vertices'],
                hint: 'Consider vertex k in path.',
                explanation: 'For each intermediate vertex k, try to improve paths i->j by going through k: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]).'
            },
            {
                id: 'G-36',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is MST (Minimum Spanning Tree)?',
                answer: 'subset of edges connecting all vertices with minimum total weight',
                alternatives: ['minimum cost to connect all'],
                hint: 'Must be spanning (connects all).',
                explanation: 'MST is a set of edges that connects all vertices in graph with minimum total weight while being a tree (no cycles).'
            },
            {
                id: 'G-37',
                type: 'graph',
                difficulty: 'hard',
                question: 'What are the two MST algorithms?',
                answer: 'Prim and Kruskal',
                alternatives: ['node-based and edge-based'],
                hint: 'Both are greedy.',
                explanation: 'Prim builds MST by growing from a vertex. Kruskal builds by adding edges in weight order (using Union-Find).'
            },
            {
                id: 'G-38',
                type: 'graph',
                difficulty: 'medium',
                question: 'How does Prim\'s algorithm work?',
                answer: 'start from any vertex, repeatedly add cheapest edge to new vertex',
                alternatives: ['grow MST from starting point'],
                hint: 'Always add min edge connecting tree to outside.',
                explanation: 'Start from any vertex. Use priority queue of edges from tree to outside. Repeatedly add cheapest edge to new vertex.'
            },
            {
                id: 'G-39',
                type: 'graph',
                difficulty: 'medium',
                question: 'How does Kruskal\'s algorithm work?',
                answer: 'sort edges by weight, add edge if connects different components',
                alternatives: ['global edge selection'],
                hint: 'Use Union-Find to check.',
                explanation: 'Sort all edges by weight. Iterate, add edge if it connects different components (check with Union-Find), skipping if creates cycle.'
            },
            {
                id: 'G-40',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is bipartite graph?',
                answer: 'vertices can be divided into two sets with all edges crossing sets',
                alternatives: ['2-colorable'],
                hint: 'Can color with 2 colors.',
                explanation: 'Bipartite graph vertices can be partitioned into two disjoint sets where every edge connects vertices from different sets.'
            },
            {
                id: 'G-41',
                type: 'graph',
                difficulty: 'hard',
                question: 'How to check if graph is bipartite?',
                answer: 'BFS/DFS with 2-coloring',
                alternatives: ['try to color with 2 colors'],
                hint: 'Attempt 2-coloring, check for conflict.',
                explanation: 'Try to 2-color graph using BFS or DFS. If at any point a neighbor must have same color as current, not bipartite.'
            },
            {
                id: 'G-42',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is strongly connected component?',
                answer: 'maximal subgraph where all vertices reachable from each other',
                alternatives: ['SCC'],
                hint: 'For directed graphs.',
                explanation: 'SCC is a maximal subgraph of directed graph where every vertex is reachable from every other vertex.'
            },
            {
                id: 'G-43',
                type: 'graph',
                difficulty: 'hard',
                question: 'What algorithm finds SCCs?',
                answer: 'Kosaraju or Tarjan',
                alternatives: ['two DFS passes or one with discovery times'],
                hint: 'Both work in O(V+E).',
                explanation: 'Kosaraju: DFS on original, DFS on reversed graph in order of finish times. Tarjan: single DFS with low-link values.'
            },
            {
                id: 'G-44',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is articulation point (cut vertex)?',
                answer: 'vertex whose removal increases connected components',
                alternatives: ['critical for connectivity'],
                hint: 'Removing disconnects graph.',
                explanation: 'Articulation point is a vertex whose removal increases number of connected components (disconnects previously connected vertices).'
            },
            {
                id: 'G-45',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is bridge (cut edge)?',
                answer: 'edge whose removal increases connected components',
                alternatives: ['critical edge'],
                hint: 'Removing disconnects graph.',
                explanation: 'Bridge is an edge whose removal increases number of connected components. Critical for network connectivity.'
            },
            {
                id: 'G-46',
                type: 'graph',
                difficulty: 'hard',
                question: 'How to find bridges?',
                answer: 'DFS with discovery times and low values',
                alternatives: ['Tarjan\'s algorithm'],
                hint: 'Edge is bridge if low[child] > discovery[node].',
                explanation: 'During DFS, track discovery times and low values (min discovery reachable). Edge u-v is bridge if low[v] > discovery[u].'
            },
            {
                id: 'G-47',
                type: 'graph',
                difficulty: 'hard',
                question: 'What is the space complexity for adjacency matrix?',
                answer: 'O(V^2)',
                alternatives: ['quadratic in vertices'],
                hint: 'V times V entries.',
                explanation: 'Adjacency matrix uses O(V^2) space, storing an entry for every possible pair of vertices.'
            },
            {
                id: 'G-48',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is the space complexity for adjacency list?',
                answer: 'O(V + E)',
                alternatives: ['proportional to vertices and edges'],
                hint: 'Store each edge once.',
                explanation: 'Adjacency list uses O(V + E) space: V for storing neighbor lists, E entries total across all lists.'
            },
            {
                id: 'G-49',
                type: 'graph',
                difficulty: 'medium',
                question: 'What is the A* algorithm?',
                answer: 'best-first search with heuristic',
                alternatives: ['greedy + actual cost'],
                hint: 'Uses h(n) heuristic.',
                explanation: 'A* extends Dijkstra by using heuristic to guide search towards goal. Priority = actual cost f + estimated cost h to goal.'
            },
            {
                id: 'G-50',
                type: 'graph',
                difficulty: 'hard',
                question: 'What condition does A* need for optimality?',
                answer: 'heuristic must be admissible (never overestimate)',
                alternatives: ['h(n) <= actual cost'],
                hint: 'Must underestimate or be exact.',
                explanation: 'For optimality, heuristic h(n) must be admissible: never overestimate actual cost to goal. Consistent heuristic is stronger sufficiency.'
            }
        ]
    },

    // ==========================================
    // MODULE 10: ADVANCED TOPICS
    // ==========================================
    advanced: {
        advancedds: [
            {
                id: 'AD-1',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is a segment tree?',
                answer: 'binary tree for range queries',
                alternatives: ['supports range query and update'],
                Hint: 'Efficient range operations.',
                explanation: 'Segment tree is a binary tree where each node stores information about a range. Supports efficient range queries and updates in O(log n).'
            },
            {
                id: 'AD-2',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What are segment tree operations?',
                answer: 'query range and update point',
                alternatives: ['range query, point update'],
                Hint: 'O(log n) both operations.',
                explanation: 'Segment tree supports querying any range (sum, min, max, etc.) and updating a point in O(log n) time.'
            },
            {
                id: 'AD-3',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is Fenwick tree (Binary Indexed Tree)?',
                answer: 'tree structure for prefix sums and updates',
                alternatives: ['BIT'],
                Hint: 'Simpler than segment tree.',
                explanation: 'Fenwick tree (BIT) is a data structure for efficient prefix sum queries and point updates. Simpler and often more efficient than segment tree for these operations.'
            },
            {
                id: 'AD-4',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What operations does Fenwick tree support?',
                answer: 'prefix sum and point update',
                alternatives: ['fast prefix queries'],
                Hint: 'Both O(log n).',
                explanation: 'BIT supports computing prefix sums and updating single element values in O(log n) time.'
            },
            {
                id: 'AD-5',
                type: 'advanced',
                difficulty: 'medium',
                question: 'What is a Trie?',
                answer: 'tree for strings, efficient prefix search',
                alternatives: ['prefix tree'],
                Hint: 'Based on prefixes.',
                explanation: 'Trie (prefix tree) is a tree-like data structure for storing strings, enabling efficient prefix-based searches, insertions, and lookups.'
            },
            {
                id: 'AD-6',
                type: 'advanced',
                difficulty: 'medium',
                question: 'What is Trie time complexity for search/insert?',
                answer: 'O(L) where L is word length',
                alternatives: ['length of string'],
                Hint: 'Follow characters from root.',
                explanation: 'Trie operations (search, insert, delete) take O(L) where L is length of word, as we traverse nodes per character.'
            },
            {
                id: 'AD-7',
                type: 'advanced',
                difficulty: 'medium',
                question: 'What is Trie space complexity?',
                answer: 'O(ALPHABET_SIZE * max_word_length * total_words)',
                alternatives: ['depends on total characters stored'],
                Hint: 'Can be large for many unique prefixes.',
                explanation: 'Trie space is bounded by total unique characters across all words. Each node has ALPHABET_SIZE child pointers in worst case.'
            },
            {
                id: 'AD-8',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is KMP (Knuth-Morris-Pratt) algorithm?',
                answer: 'string matching with preprocessing pattern',
                alternatives: ['efficient pattern search'],
                Hint: 'Build LPS table.',
                explanation: 'KMP finds all occurrences of pattern in text in O(n+m) by preprocessing pattern to compute LPS (longest proper prefix which is also suffix).'
            },
            {
                id: 'AD-9',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is LPS in KMP?',
                answer: 'longest proper prefix that is also suffix',
                alternatives: ['failure function'],
                Hint: 'Used for skipping ahead.',
                explanation: 'LPS array for pattern: LPS[i] is length of longest proper prefix of pattern[0..i] that is also suffix. Used to avoid backtracking.'
            },
            {
                id: 'AD-10',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is Rabin-Karp algorithm?',
                answer: 'string matching using hash',
                alternatives: ['rolling hash'],
                Hint: 'Compare hashes for speed.',
                explanation: 'Rabin-Karp uses hashing to find pattern matches. Computes rolling hash for text windows, matches with pattern hash efficiently.'
            },
            {
                id: 'AD-11',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is rolling hash?',
                answer: 'hash that can be updated in O(1) for sliding window',
                alternatives: ['efficient substring hash'],
                Hint: 'Subtract old, add new.',
                explanation: 'Rolling hash efficiently computes hash of sliding window by removing contribution of exiting character and adding entering character in O(1).'
            },
            {
                id: 'AD-12',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is the backtracking technique?',
                answer: 'systematic trial and error, recursive exploration',
                alternatives: ['DFS with pruning'],
                Hint: 'Explore, backtrack if fails.',
                explanation: 'Backtracking explores all possibilities through recursion, abandoning branches when they cannot lead to solution, enabling efficient search space pruning.'
            },
            {
                id: 'AD-13',
                type: 'advanced',
                difficulty: 'hard',
                question: 'How to solve N-Queens?',
                answer: 'backtracking with column and diagonal checks',
                alternatives: ['place queens, backtrack on conflict'],
                Hint: 'One queen per row/column/diagonal.',
                explanation: 'Place queens row by row using backtracking. Track used columns and diagonals to check valid positions efficiently.'
            },
            {
                id: 'AD-14',
                type: 'advanced',
                difficulty: 'hard',
                question: 'How to solve Sudoku with backtracking?',
                answer: 'fill empty cells, backtrack on invalid',
                alternatives: ['recursive with constraint checks'],
                Hint: 'Try 1-9 in each empty cell.',
                explanation: 'Recursively fill empty cells, trying values 1-9. Use row, column, and box tracking for fast validity check, backtrack on invalid.'
            },
            {
                id: 'AD-15',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is bitmask DP?',
                answer: 'DP with subset represented as bits in integer',
                Alternatives: ['subset DP, state includes bitmask'],
                Hint: 'Use bits to represent subsets.',
                explanation: 'Bitmask DP uses integer as bit array to represent subset inclusion. State includes which elements selected, often with 2^n complexity for n elements.'
            },
            {
                id: 'AD-16',
                type: 'advanced',
                difficulty: 'hard',
                question: 'Example of bitmask DP?',
                answer: 'TSP, assignment problem',
                alternatives: ['traveling salesman, assigning tasks'],
                Hint: 'Need to track selected elements.',
                explanation: 'TSP: dp[mask][i] = minimum cost to visit cities in mask ending at city i. Assignment: optimal assignment of n workers to n tasks.'
            }
        ],
        patterns: [
            {
                id: 'AD-17',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is digit DP?',
                answer: 'DP on digits of a number, often with prefix constraints',
                alternatives: ['count numbers with digit properties'],
                Hint: 'DP over number representation.',
                explanation: 'Digit DP counts/enumerates numbers with specific digit-based properties (sum, modulo, no certain digit, etc.) using DP over digit positions with prefix constraints.'
            },
            {
                id: 'AD-18',
                difficulty: 'hard',
                type: 'advanced',
                question: 'What states are in digit DP?',
                answer: 'position, flag for tight/bound, accumulated value',
                alternatives: ['pos, tight, sum/mod'],
                Hint: 'Track prefix information.',
                explanation: 'Common states: position (current digit), tight (bounded by limit prefix), accumulated value (sum, modulo, or other property).'
            },
            {
                id: 'AD-19',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is monotonic stack?',
                answer: 'stack maintaining monotonic property',
                alternatives: ['increasing or decreasing stack'],
                Hint: 'Elements maintain order.',
                explanation: 'Monotonic stack keeps elements in increasing or decreasing order. Used to find next greater/smaller elements efficiently.'
            },
            {
                id: 'AD-20',
                type: 'advanced',
                difficulty: 'hard',
                question: 'How to find next greater element using monotonic stack?',
                answer: 'maintain decreasing stack, pop smaller elements',
                alternatives: ['pop while stack top < current'],
                Hint: 'Current element is NGE for popped.',
                explanation: 'Maintain decreasing stack. For each element, pop all smaller (these have current as NGE), then push. Popped elements get their NGE assigned to current.'
            },
            {
                id: 'AD-21',
                type: 'advanced',
                difficulty: 'hard',
                question: 'How to find daily temperatures?',
                answer: 'monotonic decreasing stack (store indices)',
                alternatives: ['next greater temperature'],
                Hint: 'For each day, find next warmer day.',
                explanation: 'Monotonic decreasing stack of indices. For current temperature, pop all colder days, assign their next warmer day as current, push current.'
            },
            {
                id: 'AD-22',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is Mo\'s algorithm?',
                answer: 'offline query processing sqrt decomposition',
                alternatives: ['process queries in blocks'],
                Hint: 'Reorder queries by block.',
                explanation: 'Mo\'s algorithm answers offline range queries efficiently. Reorder queries to process in blocks of sqrt(N) to minimize add/remove operations between consecutive queries.'
            },
            {
                id: 'AD-23',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is the key idea of Mo\'s algorithm?',
                answer: 'process queries in block order to minimize transition cost',
                alternatives: ['sqrt decomposition],
                Hint: 'Group queries by block.',
                explanation: 'Reorder queries by block (L / block_size) then by R for same block, minimizing total add/remove operations as answers differ gradually.'
            },
            {
                id: 'AD-24',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is heavy-light decomposition?',
                answer: 'decompose tree into paths, assign heavier to same as child',
                alternatives: ['tree path queries'],
                Hint: 'For efficient tree queries.',
                explanation: 'Decompose tree into paths where heavy edges (those to larger subtree) continue same path. Reduces path query to O(log^2 n) segment tree queries.'
            },
            {
                id: 'AD-25',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is LCA (lowest common ancestor)?',
                answer: 'deepest node that is ancestor of both nodes',
                alternatives: ['common ancestor deepest'],
                Hint: 'Find where paths meet upward.',
                explanation: 'LCA of two nodes in tree is the deepest node that is an ancestor of both (i.e., where upward paths from both nodes meet).'
            },
            {
                id: 'AD-26',
                type: 'advanced',
                difficulty: 'hard',
                question: 'How to find LCA efficiently?',
                answer: 'binary lifting, sparse tables, or Euler tour + RMQ',
                alternatives: ['preprocess ancestors at powers of two'],
                Hint: 'Multiple methods available.',
                explanation: 'Binary lifting: precompute ancestors at 2^i levels for each node. Move nodes up to same level, then binary search for LCA. O(log n) per query after O(n log n) preprocessing.'
            },
            {
                id: 'AD-27',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is binary lifting?',
                answer: 'precompute ancestors at 2^i for each node',
                alternatives: ['jump in powers of two'],
                Hint: 'Use ancestor table.',
                explanation: 'Precompute ancestor[i][v] = 2^i-th ancestor of v. Allows jumping up tree in logarithmic time for queries like LCA or path aggregation.'
            },
            {
                id: 'AD-28',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is persistent segment tree?',
                answer: 'segment tree that keeps history of modifications',
                alternatives: ['version control of segment tree'],
                Hint: 'Can query past versions.',
                explanation: 'Persistent segment tree keeps versions after modifications, allowing queries at any point in history. Shares unchanged substructures between versions.'
            },
            {
                id: 'AD-29',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is suffix array?',
                answer: 'array of suffixes of string sorted lexicographically',
                alternatives: ['indices of sorted suffixes'],
                Hint: 'For efficient suffix operations.',
                explanation: 'Suffix array stores starting indices of all suffixes of string, sorted. Used in substring search, longest common substring, etc.'
            },
            {
                id: 'AD-30',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is suffix array used for?',
                answer: 'pattern search, longest common substring',
                alternatives: ['string algorithms'],
                Hint: 'Efficient suffix queries.',
                explanation: 'Suffix array enables fast pattern matching (binary search), finding longest palindrome, longest common substring, and other string operations.'
            },
            {
                id: 'AD-31',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What are the steps for advanced problem solving?',
                answer: 'analyze, choose pattern/data structure, optimize',
                alternatives: ['pattern recognition and optimization'],
                Hint: 'Methodical approach.',
                explanation: 'Key steps: Analyze constraints, recognize pattern (DP, greedy, graph, etc.), choose appropriate data structure, implement with optimization.'
            },
            {
                id: 'AD-32',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What to consider when problem says "1 <= n <= 10^5"?',
                answer: 'O(n log n) solution likely expected',
                alternatives: ['linearithmic or near-linear time'],
                Hint: 'Large constraint limits complexity.',
                explanation: 'n = 10^5 suggests O(n log n) or O(n) solution. O(n^2) too slow. Look for greedy, binary search, or other efficient patterns.'
            },
            {
                id: 'AD-33',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What to consider when problem says "1 <= n <= 10^3"?',
                answer: 'O(n^2) or O(n^3) might be acceptable',
                alternatives: ['quadratic or cubic'],
                Hint: 'Medium constraint allows more.',
                explanation: 'n = 10^3 allows O(n^2) or even O(n^3) in some cases. DP O(n^2) or graph O(V^3) may pass.'
            },
            {
                id: 'AD-34',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is key to pattern recognition?',
                answer: 'identify problem category and sub-pattern',
                alternatives: ['classify problem type'],
                Hint: 'What category fits?',
                explanation: 'Pattern recognition involves identifying problem as string, graph, DP, greedy, etc., then recognizing specific sub-pattern (e.g., DP knapsack, two-sum, etc.).'
            },
            {
                id: 'AD-35',
                type: 'advanced',
                difficulty: 'hard',
                question: 'Common pitfalls in advanced problems?',
                answer: 'overflow, off-by-one, time complexity, edge cases',
                alternatives: ['implementation and design errors'],
                Hint: 'Watch for hidden issues.',
                explanation: 'Common issues: integer overflow (use 64-bit), off-by-one errors, underestimating time complexity, forgetting edge cases (empty, single element).'
            },
            {
                id: 'AD-36',
                type: 'advanced',
                difficulty: 'hard',
                question: 'How to handle large input efficiently in Python?',
                answer: 'sys.stdin.read for fast input, avoid slow operations',
                alternatives: ['use efficient I/O and data structures'],
                Hint: 'Default input is slow.',
                explanation: 'Use sys.stdin.read or sys.stdin.readline for fast input. Avoid slow operations like repeated string concatenation; use list join instead.'
            },
            {
                id: 'AD-37',
                type: 'advanced',
                question: 'How to implement custom comparator in Python?',
                difficulty: 'medium',
                answer: 'key function or functools.cmp_to_key',
                alternatives: ['key parameter for sorting'],
                hint: 'Python 3 uses key function.',
                explanation: 'Python 3 sorted() uses key function. For old-style comparator returning -1, 0, 1, wrap with functools.cmp_to_key.'
            },
            {
                id: 'AD-38',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is the difference between recursion and iteration?',
                answer: 'recursion uses call stack, iteration uses loops',
                alternatives: ['stack vs manual control'],
                hint: 'Different memory patterns.',
                explanation: 'Recursion uses call stack, can hit recursion depth limit. Iteration uses loops, more explicit control but sometimes more complex for recursive problems.'
            },
            {
                id: 'AD-39',
                type: 'advanced',
                difficulty: 'hard',
                question: 'Python recursion depth limit?',
                answer: 'default 1000, can increase with sys.setrecursionlimit',
                alternatives: ['default 1000 frames'],
                hint: 'Watch out for deep recursion.',
                explanation: 'Python default recursion depth is 1000. Can increase with sys.setrecursionlimit(n) but may hit stack overflow or slow down for very deep recursion.'
            },
            {
                id: 'AD-40',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What technique to avoid TLE in Python?',
                answer: 'optimize algorithm, use fast I/O, avoid Python overhead',
                alternatives: ['reduce complexity, use efficient patterns'],
                hint: 'Time limit issues.',
                explanation: 'To avoid TLE: ensure optimal algorithm complexity, use fast I/O, avoid slow constructs like nested loops if O(n log n) exists, minimize Python function call overhead.'
            },
            {
                id: 'AD-41',
                type: 'advanced',
                difficulty: 'medium',
                question: 'How to debug complex algorithms?',
                answer: 'write test cases, print intermediate values, use assertions',
                alternatives: ['step through with small inputs'],
                hint: 'Make it fail visible.',
                explanation: 'Debug strategies: create small test cases covering edge cases, print key values at checkpoints, use assertions for invariants, step through mentally.'
            },
            {
                id: 'AD-42',
                type: 'advanced',
                difficulty: 'medium',
                question: 'How to verify solution correctness before coding?',
                answer: 'trace through example, prove logic, check complexity',
                alternatives: ['mental walkthrough'],
                hint: 'Think before typing.',
                explanation: 'Before coding: trace algorithm on example by hand, verify logic makes sense, confirm time/space complexity fits constraints.'
            },
            {
                id: 'AD-43',
                type: 'advanced',
                difficulty: 'medium',
                question: 'What to do when stuck on a problem?',
                answer: 're-read constraints, try different patterns, draw examples',
                alternatives: ['simplify, look for patterns'],
                hint: 'Change perspective.',
                explanation: 'Strategies: re-read constraints (hint at algorithm), try different pattern categories, draw small examples to see pattern, simplify problem.'
            },
            {
                id: 'AD-44',
                type: 'advanced',
                difficulty: 'medium',
                question: 'How to improve problem-solving skills?',
                answer: 'practice regularly, analyze solutions, learn patterns',
                alternatives: ['consistent effort'],
                hint: 'Practice and review.',
                explanation: 'Improve by: regular practice on different difficulty levels, carefully reading editorial after solving, learning from others\' solutions, maintaining pattern list.'
            },
            {
                id: 'AD-45',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is meet-in-the-middle?',
                answer: 'split problem in half, compute all possibilities for each half, combine',
                alternatives: ['exponential to half-exponential'],
                hint: 'For problems where n is too big for 2^n.',
                explanation: 'For n ~ 40 (2^n too big), split to two halves of n/2 each, generate all 2^(n/2) possibilities, efficiently combine results.'
            },
            {
                id: 'AD-46',
                type: 'advanced',
                difficulty: 'hard',
                question: 'When to use meet-in-the-middle?',
                answer: 'when exponential needed but n moderate (~40)',
                alternatives: ['in between brute force and polynomial'],
                hint: '2^n too big, n too big for DP.',
                explanation: 'Use when full exponential (2^n) is too slow but n is moderate (e.g., 30-40) such that 2^(n/2) is tractable and combination step is efficient.'
            },
            {
                id: 'AD-47',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is divide and conquer?',
                answer: 'break problem into smaller subproblems, solve recursively, combine',
                alternatives: ['recursive partitioning'],
                hint: 'Classic algorithmic technique.',
                explanation: 'Divide: split into smaller subproblems. Conquer: solve recursively. Combine: merge solutions. Examples: merge sort, quicksort, binary search.'
            },
            {
                id: 'AD-48',
                type: 'advanced',
                difficulty: 'hard',
                question: 'What is amortized analysis?',
                answer: 'average operation cost over sequence of operations',
                alternatives: ['guaranteed bound on average'],
                hint: 'Not worst case per operation.',
                explanation: 'Amortized analysis guarantees average operation cost over sequence, even if some are expensive. Used for data structures like hash table, dynamic array.'
            },
            {
                id: 'AD-49',
                type: 'advanced',
                difficulty: 'medium',
                question: 'How to prepare for advanced interviews?',
                answer: 'master patterns, practice medium-hard problems, time yourself',
                alternatives: ['consistent practice with time pressure'],
                hint: 'Interview conditions differ.',
                explanation: 'Master key patterns through practice, advance to harder problems, practice under time pressure (simulate interview), review and refine approach.'
            },
            {
                id: 'AD-50',
                type: 'advanced',
                difficulty: 'medium',
                question: 'Most important skill for competitive programming?',
                answer: 'problem decomposition and pattern recognition',
                alternatives: ['breaking down and identifying patterns'],
                hint: 'See the structure.',
                explanation: 'Ability to decompose complex problem into solvable components and recognize when to apply known patterns is the most valuable skill.'
            }
        ]
    }
};

// End of problems database
