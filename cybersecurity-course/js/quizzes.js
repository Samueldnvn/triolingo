// ============================================
// QUIZ DATABASE
// ============================================

const quizQuestions = {};

// Module 1: Foundations & Fundamentals Quiz
quizQuestions.foundations = [
    {
        id: 'Q1-1',
        question: 'Which of the following is NOT one of the CIA triad principles?',
        options: [
            'A. Confidentiality',
            'B. Integrity',
            'C. Authorization',
            'D. Availability'
        ],
        correct: 'C',
        explanation: 'The CIA triad consists of Confidentiality, Integrity, and Availability. Authorization is related but not a core principal of the CIA triad.'
    },
    {
        id: 'Q1-2',
        question: 'Which malware type attaches itself to legitimate programs and requires user action to spread?',
        options: [
            'A. Worm',
            'B. Virus',
            'C. Trojan',
            'D. Ransomware'
        ],
        correct: 'B',
        explanation: 'Viruses attach themselves to legitimate programs and files, requiring user action (executing infected files) to spread. Worms spread automatically, trojans disguise as legitimate software, and ransomware encrypts data.'
    },
    {
        id: 'Q1-3',
        question: 'What is the primary goal of a DDoS attack?',
        options: [
            'A. Steal sensitive data',
            'B. Gain unauthorized access',
            'C. Make services unavailable',
            'D. Install malware'
        ],
        correct: 'C',
        explanation: 'DDoS (Distributed Denial of Service) attacks aim to make services unavailable by overwhelming them with traffic from multiple sources. The primary goal is disruption through availability compromise.'
    },
    {
        id: 'Q1-4',
        question: 'Which type of phishing attack is specifically targeted at high-profile individuals?',
        options: [
            'A. Spear phishing',
            'B. Whaling',
            'C. Vishing',
            'D. Smishing'
        ],
        correct: 'B',
        explanation: 'Whaling is a type of spear phishing specifically targeting high-profile individuals like executives or wealthy individuals. It uses highly personalized information to increase success rates.'
    },
    {
        id: 'Q1-5',
        question: 'What attack injects malicious scripts into web pages viewed by others?',
        options: [
            'A. SQL injection',
            'B. Cross-site scripting (XSS)',
            'C. Cross-site request forgery (CSRF)',
            'D. Remote code execution (RCE)'
        ],
        correct: 'B',
        explanation: 'Cross-site scripting (XSS) injects malicious scripts into web pages that execute when other users view them. SQL injection targets databases, CSRF tricks users into unwanted actions, and RCE directly executes code.'
    },
    {
        id: 'Q1-6',
        question: 'Which principle ensures that data has not been modified without authorization?',
        options: [
            'A. Confidentiality',
            'B. Integrity',
            'C. Availability',
            'D. Authentication'
        ],
        correct: 'B',
        explanation: 'Integrity ensures data remains accurate, complete, and unmodified by unauthorized parties. Hashing, digital signatures, and version control support integrity.'
    },
    {
        id: 'Q1-7',
        question: 'What is the primary defense against SQL injection?',
        options: [
            'A. Input validation',
            'B. Parameterized queries',
            'C. Both A and B',
            'D. Neither A nor B'
        ],
        correct: 'C',
        explanation: 'The best defense against SQL injection combines input validation (sanitizing input) with parameterized queries/prepared statements (separating SQL code from data). Both are needed for comprehensive protection.'
    },
    {
        id: 'Q1-8',
        question: 'What is a zero-day vulnerability?',
        options: [
            'A. A bug fixed within 24 hours',
            'B. A vulnerability unknown to the vendor and unpatched',
            'C. A vulnerability that affects only Windows',
            'D. A vulnerability with no security impact'
        ],
        correct: 'B',
        explanation: 'Zero-day vulnerabilities are security flaws unknown to software vendors with no available patch. Attackers can exploit them before defenders learn about them. The name refers to the number of days the vendor has had to fix it: zero.'
    },
    {
        id: 'Q1-9',
        question: 'Which malware type encrypts data and demands payment for decryption?',
        options: [
            'A. Spyware',
            'B. Rootkit',
            'C. Keylogger',
            'D. Ransomware'
        ],
        correct: 'D',
        explanation: 'Ransomware encrypts victim data and demands payment for the decryption key. Spyware monitors activity, rootkits hide malware presence, and keyloggers record keystrokes.'
    },
    {
        id: 'Q1-10',
        question: 'What is the best single action an organization can take to protect against phishing?',
        options: [
            'A. Install expensive security software',
            'B. Conduct regular user awareness training',
            'C. Block all external email',
            'D. Never click any links'
        ],
        correct: 'B',
        explanation: 'While technical controls help, phishing primarily targets humans. Regular user awareness training that teaches employees to identify phishing attempts, verify senders, and report suspicious emails is the most effective single defense.'
    },
    {
        id: 'Q1-11',
        question: 'Which risk management strategy accepts risk?',
        options: [
            'A. Avoid',
            'B. Mitigate',
            'C. Accept',
            'D. Transfer'
        ],
        correct: 'C',
        explanation: 'Risk acceptance acknowledges the risk and chooses to live with it. Avoidance eliminates activities creating risk, mitigation reduces likelihood or impact, and transfer shifts risk elsewhere (e.g., insurance).'
    },
    {
        id: 'Q1-12',
        question: 'What is the difference between authenticity and confidentiality?',
        options: [
            'A. They are the same principle',
            'B. Authenticity verifies origin, confidentiality restricts access',
            'C. Confidentiality verifies origin, authenticity restricts access',
            'D. Authenticity ensures availability, confidentiality prevents modification'
        ],
        correct: 'B',
        explanation: 'Authenticity verifies the identity of the sender or source (proving communication is legitimate). Confidentiality ensures only authorized parties can access information. These are complementary but distinct security goals.'
    }
];

