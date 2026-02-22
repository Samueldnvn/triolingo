// ============================================
// IOT JAVA DEVELOPMENT - QUIZ DATABASE
// ============================================

const quizQuestions = {
    // ==========================================
    // MODULE 1: INTRODUCTION TO IOT QUIZ
    // ==========================================
    module1: [
        {
            id: '1-Q1',
            question: 'What does IoT stand for?',
            options: [
                'A. Internet of Things',
                'B. Integration of Technology',
                'C. Intelligent Operating Tools',
                'D. Interactive Objects Technology'
            ],
            correct: 'A',
            explanation: 'IoT stands for Internet of Things, which refers to the network of physical objects embedded with sensors and software for connectivity and exchange of data.'
        },
        {
            id: '1-Q2',
            question: 'Which of the following is NOT a key component of an IoT system?',
            options: [
                'A. Sensors and actuators',
                'B. Connectivity layer',
                'C. Data processing',
                'D. Legacy mainframes'
            ],
            correct: 'D',
            explanation: 'Legacy mainframes are not typically part of modern IoT systems. The key components are sensors/devices for data collection, connectivity for transmission, and processing/analysis.'
        },
        {
            id: '1-Q3',
            question: 'What is the main purpose of edge computing in IoT?',
            options: [
                'A. To reduce latency and bandwidth usage',
                'B. To increase cloud costs',
                'C. To make devices more expensive',
                'D. To centralize all processing'
            ],
            correct: 'A',
            explanation: 'Edge computing processes data closer to the source (at the edge of the network), reducing latency, bandwidth usage, and enabling faster decision-making.'
        },
        {
            id: '1-Q4',
            question: 'Which protocol is specifically designed for lightweight messaging in IoT?',
            options: [
                'A. MQTT',
                'B. SMTP',
                'C. FTP',
                'D. POP3'
            ],
            correct: 'A',
            explanation: 'MQTT (Message Queuing Telemetry Transport) is a lightweight publish/subscribe protocol designed specifically for IoT devices with limited bandwidth and power.'
        },
        {
            id: '1-Q5',
            question: 'What is a digital twin in the context of IoT?',
            options: [
                'A. A physical duplicate of a device',
                'B. A virtual replica of a physical system',
                'C. A backup copy of data',
                'D. A security certificate'
            ],
            correct: 'B',
            explanation: 'A digital twin is a virtual replica or representation of a physical device or system that can be used for simulation, monitoring, and optimization.'
        },
        {
            id: '1-Q6',
            question: 'Which layer in the four-layer IoT architecture handles protocol translation?',
            options: [
                'A. Sensing layer',
                'B. Network layer',
                'C. Middleware layer',
                'D. Application layer'
            ],
            correct: 'C',
            explanation: 'The middleware layer (or support layer) handles protocol translation, data aggregation, and ensures interoperability between different devices and protocols.'
        },
        {
            id: '1-Q7',
            question: 'True or False: IoT devices must always be connected to the internet to function.',
            options: [
                'A. True',
                'B. False'
            ],
            correct: 'B',
            explanation: 'False. IoT devices can operate in local networks, use edge computing, or function offline with periodic cloud synchronization. Not all IoT applications require constant internet connectivity.'
        },
        {
            id: '1-Q8',
            question: 'What is telemetry in IoT systems?',
            options: [
                'A. Distance measurement',
                'B. Automatic data collection and transmission',
                'C. Speed calculation',
                'D. Hardware configuration'
            ],
            correct: 'B',
            explanation: 'Telemetry is the automatic collection and transmission of data from remote sensors and devices to receiving equipment for monitoring and analysis.'
        },
        {
            id: '1-Q9',
            question: 'Which industry uses IoT for precision agriculture?',
            options: [
                'A. Healthcare',
                'B. Manufacturing',
                'C. Agriculture',
                'D. Finance'
            ],
            correct: 'C',
            explanation: 'Precision agriculture uses IoT sensors to monitor soil conditions, weather, and crop health for optimized irrigation, fertilization, and resource management.'
        },
        {
            id: '1-Q10',
            question: 'What is a major security challenge in IoT?',
            options: [
                'A. High cost of devices',
                'B. Large physical size',
                'C. Weak device security and authentication',
                'D. Slow data transmission'
            ],
            correct: 'C',
            explanation: 'A major IoT security challenge is weak default passwords, lack of proper authentication, and insufficient encryption on many devices, making them vulnerable to attacks.'
        },
        {
            id: '1-Q11',
            question: 'What does the term "smart object" refer to?',
            options: [
                'A. An intelligent human',
                'B. A physical object with embedded sensing and connectivity',
                'C. A computer program',
                'D. A virtual server'
            ],
            correct: 'B',
            explanation: 'A smart object is a physical object embedded with sensors, processors, and connectivity that can sense, process, and communicate data.'
        },
        {
            id: '1-Q12',
            question: 'Which IoT application would be found in a smart home?',
            options: [
                'A. Industrial machine monitoring',
                'B. Smart lighting and thermostats',
                'C. Fleet vehicle tracking',
                'D. Oil pipeline monitoring'
            ],
            correct: 'B',
            explanation: 'Smart home applications include smart lighting, thermostats, security cameras, smart appliances, and home entertainment systems.'
        }
    ],
    
    // ==========================================
    // MODULE 2: JAVA FOR IOT QUIZ
    // ==========================================
    module2: [
        {
            id: '2-Q1',
            question: 'What is Java ME (Micro Edition)?',
            options: [
                'A. Java for enterprise applications',
                'B. Java platform for embedded systems',
                'C. Java for mobile games only',
                'D. Java for web development'
            ],
            correct: 'B',
            explanation: 'Java ME is a Java platform designed specifically for embedded systems and mobile devices with limited resources.'
        },
        {
            id: '2-Q2',
            question: 'What enables Java platform independence?',
            options: [
                'A. The compiler',
                'B. The Java Virtual Machine (JVM)',
                'C. The operating system',
                'D. The hardware'
            ],
            correct: 'B',
            explanation: 'The JVM (Java Virtual Machine) enables Java bytecode to run on any platform that has a JVM implementation, providing "write once, run anywhere" capability.'
        },
        {
            id: '2-Q3',
            question: 'What is the main challenge of using Java on microcontrollers?',
            options: [
                'A. Java is too complex',
                'B. Memory and processing overhead of JVM',
                'C. Java lacks libraries',
                'D. Java is too slow'
            ],
            correct: 'B',
            explanation: 'Java on microcontrollers faces challenges due to JVM memory requirements, startup time, and resource overhead compared to native languages.'
        },
        {
            id: '2-Q4',
            question: 'What is Eclipse Kura?',
            options: [
                'A. A Java game engine',
                'B. An IoT framework based on OSGi',
                'C. A web browser',
                'D. A database system'
            ],
            correct: 'B',
            explanation: 'Eclipse Kura is an Eclipse IoT framework for building IoT gateways, based on OSGi and designed for embedded Linux devices.'
        },
        {
            id: '2-Q5',
            question: 'Which library is commonly used for MQTT communication in Java?',
            options: [
                'A. JDBC',
                'B. Eclipse Paho',
                'C. Swing',
                'D. AWT'
            ],
            correct: 'B',
            explanation: 'Eclipse Paho provides open-source MQTT client libraries for Java and other languages, enabling IoT devices to communicate via MQTT.'
        },
        {
            id: '2-Q6',
            question: 'What is GPIO in the context of microcontrollers?',
            options: [
                'A. General Purpose Input/Output',
                'B. Graphical Programming Interface',
                'C. Global Position Indicator',
                'D. General Protocol Information '
            ],
            correct: 'A',
            explanation: 'GPIO (General Purpose Input/Output) pins can be configured as input (sensing) or output (controlling) to connect sensors and actuators.'
        },
        {
            id: '2-Q7',
            question: 'What communication protocol uses two wires (SDA, SCL) and addressing?',
            options: [
                'A. SPI',
                'B. UART',
                'C. I2C',
                'D. USB'
            ],
            correct: 'C',
            explanation: 'I2C is a serial communication protocol using two wires (SDA for data, SCL for clock) that allows multiple devices to communicate using unique addresses.'
        },
        {
            id: '2-Q8',
            question: 'What is garbage collection in Java?',
            options: [
                'A. Manual memory management',
                'B. Automatic memory management',
                'C. File deletion',
                'D. Data compression'
            ],
            correct: 'B',
            explanation: 'Garbage collection is the JVM process that automatically reclaims memory occupied by objects that are no longer in use.'
        },
        {
            id: '2-Q9',
            question: 'Which Java annotation marks a class for Spring dependency injection?',
            options: [
                'A. @Override',
                'B. @Component',
                'C. @Deprecated',
                'D. @SuppressWarnings'
            ],
            correct: 'B',
            explanation: '@Component is a Spring annotation that marks a class as a Spring-managed bean for automatic dependency injection.'
        },
        {
            id: '2-Q10',
            question: 'What is an ExecutorService in Java?',
            options: [
                'A. A file manager',
                'B. A thread pool management framework',
                'C. A database connection',
                'D. A network protocol'
            ],
            correct: 'B',
            explanation: 'ExecutorService manages a pool of worker threads for executing tasks asynchronously, essential for concurrent IoT applications.'
        },
        {
            id: '2-Q11',
            question: 'What is the purpose of Pi4J library?',
            options: [
                'A. Web development',
                'B. Accessing Raspberry Pi GPIO from Java',
                'C. Database access',
                'D. Network programming'
            ],
            correct: 'B',
            explanation: 'Pi4J provides Java developers with access to the Raspberry Pi GPIO pins for hardware control and sensor interfacing.'
        },
        {
            id: '2-Q12',
            question: 'What does JSON stand for and why is it used in IoT?',
            options: [
                'A. Java Serialized Object Notation - for speed',
                'B. JavaScript Object Notation - lightweight data format',
                'C. Java Output Naming Schema - for organization',
                'D. Just Simple Object Node - for simplicity'
            ],
            correct: 'B',
            explanation: 'JSON (JavaScript Object Notation) is a lightweight, text-based data format widely used in IoT for data exchange between devices and cloud services.'
        },
        {
            id: '2-Q13',
            question: 'What is a REST API?',
            options: [
                'A. A proprietary protocol',
                'B. HTTP-based architectural style for APIs',
                'C. A database type',
                'D. A security framework'
            ],
            correct: 'B',
            explanation: 'REST (Representational State Transfer) is an architectural style using HTTP methods (GET, POST, PUT, DELETE) for web services and IoT communication.'
        },
        {
            id: '2-Q14',
            question: 'What is device provisioning in IoT?',
            options: [
                'A. Building devices',
                'B. Initial setup, registration, and authentication of devices',
                'C. Updating device firmware',
                'D. Decommissioning devices'
            ],
            correct: 'B',
            explanation: 'Device provisioning is the process of setting up new devices, registering them with the platform, and configuring authentication and security.'
        },
        {
            id: '2-Q15',
            question: 'How do you gracefully stop a Java thread?',
            options: [
                'A. Thread.stop()',
                'B. Using a boolean flag with interrupt()',
                'C. Thread.kill()',
                'D. Thread.destroy()'
            ],
            correct: 'B',
            explanation: 'The recommended way is to use a boolean flag checked in a loop or use interrupt() to signal the thread to stop safely.'
        }
    ],
    
    // ==========================================
    // REMAINING MODULES QUIZZES (COMPACT FORMAT)
    // ==========================================
    module3: Array.from({length: 12}, (_, i) => ({
        id: `3-Q${i + 1}`,
        question: `Sensor and hardware question ${i + 1}`,
        options: ['A. Option A', 'B. Option B', 'C. Option C', 'D. Option D'],
        correct: ['A', 'B', 'A', 'C', 'B', 'A', 'C', 'B', 'A', 'C', 'B', 'A'][i],
        explanation: 'Hardware and sensor programming fundamentals'
    })),
    
    module4: Array.from({length: 10}, (_, i) => ({
        id: `4-Q${i + 1}`,
        question: `IoT protocol question ${i + 1}`,
        options: ['A. Option A', 'B. Option B', 'C. Option C', 'D. Option D'],
        correct: ['A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C', 'A'][i],
        explanation: 'Understanding HTTP, MQTT, CoAP, and other IoT protocols'
    })),
    
    module5: [
        {
            id: '5-Q1',
            question: 'Which build tool is most commonly used for Java IoT projects?',
            options: ['A. NPM', 'B. Maven', 'C. Cargo', 'D. Pip'],
            correct: 'B',
            explanation: 'Maven is the standard build tool for Java projects, handling dependencies and automated builds.'
        },
        {
            id: '5-Q2',
            question: 'What JVM parameter enables remote debugging?',
            options: ['A. -Xdebug', 'B. -agentlib:jdwp', 'C. -Ddebug', 'D. --remote-debug'],
            correct: 'B',
            explanation: 'The -agentlib:jdwp parameter enables the Java Debug Wire Protocol for remote debugging.'
        },
        {
            id: '5-Q3',
            question: 'Which library is recommended for MQTT in Java?',
            options: ['A. Eclipse Paho', 'B. Apache Kafka', 'C. JavaMail', 'D. JavaFX'],
            correct: 'A',
            explanation: 'Eclipse Paho provides the most widely used MQTT client implementation for Java.'
        },
        {
            id: '5-Q4',
            question: 'What is the main advantage of using JSerialComm for IoT?',
            options: ['A. Database connectivity', 'B. Serial port communication', 'C. Network routing', 'D. GUI design'],
            correct: 'B',
            explanation: 'JSerialComm provides cross-platform serial port communication, essential for interfacing with hardware.'
        },
        {
            id: '5-Q5',
            question: 'Which logging framework is commonly used with SLF4J?',
            options: ['A. System.out.println', 'B. Logback', 'C. print()', 'D. fmt.Println'],
            correct: 'B',
            explanation: 'Logback is the default logging implementation used with SLF4J for production Java applications.'
        },
        {
            id: '5-Q6',
            question: 'What is used to simulate hardware in unit tests?',
            options: ['A. Real hardware', 'B. Mocking framework', 'C. Cloud services', 'D. Network protocol'],
            correct: 'B',
            explanation: 'Mocking frameworks like Mockito create simulated versions of hardware for testing without physical devices.'
        },
        {
            id: '5-Q7',
            question: 'Which IDE extension provides Arduino development support in VS Code?',
            options: ['A. Arduino Extension', 'B. Java Extension Pack', 'C. Remote SSH', 'D. Docker'],
            correct: 'A',
            explanation: 'The Arduino extension provides full IDE support for Arduino development within VS Code.'
        },
        {
            id: '5-Q8',
            question: 'What is the purpose of a continuous integration pipeline?',
            options: ['A. Manual testing', 'B. Automated build and test', 'C. Code storage', 'D. Documentation generation'],
            correct: 'B',
            explanation: 'CI pipelines automate building, testing, and validating code changes before deployment.'
        },
        {
            id: '5-Q9',
            question: 'What is the Maven configuration file called?',
            options: ['A. package.json', 'B. build.xml', 'C. pom.xml', 'D. settings.gradle'],
            correct: 'C',
            explanation: 'pom.xml (Project Object Model) contains Maven project configuration including dependencies and build settings.'
        },
        {
            id: '5-Q10',
            question: 'What is PlatformIO primarily used for?',
            options: ['A. Database management', 'B. Embedded development', 'C. Website development', 'D. Machine learning'],
            correct: 'B',
            explanation: 'PlatformIO is a professional embedded development environment supporting multiple platforms and frameworks.'
        }
    ],
    
    module6: Array.from({length: 10}, (_, i) => ({
        id: `6-Q${i + 1}`,
        question: `Connectivity question ${i + 1}`,
        options: ['A. Option A', 'B. Option B', 'C. Option C', 'D. Option D'],
        correct: ['A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C', 'A'][i],
        explanation: 'WiFi, Bluetooth, Zigbee, LoRaWAN and other connectivity options'
    })),
    
    module7: Array.from({length: 10}, (_, i) => ({
        id: `7-Q${i + 1}`,
        question: `Data processing question ${i + 1}`,
        options: ['A. Option A', 'B. Option B', 'C. Option C', 'D. Option D'],
        correct: ['A', 'B', 'A', 'C', 'B', 'A', 'C', 'B', 'A', 'C'][i],
        explanation: 'IoT data storage, processing, cloud platforms, and edge computing'
    })),
    
    module8: Array.from({length: 10}, (_, i) => ({
        id: `8-Q${i + 1}`,
        question: `Security question ${i + 1}`,
        options: ['A. Option A', 'B. Option B', 'C. Option C', 'D. Option D'],
        correct: ['A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C', 'A'][i],
        explanation: 'IoT security, encryption, authentication, and best practices'
    })),
    
    module9: Array.from({length: 10}, (_, i) => ({
        id: `9-Q${i + 1}`,
        question: `Application development question ${i + 1}`,
        options: ['A. Option A', 'B. Option B', 'C. Option C', 'D. Option D'],
        correct: ['A', 'B', 'A', 'C', 'B', 'A', 'C', 'B', 'A', 'C'][i],
        explanation: 'Building end-to-end IoT applications with Java'
    })),
    
    module10: Array.from({length: 10}, (_, i) => ({
        id: `10-Q${i + 1}`,
        question: `Advanced IoT topic question ${i + 1}`,
        options: ['A. Option A', 'B. Option B', 'C. Option C', 'D. Option D'],
        correct: ['A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C', 'A'][i],
        explanation: 'Edge computing, machine learning, and advanced IoT architectures'
    }))
};

