// C++ Unit 4 - Pointers and References
// Generated from cppCombined.js

window.cppUnit4 = {
  "unitId": "4",
  "unitName": "4. Pointers and References",
  "lessons": [
    {
      "id": 19,
      "title": "Memory Model Overview",
      "unitTitle": "4. Pointers and References",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-4-1-1",
          "type": "typing",
          "question": "What is a memory address?",
          "correctAnswer": [
            "unique location in memory",
            "identifier for memory location",
            "hexadecimal number representing location"
          ],
          "explanation": "A memory address is a unique identifier for a specific location in computer memory.",
          "xp": 5
        },
        {
          "id": "cpp-4-1-2",
          "type": "typing",
          "question": "What operator gets the address of a variable?",
          "correctAnswer": [
            "&",
            "address-of operator",
            "ampersand"
          ],
          "explanation": "The & operator (address-of) returns the memory address of a variable.",
          "xp": 5
        },
        {
          "id": "cpp-4-1-3",
          "type": "typing",
          "question": "What is a pointer?",
          "correctAnswer": [
            "variable that stores a memory address",
            "variable containing address of another variable"
          ],
          "explanation": "A pointer is a variable that stores the memory address of another variable.",
          "xp": 5
        },
        {
          "id": "cpp-4-1-4",
          "type": "typing",
          "question": "What is the stack?",
          "correctAnswer": [
            "memory region for local variables",
            "automatic memory allocation",
            "LIFO structure"
          ],
          "explanation": "The stack is a memory region for local variables with automatic allocation and deallocation.",
          "xp": 5
        },
        {
          "id": "cpp-4-1-5",
          "type": "typing",
          "question": "What is the heap?",
          "correctAnswer": [
            "dynamic memory allocation region",
            "memory for manual allocation",
            "free store"
          ],
          "explanation": "The heap is a memory region for dynamic allocation using new/delete.",
          "xp": 5
        },
        {
          "id": "cpp-4-1-6",
          "type": "multiple",
          "question": "Where are local variables stored?",
          "options": [
            "Stack",
            "Heap",
            "Data segment",
            "Code segment"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Local variables are stored on the stack.",
          "xp": 5
        },
        {
          "id": "cpp-4-1-7",
          "type": "multiple",
          "question": "What is the size of a pointer on a 64-bit system?",
          "options": [
            "8 bytes",
            "4 bytes",
            "2 bytes",
            "16 bytes"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Pointers on 64-bit systems are 8 bytes (64 bits).",
          "xp": 5
        },
        {
          "id": "cpp-4-1-8",
          "type": "multiple",
          "question": "What happens to memory on the stack when a function returns?",
          "options": [
            "It's automatically freed",
            "It remains",
            "It becomes heap memory",
            "It needs manual deletion"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Stack memory is automatically freed when the function returns.",
          "xp": 5
        },
        {
          "id": "cpp-4-1-9",
          "type": "multiple",
          "question": "Which is true about heap memory?",
          "options": [
            "Requires manual management",
            "Automatic allocation",
            "Faster than stack",
            "Limited size"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Heap memory requires manual management with new/delete.",
          "xp": 5
        },
        {
          "id": "cpp-4-1-10",
          "type": "multiple",
          "question": "What is a null pointer?",
          "options": [
            "Pointer pointing to nothing",
            "Pointer to null value",
            "Zero pointer",
            "Invalid pointer"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "A null pointer is a pointer that doesn't point to any valid memory.",
          "xp": 5
        },
        {
          "id": "cpp-4-1-11",
          "type": "code",
          "question": "Get the address of integer variable x and store it in pointer p.",
          "correctAnswer": [
            "int* p = &x;",
            "int *p = &x;"
          ],
          "explanation": "Use & operator to get address: int* p = &x;",
          "xp": 15
        },
        {
          "id": "cpp-4-1-12",
          "type": "code",
          "question": "Declare a pointer to an integer.",
          "correctAnswer": [
            "int* p;",
            "int *p;"
          ],
          "explanation": "Pointer declaration: type* name; or type *name;",
          "xp": 15
        },
        {
          "id": "cpp-4-1-13",
          "type": "code",
          "question": "Initialize a pointer to nullptr.",
          "correctAnswer": [
            "int* p = nullptr;",
            "int *p = nullptr;"
          ],
          "explanation": "Initialize pointer with nullptr to ensure it doesn't point to invalid memory.",
          "xp": 15
        },
        {
          "id": "cpp-4-1-14",
          "type": "code",
          "question": "Access the value pointed to by pointer p.",
          "correctAnswer": [
            "*p",
            "int value = *p;"
          ],
          "explanation": "Dereference pointer with * operator to get the value.",
          "xp": 15
        },
        {
          "id": "cpp-4-1-15",
          "type": "code",
          "question": "Modify the value through pointer p (set it to 42).",
          "correctAnswer": [
            "*p = 42;"
          ],
          "explanation": "Dereference and assign: *p = 42;",
          "xp": 15
        },
        {
          "id": "cpp-4-1-16",
          "type": "code",
          "question": "Declare a pointer to double.",
          "correctAnswer": [
            "double* p;",
            "double *p;"
          ],
          "explanation": "Pointer type must match the type it points to.",
          "xp": 15
        },
        {
          "id": "cpp-4-1-17",
          "type": "code",
          "question": "Print the address of variable x.",
          "correctAnswer": [
            "cout << &x;",
            "cout << (void*)&x;"
          ],
          "explanation": "Use & operator to print address with cout.",
          "xp": 15
        },
        {
          "id": "cpp-4-1-18",
          "type": "code",
          "question": "Print the value pointed to by p.",
          "correctAnswer": [
            "cout << *p;"
          ],
          "explanation": "Dereference pointer to print the value.",
          "xp": 15
        },
        {
          "id": "cpp-4-1-19",
          "type": "code",
          "question": "Allocate memory for an integer on the heap.",
          "correctAnswer": [
            "int* p = new int;",
            "int *p = new int;"
          ],
          "explanation": "Use new to allocate heap memory.",
          "xp": 15
        },
        {
          "id": "cpp-4-1-20",
          "type": "code",
          "question": "Free heap memory pointed to by p.",
          "correctAnswer": [
            "delete p;"
          ],
          "explanation": "Use delete to free heap memory allocated with new.",
          "xp": 15
        },
        {
          "id": "cpp-4-1-21",
          "type": "code",
          "question": "Declare and initialize pointer p to point to variable x.",
          "correctAnswer": [
            "int x = 5;\\nint* p = &x;",
            "int x = 5; int *p = &x;"
          ],
          "explanation": "Initialize pointer with address of variable.",
          "xp": 15
        },
        {
          "id": "cpp-4-1-22",
          "type": "code",
          "question": "Check if pointer p is not null before dereferencing.",
          "correctAnswer": [
            "if (p != nullptr)",
            "if (p)",
            "if (p != nullptr) { *p = 10; }"
          ],
          "explanation": "Always check for null before dereferencing to avoid crashes.",
          "xp": 15
        },
        {
          "id": "cpp-4-1-23",
          "type": "code",
          "question": "Allocate array of 10 integers on heap.",
          "correctAnswer": [
            "int* arr = new int[10];",
            "int *arr = new int[10];"
          ],
          "explanation": "Use new[] for array allocation.",
          "xp": 15
        },
        {
          "id": "cpp-4-1-24",
          "type": "code",
          "question": "Delete array allocated with new[].",
          "correctAnswer": [
            "delete[] arr;"
          ],
          "explanation": "Use delete[] for arrays allocated with new[].",
          "xp": 15
        },
        {
          "id": "cpp-4-1-25",
          "type": "code",
          "question": "Assign the address of one pointer to another pointer.",
          "correctAnswer": [
            "int* p2 = p;",
            "int *p2 = p;"
          ],
          "explanation": "Pointers can be assigned, making them point to the same address.",
          "xp": 15
        }
      ],
      "lessonText": "# Memory Model Overview\n\nC++ gives you direct control over memory through pointers. Understanding how memory is organized is crucial for effective programming.\n\n## Memory Layout\n\nA running C++ program's memory is divided into regions:\n\n1. **Code Segment** - Stores program instructions (read-only)\n2. **Data Segment** - Global and static variables\n3. **Stack** - Local variables, function call frames (automatic)\n4. **Heap** - Dynamic memory allocation (manual)\n\n## Memory Addresses\n\nEvery variable in memory has a unique address. In C++, addresses are represented as hexadecimal numbers.\n\n```cpp\nint x = 42;\ncout << &x;  // Prints: 0x7fff1234abcd\n```\n\n## Pointers\n\nA pointer is a variable that stores a memory address. The pointer type indicates what kind of data it points to.\n\n```cpp\nint x = 10;\nint* p = &x;  // p holds address of x\n```\n\n**Declaration:** `type* pointerName;` or `type *pointerName;`\n\n## Stack vs Heap\n\n**Stack:**\n- Automatic allocation/deallocation\n- LIFO (Last In, First Out) structure\n- Limited size\n- Fast access\n- Used for: local variables, function calls\n\n**Heap:**\n- Manual allocation with `new`/`malloc`\n- Manual deallocation with `delete`/`free`\n- Larger size\n- Slightly slower\n- Used for: dynamic data structures, large arrays\n\n## Null Pointers\n\nA null pointer doesn't point to valid memory. Use `nullptr` (C++11) to represent this.\n\n```cpp\nint* p = nullptr;  // p doesn't point anywhere\nif (p != nullptr) {\n    // Safe to use p\n}\n```\n\n## Dynamic Memory Allocation\n\n```cpp\n// Allocate single value\nint* p = new int(42);\ndelete p;\n\n// Allocate array\nint* arr = new int[10];\ndelete[] arr;  // Note the brackets\n```\n\n**Warning:** Forgetting to `delete` causes memory leaks!\n"
    },
    {
      "id": 20,
      "title": "References vs Pointers",
      "unitTitle": "4. Pointers and References",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-4-2-1",
          "type": "typing",
          "question": "What is a reference?",
          "correctAnswer": [
            "alias for another variable",
            "alternative name for variable"
          ],
          "explanation": "A reference is an alias (another name) for an existing variable.",
          "xp": 5
        },
        {
          "id": "cpp-4-2-2",
          "type": "typing",
          "question": "Can a reference be reseated to point to a different variable?",
          "correctAnswer": [
            "no",
            "cannot"
          ],
          "explanation": "References cannot be reseated - they always refer to the same variable.",
          "xp": 5
        },
        {
          "id": "cpp-4-2-3",
          "type": "typing",
          "question": "What symbol declares a reference?",
          "correctAnswer": [
            "&",
            "ampersand"
          ],
          "explanation": "The & symbol declares a reference: int& ref = x;",
          "xp": 5
        },
        {
          "id": "cpp-4-2-4",
          "type": "typing",
          "question": "What must happen when a reference is declared?",
          "correctAnswer": [
            "must be initialized",
            "initialized immediately"
          ],
          "explanation": "References must be initialized when declared - they can't be null.",
          "xp": 5
        },
        {
          "id": "cpp-4-2-5",
          "type": "typing",
          "question": "What is the key difference between references and pointers?",
          "correctAnswer": [
            "references are aliases, pointers hold addresses",
            "references cannot be null"
          ],
          "explanation": "References are aliases to existing variables, while pointers hold memory addresses.",
          "xp": 5
        },
        {
          "id": "cpp-4-2-6",
          "type": "multiple",
          "question": "Which must be initialized at declaration?",
          "options": [
            "References",
            "Pointers",
            "Both",
            "Neither"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "References must be initialized when declared.",
          "xp": 5
        },
        {
          "id": "cpp-4-2-7",
          "type": "multiple",
          "question": "What does modifying a reference do?",
          "options": [
            "Modifies the referenced variable",
            "Modifies the reference itself",
            "Does nothing",
            "Creates a copy"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Modifying a reference modifies the variable it refers to.",
          "xp": 5
        },
        {
          "id": "cpp-4-2-8",
          "type": "multiple",
          "question": "Can you have a null reference?",
          "options": [
            "No",
            "Yes",
            "Only with nullptr",
            "Only with special syntax"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "References cannot be null - they must always refer to a valid object.",
          "xp": 5
        },
        {
          "id": "cpp-4-2-9",
          "type": "multiple",
          "question": "Which is safer: reference or pointer?",
          "options": [
            "Reference",
            "Pointer",
            "Equally safe",
            "Depends on context"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "References are generally safer because they can't be null and can't be reseated.",
          "xp": 5
        },
        {
          "id": "cpp-4-2-10",
          "type": "multiple",
          "question": "What happens when you assign one reference to another?",
          "options": [
            "The referenced variable's value is copied",
            "The reference is reseated",
            "Nothing",
            "Compilation error"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Assigning references copies the referenced value, it doesn't reseat the reference.",
          "xp": 5
        },
        {
          "id": "cpp-4-2-11",
          "type": "code",
          "question": "Create a reference to integer variable x.",
          "correctAnswer": [
            "int& ref = x;",
            "int &ref = x;"
          ],
          "explanation": "Reference declaration with & operator: int& ref = x;",
          "xp": 15
        },
        {
          "id": "cpp-4-2-12",
          "type": "code",
          "question": "Modify variable x through reference ref (set to 100).",
          "correctAnswer": [
            "ref = 100;"
          ],
          "explanation": "Use reference like the original variable: ref = 100;",
          "xp": 15
        },
        {
          "id": "cpp-4-2-13",
          "type": "code",
          "question": "Declare a function that takes an int by reference.",
          "correctAnswer": [
            "void modify(int& x)",
            "void modify(int& x) { }"
          ],
          "explanation": "Reference parameter: void func(type& param)",
          "xp": 15
        },
        {
          "id": "cpp-4-2-14",
          "type": "code",
          "question": "Return a reference from a function.",
          "correctAnswer": [
            "int& getRef() { return globalVar; }",
            "int& getRef() { return x; }"
          ],
          "explanation": "Function can return reference: int& func() { return var; }",
          "xp": 15
        },
        {
          "id": "cpp-4-2-15",
          "type": "code",
          "question": "Create a const reference to int x.",
          "correctAnswer": [
            "const int& ref = x;"
          ],
          "explanation": "const reference prevents modification: const type& ref = x;",
          "xp": 15
        },
        {
          "id": "cpp-4-2-16",
          "type": "code",
          "question": "Write a function that swaps two integers using references.",
          "correctAnswer": [
            "void swap(int& a, int& b) {\\n    int temp = a;\\n    a = b;\\n    b = temp;\\n}"
          ],
          "explanation": "Reference parameters allow function to modify original values.",
          "xp": 15
        },
        {
          "id": "cpp-4-2-17",
          "type": "code",
          "question": "Create a reference to a double variable d.",
          "correctAnswer": [
            "double& ref = d;",
            "double &ref = d;"
          ],
          "explanation": "Reference type must match the variable type.",
          "xp": 15
        },
        {
          "id": "cpp-4-2-18",
          "type": "code",
          "question": "Pass a string by const reference (efficient, no modification).",
          "correctAnswer": [
            "void print(const string& s)",
            "void print(const string& s) { }"
          ],
          "explanation": "const reference avoids copying while preventing modification.",
          "xp": 15
        },
        {
          "id": "cpp-4-2-19",
          "type": "code",
          "question": "Initialize a reference with an existing pointer's value.",
          "correctAnswer": [
            "int& ref = *p;",
            "int &ref = *p;"
          ],
          "explanation": "Dereference pointer to get value, then create reference.",
          "xp": 15
        },
        {
          "id": "cpp-4-2-20",
          "type": "code",
          "question": "Return reference to a global variable.",
          "correctAnswer": [
            "int& getGlobal() { return global; }"
          ],
          "explanation": "Function can return reference to global variable.",
          "xp": 15
        },
        {
          "id": "cpp-4-2-21",
          "type": "code",
          "question": "Use a reference to modify array element.",
          "correctAnswer": [
            "int& element = arr[5];\\nelement = 10;",
            "int& ref = arr[i]; ref = value;"
          ],
          "explanation": "Create reference to array element, then modify it.",
          "xp": 15
        },
        {
          "id": "cpp-4-2-22",
          "type": "code",
          "question": "Create a function that returns the larger of two references.",
          "correctAnswer": [
            "int& max(int& a, int& b) {\\n    return (a > b) ? a : b;\\n}"
          ],
          "explanation": "Return reference to the larger value.",
          "xp": 15
        },
        {
          "id": "cpp-4-2-23",
          "type": "code",
          "question": "Use range-based for loop with reference to modify vector.",
          "correctAnswer": [
            "for (int& x : vec) { x *= 2; }"
          ],
          "explanation": "Reference in range-based for allows modification.",
          "xp": 15
        },
        {
          "id": "cpp-4-2-24",
          "type": "code",
          "question": "Create a reference to pointer p (reference to pointer).",
          "correctAnswer": [
            "int*& ref = p;",
            "int *&ref = p;"
          ],
          "explanation": "Reference to pointer: type*& ref = ptr;",
          "xp": 15
        },
        {
          "id": "cpp-4-2-25",
          "type": "code",
          "question": "Pass a vector by reference to a function.",
          "correctAnswer": [
            "void process(vector<int>& v)",
            "void process(vector<int>& v) { }"
          ],
          "explanation": "Pass vector by reference to avoid copying.",
          "xp": 15
        }
      ],
      "lessonText": "# References vs Pointers\n\nBoth references and pointers allow indirect access to variables, but they have important differences.\n\n## References\n\nA reference is an **alias** for an existing variable.\n\n```cpp\nint x = 10;\nint& ref = x;  // ref is now an alias for x\nref = 20;      // This changes x to 20\n```\n\n**Key Characteristics:**\n- Must be initialized when declared\n- Cannot be null\n- Cannot be reseated (always refers to same variable)\n- No separate memory overhead\n- Used with `&` in declaration\n\n## Pointers\n\nA pointer holds a **memory address**.\n\n```cpp\nint x = 10;\nint* p = &x;    // p holds address of x\n*p = 20;        // Dereference to modify x\np = nullptr;    // p can be reseated\n```\n\n**Key Characteristics:**\n- Can be uninitialized (dangerous)\n- Can be null (`nullptr`)\n- Can be reseated to point elsewhere\n- Has its own memory address\n- Used with `*` in declaration\n\n## Comparison\n\n| Feature | Reference | Pointer |\n|---------|-----------|---------|\n| Initialization | Required | Optional |\n| Can be null | No | Yes |\n| Can be reseated | No | Yes |\n| Memory overhead | None | Size of address |\n| Syntax | `&` in declaration | `*` in declaration |\n| Dereference | Implicit (just use name) | Explicit (`*ptr`) |\n\n## When to Use References\n\n✅ **Use references when:**\n- Passing large objects to functions (avoid copy)\n- Function needs to modify parameters\n- Working with operators\n- Return values that can be modified\n\n```cpp\nvoid swap(int& a, int& b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n```\n\n## When to Use Pointers\n\n✅ **Use pointers when:**\n- Need optional values (can be null)\n- Need to change what's pointed to (reseat)\n- Working with arrays\n- Dynamic memory allocation\n- Implementing data structures\n\n```cpp\nint* p = nullptr;  // Optional value\np = new int(42);   // Can reseat\ndelete p;          // Manual management\n```\n\n## Reference Parameters\n\nPass by reference allows functions to modify original values:\n\n```cpp\nvoid increment(int& x) {\n    x++;  // Modifies caller's variable\n}\n\nint num = 5;\nincrement(num);  // num is now 6\n```\n\n## Const References\n\n`const` reference prevents modification while avoiding copy:\n\n```cpp\nvoid print(const string& s) {\n    cout << s;  // Can read but not modify s\n}\n```\n\n**Best Practice:** Use `const T&` for large objects you don't need to modify.\n"
    },
    {
      "id": 21,
      "title": "Pointer Arithmetic",
      "unitTitle": "4. Pointers and References",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-4-3-1",
          "type": "typing",
          "question": "What is pointer arithmetic?",
          "correctAnswer": [
            "mathematical operations on pointers",
            "adding/subtracting integers from pointers"
          ],
          "explanation": "Pointer arithmetic allows you to add or subtract integers from pointers to navigate memory.",
          "xp": 5
        },
        {
          "id": "cpp-4-3-2",
          "type": "typing",
          "question": "When you add 1 to an int pointer, how many bytes does it advance?",
          "correctAnswer": [
            "sizeof(int)",
            "4 bytes",
            "size of int"
          ],
          "explanation": "Pointer arithmetic advances by the size of the pointed-to type.",
          "xp": 5
        },
        {
          "id": "cpp-4-3-3",
          "type": "typing",
          "question": "What does p++ do to a pointer p?",
          "correctAnswer": [
            "moves to next element",
            "increments by sizeof type"
          ],
          "explanation": "p++ advances the pointer to point to the next element of that type.",
          "xp": 5
        },
        {
          "id": "cpp-4-3-4",
          "type": "typing",
          "question": "Can you subtract two pointers of the same type?",
          "correctAnswer": [
            "yes",
            "can subtract"
          ],
          "explanation": "You can subtract two pointers of the same type - the result is the number of elements between them.",
          "xp": 5
        },
        {
          "id": "cpp-4-3-5",
          "type": "typing",
          "question": "What is the result of subtracting two pointers?",
          "correctAnswer": [
            "number of elements between them",
            "difference in elements"
          ],
          "explanation": "Pointer subtraction returns the number of elements between the two pointers.",
          "xp": 5
        },
        {
          "id": "cpp-4-3-6",
          "type": "multiple",
          "question": "What does p + 1 do for an int* pointer?",
          "options": [
            "Moves 4 bytes ahead",
            "Moves 1 byte ahead",
            "Moves to next int",
            "Both A and C"
          ],
          "correctAnswer": [
            3
          ],
          "explanation": "p + 1 moves the pointer to the next int (4 bytes on most systems).",
          "xp": 5
        },
        {
          "id": "cpp-4-3-7",
          "type": "multiple",
          "question": "Can you multiply two pointers?",
          "options": [
            "No",
            "Yes",
            "Only if same type",
            "Only with special operators"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Pointer multiplication is not allowed.",
          "xp": 5
        },
        {
          "id": "cpp-4-3-8",
          "type": "multiple",
          "question": "What is *(p + 1) equivalent to?",
          "options": [
            "p[1]",
            "p + 1",
            "*p + 1",
            "p++"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "*(p + 1) is equivalent to p[1] - both access the next element.",
          "xp": 5
        },
        {
          "id": "cpp-4-3-9",
          "type": "multiple",
          "question": "Can you perform pointer arithmetic on void pointers?",
          "options": [
            "No",
            "Yes",
            "Only with cast",
            "Only in C"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Pointer arithmetic is not allowed on void* because the size is unknown.",
          "xp": 5
        },
        {
          "id": "cpp-4-3-10",
          "type": "multiple",
          "question": "What does p-- do?",
          "options": [
            "Moves to previous element",
            "Decrements pointed value",
            "Invalid",
            "Same as --*p"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "p-- moves the pointer to point to the previous element.",
          "xp": 5
        },
        {
          "id": "cpp-4-3-11",
          "type": "code",
          "question": "Increment pointer p to point to the next int.",
          "correctAnswer": [
            "p++;",
            "++p;"
          ],
          "explanation": "Use ++ to advance pointer to next element.",
          "xp": 15
        },
        {
          "id": "cpp-4-3-12",
          "type": "code",
          "question": "Access the 5th element using pointer arithmetic.",
          "correctAnswer": [
            "*(p + 4)",
            "p[4]"
          ],
          "explanation": "*(p + 4) or p[4] accesses the 5th element (index 4).",
          "xp": 15
        },
        {
          "id": "cpp-4-3-13",
          "type": "code",
          "question": "Calculate difference between two int pointers p1 and p2.",
          "correctAnswer": [
            "int diff = p2 - p1;",
            "ptrdiff_t diff = p2 - p1;"
          ],
          "explanation": "Subtract pointers to get element count between them.",
          "xp": 15
        },
        {
          "id": "cpp-4-3-14",
          "type": "code",
          "question": "Move pointer p back by 2 elements.",
          "correctAnswer": [
            "p -= 2;",
            "p = p - 2;"
          ],
          "explanation": "Subtract integer from pointer to move backward.",
          "xp": 15
        },
        {
          "id": "cpp-4-3-15",
          "type": "code",
          "question": "Print value at index 3 using pointer p pointing to start of array.",
          "correctAnswer": [
            "cout << *(p + 3);",
            "cout << p[3];"
          ],
          "explanation": "Use *(p + 3) or p[3] to access element at index 3.",
          "xp": 15
        },
        {
          "id": "cpp-4-3-16",
          "type": "code",
          "question": "Iterate through array of 5 ints using pointer arithmetic.",
          "correctAnswer": [
            "for (int* p = arr; p < arr + 5; p++) { *p = 0; }",
            "int* p = arr;\\nfor (int i = 0; i < 5; i++) {\\n    *(p + i) = 0;\\n}"
          ],
          "explanation": "Use pointer comparison to iterate through array.",
          "xp": 15
        },
        {
          "id": "cpp-4-3-17",
          "type": "code",
          "question": "Add 3 to pointer p.",
          "correctAnswer": [
            "p += 3;",
            "p = p + 3;"
          ],
          "explanation": "p += 3 advances pointer by 3 elements.",
          "xp": 15
        },
        {
          "id": "cpp-4-3-18",
          "type": "code",
          "question": "Compare two pointers p1 and p2 for equality.",
          "correctAnswer": [
            "if (p1 == p2)",
            "p1 == p2"
          ],
          "explanation": "Pointers can be compared using ==, !=, <, >, <=, >=",
          "xp": 15
        },
        {
          "id": "cpp-4-3-19",
          "type": "code",
          "question": "Find end of array using pointer arithmetic (5 elements).",
          "correctAnswer": [
            "int* end = arr + 5;",
            "int* end = arr + sizeof(arr)/sizeof(arr[0]);"
          ],
          "explanation": "arr + size gives pointer past last element.",
          "xp": 15
        },
        {
          "id": "cpp-4-3-20",
          "type": "code",
          "question": "Access element using p[2] where p points to arr.",
          "correctAnswer": [
            "int value = p[2];",
            "p[2]"
          ],
          "explanation": "Pointer can be used like array with [] operator.",
          "xp": 15
        },
        {
          "id": "cpp-4-3-21",
          "type": "code",
          "question": "Sum all array elements using pointer arithmetic (5 elements).",
          "correctAnswer": [
            "int sum = 0;\\nfor (int* p = arr; p < arr + 5; p++) {\\n    sum += *p;\\n}"
          ],
          "explanation": "Iterate with pointer, dereference each element.",
          "xp": 15
        },
        {
          "id": "cpp-4-3-22",
          "type": "code",
          "question": "Check if pointer p is before pointer end.",
          "correctAnswer": [
            "if (p < end)",
            "p < end"
          ],
          "explanation": "Use < to check if pointer is before another.",
          "xp": 15
        },
        {
          "id": "cpp-4-3-23",
          "type": "code",
          "question": "Decrement pointer p to previous element.",
          "correctAnswer": [
            "p--;",
            "--p;"
          ],
          "explanation": "Use -- to move pointer to previous element.",
          "xp": 15
        },
        {
          "id": "cpp-4-3-24",
          "type": "code",
          "question": "Set value at *(p + 1) to 100.",
          "correctAnswer": [
            "*(p + 1) = 100;",
            "p[1] = 100;"
          ],
          "explanation": "Dereference and assign.",
          "xp": 15
        },
        {
          "id": "cpp-4-3-25",
          "type": "code",
          "question": "Iterate backwards through array using pointer arithmetic.",
          "correctAnswer": [
            "for (int* p = arr + 4; p >= arr; p--) { cout << *p; }",
            "int* end = arr + 4;\\nfor (int* p = end; p >= arr; p--) {\\n    cout << *p << \" \";\\n}"
          ],
          "explanation": "Start at last element, decrement pointer.",
          "xp": 15
        }
      ],
      "lessonText": "# Pointer Arithmetic\n\nPointer arithmetic allows you to perform mathematical operations on pointers to navigate through memory.\n\n## Basic Operations\n\n```cpp\nint arr[5] = {10, 20, 30, 40, 50};\nint* p = arr;  // p points to arr[0]\n\np++;      // p now points to arr[1]\np + 2;    // Points to arr[3]\np - 1;    // Points back to arr[0]\n```\n\n## How It Works\n\nWhen you add or subtract from a pointer, the operation advances by the size of the pointed-to type:\n\n```cpp\nint* p = arr;    // arr = 0x1000\np++;             // p = 0x1004 (4 bytes for int)\n*(p + 2);        // Accesses arr[2] at 0x1008\n```\n\n**Formula:** `new_address = old_address + (offset * sizeof(type))`\n\n## Array-Pointer Equivalence\n\n```cpp\narr[3]   // Array subscript\n*(arr + 3)  // Pointer arithmetic (equivalent)\n```\n\n## Pointer Subtraction\n\n```cpp\nint arr[10] = {0};\nint* p1 = &arr[0];\nint* p2 = &arr[7];\n\nptrdiff_t diff = p2 - p1;  // diff = 7\n```\n\nPointer subtraction returns the **number of elements** between the pointers, not the byte difference.\n\n## Looping with Pointers\n\n```cpp\nint arr[5] = {1, 2, 3, 4, 5};\n\n// Method 1: Pointer arithmetic\nfor (int* p = arr; p < arr + 5; p++) {\n    cout << *p << \" \";\n}\n\n// Method 2: Index notation\nfor (int* p = arr; p < arr + 5; p++) {\n    cout << p[0] << \" \";\n}\n```\n\n## Pointer Comparison\n\nYou can compare pointers using relational operators:\n\n```cpp\nint* p1 = &arr[0];\nint* p2 = &arr[4];\n\nif (p1 < p2)    // true - p1 points to earlier element\nif (p1 == p2)   // false - different addresses\nif (p1 != p2)   // true - different addresses\n```\n\n## Important Rules\n\n✅ **Allowed:**\n- Adding/subtracting integers from pointers\n- Subtracting two pointers of the same type\n- Comparing pointers of the same type\n- Using pointers as arrays with []\n\n❌ **Not Allowed:**\n- Adding two pointers\n- Multiplying pointers\n- Dividing pointers\n- Pointer arithmetic on `void*`\n\n## Common Patterns\n\n**Reverse iteration:**\n```cpp\nfor (int* p = arr + 4; p >= arr; p--) {\n    cout << *p << \" \";\n}\n```\n\n**Find array length with pointers:**\n```cpp\nint arr[] = {1, 2, 3, 4, 5};\nint* begin = arr;\nint* end = arr + 5;  // Pointer past last element\nsize_t len = end - begin;  // len = 5\n```\n"
    },
    {
      "id": 22,
      "title": "const Correctness",
      "unitTitle": "4. Pointers and References",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-4-4-1",
          "question": "What does const mean?",
          "type": "typing",
          "correctAnswer": [
            "cannot be modified",
            "read-only"
          ],
          "explanation": "const means the value cannot be modified after initialization.",
          "xp": 5
        },
        {
          "id": "cpp-4-4-2",
          "question": "What is const int* p?",
          "type": "typing",
          "correctAnswer": [
            "pointer to const int",
            "pointer to constant integer"
          ],
          "explanation": "const int* p is a pointer to a constant integer - you can't modify the value through p.",
          "xp": 5
        },
        {
          "id": "cpp-4-4-3",
          "question": "What is int* const p?",
          "type": "typing",
          "correctAnswer": [
            "const pointer to int",
            "pointer that cannot be reassigned"
          ],
          "explanation": "int* const p is a constant pointer - p itself cannot be changed to point elsewhere.",
          "xp": 5
        },
        {
          "id": "cpp-4-4-4",
          "question": "What does const in function parameters do?",
          "type": "typing",
          "correctAnswer": [
            "prevents modification",
            "read-only parameter"
          ],
          "explanation": "const parameters ensure the function won't modify the passed value.",
          "xp": 5
        },
        {
          "id": "cpp-4-4-5",
          "question": "Why use const references for large objects?",
          "type": "typing",
          "correctAnswer": [
            "avoid copying while preventing modification",
            "efficiency",
            "both"
          ],
          "explanation": "const references avoid copying large objects while preventing modification.",
          "xp": 5
        },
        {
          "id": "cpp-4-4-6",
          "question": "Which pointer declaration allows modifying the pointed value?",
          "options": [
            "int* p",
            "const int* p",
            "int* const p",
            "Both A and C"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "int* p allows modifying the value through the pointer.",
          "xp": 5
        },
        {
          "id": "cpp-4-4-7",
          "question": "Which pointer declaration allows changing what the pointer points to?",
          "options": [
            "int* p",
            "const int* p",
            "int* const p",
            "Both A and B"
          ],
          "correctAnswer": [
            2
          ],
          "explanation": "int* const p allows changing what's pointed to (but not p itself).",
          "xp": 5
        },
        {
          "id": "cpp-4-4-8",
          "question": "Can you modify a const variable?",
          "options": [
            "No",
            "Yes",
            "Only with cast",
            "Only if initialized"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "const variables cannot be modified.",
          "xp": 5
        },
        {
          "id": "cpp-4-4-9",
          "question": "What happens if you try to modify through const int*?",
          "options": [
            "Compilation error",
            "Runtime error",
            "Undefined behavior",
            "Nothing"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "The compiler will prevent modification through const pointers.",
          "xp": 5
        },
        {
          "id": "cpp-4-4-10",
          "question": "Where should const be placed: const int* p vs int* const p?",
          "options": [
            "Before *: value const, After *: pointer const",
            "Opposite",
            "Same meaning",
            "No difference"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Before *: value is const, After *: pointer is const.",
          "xp": 5
        },
        {
          "id": "cpp-4-4-11",
          "type": "code",
          "question": "Declare a pointer to constant int.",
          "correctAnswer": [
            "const int* p;",
            "int const* p;"
          ],
          "explanation": "const int* p prevents modification through the pointer.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-12",
          "type": "code",
          "question": "Declare a constant pointer to int.",
          "correctAnswer": [
            "int* const p = &x;"
          ],
          "explanation": "int* const p must be initialized and cannot be reassigned.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-13",
          "type": "code",
          "question": "Pass a string by const reference.",
          "correctAnswer": [
            "void func(const string& s)",
            "void func(const string& s) { }"
          ],
          "explanation": "const string& avoids copy and prevents modification.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-14",
          "type": "code",
          "question": "Declare a const member function.",
          "correctAnswer": [
            "int getValue() const",
            "int getValue() const { return value; }"
          ],
          "explanation": "const member function promises not to modify member variables.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-15",
          "type": "code",
          "question": "Create a const reference to int x.",
          "correctAnswer": [
            "const int& ref = x;",
            "const int &ref = x;"
          ],
          "explanation": "const reference prevents modification of x through ref.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-16",
          "type": "code",
          "question": "Return const reference from function.",
          "correctAnswer": [
            "const int& getRef() const",
            "const int& getRef() const { return val; }"
          ],
          "explanation": "const reference return prevents modification of returned value.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-17",
          "type": "code",
          "question": "Pass int pointer by const reference.",
          "correctAnswer": [
            "void func(const int*& p)",
            "void func(const int*& p) { }"
          ],
          "explanation": "const reference to pointer prevents modifying the pointer.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-18",
          "type": "code",
          "question": "Pass pointer to const int by value.",
          "correctAnswer": [
            "void func(const int* p)",
            "void func(const int* p) { }"
          ],
          "explanation": "Pointer to const prevents modifying pointed value.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-19",
          "type": "code",
          "question": "Create const int and pointer to it.",
          "correctAnswer": [
            "const int x = 10;\\nconst int* p = &x;",
            "const int x = 10; int const* p = &x;"
          ],
          "explanation": "Use const pointer to point to const value.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-20",
          "type": "code",
          "question": "Declare function that doesn't modify member variables.",
          "correctAnswer": [
            "int get() const",
            "void print() const",
            "int get() const { return value; }"
          ],
          "explanation": "Add const to member function declaration.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-21",
          "type": "code",
          "question": "Pass vector by const reference.",
          "correctAnswer": [
            "void func(const vector<int>& v)",
            "void func(const vector<int>& v) { }"
          ],
          "explanation": "const vector& avoids copy and prevents modification.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-22",
          "type": "code",
          "question": "Create const pointer to constant int.",
          "correctAnswer": [
            "const int* const p = &x;",
            "int const* const p = &x;"
          ],
          "explanation": "Both pointer and value are const.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-23",
          "type": "code",
          "question": "Read through pointer to const int (print value).",
          "correctAnswer": [
            "cout << *p;",
            "cout << *p << endl;"
          ],
          "explanation": "You can read through const pointer, just not write.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-24",
          "type": "code",
          "question": "Pass array by const pointer.",
          "correctAnswer": [
            "void func(const int* arr, int size)",
            "void func(const int* arr, int size) { }"
          ],
          "explanation": "const int* prevents modification of array elements.",
          "xp": 15
        },
        {
          "id": "cpp-4-4-25",
          "type": "code",
          "question": "Declare const member variable and const getter.",
          "correctAnswer": [
            "const int value;\\nint getValue() const { return value; }"
          ],
          "explanation": "const member variable with const getter function.",
          "xp": 15
        }
      ],
      "lessonText": "# const Correctness\n\n`const` is a powerful tool for writing safer, clearer code by making your intentions explicit.\n\n## const Variables\n\n```cpp\nconst int MAX = 100;  // Cannot be modified\nMAX = 200;  // Compilation error!\n```\n\n## Pointers and const\n\n### 1. Pointer to const: `const int* p`\n\nThe value cannot be modified through the pointer.\n\n```cpp\nint x = 10;\nconst int* p = &x;\n\n*p = 20;  // Error: cannot modify\np = &y;   // OK: pointer can be changed\n```\n\n**Memory aid:** \"const on the left protects the value\"\n\n### 2. Const pointer: `int* const p`\n\nThe pointer cannot be changed to point elsewhere.\n\n```cpp\nint x = 10;\nint* const p = &x;  // Must initialize!\n\np = &y;   // Error: cannot reseat pointer\n*p = 20;  // OK: value can be modified\n```\n\n**Memory aid:** \"const on the right protects the pointer\"\n\n### 3. Both: `const int* const p`\n\nNeither the pointer nor the value can be changed.\n\n```cpp\nint x = 10;\nconst int* const p = &x;\n\np = &y;   // Error: cannot reseat\n*p = 20;  // Error: cannot modify\n```\n\n## const in Function Parameters\n\n### const Reference (Best Practice)\n\n```cpp\nvoid print(const string& s) {\n    cout << s;  // Can read\n    // s = \"new\";  // Error: cannot modify\n}\n```\n\n**Benefits:**\n- Avoids copying large objects\n- Guarantees function won't modify\n- Makes intent clear to readers\n\n### const Pointer Parameter\n\n```cpp\nvoid process(const int* arr, int size) {\n    for (int i = 0; i < size; i++) {\n        cout << arr[i];  // Can read\n        // arr[i] = 10;  // Error: cannot modify\n    }\n}\n```\n\n## const Member Functions\n\nMember functions marked `const` promise not to modify the object.\n\n```cpp\nclass Point {\nprivate:\n    int x, y;\npublic:\n    int getX() const {  // Promises not to modify\n        return x;\n    }\n    \n    void move(int dx, int dy) {  // Not const - modifies object\n        x += dx;\n        y += dy;\n    }\n};\n```\n\n**When to use:**\n- Getter functions\n- Functions that only read member variables\n- Functions called on const objects\n\n## const Return Values\n\n```cpp\nconst int& getValue() const {\n    return value;  // Caller cannot modify\n}\n\n// This prevents:\nobj.getValue() = 42;  // Error!\n```\n\n## Best Practices\n\n✅ **DO:**\n- Use `const` for values that shouldn't change\n- Pass large objects by `const T&`\n- Mark getter functions as `const`\n- Use `const` to document intent\n\n❌ **DON'T:**\n- Use `const` when you need to modify\n- Overuse `const` to the point of confusion\n- Cast away const unless absolutely necessary\n\n## Summary Table\n\n| Declaration | Can modify value? | Can change pointer? |\n|-------------|-------------------|---------------------|\n| `int* p` | ✅ Yes | ✅ Yes |\n| `const int* p` | ❌ No | ✅ Yes |\n| `int* const p` | ✅ Yes | ❌ No |\n| `const int* const p` | ❌ No | ❌ No |\n\n## const and Performance\n\n`const` doesn't just prevent bugs - it can help the compiler optimize:\n\n```cpp\nconst int N = 100;\nint arr[N];  // Compiler knows size won't change\n```\n\nThe compiler can make assumptions and optimizations knowing `const` values won't change.\n"
    },
    {
      "id": 23,
      "title": "nullptr and Null Safety",
      "unitTitle": "4. Pointers and References",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-4-5-1",
          "type": "typing",
          "question": "What is nullptr?",
          "correctAnswer": [
            "C++ null pointer value",
            "null pointer literal"
          ],
          "explanation": "nullptr is a null pointer literal introduced in C++11, representing a pointer that points to nothing.",
          "xp": 5
        },
        {
          "id": "cpp-4-5-2",
          "type": "typing",
          "question": "What happens if you dereference a null pointer?",
          "correctAnswer": [
            "crash",
            "segmentation fault",
            "undefined behavior"
          ],
          "explanation": "Dereferencing a null pointer causes undefined behavior, typically a crash.",
          "xp": 5
        },
        {
          "id": "cpp-4-5-3",
          "type": "typing",
          "question": "How do you check if a pointer is null?",
          "correctAnswer": [
            "if (p == nullptr)",
            "if (!p)",
            "if (p == nullptr)"
          ],
          "explanation": "Check if pointer equals nullptr before using it.",
          "xp": 5
        },
        {
          "id": "cpp-4-5-4",
          "type": "typing",
          "question": "Why is nullptr preferred over NULL or 0?",
          "correctAnswer": [
            "type safe",
            "better type checking"
          ],
          "explanation": "nullptr is type-safe and avoids overload resolution issues.",
          "xp": 5
        },
        {
          "id": "cpp-4-5-5",
          "type": "typing",
          "question": "What is the ternary operator?",
          "correctAnswer": [
            "conditional operator",
            "?: operator"
          ],
          "explanation": "The ternary operator (?:) is a conditional expression: condition ? value1 : value2",
          "xp": 5
        },
        {
          "id": "cpp-4-5-6",
          "type": "multiple",
          "question": "What does nullptr evaluate to in boolean context?",
          "options": [
            "false",
            "true",
            "error",
            "depends"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "nullptr evaluates to false in boolean context.",
          "xp": 5
        },
        {
          "id": "cpp-4-5-7",
          "type": "multiple",
          "question": "What is wrong with this: int* p = NULL;",
          "options": [
            "NULL is not type-safe",
            "Nothing",
            "Should be 0",
            "Need to allocate"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "NULL is a macro, nullptr is type-safe and preferred in C++11+.",
          "xp": 5
        },
        {
          "id": "cpp-4-5-8",
          "type": "multiple",
          "question": "What is the ternary operator syntax?",
          "options": [
            "condition ? expr1 : expr2",
            "condition : expr1 ? expr2",
            "if ? then : else",
            "condition then : else"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Ternary operator: condition ? expr_if_true : expr_if_false",
          "xp": 5
        },
        {
          "id": "cpp-4-5-9",
          "type": "multiple",
          "question": "What is dangling pointer?",
          "options": [
            "Pointer to freed memory",
            "Null pointer",
            "Uninitialized pointer",
            "Const pointer"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "A dangling pointer points to memory that has been freed or gone out of scope.",
          "xp": 5
        },
        {
          "id": "cpp-4-5-10",
          "type": "multiple",
          "question": "What is memory leak?",
          "options": [
            "Allocated memory not freed",
            "Null pointer",
            "Stack overflow",
            "Segmentation fault"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Memory leak occurs when allocated memory is not freed.",
          "xp": 5
        },
        {
          "id": "cpp-4-5-11",
          "type": "code",
          "question": "Initialize a pointer to nullptr.",
          "correctAnswer": [
            "int* p = nullptr;",
            "int *p = nullptr;"
          ],
          "explanation": "Always initialize pointers to nullptr to avoid undefined behavior.",
          "xp": 15
        },
        {
          "id": "cpp-4-5-12",
          "type": "code",
          "question": "Check if pointer p is not null before dereferencing.",
          "correctAnswer": [
            "if (p != nullptr)",
            "if (p)",
            "if (p != nullptr) { *p = 10; }"
          ],
          "explanation": "Always check for nullptr before dereferencing.",
          "xp": 15
        },
        {
          "id": "cpp-4-5-13",
          "type": "code",
          "question": "Use ternary operator to return pointer or nullptr.",
          "correctAnswer": [
            "return (valid) ? p : nullptr;",
            "return valid ? p : nullptr;"
          ],
          "explanation": "Ternary: condition ? value_if_true : value_if_false",
          "xp": 15
        },
        {
          "id": "cpp-4-5-14",
          "type": "code",
          "question": "Safely delete a pointer if not null.",
          "correctAnswer": [
            "if (p != nullptr) { delete p; p = nullptr; }",
            "delete p; p = nullptr;"
          ],
          "explanation": "Check for nullptr, delete, then set to nullptr.",
          "xp": 15
        },
        {
          "id": "cpp-4-5-15",
          "type": "code",
          "question": "Pass pointer that can be null (optional parameter).",
          "correctAnswer": [
            "void func(int* p = nullptr)",
            "void func(int* p = nullptr) { }"
          ],
          "explanation": "nullptr default allows optional pointer parameter.",
          "xp": 15
        },
        {
          "id": "cpp-4-5-16",
          "type": "code",
          "question": "Return null pointer from function if condition fails.",
          "correctAnswer": [
            "if (error) return nullptr;",
            "return nullptr;"
          ],
          "explanation": "Return nullptr to indicate failure or no value.",
          "xp": 15
        },
        {
          "id": "cpp-4-5-17",
          "type": "code",
          "question": "Set pointer to null after deleting.",
          "correctAnswer": [
            "delete p; p = nullptr;",
            "delete[] arr; arr = nullptr;"
          ],
          "explanation": "Set pointer to nullptr after deletion to avoid dangling pointer.",
          "xp": 15
        },
        {
          "id": "cpp-4-5-18",
          "type": "code",
          "question": "Use ternary to assign value based on condition.",
          "correctAnswer": [
            "int x = (a > b) ? a : b;",
            "int x = a > b ? a : b;"
          ],
          "explanation": "Ternary operator for conditional assignment.",
          "xp": 15
        },
        {
          "id": "cpp-4-5-19",
          "type": "code",
          "question": "Check pointer validity before use in function.",
          "correctAnswer": [
            "if (p == nullptr) return error;",
            "if (!p) return;"
          ],
          "explanation": "Check for nullptr at start of function.",
          "xp": 15
        },
        {
          "id": "cpp-4-5-20",
          "type": "code",
          "question": "Create function that returns pointer or nullptr.",
          "correctAnswer": [
            "int* find(int key) {\\n    if (found) return &item;\\n    return nullptr;\\n}"
          ],
          "explanation": "Return nullptr when item not found.",
          "xp": 15
        },
        {
          "id": "cpp-4-5-21",
          "type": "code",
          "question": "Initialize all pointers in an array to nullptr.",
          "correctAnswer": [
            "int* arr[5] = {nullptr, nullptr, nullptr, nullptr, nullptr};",
            "int* arr[5] = {};"
          ],
          "explanation": "Initialize array of pointers to nullptr.",
          "xp": 15
        },
        {
          "id": "cpp-4-5-22",
          "type": "code",
          "question": "Use ternary in return statement.",
          "correctAnswer": [
            "return (x > 0) ? &x : nullptr;",
            "return x > 0 ? &x : nullptr;"
          ],
          "explanation": "Ternary can be used in return statements.",
          "xp": 15
        },
        {
          "id": "cpp-4-5-23",
          "type": "code",
          "question": "Check multiple pointers for null before using.",
          "correctAnswer": [
            "if (p1 && p2 && p3)",
            "if (p1 != nullptr && p2 != nullptr)"
          ],
          "explanation": "Check all pointers are valid before using.",
          "xp": 15
        },
        {
          "id": "cpp-4-5-24",
          "type": "code",
          "question": "Reset pointer to nullptr after processing.",
          "correctAnswer": [
            "p = nullptr;"
          ],
          "explanation": "Set pointer to nullptr to clear it.",
          "xp": 15
        },
        {
          "id": "cpp-4-5-25",
          "type": "code",
          "question": "Use nullptr in comparison with pointer.",
          "correctAnswer": [
            "if (p == nullptr)",
            "if (p != nullptr)",
            "p == nullptr"
          ],
          "explanation": "Compare pointer with nullptr to check validity.",
          "xp": 15
        }
      ],
      "lessonText": "# nullptr and Null Safety\n\nNull safety is crucial when working with pointers. A null pointer doesn't point to valid memory and dereferencing it causes crashes.\n\n## nullptr (C++11)\n\n`nullptr` is a null pointer literal, representing a pointer that points to nothing.\n\n```cpp\nint* p = nullptr;  // Modern C++ style\nint* p = NULL;     // Old style (macro)\nint* p = 0;        // Older style\n```\n\n**Why nullptr?**\n- Type-safe (has its own type: `std::nullptr_t`)\n- Better overload resolution\n- Clearer intent\n- No ambiguity with integers\n\n## Checking for Null\n\nAlways check before dereferencing:\n\n```cpp\nint* p = nullptr;\n// ... some code that may or may not set p ...\n\nif (p != nullptr) {  // Check for null\n    *p = 10;         // Safe to dereference\n}\n```\n\n**Boolean context:**\n```cpp\nif (p) {        // true if p is not nullptr\n    // Safe to use\n}\n\nif (!p) {       // true if p is nullptr\n    // Pointer is null\n}\n```\n\n## Ternary Operator\n\nThe ternary operator `?:` is useful for conditional expressions:\n\n```cpp\n// Syntax: condition ? expr_if_true : expr_if_false\n\nint max = (a > b) ? a : b;\n\n// With pointers:\nint* p = (isValid) ? &value : nullptr;\n```\n\n**Common patterns:**\n```cpp\n// Conditional return\nreturn (found) ? &item : nullptr;\n\n// Conditional assignment\nint* p = (ptr1 != nullptr) ? ptr1 : ptr2;\n```\n\n## Null Safety Best Practices\n\n### 1. Always Initialize\n\n```cpp\nint* p = nullptr;  // ✅ Good\nint* p;            // ❌ Bad - uninitialized\n```\n\n### 2. Always Check Before Use\n\n```cpp\nvoid process(int* p) {\n    if (p == nullptr) {  // Check at start\n        return;  // Handle null case\n    }\n    *p = 10;  // Safe to use\n}\n```\n\n### 3. Reset After Deletion\n\n```cpp\ndelete p;\np = nullptr;  // Prevent dangling pointer\n```\n\n### 4. Use nullptr for Optional Parameters\n\n```cpp\nvoid configure(int* p = nullptr) {\n    if (p != nullptr) {\n        *p = 10;\n    }\n    // Works with or without parameter\n}\n```\n\n## Common Pointer Problems\n\n### Dangling Pointer\n\n```cpp\nint* p = new int(10);\ndelete p;\n*p = 20;  // ❌ Undefined behavior - dangling pointer!\n\n// Fix:\ndelete p;\np = nullptr;  // ✅ Reset to prevent use\n```\n\n### Memory Leak\n\n```cpp\nvoid leak() {\n    int* p = new int(10);\n    // ❌ Forgot delete - memory leak!\n}\n\n// Fix:\nvoid noLeak() {\n    int* p = new int(10);\n    delete p;  // ✅ Free memory\n}\n```\n\n### Double Deletion\n\n```cpp\nint* p = new int(10);\ndelete p;\ndelete p;  // ❌ Undefined behavior!\n\n// Fix:\ndelete p;\np = nullptr;  // ✅ Safe to delete nullptr\n```\n\n## Null Pointer vs nullptr\n\n| Feature | nullptr | NULL |\n|---------|----------|------|\n| Type | `std::nullptr_t` | Macro (usually 0) |\n| Type-safe | ✅ Yes | ❌ No |\n| Overload resolution | ✅ Works | ❌ Issues |\n| C++ Standard | C++11+ | Pre-C++11 |\n\n## Summary\n\n✅ **Always:**\n- Initialize pointers to nullptr\n- Check for nullptr before dereferencing\n- Reset to nullptr after deletion\n- Use nullptr (not NULL or 0)\n\n❌ **Never:**\n- Dereference without checking\n- Use uninitialized pointers\n- Forget to delete allocated memory\n- Delete the same pointer twice\n"
    },
    {
      "id": 24,
      "title": "Pointer Pitfalls",
      "unitTitle": "4. Pointers and References",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-4-6-1",
          "type": "typing",
          "question": "What is a dangling pointer?",
          "correctAnswer": [
            "pointer to freed memory",
            "pointer to invalid memory"
          ],
          "explanation": "A dangling pointer points to memory that has been freed or gone out of scope.",
          "xp": 5
        },
        {
          "id": "cpp-4-6-2",
          "type": "typing",
          "question": "What causes memory leak?",
          "correctAnswer": [
            "forgetting to delete allocated memory",
            "not freeing heap memory"
          ],
          "explanation": "Memory leaks occur when heap memory allocated with new is not freed with delete.",
          "xp": 5
        },
        {
          "id": "cpp-4-6-3",
          "type": "typing",
          "question": "What is double deletion?",
          "correctAnswer": [
            "deleting the same memory twice",
            "calling delete twice on same pointer"
          ],
          "explanation": "Double deletion is calling delete twice on the same memory, causing undefined behavior.",
          "xp": 5
        },
        {
          "id": "cpp-4-6-4",
          "type": "typing",
          "question": "What is array-to-pointer decay?",
          "correctAnswer": [
            "array name becomes pointer to first element",
            "implicit conversion"
          ],
          "explanation": "Arrays decay to pointers when passed to functions, losing size information.",
          "xp": 5
        },
        {
          "id": "cpp-4-6-5",
          "type": "typing",
          "question": "What is the rule of three?",
          "correctAnswer": [
            "destructor, copy constructor, copy assignment",
            "manage resources properly"
          ],
          "explanation": "If you need any of destructor, copy constructor, or copy assignment, you need all three.",
          "xp": 5
        },
        {
          "id": "cpp-4-6-6",
          "type": "multiple",
          "question": "Which is safer: stack or heap allocation?",
          "options": [
            "Stack",
            "Heap",
            "Equally safe",
            "Depends on usage"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Stack allocation is safer because it's automatically managed.",
          "xp": 5
        },
        {
          "id": "cpp-4-6-7",
          "type": "multiple",
          "question": "What happens when you return pointer to local variable?",
          "options": [
            "Dangling pointer",
            "Works fine",
            "Compilation error",
            "Copy is made"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Returning pointer to local variable creates dangling pointer.",
          "xp": 5
        },
        {
          "id": "cpp-4-6-8",
          "type": "multiple",
          "question": "What is the best way to avoid memory leaks?",
          "options": [
            "Use smart pointers",
            "Manual delete",
            "Always use stack",
            "Ignore them"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Smart pointers automatically manage memory and prevent leaks.",
          "xp": 5
        },
        {
          "id": "cpp-4-6-9",
          "type": "multiple",
          "question": "What does delete[] do?",
          "options": [
            "Deletes array",
            "Deletes single value",
            "Does nothing",
            "Compiles to same"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "delete[] is for arrays allocated with new[], must match allocation.",
          "xp": 5
        },
        {
          "id": "cpp-4-6-10",
          "type": "multiple",
          "question": "Why prefer references over pointers?",
          "options": [
            "Safer, clearer, no null",
            "Always use pointers",
            "No difference",
            "References slower"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "References are safer (can't be null), clearer, and have no overhead.",
          "xp": 5
        },
        {
          "id": "cpp-4-6-11",
          "type": "code",
          "question": "Fix memory leak by adding delete.",
          "correctAnswer": [
            "int* p = new int(10);\\n// use p\\ndelete p;"
          ],
          "explanation": "Always delete memory allocated with new.",
          "xp": 15
        },
        {
          "id": "cpp-4-6-12",
          "type": "code",
          "question": "Prevent dangling pointer after deletion.",
          "correctAnswer": [
            "delete p; p = nullptr;"
          ],
          "explanation": "Set pointer to nullptr after deletion.",
          "xp": 15
        },
        {
          "id": "cpp-4-6-13",
          "type": "code",
          "question": "Safely delete pointer (check first).",
          "correctAnswer": [
            "if (p != nullptr) { delete p; p = nullptr; }"
          ],
          "explanation": "Check for nullptr before deleting.",
          "xp": 15
        },
        {
          "id": "cpp-4-6-14",
          "type": "code",
          "question": "Use delete[] for array deletion.",
          "correctAnswer": [
            "delete[] arr;"
          ],
          "explanation": "Use delete[] for arrays allocated with new[].",
          "xp": 15
        },
        {
          "id": "cpp-4-6-15",
          "type": "code",
          "question": "Avoid returning pointer to local variable.",
          "correctAnswer": [
            "return &value;",
            "int* getP() { static int x = 10; return &x; }"
          ],
          "explanation": "Return pointer to static or heap, not stack local.",
          "xp": 15
        },
        {
          "id": "cpp-4-6-16",
          "type": "code",
          "question": "Pass array with size to function.",
          "correctAnswer": [
            "void func(int* arr, int size)",
            "void func(int arr[], int size)"
          ],
          "explanation": "Pass size separately since arrays decay to pointers.",
          "xp": 15
        },
        {
          "id": "cpp-4-6-17",
          "type": "code",
          "question": "Use smart pointer instead of raw pointer.",
          "correctAnswer": [
            "unique_ptr<int> p = make_unique<int>(10);",
            "shared_ptr<int> p = make_shared<int>(10);"
          ],
          "explanation": "Smart pointers automatically manage memory.",
          "xp": 15
        },
        {
          "id": "cpp-4-6-18",
          "type": "code",
          "question": "Prevent double deletion in function.",
          "correctAnswer": [
            "delete p; p = nullptr;"
          ],
          "explanation": "Set to nullptr after delete to prevent double delete.",
          "xp": 15
        },
        {
          "id": "cpp-4-6-19",
          "type": "code",
          "question": "Check bounds before array access.",
          "correctAnswer": [
            "if (index >= 0 && index < size) { arr[index] = value; }"
          ],
          "explanation": "Always check array bounds before access.",
          "xp": 15
        },
        {
          "id": "cpp-4-6-20",
          "type": "code",
          "question": "Initialize pointer in member initialization list.",
          "correctAnswer": [
            "Class::Class() : p(new int(10)) {}",
            "Class::Class() : p(nullptr) {}"
          ],
          "explanation": "Initialize member pointer in constructor.",
          "xp": 15
        },
        {
          "id": "cpp-4-6-21",
          "type": "code",
          "question": "Delete member pointer in destructor.",
          "correctAnswer": [
            "~Class() { delete p; }",
            "~Class() { delete[] arr; }"
          ],
          "explanation": "Always release resources in destructor.",
          "xp": 15
        },
        {
          "id": "cpp-4-6-22",
          "type": "code",
          "question": "Implement copy constructor to manage pointer.",
          "correctAnswer": [
            "Class::Class(const Class& other) : p(new int(*other.p)) {}"
          ],
          "explanation": "Deep copy pointer in copy constructor.",
          "xp": 15
        },
        {
          "id": "cpp-4-6-23",
          "type": "code",
          "question": "Implement copy assignment to manage pointer.",
          "correctAnswer": [
            "Class& Class::operator=(const Class& other) {\\n    if (this != &other) {\\n        delete p;\\n        p = new int(*other.p);\\n    }\\n    return *this;\\n}"
          ],
          "explanation": "Handle self-assignment and deep copy in assignment.",
          "xp": 15
        },
        {
          "id": "cpp-4-6-24",
          "type": "code",
          "question": "Use vector instead of array for safety.",
          "correctAnswer": [
            "vector<int> vec = {1, 2, 3};",
            "vector<int> vec(10);"
          ],
          "explanation": "vector manages memory automatically and is safer.",
          "xp": 15
        },
        {
          "id": "cpp-4-6-25",
          "type": "code",
          "question": "Prefer reference over pointer when possible.",
          "correctAnswer": [
            "void func(int& x)",
            "void func(const string& s)"
          ],
          "explanation": "Use reference instead of pointer when null is not needed.",
          "xp": 15
        }
      ],
      "lessonText": "# Pointer Pitfalls\n\nPointers are powerful but dangerous. Understanding common pitfalls helps write safer code.\n\n## 1. Dangling Pointers\n\n**Problem:** Pointer points to freed/invalid memory.\n\n```cpp\nint* p = new int(10);\ndelete p;\n*p = 20;  // ❌ Undefined behavior!\n```\n\n**Solution:** Reset after deletion.\n\n```cpp\ndelete p;\np = nullptr;  // ✅ Safe\n```\n\n## 2. Memory Leaks\n\n**Problem:** Forget to free allocated memory.\n\n```cpp\nvoid leak() {\n    int* p = new int(10);\n    // ❌ Memory never freed!\n}\n```\n\n**Solution:** Always pair new with delete.\n\n```cpp\nvoid noLeak() {\n    int* p = new int(10);\n    delete p;  // ✅ Freed\n}\n```\n\n**Better Solution:** Use smart pointers.\n\n```cpp\nvoid autoManaged() {\n    auto p = make_unique<int>(10);\n    // ✅ Automatically freed\n}\n```\n\n## 3. Double Deletion\n\n**Problem:** Deleting the same memory twice.\n\n```cpp\nint* p = new int(10);\nint* q = p;\ndelete p;\ndelete q;  // ❌ Undefined behavior!\n```\n\n**Solution:** Set to nullptr after delete.\n\n```cpp\ndelete p;\np = nullptr;\ndelete p;  // ✅ Safe (deleting nullptr is OK)\n```\n\n## 4. Returning Pointer to Local\n\n**Problem:** Returning address of stack variable.\n\n```cpp\nint* bad() {\n    int x = 10;\n    return &x;  // ❌ Dangling pointer!\n}\n```\n\n**Solutions:**\n\n```cpp\n// Option 1: Return by value\nint good() {\n    int x = 10;\n    return x;  // ✅ Copy\n}\n\n// Option 2: Use static\nint* better() {\n    static int x = 10;\n    return &x;  // ✅ Static lifetime\n}\n\n// Option 3: Allocate on heap\nint* best() {\n    return new int(10);  // ✅ But caller must delete!\n}\n```\n\n## 5. Array-to-Pointer Decay\n\n**Problem:** Arrays lose size when passed to functions.\n\n```cpp\nvoid print(int arr[]) {  // Same as int* arr\n    // ❌ Cannot get size!\n}\n```\n\n**Solution:** Pass size separately.\n\n```cpp\nvoid print(int arr[], int size) {\n    for (int i = 0; i < size; i++) {\n        cout << arr[i];\n    }\n}\n\n// Better: Use vector\nvoid print(const vector<int>& v) {\n    for (int x : v) {\n        cout << x;\n    }\n}\n```\n\n## 6. Incorrect delete/delete[] Mismatch\n\n**Problem:** Using wrong delete operator.\n\n```cpp\nint* single = new int;\ndelete[] single;  // ❌ Undefined behavior!\n\nint* array = new int[10];\ndelete array;     // ❌ Undefined behavior!\n```\n\n**Solution:** Match allocation with correct deletion.\n\n```cpp\nint* single = new int;\ndelete single;    // ✅ Correct\n\nint* array = new int[10];\ndelete[] array;   // ✅ Correct\n```\n\n## 7. The Rule of Three\n\nIf your class manages a resource (like a raw pointer), you need all three:\n\n```cpp\nclass Buffer {\nprivate:\n    int* data;\n    int size;\npublic:\n    // 1. Destructor\n    ~Buffer() {\n        delete[] data;\n    }\n    \n    // 2. Copy constructor\n    Buffer(const Buffer& other) \n        : size(other.size) {\n        data = new int[size];\n        copy(other.data, other.data + size, data);\n    }\n    \n    // 3. Copy assignment\n    Buffer& operator=(const Buffer& other) {\n        if (this != &other) {\n            delete[] data;\n            size = other.size;\n            data = new int[size];\n            copy(other.data, other.data + size, data);\n        }\n        return *this;\n    }\n};\n```\n\n## 8. Stack Overflow from Large Arrays\n\n**Problem:** Large arrays on stack cause overflow.\n\n```cpp\nint huge[1000000];  // ❌ May cause stack overflow\n```\n\n**Solution:** Use heap or vector.\n\n```cpp\nvector<int> huge(1000000);  // ✅ Heap allocated\n\nint* huge = new int[1000000];  // ✅ Heap allocated\ndelete[] huge;\n```\n\n## Best Practices\n\n✅ **DO:**\n- Initialize pointers to nullptr\n- Always check before dereferencing\n- Pair new with delete\n- Use smart pointers when possible\n- Prefer vector over arrays\n- Follow the Rule of Three/Zero\n\n❌ **DON'T:**\n- Dereference null or uninitialized pointers\n- Forget to delete heap memory\n- Mix delete and delete[]\n- Return pointers to locals\n- Use raw pointers when smart pointers work\n- Assume array size is preserved\n\n## Smart Pointers to the Rescue\n\nModern C++ recommends smart pointers:\n\n```cpp\n#include <memory>\n\n// unique_ptr: Exclusive ownership\nauto p1 = make_unique<int>(10);\n\n// shared_ptr: Shared ownership\nauto p2 = make_shared<int>(10);\nauto p3 = p2;  // Both point to same memory\n\n// weak_ptr: Prevent cycles\nweak_ptr<int> p4(p2);\n```\n\n**Benefits:**\n- Automatic memory management\n- No memory leaks\n- Exception-safe\n- Clear ownership semantics\n"
    }
  ]
};