// Module 2: Network Security Quiz
quizQuestions.networkSecurity = [
    {
        id: 'Q2-1',
        question: 'Which protocol is connectionless and unreliable?',
        options: [
            'A. TCP',
            'B. UDP',
            'C. ICMP',
            'D. ARP'
        ],
        correct: 'B',
        explanation: 'UDP is connectionless and unreliable - it does not establish connections, guarantee delivery, or ensure ordering. TCP is connection-oriented and reliable, ICMP is for control messages, and ARP resolves IP to MAC addresses.'
    },
    {
        id: 'Q2-2',
        question: 'What is the primary function of a firewall?',
        options: [
            'A. Encrypt all network traffic',
            'B. Monitor and filter network traffic based on rules',
            'C. Automatically patch vulnerabilities',
            'D. Generate reports on user activity'
        ],
        correct: 'B',
        explanation: 'Firewalls monitor and filter network traffic based on security rules, acting as barriers between trusted and untrusted networks. Encryption, patching, and reporting are separate security functions.'
    },
    {
        id: 'Q2-3',
        question: 'Which firewall policy is more secure?',
        options: [
            'A. Default-allow (allow everything unless blocked)',
            'B. Default-deny (block everything unless allowed)',
            'C. Both are equally secure',
            'D. Neither is secure'
        ],
        correct: 'B',
        explanation: 'Default-deny policies are more secure because they block everything by default, only explicitly allowing needed traffic. Default-allow permits everything by default, potentially exposing services unintentionally.'
    },
    {
        id: 'Q2-4',
        question: 'What distinguishes a stateful firewall from a stateless firewall?',
        options: [
            'A. Stateful firewalls can block more protocols',
            'B. Stateful firewalls track connection state',
            'C. Stateful firewalls are faster',
            'D. Stateless firewalls require more memory'
        ],
        correct: 'B',
        explanation: 'Stateful firewalls track connection state (tracking which packets belong to established connections), allowing them to make intelligent decisions. Stateless firewalls examine each packet independently without context.'
    },
    {
        id: 'Q2-5',
        question: 'What does a SYN flood attack target?',
        options: [
            'A. Database servers',
            'B. TCP connection state on servers',
            'C. Web application logic',
            'D. Network routers'
        ],
        correct: 'B',
        explanation: 'SYN flood attacks exploit the TCP three-way handshake by sending many SYN requests but not completing connections. This exhausts server resources tracking half-open connections, preventing legitimate connections.'
    },
    {
        id: 'Q2-6',
        question: 'What is the difference between IDS and IPS?',
        options: [
            'A. IDS detects, IPS prevents',
            'B. IDS prevents, IPS detects',
            'C. They are the same',
            'D. IDS protects networks, IPS protects hosts'
        ],
        correct: 'A',
        explanation: 'IDS (Intrusion Detection System) detects and alerts on suspicious activity but does not block it. IPS (Intrusion Prevention System) goes beyond detection by actively blocking malicious activity in real-time.'
    },
    {
        id: 'Q2-7',
        question: 'Which detection method can identify zero-day attacks?',
        options: [
            'A. Signature-based only',
            'B. Anomaly-based only',
            'C. Both signature and anomaly-based',
            'D. Neither signature nor anomaly-based'
        ],
        correct: 'B',
        explanation: 'Anomaly-based detection can identify zero-day attacks by detecting deviations from normal behavior, as it does not rely on pre-existing signatures. Signature-based detection requires known attack patterns.'
    },
    {
        id: 'Q2-8',
        question: 'What is the private IP range 192.168.0.0/16 used for?',
        options: [
            'A. Public internet addressing',
            'B. Internal network use (not routable on internet)',
            'C. Multicasting',
            'D. Government and military networks'
        ],
        correct: 'B',
        explanation: '192.168.0.0/16 is a private IP address range defined in RFC 1918 for internal networks. Addresses in this range are not routable on the public internet and are used with NAT for internet access.'
    },
    {
        id: 'Q2-9',
        question: 'What should you do to secure a server\'s SSH service?',
        options: [
            'A. Run it as root',
            'B. Disable password authentication, use keys only',
            'C. Listen on all interfaces',
            'D. Allow login from any IP address'
        ],
        correct: 'B',
        explanation: 'Secure SSH by disabling password authentication and using key-based authentication, limiting login attempts, restricting allowed users, listening only on necessary interfaces, and using firewall rules to restrict source IPs. Running as root, listening everywhere, and allowing all IPs are insecure.'
    },
    {
        id: 'Q2-10',
        question: 'What is deep packet inspection (DPI)?',
        options: [
            'A. Scanning packets for viruses',
            'B. Examining packet payloads beyond headers',
            'C. Encrypting all packet contents',
            'D. Blocking all UDP traffic',
        ],
        correct: 'B',
        explanation: 'Deep packet inspection examines not just packet headers but also the payload (data contents), allowing identification of applications, malware signatures, and attack patterns that header-based filtering cannot detect.'
    }
];

