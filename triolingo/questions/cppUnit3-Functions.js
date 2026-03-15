// C++ Unit 3

window.cppUnit3 = {
  "unitId": "3",
  "unitName": "3. Object-Oriented Programming",
  "lessons": [
    {
      "id": 13,
      "title": "Classes and Objects",
      "unitTitle": "3. Object-Oriented Programming",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "lessonText": "# Classes and Objects\n\nClasses are the fundamental building blocks of C++ object-oriented programming. A class is a user-defined data type that encapsulates data (attributes) and functions (methods) that operate on that data.\n\n## Class Definition\n\n```cpp\nclass MyClass {\npublic:\n    // Data members\n    int myNum;\n    string myString;\n};\n```\n\n## Creating Objects\n\n```cpp\nMyClass myObj;\nmyObj.myNum = 15;\nmyObj.myString = \"Hello\";\n```\n\nAn object is an instance of a class.",
      "questions": [
        {
          "id": "cpp-3-1-1",
          "type": "typing",
          "question": "What keyword is used to declare a class in C++?",
          "correctAnswer": [
            "class"
          ],
          "explanation": "The 'class' keyword is used to declare a class definition in C++.",
          "xp": 5
        },
        {
          "id": "cpp-3-1-2",
          "type": "typing",
          "question": "What is an object?",
          "correctAnswer": [
            "instance",
            "instance of a class"
          ],
          "explanation": "An object is an instance of a class.",
          "xp": 5
        },
        {
          "id": "cpp-3-1-3",
          "type": "multiple",
          "question": "Which of the following are components of a class?",
          "options": [
            "Data members",
            "Methods",
            "Class definition",
            "Object creation"
          ],
          "correctAnswer": [
            0,
            1
          ],
          "explanation": "A class contains data members (attributes) and methods (functions).",
          "xp": 5
        },
        {
          "id": "cpp-3-1-4",
          "type": "code",
          "question": "Create a class called 'Student' with a public integer member named 'age'.",
          "correctAnswer": [
            "class Student {\\npublic:\\n    int age;\\n};",
            "class Student{public: int age;};"
          ],
          "explanation": "A class declaration uses the 'class' keyword followed by the class name and braces.",
          "xp": 10
        },
        {
          "id": "cpp-3-1-5",
          "type": "code",
          "question": "Create an object of the Student class and set age to 20.",
          "correctAnswer": [
            "Student s;\\ns.age = 20;",
            "Student student;\\nstudent.age = 20;"
          ],
          "explanation": "First create an object using the class name, then access members using dot notation.",
          "xp": 10
        },
        {
          "id": "cpp-3-1-6",
          "type": "typing",
          "question": "What encapsulation means in OOP?",
          "correctAnswer": [
            "bundling data and methods together",
            "hiding internal details"
          ],
          "explanation": "Encapsulation is the bundling of data and the methods that operate on that data within a single unit (class).",
          "xp": 5
        },
        {
          "id": "cpp-3-1-7",
          "type": "multiple",
          "question": "Which of these are valid when declaring a class?",
          "options": [
            "class MyClass { };",
            "class MyClass { };",
            "class MyClass;",
            "Both A and B"
          ],
          "correctAnswer": [
            3
          ],
          "explanation": "Class declarations must have braces, but can optionally end with a semicolon.",
          "xp": 5
        },
        {
          "id": "cpp-3-1-8",
          "type": "code",
          "question": "Create a class named 'Rectangle' with public double members 'width' and 'height'.",
          "correctAnswer": [
            "class Rectangle {\\npublic:\\n    double width, height;\\n};"
          ],
          "explanation": "Define class with public access and declare member variables.",
          "xp": 10
        },
        {
          "id": "cpp-3-1-9",
          "type": "code",
          "question": "Create two Rectangle objects and set their dimensions to (5, 3) and (10, 7).",
          "correctAnswer": [
            "Rectangle r1, r2;\\nr1.width = 5; r1.height = 3;\\nr2.width = 10; r2.height = 7;"
          ],
          "explanation": "Create objects then access members using dot notation.",
          "xp": 10
        },
        {
          "id": "cpp-3-1-10",
          "type": "multiple",
          "question": "What happens if you access a member of an uninitialized object?",
          "options": [
            "Undefined behavior",
            "Compile error",
            "Runtime error",
            "Nothing"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Accessing uninitialized object members leads to undefined behavior.",
          "xp": 5
        },
        {
          "id": "cpp-3-1-11",
          "type": "code",
          "question": "Write a class 'Point' with x and y coordinates and a method to print them.",
          "correctAnswer": [
            "class Point {\\npublic:\\n    int x, y;\\n    void print() {\\n        cout << x << \",\" << y << endl;\\n    }\\n};"
          ],
          "explanation": "Class with member variables and a member function.",
          "xp": 15
        },
        {
          "id": "cpp-3-1-12",
          "type": "typing",
          "question": "What is a member function?",
          "correctAnswer": [
            "function defined inside a class",
            "method of a class"
          ],
          "explanation": "A member function (method) is a function defined within a class that operates on class data.",
          "xp": 5
        },
        {
          "id": "cpp-3-1-13",
          "type": "code",
          "question": "Create a class 'Book' with title (string) and pages (int) members.",
          "correctAnswer": [
            "class Book {\\npublic:\\n    string title;\\n    int pages;\\n};"
          ],
          "explanation": "Class with string and int member variables.",
          "xp": 10
        },
        {
          "id": "cpp-3-1-14",
          "type": "multiple",
          "question": "How do you access a public member of an object?",
          "options": [
            "Using dot operator (.)",
            "Using arrow operator (->)",
            "Using colon (:)",
            "Both A and B"
          ],
          "correctAnswer": [
            0,
            1
          ],
          "explanation": "Use dot (.) for objects, arrow (->) for pointers to objects.",
          "xp": 5
        },
        {
          "id": "cpp-3-1-15",
          "type": "code",
          "question": "Create a pointer to a Rectangle object and access its width member.",
          "correctAnswer": [
            "Rectangle r;\\nRectangle* ptr = &r;\\nptr->width = 10;"
          ],
          "explanation": "Use & to get address, arrow operator to access via pointer.",
          "xp": 15
        },
        {
          "id": "cpp-3-1-16",
          "type": "typing",
          "question": "What is the default access specifier for class members?",
          "correctAnswer": [
            "private"
          ],
          "explanation": "Class members are private by default. Struct members are public by default.",
          "xp": 5
        },
        {
          "id": "cpp-3-1-17",
          "type": "code",
          "question": "Write a class 'Counter' with a public count variable and increment() method.",
          "correctAnswer": [
            "class Counter {\\npublic:\\n    int count;\\n    void increment() {\\n        count++;\\n    }\\n};"
          ],
          "explanation": "Class with member variable and member function.",
          "xp": 10
        },
        {
          "id": "cpp-3-1-18",
          "type": "multiple",
          "question": "What is the difference between class and struct?",
          "options": [
            "Default access is private for class, public for struct",
            "They are identical",
            "Structs cannot have methods",
            "Classes cannot have public members"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "The only difference is default access: private for class, public for struct.",
          "xp": 5
        },
        {
          "id": "cpp-3-1-19",
          "type": "code",
          "question": "Create an array of 5 Rectangle objects and set the first one's width to 100.",
          "correctAnswer": [
            "Rectangle rects[5];\\nrects[0].width = 100;"
          ],
          "explanation": "Arrays of objects can be declared like any other array.",
          "xp": 15
        },
        {
          "id": "cpp-3-1-20",
          "type": "typing",
          "question": "What is an instance of a class called?",
          "correctAnswer": [
            "object"
          ],
          "explanation": "An object is an instance of a class.",
          "xp": 5
        },
        {
          "id": "cpp-3-1-21",
          "type": "code",
          "question": "Create a class 'Person' with name and age, then create two Person objects.",
          "correctAnswer": [
            "class Person {\\npublic:\\n    string name;\\n    int age;\\n};\\nPerson p1, p2;"
          ],
          "explanation": "Define class then create multiple objects of that class.",
          "xp": 10
        },
        {
          "id": "cpp-3-1-22",
          "type": "multiple",
          "question": "Can you create an object of a class with only private members?",
          "options": [
            "Yes, but can't access members directly",
            "No, it's not allowed",
            "Only if you're a friend",
            "Yes, always"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "You can create objects of classes with private members, but can't access those members directly.",
          "xp": 5
        },
        {
          "id": "cpp-3-1-23",
          "type": "code",
          "question": "Write a class 'Circle' with radius member and getArea() method returning πr².",
          "correctAnswer": [
            "class Circle {\\npublic:\\n    double radius;\\n    double getArea() {\\n        return 3.14159 * radius * radius;\\n    }\\n};"
          ],
          "explanation": "Member function can use class member variables.",
          "xp": 15
        },
        {
          "id": "cpp-3-1-24",
          "type": "typing",
          "question": "What is a data member?",
          "correctAnswer": [
            "variable declared inside a class",
            "member variable of a class"
          ],
          "explanation": "A data member is a variable declared within a class definition.",
          "xp": 5
        },
        {
          "id": "cpp-3-1-25",
          "type": "code",
          "question": "Create a class 'Vector3D' with x, y, z members and a magnitude() method.",
          "correctAnswer": [
            "class Vector3D {\\npublic:\\n    double x, y, z;\\n    double magnitude() {\\n        return sqrt(x*x + y*y + z*z);\\n    }\\n};"
          ],
          "explanation": "Class with member function that uses multiple members.",
          "xp": 15
        }
      ]
    },
    {
      "id": 14,
      "title": "Methods and Access Control",
      "unitTitle": "3. Object-Oriented Programming",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "lessonText": "# Methods and Access Control\n\nMethods are member functions that operate on class data. Access control keywords determine who can access class members.\n\n## Access Specifiers\n\n- `public`: Accessible from outside the class\n- `private`: Accessible only within the class\n- `protected`: Accessible within the class and derived classes\n\n## Example\n\n```cpp\nclass Car {\npublic:\n    void drive() {\n        cout << \"Driving\" << endl;\n    }\nprivate:\n    int speed;\n};\n```\n\n## Constructors\n\nConstructors are special methods that initialize objects:\n\n```cpp\nclass Car {\npublic:\n    Car() {  // Constructor\n        speed = 0;\n    }\n};",
      "questions": [
        {
          "id": "cpp-3-2-1",
          "type": "typing",
          "question": "What are the three access specifiers in C++?",
          "correctAnswer": [
            "public, private, protected",
            "public private protected"
          ],
          "explanation": "The three access specifiers are public, private, and protected.",
          "xp": 5
        },
        {
          "id": "cpp-3-2-2",
          "type": "multiple",
          "question": "Which access specifier allows members to be accessed from outside the class?",
          "options": [
            "public",
            "private",
            "protected",
            "internal"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "The 'public' access specifier allows members to be accessed from outside the class.",
          "xp": 5
        },
        {
          "id": "cpp-3-2-3",
          "type": "multiple",
          "question": "What is the default access specifier for class members?",
          "options": [
            "public",
            "private",
            "protected",
            "none"
          ],
          "correctAnswer": [
            1
          ],
          "explanation": "The default access specifier for class members is 'private'.",
          "xp": 5
        },
        {
          "id": "cpp-3-2-4",
          "type": "typing",
          "question": "What is a constructor?",
          "correctAnswer": [
            "special method that initializes objects",
            "method that creates objects"
          ],
          "explanation": "A constructor is a special member function that initializes objects of a class.",
          "xp": 5
        },
        {
          "id": "cpp-3-2-5",
          "type": "code",
          "question": "Create a class with a public method called 'display' that prints 'Hello'.",
          "correctAnswer": [
            "class MyClass {\\npublic:\\n    void display() {\\n        cout << \"Hello\" << endl;\\n    }\\n};"
          ],
          "explanation": "Methods are defined inside the class using the same syntax as regular functions.",
          "xp": 10
        },
        {
          "id": "cpp-3-2-6",
          "type": "code",
          "question": "Create a class 'BankAccount' with private balance and public deposit(amount) method.",
          "correctAnswer": [
            "class BankAccount {\\nprivate:\\n    double balance;\\npublic:\\n    void deposit(double amount) {\\n        balance += amount;\\n    }\\n};"
          ],
          "explanation": "Private member can only be accessed by member functions.",
          "xp": 15
        },
        {
          "id": "cpp-3-2-7",
          "type": "multiple",
          "question": "What happens if you try to access a private member from outside the class?",
          "options": [
            "Compile error",
            "Runtime error",
            "Undefined behavior",
            "Nothing"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Accessing private members from outside the class causes a compile error.",
          "xp": 5
        },
        {
          "id": "cpp-3-2-8",
          "type": "code",
          "question": "Write a class 'Temperature' with private celsius and public getCelsius(), setCelsius().",
          "correctAnswer": [
            "class Temperature {\\nprivate:\\n    double celsius;\\npublic:\\n    double getCelsius() { return celsius; }\\n    void setCelsius(double c) { celsius = c; }\\n};"
          ],
          "explanation": "Getters and setters provide controlled access to private members.",
          "xp": 15
        },
        {
          "id": "cpp-3-2-9",
          "type": "typing",
          "question": "What is a getter method?",
          "correctAnswer": [
            "method that returns the value of a private member",
            "accessor method"
          ],
          "explanation": "A getter (accessor) is a method that returns the value of a private member.",
          "xp": 5
        },
        {
          "id": "cpp-3-2-10",
          "type": "code",
          "question": "Create a parameterized constructor for Rectangle that takes width and height.",
          "correctAnswer": [
            "class Rectangle {\\npublic:\\n    double width, height;\\n    Rectangle(double w, double h) {\\n        width = w;\\n        height = h;\\n    }\\n};"
          ],
          "explanation": "Constructor with parameters to initialize member variables.",
          "xp": 15
        },
        {
          "id": "cpp-3-2-11",
          "type": "code",
          "question": "Create a Student class with constructor that takes name and age parameters.",
          "correctAnswer": [
            "class Student {\\npublic:\\n    string name;\\n    int age;\\n    Student(string n, int a) {\\n        name = n;\\n        age = a;\\n    }\\n};"
          ],
          "explanation": "Constructor initializes object with given values.",
          "xp": 15
        },
        {
          "id": "cpp-3-2-12",
          "type": "multiple",
          "question": "Can a constructor have a return type?",
          "options": [
            "No",
            "Yes, it returns void",
            "Yes, it returns the object",
            "Yes, it returns int"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Constructors have no return type, not even void.",
          "xp": 5
        },
        {
          "id": "cpp-3-2-13",
          "type": "code",
          "question": "Create a destructor for a class that prints 'Object destroyed'.",
          "correctAnswer": [
            "class MyClass {\\npublic:\\n    ~MyClass() {\\n        cout << \"Object destroyed\" << endl;\\n    }\\n};"
          ],
          "explanation": "Destructor name is ~ClassName, no parameters, called when object is destroyed.",
          "xp": 15
        },
        {
          "id": "cpp-3-2-14",
          "type": "typing",
          "question": "What is a destructor?",
          "correctAnswer": [
            "special method called when object is destroyed",
            "cleans up resources"
          ],
          "explanation": "A destructor is a special member function called when an object is destroyed.",
          "xp": 5
        },
        {
          "id": "cpp-3-2-15",
          "type": "code",
          "question": "Write a class with both default and parameterized constructors.",
          "correctAnswer": [
            "class MyClass {\\npublic:\\n    int value;\\n    MyClass() { value = 0; }\\n    MyClass(int v) { value = v; }\\n};"
          ],
          "explanation": "Multiple constructors with different parameters (constructor overloading).",
          "xp": 15
        },
        {
          "id": "cpp-3-2-16",
          "type": "multiple",
          "question": "What is the 'this' pointer?",
          "options": [
            "Pointer to the current object",
            "Pointer to the parent class",
            "Null pointer",
            "Reference to the object"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "The 'this' pointer is a pointer to the current object instance.",
          "xp": 5
        },
        {
          "id": "cpp-3-2-17",
          "type": "code",
          "question": "Use 'this' pointer in a setter to distinguish between parameter and member.",
          "correctAnswer": [
            "class MyClass {\\npublic:\\n    int value;\\n    void setValue(int value) {\\n        this->value = value;\\n    }\\n};"
          ],
          "explanation": "Use 'this->' to refer to member variable when parameter has same name.",
          "xp": 15
        },
        {
          "id": "cpp-3-2-18",
          "type": "code",
          "question": "Create a static member function that returns a constant value.",
          "correctAnswer": [
            "class MyClass {\\npublic:\\n    static int getValue() {\\n        return 42;\\n    }\\n};"
          ],
          "explanation": "Static member functions use 'static' keyword, don't need object to call.",
          "xp": 15
        },
        {
          "id": "cpp-3-2-19",
          "type": "multiple",
          "question": "Can a static member function access non-static members?",
          "options": [
            "No",
            "Yes",
            "Only if they're public",
            "Only if they're private"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Static member functions cannot access non-static members because they don't have 'this' pointer.",
          "xp": 5
        },
        {
          "id": "cpp-3-2-20",
          "type": "code",
          "question": "Create a const member function that doesn't modify any members.",
          "correctAnswer": [
            "class MyClass {\\npublic:\\n    int getValue() const {\\n        return value;\\n    }\\n};"
          ],
          "explanation": "Const member functions promise not to modify object state.",
          "xp": 15
        },
        {
          "id": "cpp-3-2-21",
          "type": "typing",
          "question": "What does the 'const' keyword after a member function do?",
          "correctAnswer": [
            "promises not to modify object",
            "makes the function constant"
          ],
          "explanation": "A const member function promises not to modify any member variables.",
          "xp": 5
        },
        {
          "id": "cpp-3-2-22",
          "type": "code",
          "question": "Write a class with private members and public getter/setter for each.",
          "correctAnswer": [
            "class Person {\\nprivate:\\n    string name;\\n    int age;\\npublic:\\n    string getName() { return name; }\\n    void setName(string n) { name = n; }\\n    int getAge() { return age; }\\n    void setAge(int a) { age = a; }\\n};"
          ],
          "explanation": "Encapsulation pattern: private data with public accessors.",
          "xp": 15
        },
        {
          "id": "cpp-3-2-23",
          "type": "multiple",
          "question": "What is method overloading?",
          "options": [
            "Multiple methods with same name different parameters",
            "Inheriting methods",
            "Hiding base class methods",
            "Creating virtual methods"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Method overloading is having multiple methods with the same name but different parameters.",
          "xp": 5
        },
        {
          "id": "cpp-3-2-24",
          "type": "code",
          "question": "Create overloaded print() methods that print int and string.",
          "correctAnswer": [
            "class Printer {\\npublic:\\n    void print(int i) {\\n        cout << \"Int: \" << i << endl;\\n    }\\n    void print(string s) {\\n        cout << \"String: \" << s << endl;\\n    }\\n};"
          ],
          "explanation": "Overloading allows same function name with different parameter types.",
          "xp": 15
        },
        {
          "id": "cpp-3-2-25",
          "type": "code",
          "question": "Write a class with a copy constructor that copies all members.",
          "correctAnswer": [
            "class MyClass {\\npublic:\\n    int value;\\n    MyClass(const MyClass& other) {\\n        value = other.value;\\n    }\\n};"
          ],
          "explanation": "Copy constructor takes reference to object of same class and copies its members.",
          "xp": 15
        }
      ]
    },
    {
      "id": 15,
      "title": "Inheritance",
      "unitTitle": "3. Object-Oriented Programming",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "lessonText": "# Inheritance\n\nInheritance allows a class to inherit properties and methods from another class. This promotes code reuse and creates a hierarchical relationship between classes.\n\n## Syntax\n\n```cpp\nclass DerivedClass : accessSpecifier BaseClass {\n    // Class body\n};\n```\n\n## Example\n\n```cpp\nclass Animal {\npublic:\n    void eat() {\n        cout << \"Eating\" << endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() {\n        cout << \"Barking\" << endl;\n    }\n};\n```\n\n## Key Concepts\n\n- **Base Class (Parent):** The class being inherited from\n- **Derived Class (Child):** The class that inherits\n- **Public Inheritance:** Public members of base become public in derived",
      "questions": [
        {
          "id": "cpp-3-3-1",
          "type": "typing",
          "question": "What is inheritance?",
          "correctAnswer": [
            "creating a new class from an existing class",
            "deriving a class from another class"
          ],
          "explanation": "Inheritance is the process of creating a new class from an existing class, inheriting its properties and methods.",
          "xp": 5
        },
        {
          "id": "cpp-3-3-2",
          "type": "multiple",
          "question": "What is the base class called?",
          "options": [
            "Parent class",
            "Child class",
            "Derived class",
            "Superclass"
          ],
          "correctAnswer": [
            0,
            3
          ],
          "explanation": "The base class is also known as the parent class or superclass.",
          "xp": 5
        },
        {
          "id": "cpp-3-3-3",
          "type": "multiple",
          "question": "What does public inheritance do?",
          "options": [
            "Makes public members of base public in derived",
            "Makes all members public",
            "Hides base class members",
            "Makes members private"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Public inheritance makes the public members of the base class public in the derived class.",
          "xp": 5
        },
        {
          "id": "cpp-3-3-4",
          "type": "code",
          "question": "Create a class 'Bird' that inherits publicly from 'Animal'.",
          "correctAnswer": [
            "class Bird : public Animal {\\npublic:\\n    // Bird-specific members\\n};"
          ],
          "explanation": "Use the colon ':' followed by 'public BaseClass' to inherit publicly.",
          "xp": 10
        },
        {
          "id": "cpp-3-3-5",
          "type": "typing",
          "question": "What is a derived class?",
          "correctAnswer": [
            "class that inherits from another class",
            "child class"
          ],
          "explanation": "A derived class (or child class) is a class that inherits properties and methods from a base class.",
          "xp": 5
        },
        {
          "id": "cpp-3-3-6",
          "type": "code",
          "question": "Create a base class 'Vehicle' with speed member, and 'Car' that inherits from it.",
          "correctAnswer": [
            "class Vehicle {\\npublic:\\n    int speed;\\n};\\nclass Car : public Vehicle {\\npublic:\\n    string brand;\\n};"
          ],
          "explanation": "Use colon and 'public' keyword to inherit from base class.",
          "xp": 15
        },
        {
          "id": "cpp-3-3-7",
          "type": "multiple",
          "question": "What members can a derived class access from a private base class?",
          "options": [
            "None",
            "Public and protected",
            "All members",
            "Only protected"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Derived classes cannot access private members of the base class, only public and protected.",
          "xp": 5
        },
        {
          "id": "cpp-3-3-8",
          "type": "code",
          "question": "Create a class 'Cat' inheriting from 'Animal' with a new 'meow()' method.",
          "correctAnswer": [
            "class Cat : public Animal {\\npublic:\\n    void meow() {\\n        cout << \"Meow\" << endl;\\n    }\\n};"
          ],
          "explanation": "Derived class adds new members while inheriting base class members.",
          "xp": 15
        },
        {
          "id": "cpp-3-3-9",
          "type": "code",
          "question": "Create 'FlyingCar' that inherits from both 'Car' and 'Airplane'.",
          "correctAnswer": [
            "class Car { public: void drive(); };\\nclass Airplane { public: void fly(); };\\nclass FlyingCar : public Car, public Airplane {\\n};"
          ],
          "explanation": "Multiple inheritance: list multiple base classes separated by commas.",
          "xp": 15
        },
        {
          "id": "cpp-3-3-10",
          "type": "multiple",
          "question": "What is the diamond problem in multiple inheritance?",
          "options": [
            "Ambiguity when a class inherits from two classes that share a common base",
            "Diamond shape inheritance",
            "Both A and B",
            "Neither"
          ],
          "correctAnswer": [
            2
          ],
          "explanation": "The diamond problem occurs when a class inherits from two classes that share a common base class, causing ambiguity.",
          "xp": 5
        },
        {
          "id": "cpp-3-3-11",
          "type": "code",
          "question": "Create a base class with protected member and derived class that accesses it.",
          "correctAnswer": [
            "class Base {\\nprotected:\\n    int value;\\n};\\nclass Derived : public Base {\\npublic:\\n    void setValue(int v) {\\n        value = v;\\n    }\\n};"
          ],
          "explanation": "Protected members are accessible by derived classes but not from outside.",
          "xp": 15
        },
        {
          "id": "cpp-3-3-12",
          "type": "typing",
          "question": "What is protected inheritance?",
          "correctAnswer": [
            "public and protected members of base become protected in derived",
            "restricts access more than public"
          ],
          "explanation": "Protected inheritance makes public and protected base members protected in derived class.",
          "xp": 5
        },
        {
          "id": "cpp-3-3-13",
          "type": "code",
          "question": "Write a derived class that overrides a base class method.",
          "correctAnswer": [
            "class Base {\\npublic:\\n    virtual void show() {\\n        cout << \"Base\" << endl;\\n    }\\n};\\nclass Derived : public Base {\\npublic:\\n    void show() override {\\n        cout << \"Derived\" << endl;\\n    }\\n};"
          ],
          "explanation": "Derived class can override virtual methods from base class.",
          "xp": 15
        },
        {
          "id": "cpp-3-3-14",
          "type": "multiple",
          "question": "What is method overriding?",
          "options": [
            "Derived class provides new implementation of base class method",
            "Base class method is replaced",
            "Both A and B",
            "Neither"
          ],
          "correctAnswer": [
            2
          ],
          "explanation": "Method overriding is when derived class provides new implementation of base class virtual method.",
          "xp": 5
        },
        {
          "id": "cpp-3-3-15",
          "type": "code",
          "question": "Create 'Student' and 'Teacher' classes both inheriting from 'Person'.",
          "correctAnswer": [
            "class Person {\\npublic:\\n    string name;\\n};\\nclass Student : public Person {\\npublic:\\n    int grade;\\n};\\nclass Teacher : public Person {\\npublic:\\n    string subject;\\n};"
          ],
          "explanation": "Multiple classes can inherit from the same base class.",
          "xp": 15
        },
        {
          "id": "cpp-3-3-16",
          "type": "code",
          "question": "Write a derived class constructor that calls base class constructor.",
          "correctAnswer": [
            "class Base {\\npublic:\\n    Base(int x) {}\\n};\\nclass Derived : public Base {\\npublic:\\n    Derived(int x, int y) : Base(x) {}\\n};"
          ],
          "explanation": "Use initializer list to call base class constructor.",
          "xp": 15
        },
        {
          "id": "cpp-3-3-17",
          "type": "typing",
          "question": "What is an initializer list?",
          "correctAnswer": [
            "syntax to initialize base class and member variables before constructor body",
            "list of initial values"
          ],
          "explanation": "Initializer list initializes base class and member variables before constructor body executes.",
          "xp": 5
        },
        {
          "id": "cpp-3-3-18",
          "type": "code",
          "question": "Create 'ElectricCar' inheriting from 'Car' with batteryCapacity member.",
          "correctAnswer": [
            "class Car {\\npublic:\\n    string brand;\\n};\\nclass ElectricCar : public Car {\\npublic:\\n    int batteryCapacity;\\n};"
          ],
          "explanation": "Derived class extends base class with additional members.",
          "xp": 15
        },
        {
          "id": "cpp-3-3-19",
          "type": "multiple",
          "question": "Can a derived class be a base class for another class?",
          "options": [
            "Yes",
            "No",
            "Only if virtual",
            "Only if public"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "A derived class can serve as a base class for another derived class (multilevel inheritance).",
          "xp": 5
        },
        {
          "id": "cpp-3-3-20",
          "type": "code",
          "question": "Create a 3-level inheritance: Animal -> Mammal -> Dog.",
          "correctAnswer": [
            "class Animal {\\npublic:\\n    void eat();\\n};\\nclass Mammal : public Animal {\\npublic:\\n    void breathe();\\n};\\nclass Dog : public Mammal {\\npublic:\\n    void bark();\\n};"
          ],
          "explanation": "Multilevel inheritance creates a chain of base-derived relationships.",
          "xp": 15
        },
        {
          "id": "cpp-3-3-21",
          "type": "code",
          "question": "Use 'using' to bring a base class method into derived class scope.",
          "correctAnswer": [
            "class Base {\\npublic:\\n    void show();\\n};\\nclass Derived : private Base {\\npublic:\\n    using Base::show;\\n};"
          ],
          "explanation": "Using declaration changes access level of inherited members.",
          "xp": 15
        },
        {
          "id": "cpp-3-3-22",
          "type": "typing",
          "question": "What is virtual inheritance?",
          "correctAnswer": [
            "prevents duplicate base class subobjects in multiple inheritance",
            "solves diamond problem"
          ],
          "explanation": "Virtual inheritance prevents duplicate instances of base class in diamond inheritance.",
          "xp": 5
        },
        {
          "id": "cpp-3-3-23",
          "type": "code",
          "question": "Create 'SmartPhone' that inherits from 'Phone' and 'Computer'.",
          "correctAnswer": [
            "class Phone {\\npublic:\\n    void call();\\n};\\nclass Computer {\\npublic:\\n    void compute();\\n};\\nclass SmartPhone : public Phone, public Computer {\\n};"
          ],
          "explanation": "Multiple inheritance combining functionality from two base classes.",
          "xp": 15
        },
        {
          "id": "cpp-3-3-24",
          "type": "multiple",
          "question": "What happens if you don't specify access specifier in inheritance?",
          "options": [
            "Private for class, public for struct",
            "Public for class, private for struct",
            "Protected",
            "Error"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Default is private inheritance for class, public for struct.",
          "xp": 5
        },
        {
          "id": "cpp-3-3-25",
          "type": "code",
          "question": "Write a function that accepts any object derived from 'Animal' by reference.",
          "correctAnswer": [
            "void feedAnimal(Animal& animal) {\\n    // feed the animal\\n}"
          ],
          "explanation": "Base class reference can refer to any derived class object.",
          "xp": 15
        }
      ]
    },
    {
      "id": 16,
      "title": "Polymorphism",
      "unitTitle": "3. Object-Oriented Programming",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "lessonText": "# Polymorphism\n\nPolymorphism allows objects of different classes to be treated as objects of a common base class. The two main types are compile-time (function overloading) and runtime (virtual functions).\n\n## Virtual Functions\n\n```cpp\nclass Animal {\npublic:\n    virtual void makeSound() {\n        cout << \"Some sound\" << endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void makeSound() override {\n        cout << \"Woof\" << endl;\n    }\n};\n```\n\n## Override Keyword\n\nThe `override` keyword ensures you're actually overriding a virtual function from the base class.\n\n## Pure Virtual Functions\n\n```cpp\nvirtual void makeSound() = 0;  // Pure virtual function\n```\n\nA class with pure virtual functions is an abstract class and cannot be instantiated.",
      "questions": [
        {
          "id": "cpp-3-4-1",
          "type": "typing",
          "question": "What is polymorphism?",
          "correctAnswer": [
            "ability of objects to take different forms",
            "objects of different classes treated as objects of a common base class"
          ],
          "explanation": "Polymorphism allows objects of different classes to be treated as objects of a common base class.",
          "xp": 5
        },
        {
          "id": "cpp-3-4-2",
          "type": "multiple",
          "question": "What keyword is used to declare a virtual function?",
          "options": [
            "virtual",
            "override",
            "abstract",
            "pure"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "The 'virtual' keyword is used to declare a virtual function in C++.",
          "xp": 5
        },
        {
          "id": "cpp-3-4-3",
          "type": "typing",
          "question": "What does the override keyword do?",
          "correctAnswer": [
            "ensures the function overrides a virtual function",
            "marks a function as overriding"
          ],
          "explanation": "The 'override' keyword ensures that a function actually overrides a virtual function from the base class.",
          "xp": 5
        },
        {
          "id": "cpp-3-4-4",
          "type": "multiple",
          "question": "What is a pure virtual function?",
          "options": [
            "A function with no implementation",
            "A function that must be overridden",
            "A virtual function set to zero",
            "All of the above"
          ],
          "correctAnswer": [
            3
          ],
          "explanation": "A pure virtual function is a virtual function with no implementation that must be overridden by derived classes.",
          "xp": 5
        },
        {
          "id": "cpp-3-4-5",
          "type": "code",
          "question": "Create a pure virtual function called 'fly' in a class named 'Bird'.",
          "correctAnswer": [
            "class Bird {\\npublic:\\n    virtual void fly() = 0;\\n};"
          ],
          "explanation": "A pure virtual function is declared with 'virtual' and assigned to zero (= 0).",
          "xp": 10
        },
        {
          "id": "cpp-3-4-6",
          "type": "code",
          "question": "Create an abstract class 'Shape' with pure virtual 'area()' method.",
          "correctAnswer": [
            "class Shape {\\npublic:\\n    virtual double area() = 0;\\n};"
          ],
          "explanation": "Pure virtual function creates abstract class that cannot be instantiated.",
          "xp": 15
        },
        {
          "id": "cpp-3-4-7",
          "type": "multiple",
          "question": "Can you create an object of an abstract class?",
          "options": [
            "No",
            "Yes",
            "Only if it has no pure virtual functions",
            "Only if you're a friend"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Abstract classes with pure virtual functions cannot be instantiated.",
          "xp": 5
        },
        {
          "id": "cpp-3-4-8",
          "type": "code",
          "question": "Create 'Circle' and 'Rectangle' classes inheriting from 'Shape' and implementing area().",
          "correctAnswer": [
            "class Circle : public Shape {\\npublic:\\n    double radius;\\n    double area() override {\\n        return 3.14159 * radius * radius;\\n    }\\n};\\nclass Rectangle : public Shape {\\npublic:\\n    double width, height;\\n    double area() override {\\n        return width * height;\\n    }\\n};"
          ],
          "explanation": "Concrete classes must implement all pure virtual functions.",
          "xp": 15
        },
        {
          "id": "cpp-3-4-9",
          "type": "code",
          "question": "Write a function that calculates area of any Shape object.",
          "correctAnswer": [
            "double calculateArea(Shape& shape) {\\n    return shape.area();\\n}"
          ],
          "explanation": "Polymorphism allows function to work with any derived class through base reference.",
          "xp": 15
        },
        {
          "id": "cpp-3-4-10",
          "type": "multiple",
          "question": "What does virtual enable?",
          "options": [
            "Runtime polymorphism",
            "Compile-time polymorphism",
            "Both A and B",
            "Neither"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Virtual functions enable runtime polymorphism (dynamic binding).",
          "xp": 5
        },
        {
          "id": "cpp-3-4-11",
          "type": "code",
          "question": "Create base class with virtual destructor and derived class.",
          "correctAnswer": [
            "class Base {\\npublic:\\n    virtual ~Base() {}\\n};\\nclass Derived : public Base {\\npublic:\\n    ~Derived() {}\\n};"
          ],
          "explanation": "Virtual destructor ensures proper cleanup when deleting through base pointer.",
          "xp": 15
        },
        {
          "id": "cpp-3-4-12",
          "type": "typing",
          "question": "What is dynamic binding?",
          "correctAnswer": [
            "selecting function to call at runtime based on object type",
            "late binding"
          ],
          "explanation": "Dynamic binding is selecting which function to call at runtime based on actual object type.",
          "xp": 5
        },
        {
          "id": "cpp-3-4-13",
          "type": "code",
          "question": "Use base pointer to call overridden method on derived class object.",
          "correctAnswer": [
            "Shape* shape = new Circle();\\nshape->area();"
          ],
          "explanation": "Base pointer calling virtual method uses derived class implementation.",
          "xp": 15
        },
        {
          "id": "cpp-3-4-14",
          "type": "code",
          "question": "Create a function that prints different sounds for different animals using virtual.",
          "correctAnswer": [
            "class Animal {\\npublic:\\n    virtual void makeSound() = 0;\\n};\\nclass Dog : public Animal {\\npublic:\\n    void makeSound() override {\\n        cout << \"Woof\" << endl;\\n    }\\n};\\nclass Cat : public Animal {\\npublic:\\n    void makeSound() override {\\n        cout << \"Meow\" << endl;\\n    }\\n};\\nvoid playSound(Animal* animal) {\\n    animal->makeSound();\\n}"
          ],
          "explanation": "Virtual functions allow different behavior for different derived classes.",
          "xp": 15
        },
        {
          "id": "cpp-3-4-15",
          "type": "multiple",
          "question": "What is the vtable?",
          "options": [
            "Table of virtual function pointers",
            "Virtual table",
            "Both A and B",
            "Neither"
          ],
          "correctAnswer": [
            2
          ],
          "explanation": "The vtable (virtual table) stores pointers to virtual functions for polymorphic behavior.",
          "xp": 5
        },
        {
          "id": "cpp-3-4-16",
          "type": "code",
          "question": "Write a class with both virtual and non-virtual methods.",
          "correctAnswer": [
            "class MyClass {\\npublic:\\n    virtual void virtualMethod() {}\\n    void normalMethod() {}\\n};"
          ],
          "explanation": "Classes can have both virtual and non-virtual methods.",
          "xp": 15
        },
        {
          "id": "cpp-3-4-17",
          "type": "code",
          "question": "Create 'Drawable' interface with draw() and create 'Circle' implementing it.",
          "correctAnswer": [
            "class Drawable {\\npublic:\\n    virtual void draw() = 0;\\n};\\nclass Circle : public Drawable {\\npublic:\\n    void draw() override {\\n        cout << \"Drawing circle\" << endl;\\n    }\\n};"
          ],
          "explanation": "Interface is abstract class with only pure virtual functions.",
          "xp": 15
        },
        {
          "id": "cpp-3-4-18",
          "type": "typing",
          "question": "What is a vptr?",
          "correctAnswer": [
            "pointer to vtable stored in each object",
            "virtual pointer"
          ],
          "explanation": "The vptr (virtual pointer) is a hidden pointer in each object pointing to its class's vtable.",
          "xp": 5
        },
        {
          "id": "cpp-3-4-19",
          "type": "code",
          "question": "Write code that demonstrates early binding (non-virtual) vs late binding (virtual).",
          "correctAnswer": [
            "class Base {\\npublic:\\n    void early() { cout << \"Early\" << endl; }\\n    virtual void late() { cout << \"Late\" << endl; }\\n};\\nclass Derived : public Base {\\npublic:\\n    void early() { cout << \"Derived Early\" << endl; }\\n    void late() override { cout << \"Derived Late\" << endl; }\\n};\\nBase* b = new Derived();\\nb->early(); // Calls Base::early\\nb->late(); // Calls Derived::late"
          ],
          "explanation": "Non-virtual uses early binding (compile-time), virtual uses late binding (runtime).",
          "xp": 15
        },
        {
          "id": "cpp-3-4-20",
          "type": "multiple",
          "question": "When is the vtable created?",
          "options": [
            "At compile time",
            "At runtime",
            "When first object is created",
            "In the constructor"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "The vtable is created at compile time for each class with virtual functions.",
          "xp": 5
        },
        {
          "id": "cpp-3-4-21",
          "type": "code",
          "question": "Create a template class with virtual methods for type-specific behavior.",
          "correctAnswer": [
            "template<typename T>\\nclass Container {\\npublic:\\n    virtual void add(T item) = 0;\\n    virtual T get(int index) = 0;\\n};"
          ],
          "explanation": "Templates and polymorphism can be combined for flexible designs.",
          "xp": 15
        },
        {
          "id": "cpp-3-4-22",
          "type": "code",
          "question": "Write 'final' keyword to prevent a class from being inherited.",
          "correctAnswer": [
            "class MyClass final {\\n    // class body\\n};"
          ],
          "explanation": "The 'final' keyword prevents a class from being used as a base class.",
          "xp": 15
        },
        {
          "id": "cpp-3-4-23",
          "type": "typing",
          "question": "What does 'override' ensure?",
          "correctAnswer": [
            "the function actually overrides a virtual function",
            "prevents accidental new function creation"
          ],
          "explanation": "The 'override' keyword ensures the function is actually overriding a base class virtual function.",
          "xp": 5
        },
        {
          "id": "cpp-3-4-24",
          "type": "code",
          "question": "Create a class hierarchy with interface segregation using multiple pure virtual classes.",
          "correctAnswer": [
            "class Printable {\\npublic:\\n    virtual void print() = 0;\\n};\\nclass Serializable {\\npublic:\\n    virtual string serialize() = 0;\\n};\\nclass Document : public Printable, public Serializable {\\npublic:\\n    void print() override { /*...*/ }\\n    string serialize() override { /*...*/ }\\n};"
          ],
          "explanation": "Interface segregation principle: use multiple focused interfaces instead of one large one.",
          "xp": 15
        },
        {
          "id": "cpp-3-4-25",
          "type": "code",
          "question": "Write a function using dynamic_cast to safely convert base pointer to derived.",
          "correctAnswer": [
            "Derived* d = dynamic_cast<Derived*>(basePtr);\\nif (d) {\\n    // Use derived pointer\\n} else {\\n    // Not a Derived object\\n}"
          ],
          "explanation": "dynamic_cast safely converts between pointers in inheritance hierarchy.",
          "xp": 15
        }
      ]
    },
    {
      "id": 17,
      "title": "Operator Overloading",
      "unitTitle": "3. Object-Oriented Programming",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "lessonText": "# Operator Overloading\n\nOperator overloading allows you to define custom behavior for operators when used with user-defined types.\n\n## Syntax\n\n```cpp\nreturnType operator op(parameters) {\n    // Implementation\n}\n```\n\n## Example\n\n```cpp\nclass Complex {\npublic:\n    double real, imag;\n    Complex operator+(const Complex& other) {\n        Complex result;\n        result.real = real + other.real;\n        result.imag = imag + other.imag;\n        return result;\n    }\n};\n```\n\n## Common Operators to Overload\n\n- Arithmetic: +, -, *, /, %\n- Comparison: ==, !=, <, >, <=, >=\n- I/O: <<, >>\n- Indexing: []\n- Function call: ()\n- Member access: ->\n\n## Restrictions\n\n- Cannot create new operators\n- Cannot change precedence\n- Cannot change arity (number of operands)\n- Cannot overload operators for built-in types",
      "questions": [
        {
          "id": "cpp-3-5-1",
          "type": "typing",
          "question": "What is operator overloading?",
          "correctAnswer": [
            "defining custom behavior for operators with user-defined types",
            "giving operators special meaning for classes"
          ],
          "explanation": "Operator overloading allows you to define custom behavior for operators when used with user-defined types.",
          "xp": 5
        },
        {
          "id": "cpp-3-5-2",
          "type": "multiple",
          "question": "Which of the following operators can be overloaded?",
          "options": [
            "+",
            "==",
            "[]",
            "All of the above"
          ],
          "correctAnswer": [
            3
          ],
          "explanation": "Most operators in C++ can be overloaded, including +, ==, [], and many others.",
          "xp": 5
        },
        {
          "id": "cpp-3-5-3",
          "type": "multiple",
          "question": "What is a restriction of operator overloading?",
          "options": [
            "Cannot create new operators",
            "Cannot change precedence",
            "Cannot overload for built-in types",
            "All of the above"
          ],
          "correctAnswer": [
            3
          ],
          "explanation": "You cannot create new operators, change precedence, or overload operators for built-in types.",
          "xp": 5
        },
        {
          "id": "cpp-3-5-4",
          "type": "typing",
          "question": "What keyword is used to declare an operator overload?",
          "correctAnswer": [
            "operator"
          ],
          "explanation": "The 'operator' keyword is used to declare an operator overload function.",
          "xp": 5
        },
        {
          "id": "cpp-3-5-5",
          "type": "code",
          "question": "Overload the '+' operator for a class named 'Vector' that adds two vectors.",
          "correctAnswer": [
            "Vector operator+(const Vector& other) {\\n    Vector result;\\n    result.x = x + other.x;\\n    result.y = y + other.y;\\n    return result;\\n}"
          ],
          "explanation": "Use 'operator+' followed by parameters to overload the + operator.",
          "xp": 10
        },
        {
          "id": "cpp-3-5-6",
          "type": "code",
          "question": "Overload the '++' prefix increment operator for a Counter class.",
          "correctAnswer": [
            "class Counter {\\npublic:\\n    int value;\\n    Counter& operator++() {\\n        ++value;\\n        return *this;\\n    }\\n};"
          ],
          "explanation": "Prefix ++ returns reference to modified object.",
          "xp": 15
        },
        {
          "id": "cpp-3-5-7",
          "type": "code",
          "question": "Overload the '++' postfix increment operator for a Counter class.",
          "correctAnswer": [
            "class Counter {\\npublic:\\n    int value;\\n    Counter operator++(int) {\\n        Counter temp = *this;\\n        value++;\\n        return temp;\\n    }\\n};"
          ],
          "explanation": "Postfix ++ uses dummy int parameter, returns old value.",
          "xp": 15
        },
        {
          "id": "cpp-3-5-8",
          "type": "multiple",
          "question": "How does postfix ++ differ from prefix ++ in overloading?",
          "options": [
            "Postfix has dummy int parameter",
            "Prefix has dummy int parameter",
            "They're identical",
            "Neither"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Postfix operators have a dummy int parameter to distinguish from prefix.",
          "xp": 5
        },
        {
          "id": "cpp-3-5-9",
          "type": "code",
          "question": "Overload the '==' operator to compare two Point objects.",
          "correctAnswer": [
            "class Point {\\npublic:\\n    int x, y;\\n    bool operator==(const Point& other) const {\\n        return x == other.x && y == other.y;\\n    }\\n};"
          ],
          "explanation": "Comparison operators return bool and are const member functions.",
          "xp": 15
        },
        {
          "id": "cpp-3-5-10",
          "type": "code",
          "question": "Overload the '!=' operator to compare two Point objects.",
          "correctAnswer": [
            "bool operator!=(const Point& other) const {\\n    return !(*this == other);\\n}"
          ],
          "explanation": "!= can be implemented using == operator.",
          "xp": 15
        },
        {
          "id": "cpp-3-5-11",
          "type": "code",
          "question": "Overload the '<<' operator to output a Point object.",
          "correctAnswer": [
            "class Point {\\npublic:\\n    int x, y;\\n    friend ostream& operator<<(ostream& os, const Point& p) {\\n        os << \"(\" << p.x << \",\" << p.y << \")\";\\n        return os;\\n    }\\n};"
          ],
          "explanation": "Stream operators are friend functions, return reference to stream.",
          "xp": 15
        },
        {
          "id": "cpp-3-5-12",
          "type": "multiple",
          "question": "Why is '<<' operator implemented as a friend function?",
          "options": [
            "Left operand is ostream, not the class",
            "Better performance",
            "Required by language",
            "Convention"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "When left operand is not the class, operator must be implemented as non-member (friend).",
          "xp": 5
        },
        {
          "id": "cpp-3-5-13",
          "type": "code",
          "question": "Overload the '[]' operator to access elements in an Array class.",
          "correctAnswer": [
            "class Array {\\npublic:\\n    int arr[10];\\n    int& operator[](int index) {\\n        return arr[index];\\n    }\\n    const int& operator[](int index) const {\\n        return arr[index];\\n    }\\n};"
          ],
          "explanation": "Index operator returns reference to element, provide const version too.",
          "xp": 15
        },
        {
          "id": "cpp-3-5-14",
          "type": "code",
          "question": "Overload the '->' operator for a smart pointer class.",
          "correctAnswer": [
            "template<typename T>\\nclass SmartPtr {\\nprivate:\\n    T* ptr;\\npublic:\\n    T* operator->() {\\n        return ptr;\\n    }\\n};"
          ],
          "explanation": "Arrow operator returns pointer to member, used for smart pointers.",
          "xp": 15
        },
        {
          "id": "cpp-3-5-15",
          "type": "multiple",
          "question": "Can you overload the 'sizeof' operator?",
          "options": [
            "No",
            "Yes",
            "Only for classes",
            "Only if static"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "sizeof, ::, ., ?: cannot be overloaded.",
          "xp": 5
        },
        {
          "id": "cpp-3-5-16",
          "type": "code",
          "question": "Overload the '-' operator for a Vector class.",
          "correctAnswer": [
            "class Vector {\\npublic:\\n    double x, y;\\n    Vector operator-(const Vector& other) const {\\n        Vector result;\\n        result.x = x - other.x;\\n        result.y = y - other.y;\\n        return result;\\n    }\\n};"
          ],
          "explanation": "Binary operators are similar to +, just change the operation.",
          "xp": 15
        },
        {
          "id": "cpp-3-5-17",
          "type": "code",
          "question": "Overload the '*' operator for scalar multiplication of Vector.",
          "correctAnswer": [
            "Vector operator*(double scalar) const {\\n    Vector result;\\n    result.x = x * scalar;\\n    result.y = y * scalar;\\n    return result;\\n}"
          ],
          "explanation": "Can overload with non-class types for useful operations like scalar multiplication.",
          "xp": 15
        },
        {
          "id": "cpp-3-5-18",
          "type": "code",
          "question": "Overload the '()' function call operator for a Function class.",
          "correctAnswer": [
            "class Function {\\npublic:\\n    double operator()(double x) const {\\n        return x * x; // Example: square function\\n    }\\n};"
          ],
          "explanation": "Function call operator makes objects callable like functions (functors).",
          "xp": 15
        },
        {
          "id": "cpp-3-5-19",
          "type": "multiple",
          "question": "What is a functor?",
          "options": [
            "Object that can be called like a function",
            "Virtual function",
            "Friend function",
            "Static function"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "A functor is an object with overloaded () operator, making it callable like a function.",
          "xp": 5
        },
        {
          "id": "cpp-3-5-20",
          "type": "code",
          "question": "Overload assignment operator '=' for a class with dynamic memory.",
          "correctAnswer": [
            "class MyClass {\\nprivate:\\n    int* data;\\npublic:\\n    MyClass& operator=(const MyClass& other) {\\n        if (this != &other) {\\n            delete[] data;\\n            data = new int[10];\\n            for (int i = 0; i < 10; i++)\\n                data[i] = other.data[i];\\n        }\\n        return *this;\\n    }\\n};"
          ],
          "explanation": "Assignment operator must handle self-assignment and deep copy.",
          "xp": 15
        },
        {
          "id": "cpp-3-5-21",
          "type": "typing",
          "question": "What should assignment operator return?",
          "correctAnswer": [
            "reference to *this",
            "*this",
            "the object itself"
          ],
          "explanation": "Assignment operators should return reference to the assigned object for chaining.",
          "xp": 5
        },
        {
          "id": "cpp-3-5-22",
          "type": "code",
          "question": "Overload the '<' operator to allow sorting of Person objects by age.",
          "correctAnswer": [
            "class Person {\\npublic:\\n    int age;\\n    bool operator<(const Person& other) const {\\n        return age < other.age;\\n    }\\n};"
          ],
          "explanation": "Comparison operators enable using objects with algorithms like sort.",
          "xp": 15
        },
        {
          "id": "cpp-3-5-23",
          "type": "code",
          "question": "Overload the '>' operator using the '<' operator.",
          "correctAnswer": [
            "bool operator>(const Person& other) const {\\n    return other < *this;\\n}"
          ],
          "explanation": "Can implement some operators in terms of others to reduce code duplication.",
          "xp": 15
        },
        {
          "id": "cpp-3-5-24",
          "type": "code",
          "question": "Overload the '+' operator as non-member friend function.",
          "correctAnswer": [
            "class Vector {\\npublic:\\n    double x, y;\\n    friend Vector operator+(const Vector& a, const Vector& b) {\\n        Vector result;\\n        result.x = a.x + b.x;\\n        result.y = a.y + b.y;\\n        return result;\\n    }\\n};"
          ],
          "explanation": "Non-member operators allow implicit conversion on left operand.",
          "xp": 15
        },
        {
          "id": "cpp-3-5-25",
          "type": "code",
          "question": "Overload conversion operator to convert MyString to std::string.",
          "correctAnswer": [
            "class MyString {\\nprivate:\\n    char* str;\\npublic:\\n    operator string() const {\\n        return string(str);\\n    }\\n};"
          ],
          "explanation": "Conversion operator allows implicit conversion to another type.",
          "xp": 15
        }
      ]
    },
    {
      "id": 18,
      "title": "Advanced OOP Concepts",
      "unitTitle": "3. Object-Oriented Programming",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "lessonText": "# Advanced OOP Concepts\n\nC++ provides several advanced object-oriented features beyond basic classes and inheritance.\n\n## Multiple Inheritance\n\n```cpp\nclass Derived : public Base1, public Base2 {\n    // Class body\n};\n```\n\n## Abstract Classes\n\nClasses with at least one pure virtual function cannot be instantiated:\n\n```cpp\nclass Shape {\npublic:\n    virtual double area() = 0;  // Pure virtual\n};\n```\n\n## Interfaces\n\nIn C++, interfaces are typically implemented as abstract classes with only pure virtual functions.\n\n## Friendship\n\nThe `friend` keyword allows a function or class to access private members:\n\n```cpp\nclass MyClass {\n    friend void myFunction();\nprivate:\n    int secret;\n};\n```\n\n## Static Members\n\n```cpp\nclass MyClass {\npublic:\n    static int count;  // Shared by all objects\n};\n```\n\nStatic members are shared across all instances of a class.",
      "questions": [
        {
          "id": "cpp-3-6-1",
          "type": "typing",
          "question": "What is multiple inheritance?",
          "correctAnswer": [
            "a class inheriting from more than one base class",
            "inheriting from multiple classes"
          ],
          "explanation": "Multiple inheritance allows a derived class to inherit from more than one base class.",
          "xp": 5
        },
        {
          "id": "cpp-3-6-2",
          "type": "multiple",
          "question": "What is an abstract class?",
          "options": [
            "A class with pure virtual functions",
            "A class that cannot be instantiated",
            "A base class for other classes",
            "All of the above"
          ],
          "correctAnswer": [
            3
          ],
          "explanation": "An abstract class has at least one pure virtual function and cannot be instantiated directly.",
          "xp": 5
        },
        {
          "id": "cpp-3-6-3",
          "type": "typing",
          "question": "What does the friend keyword do?",
          "correctAnswer": [
            "allows a function or class to access private members",
            "gives access to private members"
          ],
          "explanation": "The 'friend' keyword allows a function or class to access private and protected members of the class.",
          "xp": 5
        },
        {
          "id": "cpp-3-6-4",
          "type": "multiple",
          "question": "What is true about static members?",
          "options": [
            "Shared by all objects of the class",
            "Created once per class",
            "Can be accessed without an object",
            "All of the above"
          ],
          "correctAnswer": [
            3
          ],
          "explanation": "Static members are shared by all objects of a class, created once, and can be accessed without creating an object.",
          "xp": 5
        },
        {
          "id": "cpp-3-6-5",
          "type": "code",
          "question": "Create an abstract class 'Animal' with a pure virtual function 'speak'.",
          "correctAnswer": [
            "class Animal {\\npublic:\\n    virtual void speak() = 0;\\n};"
          ],
          "explanation": "An abstract class is created by adding at least one pure virtual function (assigned to 0).",
          "xp": 10
        },
        {
          "id": "cpp-3-6-6",
          "type": "code",
          "question": "Create a friend function that can access private members of a class.",
          "correctAnswer": [
            "class MyClass {\\nprivate:\\n    int secret;\\n    friend void revealSecret(const MyClass& obj);\\n};\\nvoid revealSecret(const MyClass& obj) {\\n    cout << obj.secret << endl;\\n}"
          ],
          "explanation": "Friend functions declared with 'friend' keyword can access private members.",
          "xp": 15
        },
        {
          "id": "cpp-3-6-7",
          "type": "multiple",
          "question": "What is the main purpose of friend functions?",
          "options": [
            "Allow external functions to access private members",
            "Security",
            "Performance",
            "Memory efficiency"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Friend functions allow external functions or classes to access private members.",
          "xp": 5
        },
        {
          "id": "cpp-3-6-8",
          "type": "code",
          "question": "Make another class a friend to access private members.",
          "correctAnswer": [
            "class MyClass {\\nprivate:\\n    int secret;\\n    friend class FriendClass;\\n};\\nclass FriendClass {\\npublic:\\n    void access(MyClass& obj) {\\n        obj.secret = 42;\\n    }\\n};"
          ],
          "explanation": "Friend classes can access all private and protected members.",
          "xp": 15
        },
        {
          "id": "cpp-3-6-9",
          "type": "code",
          "question": "Create a static member variable and static member function.",
          "correctAnswer": [
            "class MyClass {\\npublic:\\n    static int count;\\n    static int getCount() {\\n        return count;\\n    }\\n};\\nint MyClass::count = 0;"
          ],
          "explanation": "Static members are shared across all instances and accessed with class name.",
          "xp": 15
        },
        {
          "id": "cpp-3-6-10",
          "type": "multiple",
          "question": "Where are static member variables stored?",
          "options": [
            "In static storage (outside objects)",
            "In each object",
            "On the heap",
            "On the stack"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Static member variables are stored once in static storage, not in each object.",
          "xp": 5
        },
        {
          "id": "cpp-3-6-11",
          "type": "code",
          "question": "Create a static counter that increments each time an object is created.",
          "correctAnswer": [
            "class Counter {\\npublic:\\n    static int count;\\n    Counter() {\\n        count++;\\n    }\\n};\\nint Counter::count = 0;"
          ],
          "explanation": "Static counter can track total number of objects created.",
          "xp": 15
        },
        {
          "id": "cpp-3-6-12",
          "type": "code",
          "question": "Create a class with const member and initialize it in constructor initializer list.",
          "correctAnswer": [
            "class MyClass {\\npublic:\\n    const int value;\\n    MyClass(int v) : value(v) {}\\n};"
          ],
          "explanation": "Const members must be initialized in initializer list, not in constructor body.",
          "xp": 15
        },
        {
          "id": "cpp-3-6-13",
          "type": "typing",
          "question": "What is a mutable member?",
          "correctAnswer": [
            "member that can be modified even in const member functions",
            "can be changed in const context"
          ],
          "explanation": "Mutable members can be modified even in const member functions (e.g., for caching).",
          "xp": 5
        },
        {
          "id": "cpp-3-6-14",
          "type": "code",
          "question": "Use mutable for a cache in const member function.",
          "correctAnswer": [
            "class Calculator {\\npublic:\\n    mutable double cachedResult;\\n    double calculate() const {\\n        cachedResult = compute();\\n        return cachedResult;\\n    }\\n};"
          ],
          "explanation": "Mutable allows modifying state in const functions for internal cache/optimization.",
          "xp": 15
        },
        {
          "id": "cpp-3-6-15",
          "type": "code",
          "question": "Create a nested class inside another class.",
          "correctAnswer": [
            "class Outer {\\npublic:\\n    class Inner {\\n    public:\\n        void innerMethod() {}\\n    };\\n};"
          ],
          "explanation": "Nested classes are defined inside another class, have access to private members.",
          "xp": 15
        },
        {
          "id": "cpp-3-6-16",
          "type": "multiple",
          "question": "What is the purpose of a nested class?",
          "options": [
            "Encapsulation and namespace control",
            "Performance",
            "Security",
            "None of the above"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Nested classes provide better encapsulation and help organize related types.",
          "xp": 5
        },
        {
          "id": "cpp-3-6-17",
          "type": "code",
          "question": "Use using declaration to bring a base class member into derived class.",
          "correctAnswer": [
            "class Base {\\npublic:\\n    void method();\\n};\\nclass Derived : private Base {\\npublic:\\n    using Base::method;\\n};"
          ],
          "explanation": "Using declaration can change access level of inherited members.",
          "xp": 15
        },
        {
          "id": "cpp-3-6-18",
          "type": "code",
          "question": "Create a union with different member types.",
          "correctAnswer": [
            "union Data {\\n    int i;\\n    double d;\\n    char c[8];\\n};"
          ],
          "explanation": "Union stores different types in same memory location, only one active at a time.",
          "xp": 15
        },
        {
          "id": "cpp-3-6-19",
          "type": "typing",
          "question": "What is a union?",
          "correctAnswer": [
            "special class where all members share same memory location",
            "stores multiple types in same memory"
          ],
          "explanation": "Union allows storing different types in same memory, only one valid at a time.",
          "xp": 5
        },
        {
          "id": "cpp-3-6-20",
          "type": "code",
          "question": "Create a class with both static and instance methods.",
          "correctAnswer": [
            "class MyClass {\\npublic:\\n    static void staticMethod() {}\\n    void instanceMethod() {}\\n};"
          ],
          "explanation": "Classes can have both static (shared) and instance methods.",
          "xp": 15
        },
        {
          "id": "cpp-3-6-21",
          "type": "code",
          "question": "Write a class template with static member variable.",
          "correctAnswer": [
            "template<typename T>\\nclass MyClass {\\npublic:\\n    static T value;\\n};\\ntemplate<typename T>\\nT MyClass<T>::value = T();"
          ],
          "explanation": "Each template specialization gets its own static member variable.",
          "xp": 15
        },
        {
          "id": "cpp-3-6-22",
          "type": "multiple",
          "question": "Does each template specialization have its own static members?",
          "options": [
            "Yes",
            "No",
            "Only if they're const",
            "Only if they're public"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Each template specialization (MyClass<int>, MyClass<double>) gets its own static members.",
          "xp": 5
        },
        {
          "id": "cpp-3-6-23",
          "type": "code",
          "question": "Create a class that can't be copied (delete copy constructor and assignment).",
          "correctAnswer": [
            "class NonCopyable {\\npublic:\\n    NonCopyable() = default;\\n    NonCopyable(const NonCopyable&) = delete;\\n    NonCopyable& operator=(const NonCopyable&) = delete;\\n};"
          ],
          "explanation": "=delete prevents copying, =default keeps default behavior.",
          "xp": 15
        },
        {
          "id": "cpp-3-6-24",
          "type": "typing",
          "question": "What does '= delete' do?",
          "correctAnswer": [
            "prevents a function from being used",
            "deletes a function",
            "removes from class"
          ],
          "explanation": "=delete prevents a special member function from being used (e.g., to prevent copying).",
          "xp": 5
        },
        {
          "id": "cpp-3-6-25",
          "type": "code",
          "question": "Write a class with virtual inheritance to solve diamond problem.",
          "correctAnswer": [
            "class A {\\npublic:\\n    int value;\\n};\\nclass B : virtual public A {};\\nclass C : virtual public A {};\\nclass D : public B, public C {\\npublic:\\n    D() : A() {}\\n};"
          ],
          "explanation": "Virtual inheritance ensures only one base A subobject in D.",
          "xp": 15
        }
      ]
    }
  ]
};