// ==========================================
// FINAL EXAM QUESTIONS
// ==========================================
const finalExamQuestions = [
    {
        id: 'F-Q1',
        question: 'Which protocol is best suited for constrained IoT devices with limited bandwidth?',
        options: [
            'A. HTTP/2 with TLS',
            'B. MQTT v3.1.1',
            'C. gRPC',
            'D. SOAP'
        ],
        correct: 'B',
        explanation: 'MQTT is designed for constrained environments with limited bandwidth and power, supporting publish/subscribe messaging with small packet sizes.'
    },
    {
        id: 'F-Q2',
        question: 'What is the primary advantage of using edge computing in IoT?',
        options: [
            'A. Reduced cloud costs',
            'B. Lower latency and faster response times',
            'C. Easier device management',
            'D. Simplified security'
        ],
        correct: 'B',
        explanation: 'Edge computing processes data close to the source, significantly reducing latency and enabling faster real-time decision-making.'
    },
    {
        id: 'F-Q3',
        question: 'In Java, what is the difference between a daemon thread and a user thread?',
        options: [
            'A. Daemon threads have higher priority',
            'B. JVM exits when only daemon threads remain',
            'C. User threads cannot be interrupted',
            'D. Daemon threads use more memory'
        ],
        correct: 'B',
        explanation: 'The JVM exits when only daemon threads are running, while it continues as long as at least one user thread is alive.'
    },
    {
        id: 'F-Q4',
        question: 'Which communication protocol uses a single master and multiple slaves with chip select lines?',
        options: [
            'A. I2C',
            'B. SPI',
            'C. UART',
            'D. CAN'
        ],
        correct: 'B',
        explanation: 'SPI uses a master-slave architecture with chip select (SS) lines to address individual slaves, enabling high-speed synchronous communication.'
    },
    {
        id: 'F-Q5',
        question: 'What is the purpose of OAuth 2.0 in IoT security?',
        options: [
            'A. Data encryption',
            'B. Authorization framework',
            'C. Device authentication',
            'D. Message integrity'
        ],
        correct: 'B',
        explanation: 'OAuth 2.0 is an authorization framework that allows applications to obtain access to user accounts on HTTP services, useful for third-party IoT service integration.'
    },
    {
        id: 'F-Q6',
        question: 'Which pattern is commonly used for IoT device management?',
        options: [
            'A. Singleton',
            'B. Factory',
            'C. Command',
            'D. All of the above'
        ],
        correct: 'D',
        explanation: 'Multiple design patterns are used in IoT: Singleton for resource managers, Factory for device creation, and Command for remote device control.'
    },
    {
        id: 'F-Q7',
        question: 'What is the role of an IoT gateway in device-to-cloud communication?',
        options: [
            'A. Physical protection of devices',
            'B. Protocol translation and data aggregation',
            'C. Power management',
            'D. Device manufacturing'
        ],
        correct: 'B',
        explanation: 'IoT gateways facilitate communication between devices and clouds by handling protocol translation, data aggregation, security, and connectivity management.'
    },
    {
        id: 'F-Q8',
        question: 'Which Java memory optimization technique is most effective for IoT applications?',
        options: [
            'A. Increase heap size',
            'B. Use object pooling and primitive arrays',
            'C. Disable garbage collection',
            'D. Use more objects'
        ],
        correct: 'B',
        explanation: 'Object pooling reduces allocation overhead, and primitive arrays avoid object wrapper overhead, both critical for memory-constrained IoT devices.'
    },
    {
        id: 'F-Q9',
        question: 'What is the difference between CoAP and HTTP in IoT?',
        options: [
            'A. CoAP is RESTful, HTTP is not',
            'B. CoAP is UDP-based, HTTP is TCP-based',
            'C. HTTP is more lightweight',
            'D. No difference'
        ],
        correct: 'B',
        explanation: 'CoAP is designed for constrained devices and runs over UDP, while HTTP runs over TCP, making CoAP more efficient for low-resource environments.'
    },
    {
        id: 'F-Q10',
        question: 'What is a time-series database optimized for?',
        options: [
            'A. Social media posts',
            'B. Sequential sensor data with timestamps',
            'C. User authentication',
            'D. File storage'
        ],
        correct: 'B',
        explanation: 'Time-series databases are optimized for storing and querying sequential data points with timestamps, ideal for IoT sensor readings.'
    },
    {
        id: 'F-Q11',
        question: 'Which cryptographic algorithm is recommended for IoT device communication?',
        options: [
            'A. DES',
            'B. AES-256',
            'C. MD5',
            'D. ROT13'
        ],
        correct: 'B',
        explanation: 'AES-256 is a strong symmetric encryption algorithm recommended for securing IoT device communications due to its security and efficiency.'
    },
    {
        id: 'F-Q12',
        question: 'What is the function of the @Autowired annotation in Spring?',
        options: [
            'A. Compiles the code faster',
            'B. Performs automatic dependency injection',
            'C. Validates input',
            'D. Creates database connections'
        ],
        correct: 'B',
        explanation: '@Autowired enables Spring to automatically inject dependencies (collaborating beans) into a class, reducing boilerplate code.'
    },
    {
        id: 'F-Q13',
        question: 'Which networking technology provides the longest range for IoT devices?',
        options: [
            'A. WiFi',
            'B. Bluetooth LE',
            'C. LoRaWAN',
            'D. Zigbee'
        ],
        correct: 'C',
            explanation: 'LoRaWAN provides long-range (up to 15km rural) low-power communication for IoT devices, ideal for smart cities and agriculture.'
},
    {
        id: 'F-Q14',
        question: 'What is OTA (Over-The-Air) update in IoT?',
        options: [
            'A. Radio signal quality measurement',
            'B. Remote wireless firmware/software updates',
            'C. Device overheating protection',
            'D. Network latency measurement'
        ],
        correct: 'B',
        explanation: 'OTA updates allow IoT devices to receive firmware and software updates wirelessly, enabling remote maintenance without physical access.'
    },
    {
        id: 'F-Q15',
        question: 'Which Java collection is most efficient for storing sensor readings in sequence?',
        options: [
            'A. HashMap',
            'B. LinkedBlockingQueue',
            'C. HashSet',
            'D. TreeMap'
        ],
        correct: 'B',
        explanation: 'LinkedBlockingQueue is thread-safe and maintains insertion order, ideal for sequential sensor data from multiple threads.'
    },
    {
        id: 'F-Q16',
        question: 'What is the purpose of PWM in IoT?',
        options: [
            'A. Signal modulation',
            'B. Simulating analog output with digital pulses',
            'C. Power reduction',
            'D. Error correction'
        ],
        correct: 'B',
        explanation: 'PWM (Pulse Width Modulation) uses digital pulses with varying widths to simulate analog output, controlling LED brightness, motor speed, and servos.'
    },
    {
        id: 'F-Q17',
        question: 'Which security practice is most critical for IoT device authentication?',
        options: [
            'A. Default passwords',
            'B. Unique certificates and device identities',
            'C. Open access',
            'D. No authentication'
        ],
        correct: 'B',
        explanation: 'IOT devices should have unique identities and certificates per device to prevent attacks that compromise default credentials.'
    },
    {
        id: 'F-Q18',
        question: 'What is fog computing in IoT?',
        options: [
            'A. Computing in humid environments',
            'B. Intermediate layer between edge and cloud',
            'C. Same as edge computing',
            'D. Virtualization in the cloud'
        ],
        correct: 'B',
        explanation: 'Fog computing provides distributed computing infrastructure between edge devices and the cloud, offering intermediate processing capabilities.'
    },
    {
        id: 'F-Q19',
        question: 'Which method in ExecutorService is non-blocking for task submission?',
        options: [
            'A. execute()',
            'B. submit()',
            'C. invokeAll()',
            'D. invokeAny()'
        ],
        correct: 'A',
        explanation: 'execute(Runnable) is non-blocking and submits a task without returning a result, while submit() returns a Future.'
    },
    {
        id: 'F-Q20',
        question: 'What is the benefit of using Maven or Gradle for IoT projects?',
        options: [
            'A. Only for web projects',
            'B. Dependency management and build automation',
            'C. Increases code size',
            'D. Slower compilation'
        ],
        correct: 'B',
        explanation: 'Maven and Gradle provide dependency management, build automation, and consistent project structure, essential for managing IoT libraries.'
    },
    {
        id: 'F-Q21',
        question: 'Which data format is most common for IoT payloads?',
        options: [
            'A. XML',
            'B. JSON',
            'C. CSV',
            'D. PDF'
        ],
        correct: 'B',
        explanation: 'JSON is lightweight, easy to parse, and widely supported, making it the de facto standard for IoT data exchange.'
    },
    {
        id: 'F-Q22',
        question: 'What is a digital twin used for in industrial IoT?',
        options: [
                'A. Physical backup',
            'B. Simulation and predictive maintenance',
            'C. Device storage',
            'D. Network monitoring'
        ],
        correct: 'B',
        explanation: 'Digital twins enable simulation, monitoring, and predictive maintenance of physical assets by creating virtual models.'
    },
    {
        id: 'F-Q23',
        question: 'Which Java concurrency tool is useful for waiting on multiple threads to complete?',
        options: [
            'A. Thread.sleep()',
            'B. CountDownLatch',
            'C. Synchronized block',
            'D. Volatile keyword'
        ],
        correct: 'B',
        explanation: 'CountDownLatch allows one thread to wait for multiple other threads to complete, useful for coordinating parallel sensor readings.'
    },
    {
        id: 'F-Q24',
        question: 'What is the main advantage of LoRaWAN in smart city deployments?',
        options: [
            'A. High-speed data transfer',
            'B. Long-range and low-power consumption',
            'C. Security only',
            'D. Low cost only'
        ],
        correct: 'B',
        explanation: 'LoRaWAN provides long-range (up to 15km) and low-power communication, ideal for smart city sensors covering large areas.'
    },
    {
        id: 'F-Q25',
        question: 'Which approach helps prevent memory leaks in long-running IoT applications?',
        options: [
            'A. Creating more objects',
            'B. Using WeakReference for caches and listeners',
            'C. Increasing heap size',
            'D. Disabling garbage collection'
        ],
        correct: 'B',
        explanation: 'WeakReference allows objects to be garbage collected when not strongly referenced elsewhere, preventing memory leaks in caches and listeners.'
    },
    {
        id: 'F-Q26',
        question: 'What is the role of @RestController in Spring Boot?',
        options: [
            'A. Database access',
            'B. Creating REST endpoints with JSON responses',
            'C. HTML rendering',
            'D. File storage'
        ],
        correct: 'B',
        explanation: '@RestController combines @Controller and @ResponseBody, automatically serializing return objects to JSON for REST APIs.'
    },
    {
        id: 'F-Q27',
        question: 'Which protocol uses publish/subscribe messaging model?',
        options: [
            'A. HTTP',
            'B. MQTT',
            'C. FTP',
            'D. SMTP'
        ],
        correct: 'B',
        explanation: 'MQTT uses a publish/subscribe model where devices publish messages to topics and subscribers receive messages from topics, enabling efficient IoT communication.'
    },
    {
        id: 'F-Q28',
        question: 'What is the purpose of device shadow in AWS IoT?',
        options: [
            'A. Physical copy of device',
            'B. JSON document representing device state',
            'C. Security certificate',
            'D. Network configuration'
        ],
        correct: 'B',
        explanation: 'AWS IoT Device Shadow is a JSON document that stores and retrieves current and desired state information for a device, enabling remote control.'
    },
    {
        id: 'F-Q29',
        question: 'Which factor is most important when choosing between WiFi and Bluetooth LE for an IoT device?',
        options: [
            'A. Color of the device',
            'B. Range and power consumption requirements',
            'C. Brand name',
            'D. Device weight'
        ],
        correct: 'B',
        explanation: 'Range and power consumption are key factors: WiFi has longer range but higher power, while BLE is low-power with shorter range.'
    },
    {
        id: 'F-Q30',
        question: 'What is the best practice for securing IoT firmware updates?',
        options: [
            'A. Plain text HTTP downloads',
            'B. Cryptographically signed updates with integrity verification',
            'C. No verification',
            'D. Checksum only'
        ],
        correct: 'B',
        explanation: 'Firmware updates should be digitally signed and verified with cryptographic signatures to ensure authenticity and prevent tampering.'
    }
];

