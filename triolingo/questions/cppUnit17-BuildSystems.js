// C++ Unit 17 - Build Systems and Tooling
// Generated from cppCombined.js

window.cppUnit17 = {
  "unitId": "17",
  "unitName": "17. Build Systems and Tooling",
  "lessons": [
    {
      "id": 86,
      "title": "Makefiles",
      "unitTitle": "17. Build Systems and Tooling",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-17-1-1",
          "type": "typing",
          "question": "What is Make?",
          "correctAnswer": [
            "build automation tool",
            "build system"
          ],
          "explanation": "Make is build automation tool.",
          "xp": 5
        },
        {
          "id": "cpp-17-1-2",
          "type": "typing",
          "question": "What is Makefile?",
          "correctAnswer": [
            "Make script",
            "build description"
          ],
          "explanation": "Makefile contains build rules.",
          "xp": 5
        },
        {
          "id": "cpp-17-1-3",
          "type": "typing",
          "question": "What is target in Make?",
          "correctAnswer": [
            "output file",
            "build target"
          ],
          "explanation": "Target is output to build.",
          "xp": 5
        },
        {
          "id": "cpp-17-1-4",
          "type": "multiple",
          "question": "What character starts comment in Makefile?",
          "options": [
            "#",
            "//",
            "/*",
            ";"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "# starts comments.",
          "xp": 5
        },
        {
          "id": "cpp-17-1-5",
          "type": "multiple",
          "question": "How to run make?",
          "options": [
            "make command",
            "run Makefile",
            "build",
            "compile"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Type 'make' to build.",
          "xp": 5
        },
        {
          "id": "cpp-17-1-6",
          "type": "code",
          "question": "Simple Makefile target.",
          "correctAnswer": [
            "all: g++ -o program main.cpp",
            "program: main.cpp\tg++ -o program main.cpp"
          ],
          "explanation": "target: dependencies\\n\\tcommand",
          "xp": 15
        },
        {
          "id": "cpp-17-1-7",
          "type": "code",
          "question": "Define variable in Makefile.",
          "correctAnswer": [
            "CXX = g++",
            "CXXFLAGS = -Wall -Wextra",
            "CC=gcc"
          ],
          "explanation": "VARIABLE = value",
          "xp": 15
        },
        {
          "id": "cpp-17-1-8",
          "type": "code",
          "question": "Use variable in Makefile.",
          "correctAnswer": [
            "$(CXX) $(CXXFLAGS) -o $@ $^",
            "$(CC) $(FLAGS) source.c"
          ],
          "explanation": "$(VARIABLE)",
          "xp": 15
        },
        {
          "id": "cpp-17-1-9",
          "type": "code",
          "question": "Automatic variables $@.",
          "correctAnswer": [
            "all: program\nprogram: main.o utils.o\t$(CXX) -o $@ $^",
            "$@ = target name"
          ],
          "explanation": "$@ expands to target name.",
          "xp": 15
        },
        {
          "id": "cpp-17-1-10",
          "type": "code",
          "question": "Automatic variables $^.",
          "correctAnswer": [
            "program: main.o utils.o\t$(CXX) -o $@ $^",
            "$^ = all dependencies"
          ],
          "explanation": "$^ expands to all dependencies.",
          "xp": 15
        },
        {
          "id": "cpp-17-1-11",
          "type": "code",
          "question": "Automatic variables $<.",
          "correctAnswer": [
            "%.o: %.cpp\t$(CXX) -c $< -o $@",
            "$< = first dependency"
          ],
          "explanation": "$< expands to first dependency.",
          "xp": 15
        },
        {
          "id": "cpp-17-1-12",
          "type": "code",
          "question": "Pattern rule.",
          "correctAnswer": [
            "%.o: %.cpp\t$(CXX) $(CXXFLAGS) -c $< -o $@",
            "%.o: %.c\t$(CC) -c $< -o $@"
          ],
          "explanation": "%.o: %.cpp",
          "xp": 15
        },
        {
          "id": "cpp-17-1-13",
          "type": "code",
          "question": "PHONY target.",
          "correctAnswer": [
            ".PHONY: clean all",
            ".PHONY: clean install"
          ],
          "explanation": ".PHONY: prevents file conflict.",
          "xp": 15
        },
        {
          "id": "cpp-17-1-14",
          "type": "code",
          "question": "Clean target.",
          "correctAnswer": [
            "clean:\n\trm -f *.o program",
            "clean:\n\trm *.o *.exe"
          ],
          "explanation": "clean: removes build artifacts.",
          "xp": 15
        },
        {
          "id": "cpp-17-1-15",
          "type": "code",
          "question": "Multiple targets.",
          "correctAnswer": [
            "all: program library\nprogram: main.o utils.o\nlibrary: lib.o",
            "build: app lib"
          ],
          "explanation": "List multiple targets.",
          "xp": 15
        },
        {
          "id": "cpp-17-1-16",
          "type": "code",
          "question": "Include other Makefile.",
          "correctAnswer": [
            "include Makefile.common",
            "include defs.mk"
          ],
          "explanation": "include other_makefile",
          "xp": 15
        },
        {
          "id": "cpp-17-1-17",
          "type": "code",
          "question": "Conditional in Makefile.",
          "correctAnswer": [
            "ifdef DEBUG\nCXXFLAGS += -g\nendif",
            "ifeq ($(OS),Linux)"
          ],
          "explanation": "ifdef/ifeq conditionals.",
          "xp": 15
        },
        {
          "id": "cpp-17-1-18",
          "type": "code",
          "question": "Function in Makefile.",
          "correctAnswer": [
            "SRC = $(wildcard *.cpp)",
            "OBJ = $(SRC:.cpp=.o)"
          ],
          "explanation": "Functions like wildcard, subst.",
          "xp": 15
        },
        {
          "id": "cpp-17-1-19",
          "type": "code",
          "question": "Make with multiple directories.",
          "correctAnswer": [
            "VPATH = src include",
            "vpath %.cpp src",
            "VPATH = src:include"
          ],
          "explanation": "VPATH sets search path.",
          "xp": 15
        },
        {
          "id": "cpp-17-1-20",
          "type": "code",
          "question": "Recursive make.",
          "correctAnswer": [
            "subsystem:\n\t$(MAKE) -C subdir",
            "subdir:\n\tcd subdir && $(MAKE)"
          ],
          "explanation": "$(MAKE) -C directory",
          "xp": 15
        },
        {
          "id": "cpp-17-1-21",
          "type": "code",
          "question": "Silent rule.",
          "correctAnswer": [
            "@echo Building...",
            "@$(CXX) -o $@ $^"
          ],
          "explanation": "@ suppresses command echo.",
          "xp": 15
        },
        {
          "id": "cpp-17-1-22",
          "type": "code",
          "question": "Ignore errors.",
          "correctAnswer": [
            "clean:\n\t-rm *.o",
            "-rm file.o"
          ],
          "explanation": "- prefix ignores errors.",
          "xp": 15
        },
        {
          "id": "cpp-17-1-23",
          "type": "code",
          "question": "Make with variables from command line.",
          "correctAnswer": [
            "make DEBUG=1",
            "make CXX=clang++"
          ],
          "explanation": "make VAR=value",
          "xp": 15
        },
        {
          "id": "cpp-17-1-24",
          "type": "code",
          "question": "Default target.",
          "correctAnswer": [
            "all: program",
            "all: app library"
          ],
          "explanation": "First target is default.",
          "xp": 15
        },
        {
          "id": "cpp-17-1-25",
          "type": "code",
          "question": "Make with parallel builds.",
          "correctAnswer": [
            "make -j4",
            "make -j$(nproc)"
          ],
          "explanation": "-j enables parallel jobs.",
          "xp": 15
        }
      ],
      "lessonText": "# Makefiles\n\nBuild automation with Make.\n\n## Basic Makefile\n\n```makefile\nCC = gcc\nCXX = g++\nCXXFLAGS = -Wall -Wextra\n\nall: program\n\nprogram: main.o utils.o\n\t$(CXX) -o $@ $^\n\n%.o: %.cpp\n\t$(CXX) $(CXXFLAGS) -c $< -o $@\n\nclean:\n\trm -f *.o program\n\n.PHONY: clean all\n```\n\n## Automatic Variables\n\n- `$@` - Target name\n- `$^` - All dependencies\n- `$<` - First dependency\n\n## Running Make\n\n```bash\nmake           # Build default target\nmake clean     # Clean build artifacts\nmake -j4       # Parallel build with 4 jobs\n```\n"
    },
    {
      "id": 87,
      "title": "CMake Basics",
      "unitTitle": "17. Build Systems and Tooling",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-17-2-1",
          "type": "typing",
          "question": "What is CMake?",
          "correctAnswer": [
            "build system generator",
            "meta-build system"
          ],
          "explanation": "CMake generates build files.",
          "xp": 5
        },
        {
          "id": "cpp-17-2-2",
          "type": "typing",
          "question": "What is CMakeLists.txt?",
          "correctAnswer": [
            "CMake configuration file",
            "build script"
          ],
          "explanation": "CMakeLists.txt defines project.",
          "xp": 5
        },
        {
          "id": "cpp-17-2-3",
          "type": "typing",
          "question": "How to configure with CMake?",
          "correctAnswer": [
            "cmake",
            "cmake -S . -B build"
          ],
          "explanation": "cmake generates build files.",
          "xp": 5
        },
        {
          "id": "cpp-17-2-4",
          "type": "multiple",
          "question": "How to build after CMake?",
          "options": [
            "cmake --build build",
            "make build",
            "build cmake",
            "run cmake"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "cmake --build build",
          "xp": 5
        },
        {
          "id": "cpp-17-2-5",
          "type": "multiple",
          "question": "What is minimum CMake version?",
          "options": [
            "cmake_minimum_required",
            "project version",
            "cmake version",
            "target version"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "cmake_minimum_required() sets version.",
          "xp": 5
        },
        {
          "id": "cpp-17-2-6",
          "type": "code",
          "question": "Define minimum CMake version.",
          "correctAnswer": [
            "cmake_minimum_required(VERSION 3.10)",
            "cmake_minimum_required(VERSION 3.15)"
          ],
          "explanation": "cmake_minimum_required(VERSION x.y)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-7",
          "type": "code",
          "question": "Define project.",
          "correctAnswer": [
            "project(MyProject VERSION 1.0 LANGUAGES CXX)",
            "project(MyApp CXX)"
          ],
          "explanation": "project(Name VERSION x.y LANGUAGES CXX)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-8",
          "type": "code",
          "question": "Add executable.",
          "correctAnswer": [
            "add_executable(myapp main.cpp)",
            "add_executable(program main.cpp utils.cpp)"
          ],
          "explanation": "add_executable(name sources...)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-9",
          "type": "code",
          "question": "Add library.",
          "correctAnswer": [
            "add_library(mylib STATIC lib.cpp)",
            "add_library(mylib SHARED lib.cpp)"
          ],
          "explanation": "add_library(name STATIC/SHARED sources...)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-10",
          "type": "code",
          "question": "Set C++ standard.",
          "correctAnswer": [
            "set(CMAKE_CXX_STANDARD 17)",
            "set(CMAKE_CXX_STANDARD 20)"
          ],
          "explanation": "set(CMAKE_CXX_STANDARD 17)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-11",
          "type": "code",
          "question": "Require C++ standard.",
          "correctAnswer": [
            "set(CMAKE_CXX_STANDARD_REQUIRED ON)",
            "set(CMAKE_CXX_STANDARD_REQUIRED TRUE)"
          ],
          "explanation": "CMAKE_CXX_STANDARD_REQUIRED ON",
          "xp": 15
        },
        {
          "id": "cpp-17-2-12",
          "type": "code",
          "question": "Link library.",
          "correctAnswer": [
            "target_link_libraries(myapp PRIVATE mylib)",
            "target_link_libraries(app PRIVATE pthread)"
          ],
          "explanation": "target_link_libraries(target LINK_TYPE lib...)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-13",
          "type": "code",
          "question": "Include directory.",
          "correctAnswer": [
            "target_include_directories(myapp PRIVATE include)",
            "include_directories(include)"
          ],
          "explanation": "target_include_directories(target PRIVATE dir...)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-14",
          "type": "code",
          "question": "Find package.",
          "correctAnswer": [
            "find_package(Boost REQUIRED)",
            "find_package(Python3 REQUIRED)"
          ],
          "explanation": "find_package(Package REQUIRED)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-15",
          "type": "code",
          "question": "Configure and build.",
          "correctAnswer": [
            "cmake -S . -B build && cmake --build build",
            "cmake -B build && cmake --build build"
          ],
          "explanation": "cmake -S . -B build && cmake --build build",
          "xp": 15
        },
        {
          "id": "cpp-17-2-16",
          "type": "code",
          "question": "Set compiler flags.",
          "correctAnswer": [
            "target_compile_options(myapp PRIVATE -Wall -Wextra)",
            "set(CMAKE_CXX_FLAGS \"-O2 -Wall\")"
          ],
          "explanation": "target_compile_options(target PRIVATE flags...)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-17",
          "type": "code",
          "question": "Add subdirectory.",
          "correctAnswer": [
            "add_subdirectory(subdir)",
            "add_subdirectory(lib)"
          ],
          "explanation": "add_subdirectory(dir)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-18",
          "type": "code",
          "question": "Link found package.",
          "correctAnswer": [
            "target_link_libraries(myapp PRIVATE Boost::system)",
            "target_link_libraries(app PRIVATE Python3::Python)"
          ],
          "explanation": "Package::target_name",
          "xp": 15
        },
        {
          "id": "cpp-17-2-19",
          "type": "code",
          "question": "Set output directory.",
          "correctAnswer": [
            "set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)",
            "set(CMAKE_LIBRARY_OUTPUT_DIRECTORY lib)"
          ],
          "explanation": "CMAKE_RUNTIME_OUTPUT_DIRECTORY",
          "xp": 15
        },
        {
          "id": "cpp-17-2-20",
          "type": "code",
          "question": "Add definitions.",
          "correctAnswer": [
            "target_compile_definitions(myapp PRIVATE DEBUG)",
            "add_definitions(-DDEBUG)"
          ],
          "explanation": "target_compile_definitions(target PRIVATE defs...)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-21",
          "type": "code",
          "question": "Install target.",
          "correctAnswer": [
            "install(TARGETS myapp DESTINATION bin)",
            "install(TARGETS mylib DESTINATION lib)"
          ],
          "explanation": "install(TARGETS target DESTINATION dir)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-22",
          "type": "code",
          "question": "Fetch content (CMake 3.11+).",
          "correctAnswer": [
            "include(FetchContent)\nFetchContent_Declare(\n  googletest\n  GIT_REPOSITORY https://github.com/google/googletest.git\n  GIT_TAG release-1.11.0\n)\nFetchContent_MakeAvailable(googletest)",
            "FetchContent_Declare"
          ],
          "explanation": "FetchContent for dependencies.",
          "xp": 15
        },
        {
          "id": "cpp-17-2-23",
          "type": "code",
          "question": "Option variable.",
          "correctAnswer": [
            "option(ENABLE_TESTS \"Build tests\" ON)",
            "option(BUILD_SHARED_LIBS \"Build shared\" OFF)"
          ],
          "explanation": "option(VAR \"description\" default)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-24",
          "type": "code",
          "question": "Check if option enabled.",
          "correctAnswer": [
            "if(ENABLE_TESTS)\n  add_subdirectory(tests)\nendif()",
            "if(BUILD_TESTS)"
          ],
          "explanation": "if(VAR)",
          "xp": 15
        },
        {
          "id": "cpp-17-2-25",
          "type": "code",
          "question": "Generator expressions.",
          "correctAnswer": [
            "target_compile_options(myapp PRIVATE $<$<CXX_COMPILER_ID:GNU>:-Wall>)",
            "$<$<CONFIG:Debug>:-g>"
          ],
          "explanation": "$<condition:value> for conditional.",
          "xp": 15
        }
      ],
      "lessonText": "# CMake Basics\n\nCross-platform build system.\n\n## CMakeLists.txt\n\n```cmake\ncmake_minimum_required(VERSION 3.10)\nproject(MyApp VERSION 1.0 LANGUAGES CXX)\n\nset(CMAKE_CXX_STANDARD 17)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\n\nadd_executable(myapp main.cpp utils.cpp)\ntarget_include_directories(myapp PRIVATE include)\ntarget_link_libraries(myapp PRIVATE mylib)\n\ninstall(TARGETS myapp DESTINATION bin)\n```\n\n## Building\n\n```bash\n# Configure\ncmake -S . -B build\n\n# Build\ncmake --build build\n\n# Clean\ncmake --build build --target clean\n```\n\n## Common Commands\n\n- `add_executable()` - Create executable\n- `add_library()` - Create library\n- `target_link_libraries()` - Link libraries\n- `target_include_directories()` - Add include paths\n- `find_package()` - Find dependencies\n"
    },
    {
      "id": 88,
      "title": "Dependency Management",
      "unitTitle": "17. Build Systems and Tooling",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-17-3-1",
          "type": "typing",
          "question": "What is package manager?",
          "correctAnswer": [
            "manages dependencies",
            "install libraries"
          ],
          "explanation": "Package manager handles dependencies.",
          "xp": 5
        },
        {
          "id": "cpp-17-3-2",
          "type": "typing",
          "question": "What is vcpkg?",
          "correctAnswer": [
            "C++ package manager",
            "Microsoft package manager"
          ],
          "explanation": "vcpkg is C++ package manager.",
          "xp": 5
        },
        {
          "id": "cpp-17-3-3",
          "type": "typing",
          "question": "What is Conan?",
          "correctAnswer": [
            "C++ package manager",
            "dependency manager"
          ],
          "explanation": "Conan is C++ package manager.",
          "xp": 5
        },
        {
          "id": "cpp-17-3-4",
          "type": "multiple",
          "question": "What system package manager for Ubuntu?",
          "options": [
            "apt",
            "yum",
            "brew",
            "choco"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "apt for Ubuntu.",
          "xp": 5
        },
        {
          "id": "cpp-17-3-5",
          "type": "multiple",
          "question": "What system package manager for macOS?",
          "options": [
            "brew",
            "apt",
            "yum",
            "pacman"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "Homebrew for macOS.",
          "xp": 5
        },
        {
          "id": "cpp-17-3-6",
          "type": "code",
          "question": "Install with apt.",
          "correctAnswer": [
            "sudo apt install libboost-all-dev",
            "sudo apt install nlohmann-json3-dev"
          ],
          "explanation": "sudo apt install package",
          "xp": 15
        },
        {
          "id": "cpp-17-3-7",
          "type": "code",
          "question": "Install with brew.",
          "correctAnswer": [
            "brew install boost",
            "brew install nlohmann-json"
          ],
          "explanation": "brew install package",
          "xp": 15
        },
        {
          "id": "cpp-17-3-8",
          "type": "code",
          "question": "Install package with vcpkg.",
          "correctAnswer": [
            "vcpkg install boost",
            "vcpkg install nlohmann-json:x64-linux"
          ],
          "explanation": "vcpkg install package",
          "xp": 15
        },
        {
          "id": "cpp-17-3-9",
          "type": "code",
          "question": "Integrate vcpkg with CMake.",
          "correctAnswer": [
            "cmake -DCMAKE_TOOLCHAIN_FILE=[vcpkg root]/scripts/buildsystems/vcpkg.cmake ..",
            "set(CMAKE_TOOLCHAIN_FILE path/to/vcpkg.cmake)"
          ],
          "explanation": "CMAKE_TOOLCHAIN_FILE for vcpkg.",
          "xp": 15
        },
        {
          "id": "cpp-17-3-10",
          "type": "code",
          "question": "Install with Conan.",
          "correctAnswer": [
            "conan install . --build=missing",
            "conan install conanfile.txt"
          ],
          "explanation": "conan install",
          "xp": 15
        },
        {
          "id": "cpp-17-3-11",
          "type": "code",
          "question": "Conan conanfile.txt.",
          "correctAnswer": [
            "[requires]\nboost/1.74.0\nnlohmann_json/3.9.1\n\n[generators]\ncmake",
            "[requires]"
          ],
          "explanation": "[requires]\\npackage/version\\n\\n[generators]cmake",
          "xp": 15
        },
        {
          "id": "cpp-17-3-12",
          "type": "code",
          "question": "Conan conanfile.txt with CMake integration.",
          "correctAnswer": [
            "[requires]\nnlohmann_json/3.9.1\n\n[generators]\ncmake\nCMakeDeps\nCMakeToolchain",
            "[generators]\\ncmake\\nCMakeDeps\\nCMakeToolchain"
          ],
          "explanation": "Use CMakeDeps and CMakeToolchain.",
          "xp": 15
        },
        {
          "id": "cpp-17-3-13",
          "type": "code",
          "question": "Include Conan in CMake.",
          "correctAnswer": [
            "find_package(nlohmann_json REQUIRED)",
            "target_link_libraries(myapp PRIVATE nlohmann_json::nlohmann_json)"
          ],
          "explanation": "find_package(Package)",
          "xp": 15
        },
        {
          "id": "cpp-17-3-14",
          "type": "code",
          "question": "Header-only library.",
          "correctAnswer": [
            "add_library(mylib INTERFACE)",
            "target_include_directories(mylib INTERFACE include)",
            "INTERFACE library"
          ],
          "explanation": "INTERFACE for header-only.",
          "xp": 15
        },
        {
          "id": "cpp-17-3-15",
          "type": "code",
          "question": "FetchContent with CMake.",
          "correctAnswer": [
            "include(FetchContent)\nFetchContent_Declare(\n  fmtlib\n  GIT_REPOSITORY https://github.com/fmtlib/fmt.git\n  GIT_TAG 7.1.3\n)\nFetchContent_MakeAvailable(fmtlib)",
            "FetchContent_Declare"
          ],
          "explanation": "FetchContent for git dependencies.",
          "xp": 15
        },
        {
          "id": "cpp-17-3-16",
          "type": "code",
          "question": "Git submodule.",
          "correctAnswer": [
            "git submodule add https://github.com/user/repo.git external/repo",
            "git submodule update --init --recursive"
          ],
          "explanation": "git submodule add URL path",
          "xp": 15
        },
        {
          "id": "cpp-17-3-17",
          "type": "code",
          "question": "Add submodule in CMake.",
          "correctAnswer": [
            "add_subdirectory(external/repo)",
            "add_subdirectory(third_party/lib)"
          ],
          "explanation": "add_subdirectory for submodules.",
          "xp": 15
        },
        {
          "id": "cpp-17-3-18",
          "type": "code",
          "question": "Install system development package.",
          "correctAnswer": [
            "sudo apt install libssl-dev",
            "sudo apt install libcurl4-openssl-dev"
          ],
          "explanation": "-dev suffix for headers.",
          "xp": 15
        },
        {
          "id": "cpp-17-3-19",
          "type": "code",
          "question": "Pkg-config with CMake.",
          "correctAnswer": [
            "find_package(PkgConfig REQUIRED)\npkg_check_modules(GTK REQUIRED gtk+-3.0)",
            "pkg_check_modules(OPENSSL REQUIRED openssl)"
          ],
          "explanation": "PkgConfig for system packages.",
          "xp": 15
        },
        {
          "id": "cpp-17-3-20",
          "type": "code",
          "question": "Link pkg-config library.",
          "correctAnswer": [
            "target_link_libraries(myapp PRIVATE ${GTK_LIBRARIES})",
            "target_include_directories(myapp PRIVATE ${GTK_INCLUDE_DIRS})"
          ],
          "explanation": "${PKG_LIBRARIES}",
          "xp": 15
        },
        {
          "id": "cpp-17-3-21",
          "type": "code",
          "question": "Vcpkg manifest mode.",
          "correctAnswer": [
            "vcpkg.json",
            "vcpkg configuration"
          ],
          "explanation": "vcpkg.json in project root.",
          "xp": 15
        },
        {
          "id": "cpp-17-3-22",
          "type": "code",
          "question": "Vcpkg manifest example.",
          "correctAnswer": [
            "{\n  \"name\": \"myapp\",\n  \"version\": \"1.0\",\n  \"dependencies\": [\n    \"boost\",\n    \"nlohmann-json\"\n  ]\n}",
            "{ \"dependencies\": [...] }"
          ],
          "explanation": "JSON manifest for vcpkg.",
          "xp": 15
        },
        {
          "id": "cpp-17-3-23",
          "type": "code",
          "question": "External project.",
          "correctAnswer": [
            "include(ExternalProject)\nExternalProject_Add(googletest\n  GIT_REPOSITORY https://github.com/google/googletest.git\n  GIT_TAG release-1.11.0\n  SOURCE_DIR ${CMAKE_BINARY_DIR}/googletest-src\n  BINARY_DIR ${CMAKE_BINARY_DIR}/googletest-build\n)",
            "ExternalProject_Add"
          ],
          "explanation": "ExternalProject for external build.",
          "xp": 15
        },
        {
          "id": "cpp-17-3-24",
          "type": "code",
          "question": "Check if package found.",
          "correctAnswer": [
            "if(TARGET Boost::system)",
            "if(Boost_FOUND)",
            "if(PKGCONFIG_FOUND)"
          ],
          "explanation": "if(TARGET Package::target)",
          "xp": 15
        },
        {
          "id": "cpp-17-3-25",
          "type": "code",
          "question": "Optional dependency.",
          "correctAnswer": [
            "find_package(OpenSSL)\nif(OPENSSL_FOUND)\n  target_link_libraries(myapp PRIVATE OpenSSL::SSL)\nendif()",
            "find_package without REQUIRED"
          ],
          "explanation": "find_package without REQUIRED.",
          "xp": 15
        }
      ],
      "lessonText": "# Dependency Management\n\nManaging C++ libraries and packages.\n\n## System Package Managers\n\n```bash\n# Ubuntu/Debian\nsudo apt install libboost-all-dev\n\n# macOS\nbrew install boost\n\n# Windows (vcpkg)\nvcpkg install boost\n```\n\n## Conan\n\n```bash\n# Install Conan\npip install conan\n\n# conanfile.txt\n[requires]\nnlohmann_json/3.9.1\n\n[generators]\ncmake\nCMakeDeps\nCMakeToolchain\n\n# Install\nconan install . --build=missing\n```\n\n## FetchContent\n\n```cmake\ninclude(FetchContent)\nFetchContent_Declare(\n  fmtlib\n  GIT_REPOSITORY https://github.com/fmtlib/fmt.git\n  GIT_TAG 7.1.3\n)\nFetchContent_MakeAvailable(fmtlib)\n\ntarget_link_libraries(myapp PRIVATE fmt::fmt)\n```\n"
    },
    {
      "id": 89,
      "title": "Static vs Dynamic Linking",
      "unitTitle": "17. Build Systems and Tooling",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-17-4-1",
          "type": "typing",
          "question": "What is static linking?",
          "correctAnswer": [
            "library linked at compile",
            "embedded in executable"
          ],
          "explanation": "Static linking embeds library.",
          "xp": 5
        },
        {
          "id": "cpp-17-4-2",
          "type": "typing",
          "question": "What is dynamic linking?",
          "correctAnswer": [
            "library loaded at runtime",
            "shared library"
          ],
          "explanation": "Dynamic linking loads at runtime.",
          "xp": 5
        },
        {
          "id": "cpp-17-4-3",
          "type": "typing",
          "question": "Static library extension?",
          "correctAnswer": [
            ".a",
            ".lib"
          ],
          "explanation": ".a (Linux), .lib (Windows).",
          "xp": 5
        },
        {
          "id": "cpp-17-4-4",
          "type": "multiple",
          "question": "Dynamic library extension on Linux?",
          "options": [
            ".so",
            ".a",
            ".dll",
            ".lib"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": ".so for shared object.",
          "xp": 5
        },
        {
          "id": "cpp-17-4-5",
          "type": "multiple",
          "question": "Which produces smaller executable?",
          "options": [
            "Static",
            "Dynamic",
            "Same",
            "Depends"
          ],
          "correctAnswer": [
            1
          ],
          "explanation": "Dynamic produces smaller binary.",
          "xp": 5
        },
        {
          "id": "cpp-17-4-6",
          "type": "code",
          "question": "Create static library with CMake.",
          "correctAnswer": [
            "add_library(mylib STATIC lib.cpp)",
            "add_library(mylib STATIC source1.cpp source2.cpp)"
          ],
          "explanation": "add_library(name STATIC sources...)",
          "xp": 15
        },
        {
          "id": "cpp-17-4-7",
          "type": "code",
          "question": "Create shared library with CMake.",
          "correctAnswer": [
            "add_library(mylib SHARED lib.cpp)",
            "add_library(mylib SHARED source.cpp)"
          ],
          "explanation": "add_library(name SHARED sources...)",
          "xp": 15
        },
        {
          "id": "cpp-17-4-8",
          "type": "code",
          "question": "Create static library with GCC.",
          "correctAnswer": [
            "g++ -c -fPIC lib.cpp\nar rcs libmylib.a lib.o",
            "gcc -c source.c; ar rcs libname.a source.o"
          ],
          "explanation": "ar rcs for static library.",
          "xp": 15
        },
        {
          "id": "cpp-17-4-9",
          "type": "code",
          "question": "Create shared library with GCC.",
          "correctAnswer": [
            "g++ -shared -fPIC -o libmylib.so lib.cpp",
            "gcc -shared -fPIC -o libname.so source.c"
          ],
          "explanation": "-shared for shared library.",
          "xp": 15
        },
        {
          "id": "cpp-17-4-10",
          "type": "code",
          "question": "Link static library.",
          "correctAnswer": [
            "g++ -o app main.cpp -L. -lmylib",
            "g++ -o program main.cpp libmylib.a"
          ],
          "explanation": "-Lpath -lname",
          "xp": 15
        },
        {
          "id": "cpp-17-4-11",
          "type": "code",
          "question": "Link shared library.",
          "correctAnswer": [
            "g++ -o app main.cpp -L. -lmylib",
            "g++ -o program main.cpp libmylib.so"
          ],
          "explanation": "-Lpath -lname",
          "xp": 15
        },
        {
          "id": "cpp-17-4-12",
          "type": "code",
          "question": "Set RPATH for shared library.",
          "correctAnswer": [
            "g++ -o app main.cpp -Wl,-rpath,/usr/local/lib -lmylib",
            "target_link_options(myapp PRIVATE \"-Wl,-rpath,$ORIGIN/../lib\")"
          ],
          "explanation": "-Wl,-rpath,path",
          "xp": 15
        },
        {
          "id": "cpp-17-4-13",
          "type": "code",
          "question": "Check if library is static.",
          "correctAnswer": [
            "file libmylib.a",
            "ar -t libmylib.a",
            "nm libmylib.a"
          ],
          "explanation": "file command identifies type.",
          "xp": 15
        },
        {
          "id": "cpp-17-4-14",
          "type": "code",
          "question": "Check library dependencies.",
          "correctAnswer": [
            "ldd app",
            "otool -L app",
            "dumpbin /dependents app.exe"
          ],
          "explanation": "ldd shows linked libraries.",
          "xp": 15
        },
        {
          "id": "cpp-17-4-15",
          "type": "code",
          "question": "Position independent code.",
          "correctAnswer": [
            "g++ -c -fPIC lib.cpp",
            "gcc -c -fPIC source.c"
          ],
          "explanation": "-fPIC for position independent code.",
          "xp": 15
        },
        {
          "id": "cpp-17-4-16",
          "type": "code",
          "question": "Visibility for shared library.",
          "correctAnswer": [
            "__attribute__((visibility(\"default\")))",
            "#pragma GCC visibility push(default)"
          ],
          "explanation": "visibility attribute for symbols.",
          "xp": 15
        },
        {
          "id": "cpp-17-4-17",
          "type": "code",
          "question": "Hide symbols.",
          "correctAnswer": [
            "-fvisibility=hidden",
            "__attribute__((visibility(\"hidden\")))"
          ],
          "explanation": "-fvisibility=hidden hides symbols.",
          "xp": 15
        },
        {
          "id": "cpp-17-4-18",
          "type": "code",
          "question": "CMake install library.",
          "correctAnswer": [
            "install(TARGETS mylib DESTINATION lib)",
            "install(FILES libmylib.a DESTINATION lib)"
          ],
          "explanation": "install(TARGETS target DESTINATION dir)",
          "xp": 15
        },
        {
          "id": "cpp-17-4-19",
          "type": "code",
          "question": "CMake set output name.",
          "correctAnswer": [
            "set_target_properties(mylib PROPERTIES OUTPUT_NAME \"mylib\")",
            "set_target_properties(lib PROPERTIES PREFIX \"\")"
          ],
          "explanation": "set_target_properties for properties.",
          "xp": 15
        },
        {
          "id": "cpp-17-4-20",
          "type": "code",
          "question": "Link with static library explicitly.",
          "correctAnswer": [
            "target_link_libraries(myapp PRIVATE /path/to/libmylib.a)",
            "g++ -o app main.cpp /full/path/lib.a"
          ],
          "explanation": "Full path to .a file.",
          "xp": 15
        },
        {
          "id": "cpp-17-4-21",
          "type": "code",
          "question": "Whole-archive static library.",
          "correctAnswer": [
            "target_link_libraries(myapp PRIVATE -Wl,--whole-archive libmylib -Wl,--no-whole-archive)",
            "g++ -Wl,--whole-archive -lmylib -Wl,--no-whole-archive"
          ],
          "explanation": "--whole-archive links all symbols.",
          "xp": 15
        },
        {
          "id": "cpp-17-4-22",
          "type": "code",
          "question": "Shared library versioning.",
          "correctAnswer": [
            "g++ -shared -Wl,-soname,libmylib.so.1 -o libmylib.so.1.0 lib.o",
            "-Wl,-soname,name"
          ],
          "explanation": "-soname for shared library version.",
          "xp": 15
        },
        {
          "id": "cpp-17-4-23",
          "type": "code",
          "question": "Create symbolic link for library.",
          "correctAnswer": [
            "ln -s libmylib.so.1.0 libmylib.so.1",
            "ln -s libmylib.so libmylib.so.1"
          ],
          "explanation": "ln -s target linkname",
          "xp": 15
        },
        {
          "id": "cpp-17-4-24",
          "type": "code",
          "question": "Static linking with CMake.",
          "correctAnswer": [
            "target_link_libraries(myapp PRIVATE /path/to/libmylib.a)",
            "set(CMAKE_FIND_LIBRARY_SUFFIXES .a)"
          ],
          "explanation": "Link .a file directly.",
          "xp": 15
        },
        {
          "id": "cpp-17-4-25",
          "type": "code",
          "question": "Dynamic library search path.",
          "correctAnswer": [
            "export LD_LIBRARY_PATH=/path/to/lib:$LD_LIBRARY_PATH",
            "ldconfig"
          ],
          "explanation": "LD_LIBRARY_PATH for runtime.",
          "xp": 15
        }
      ],
      "lessonText": "# Static vs Dynamic Linking\n\nLibrary linking strategies.\n\n## Static Linking\n\n```bash\n# Create static library\ng++ -c -fPIC lib.cpp\nar rcs libmylib.a lib.o\n\n# Link static library\ng++ -o app main.cpp libmylib.a\n```\n\n## Dynamic Linking\n\n```bash\n# Create shared library\ng++ -shared -fPIC -o libmylib.so lib.cpp\n\n# Link shared library\ng++ -o app main.cpp -L. -lmylib\n\n# Run\nLD_LIBRARY_PATH=. ./app\n```\n\n## CMake\n\n```cmake\n# Static library\nadd_library(mylib STATIC lib.cpp)\n\n# Shared library\nadd_library(mylib SHARED lib.cpp)\n\n# Link\ntarget_link_libraries(myapp PRIVATE mylib)\n```\n"
    },
    {
      "id": 90,
      "title": "Debugging Tools (gdb, sanitizers)",
      "unitTitle": "17. Build Systems and Tooling",
      "xp": 85,
      "type": "lesson",
      "difficulty": "intermediate",
      "questions": [
        {
          "id": "cpp-17-5-1",
          "type": "typing",
          "question": "What is GDB?",
          "correctAnswer": [
            "GNU debugger",
            "debugging tool"
          ],
          "explanation": "GDB is GNU debugger.",
          "xp": 5
        },
        {
          "id": "cpp-17-5-2",
          "type": "typing",
          "question": "How to compile with debug symbols?",
          "correctAnswer": [
            "-g flag",
            "debug symbols"
          ],
          "explanation": "-g flag adds debug info.",
          "xp": 5
        },
        {
          "id": "cpp-17-5-3",
          "type": "typing",
          "question": "What is AddressSanitizer?",
          "correctAnswer": [
            "memory error detector",
            "detects memory bugs"
          ],
          "explanation": "ASan detects memory errors.",
          "xp": 5
        },
        {
          "id": "cpp-17-5-4",
          "type": "multiple",
          "question": "How to start GDB?",
          "options": [
            "gdb executable",
            "run gdb",
            "debug app",
            "start gdb"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "gdb ./app",
          "xp": 5
        },
        {
          "id": "cpp-17-5-5",
          "type": "multiple",
          "question": "GDB run command?",
          "options": [
            "run",
            "start",
            "execute",
            "go"
          ],
          "correctAnswer": [
            0
          ],
          "explanation": "run starts program.",
          "xp": 5
        },
        {
          "id": "cpp-17-5-6",
          "type": "code",
          "question": "Compile with debug symbols.",
          "correctAnswer": [
            "g++ -g -o app main.cpp",
            "gcc -g -Wall -o program source.c"
          ],
          "explanation": "-g flag for debug symbols.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-7",
          "type": "code",
          "question": "Compile with ASan.",
          "correctAnswer": [
            "g++ -fsanitize=address -g -o app main.cpp",
            "clang++ -fsanitize=address -g app.cpp"
          ],
          "explanation": "-fsanitize=address for ASan.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-8",
          "type": "code",
          "question": "Compile with UBSan.",
          "correctAnswer": [
            "g++ -fsanitize=undefined -g -o app main.cpp",
            "clang++ -fsanitize=undefined app.cpp"
          ],
          "explanation": "-fsanitize=undefined for UBSan.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-9",
          "type": "code",
          "question": "Compile with ThreadSanitizer.",
          "correctAnswer": [
            "g++ -fsanitize=thread -g -o app main.cpp",
            "clang++ -fsanitize=thread app.cpp"
          ],
          "explanation": "-fsanitize=thread for TSan.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-10",
          "type": "code",
          "question": "GDB breakpoint.",
          "correctAnswer": [
            "break main",
            "break 42",
            "break MyClass::method"
          ],
          "explanation": "break location",
          "xp": 15
        },
        {
          "id": "cpp-17-5-11",
          "type": "code",
          "question": "GDB next command.",
          "correctAnswer": [
            "next",
            "n"
          ],
          "explanation": "next steps over functions.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-12",
          "type": "code",
          "question": "GDB step command.",
          "correctAnswer": [
            "step",
            "s"
          ],
          "explanation": "step steps into functions.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-13",
          "type": "code",
          "question": "GDB continue.",
          "correctAnswer": [
            "continue",
            "c"
          ],
          "explanation": "continue resumes execution.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-14",
          "type": "code",
          "question": "GDB print variable.",
          "correctAnswer": [
            "print variable",
            "p var",
            "display value"
          ],
          "explanation": "print variable_name",
          "xp": 15
        },
        {
          "id": "cpp-17-5-15",
          "type": "code",
          "question": "GDB backtrace.",
          "correctAnswer": [
            "backtrace",
            "bt",
            "where"
          ],
          "explanation": "backtrace shows call stack.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-16",
          "type": "code",
          "question": "GDB watch variable.",
          "correctAnswer": [
            "watch variable",
            "watch x"
          ],
          "explanation": "watch stops when changed.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-17",
          "type": "code",
          "question": "GDB quit.",
          "correctAnswer": [
            "quit",
            "q",
            "exit"
          ],
          "explanation": "quit exits GDB.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-18",
          "type": "code",
          "question": "Compile with LeakSanitizer.",
          "correctAnswer": [
            "g++ -fsanitize=leak -g -o app main.cpp",
            "clang++ -fsanitize=leak app.cpp"
          ],
          "explanation": "-fsanitize=leak for LSan.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-19",
          "type": "code",
          "question": "GDB list source.",
          "correctAnswer": [
            "list",
            "l"
          ],
          "explanation": "list shows source code.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-20",
          "type": "code",
          "question": "GDB set breakpoint condition.",
          "correctAnswer": [
            "break 42 if x == 10",
            "break main if argc > 1"
          ],
          "explanation": "break line if condition",
          "xp": 15
        },
        {
          "id": "cpp-17-5-21",
          "type": "code",
          "question": "GDB finish command.",
          "correctAnswer": [
            "finish",
            "fin"
          ],
          "explanation": "finish runs to function end.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-22",
          "type": "code",
          "question": "GDB set variable.",
          "correctAnswer": [
            "set variable x = 10",
            "set var = value"
          ],
          "explanation": "set variable name = value",
          "xp": 15
        },
        {
          "id": "cpp-17-5-23",
          "type": "code",
          "question": "GDB frame command.",
          "correctAnswer": [
            "frame 2",
            "f 0"
          ],
          "explanation": "frame selects stack frame.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-24",
          "type": "code",
          "question": "Compile with all sanitizers.",
          "correctAnswer": [
            "g++ -fsanitize=address,undefined -g -o app main.cpp",
            "clang++ -fsanitize=address,thread,undefined app.cpp"
          ],
          "explanation": "-fsanitize=list for multiple.",
          "xp": 15
        },
        {
          "id": "cpp-17-5-25",
          "type": "code",
          "question": "GDB info locals.",
          "correctAnswer": [
            "info locals",
            "info variables"
          ],
          "explanation": "info locals shows local vars.",
          "xp": 15
        }
      ],
      "lessonText": "# Debugging Tools\n\nGDB and Sanitizers.\n\n## GDB Basics\n\n```bash\n# Compile with debug symbols\ng++ -g -o app main.cpp\n\n# Start GDB\ngdb ./app\n\n# Common commands\n(gdb) break main        # Set breakpoint\n(gdb) run             # Run program\n(gdb) next            # Step over\n(gdb) step            # Step into\n(gdb) print x         # Print variable\n(gdb) backtrace       # Show stack\n(gdb) continue        # Continue\n(gdb) quit            # Quit\n```\n\n## Sanitizers\n\n```bash\n# AddressSanitizer (detects memory errors)\ng++ -fsanitize=address -g -o app main.cpp\n\n# UndefinedBehaviorSanitizer\ng++ -fsanitize=undefined -g -o app main.cpp\n\n# ThreadSanitizer (detects data races)\ng++ -fsanitize=thread -g -o app main.cpp\n```\n\n## Common GDB Commands\n\n- `break/b` - Set breakpoint\n- `run/r` - Start program\n- `next/n` - Step over\n- `step/s` - Step into\n- `print/p` - Print variable\n- `backtrace/bt` - Stack trace\n- `continue/c` - Continue execution\n- `watch` - Watch variable\n- `info locals` - Show local variables\n"
    }
  ]
};