// Module 5: Anonymity & Privacy Quiz (Core Focus)
quizQuestions.anonymityPrivacy = [
    {
        id: 'Q5-1',
        question: 'What is the primary purpose of Tor (The Onion Router)?',
        options: [
            'A. Encrypt data at rest',
            'B. Provide anonymous network communication',
            'C. Block all malware',
            'D. Backup data online'
        ],
        correct: 'B',
        explanation: 'Tor provides anonymous network communication by routing traffic through multiple nodes in an encrypted layered tunnel, hiding the source and destination from observers and preventing network surveillance.'
    },
    {
        id: 'Q5-2',
        question: 'What type of encryption does Tor use for each relay?',
        options: [
            'A. Same encryption key for all relays',
            'B. Different encryption keys for each hop',
            'C. No encryption between relays',
            'D. SSL/TLS encryption only'
        ],
        correct: 'B',
        explanation: 'Tor uses layered encryption with different keys for each relay. Each relay can only decrypt its layer, knowing only the previous and next hop. This prevents any single relay from seeing both source and destination.'
    },
    {
        id: 'Q5-3',
        question: 'What is a VPN (Virtual Private Network)?',
        options: [
            'A. Software that blocks viruses',
            'B. Encrypted tunnel between a device and a server',
            'C. Method to hack into corporate networks',
            'D. Hardware firewall'
        ],
        correct: 'B',
        explanation: 'A VPN creates an encrypted tunnel between your device and a VPN server, protecting your traffic from external observation. It hides your IP address and encrypts all traffic passing through the tunnel.'
    },
    {
        id: 'Q5-4',
        question: 'What is the main difference between Tor and VPN?',
        options: [
            'A. Tor is faster than VPN',
            'B. VPN is free, Tor costs money',
            'C. Tor routes through multiple nodes, VPN through one server',
            'D. VPN provides anonymity, Tor provides encryption'
        ],
        correct: 'C',
        explanation: 'Tor routes traffic through multiple volunteer-operated nodes with layered encryption, while VPN routes traffic through a single server. Tor provides stronger anonymity from surveillance but is slower; VPN is faster but the VPN provider can see your activity.'
    },
    {
        id: 'Q5-5',
        question: 'What is metadata?',
        options: [
            'A. The encrypted content of a message',
            'B. Information about data but not the data itself',
            'C. Computer viruses',
            'D. Firewall rules'
        ],
        correct: 'B',
        explanation: 'Metadata is data about data - information describing other data without including the content. Examples include email timestamps, sender/recipients, file creation dates, GPS coordinates in photos, IP addresses, and user agent strings.'
    },
    {
        id: 'Q5-6',
        question: 'Why is metadata sometimes more revealing than content?',
        options: [
            'A. Metadata is always encrypted',
            'B. Metadata provides patterns, relationships, and behavioral data',
            'C. Metadata contains passwords',
            'D. Metadata never reveals anything'
        ],
        correct: 'B',
        explanation: 'Metadata reveals patterns, relationships, and behavioral information even when content is hidden. For example, metadata shows who you communicate with, when, how often, and from where, which can be more revealing than message content.'
    },
    {
        id: 'Q5-7',
        question: 'What is OPSEC (Operational Security)?',
        options: [
            'A. Operating system updates',
            'B. Processes to protect sensitive information and operations',
            'C. Office security procedures',
            'D. Physical security guards'
        ],
        correct: 'B',
        explanation: 'OPSEC (Operational Security) is a process that identifies critical information and analyzes friendly actions attendant to military operations and other activities to identify those actions that can be adversely observed by adversaries.'
    },
    {
        id: 'Q5-8',
        question: 'What is the "Five Eyes" intelligence alliance?',
        options: [
            'A. Five computer viruses',
            'B. Intelligence sharing agreement among US, UK, Canada, Australia, NZ',
            'C. Five firewall manufacturers',
            'D. Five email encryption protocols'
        ],
        correct: 'B',
        explanation: 'The Five Eyes is an intelligence alliance comprising the United States, United Kingdom, Canada, Australia, and New Zealand. These countries collaborate on signals intelligence and surveillance, sharing data and resources.'
    },
    {
        id: 'Q5-9',
        question: 'What is a burner phone in anonymity context?',
        options: [
            'A. Flammable phone',
            'B. Disposable prepaid phone used anonymously',
            'C. Phone with broken screen',
            'D. Phone with no camera'
        ],
        correct: 'B',
        explanation: 'Burner phones are disposable prepaid mobile phones purchased anonymously and used temporarily to maintain anonymity. After use or if compromised, they are discarded and replaced with another burner phone.'
    },
    {
        id: 'Q5-10',
        question: 'What is air-gapping?',
        options: [
            'A. Installing air conditioning in server rooms',
            'B. Physically isolating a system from all networks',
            'C. Using Wi-Fi for all connections',
            'D. Leaving security gaps in networks'
        ],
        correct: 'B',
        explanation: 'Air-gapping is physically isolating a secure computer from any unsecured networks, including the internet, Wi-Fi, and local networks. This provides strong security but limits functionality and requires strict physical security.'
    }
];

// Continue with more module quizzes...

console.log('Quizzes database loaded');