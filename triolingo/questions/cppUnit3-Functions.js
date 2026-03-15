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
        }
      ]
    }
  ]
};
