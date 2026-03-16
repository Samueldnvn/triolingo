// C++ Unit 11 - Advanced Object-Oriented Programming
// Generated from cppCombined.js

window.cppUnit11 = {
  "unitId": "11",
  "unitName": "11. Advanced Object-Oriented Programming",
  "lessons": [
    {
      "id": 57,
      "title": "Inheritance",
      "unitTitle": "11. Advanced Object-Oriented Programming",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-11-1-1",
          "type": "typing",
          "question": "What is inheritance in C++?",
          "correctAnswer": [
            "creating new class from existing class",
            "derived from base"
          ],
          "explanation": "Inheritance allows creating derived class from base class.",
          "xp": 5
        },
        {
          "id": "cpp-11-1-2",
          "type": "typing",
          "question": "What is a base class?",
          "correctAnswer": [
            "parent class",
            "class being inherited from"
          ],
          "explanation": "Base class is the parent class being inherited from.",
          "xp": 5
        },
        {
          "id": "cpp-11-1-3",
          "type": "typing",
          "question": "What is a derived class?",
          "correctAnswer": [
            "child class",
            "class that inherits"
          ],
          "explanation": "Derived class inherits from base class.",
          "xp": 5
        },
        {
          "id": "cpp-11-1-4",
          "type": "multiple",
          "question": "Can a class inherit from multiple classes?",
          "options": [
            "Yes",
            "No",
            "Only in Java",
            "Only with interfaces"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "C++ supports multiple inheritance.",
          "xp": 5
        },
        {
          "id": "cpp-11-1-5",
          "type": "multiple",
          "question": "What access specifier is used for public inheritance?",
          "options": [
            "public",
            "private",
            "protected",
            "default"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Use public inheritance for most cases.",
          "xp": 5
        },
        {
          "id": "cpp-11-1-6",
          "type": "code",
          "question": "Define derived class from base.",
          "correctAnswer": [
            "class Derived : public Base {};"
          ],
          "explanation": "class Derived : public Base {}",
          "xp": 15
        },
        {
          "id": "cpp-11-1-7",
          "type": "code",
          "question": "Use protected access specifier.",
          "correctAnswer": [
            "protected:",
            "protected: int member;"
          ],
          "explanation": "protected members accessible in derived classes.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-8",
          "type": "code",
          "question": "Call base class constructor.",
          "correctAnswer": [
            "Derived() : Base() {}",
            "Derived(int x) : Base(x) {}"
          ],
          "explanation": "Use member initializer list to call base constructor.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-9",
          "type": "code",
          "question": "Override base class method.",
          "correctAnswer": [
            "void func() override { }",
            "void Derived::func() { }"
          ],
          "explanation": "Override keyword indicates method override.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-10",
          "type": "code",
          "question": "Use final to prevent inheritance.",
          "correctAnswer": [
            "class Base final {};",
            "class Derived final : public Base {};"
          ],
          "explanation": "final prevents further inheritance.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-11",
          "type": "code",
          "question": "Use private inheritance.",
          "correctAnswer": [
            "class Derived : private Base {};"
          ],
          "explanation": "Private inheritance makes base members private in derived.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-12",
          "type": "code",
          "question": "Use protected inheritance.",
          "correctAnswer": [
            "class Derived : protected Base {};"
          ],
          "explanation": "Protected inheritance makes base members protected in derived.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-13",
          "type": "code",
          "question": "Call base class method from derived.",
          "correctAnswer": [
            "Base::method();",
            "Derived::func() { Base::func(); }"
          ],
          "explanation": "Use Base:: to call base class method.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-14",
          "type": "code",
          "question": "Use using to bring base member into derived.",
          "correctAnswer": [
            "using Base::member;",
            "using Base::method;"
          ],
          "explanation": "using declaration brings base member into derived scope.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-15",
          "type": "code",
          "question": "Check if object is instance of derived type.",
          "correctAnswer": [
            "dynamic_cast<Derived*>(base_ptr)",
            "auto derived = dynamic_cast<Derived*>(&obj)"
          ],
          "explanation": "dynamic_cast checks type at runtime.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-16",
          "type": "code",
          "question": "Define pure virtual function.",
          "correctAnswer": [
            "virtual void func() = 0;",
            "virtual int getValue() const = 0;"
          ],
          "explanation": "= 0 makes function pure virtual.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-17",
          "type": "code",
          "question": "Define abstract base class.",
          "correctAnswer": [
            "class Base { virtual void func() = 0; };",
            "class Abstract { public: virtual ~Abstract() = 0; };"
          ],
          "explanation": "Abstract class has at least one pure virtual function.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-18",
          "type": "code",
          "question": "Inherit from multiple base classes.",
          "correctAnswer": [
            "class Derived : public Base1, public Base2 {};"
          ],
          "explanation": "Comma-separated list of base classes.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-19",
          "type": "code",
          "question": "Use virtual inheritance.",
          "correctAnswer": [
            "class Derived : virtual public Base {};"
          ],
          "explanation": "Virtual inheritance solves diamond problem.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-20",
          "type": "code",
          "question": "Access protected member from derived.",
          "correctAnswer": [
            "void Derived::func() { Base::protectedMember = 5; }"
          ],
          "explanation": "Protected members accessible in derived class.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-21",
          "type": "code",
          "question": "Use static_cast for downcasting.",
          "correctAnswer": [
            "auto derived = static_cast<Derived*>(base_ptr);"
          ],
          "explanation": "static_cast for known conversions.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-22",
          "type": "code",
          "question": "Define constructor with multiple base initializers.",
          "correctAnswer": [
            "Derived() : Base1(), Base2() {}",
            "Derived(int x, int y) : Base1(x), Base2(y) {}"
          ],
          "explanation": "Multiple base constructors in initializer list.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-23",
          "type": "code",
          "question": "Inherit from template class.",
          "correctAnswer": [
            "template<typename T> class Derived : public Base<T> {};"
          ],
          "explanation": "Derived class can inherit from template base.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-24",
          "type": "code",
          "question": "Override destructor.",
          "correctAnswer": [
            "virtual ~Derived() { }",
            "virtual ~Derived() override { }"
          ],
          "explanation": "Always override destructor for polymorphic classes.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-25",
          "type": "code",
          "question": "Use final on virtual function.",
          "correctAnswer": [
            "void func() override final { }",
            "virtual void func() final { }"
          ],
          "explanation": "final prevents further override.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-26",
          "type": "code",
          "question": "Define interface class.",
          "correctAnswer": [
            "class IInterface { public: virtual ~IInterface() = default; virtual void func() = 0; };"
          ],
          "explanation": "Interface is abstract class with only pure virtual functions.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-27",
          "type": "code",
          "question": "Use typeid to check type.",
          "correctAnswer": [
            "typeid(obj)",
            "if (typeid(obj) == typeid(Derived))"
          ],
          "explanation": "typeid returns type information.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-28",
          "type": "code",
          "question": "Upcast pointer.",
          "correctAnswer": [
            "Base* basePtr = &derivedObj;",
            "Base* ptr = derivedPtr;"
          ],
          "explanation": "Upcasting from derived to base is implicit.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-29",
          "type": "code",
          "question": "Downcast pointer.",
          "correctAnswer": [
            "Derived* derivedPtr = static_cast<Derived*>(basePtr);",
            "auto d = dynamic_cast<Derived*>(basePtr);"
          ],
          "explanation": "Downcasting requires cast.",
          "xp": 15
        },
        {
          "id": "cpp-11-1-30",
          "type": "code",
          "question": "Define friend function in derived class.",
          "correctAnswer": [
            "friend void friendFunc(Derived& d);",
            "friend std::ostream& operator<<(std::ostream&, const Derived&);"
          ],
          "explanation": "Friend functions can access private members.",
          "xp": 15
        }
      ],
      "lessonText": "# Inheritance\n\nInheritance allows creating new classes based on existing classes.\n\n## Basic Inheritance\n\n```cpp\nclass Base {\npublic:\n    void baseMethod() { std::cout << \"Base method\"; }\n};\n\nclass Derived : public Base {\npublic:\n    void derivedMethod() { std::cout << \"Derived method\"; }\n};\n```\n\n## Access Specifiers\n\n```cpp\nclass Base {\npublic:    // Accessible everywhere\n    int publicVar;\nprotected: // Accessible in derived classes\n    int protectedVar;\nprivate:   // Only accessible in Base\n    int privateVar;\n};\n```\n\n## Inheritance Types\n\n```cpp\nclass PublicDerived : public Base {};      // Public members stay public\nclass ProtectedDerived : protected Base {}; // Public become protected\nclass PrivateDerived : private Base {};     // All become private\n```\n\n## Calling Base Constructor\n\n```cpp\nclass Derived : public Base {\npublic:\n    Derived(int x) : Base(x) {  // Initialize base class\n        // Derived initialization\n    }\n};\n```\n\n## Overriding\n\n```cpp\nclass Derived : public Base {\npublic:\n    void baseMethod() override {  // Override base method\n        std::cout << \"Derived override\";\n    }\n};\n```\n"
    },
    {
      "id": 58,
      "title": "Virtual Functions and Polymorphism",
      "unitTitle": "11. Advanced Object-Oriented Programming",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-11-2-1",
          "type": "typing",
          "question": "What is a virtual function?",
          "correctAnswer": [
            "function that can be overridden",
            "runtime polymorphism"
          ],
          "explanation": "Virtual function enables runtime polymorphism.",
          "xp": 5
        },
        {
          "id": "cpp-11-2-2",
          "type": "typing",
          "question": "What is polymorphism?",
          "correctAnswer": [
            "ability to use derived class as base",
            "many forms"
          ],
          "explanation": "Polymorphism allows treating derived objects as base type.",
          "xp": 5
        },
        {
          "id": "cpp-11-2-3",
          "type": "typing",
          "question": "What is a vtable?",
          "correctAnswer": [
            "virtual function table",
            "table of function pointers"
          ],
          "explanation": "Vtable stores virtual function pointers.",
          "xp": 5
        },
        {
          "id": "cpp-11-2-4",
          "type": "multiple",
          "question": "Can virtual functions be private?",
          "options": [
            "Yes",
            "No",
            "Only in C++20",
            "Only with templates"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Virtual functions can be private.",
          "xp": 5
        },
        {
          "id": "cpp-11-2-5",
          "type": "multiple",
          "question": "What is dynamic_cast used for?",
          "options": [
            "Downcasting polymorphic types",
            "Upcasting",
            "Type conversion",
            "Memory allocation"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "dynamic_cast safely downcasts polymorphic types.",
          "xp": 5
        },
        {
          "id": "cpp-11-2-6",
          "type": "code",
          "question": "Declare virtual function.",
          "correctAnswer": [
            "virtual void func();",
            "virtual int getValue() const;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-7",
          "type": "code",
          "question": "Override virtual function.",
          "correctAnswer": [
            "void func() override { }",
            "int getValue() const override { }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-8",
          "type": "code",
          "question": "Define virtual destructor.",
          "correctAnswer": [
            "virtual ~Base() { }",
            "virtual ~Base() = default;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-9",
          "type": "code",
          "question": "Use dynamic_cast for downcast.",
          "correctAnswer": [
            "auto derived = dynamic_cast<Derived*>(base_ptr);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-10",
          "type": "code",
          "question": "Check if dynamic_cast succeeded.",
          "correctAnswer": [
            "if (derived != nullptr)",
            "if (auto d = dynamic_cast<Derived*>(base_ptr))"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-11",
          "type": "code",
          "question": "Call virtual function through base pointer.",
          "correctAnswer": [
            "basePtr->func();",
            "ptr->virtualMethod();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-12",
          "type": "code",
          "question": "Define pure virtual destructor.",
          "correctAnswer": [
            "virtual ~Base() = 0;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-13",
          "type": "code",
          "question": "Use typeid with virtual functions.",
          "correctAnswer": [
            "typeid(*basePtr)",
            "if (typeid(*ptr) == typeid(Derived))"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-14",
          "type": "code",
          "question": "Prevent overriding with final.",
          "correctAnswer": [
            "void func() override final { }",
            "virtual void func() final { }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-15",
          "type": "code",
          "question": "Create abstract base class.",
          "correctAnswer": [
            "class Base { virtual void func() = 0; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-16",
          "type": "code",
          "question": "Use virtual inheritance.",
          "correctAnswer": [
            "class Derived : virtual public Base {};"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-17",
          "type": "code",
          "question": "Override const virtual function.",
          "correctAnswer": [
            "void func() const override { }",
            "int get() const override { }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-18",
          "type": "code",
          "question": "Call base virtual function from override.",
          "correctAnswer": [
            "Base::func();",
            "void Derived::func() { Base::func(); }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-19",
          "type": "code",
          "question": "Use covariant return types.",
          "correctAnswer": [
            "virtual Derived* clone() const override",
            "virtual Derived& get() override"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-20",
          "type": "code",
          "question": "Delete polymorphic object correctly.",
          "correctAnswer": [
            "delete basePtr;",
            "Base* ptr = new Derived(); delete ptr;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-21",
          "type": "code",
          "question": "Use virtual function with reference.",
          "correctAnswer": [
            "void func(Base& obj)",
            "void process(Base& ref)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-22",
          "type": "code",
          "question": "Create interface with pure virtual.",
          "correctAnswer": [
            "class IInterface { public: virtual void func() = 0; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-23",
          "type": "code",
          "question": "Use override specifier.",
          "correctAnswer": [
            "void func() override { }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-24",
          "type": "code",
          "question": "Virtual function with default argument.",
          "correctAnswer": [
            "virtual void func(int x = 10) { }",
            "virtual void set(int val = 0) override"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-25",
          "type": "code",
          "question": "Check if class is polymorphic.",
          "correctAnswer": [
            "std::is_polymorphic<Base>::value",
            "std::is_polymorphic_v<Base>"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-26",
          "type": "code",
          "question": "Virtual function in template class.",
          "correctAnswer": [
            "template<typename T> class Base { virtual void func(T t) = 0; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-27",
          "type": "code",
          "question": "Use virtual for operator overloading.",
          "correctAnswer": [
            "virtual bool operator==(const Base& other) const { }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-28",
          "type": "code",
          "question": "Override assignment operator.",
          "correctAnswer": [
            "Base& operator=(const Base&) override { }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-29",
          "type": "code",
          "question": "Virtual function with noexcept.",
          "correctAnswer": [
            "virtual void func() noexcept { }",
            "virtual void func() noexcept override"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-2-30",
          "type": "code",
          "question": "Create factory returning base pointer.",
          "correctAnswer": [
            "Base* create() { return new Derived(); }",
            "unique_ptr<Base> create() { return make_unique<Derived>(); }"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# Virtual Functions and Polymorphism\n\nVirtual functions enable runtime polymorphism.\n\n```cpp\nclass Base {\npublic:\n    virtual void func() {\n        std::cout << \"Base implementation\";\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void func() override {\n        std::cout << \"Derived implementation\";\n    }\n};\n\nBase* ptr = new Derived();\nptr->func();  // Calls Derived::func()\n```"
    },
    {
      "id": 59,
      "title": "Abstract Classes and Interfaces",
      "unitTitle": "11. Advanced Object-Oriented Programming",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-11-3-1",
          "type": "typing",
          "question": "What is an abstract class?",
          "correctAnswer": [
            "class with pure virtual functions",
            "cannot be instantiated"
          ],
          "explanation": "Abstract class has at least one pure virtual function.",
          "xp": 5
        },
        {
          "id": "cpp-11-3-2",
          "type": "typing",
          "question": "How to make function pure virtual?",
          "correctAnswer": [
            "= 0",
            "virtual void func() = 0;"
          ],
          "explanation": "Add = 0 to make function pure virtual.",
          "xp": 5
        },
        {
          "id": "cpp-11-3-3",
          "type": "typing",
          "question": "Can abstract class have data members?",
          "correctAnswer": [
            "yes",
            "can have member variables"
          ],
          "explanation": "Abstract classes can have data members.",
          "xp": 5
        },
        {
          "id": "cpp-11-3-4",
          "type": "multiple",
          "question": "Can abstract class be instantiated?",
          "options": [
            "No",
            "Yes",
            "Only with factory",
            "Only as pointer"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Abstract classes cannot be instantiated directly.",
          "xp": 5
        },
        {
          "id": "cpp-11-3-5",
          "type": "multiple",
          "question": "What is interface in C++?",
          "options": [
            "Abstract class with only pure virtual",
            "Java interface",
            "Template",
            "Namespace"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Interface is abstract class with only pure virtual functions.",
          "xp": 5
        },
        {
          "id": "cpp-11-3-6",
          "type": "code",
          "question": "Define pure virtual function.",
          "correctAnswer": [
            "virtual void func() = 0;",
            "virtual int get() const = 0;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-7",
          "type": "code",
          "question": "Create abstract base class.",
          "correctAnswer": [
            "class Base { virtual void func() = 0; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-8",
          "type": "code",
          "question": "Define interface.",
          "correctAnswer": [
            "class IInterface { public: virtual ~IInterface() = default; virtual void func() = 0; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-9",
          "type": "code",
          "question": "Implement pure virtual in derived.",
          "correctAnswer": [
            "void func() override { }",
            "double area() const override { }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-10",
          "type": "code",
          "question": "Pure virtual destructor.",
          "correctAnswer": [
            "virtual ~Base() = 0;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-11",
          "type": "code",
          "question": "Abstract class with constructor.",
          "correctAnswer": [
            "class Base { public: Base(int x) {} virtual void func() = 0; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-12",
          "type": "code",
          "question": "Implement multiple interfaces.",
          "correctAnswer": [
            "class Derived : public I1, public I2 {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-13",
          "type": "code",
          "question": "Pure virtual with default implementation.",
          "correctAnswer": [
            "virtual void func() = 0;",
            "void Base::func() { /* default */ }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-14",
          "type": "code",
          "question": "Check if class is abstract.",
          "correctAnswer": [
            "std::is_abstract<Base>::value",
            "std::is_abstract_v<Base>"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-15",
          "type": "code",
          "question": "Create factory for abstract class.",
          "correctAnswer": [
            "unique_ptr<Base> create() { return make_unique<Derived>(); }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-16",
          "type": "code",
          "question": "Abstract class with protected member.",
          "correctAnswer": [
            "class Base { protected: int value; virtual void func() = 0; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-17",
          "type": "code",
          "question": "Override pure virtual with const.",
          "correctAnswer": [
            "void func() const override { }",
            "int get() const override { }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-18",
          "type": "code",
          "question": "Interface with multiple pure virtuals.",
          "correctAnswer": [
            "class IShape { virtual double area() const = 0; virtual double perimeter() const = 0; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-19",
          "type": "code",
          "question": "Pure virtual with noexcept.",
          "correctAnswer": [
            "virtual void func() noexcept = 0;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-20",
          "type": "code",
          "question": "Implement interface partially.",
          "correctAnswer": [
            "class Derived : public IInterface { void func() override { } /* skip others */ };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-21",
          "type": "code",
          "question": "Pure virtual return pointer.",
          "correctAnswer": [
            "virtual Base* clone() const = 0;",
            "virtual unique_ptr<Base> create() const = 0;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-22",
          "type": "code",
          "question": "Abstract class with virtual destructor.",
          "correctAnswer": [
            "class Base { public: virtual ~Base() = default; virtual void func() = 0; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-23",
          "type": "code",
          "question": "Use interface with smart pointer.",
          "correctAnswer": [
            "unique_ptr<IInterface> ptr = make_unique<Derived>();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-24",
          "type": "code",
          "question": "Pure virtual with template.",
          "correctAnswer": [
            "template<typename T> virtual void func(T t) = 0;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-25",
          "type": "code",
          "question": "Interface with const and non-const.",
          "correctAnswer": [
            "class I { virtual void func() = 0; virtual void func() const = 0; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-26",
          "type": "code",
          "question": "Abstract class final.",
          "correctAnswer": [
            "class Base final { virtual void func() = 0; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-27",
          "type": "code",
          "question": "Call pure virtual from constructor (with default impl).",
          "correctAnswer": [
            "Base::func();"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-28",
          "type": "code",
          "question": "Pure virtual static function.",
          "correctAnswer": [
            "/* Not possible - static cannot be virtual */"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-29",
          "type": "code",
          "question": "Interface with move semantics.",
          "correctAnswer": [
            "class I { virtual void func() && = 0; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-3-30",
          "type": "code",
          "question": "Override all interface methods.",
          "correctAnswer": [
            "class Derived : public I { void f1() override; void f2() override; };"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# Abstract Classes and Interfaces\n\nAbstract classes cannot be instantiated and define interfaces.\n\n```cpp\nclass Shape {\npublic:\n    virtual ~Shape() = default;\n    virtual double area() const = 0;  // Pure virtual\n    virtual double perimeter() const = 0;\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    double area() const override {\n        return 3.14159 * radius * radius;\n    }\n};\n```\n\n**Interfaces in C++** are abstract classes with only pure virtual functions."
    },
    {
      "id": 60,
      "title": "Multiple Inheritance",
      "unitTitle": "11. Advanced Object-Oriented Programming",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-11-4-1",
          "type": "typing",
          "question": "What is multiple inheritance?",
          "correctAnswer": [
            "inheriting from multiple base classes",
            "multiple parent classes"
          ],
          "explanation": "Multiple inheritance allows deriving from multiple bases.",
          "xp": 5
        },
        {
          "id": "cpp-11-4-2",
          "type": "typing",
          "question": "What is the diamond problem?",
          "correctAnswer": [
            "ambiguous inheritance from common ancestor",
            "multiple base inheritance issue"
          ],
          "explanation": "Diamond problem occurs with shared ancestor.",
          "xp": 5
        },
        {
          "id": "cpp-11-4-3",
          "type": "typing",
          "question": "What solves diamond problem?",
          "correctAnswer": [
            "virtual inheritance",
            "virtual public"
          ],
          "explanation": "Virtual inheritance solves diamond problem.",
          "xp": 5
        },
        {
          "id": "cpp-11-4-4",
          "type": "multiple",
          "question": "Can C++ have multiple inheritance?",
          "options": [
            "Yes",
            "No",
            "Only with interfaces",
            "Only with templates"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "C++ supports multiple inheritance.",
          "xp": 5
        },
        {
          "id": "cpp-11-4-5",
          "type": "multiple",
          "question": "What is ambiguity in multiple inheritance?",
          "options": [
            "Name collision",
            "Type error",
            "Memory leak",
            "Syntax error"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Ambiguity occurs when multiple bases have same member.",
          "xp": 5
        },
        {
          "id": "cpp-11-4-6",
          "type": "code",
          "question": "Inherit from multiple classes.",
          "correctAnswer": [
            "class Derived : public Base1, public Base2 {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-7",
          "type": "code",
          "question": "Use virtual inheritance.",
          "correctAnswer": [
            "class Derived : virtual public Base {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-8",
          "type": "code",
          "question": "Resolve ambiguous member.",
          "correctAnswer": [
            "Base1::member",
            "obj.Base1::func()"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-9",
          "type": "code",
          "question": "Call multiple base constructors.",
          "correctAnswer": [
            "Derived() : Base1(), Base2() {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-10",
          "type": "code",
          "question": "Use using to resolve ambiguity.",
          "correctAnswer": [
            "using Base1::member;",
            "using Base1::func;"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-11",
          "type": "code",
          "question": "Inherit with different access.",
          "correctAnswer": [
            "class Derived : public B1, private B2 {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-12",
          "type": "code",
          "question": "Virtual inheritance in diamond.",
          "correctAnswer": [
            "class D1 : virtual public Base {}; class D2 : virtual public Base {}; class D : public D1, public D2 {};"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-13",
          "type": "code",
          "question": "Override from multiple bases.",
          "correctAnswer": [
            "void func() override { Base1::func(); Base2::func(); }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-14",
          "type": "code",
          "question": "Check if object inherits from type.",
          "correctAnswer": [
            "dynamic_cast<Type*>(ptr)",
            "if (dynamic_cast<Base1*>(ptr))"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-15",
          "type": "code",
          "question": "Multiple interfaces.",
          "correctAnswer": [
            "class Derived : public I1, public I2, public I3 {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-16",
          "type": "code",
          "question": "Ambiguous virtual function.",
          "correctAnswer": [
            "Base1::func()",
            "obj.Base1::func()"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-17",
          "type": "code",
          "question": "Virtual base constructor.",
          "correctAnswer": [
            "class Derived : public virtual Base {}; Derived() : Base() {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-18",
          "type": "code",
          "question": "Override virtual from multiple bases.",
          "correctAnswer": [
            "void func() override { /* override all */ }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-19",
          "type": "code",
          "question": "Upcast with multiple inheritance.",
          "correctAnswer": [
            "Base1* b1 = &derived;",
            "static_cast<Base1*>(&derived)"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-20",
          "type": "code",
          "question": "Downcast with multiple inheritance.",
          "correctAnswer": [
            "auto d = dynamic_cast<Derived*>(base1);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-21",
          "type": "code",
          "question": "Inherit template from multiple bases.",
          "correctAnswer": [
            "template<typename T> class Derived : public Base1<T>, public Base2 {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-22",
          "type": "code",
          "question": "Virtual inheritance with access.",
          "correctAnswer": [
            "class D : virtual public Base {}",
            "class D : virtual protected Base"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-23",
          "type": "code",
          "question": "Constructor with virtual base.",
          "correctAnswer": [
            "Derived() : Base(), D1(), D2() {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-24",
          "type": "code",
          "question": "Diamond with pure virtual.",
          "correctAnswer": [
            "class Base { virtual void f() = 0; }; class D1 : virtual public Base {};"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-25",
          "type": "code",
          "question": "Ambiguous data member.",
          "correctAnswer": [
            "Base1::value = 5;",
            "obj.Base1::data"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-26",
          "type": "code",
          "question": "Multiple inheritance with override.",
          "correctAnswer": [
            "class D : public B1, public B2 { void f() override override; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-27",
          "type": "code",
          "question": "Virtual destructor in multiple inheritance.",
          "correctAnswer": [
            "virtual ~Derived() { }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-28",
          "type": "code",
          "question": "Check inheritance hierarchy.",
          "correctAnswer": [
            "std::is_base_of<Base1, Derived>::value",
            "if (dynamic_cast<Base1*>(p))"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-29",
          "type": "code",
          "question": "Mixin pattern with multiple inheritance.",
          "correctAnswer": [
            "class Mixin1 { public: void mixin1() {} }; class Mixin2 { public: void mixin2() {} }; class D : public Mixin1, public Mixin2 {};"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-4-30",
          "type": "code",
          "question": "Final class with multiple inheritance.",
          "correctAnswer": [
            "class D final : public B1, public B2 {}"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# Multiple Inheritance\n\nC++ allows inheriting from multiple base classes.\n\n```cpp\nclass A { public: void a() {} };\nclass B { public: void b() {} };\n\nclass C : public A, public B {\npublic:\n    void c() {}\n};\n```\n\n**Diamond Problem:**\nWhen two base classes share a common ancestor, use virtual inheritance.\n\n```cpp\nclass Base {};\nclass D1 : virtual public Base {};\nclass D2 : virtual public Base {};\nclass Derived : public D1, public D2 {};\n```"
    },
    {
      "id": 61,
      "title": "Composition vs Inheritance",
      "unitTitle": "11. Advanced Object-Oriented Programming",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-11-5-1",
          "type": "typing",
          "question": "What is composition?",
          "correctAnswer": [
            "has-a relationship",
            "objects containing other objects"
          ],
          "explanation": "Composition is has-a relationship between objects.",
          "xp": 5
        },
        {
          "id": "cpp-11-5-2",
          "type": "typing",
          "question": "What is inheritance?",
          "correctAnswer": [
            "is-a relationship",
            "derived from base class"
          ],
          "explanation": "Inheritance is is-a relationship.",
          "xp": 5
        },
        {
          "id": "cpp-11-5-3",
          "type": "typing",
          "question": "When to use composition?",
          "correctAnswer": [
            "when you have-a relationship",
            "reuse implementation"
          ],
          "explanation": "Use composition for has-a relationships.",
          "xp": 5
        },
        {
          "id": "cpp-11-5-4",
          "type": "multiple",
          "question": "What is favor composition over inheritance?",
          "options": [
            "Design principle",
            "Language rule",
            "Compiler optimization",
            "Memory technique"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Favor composition is a design principle.",
          "xp": 5
        },
        {
          "id": "cpp-11-5-5",
          "type": "multiple",
          "question": "Which is more flexible?",
          "options": [
            "Composition",
            "Inheritance",
            "Equal",
            "Neither"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Composition is more flexible than inheritance.",
          "xp": 5
        },
        {
          "id": "cpp-11-5-6",
          "type": "code",
          "question": "Use composition with member object.",
          "correctAnswer": [
            "class Car { private: Engine engine; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-7",
          "type": "code",
          "question": "Use composition with pointer.",
          "correctAnswer": [
            "class Car { private: unique_ptr<Engine> engine; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-8",
          "type": "code",
          "question": "Delegate to composed object.",
          "correctAnswer": [
            "void func() { member.func(); }"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-9",
          "type": "code",
          "question": "Use inheritance for is-a.",
          "correctAnswer": [
            "class Car : public Vehicle {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-10",
          "type": "code",
          "question": "Composition with reference.",
          "correctAnswer": [
            "class Car { private: Engine& engine; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-11",
          "type": "code",
          "question": "Forward declaration for composition.",
          "correctAnswer": [
            "class Engine; class Car { Engine* engine; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-12",
          "type": "code",
          "question": "Initialize composition member.",
          "correctAnswer": [
            "Car(Engine e) : engine(e) {}",
            "Car() : engine() {}"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-13",
          "type": "code",
          "question": "Use std::shared_ptr for composition.",
          "correctAnswer": [
            "class Car { shared_ptr<Engine> engine; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-14",
          "type": "code",
          "question": "Mix composition and inheritance.",
          "correctAnswer": [
            "class Car : public Vehicle { private: Engine engine; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-15",
          "type": "code",
          "question": "Dependency injection via composition.",
          "correctAnswer": [
            "class Car { public: Car(Engine& e) : engine(e) {} private: Engine& engine; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-16",
          "type": "code",
          "question": "Pass ownership to composition.",
          "correctAnswer": [
            "class Car { public: Car(unique_ptr<Engine> e) : engine(std::move(e)) {} private: unique_ptr<Engine> engine; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-17",
          "type": "code",
          "question": "Composition with interface.",
          "correctAnswer": [
            "class Car { private: IEngine& engine; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-18",
          "type": "code",
          "question": "Inheritance with composition.",
          "correctAnswer": [
            "class Base { }; class Derived : public Base { private: Helper helper; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-19",
          "type": "code",
          "question": "Use wrapper for composition.",
          "correctAnswer": [
            "template<typename T> class Wrapper { T obj; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-20",
          "type": "code",
          "question": "Access composed member.",
          "correctAnswer": [
            "obj.engine.start()",
            "member.func()"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-21",
          "type": "code",
          "question": "Composition lifecycle management.",
          "correctAnswer": [
            "class Owner { public: ~Owner() { } private: unique_ptr<Resource> resource; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-22",
          "type": "code",
          "question": "PImpl idiom with composition.",
          "correctAnswer": [
            "class Impl; class Owner { private: unique_ptr<Impl> pImpl; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-23",
          "type": "code",
          "question": "Inheritance for interface.",
          "correctAnswer": [
            "class ISocket { virtual void send() = 0; }; class TCPSocket : public ISocket { };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-24",
          "type": "code",
          "question": "Composition for strategy.",
          "correctAnswer": [
            "class Context { private: unique_ptr<IStrategy> strategy; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-25",
          "type": "code",
          "question": "Use mixins with composition.",
          "correctAnswer": [
            "template<typename... Mixins> class MixinClass : public Mixins... {};"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-26",
          "type": "code",
          "question": "Composition with move.",
          "correctAnswer": [
            "obj.setEngine(std::move(newEngine));",
            "engine = std::move(other.engine);"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-27",
          "type": "code",
          "question": "Inheritance depth.",
          "correctAnswer": [
            "class A {}; class B : public A {}; class C : public B {}; // 3 levels"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-28",
          "type": "code",
          "question": "Composition with const member.",
          "correctAnswer": [
            "class Owner { private: const Resource resource; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-29",
          "type": "code",
          "question": "Use composition to break coupling.",
          "correctAnswer": [
            "class A { }; class B { private: A* a; };"
          ],
          "xp": 15
        },
        {
          "id": "cpp-11-5-30",
          "type": "code",
          "question": "Bridge pattern (composition).",
          "correctAnswer": [
            "class Abstraction { private: unique_ptr<Impl> impl; };"
          ],
          "xp": 15
        }
      ],
      "lessonText": "# Composition vs Inheritance\n\n**Composition** (has-a): Objects contain other objects.\n\n```cpp\nclass Engine {\npublic:\n    void start() {}\n};\n\nclass Car {\nprivate:\n    Engine engine;  // Composition\npublic:\n    void start() { engine.start(); }\n};\n```\n\n**Inheritance** (is-a): Derived class is a base class.\n\n```cpp\nclass Vehicle {\npublic:\n    void move() {}\n};\n\nclass Car : public Vehicle {  // Inheritance\n    // Car is a Vehicle\n};\n```\n\n**Guideline:** Prefer composition over inheritance (Favor composition)."
    }
  ]
};
