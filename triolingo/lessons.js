// C++ Unit 2: Functions and Data Structures
// Lesson content for building with Triolingo Lesson Builder

const unit2Lessons = [
    {
        id: "2-1",
        title: "Functions and Scope",
        topics: [
            "Functions: definition, declaration, calling",
            "Function parameters: pass by value vs pass by reference",
            "Return types: void, int, double, string, etc.",
            "Scope: local, global, block scope",
            "Default parameters",
            "Function overloading"
        ],
        objectives: [
            "Define and declare functions in C++",
            "Understand parameter passing mechanisms",
            "Use functions with different return types",
            "Manage variable scope correctly",
            "Implement default parameters",
            "Create overloaded functions"
        ]
    },
    {
        id: "2-2",
        title: "Arrays and Vectors",
        topics: [
            "Arrays: fixed-size, declaration, initialization",
            "Array indexing and bounds",
            "Multidimensional arrays",
            "std::vector: dynamic arrays",
            "Vector operations: push_back, pop_back, size",
            "Iterating over arrays and vectors"
        ],
        objectives: [
            "Declare and initialize arrays",
            "Access array elements safely",
            "Work with multidimensional arrays",
            "Use std::vector for dynamic arrays",
            "Perform common vector operations",
            "Iterate through containers with loops"
        ]
    },
    {
        id: "2-3",
        title: "Strings and String Manipulation",
        topics: [
            "C-style strings (char arrays)",
            "std::string class",
            "String operations: concatenation, substring, find",
            "String comparison",
            "String length and size",
            "String streams for formatting"
        ],
        objectives: [
            "Work with C-style strings",
            "Use std::string for safer string handling",
            "Perform string manipulation operations",
            "Compare strings correctly",
            "Get string length and size",
            "Use string streams for I/O formatting"
        ]
    },
    {
        id: "2-4",
        title: "References and Pointers",
        topics: [
            "References: aliasing variables",
            "Reference parameters in functions",
            "Pointers: memory addresses",
            "Pointer declaration and initialization",
            "Pointer arithmetic",
            "Dereferencing pointers"
        ],
        objectives: [
            "Use references to alias variables",
            "Pass parameters by reference",
            "Understand pointer basics and memory",
            "Declare and initialize pointers",
            "Perform pointer arithmetic",
            "Dereference pointers to access values"
        ]
    },
    {
        id: "2-5",
        title: "Basic Algorithms",
        topics: [
            "Sorting: bubble sort, selection sort",
            "Searching: linear search, binary search",
            "Time complexity basics",
            "Algorithm efficiency",
            "Common patterns",
            "STL algorithms: sort, find, count"
        ],
        objectives: [
            "Implement basic sorting algorithms",
            "Implement basic searching algorithms",
            "Understand time complexity concepts",
            "Evaluate algorithm efficiency",
            "Recognize common algorithmic patterns",
            "Use STL algorithms for common tasks"
        ]
    },
    {
        id: "2-6",
        title: "Advanced Control Flow",
        topics: [
            "Nested loops",
            "Loop control: break, continue",
            "Goto statement (and why to avoid it)",
            "Switch statement with fall-through",
            "Conditional operator (ternary)",
            "Exception handling basics"
        ],
        objectives: [
            "Use nested loops effectively",
            "Control loop execution with break/continue",
            "Understand goto and alternatives",
            "Use switch statements correctly",
            "Apply ternary operator",
            "Handle basic exceptions"
        ]
    }
];

// C++ Unit 4: Pointers and References
const unit4Lessons = [
    {
        id: "4-1",
        title: "Pointer Fundamentals",
        topics: [
            "Memory addresses and the & operator",
            "Pointer declaration with *",
            "Pointer initialization",
            "Dereferencing with * operator",
            "Null pointers and nullptr",
            "Pointer size and memory layout"
        ],
        objectives: [
            "Get memory addresses of variables",
            "Declare pointer variables correctly",
            "Initialize pointers safely",
            "Access values through pointers",
            "Handle null pointers properly",
            "Understand pointer memory usage"
        ]
    },
    {
        id: "4-2",
        title: "Pointer Arithmetic",
        topics: [
            "Incrementing and decrementing pointers",
            "Pointer addition and subtraction",
            "Pointer difference",
            "Pointer comparison",
            "Arrays and pointer equivalence",
            "Pointer bounds and safety"
        ],
        objectives: [
            "Perform pointer arithmetic operations",
            "Understand pointer arithmetic rules",
            "Calculate pointer differences",
            "Compare pointers correctly",
            "Use pointers to iterate through arrays",
            "Ensure pointer arithmetic is safe"
        ]
    },
    {
        id: "4-3",
        title: "Pointers and Arrays",
        topics: [
            "Array name as pointer",
            "Pointer arithmetic on arrays",
            "Multidimensional array pointers",
            "Dynamic memory allocation",
            "new and delete operators",
            "Memory leaks and prevention"
        ],
        objectives: [
            "Understand array-pointer relationship",
            "Use pointer arithmetic on arrays",
            "Work with multidimensional arrays",
            "Allocate memory dynamically",
            "Free allocated memory properly",
            "Prevent memory leaks"
        ]
    },
    {
        id: "4-4",
        title: "References Deep Dive",
        topics: [
            "Reference declaration and initialization",
            "References vs pointers",
            "Reference parameters",
            "Returning references",
            "Const references",
            "Reference limitations"
        ],
        objectives: [
            "Declare and use references correctly",
            "Choose between references and pointers",
            "Pass parameters by reference",
            "Return references from functions",
            "Use const references safely",
            "Understand reference constraints"
        ]
    },
    {
        id: "4-5",
        title: "Function Pointers",
        topics: [
            "Function pointer declaration",
            "Assigning functions to pointers",
            "Calling functions through pointers",
            "Function pointer arrays",
            "Callback functions",
            "Lambda expressions"
        ],
        objectives: [
            "Declare function pointers",
            "Assign functions to pointers",
            "Call functions through pointers",
            "Create arrays of function pointers",
            "Implement callback patterns",
            "Use lambda expressions"
        ]
    },
    {
        id: "4-6",
        title: "Smart Pointers",
        topics: [
            "Raw pointer problems",
            "std::unique_ptr",
            "std::shared_ptr",
            "std::weak_ptr",
            "Smart pointer best practices",
            "RAII (Resource Acquisition Is Initialization)"
        ],
        objectives: [
            "Understand raw pointer issues",
            "Use unique_ptr for exclusive ownership",
            "Use shared_ptr for shared ownership",
            "Use weak_ptr to prevent cycles",
            "Follow smart pointer best practices",
            "Apply RAII principles"
        ]
    }
];