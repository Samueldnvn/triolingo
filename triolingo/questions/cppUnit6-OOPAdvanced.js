// C++ Unit 6 - Object-Oriented Programming in C++
// Generated from cppCombined.js

window.cppUnit6 = {
  "unitId": "6",
  "unitName": "6. Object-Oriented Programming in C++",
  "lessons": [
    {
      "id": 30,
      "title": "Structs vs Classes",
      "unitTitle": "6. Object-Oriented Programming in C++",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-6-1-1",
          "type": "typing",
          "question": "What is the main difference between struct and class in C++?",
          "correctAnswer": [
            "default access is public for struct, private for class",
            "access specifiers default differently"
          ],
          "explanation": "The only difference is default access: struct=public, class=private.",
          "xp": 5
        },
        {
          "id": "cpp-6-1-2",
          "type": "typing",
          "question": "What is a struct in C++?",
          "correctAnswer": [
            "user-defined type with members",
            "data structure"
          ],
          "explanation": "Struct is a user-defined type that groups related data members.",
          "xp": 5
        },
        {
          "id": "cpp-6-1-3",
          "type": "typing",
          "question": "When should you use struct vs class?",
          "correctAnswer": [
            "struct for data-only, class for objects with behavior",
            "use struct for POD types"
          ],
          "explanation": "Use struct for data structures (POD), class for objects with methods and invariants.",
          "xp": 5
        },
        {
          "id": "cpp-6-1-4",
          "type": "multiple",
          "question": "Can structs have member functions?",
          "options": [
            "Yes",
            "No",
            "Only in C++",
            "Only with special keyword"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "In C++, structs can have member functions just like classes.",
          "xp": 5
        },
        {
          "id": "cpp-6-1-5",
          "type": "multiple",
          "question": "What is the default inheritance for struct?",
          "options": [
            "public",
            "private",
            "protected",
            "No inheritance"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Structs default to public inheritance, classes to private.",
          "xp": 5
        },
        {
          "id": "cpp-6-1-6",
          "type": "code",
          "question": "Declare a struct Point with x and y members.",
          "correctAnswer": [
            "struct Point { int x; int y; };",
            "struct Point {\\n    int x;\\n    int y;\\n};"
          ],
          "explanation": "Struct declaration with public data members by default.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-7",
          "type": "code",
          "question": "Initialize a struct using brace initialization.",
          "correctAnswer": [
            "Point p = {10, 20};",
            "Point p{10, 20};"
          ],
          "explanation": "Structs can be initialized with braced lists.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-8",
          "type": "code",
          "question": "Access struct member x.",
          "correctAnswer": [
            "p.x",
            "int value = p.x;"
          ],
          "explanation": "Use dot operator to access struct members.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-9",
          "type": "code",
          "question": "Declare a struct with member function.",
          "correctAnswer": [
            "struct Point { int x; int y; void print() { cout << x << y; } };"
          ],
          "explanation": "Structs can have member functions.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-10",
          "type": "code",
          "question": "Declare a class with private data members.",
          "correctAnswer": [
            "class Point { private: int x; int y; };",
            "class Point {\\nprivate:\\n    int x;\\n    int y;\\n};"
          ],
          "explanation": "Classes have private members by default.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-11",
          "type": "code",
          "question": "Make struct member private.",
          "correctAnswer": [
            "struct Point { private: int x; int y; };"
          ],
          "explanation": "Use private: access specifier to make members private even in struct.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-12",
          "type": "code",
          "question": "Make class member public.",
          "correctAnswer": [
            "class Point { public: int x; int y; };"
          ],
          "explanation": "Use public: access specifier to make members public even in class.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-13",
          "type": "code",
          "question": "Create array of structs.",
          "correctAnswer": [
            "Point points[5];",
            "Point points[5] = {{0,0}, {1,1}};"
          ],
          "explanation": "Arrays work with structs just like built-in types.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-14",
          "type": "code",
          "question": "Pass struct by value to function.",
          "correctAnswer": [
            "void printPoint(Point p)",
            "void printPoint(Point p) { cout << p.x << p.y; }"
          ],
          "explanation": "Structs can be passed by value (copies all members).",
          "xp": 15
        },
        {
          "id": "cpp-6-1-15",
          "type": "code",
          "question": "Pass struct by reference to function.",
          "correctAnswer": [
            "void modifyPoint(Point& p)",
            "void modifyPoint(Point& p) { p.x = 10; }"
          ],
          "explanation": "Pass by reference to avoid copy and allow modification.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-16",
          "type": "code",
          "question": "Return struct from function.",
          "correctAnswer": [
            "Point createPoint() { return {10, 20}; }",
            "Point createPoint() { Point p{10, 20}; return p; }"
          ],
          "explanation": "Functions can return structs by value.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-17",
          "type": "code",
          "question": "Compare two structs for equality.",
          "correctAnswer": [
            "if (p1.x == p2.x && p1.y == p2.y)",
            "bool equal = (p1.x == p2.x && p1.y == p2.y);"
          ],
          "explanation": "Structs don't have built-in comparison, compare members manually.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-18",
          "type": "code",
          "question": "Copy struct to another.",
          "correctAnswer": [
            "Point p2 = p1;",
            "p2 = p1;"
          ],
          "explanation": "Structs can be copied with assignment operator.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-19",
          "type": "code",
          "question": "Use pointer to struct member with arrow operator.",
          "correctAnswer": [
            "p->x",
            "int value = p->x;"
          ],
          "explanation": "Use -> operator to access struct members through pointer.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-20",
          "type": "code",
          "question": "Declare struct with default values (C++11).",
          "correctAnswer": [
            "struct Point { int x = 0; int y = 0; };"
          ],
          "explanation": "C++11 allows default member initializers.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-21",
          "type": "code",
          "question": "Initialize struct with designated initializers (C++20).",
          "correctAnswer": [
            "Point p{.x = 10, .y = 20};"
          ],
          "explanation": "C++20 designated initializers specify member names.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-22",
          "type": "code",
          "question": "Create struct inside function and return it.",
          "correctAnswer": [
            "Point create() { Point p{1, 2}; return p; }"
          ],
          "explanation": "Return by value (RVO may optimize).",
          "xp": 15
        },
        {
          "id": "cpp-6-1-23",
          "type": "code",
          "question": "Use struct as map key.",
          "correctAnswer": [
            "map<Point, string> m;",
            "std::map<Point, int> points;"
          ],
          "explanation": "Structs can be used as keys if they have comparison operator.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-24",
          "type": "code",
          "question": "Define struct with constructor.",
          "correctAnswer": [
            "struct Point { Point(int x, int y) : x(x), y(y) {} int x, y; };"
          ],
          "explanation": "Structs can have constructors.",
          "xp": 15
        },
        {
          "id": "cpp-6-1-25",
          "type": "code",
          "question": "Make struct aggregate (no user-defined constructor).",
          "correctAnswer": [
            "struct Point { int x; int y; };",
            "struct Point { int x = 0; int y = 0; };"
          ],
          "explanation": "Aggregate struct allows brace initialization and no constructors.",
          "xp": 15
        }
      ],
      "lessonText": "# Structs vs Classes\n\nIn C++, `struct` and `class` are almost identical, with one key difference.\n\n## The Only Difference\n\n```cpp\nstruct MyStruct {\n    int x;        // public by default\n    void func() {} // public by default\n};\n\nclass MyClass {\n    int x;        // private by default\n    void func() {} // private by default\n};\n```\n\n- **struct:** Default access is **public**\n- **class:** Default access is **private**\n\n## When to Use struct\n\n✅ **Use struct for:**\n- Plain Old Data (POD) types\n- Data structures without invariants\n- Public interfaces\n- C interop\n- Simple data containers\n\n```cpp\nstruct Point {\n    double x, y;\n};\n\nstruct Color {\n    int r, g, b, a;\n};\n\nstruct Vertex {\n    Point position;\n    Color color;\n    Vector2 uv;\n};\n```\n\n## When to Use class\n\n✅ **Use class for:**\n- Objects with behavior\n- Encapsulation needed\n- Invariants to maintain\n- Complex types with constructors/destructors\n\n```cpp\nclass BankAccount {\nprivate:\n    double balance;\n    \npublic:\n    void deposit(double amount) {\n        balance += amount;\n    }\n    \n    void withdraw(double amount) {\n        if (amount <= balance) {\n            balance -= amount;\n        }\n    }\n    \n    double getBalance() const {\n        return balance;\n    }\n};\n```\n\n## Struct Features\n\n### Initialization\n```cpp\nstruct Point {\n    int x, y;\n};\n\n// Brace initialization\nPoint p1 = {10, 20};\nPoint p2{10, 20};\n\n// Default initialization (C++11)\nstruct Point2 {\n    int x = 0;\n    int y = 0;\n};\n\nPoint2 p3;  // {0, 0}\n```\n\n### Member Access\n```cpp\nPoint p = {10, 20};\n\n// Dot operator\np.x = 15;\nint y = p.y;\n\n// Pointer to struct\nPoint* ptr = &p;\nptr->x = 20;  // Arrow operator\n```\n\n### Member Functions\n```cpp\nstruct Point {\n    int x, y;\n    \n    void print() {\n        std::cout << \"(\" << x << \", \" << y << \")\";\n    }\n    \n    void move(int dx, int dy) {\n        x += dx;\n        y += dy;\n    }\n};\n```\n\n### Constructors\n```cpp\nstruct Point {\n    int x, y;\n    \n    // Default constructor\n    Point() : x(0), y(0) {}\n    \n    // Parameterized constructor\n    Point(int x, int y) : x(x), y(y) {}\n    \n    // Copy constructor\n    Point(const Point& other) : x(other.x), y(other.y) {}\n};\n```\n\n## Struct as Function Parameters\n\n```cpp\nstruct Point {\n    int x, y;\n};\n\n// By value (copy)\nvoid printPoint(Point p) {\n    std::cout << p.x << \", \" << p.y;\n}\n\n// By reference (no copy, can modify)\nvoid movePoint(Point& p, int dx, int dy) {\n    p.x += dx;\n    p.y += dy;\n}\n\n// By const reference (no copy, read-only)\nvoid readPoint(const Point& p) {\n    std::cout << p.x << \", \" << p.y;\n}\n```\n\n## Struct Return Values\n\n```cpp\nPoint createPoint(int x, int y) {\n    Point p{x, y};\n    return p;  // Return by value (may use RVO)\n}\n\n// Usage\nPoint p = createPoint(10, 20);\n```\n\n## Struct Arrays\n\n```cpp\nPoint points[5] = {\n    {0, 0},\n    {1, 1},\n    {2, 2},\n    {3, 3},\n    {4, 4}\n};\n\nfor (int i = 0; i < 5; i++) {\n    std::cout << points[i].x << \", \" << points[i].y << \"\\n\";\n}\n```\n\n## Struct Comparison\n\nStructs don't have built-in comparison operators:\n\n```cpp\nstruct Point {\n    int x, y;\n};\n\nPoint p1{1, 2};\nPoint p2{1, 2};\n\n// Manual comparison\nbool equal = (p1.x == p2.x && p1.y == p2.y);\n\n// Or define operator==\nbool operator==(const Point& lhs, const Point& rhs) {\n    return lhs.x == rhs.x && lhs.y == rhs.y;\n}\n\nif (p1 == p2) { }  // Now works\n```\n\n## Struct Inheritance\n\nStructs can inherit (public by default):\n\n```cpp\nstruct Shape {\n    int x, y;\n};\n\nstruct Circle : Shape {\n    int radius;\n};\n\nstruct Rectangle : Shape {\n    int width, height;\n};\n```\n\n## Best Practices\n\n✅ **DO:**\n- Use struct for simple data containers\n- Use class for objects with behavior and invariants\n- Initialize structs with braces\n- Pass large structs by const reference\n\n❌ **DON'T:**\n- Use struct when you need encapsulation\n- Assume structs are always simple\n- Forget that structs can have methods\n- Overuse structs for complex logic\n\n## Struct vs Class Summary\n\n| Feature | struct | class |\n|---------|--------|-------|\n| Default member access | public | private |\n| Default inheritance | public | private |\n| Can have methods | ✅ Yes | ✅ Yes |\n| Can have constructors | ✅ Yes | ✅ Yes |\n| Can have destructors | ✅ Yes | ✅ Yes |\n| Can inherit | ✅ Yes | ✅ Yes |\n| Use case | Data containers | Objects with behavior |\n"
    },
    {
      "id": 31,
      "title": "Encapsulation and Access Specifiers",
      "unitTitle": "6. Object-Oriented Programming in C++",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-6-2-1",
          "type": "typing",
          "question": "What is encapsulation?",
          "correctAnswer": [
            "hiding implementation details",
            "bundling data and methods"
          ],
          "explanation": "Encapsulation hides implementation and exposes only necessary interface.",
          "xp": 5
        },
        {
          "id": "cpp-6-2-2",
          "type": "typing",
          "question": "What are the three access specifiers?",
          "correctAnswer": [
            "public, private, protected"
          ],
          "explanation": "Public: accessible everywhere. Private: only class. Protected: class and derived.",
          "xp": 5
        },
        {
          "id": "cpp-6-2-3",
          "type": "typing",
          "question": "What is the default access for class members?",
          "correctAnswer": [
            "private"
          ],
          "explanation": "Class members are private by default.",
          "xp": 5
        },
        {
          "id": "cpp-6-2-4",
          "type": "multiple",
          "question": "What access specifier allows derived classes to access?",
          "options": [
            "protected",
            "private",
            "public",
            "internal"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Protected allows class and derived class access.",
          "xp": 5
        },
        {
          "id": "cpp-6-2-5",
          "type": "multiple",
          "question": "Can private members be accessed from outside the class?",
          "options": [
            "No",
            "Yes",
            "Only with friend",
            "Only if static"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Private members are only accessible within the class.",
          "xp": 5
        },
        {
          "id": "cpp-6-2-6",
          "type": "code",
          "question": "Create class with private member variable.",
          "correctAnswer": [
            "class MyClass { private: int x; };"
          ],
          "explanation": "Use private: specifier for private members.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-7",
          "type": "code",
          "question": "Add public getter for private member x.",
          "correctAnswer": [
            "class MyClass { private: int x; public: int getX() { return x; } };"
          ],
          "explanation": "Public getter provides read access to private member.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-8",
          "type": "code",
          "question": "Add public setter for private member x.",
          "correctAnswer": [
            "void setX(int val) { x = val; }"
          ],
          "explanation": "Public setter provides write access to private member.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-9",
          "type": "code",
          "question": "Create class with multiple access specifiers.",
          "correctAnswer": [
            "class MyClass { public: int a; private: int b; protected: int c; };"
          ],
          "explanation": "Access specifiers can be used multiple times.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-10",
          "type": "code",
          "question": "Create friend function to access private members.",
          "correctAnswer": [
            "class MyClass { private: int x; friend void friendFunc(MyClass& obj); };",
            "friend void friendFunc(MyClass& obj) { obj.x = 10; }"
          ],
          "explanation": "friend function can access private members.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-11",
          "type": "code",
          "question": "Create friend class.",
          "correctAnswer": [
            "class MyClass { private: int x; friend class FriendClass; };"
          ],
          "explanation": "Friend class can access all private members.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-12",
          "type": "code",
          "question": "Make method private.",
          "correctAnswer": [
            "class MyClass { private: void helper(); };"
          ],
          "explanation": "Use private: specifier before method declaration.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-13",
          "type": "code",
          "question": "Make method protected.",
          "correctAnswer": [
            "class MyClass { protected: void helper(); };"
          ],
          "explanation": "Protected methods accessible in derived classes.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-14",
          "type": "code",
          "question": "Create class with const public member.",
          "correctAnswer": [
            "class MyClass { public: const int MAX = 100; };"
          ],
          "explanation": "const public member cannot be modified.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-15",
          "type": "code",
          "question": "Create static private member.",
          "correctAnswer": [
            "class MyClass { private: static int count; };"
          ],
          "explanation": "Static member shared across all instances.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-16",
          "type": "code",
          "question": "Create class with read-only property.",
          "correctAnswer": [
            "class MyClass { private: int _x; public: int getX() const { return _x; } };"
          ],
          "explanation": "const getter provides read-only access.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-17",
          "type": "code",
          "question": "Create class with validation in setter.",
          "correctAnswer": [
            "void setX(int val) { if (val >= 0) x = val; }"
          ],
          "explanation": "Setters can validate input before assigning.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-18",
          "type": "code",
          "question": "Create class with constructor that sets private member.",
          "correctAnswer": [
            "class MyClass { private: int x; public: MyClass(int val) : x(val) {} };"
          ],
          "explanation": "Constructor initializes private members.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-19",
          "type": "code",
          "question": "Create class with mutable private member.",
          "correctAnswer": [
            "class MyClass { private: mutable int cache; public: int get() const { return cache; } };"
          ],
          "explanation": "mutable can be modified even in const methods.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-20",
          "type": "code",
          "question": "Create class with public static method.",
          "correctAnswer": [
            "class MyClass { public: static int getCount() { return count; } };"
          ],
          "explanation": "Static methods don't require object instance.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-21",
          "type": "code",
          "question": "Access protected member from derived class.",
          "correctAnswer": [
            "class Derived : public Base { public: void use() { protectedMember = 10; } };"
          ],
          "explanation": "Derived classes can access protected members.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-22",
          "type": "code",
          "question": "Create class with private nested class.",
          "correctAnswer": [
            "class Outer { private: class Inner {}; };"
          ],
          "explanation": "Nested class can have different access.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-23",
          "type": "code",
          "question": "Use using to make private type public.",
          "correctAnswer": [
            "class MyClass { private: using Value = int; };"
          ],
          "explanation": "using declarations can be controlled by access specifiers.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-24",
          "type": "code",
          "question": "Create class with private typedef.",
          "correctAnswer": [
            "class MyClass { private: typedef int ID; };"
          ],
          "explanation": "typedefs can be private.",
          "xp": 15
        },
        {
          "id": "cpp-6-2-25",
          "type": "code",
          "question": "Create class with explicit conversion operator.",
          "correctAnswer": [
            "explicit operator int() const { return value; }"
          ],
          "explanation": "explicit prevents implicit conversions.",
          "xp": 15
        }
      ],
      "lessonText": "# Encapsulation and Access Specifiers\n\nEncapsulation is bundling data and methods that operate on that data, restricting access to internal details.\n\n## Access Specifiers\n\n```cpp\nclass MyClass {\npublic:     // Accessible from anywhere\n    int publicVar;\n    void publicMethod();\n\nprivate:    // Only accessible within class\n    int privateVar;\n    void privateMethod();\n\nprotected:  // Class and derived classes\n    int protectedVar;\n    void protectedMethod();\n};\n```\n\n## Default Access\n\n- **class:** `private`\n- **struct:** `public`\n\n## Public Members\n\n```cpp\nclass BankAccount {\npublic:\n    void deposit(double amount) {\n        balance += amount;\n    }\n    \n    double getBalance() const {\n        return balance;\n    }\n\nprivate:\n    double balance;\n};\n```\n\n## Private Members\n\n```cpp\nclass Rectangle {\nprivate:\n    double width, height;\n    \n    double calculateArea() {\n        return width * height;\n    }\n\npublic:\n    void setDimensions(double w, double h) {\n        if (w > 0 && h > 0) {\n            width = w;\n            height = h;\n        }\n    }\n    \n    double getArea() {\n        return calculateArea();\n    }\n};\n```\n\n## Protected Members\n\n```cpp\nclass Animal {\nprotected:\n    std::string name;\n    \npublic:\n    Animal(const std::string& n) : name(n) {}\n};\n\nclass Dog : public Animal {\npublic:\n    Dog(const std::string& n) : Animal(n) {}\n    \n    void bark() {\n        std::cout << name << \" says Woof!\";  // Can access protected name\n    }\n};\n```\n\n## Getters and Setters\n\n```cpp\nclass Person {\nprivate:\n    std::string name;\n    int age;\n\npublic:\n    // Getter\n    std::string getName() const { return name; }\n    int getAge() const { return age; }\n    \n    // Setter with validation\n    void setAge(int a) {\n        if (a >= 0 && a <= 150) {\n            age = a;\n        }\n    }\n};\n```\n\n## Friend Functions\n\n```cpp\nclass Vector {\nprivate:\n    double x, y;\n    \npublic:\n    Vector(double x, double y) : x(x), y(y) {}\n    \n    // Friend function can access private members\n    friend double dotProduct(const Vector& v1, const Vector& v2);\n};\n\ndouble dotProduct(const Vector& v1, const Vector& v2) {\n    return v1.x * v2.x + v1.y * v2.y;\n}\n```\n\n## Friend Classes\n\n```cpp\nclass Node {\nprivate:\n    int data;\n    \n    friend class BinaryTree;  // BinaryTree can access private members\n};\n\nclass BinaryTree {\n    // Can access Node::data\n};\n```\n\n## Mutable Members\n\n```cpp\nclass Cache {\nprivate:\n    mutable int accessCount;  // Can be modified in const methods\n    int cachedValue;\n    \npublic:\n    int getValue() const {\n        accessCount++;  // OK even though method is const\n        return cachedValue;\n    }\n};\n```\n\n## Best Practices\n\n✅ **DO:**\n- Make data members private\n- Provide getters/setters when needed\n- Use protected for inheritance\n- Keep public interface minimal\n- Validate in setters\n\n❌ **DON'T:**\n- Make everything public\n- Break encapsulation unnecessarily\n- Expose internal representation\n- Skip validation in setters\n"
    },
    {
      "id": 32,
      "title": "Constructors and Destructors",
      "unitTitle": "6. Object-Oriented Programming in C++",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-6-3-1",
          "type": "typing",
          "question": "What is a constructor?",
          "correctAnswer": [
            "special member function that initializes object",
            "initialization function"
          ],
          "explanation": "Constructor initializes object when created.",
          "xp": 5
        },
        {
          "id": "cpp-6-3-2",
          "type": "typing",
          "question": "What is a destructor?",
          "correctAnswer": [
            "special member function that cleans up object",
            "cleanup function"
          ],
          "explanation": "Destructor cleans up when object is destroyed.",
          "xp": 5
        },
        {
          "id": "cpp-6-3-3",
          "type": "typing",
          "question": "When is destructor called?",
          "correctAnswer": [
            "when object goes out of scope",
            "when delete is called"
          ],
          "explanation": "Destructor called automatically when object destroyed.",
          "xp": 5
        },
        {
          "id": "cpp-6-3-4",
          "type": "multiple",
          "question": "Can a constructor have a return type?",
          "options": [
            "No",
            "Yes",
            "Only void",
            "Only bool"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Constructors cannot have return type.",
          "xp": 5
        },
        {
          "id": "cpp-6-3-5",
          "type": "multiple",
          "question": "How many destructors can a class have?",
          "options": [
            "One",
            "Multiple",
            "Zero",
            "Two"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Each class has exactly one destructor.",
          "xp": 5
        },
        {
          "id": "cpp-6-3-6",
          "type": "code",
          "question": "Create default constructor.",
          "correctAnswer": [
            "class MyClass { public: MyClass() {} };",
            "MyClass() = default;"
          ],
          "explanation": "Default constructor takes no parameters.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-7",
          "type": "code",
          "question": "Create parameterized constructor.",
          "correctAnswer": [
            "class MyClass { public: MyClass(int x) : member(x) {} int member; };"
          ],
          "explanation": "Parameterized constructor takes arguments to initialize.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-8",
          "type": "code",
          "question": "Create copy constructor.",
          "correctAnswer": [
            "MyClass(const MyClass& other) : member(other.member) {}"
          ],
          "explanation": "Copy constructor initializes from another object.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-9",
          "type": "code",
          "question": "Create destructor.",
          "correctAnswer": [
            "~MyClass() {}"
          ],
          "explanation": "Destructor name is ~ClassName().",
          "xp": 15
        },
        {
          "id": "cpp-6-3-10",
          "type": "code",
          "question": "Use member initializer list.",
          "correctAnswer": [
            "MyClass(int x) : member(x) {}"
          ],
          "explanation": "Initialize members before constructor body.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-11",
          "type": "code",
          "question": "Delete default constructor.",
          "correctAnswer": [
            "MyClass() = delete;"
          ],
          "explanation": "= delete prevents default constructor.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-12",
          "type": "code",
          "question": "Make constructor explicit.",
          "correctAnswer": [
            "explicit MyClass(int x) : member(x) {}"
          ],
          "explanation": "explicit prevents implicit conversions.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-13",
          "type": "code",
          "question": "Delegate constructor to another.",
          "correctAnswer": [
            "MyClass(int x) : MyClass(x, 0) {}"
          ],
          "explanation": "Delegating constructor calls another constructor.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-14",
          "type": "code",
          "question": "Initialize const member in constructor.",
          "correctAnswer": [
            "class MyClass { public: MyClass(int x) : constMember(x) {} private: const int constMember; };"
          ],
          "explanation": "const members must be initialized in initializer list.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-15",
          "type": "code",
          "question": "Initialize reference member in constructor.",
          "correctAnswer": [
            "MyClass(int& ref) : refMember(ref) {} private: int& refMember;"
          ],
          "explanation": "Reference members must be initialized in initializer list.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-16",
          "type": "code",
          "question": "Create constructor with default parameters.",
          "correctAnswer": [
            "MyClass(int x = 0, int y = 0) : mx(x), my(y) {}"
          ],
          "explanation": "Default parameters make constructor flexible.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-17",
          "type": "code",
          "question": "Initialize array member in constructor.",
          "correctAnswer": [
            "MyClass() : arr{0, 1, 2, 3, 4} {} private: int arr[5];"
          ],
          "explanation": "Array members can be initialized with braces.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-18",
          "type": "code",
          "question": "Create constructor with move semantics.",
          "correctAnswer": [
            "MyClass(MyClass&& other) noexcept : member(std::move(other.member)) {}"
          ],
          "explanation": "Move constructor takes rvalue reference.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-19",
          "type": "code",
          "question": "Call parent class constructor.",
          "correctAnswer": [
            "class Derived : public Base { public: Derived(int x) : Base(x) {} };"
          ],
          "explanation": "Base constructor called in initializer list.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-20",
          "type": "code",
          "question": "Delete heap memory in destructor.",
          "correctAnswer": [
            "~MyClass() { delete ptr; ptr = nullptr; }"
          ],
          "explanation": "Clean up heap allocation in destructor.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-21",
          "type": "code",
          "question": "Delete array in destructor.",
          "correctAnswer": [
            "~MyClass() { delete[] arr; arr = nullptr; }"
          ],
          "explanation": "Use delete[] for array allocations.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-22",
          "type": "code",
          "question": "Use default constructor syntax.",
          "correctAnswer": [
            "MyClass() = default;"
          ],
          "explanation": "= default uses compiler-generated constructor.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-23",
          "type": "code",
          "question": "Make destructor virtual for inheritance.",
          "correctAnswer": [
            "virtual ~MyClass() {}"
          ],
          "explanation": "Virtual destructor ensures proper cleanup in inheritance.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-24",
          "type": "code",
          "question": "Initialize member variable order must match declaration order.",
          "correctAnswer": [
            "class MyClass { int a; int b; public: MyClass() : a(1), b(2) {} };"
          ],
          "explanation": "Members initialized in declaration order, not initializer list order.",
          "xp": 15
        },
        {
          "id": "cpp-6-3-25",
          "type": "code",
          "question": "Create noexcept destructor.",
          "correctAnswer": [
            "~MyClass() noexcept {}"
          ],
          "explanation": "noexcept indicates destructor won't throw.",
          "xp": 15
        }
      ],
      "lessonText": "# Constructors and Destructors\n\nConstructors initialize objects, destructors clean them up.\n\n## Constructors\n\n```cpp\nclass MyClass {\npublic:\n    // Default constructor\n    MyClass() : value(0) {}\n    \n    // Parameterized constructor\n    MyClass(int val) : value(val) {}\n    \n    // Copy constructor\n    MyClass(const MyClass& other) : value(other.value) {}\n    \n    // Move constructor (C++11)\n    MyClass(MyClass&& other) noexcept : value(std::move(other.value)) {}\n    \nprivate:\n    int value;\n};\n```\n\n## Member Initializer List\n\n```cpp\nclass Point {\nprivate:\n    double x, y;\n    \npublic:\n    // Using initializer list (preferred)\n    Point(double x, double y) : x(x), y(y) {}\n    \n    // Using assignment body (less efficient for some types)\n    Point(double x, double y) {\n        this->x = x;\n        this->y = y;\n    }\n};\n```\n\n**Why initializer lists?**\n- Required for const/reference members\n- More efficient for non-trivial types\n- Member initialization order is declaration order\n\n## Destructors\n\n```cpp\nclass Resource {\nprivate:\n    int* data;\n    \npublic:\n    Resource(size_t size) {\n        data = new int[size];\n    }\n    \n    ~Resource() {\n        delete[] data;  // Clean up\n        data = nullptr;\n    }\n};\n```\n\n## Constructor Features\n\n### Default Constructor\n```cpp\nclass MyClass {\npublic:\n    MyClass() = default;  // Compiler generates\n};\n```\n\n### Deleted Constructor\n```cpp\nclass MyClass {\npublic:\n    MyClass() = delete;  // Cannot create default instance\n};\n```\n\n### Explicit Constructor\n```cpp\nclass MyClass {\npublic:\n    explicit MyClass(int x) : value(x) {}  // Prevent implicit conversion\n};\n```\n\n### Constructor with Default Parameters\n```cpp\nclass MyClass {\npublic:\n    MyClass(int x = 0, int y = 0) : mx(x), my(y) {}\n};\n```\n\n### Delegating Constructor (C++11)\n```cpp\nclass MyClass {\npublic:\n    MyClass(int x) : MyClass(x, 0) {}  // Calls other constructor\n    \nprivate:\n    MyClass(int x, int y) : mx(x), my(y) {}\n};\n```\n\n## Virtual Destructors\n\n```cpp\nclass Base {\npublic:\n    virtual ~Base() {}  // Virtual for proper polymorphic cleanup\n};\n\nclass Derived : public Base {\npublic:\n    ~Derived() {}\n};\n```\n\n## Rule of Three/Five\n\nIf you need any of:\n- Destructor\n- Copy constructor\n- Copy assignment\n\nYou probably need all three (and in C++11: move constructor + move assignment).\n\n```cpp\nclass Resource {\nprivate:\n    int* data;\n    size_t size;\n    \npublic:\n    // Constructor\n    Resource(size_t s) : size(s) {\n        data = new int[size];\n    }\n    \n    // Destructor\n    ~Resource() {\n        delete[] data;\n    }\n    \n    // Copy constructor\n    Resource(const Resource& other) : size(other.size) {\n        data = new int[size];\n        std::copy(other.data, other.data + size, data);\n    }\n    \n    // Copy assignment\n    Resource& operator=(const Resource& other) {\n        if (this != &other) {\n            delete[] data;\n            size = other.size;\n            data = new int[size];\n            std::copy(other.data, other.data + size, data);\n        }\n        return *this;\n    }\n    \n    // Move constructor (C++11)\n    Resource(Resource&& other) noexcept : data(other.data), size(other.size) {\n        other.data = nullptr;\n        other.size = 0;\n    }\n    \n    // Move assignment (C++11)\n    Resource& operator=(Resource&& other) noexcept {\n        if (this != &other) {\n            delete[] data;\n            data = other.data;\n            size = other.size;\n            other.data = nullptr;\n            other.size = 0;\n        }\n        return *this;\n    }\n};\n```\n"
    },
    {
      "id": 33,
      "title": "Member Functions",
      "unitTitle": "6. Object-Oriented Programming in C++",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-6-4-1",
          "type": "typing",
          "question": "What is a member function?",
          "correctAnswer": [
            "function that belongs to class",
            "method"
          ],
          "explanation": "Member function operates on class data.",
          "xp": 5
        },
        {
          "id": "cpp-6-4-2",
          "type": "typing",
          "question": "What is const member function?",
          "correctAnswer": [
            "function that cannot modify object",
            "read-only method"
          ],
          "explanation": "const member function promises not to modify member variables.",
          "xp": 5
        },
        {
          "id": "cpp-6-4-3",
          "type": "typing",
          "question": "What is static member function?",
          "correctAnswer": [
            "function that doesn't require object",
            "class method"
          ],
          "explanation": "Static member functions don't have `this` pointer.",
          "xp": 5
        },
        {
          "id": "cpp-6-4-4",
          "type": "multiple",
          "question": "Can static member function access non-static members?",
          "options": [
            "No",
            "Yes",
            "Only public",
            "Only with this pointer"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Static functions cannot access non-static members.",
          "xp": 5
        },
        {
          "id": "cpp-6-4-5",
          "type": "multiple",
          "question": "What does const at end of function mean?",
          "options": [
            "Cannot modify object",
            "Returns const",
            "Takes const parameter",
            "Const function"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "const qualifier means function cannot modify member variables.",
          "xp": 5
        },
        {
          "id": "cpp-6-4-6",
          "type": "code",
          "question": "Create public member function.",
          "correctAnswer": [
            "class MyClass { public: void myFunc() {} };"
          ],
          "explanation": "Public member function accessible from anywhere.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-7",
          "type": "code",
          "question": "Create const member function.",
          "correctAnswer": [
            "int getValue() const { return value; }"
          ],
          "explanation": "const member function cannot modify object.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-8",
          "type": "code",
          "question": "Create static member function.",
          "correctAnswer": [
            "static void staticFunc() {}",
            "static int getCount() { return count; }"
          ],
          "explanation": "Static member function doesn't need object instance.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-9",
          "type": "code",
          "question": "Use this pointer in member function.",
          "correctAnswer": [
            "void setX(int x) { this->x = x; }"
          ],
          "explanation": "this pointer points to current object.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-10",
          "type": "code",
          "question": "Create member function that returns member variable.",
          "correctAnswer": [
            "int getX() const { return x; }"
          ],
          "explanation": "Getter returns private member value.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-11",
          "type": "code",
          "question": "Create member function that modifies member variable.",
          "correctAnswer": [
            "void setX(int val) { x = val; }"
          ],
          "explanation": "Setter modifies private member value.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-12",
          "type": "code",
          "question": "Call one member function from another.",
          "correctAnswer": [
            "void func1() { func2(); } void func2() {}"
          ],
          "explanation": "Member functions can call other member functions.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-13",
          "type": "code",
          "question": "Define member function outside class.",
          "correctAnswer": [
            "class MyClass { public: void func(); }; void MyClass::func() {}"
          ],
          "explanation": "Use ClassName:: to define outside class.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-14",
          "type": "code",
          "question": "Create inline member function.",
          "correctAnswer": [
            "inline void func() {}",
            "void func() { /* defined in class */ }"
          ],
          "explanation": "Functions defined in class are implicitly inline.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-15",
          "type": "code",
          "question": "Create member function with default parameter.",
          "correctAnswer": [
            "void func(int x = 0) {}"
          ],
          "explanation": "Default parameters work in member functions.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-16",
          "type": "code",
          "question": "Create member function that returns reference.",
          "correctAnswer": [
            "int& getRef() { return value; }"
          ],
          "explanation": "Returning reference allows modification of returned value.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-17",
          "type": "code",
          "question": "Create const member function returning reference.",
          "correctAnswer": [
            "const int& getRef() const { return value; }"
          ],
          "explanation": "const reference prevents modification through returned reference.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-18",
          "type": "code",
          "question": "Create member function taking const reference.",
          "correctAnswer": [
            "void func(const string& s) {}"
          ],
          "explanation": "const reference parameter avoids copy and prevents modification.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-19",
          "type": "code",
          "question": "Override base class member function.",
          "correctAnswer": [
            "class Derived : public Base { public: void func() override {} };"
          ],
          "explanation": "override keyword ensures proper override.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-20",
          "type": "code",
          "question": "Make member function final.",
          "correctAnswer": [
            "void func() final {}",
            "class Base { virtual void func() final {} };"
          ],
          "explanation": "final prevents override in derived classes.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-21",
          "type": "code",
          "question": "Create virtual member function.",
          "correctAnswer": [
            "virtual void func() {}",
            "virtual void func() = 0;"
          ],
          "explanation": "virtual enables polymorphism.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-22",
          "type": "code",
          "question": "Create pure virtual member function.",
          "correctAnswer": [
            "virtual void func() = 0;"
          ],
          "explanation": "Pure virtual makes class abstract.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-23",
          "type": "code",
          "question": "Create member function that returns pointer.",
          "correctAnswer": [
            "int* getPtr() { return &value; }"
          ],
          "explanation": "Returning pointer allows direct access.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-24",
          "type": "code",
          "question": "Create member function with noexcept specifier.",
          "correctAnswer": [
            "void func() noexcept {}"
          ],
          "explanation": "noexcept indicates function won't throw exceptions.",
          "xp": 15
        },
        {
          "id": "cpp-6-4-25",
          "type": "code",
          "question": "Create member function taking lambda parameter.",
          "correctAnswer": [
            "void forEach(function<void(int)> func) { for (int i : vec) func(i); }"
          ],
          "explanation": "Member functions can take function objects.",
          "xp": 15
        }
      ],
      "lessonText": "# Member Functions\n\nMember functions (methods) operate on class data.\n\n## Basic Member Functions\n\n```cpp\nclass MyClass {\nprivate:\n    int value;\n    \npublic:\n    // Basic member function\n    void setValue(int v) {\n        value = v;\n    }\n    \n    // Const member function\n    int getValue() const {\n        return value;  // Cannot modify value here\n    }\n};\n```\n\n## Const Member Functions\n\n```cpp\nclass Point {\nprivate:\n    double x, y;\n    \npublic:\n    // Can modify object\n    void move(double dx, double dy) {\n        x += dx;\n        y += dy;\n    }\n    \n    // Cannot modify object (const)\n    double getX() const {\n        return x;  // Read-only access\n    }\n    \n    double getY() const {\n        return y;\n    }\n    \n    double distance() const {\n        return std::sqrt(x*x + y*y);  // Can compute but not modify\n    }\n};\n```\n\n## Static Member Functions\n\n```cpp\nclass Counter {\nprivate:\n    static int count;\n    \npublic:\n    Counter() {\n        count++;\n    }\n    \n    // Static member function\n    static int getCount() {\n        return count;  // Can only access static members\n    }\n    \n    // Non-static member function\n    int getInstanceCount() const {\n        return Counter::getCount();  // Can call static function\n    }\n};\n\nint Counter::count = 0;\n\n// Usage\nint c = Counter::getCount();  // Call without object\n```\n\n## Defining Functions Outside Class\n\n```cpp\n// Header\nclass MyClass {\npublic:\n    void func();\n    int getValue() const;\n};\n\n// Implementation\nvoid MyClass::func() {\n    // Implementation\n}\n\nint MyClass::getValue() const {\n    return value;\n}\n```\n\n## Inline Functions\n\n```cpp\nclass MyClass {\npublic:\n    // Implicitly inline (defined in class)\n    int getValue() const {\n        return value;\n    }\n};\n\n// Explicitly inline\ninline int MyClass::getValue() const {\n    return value;\n}\n```\n\n## Virtual Functions\n\n```cpp\nclass Shape {\npublic:\n    virtual double area() const = 0;  // Pure virtual\n    virtual void draw() const {\n        std::cout << \"Drawing shape\\n\";\n    }\n};\n\nclass Circle : public Shape {\npublic:\n    double area() const override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() const override {\n        std::cout << \"Drawing circle\\n\";\n    }\n    \nprivate:\n    double radius;\n};\n```\n\n## this Pointer\n\n```cpp\nclass MyClass {\nprivate:\n    int value;\n    \npublic:\n    void setValue(int value) {\n        this->value = value;  // this-> disambiguates\n    }\n    \n    MyClass& setValueAndReturn(int value) {\n        this->value = value;\n        return *this;  // Return reference to current object\n    }\n};\n\n// Chaining\nobj.setValue(10).setValue(20).setValue(30);\n```\n\n## Const Overloading\n\n```cpp\nclass MyClass {\npublic:\n    // Non-const version\n    int& operator[](int index) {\n        return data[index];  // Can modify\n    }\n    \n    // Const version\n    const int& operator[](int index) const {\n        return data[index];  // Cannot modify\n    }\n    \nprivate:\n    int data[10];\n};\n```\n\n## noexcept Member Functions\n\n```cpp\nclass MyClass {\npublic:\n    // Promises not to throw\n    int getValue() const noexcept {\n        return value;\n    }\n    \n    // May throw\n    void riskyOperation();\n};\n```\n"
    },
    {
      "id": 34,
      "title": "this Pointer",
      "unitTitle": "6. Object-Oriented Programming in C++",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-6-5-1",
          "type": "typing",
          "question": "What is this pointer?",
          "correctAnswer": [
            "pointer to current object"
          ],
          "explanation": "this pointer points to current object.",
          "xp": 5
        },
        {
          "id": "cpp-6-5-2",
          "type": "typing",
          "question": "What is the type of this pointer?",
          "correctAnswer": [
            "ClassName*"
          ],
          "explanation": "this is pointer to class type.",
          "xp": 5
        },
        {
          "id": "cpp-6-5-3",
          "type": "typing",
          "question": "Can this pointer be modified?",
          "correctAnswer": [
            "no"
          ],
          "explanation": "this pointer cannot be reassigned.",
          "xp": 5
        },
        {
          "id": "cpp-6-5-4",
          "type": "multiple",
          "question": "Can this pointer be null?",
          "options": [
            "No",
            "Yes"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "this is always valid.",
          "xp": 5
        },
        {
          "id": "cpp-6-5-5",
          "type": "multiple",
          "question": "What type in const member function?",
          "options": [
            "const ClassName*",
            "ClassName*"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "this is const pointer.",
          "xp": 5
        },
        {
          "id": "cpp-6-5-6",
          "type": "code",
          "question": "Use this pointer to access member variable.",
          "correctAnswer": [
            "this->x"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-7",
          "type": "code",
          "question": "Use this pointer to call member function.",
          "correctAnswer": [
            "this->func()"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-8",
          "type": "code",
          "question": "Return pointer to current object.",
          "correctAnswer": [
            "return this;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-9",
          "type": "code",
          "question": "Return reference for chaining.",
          "correctAnswer": [
            "return *this;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-10",
          "type": "code",
          "question": "Compare this pointer with another object.",
          "correctAnswer": [
            "if (this == &other)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-11",
          "type": "code",
          "question": "Pass this pointer to another function.",
          "correctAnswer": [
            "process(this);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-12",
          "type": "code",
          "question": "Use this to resolve name conflict.",
          "correctAnswer": [
            "void setX(int x) { this->x = x; }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-13",
          "type": "code",
          "question": "Chain method calls using this.",
          "correctAnswer": [
            "return *this;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-14",
          "type": "code",
          "question": "Use this in copy assignment operator.",
          "correctAnswer": [
            "if (this != &other)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-15",
          "type": "code",
          "question": "Use this in constructor.",
          "correctAnswer": [
            "this->x = x;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-16",
          "type": "code",
          "question": "Get address of current object.",
          "correctAnswer": [
            "this"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-17",
          "type": "code",
          "question": "Access base class member.",
          "correctAnswer": [
            "Base::func();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-18",
          "type": "code",
          "question": "Use this with same type parameter.",
          "correctAnswer": [
            "void merge(const MyClass& other) { this->x += other.x; }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-19",
          "type": "code",
          "question": "Capture this in lambda.",
          "correctAnswer": [
            "[this]() { this->x = 10; }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-20",
          "type": "code",
          "question": "Member pointer access.",
          "correctAnswer": [
            "(this->*memberPtr)()"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-21",
          "type": "code",
          "question": "Implement operator<<.",
          "correctAnswer": [
            "friend ostream& operator<<(ostream& os, const MyClass& obj)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-22",
          "type": "code",
          "question": "Implement binary operator.",
          "correctAnswer": [
            "MyClass operator+(const MyClass& other) const"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-23",
          "type": "code",
          "question": "Implement comparison operator.",
          "correctAnswer": [
            "bool operator==(const MyClass& other) const"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-24",
          "type": "code",
          "question": "Lambda call member function.",
          "correctAnswer": [
            "[this]() { this->method(); }();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-5-25",
          "type": "code",
          "question": "Callback with this capture.",
          "correctAnswer": [
            "[this](int x) { this->handle(x); }"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# this Pointer\n\nThe `this` pointer points to the current object.\n\n```cpp\nclass MyClass {\npublic:\n    void setX(int x) {\n        this->x = x;  // Use this pointer\n    }\n};\n```\n\n**Key Points:**\n- `this` is available in all non-static member functions\n- Cannot be modified\n- Used to resolve name conflicts\n- Return `*this` for method chaining"
    },
    {
      "id": 35,
      "title": "Operator Overloading",
      "unitTitle": "6. Object-Oriented Programming in C++",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-6-6-1",
          "type": "typing",
          "question": "What is operator overloading?",
          "correctAnswer": [
            "give custom behavior to operators"
          ],
          "explanation": "Operator overloading gives custom meaning.",
          "xp": 5
        },
        {
          "id": "cpp-6-6-2",
          "type": "typing",
          "question": "Can you overload all operators?",
          "correctAnswer": [
            "no"
          ],
          "explanation": "Some operators cannot be overloaded.",
          "xp": 5
        },
        {
          "id": "cpp-6-6-3",
          "type": "typing",
          "question": "What syntax for operator overloading?",
          "correctAnswer": [
            "operator@"
          ],
          "explanation": "Use operator keyword.",
          "xp": 5
        },
        {
          "id": "cpp-6-6-4",
          "type": "multiple",
          "question": "Which operator cannot be overloaded?",
          "options": [
            "::",
            "+",
            "*"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": ":: cannot be overloaded.",
          "xp": 5
        },
        {
          "id": "cpp-6-6-5",
          "type": "multiple",
          "question": "Can you create new operators?",
          "options": [
            "No",
            "Yes"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Cannot create new operators.",
          "xp": 5
        },
        {
          "id": "cpp-6-6-6",
          "type": "code",
          "question": "Overload + operator as member function.",
          "correctAnswer": [
            "MyClass operator+(const MyClass& other) const"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-7",
          "type": "code",
          "question": "Overload == operator.",
          "correctAnswer": [
            "bool operator==(const MyClass& other) const"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-8",
          "type": "code",
          "question": "Overload [] operator.",
          "correctAnswer": [
            "int& operator[](int index)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-9",
          "type": "code",
          "question": "Overload () operator.",
          "correctAnswer": [
            "int operator()(int x, int y) const"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-10",
          "type": "code",
          "question": "Overload << operator.",
          "correctAnswer": [
            "friend ostream& operator<<(ostream& os, const MyClass& obj)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-11",
          "type": "code",
          "question": "Overload >> operator.",
          "correctAnswer": [
            "friend istream& operator>>(istream& is, MyClass& obj)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-12",
          "type": "code",
          "question": "Overload prefix ++ operator.",
          "correctAnswer": [
            "MyClass& operator++()"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-13",
          "type": "code",
          "question": "Overload postfix ++ operator.",
          "correctAnswer": [
            "MyClass operator++(int)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-14",
          "type": "code",
          "question": "Overload = operator.",
          "correctAnswer": [
            "MyClass& operator=(const MyClass& other)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-15",
          "type": "code",
          "question": "Overload += operator.",
          "correctAnswer": [
            "MyClass& operator+=(const MyClass& other)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-16",
          "type": "code",
          "question": "Overload < operator.",
          "correctAnswer": [
            "bool operator<(const MyClass& other) const"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-17",
          "type": "code",
          "question": "Overload ! operator.",
          "correctAnswer": [
            "bool operator!() const"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-18",
          "type": "code",
          "question": "Overload * operator.",
          "correctAnswer": [
            "int& operator*()"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-19",
          "type": "code",
          "question": "Overload -> operator.",
          "correctAnswer": [
            "Type* operator->()"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-20",
          "type": "code",
          "question": "Overload conversion operator to int.",
          "correctAnswer": [
            "operator int() const"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-21",
          "type": "code",
          "question": "Overload new operator.",
          "correctAnswer": [
            "void* operator new(size_t size)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-22",
          "type": "code",
          "question": "Overload delete operator.",
          "correctAnswer": [
            "void operator delete(void* ptr)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-23",
          "type": "code",
          "question": "Overload comma operator.",
          "correctAnswer": [
            "MyClass operator,(const MyClass& other)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-24",
          "type": "code",
          "question": "Overload != using ==.",
          "correctAnswer": [
            "bool operator!=(const MyClass& other) const"
          ],
          "xp": 15
        },
        {
          "id": "cpp-6-6-25",
          "type": "code",
          "question": "Overload >= using <.",
          "correctAnswer": [
            "bool operator>=(const MyClass& other) const"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# Operator Overloading\n\nOperator overloading gives custom behavior to operators.\n\n```cpp\nclass Vector {\npublic:\n    Vector operator+(const Vector& other) const {\n        return Vector{x + other.x, y + other.y};\n    }\n};\n```\n\n**Common Operators:**\n- Arithmetic: +, -, *, /\n- Comparison: ==, !=, <, >\n- Stream: <<, >>\n- Index: []\n- Function call: ()\n\n**Cannot overload:** ::, ., .*, ?:"
    }
  ]
};