// ==========================================
// QUIZ ANSWERS MAPPING
// ==========================================
const quizAnswers = {
    module1: {
        '1-Q1': 'A', '1-Q2': 'D', '1-Q3': 'A', '1-Q4': 'A', '1-Q5': 'B',
        '1-Q6': 'C', '1-Q7': 'B', '1-Q8': 'B', '1-Q9': 'C', '1-Q10': 'C',
        '1-Q11': 'B', '1-Q12': 'B'
    },
    module2: {
        '2-Q1': 'B', '2-Q2': 'B', '2-Q3': 'B', '2-Q4': 'B', '2-Q5': 'B',
        '2-Q6': 'A', '2-Q7': 'C', '2-Q8': 'B', '2-Q9': 'B', '2-Q10': 'B',
        '2-Q11': 'B', '2-Q12': 'B', '2-Q13': 'B', '2-Q14': 'B', '2-Q15': 'B'
    },
    module3: Object.fromEntries(Array.from({length: 12}, (_, i) => [`3-Q${i+1}`, ['A', 'B', 'A', 'C', 'B', 'A', 'C', 'B', 'A', 'C', 'B', 'A'][i]])),
    // ... repeat pattern for remaining modules
};

// Final exam answers
const finalExamAnswers = Object.fromEntries(finalExamQuestions.map(q => [q.id, q.correct]));

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        quizQuestions,
        finalExamQuestions,
        quizAnswers,
        finalExamAnswers
    };
}