// C++ Unit 14 - Concurrency
// Generated from cppCombined.js

window.cppUnit14 = {
  "unitId": "14",
  "unitName": "14. Concurrency",
  "lessons": [
    {
      "id": 72,
      "title": "Threads (std::thread)",
      "unitTitle": "14. Concurrency",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-14-1-1",
          "type": "typing",
          "question": "What is std::thread?",
          "correctAnswer": [
            "represents thread",
            "execution thread",
            "parallel execution"
          ],
          "explanation": "std::thread represents a thread of execution.",
          "xp": 5
        },
        {
          "id": "cpp-14-1-2",
          "type": "typing",
          "question": "How to start a thread?",
          "correctAnswer": [
            "create thread object",
            "pass function to thread constructor"
          ],
          "explanation": "Create thread object with function.",
          "xp": 5
        },
        {
          "id": "cpp-14-1-3",
          "type": "typing",
          "question": "How to wait for thread?",
          "correctAnswer": [
            "join()",
            "thread.join()"
          ],
          "explanation": "join() waits for thread to finish.",
          "xp": 5
        },
        {
          "id": "cpp-14-1-4",
          "type": "multiple",
          "question": "What happens if thread not joined?",
          "options": [
            "Terminates program",
            "Continues running",
            "Error",
            "Ignored"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Unjoined thread terminates program.",
          "xp": 5
        },
        {
          "id": "cpp-14-1-5",
          "type": "multiple",
          "question": "Can thread take arguments?",
          "options": [
            "Yes",
            "No",
            "Only one",
            "Only pointers"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Thread can take multiple arguments.",
          "xp": 5
        },
        {
          "id": "cpp-14-1-6",
          "type": "code",
          "question": "Create and start thread.",
          "correctAnswer": [
            "std::thread t(func);",
            "std::thread t(&function);"
          ],
          "explanation": "std::thread t(function);",
          "xp": 15
        },
        {
          "id": "cpp-14-1-7",
          "type": "code",
          "question": "Wait for thread to finish.",
          "correctAnswer": [
            "t.join();",
            "thread.join();"
          ],
          "explanation": "thread.join()",
          "xp": 15
        },
        {
          "id": "cpp-14-1-8",
          "type": "code",
          "question": "Thread with lambda.",
          "correctAnswer": [
            "std::thread t([]() { /* code */ });",
            "std::thread t([] { doSomething(); });"
          ],
          "explanation": "std::thread t([]() { });",
          "xp": 15
        },
        {
          "id": "cpp-14-1-9",
          "type": "code",
          "question": "Thread with arguments.",
          "correctAnswer": [
            "std::thread t(func, arg1, arg2);",
            "std::thread t(&function, value);"
          ],
          "explanation": "std::thread t(func, args...);",
          "xp": 15
        },
        {
          "id": "cpp-14-1-10",
          "type": "code",
          "question": "Detach thread.",
          "correctAnswer": [
            "t.detach();",
            "thread.detach();"
          ],
          "explanation": "thread.detach() runs independently.",
          "xp": 15
        },
        {
          "id": "cpp-14-1-11",
          "type": "code",
          "question": "Check if thread joinable.",
          "correctAnswer": [
            "if (t.joinable())",
            "if (thread.joinable())"
          ],
          "explanation": "thread.joinable()",
          "xp": 15
        },
        {
          "id": "cpp-14-1-12",
          "type": "code",
          "question": "Thread with member function.",
          "correctAnswer": [
            "std::thread t(&MyClass::method, &obj, args);",
            "std::thread t(&Class::func, &instance);"
          ],
          "explanation": "std::thread t(&Class::method, &obj, args);",
          "xp": 15
        },
        {
          "id": "cpp-14-1-13",
          "type": "code",
          "question": "Move thread.",
          "correctAnswer": [
            "std::thread t2 = std::move(t);",
            "auto t2 = std::move(thread);"
          ],
          "explanation": "Move thread object.",
          "xp": 15
        },
        {
          "id": "cpp-14-1-14",
          "type": "code",
          "question": "Get thread ID.",
          "correctAnswer": [
            "auto id = t.get_id();",
            "std::thread::id id = thread.get_id();"
          ],
          "explanation": "thread.get_id()",
          "xp": 15
        },
        {
          "id": "cpp-14-1-15",
          "type": "code",
          "question": "Thread with reference wrapper.",
          "correctAnswer": [
            "std::thread t(func, std::ref(obj));",
            "std::thread t(&function, std::ref(value));"
          ],
          "explanation": "Use std::ref for reference.",
          "xp": 15
        },
        {
          "id": "cpp-14-1-16",
          "type": "code",
          "question": "Thread with perfect forwarding.",
          "correctAnswer": [
            "template<typename F, typename... Args> std::thread createThread(F&& f, Args&&... args) { return std::thread(std::forward<F>(f), std::forward<Args>(args)...); }",
            "auto t = std::thread(std::forward<Args>(args)...);"
          ],
          "explanation": "Perfect forward to thread.",
          "xp": 15
        },
        {
          "id": "cpp-14-1-17",
          "type": "code",
          "question": "Get hardware concurrency.",
          "correctAnswer": [
            "unsigned int n = std::thread::hardware_concurrency();",
            "auto cores = std::thread::hardware_concurrency();"
          ],
          "explanation": "std::thread::hardware_concurrency()",
          "xp": 15
        },
        {
          "id": "cpp-14-1-18",
          "type": "code",
          "question": "Thread sleep.",
          "correctAnswer": [
            "std::this_thread::sleep_for(std::chrono::milliseconds(100));",
            "std::this_thread::sleep_for(std::chrono::seconds(1));"
          ],
          "explanation": "std::this_thread::sleep_for()",
          "xp": 15
        },
        {
          "id": "cpp-14-1-19",
          "type": "code",
          "question": "Yield thread.",
          "correctAnswer": [
            "std::this_thread::yield();",
            "std::this_thread::yield();"
          ],
          "explanation": "std::this_thread::yield()",
          "xp": 15
        },
        {
          "id": "cpp-14-1-20",
          "type": "code",
          "question": "Get current thread ID.",
          "correctAnswer": [
            "auto id = std::this_thread::get_id();",
            "std::thread::id current = std::this_thread::get_id();"
          ],
          "explanation": "std::this_thread::get_id()",
          "xp": 15
        },
        {
          "id": "cpp-14-1-21",
          "type": "code",
          "question": "Thread with move semantics.",
          "correctAnswer": [
            "std::thread t(func, std::move(obj));",
            "std::thread t(&method, &obj, std::move(arg));"
          ],
          "explanation": "Move arguments to thread.",
          "xp": 15
        },
        {
          "id": "cpp-14-1-22",
          "type": "code",
          "question": "Thread with unique_ptr.",
          "correctAnswer": [
            "std::thread t(func, std::move(ptr));",
            "std::thread t(&process, std::make_unique<int>(42));"
          ],
          "explanation": "Move unique_ptr to thread.",
          "xp": 15
        },
        {
          "id": "cpp-14-1-23",
          "type": "code",
          "question": "Thread with bind.",
          "correctAnswer": [
            "std::thread t(std::bind(&Class::method, &obj, args));",
            "auto t = std::thread(std::bind(func, arg));"
          ],
          "explanation": "Use std::bind with thread.",
          "xp": 15
        },
        {
          "id": "cpp-14-1-24",
          "type": "code",
          "question": "Thread pool (simple).",
          "correctAnswer": [
            "std::vector<std::thread> pool; for (int i = 0; i < n; ++i) pool.emplace_back(worker); for (auto& t : pool) t.join();"
          ],
          "explanation": "Vector of threads for pool.",
          "xp": 15
        },
        {
          "id": "cpp-14-1-25",
          "type": "code",
          "question": "Thread with exception handling.",
          "correctAnswer": [
            "std::thread t([]() { try { /* code */ } catch (...) { /* handle */ } }); t.join();"
          ],
          "explanation": "Handle exceptions in thread function.",
          "xp": 15
        }
      ],
      "lessonText": "# std::thread\n\nBasic thread creation and management.\n\n## Creating Threads\n\n```cpp\nvoid worker() {\n    std::cout << \"Worker running\n\";\n}\n\nint main() {\n    std::thread t(worker);  // Create thread\n    t.join();               // Wait for completion\n}\n```\n\n## Thread with Lambda\n\n```cpp\nstd::thread t([](int id) {\n    std::cout << \"Thread \" << id << \"\n\";\n}, 42);\nt.join();\n```\n\n## Thread Arguments\n\n```cpp\n// Pass by value\nstd::thread t(func, 42);\n\n// Pass by reference\nstd::thread t(func, std::ref(value));\n\n// Pass by move\nstd::thread t(func, std::move(obj));\n```\n\n## Managing Threads\n\n```cpp\n// Check if joinable\nif (t.joinable()) {\n    t.join();\n}\n\n// Detach (runs independently)\nt.detach();\n```\n"
    },
    {
      "id": 73,
      "title": "Mutexes and Locks",
      "unitTitle": "14. Concurrency",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-14-2-1",
          "type": "typing",
          "question": "What is mutex?",
          "correctAnswer": [
            "mutual exclusion lock",
            "synchronization primitive"
          ],
          "explanation": "Mutex provides mutual exclusion.",
          "xp": 5
        },
        {
          "id": "cpp-14-2-2",
          "type": "typing",
          "question": "What does lock_guard do?",
          "correctAnswer": [
            "RAII wrapper for mutex",
            "automatic locking"
          ],
          "explanation": "lock_guard provides RAII locking.",
          "xp": 5
        },
        {
          "id": "cpp-14-2-3",
          "type": "typing",
          "question": "What does unique_lock do?",
          "correctAnswer": [
            "flexible RAII lock",
            "can unlock early"
          ],
          "explanation": "unique_lock provides flexible locking.",
          "xp": 5
        },
        {
          "id": "cpp-14-2-4",
          "type": "multiple",
          "question": "What happens on double lock?",
          "options": [
            "Undefined behavior",
            "Error",
            "Ignored",
            "Success"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Double locking is undefined behavior.",
          "xp": 5
        },
        {
          "id": "cpp-14-2-5",
          "type": "multiple",
          "question": "Can mutex be copied?",
          "options": [
            "No",
            "Yes",
            "Only move",
            "Only reference"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Mutex cannot be copied.",
          "xp": 5
        },
        {
          "id": "cpp-14-2-6",
          "type": "code",
          "question": "Create mutex.",
          "correctAnswer": [
            "std::mutex mtx;",
            "std::mutex mutex;"
          ],
          "explanation": "std::mutex mtx;",
          "xp": 15
        },
        {
          "id": "cpp-14-2-7",
          "type": "code",
          "question": "Lock mutex with lock_guard.",
          "correctAnswer": [
            "std::lock_guard<std::mutex> lock(mtx);",
            "{ std::lock_guard<std::mutex> lk(mutex); }"
          ],
          "explanation": "std::lock_guard<std::mutex> lock(mutex);",
          "xp": 15
        },
        {
          "id": "cpp-14-2-8",
          "type": "code",
          "question": "Lock mutex with unique_lock.",
          "correctAnswer": [
            "std::unique_lock<std::mutex> lock(mtx);",
            "std::unique_lock<std::mutex> lk(mutex);"
          ],
          "explanation": "std::unique_lock<std::mutex> lock(mutex);",
          "xp": 15
        },
        {
          "id": "cpp-14-2-9",
          "type": "code",
          "question": "Try lock.",
          "correctAnswer": [
            "if (mtx.try_lock()) { /* locked */ }",
            "mtx.lock(); if (mtx.try_lock()) { }"
          ],
          "explanation": "mutex.try_lock()",
          "xp": 15
        },
        {
          "id": "cpp-14-2-10",
          "type": "code",
          "question": "Lock with timeout.",
          "correctAnswer": [
            "if (std::unique_lock<std::mutex> lk(mtx, std::chrono::milliseconds(100))) { /* locked */ }",
            "if (mtx.try_lock_for(std::chrono::seconds(1))) { }"
          ],
          "explanation": "unique_lock with timeout.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-11",
          "type": "code",
          "question": "Unlock unique_lock early.",
          "correctAnswer": [
            "lock.unlock();",
            "lk.unlock();"
          ],
          "explanation": "unique_lock.unlock()",
          "xp": 15
        },
        {
          "id": "cpp-14-2-12",
          "type": "code",
          "question": "Share mutex.",
          "correctAnswer": [
            "std::shared_mutex mtx;",
            "std::shared_timed_mutex mtx;"
          ],
          "explanation": "std::shared_mutex for shared locks.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-13",
          "type": "code",
          "question": "Shared lock.",
          "correctAnswer": [
            "std::shared_lock<std::shared_mutex> lock(mtx);",
            "{ std::shared_lock<std::shared_mutex> lk(mutex); }"
          ],
          "explanation": "std::shared_lock for read access.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-14",
          "type": "code",
          "question": "Exclusive lock.",
          "correctAnswer": [
            "std::unique_lock<std::shared_mutex> lock(mtx);",
            "{ std::unique_lock<std::shared_mutex> lk(mutex); }"
          ],
          "explanation": "unique_lock for write access.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-15",
          "type": "code",
          "question": "Defer lock.",
          "correctAnswer": [
            "std::unique_lock<std::mutex> lk(mtx, std::defer_lock);",
            "auto lock = std::unique_lock<std::mutex>(mutex, std::defer_lock);"
          ],
          "explanation": "defer_lock postpones locking.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-16",
          "type": "code",
          "question": "Lock multiple mutexes.",
          "correctAnswer": [
            "std::lock(mtx1, mtx2);",
            "std::lock(mutex1, mutex2, mutex3);"
          ],
          "explanation": "std::lock multiple mutexes.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-17",
          "type": "code",
          "question": "scoped_lock (C++17).",
          "correctAnswer": [
            "std::scoped_lock lock(mtx1, mtx2);",
            "std::scoped_lock lk(mtx1, mtx2, mtx3);"
          ],
          "explanation": "std::scoped_lock for multiple mutexes.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-18",
          "type": "code",
          "question": "Recursive mutex.",
          "correctAnswer": [
            "std::recursive_mutex mtx;",
            "std::recursive_mutex recursive;"
          ],
          "explanation": "std::recursive_mutex allows same thread to lock.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-19",
          "type": "code",
          "question": "Timed mutex.",
          "correctAnswer": [
            "std::timed_mutex mtx;",
            "std::shared_timed_mutex shared;"
          ],
          "explanation": "std::timed_mutex supports timed locks.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-20",
          "type": "code",
          "question": "Lock multiple with lock_guard.",
          "correctAnswer": [
            "std::lock(mtx1, mtx2); std::lock_guard<std::mutex> lk1(mtx1, std::adopt_lock); std::lock_guard<std::mutex> lk2(mtx2, std::adopt_lock);",
            "auto l1 = std::lock_guard<std::mutex>(mtx1, std::adopt_lock);"
          ],
          "explanation": "adopt_lock with std::lock.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-21",
          "type": "code",
          "question": "Call once.",
          "correctAnswer": [
            "std::once_flag flag; std::call_once(flag, []() { /* init */ });",
            "static std::once_flag flag; std::call_once(flag, init);"
          ],
          "explanation": "std::call_once for thread-safe init.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-22",
          "type": "code",
          "question": "Guarded with shared_mutex.",
          "correctAnswer": [
            "void read() { std::shared_lock<std::shared_mutex> lk(mtx); /* read */ } void write() { std::unique_lock<std::shared_mutex> lk(mtx); /* write */ }"
          ],
          "explanation": "Shared lock for read, unique for write.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-23",
          "type": "code",
          "question": "Try lock for unique_lock.",
          "correctAnswer": [
            "if (std::unique_lock<std::mutex> lk(mtx, std::try_to_lock)) { /* locked */ }",
            "auto lk = std::unique_lock<std::mutex>(mutex, std::try_to_lock); if (lk) { }"
          ],
          "explanation": "try_to_lock with unique_lock.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-24",
          "type": "code",
          "question": "Lock hierarchy (avoid deadlock).",
          "correctAnswer": [
            "// Always lock in same order\nstd::lock(mtx1, mtx2);",
            "if (&mtx1 < &mtx2) { mtx1.lock(); mtx2.lock(); } else { mtx2.lock(); mtx1.lock(); }"
          ],
          "explanation": "Always lock in consistent order.",
          "xp": 15
        },
        {
          "id": "cpp-14-2-25",
          "type": "code",
          "question": "Thread-safe counter with mutex.",
          "correctAnswer": [
            "class Counter { std::mutex mtx; int count = 0; public: void increment() { std::lock_guard<std::mutex> lk(mtx); ++count; } int get() { std::lock_guard<std::mutex> lk(mtx); return count; } };"
          ],
          "explanation": "Mutex protects shared data.",
          "xp": 15
        }
      ],
      "lessonText": "# Mutexes and Locks\n\nThread synchronization and mutual exclusion.\n\n## Basic Mutex\n\n```cpp\nstd::mutex mtx;\nint shared = 0;\n\nvoid threadFunc() {\n    std::lock_guard<std::mutex> lock(mtx);\n    ++shared;\n}\n```\n\n## lock_guard vs unique_lock\n\n```cpp\n// lock_guard - simple, auto lock/unlock\n{\n    std::lock_guard<std::mutex> lock(mtx);\n    // Critical section\n}  // Auto unlock\n\n// unique_lock - flexible\nstd::unique_lock<std::mutex> lk(mtx);\n// Can unlock early\nlk.unlock();\n// Can lock again\nlk.lock();\n```\n\n## Shared Mutex\n\n```cpp\nstd::shared_mutex mtx;\n\n// Multiple readers\nstd::shared_lock<std::shared_mutex> lk(mtx);\n// Read operation\n\n// Single writer\nstd::unique_lock<std::shared_mutex> lk(mtx);\n// Write operation\n```\n"
    },
    {
      "id": 74,
      "title": "Condition Variables",
      "unitTitle": "14. Concurrency",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-14-3-1",
          "type": "typing",
          "question": "What is condition variable?",
          "correctAnswer": [
            "wait for condition",
            "thread synchronization"
          ],
          "explanation": "Condition variable waits for notification.",
          "xp": 5
        },
        {
          "id": "cpp-14-3-2",
          "type": "typing",
          "question": "What does notify_one do?",
          "correctAnswer": [
            "wake one waiting thread",
            "notify single thread"
          ],
          "explanation": "notify_one wakes one thread.",
          "xp": 5
        },
        {
          "id": "cpp-14-3-3",
          "type": "typing",
          "question": "What does notify_all do?",
          "correctAnswer": [
            "wake all waiting threads",
            "notify all threads"
          ],
          "explanation": "notify_all wakes all threads.",
          "xp": 5
        },
        {
          "id": "cpp-14-3-4",
          "type": "multiple",
          "question": "Must wait be with lock?",
          "options": [
            "Yes",
            "No",
            "Optional",
            "Only with unique_lock"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Wait must hold lock.",
          "xp": 5
        },
        {
          "id": "cpp-14-3-5",
          "type": "multiple",
          "question": "What can cause spurious wakeups?",
          "options": [
            "System/OS",
            "Only bugs",
            "Never",
            "Only notify"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Spurious wakeups can happen.",
          "xp": 5
        },
        {
          "id": "cpp-14-3-6",
          "type": "code",
          "question": "Create condition variable.",
          "correctAnswer": [
            "std::condition_variable cv;",
            "std::condition_variable_any cv;"
          ],
          "explanation": "std::condition_variable cv;",
          "xp": 15
        },
        {
          "id": "cpp-14-3-7",
          "type": "code",
          "question": "Wait for notification.",
          "correctAnswer": [
            "cv.wait(lock);",
            "cv.wait(lk);"
          ],
          "explanation": "condition_variable.wait(lock)",
          "xp": 15
        },
        {
          "id": "cpp-14-3-8",
          "type": "code",
          "question": "Wait with predicate.",
          "correctAnswer": [
            "cv.wait(lock, []() { return ready; });",
            "cv.wait(lk, [&] { return condition(); });"
          ],
          "explanation": "wait with predicate prevents spurious wakeups.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-9",
          "type": "code",
          "question": "Notify one thread.",
          "correctAnswer": [
            "cv.notify_one();",
            "condition.notify_one();"
          ],
          "explanation": "condition_variable.notify_one()",
          "xp": 15
        },
        {
          "id": "cpp-14-3-10",
          "type": "code",
          "question": "Notify all threads.",
          "correctAnswer": [
            "cv.notify_all();",
            "condition.notify_all();"
          ],
          "explanation": "condition_variable.notify_all()",
          "xp": 15
        },
        {
          "id": "cpp-14-3-11",
          "type": "code",
          "question": "Wait with timeout.",
          "correctAnswer": [
            "if (cv.wait_for(lock, std::chrono::milliseconds(100)) == std::cv_status::no_timeout) { /* notified */ }",
            "cv.wait_until(lk, deadline);"
          ],
          "explanation": "wait_for with timeout.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-12",
          "type": "code",
          "question": "Producer-consumer pattern.",
          "correctAnswer": [
            "// Producer\n{ std::unique_lock<std::mutex> lk(mtx); queue.push(item); cv.notify_one(); } // Consumer\n{ std::unique_lock<std::mutex> lk(mtx); cv.wait(lk, []{ return !queue.empty(); }); auto item = queue.front(); queue.pop(); }"
          ],
          "explanation": "Classic producer-consumer with condition variable.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-13",
          "type": "code",
          "question": "Worker thread with condition variable.",
          "correctAnswer": [
            "void worker() { std::unique_lock<std::mutex> lk(mtx); cv.wait(lk, []{ return ready; }); process(); }",
            "std::thread t(worker);"
          ],
          "explanation": "Worker waits for signal.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-14",
          "type": "code",
          "question": "Multiple consumers.",
          "correctAnswer": [
            "cv.notify_all();",
            "for (auto& t : workers) { /* start */ } cv.notify_all();"
          ],
          "explanation": "notify_all for multiple consumers.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-15",
          "type": "code",
          "question": "Signal with condition.",
          "correctAnswer": [
            "{ std::lock_guard<std::mutex> lk(mtx); data = value; ready = true; } cv.notify_one();",
            "signal() { std::unique_lock<std::mutex> lk(mtx); ready = true; cv.notify_one(); }"
          ],
          "explanation": "Set condition and notify.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-16",
          "type": "code",
          "question": "Wait for multiple conditions.",
          "correctAnswer": [
            "cv.wait(lock, []{ return cond1 || cond2; });",
            "cv.wait(lk, [&] { return ready || stopped; });"
          ],
          "explanation": "Predicate with multiple conditions.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-17",
          "type": "code",
          "question": "Condition variable with unique_lock.",
          "correctAnswer": [
            "std::unique_lock<std::mutex> lk(mtx); cv.wait(lk);",
            "{ std::unique_lock<std::mutex> lock(mutex); condition.wait(lock); }"
          ],
          "explanation": "unique_lock required for condition variable.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-18",
          "type": "code",
          "question": "Barrier with condition variable.",
          "correctAnswer": [
            "void barrier() { std::unique_lock<std::mutex> lk(mtx); ++arrived; cv.wait(lk, [&] { return arrived == total; }); cv.notify_all(); }",
            "cv.wait(lk, [&]{ return count == target; });"
          ],
          "explanation": "Synchronize all threads at barrier.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-19",
          "type": "code",
          "question": "Stop thread with condition variable.",
          "correctAnswer": [
            "void stop() { { std::lock_guard<std::mutex> lk(mtx); stopped = true; } cv.notify_all(); }",
            "cv.wait(lk, [&] { return stopped || work; });"
          ],
          "explanation": "Signal stop condition.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-20",
          "type": "code",
          "question": "Wait until time.",
          "correctAnswer": [
            "if (cv.wait_until(lock, deadline) == std::cv_status::no_timeout) { /* notified */ }",
            "cv.wait_until(lk, std::chrono::steady_clock::now() + std::chrono::seconds(1));"
          ],
          "explanation": "wait_until with absolute time.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-21",
          "type": "code",
          "question": "Condition variable any.",
          "correctAnswer": [
            "std::condition_variable_any cv;",
            "std::condition_variable_any condition;"
          ],
          "explanation": "condition_variable_any works with any lock.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-22",
          "type": "code",
          "question": "Thread-safe queue with condition variable.",
          "correctAnswer": [
            "template<typename T> class ThreadSafeQueue { std::queue<T> q; std::mutex mtx; std::condition_variable cv; public: void push(const T& value) { std::lock_guard<std::mutex> lk(mtx); q.push(value); cv.notify_one(); } T pop() { std::unique_lock<std::mutex> lk(mtx); cv.wait(lk, [&]{ return !q.empty(); }); T value = q.front(); q.pop(); return value; } };"
          ],
          "explanation": "Full thread-safe queue implementation.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-23",
          "type": "code",
          "question": "Event with condition variable.",
          "correctAnswer": [
            "class Event { std::mutex mtx; std::condition_variable cv; bool signaled = false; public: void signal() { { std::lock_guard<std::mutex> lk(mtx); signaled = true; } cv.notify_all(); } void wait() { std::unique_lock<std::mutex> lk(mtx); cv.wait(lk, [&]{ return signaled; }); } };"
          ],
          "explanation": "Manual reset event.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-24",
          "type": "code",
          "question": "Reader-writer lock with condition variable.",
          "correctAnswer": [
            "class RWLock { std::mutex mtx; std::condition_variable cv; int readers = 0; bool writing = false; public: void lock_read() { std::unique_lock<std::mutex> lk(mtx); cv.wait(lk, [&]{ return !writing; }); ++readers; } void unlock_read() { std::lock_guard<std::mutex> lk(mtx); --readers; if (readers == 0) cv.notify_all(); } void lock_write() { std::unique_lock<std::mutex> lk(mtx); cv.wait(lk, [&]{ return !writing && readers == 0; }); writing = true; } void unlock_write() { { std::lock_guard<std::mutex> lk(mtx); writing = false; } cv.notify_all(); } };"
          ],
          "explanation": "Reader-writer lock implementation.",
          "xp": 15
        },
        {
          "id": "cpp-14-3-25",
          "type": "code",
          "question": "Semaphore with condition variable.",
          "correctAnswer": [
            "class Semaphore { std::mutex mtx; std::condition_variable cv; int count; public: Semaphore(int c = 0) : count(c) {} void acquire() { std::unique_lock<std::mutex> lk(mtx); cv.wait(lk, [&]{ return count > 0; }); --count; } void release() { { std::lock_guard<std::mutex> lk(mtx); ++count; } cv.notify_one(); } };"
          ],
          "explanation": "Semaphore using condition variable.",
          "xp": 15
        }
      ],
      "lessonText": "# Condition Variables\n\nWait and notify for thread synchronization.\n\n## Basic Usage\n\n```cpp\nstd::mutex mtx;\nstd::condition_variable cv;\nbool ready = false;\n\nvoid worker() {\n    std::unique_lock<std::mutex> lk(mtx);\n    cv.wait(lk, []{ return ready; });  // Wait for ready\n    // Do work\n}\n\nvoid signal() {\n    {\n        std::lock_guard<std::mutex> lk(mtx);\n        ready = true;\n    }\n    cv.notify_one();  // Wake one thread\n}\n```\n\n## Producer-Consumer\n\n```cpp\nstd::queue<int> q;\nstd::mutex mtx;\nstd::condition_variable cv;\n\nvoid producer() {\n    for (int i = 0; i < 100; ++i) {\n        {\n            std::lock_guard<std::mutex> lk(mtx);\n            q.push(i);\n        }\n        cv.notify_one();\n    }\n}\n\nvoid consumer() {\n    while (true) {\n        std::unique_lock<std::mutex> lk(mtx);\n        cv.wait(lk, []{ return !q.empty(); });\n        int value = q.front();\n        q.pop();\n        // Process value\n    }\n}\n```\n"
    },
    {
      "id": 75,
      "title": "Futures and Promises",
      "unitTitle": "14. Concurrency",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-14-4-1",
          "type": "typing",
          "question": "What is std::future?",
          "correctAnswer": [
            "result from async",
            "async result"
          ],
          "explanation": "Future holds result from async operation.",
          "xp": 5
        },
        {
          "id": "cpp-14-4-2",
          "type": "typing",
          "question": "What is std::promise?",
          "correctAnswer": [
            "sets future value",
            "provider of value"
          ],
          "explanation": "Promise sets value for future.",
          "xp": 5
        },
        {
          "id": "cpp-14-4-3",
          "type": "typing",
          "question": "What is std::async?",
          "correctAnswer": [
            "run async task",
            "asynchronous execution"
          ],
          "explanation": "async runs task asynchronously.",
          "xp": 5
        },
        {
          "id": "cpp-14-4-4",
          "type": "multiple",
          "question": "Can future be copied?",
          "options": [
            "No",
            "Yes",
            "Only move",
            "Only const"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Future cannot be copied, only moved.",
          "xp": 5
        },
        {
          "id": "cpp-14-4-5",
          "type": "multiple",
          "question": "What does future.get() do?",
          "options": [
            "Wait for result",
            "Return immediately",
            "Throw error",
            "Check ready"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "get() blocks until result ready.",
          "xp": 5
        },
        {
          "id": "cpp-14-4-6",
          "type": "code",
          "question": "Run async task.",
          "correctAnswer": [
            "auto future = std::async(func);",
            "auto f = std::async(std::launch::async, function);"
          ],
          "explanation": "std::async(func)",
          "xp": 15
        },
        {
          "id": "cpp-14-4-7",
          "type": "code",
          "question": "Get future result.",
          "correctAnswer": [
            "auto result = future.get();",
            "int value = future.get();"
          ],
          "explanation": "future.get() waits and returns result.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-8",
          "type": "code",
          "question": "Create promise and future.",
          "correctAnswer": [
            "std::promise<int> prom; std::future<int> fut = prom.get_future();",
            "std::promise<std::string> p; auto f = p.get_future();"
          ],
          "explanation": "promise.get_future() creates future.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-9",
          "type": "code",
          "question": "Set promise value.",
          "correctAnswer": [
            "prom.set_value(42);",
            "promise.set_value(result);"
          ],
          "explanation": "promise.set_value()",
          "xp": 15
        },
        {
          "id": "cpp-14-4-10",
          "type": "code",
          "question": "Set promise exception.",
          "correctAnswer": [
            "prom.set_exception(std::current_exception());",
            "promise.set_exception(std::make_exception_ptr(std::runtime_error(\"error\")));"
          ],
          "explanation": "promise.set_exception()",
          "xp": 15
        },
        {
          "id": "cpp-14-4-11",
          "type": "code",
          "question": "Check if future ready.",
          "correctAnswer": [
            "if (future.wait_for(std::chrono::seconds(0)) == std::future_status::ready)",
            "if (future.wait_until(std::chrono::steady_clock::now()) == std::future_status::ready)"
          ],
          "explanation": "wait_for with zero timeout.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-12",
          "type": "code",
          "question": "Wait for timeout.",
          "correctAnswer": [
            "if (future.wait_for(std::chrono::milliseconds(100)) == std::future_status::ready) { /* ready */ }",
            "future.wait_for(std::chrono::seconds(1));"
          ],
          "explanation": "wait_for with timeout.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-13",
          "type": "code",
          "question": "Move future.",
          "correctAnswer": [
            "auto fut2 = std::move(fut);",
            "std::future<int> f2 = std::move(f1);"
          ],
          "explanation": "Move future object.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-14",
          "type": "code",
          "question": "Shared future.",
          "correctAnswer": [
            "std::shared_future<int> shared = future.share();",
            "auto sf = fut.share();"
          ],
          "explanation": "future.share() creates shared_future.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-15",
          "type": "code",
          "question": "Async with launch policy.",
          "correctAnswer": [
            "auto fut = std::async(std::launch::async, func);",
            "std::async(std::launch::deferred, function);"
          ],
          "explanation": "std::launch::async or deferred.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-16",
          "type": "code",
          "question": "Promise with void return.",
          "correctAnswer": [
            "std::promise<void> prom; prom.set_value();",
            "std::promise<void> p; p.set_value();"
          ],
          "explanation": "void promise just signals completion.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-17",
          "type": "code",
          "question": "Future from thread.",
          "correctAnswer": [
            "std::promise<int> prom; std::thread t([&prom] { try { prom.set_value(compute()); } catch (...) { prom.set_exception(std::current_exception()); } }); t.detach(); std::future<int> fut = prom.get_future();"
          ],
          "explanation": "Thread sets promise value.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-18",
          "type": "code",
          "question": "Multiple futures with wait.",
          "correctAnswer": [
            "std::vector<std::future<int>> futures; for (auto& f : futures) f.wait();",
            "for (auto& f : futures) auto result = f.get();"
          ],
          "explanation": "Wait for all futures.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-19",
          "type": "code",
          "question": "Async with lambda.",
          "correctAnswer": [
            "auto fut = std::async([]() { return compute(); });",
            "std::async(std::launch::async, [] { return 42; });"
          ],
          "explanation": "Async with lambda function.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-20",
          "type": "code",
          "question": "Future with arguments.",
          "correctAnswer": [
            "auto fut = std::async(func, arg1, arg2);",
            "std::async(std::launch::async, compute, 10, 20);"
          ],
          "explanation": "Pass arguments to async.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-21",
          "type": "code",
          "question": "Promise with move.",
          "correctAnswer": [
            "prom.set_value(std::move(result));",
            "promise.set_value(std::unique_ptr<int>(new int(42)));"
          ],
          "explanation": "set_value with move semantics.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-22",
          "type": "code",
          "question": "Wait until time.",
          "correctAnswer": [
            "future.wait_until(deadline);",
            "if (future.wait_until(std::chrono::steady_clock::now() + std::chrono::seconds(1)) == std::future_status::ready)"
          ],
          "explanation": "wait_until with absolute time.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-23",
          "type": "code",
          "question": "Async with exception handling.",
          "correctAnswer": [
            "try { auto result = future.get(); } catch (const std::exception& e) { /* handle */ }",
            "auto fut = std::async([]() -> int { if (error) throw std::runtime_error(\"error\"); return 42; });"
          ],
          "explanation": "Exceptions propagate through future.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-24",
          "type": "code",
          "question": "Promise at exit.",
          "correctAnswer": [
            "std::promise<int> prom; auto fut = prom.get_future(); // At scope exit or in destructor prom.set_value(0);",
            "struct ScopedPromise { std::promise<int> prom; ~ScopedPromise() { try { prom.set_value(0); } catch (...) { } } };"
          ],
          "explanation": "Ensure promise is set on exit.",
          "xp": 15
        },
        {
          "id": "cpp-14-4-25",
          "type": "code",
          "question": "Async task pool with futures.",
          "correctAnswer": [
            "std::vector<std::future<Result>> futures; for (int i = 0; i < n; ++i) futures.push_back(std::async(std::launch::async, task, i)); for (auto& f : futures) results.push_back(f.get());",
            "auto result = std::async(std::launch::async, [] { return compute(); });"
          ],
          "explanation": "Launch multiple async tasks.",
          "xp": 15
        }
      ],
      "lessonText": "# Futures and Promises\n\nAsynchronous result passing.\n\n## std::async\n\n```cpp\nint compute() {\n    return 42;\n}\n\nint main() {\n    // Run async\n    auto future = std::async(std::launch::async, compute);\n\n    // Do other work...\n\n    // Get result (blocks if not ready)\n    int result = future.get();\n}\n```\n\n## Promise and Future\n\n```cpp\nstd::promise<int> prom;\nstd::future<int> fut = prom.get_future();\n\n// Set value in another thread\nstd::thread t([&prom]() {\n    int result = compute();\n    prom.set_value(result);\n});\n\n// Get result\nint value = fut.get();\nt.join();\n```\n\n## Shared Future\n\n```cpp\nauto future = std::async(func);\nauto shared = future.share();  // Can be copied\n\n// Multiple threads can wait\nstd::thread t1([&]() { auto v = shared.get(); });\nstd::thread t2([&]() { auto v = shared.get(); });\n```\n"
    },
    {
      "id": 76,
      "title": "Parallel Algorithms",
      "unitTitle": "14. Concurrency",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-14-5-1",
          "type": "typing",
          "question": "What is std::execution::par?",
          "correctAnswer": [
            "parallel execution policy",
            "parallel algorithm"
          ],
          "explanation": "par policy enables parallel execution.",
          "xp": 5
        },
        {
          "id": "cpp-14-5-2",
          "type": "typing",
          "question": "What is std::execution::par_unseq?",
          "correctAnswer": [
            "parallel unsequenced",
            "vectorized"
          ],
          "explanation": "par_unseq enables parallel and vectorized.",
          "xp": 5
        },
        {
          "id": "cpp-14-5-3",
          "type": "typing",
          "question": "What is std::execution::seq?",
          "correctAnswer": [
            "sequential execution",
            "serial"
          ],
          "explanation": "seq is sequential (default).",
          "xp": 5
        },
        {
          "id": "cpp-14-5-4",
          "type": "multiple",
          "question": "Which algorithms support parallel?",
          "options": [
            "Most STL algorithms",
            "Only sort",
            "Only for_each",
            "None"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Most STL algorithms support parallel policies.",
          "xp": 5
        },
        {
          "id": "cpp-14-5-5",
          "type": "multiple",
          "question": "Are parallel algorithms thread-safe?",
          "options": [
            "User must ensure",
            "Always safe",
            "Never safe",
            "Automatic"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "User must ensure thread-safety.",
          "xp": 5
        },
        {
          "id": "cpp-14-5-6",
          "type": "code",
          "question": "Parallel for_each.",
          "correctAnswer": [
            "std::for_each(std::execution::par, v.begin(), v.end(), [](auto& x) { x *= 2; });",
            "std::for_each(std::execution::par_unseq, begin, end, lambda);"
          ],
          "explanation": "std::for_each(std::execution::par, ...) ",
          "xp": 15
        },
        {
          "id": "cpp-14-5-7",
          "type": "code",
          "question": "Parallel sort.",
          "correctAnswer": [
            "std::sort(std::execution::par, v.begin(), v.end());",
            "std::sort(std::execution::par_unseq, begin, end, comp);"
          ],
          "explanation": "std::sort(std::execution::par, ...) ",
          "xp": 15
        },
        {
          "id": "cpp-14-5-8",
          "type": "code",
          "question": "Parallel transform.",
          "correctAnswer": [
            "std::transform(std::execution::par, v.begin(), v.end(), result.begin(), [](int x) { return x * 2; });",
            "std::transform(std::execution::par_unseq, in1, in2, out, binary_op);"
          ],
          "explanation": "std::transform(std::execution::par, ...) ",
          "xp": 15
        },
        {
          "id": "cpp-14-5-9",
          "type": "code",
          "question": "Parallel reduce.",
          "correctAnswer": [
            "auto sum = std::reduce(std::execution::par, v.begin(), v.end(), 0);",
            "std::reduce(std::execution::par, begin, end, init, op);"
          ],
          "explanation": "std::reduce(std::execution::par, ...) ",
          "xp": 15
        },
        {
          "id": "cpp-14-5-10",
          "type": "code",
          "question": "Parallel count_if.",
          "correctAnswer": [
            "auto count = std::count_if(std::execution::par, v.begin(), v.end(), [](int x) { return x > 10; });",
            "std::count_if(std::execution::par_unseq, begin, end, pred);"
          ],
          "explanation": "std::count_if(std::execution::par, ...) ",
          "xp": 15
        },
        {
          "id": "cpp-14-5-11",
          "type": "code",
          "question": "Parallel find.",
          "correctAnswer": [
            "auto it = std::find(std::execution::par, v.begin(), v.end(), target);",
            "std::find(std::execution::par_unseq, begin, end, value);"
          ],
          "explanation": "std::find(std::execution::par, ...) ",
          "xp": 15
        },
        {
          "id": "cpp-14-5-12",
          "type": "code",
          "question": "Parallel copy.",
          "correctAnswer": [
            "std::copy(std::execution::par, v.begin(), v.end(), result.begin());",
            "std::copy(std::execution::par_unseq, src_begin, src_end, dst_begin);"
          ],
          "explanation": "std::copy(std::execution::par, ...) ",
          "xp": 15
        },
        {
          "id": "cpp-14-5-13",
          "type": "code",
          "question": "Parallel accumulate (reduce).",
          "correctAnswer": [
            "auto total = std::reduce(std::execution::par, v.begin(), v.end(), 0, std::plus<>{});",
            "std::reduce(std::execution::par, begin, end, 0);"
          ],
          "explanation": "std::reduce with parallel policy.",
          "xp": 15
        },
        {
          "id": "cpp-14-5-14",
          "type": "code",
          "question": "Parallel for_each_n.",
          "correctAnswer": [
            "std::for_each_n(std::execution::par, v.begin(), n, [](auto& x) { x *= 2; });",
            "std::for_each_n(std::execution::par_unseq, begin, count, func);"
          ],
          "explanation": "std::for_each_n(std::execution::par, ...) ",
          "xp": 15
        },
        {
          "id": "cpp-14-5-15",
          "type": "code",
          "question": "Parallel replace_if.",
          "correctAnswer": [
            "std::replace_if(std::execution::par, v.begin(), v.end(), [](int x) { return x < 0; }, 0);",
            "std::replace_if(std::execution::par_unseq, begin, end, pred, new_val);"
          ],
          "explanation": "std::replace_if(std::execution::par, ...) ",
          "xp": 15
        },
        {
          "id": "cpp-14-5-16",
          "type": "code",
          "question": "Parallel remove_if.",
          "correctAnswer": [
            "auto it = std::remove_if(std::execution::par, v.begin(), v.end(), [](int x) { return x == 0; });",
            "std::remove_if(std::execution::par_unseq, begin, end, pred);"
          ],
          "explanation": "std::remove_if(std::execution::par, ...) ",
          "xp": 15
        },
        {
          "id": "cpp-14-5-17",
          "type": "code",
          "question": "Parallel max_element.",
          "correctAnswer": [
            "auto it = std::max_element(std::execution::par, v.begin(), v.end());",
            "std::max_element(std::execution::par_unseq, begin, end);"
          ],
          "explanation": "std::max_element(std::execution::par, ...) ",
          "xp": 15
        },
        {
          "id": "cpp-14-5-18",
          "type": "code",
          "question": "Parallel min_element.",
          "correctAnswer": [
            "auto it = std::min_element(std::execution::par, v.begin(), v.end());",
            "std::min_element(std::execution::par_unseq, begin, end);"
          ],
          "explanation": "std::min_element(std::execution::par, ...) ",
          "xp": 15
        },
        {
          "id": "cpp-14-5-19",
          "type": "code",
          "question": "Parallel minmax_element.",
          "correctAnswer": [
            "auto [min_it, max_it] = std::minmax_element(std::execution::par, v.begin(), v.end());",
            "std::minmax_element(std::execution::par_unseq, begin, end);"
          ],
          "explanation": "std::minmax_element(std::execution::par, ...) ",
          "xp": 15
        },
        {
          "id": "cpp-14-5-20",
          "type": "code",
          "question": "Parallel scan (exclusive).",
          "correctAnswer": [
            "std::exclusive_scan(std::execution::par, v.begin(), v.end(), result.begin(), 0);",
            "std::exclusive_scan(std::execution::par_unseq, begin, end, out, init, op);"
          ],
          "explanation": "std::exclusive_scan with parallel.",
          "xp": 15
        },
        {
          "id": "cpp-14-5-21",
          "type": "code",
          "question": "Parallel scan (inclusive).",
          "correctAnswer": [
            "std::inclusive_scan(std::execution::par, v.begin(), v.end(), result.begin());",
            "std::inclusive_scan(std::execution::par_unseq, begin, end, out, op);"
          ],
          "explanation": "std::inclusive_scan with parallel.",
          "xp": 15
        },
        {
          "id": "cpp-14-5-22",
          "type": "code",
          "question": "Parallel transform_reduce.",
          "correctAnswer": [
            "auto result = std::transform_reduce(std::execution::par, v.begin(), v.end(), 0, std::plus<>{}, [](int x) { return x * x; });",
            "std::transform_reduce(std::execution::par_unseq, begin, end, init, binary_op, unary_op);"
          ],
          "explanation": "std::transform_reduce with parallel.",
          "xp": 15
        },
        {
          "id": "cpp-14-5-23",
          "type": "code",
          "question": "Thread-safe predicate in parallel.",
          "correctAnswer": [
            "std::mutex mtx; auto pred = [&](int x) { std::lock_guard<std::mutex> lk(mtx); return x > threshold; }; std::count_if(std::execution::par, v.begin(), v.end(), pred);",
            "// Ensure lambda is thread-safe - no shared writes without synchronization"
          ],
          "explanation": "Ensure predicate is thread-safe.",
          "xp": 15
        },
        {
          "id": "cpp-14-5-24",
          "type": "code",
          "question": "Parallel sort with custom comparator.",
          "correctAnswer": [
            "std::sort(std::execution::par, v.begin(), v.end(), [](int a, int b) { return a % 10 < b % 10; });",
            "std::sort(std::execution::par_unseq, begin, end, comp);"
          ],
          "explanation": "Parallel sort with comparator.",
          "xp": 15
        },
        {
          "id": "cpp-14-5-25",
          "type": "code",
          "question": "Parallel map (transform) to new container.",
          "correctAnswer": [
            "std::vector<int> result(v.size()); std::transform(std::execution::par, v.begin(), v.end(), result.begin(), [](int x) { return x * 2; });",
            "std::transform(std::execution::par_unseq, in.begin(), in.end(), out.begin(), map_func);"
          ],
          "explanation": "Parallel transform to output.",
          "xp": 15
        }
      ],
      "lessonText": "# Parallel Algorithms\n\nC++17 parallel execution policies.\n\n## Execution Policies\n\n```cpp\n#include <execution>\n\nstd::vector<int> v(1000000);\n\n// Sequential (default)\nstd::sort(v.begin(), v.end());\n\n// Parallel\nstd::sort(std::execution::par, v.begin(), v.end());\n\n// Parallel + Vectorized\nstd::sort(std::execution::par_unseq, v.begin(), v.end());\n```\n\n## Common Parallel Algorithms\n\n```cpp\n// Transform\nstd::transform(std::execution::par,\n    v.begin(), v.end(),\n    result.begin(),\n    [](int x) { return x * 2; });\n\n// Reduce\nauto sum = std::reduce(std::execution::par,\n    v.begin(), v.end(), 0);\n\n// Count\nauto count = std::count_if(std::execution::par,\n    v.begin(), v.end(),\n    [](int x) { return x > 100; });\n```\n\n## Thread Safety\n\n```cpp\n// ✓ Thread-safe - no shared writes\nstd::transform(std::execution::par,\n    v.begin(), v.end(),\n    result.begin(),\n    [](int x) { return x * 2; });\n\n// ✗ Not thread-safe - shared write\nstd::mutex mtx;\nint total = 0;\nstd::for_each(std::execution::par,\n    v.begin(), v.end(),\n    [&](int x) {\n        std::lock_guard<std::mutex> lk(mtx);\n        total += x;  // Lock needed!\n    });\n```\n"
    }
  ]
};
