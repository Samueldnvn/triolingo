// ============================================
// PRACTICE PROBLEMS DATABASE
// ============================================

const practiceProblems = {};

// Module 1: Foundations & Fundamentals
practiceProblems.foundations = {
    ciaTriad: [
        {
            id: 'M1-001',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What does CIA stand for in cybersecurity?',
            answer: 'Confidentiality, Integrity, Availability',
            alternatives: ['Confidentiality, Integrity, and Availability', 'confidentiality integrity availability'],
            hint: 'These are the three pillars of information security.',
            explanation: 'The CIA triad consists of Confidentiality (protecting from unauthorized access), Integrity (ensuring data is not modified), and Availability (ensuring systems are accessible when needed).'
        },
        {
            id: 'M1-002',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'Which principle of the CIA triad ensures that only authorized users can access data?',
            answer: 'Confidentiality',
            alternatives: ['confidential'],
            hint: 'This principle is about keeping secrets secret.',
            explanation: 'Confidentiality ensures that information is only accessible to those authorized to have access. Authentication and access controls implement this principle.'
        },
        {
            id: 'M1-003',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'Which principle of the CIA triad ensures that data has not been modified without authorization?',
            answer: 'Integrity',
            alternatives: ['integrity'],
            hint: 'This principle is about trustworthiness and accuracy of data.',
            explanation: 'Integrity ensures that data remains accurate, complete, and unmodified by unauthorized parties. Hashing and digital signatures help maintain integrity.'
        },
        {
            id: 'M1-004',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'Which principle of the CIA triad ensures systems and data are available when needed?',
            answer: 'Availability',
            alternatives: ['availability'],
            hint: 'This principle focuses on uptime and accessibility.',
            explanation: 'Availability ensures that authorized users can access information and resources when needed. Redundancy, backups, and DDoS protection support availability.'
        },
        {
            id: 'M1-005',
            type: 'conceptual',
            difficulty: 'medium',
            question: 'What is the difference between vulnerability and threat?',
            answer: 'A vulnerability is a weakness, a threat is an actor or event that could exploit it',
            alternatives: ['vulnerability is a weakness and threat is an actor that exploits it'],
            hint: 'Think of a lock (vulnerability) and a thief (threat).',
            explanation: 'Vulnerabilities are weaknesses or flaws in systems that could be exploited. Threats are actors, methodologies, or events that could exploit vulnerabilities. Risk is the probability of a threat exploiting a vulnerability.'
        },
        {
            id: 'M1-006',
            type: 'conceptual',
            difficulty: 'medium',
            question: 'What is risk in cybersecurity?',
            answer: 'The likelihood of a threat exploiting a vulnerability',
            alternatives: ['probability of threat exploiting vulnerability'],
            hint: 'Risk combines the probability of an event with its impact.',
            explanation: 'Risk = Threat × Vulnerability × Impact (or Risk = Probability × Impact). It represents the potential for loss or harm to an organization.'
        },
        {
            id: 'M1-007',
            type: 'application',
            difficulty: 'medium',
            question: 'A system has unpatched software (vulnerability) with 10,000 potential hackers (threat) and potential impact of $100,000. Is the risk low, medium, or high?',
            answer: 'High',
            alternatives: ['high'],
            hint: 'Consider the combination of vulnerability severity and number of threats.',
            explanation: 'With unpatched software (high vulnerability severity), thousands of potential attackers, and significant potential impact, this represents a high risk that should be prioritized for remediation.'
        },
        {
            id: 'M1-008',
            type: 'application',
            difficulty: 'medium',
            question: 'Your organization stores customer credit card numbers in plain text. Which CIA principle is being violated?',
            answer: 'Confidentiality',
            alternatives: ['confidential'],
            hint: 'What happens if this data is accessed by unauthorized users?',
            explanation: 'Storing sensitive data in plain text violates confidentiality. If an attacker gains access, they would immediately have all information. Encryption is required to maintain confidentiality.'
        },
        {
            id: 'M1-009',
            type: 'application',
            difficulty: 'medium',
            question: 'A website displays different prices to different users without authorization. Which CIA principle is violated?',
            answer: 'Integrity',
            alternatives: ['integrity'],
            hint: 'The data is being modified or displayed inconsistently.',
            explanation: 'Displaying inconsistent or incorrect data violates integrity. Users should see the same accurate information. This could lead to fraud or loss of trust.'
        },
        {
            id: 'M1-010',
            type: 'application',
            difficulty: 'medium',
            question: 'A DDoS attack makes a website unavailable for legitimate users. Which CIA principle is primarily affected?',
            answer: 'Availability',
            alternatives: ['availability'],
            hint: 'Consider what users cannot do during the attack.',
            explanation: 'DDoS attacks target availability by overwhelming system resources, making services inaccessible to legitimate users. Confidentiality and integrity may remain intact, but the system is unavailable.'
        }
    ],
    threatsAttacks: [
        {
            id: 'M1-011',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is malware?',
            answer: 'Malicious software designed to harm or exploit systems',
            alternatives: ['malicious software'],
            hint: 'Mal-ware = Bad software',
            explanation: 'Malware (malicious software) is any program or code designed to damage, disrupt, or gain unauthorized access to computer systems. Types include viruses, worms, trojans, ransomware, spyware, and more.'
        },
        {
            id: 'M1-012',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is a virus?',
            answer: 'Malware that attaches itself to legitimate programs and replicates',
            alternatives: ['malware that replicates by attaching to programs'],
            hint: 'Like biological viruses, this malware needs a host.',
            explanation: 'A virus is a type of malware that infects legitimate programs and files. When the infected program runs, the virus executes and can spread to other files. Viruses require user interaction to propagate.'
        },
        {
            id: 'M1-013',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is a worm?',
            answer: 'Self-replicating malware that spreads across networks without user interaction',
            alternatives: ['self-replicating malware that spreads without user action'],
            hint: 'Worms work automatically and spread through networks.',
            explanation: 'Worms are malware that replicate and spread across networks without requiring user action. Unlike viruses, worms do not attach themselves to legitimate programs. They can rapidly infect many systems.'
        },
        {
            id: 'M1-014',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is a trojan?',
            answer: 'Malware disguised as legitimate software to trick users',
            alternatives: ['malware disguised as legitimate software'],
            hint: 'Named after the wooden horse from Greek mythology.',
            explanation: 'Trojan horses are malware disguised as useful or legitimate programs. Unlike viruses and worms, trojans do not self-replicate. They trick users into executing them, then deliver their malicious payload.'
        },
        {
            id: 'M1-015',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is ransomware?',
            answer: 'Malware that encrypts data and demands payment for decryption',
            alternatives: ['malware that encrypts and demands payment'],
            hint: 'It holds your files hostage.',
            explanation: 'Ransomware encrypts a victim's files and demands payment (usually cryptocurrency) for the decryption key. It can also threaten to publish stolen data if payment is not made.'
        },
        {
            id: 'M1-016',
            type: 'application',
            difficulty: 'medium',
            question: 'In a ransomware attack, paying the ransom guarantees file recovery?',
            answer: 'False',
            alternatives: ['false', 'no'],
            hint: 'Consider whether criminals always honor their promises.',
            explanation: 'Paying ransomware demands does not guarantee file recovery. Attackers may not provide the decryption key, or the key may not work properly. Additionally, paying encourages further criminal activity and doesn't remove installed malware.'
        },
        {
            id: 'M1-017',
            type: 'application',
            difficulty: 'medium',
            question: 'What is the primary difference between a virus and a worm?',
            answer: 'Viruses require user action to propagate, worms spread automatically',
            alternatives: ['viruses need user action, worms spread automatically'],
            hint: 'Think about how each spreads.',
            explanation: 'The key difference is propagation method. Viruses require user action (opening infected files) to spread, while worms have built-in spreading mechanisms that work automatically across networks.'
        },
        {
            id: 'M1-018',
            type: 'application',
            difficulty: 'medium',
            question: 'What is spyware?',
            answer: 'Malware that secretly monitors user activity and collects information',
            alternatives: ['malware that monitors user activity'],
            hint: 'It acts like a secret agent on your system.',
            explanation: 'Spyware secretly monitors and records user activities including keystrokes, browsing history, passwords, and other sensitive information. It often runs without user knowledge or consent.'
        },
        {
            id: 'M1-019',
            type: 'application',
            difficulty: 'medium',
            question: 'What is a rootkit?',
            answer: 'Malware that provides privileged access while hiding its presence',
            alternatives: ['malware that hides and provides root access'],
            hint: 'It allows an attacker to become administrator.',
            explanation: 'Rootkits are collections of malware that allow attackers to maintain privileged access to systems while hiding their presence. They can intercept system calls and modify operating system behavior to evade detection.'
        },
        {
            id: 'M1-020',
            type: 'application',
            difficulty: 'medium',
            question: 'What is the best defense against malware?',
            answer: 'Combination of updated software, antivirus, and user education',
            alternatives: ['updated software, antivirus, and education'],
            hint: 'No single solution provides complete protection.',
            explanation: 'Effective malware defense requires multiple layers: keeping software updated (patching), using antivirus/EDR solutions, educating users about phishing and suspicious files, implementing least privilege, regular backups, and network segmentation.'
        }
    ],
    attackVectors: [
        {
            id: 'M1-021',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is phishing?',
            answer: 'Fraudulent attempts to obtain sensitive information through deception',
            alternatives: ['fraudulent attempts to steal information'],
            hint: 'Phishing sounds like "fishing" - trying to catch victims.',
            explanation: 'Phishing attacks use fraudulent communications (email, SMS, websites) that appear legitimate to trick victims into revealing sensitive information like passwords, credit card numbers, or installing malware.'
        },
        {
            id: 'M1-022',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is the difference between phishing and spear phishing?',
            answer: 'Spear phishing targets specific individuals while phishing is mass-targeted',
            alternatives: ['spear phishing targets specific people, phishing is general'],
            hint: 'One uses a spear, one uses a net.',
            explanation: 'Phishing attacks are generic and sent to many potential victims. Spear phishing is highly targeted, using personalized information about specific individuals or organizations to increase believability and success rates.'
        },
        {
            id: 'M1-023',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is a man-in-the-middle (MITM) attack?',
            answer: 'Attack where attacker intercepts communication between two parties',
            alternatives: ['intercepting communication between two parties'],
            hint: 'The attacker is in the middle, listening or modifying.',
            explanation: 'In MITM attacks, attackers secretly intercept and potentially modify communications between two parties who believe they are communicating directly with each other. This can happen on unsecured networks or through compromised devices.'
        },
        {
            id: 'M1-024',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is SQL injection?',
            answer: 'Attack that inserts malicious SQL code into input fields',
            alternatives: ['inserting malicious SQL into input fields'],
            hint: 'SQL is a database language. Injection means inserting malicious code.',
            explanation: 'SQL injection is an attack where malicious SQL statements are inserted into input fields or query strings. Poor input validation allows attackers to manipulate database queries, potentially accessing, modifying, or deleting data.'
        },
        {
            id: 'M1-025',
            type: 'conceptual',
            difficulty: 'medium',
            question: 'What is cross-site scripting (XSS)?',
            answer: 'Attack that injects malicious scripts into web pages viewed by other users',
            alternatives: ['injecting malicious scripts into web pages'],
            hint: 'It involves scripts running in victim browsers.',
            explanation: 'XSS attacks inject malicious scripts into trusted web pages. When other users view those pages, the scripts execute in their browsers with the privileges of the viewing site, allowing attackers to steal session cookies, redirect users, or perform actions.'
        },
        {
            id: 'M1-026',
            type: 'application',
            difficulty: 'medium',
            question: 'How can you protect against SQL injection?',
            answer: 'Use parameterized queries and input validation',
            alternatives: ['parameterized queries'],
            hint: 'Separate code from data.',
            explanation: 'Parameterized queries (prepared statements) prevent SQL injection by separating SQL code from data. Input validation and sanitization help, but parameterized queries are the primary defense. ORM frameworks also provide automatic protection.'
        },
        {
            id: 'M1-027',
            type: 'application',
            difficulty: 'medium',
            question: 'What is a zero-day vulnerability?',
            answer: 'A flaw unknown to software vendor and without a patch',
            alternatives: ['vulnerability unknown to vendor and unpatched'],
            hint: 'It has zero days between discovery and exploitation.',
            explanation: 'Zero-day vulnerabilities are security flaws unknown to the software vendor, meaning no patch exists. Attackers can exploit them before defenders learn about them. The term refers to the time the vendor has had to fix it (zero days).'
        },
        {
            id: 'M1-028',
            type: 'application',
            difficulty: 'medium',
            question: 'What is an Advanced Persistent Threat (APT)?',
            answer: 'Extended sophisticated targeted cyberattack campaign by nation-state actors',
            alternatives: ['sophisticated targeted attack by nation-states'],
            hint: 'APT - Advanced (sophisticated), Persistent (ongoing), Threat (danger).',
            explanation: 'APTs are sophisticated, prolonged cyberattacks carried out by highly skilled threat actors, often nation-states or organized crime. They use stealthy techniques to maintain persistent access to targets for extended periods to achieve strategic goals.'
        },
        {
            id: 'M1-029',
            type: 'application',
            difficulty: 'hard',
            question: 'What is a watering hole attack?',
            answer: 'Compromising a website frequently visited by target victims',
            alternatives: ['compromising websites targets visit'],
            hint: 'Think about where wild animals gather at water holes.',
            explanation: 'In watering hole attacks, attackers compromise legitimate websites that target organizations or individuals frequently visit. Victims are infected when they visit the compromised site, allowing attackers to gain access through the trusted relationship.'
        },
        {
            id: 'M1-030',
            type: 'application',
            difficulty: 'hard',
            question: 'What is a supply chain attack?',
            answer: 'Compromising an upstream vendor to attack downstream targets',
            alternatives: ['compromising vendor to attack customers'],
            hint: 'Consider how software and hardware reach end users.',
            explanation: 'Supply chain attacks target the vendor or supplier rather than the ultimate victim. By compromising trusted software updates, hardware components, or service providers, attackers can distribute malicious code to thousands of customers through trusted channels.'
        }
    ]
};

// Module 2: Network Security
practiceProblems.networkSecurity = {
    tcpIP: [
        {
            id: 'M2-001',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is the primary function of TCP in the TCP/IP model?',
            answer: 'Reliable, connection-oriented data transmission',
            alternatives: ['reliable connection-oriented transmission'],
            hint: 'TCP provides guarantees about data delivery.',
            explanation: 'TCP (Transmission Control Protocol) provides reliable, connection-oriented, full-duplex data transmission. It ensures packets arrive in order, performs error detection, retransmits lost packets, and manages flow control.'
        },
        {
            id: 'M2-002',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is the primary function of UDP in the TCP/IP model?',
            answer: 'Fast, connectionless data transmission without reliability guarantees',
            alternatives: ['fast connectionless transmission'],
            hint: 'UDP trades reliability for speed.',
            explanation: 'UDP (User Datagram Protocol) provides fast, connectionless, unreliable data transmission. It does not guarantee delivery, ordering, or duplicate protection, making it suitable for real-time applications like video streaming and DNS.'
        },
        {
            id: 'M2-003',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is the three-way handshake in TCP?',
            answer: 'SYN, SYN-ACK, ACK connection establishment',
            alternatives: ['syn syn-ack ack'],
            hint: 'It involves three messages to establish connection.',
            explanation: 'The TCP three-way handshake establishes a connection: 1) Client sends SYN, 2) Server responds with SYN-ACK, 3) Client sends ACK. This ensures both sides are ready and synchronized before data transfer begins.'
        },
        {
            id: 'M2-004',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What port does HTTP use by default?',
            answer: '80',
            alternatives: ['port 80'],
            hint: 'The standard unencrypted web protocol.',
            explanation: 'HTTP (Hypertext Transfer Protocol) uses port 80 by default for unencrypted web communication. HTTPS uses port 443 for secure, encrypted web communication with TLS/SSL.'
        },
        {
            id: 'M2-005',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What protocol uses port 22 by default?',
            answer: 'SSH',
            alternatives: ['ssh'],
            hint: 'This is for secure remote shell access.',
            explanation: 'SSH (Secure Shell) uses port 22 by default. It provides encrypted remote command-line login, command execution, and other secure network services between untrusted networks.'
        },
        {
            id: 'M2-006',
            type: 'application',
            difficulty: 'medium',
            question: 'A SYN flood attack exploits which vulnerability in TCP?',
            answer: 'Resource exhaustion by sending many SYN packets without completing handshakes',
            alternatives: ['resource exhaustion with syn packets'],
            hint: 'Consider what resources the server allocates during the handshake.',
            explanation: 'SYN flood attacks send many SYN packets to a server, causing it to allocate resources (memory, connection tables) waiting for the SYN-ACK responses that never come. This exhausts server resources, preventing legitimate connections.'
        },
        {
            id: 'M2-007',
            type: 'application',
            difficulty: 'medium',
            question: 'What type of attack exploits the TCP three-way handshake?',
            answer: 'SYN flood attack',
            alternatives: ['syn flood'],
            hint: 'It involves sending many initial handshake requests.',
            explanation: 'SYN flood attacks abuse the TCP three-way handshake. Attackers send many SYN packets but never complete the handshake, causing the server to maintain many half-open connections and run out of resources.'
        },
        {
            id: 'M2-008',
            type: 'application',
            difficulty: 'medium',
            question: 'What is a TCP reset (RST) attack?',
            answer: 'Sending forged RST packets to terminate legitimate connections',
            alternatives: ['sending forged rst packets'],
            hint: 'RST tells a connection to reset or terminate.',
            explanation: 'TCP RST attacks send forged TCP reset packets with spoofed source addresses. This causes one or both legitimate parties to terminate their connections, disrupting services or communication.'
        },
        {
            id: 'M2-009',
            type: 'application',
            difficulty: 'medium',
            question: 'Why is UDP often preferred for real-time applications?',
            answer: 'Lower overhead and no retransmission delays',
            alternatives: ['lower overhead no retransmission'],
            hint: 'Real-time applications prioritize timeliness over perfect accuracy.',
            explanation: 'UDP has lower overhead (no connection establishment, no acknowledgment) and does not retransmit lost packets. For real-time applications like VoIP and streaming video, late packets are useless, so speed is prioritized over perfect reliability.'
        },
        {
            id: 'M2-010',
            type: 'application',
            difficulty: 'medium',
            question: 'What IP address range is used for private networks?',
            answer: '10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16',
            alternatives: ['10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16'],
            hint: 'RFC 1918 defines private IPv4 address ranges.',
            explanation: 'RFC 1918 defines private IP address ranges not routable on the public internet: 10.0.0.0 to 10.255.255.255 (10.0.0.0/8), 172.16.0.0 to 172.31.255.255 (172.16.0.0/12), and 192.168.0.0 to 192.168.255.255 (192.168.0.0/16).'
        }
    ],
    firewalls: [
        {
            id: 'M2-011',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is a firewall?',
            answer: 'Network security device that monitors and filters incoming and outgoing traffic',
            alternatives: ['device that monitors and filters network traffic'],
            hint: 'Like a wall that only lets certain traffic through.',
            explanation: 'A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks like the internet.'
        },
        {
            id: 'M2-012',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is the difference between a stateless and stateful firewall?',
            answer: 'Stateless filters by packet contents, stateful tracks connection state',
            alternatives: ['stateless: packet contents, stateful: connection state'],
            hint: 'One remembers context, one does not.',
            explanation: 'Stateless firewalls filter packets based only on individual packet headers without tracking connection state. Stateful firewalls track connection state and context, making more intelligent decisions about which packets belong to legitimate connections.'
        },
        {
            id: 'M2-013',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is a default-deny firewall policy?',
            answer: 'Blocking all traffic unless explicitly allowed',
            alternatives: ['block all unless allowed'],
            hint: 'Everything forbidden unless specifically permitted.',
            explanation: 'Default-deny is a security best practice where all traffic is blocked by default, and only explicitly allowed traffic passes through. This reduces attack surface by ensuring nothing is unintentionally exposed.'
        },
        {
            id: 'M2-014',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is a default-allow firewall policy?',
            answer: 'Allowing all traffic unless explicitly blocked',
            alternatives: ['allow all unless blocked'],
            hint: 'The opposite of default-deny.',
            explanation: 'Default-allow policies permit all traffic unless explicitly blocked. This is less secure because it requires identifying every threat, which is impossible. Any new or unknown traffic passes by default until detected as malicious.'
        },
        {
            id: 'M2-015',
            type: 'application',
            difficulty: 'medium',
            question: 'Should you use default-deny or default-allow for your firewall?',
            answer: 'Default-deny',
            alternatives: ['default-deny'],
            hint: 'Which is more secure and follows the principle of least privilege?',
            explanation: 'Default-deny is always preferred for better security. It reduces attack surface by only allowing known, necessary traffic. Default-allow requires perfect knowledge of all threats, which is impossible to achieve.'
        },
        {
            id: 'M2-016',
            type: 'application',
            difficulty: 'medium',
            question: 'What is a next-generation firewall (NGFW)?',
            answer: 'Firewall with deep packet inspection, application awareness, and intrusion prevention',
            alternatives: ['firewall with deep packet inspection and app awareness'],
            hint: 'Traditional firewalls only look at basic packet headers.',
            explanation: 'Next-generation firewalls provide advanced capabilities beyond traditional packet filtering: deep packet inspection (examining payload), application layer awareness (identifying applications, not just ports), intrusion prevention systems (IPS), and integrated threat intelligence.'
        },
        {
            id: 'M2-017',
            type: 'application',
            difficulty: 'medium',
            question: 'What is deep packet inspection (DPI)?',
            answer: 'Examining packet payloads to identify patterns, content, and applications',
            alternatives: ['examining packet contents and payloads'],
            hint: 'Looking inside packets, not just at headers.',
            explanation: 'Deep packet inspection examines not just packet headers but also the payload (data content). This allows identification of specific applications, malware signatures, and attack patterns that traditional header-based filtering cannot detect.'
        },
        {
            id: 'M2-018',
            type: 'application',
            difficulty: 'medium',
            question: 'What common port should be blocked on external interfaces to prevent unauthorized SSH access?',
            answer: '22',
            alternatives: ['port 22'],
            hint: 'SSH uses this port for remote access.',
            explanation: 'Port 22 should be blocked on external interfaces unless SSH access is explicitly required from the internet. Access should be restricted to VPN or bastion hosts. Attackers constantly scan for open SSH ports for brute-force attacks.'
        },
        {
            id: 'M2-019',
            type: 'application',
            difficulty: 'medium',
            question: 'What is port knocking?',
            answer: 'A method to hide services until specific sequence of connection attempts',
            alternatives: ['hiding services until specific port connections'],
            hint: 'Knock on ports in a specific sequence to open a door.',
            explanation: 'Port knocking is a security technique where a service (like SSH) is hidden behind a firewall and only becomes accessible after a specific sequence of connection attempts (knocks) to closed ports is made, providing security through obscurity.'
        },
        {
            id: 'M2-020',
            type: 'application',
            difficulty: 'hard',
            question: 'How can you bypass a firewall that only filters based on source/destination IP?',
            answer: 'Use IP spoofing to make traffic appear from an allowed source',
            alternatives: ['ip spoofing'],
            hint: 'If the firewall only looks at IPs, what else is important?',
            explanation: 'Firewalls filtering only by IP can be bypassed using IP spoofing, where attackers forge packet source addresses to appear as coming from trusted internal or allowed external sources. This is why defense in depth with stateful inspection is important.'
        }
    ],
    intrusionDetection: [
        {
            id: 'M2-021',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is an Intrusion Detection System (IDS)?',
            answer: 'System that monitors network traffic for suspicious activity',
            alternatives: ['system monitoring for suspicious activity'],
            hint: 'ID in IDS stands for Intrusion Detection.',
            explanation: 'An Intrusion Detection System (IDS) monitors network traffic for suspicious activity, policy violations, or potential security threats. It detects and alerts on suspicious activity but does not automatically block it.'
        },
        {
            id: 'M2-022',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is an Intrusion Prevention System (IPS)?',
            answer: 'System that detects and actively blocks malicious activity',
            alternatives: ['system that detects and blocks attacks'],
            hint: 'IPS adds Prevention to detection.',
            explanation: 'An Intrusion Prevention System (IPS) goes beyond detection by actively blocking malicious activity in real-time. IPS sits inline with traffic and can prevent attacks from succeeding, whereas IDS only detects and alerts.'
        },
        {
            id: 'M2-023',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is signature-based detection?',
            answer: 'Detecting threats by matching known attack patterns or signatures',
            alternatives: ['matching known attack patterns'],
            hint: 'Like an antivirus with virus definitions.',
            explanation: 'Signature-based detection matches network traffic against a database of known threat signatures. It effectively detects known attacks but cannot detect new or unknown (zero-day) threats that don't match existing signatures.'
        },
        {
            id: 'M2-024',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is anomaly-based detection?',
            answer: 'Detecting threats by identifying deviations from normal behavior',
            alternatives: ['identifying deviations from normal behavior'],
            hint: 'Looking for what is unusual or abnormal.',
            explanation: 'Anomaly-based detection establishes a baseline of normal network behavior and alerts on significant deviations. It can detect new and unknown threats but may generate more false positives when legitimate but unusual activity occurs.'
        },
        {
            id: 'M2-025',
            type: 'application',
            difficulty: 'medium',
            question: 'What is a false positive in IDS/IPS?',
            answer: 'Alerting on benign activity as if it were malicious',
            alternatives: ['alerting on benign activity'],
            hint: 'Positive means malicious, but it is false.',
            explanation: 'False positives occur when IDS/IPS incorrectly identifies benign or normal activity as malicious. High false positive rates lead to alert fatigue and security team burnout, causing real threats to be ignored.'
        },
        {
            id: 'M2-026',
            type: 'application',
            difficulty: 'medium',
            question: 'What is a false negative in IDS/IPS?',
            answer: 'Failing to detect actual malicious activity',
            alternatives: ['missing detection of actual attacks'],
            hint: 'Negative means safe, but it should have been detected.',
            explanation: 'False negatives occur when IDS/IPS fails to detect actual malicious activity, allowing threats to proceed undetected. This is more dangerous than false positives as it gives a false sense of security while threats are active.'
        },
        {
            id: 'M2-027',
            type: 'application',
            difficulty: 'medium',
            question: 'How does a host-based IDS (HIDS) differ from a network-based IDS (NIDS)?',
            answer: 'HIDS monitors individual hosts, NIDS monitors network traffic',
            alternatives: ['host: individual computers, network: traffic'],
            hint: 'One looks at computers, one at the network.',
            explanation: 'Host-based IDS (HIDS) monitors individual hosts for suspicious activity, logs, or file changes. Network-based IDS (NIDS) monitors network packets and traffic patterns for suspicious activity. Organizations typically deploy both for complete coverage.'
        },
        {
            id: 'M2-028',
            type: 'application',
            difficulty: 'medium',
            question: 'What is the advantage of deploying both IDS and IPS?',
            answer: 'IDS provides visibility and forensics, IPS provides active protection',
            alternatives: ['ids visibility, ips protection'],
            hint: 'Consider what each does with threats.',
            explanation: 'IDS provides detailed logging, analysis, and forensic capabilities for understanding attacks. IPS provides real-time protection by blocking attacks. Using both provides active defense while maintaining visibility and analysis capabilities.'
        },
        {
            id: 'M2-029',
            type: 'application',
            difficulty: 'hard',
            question: 'What is evasion in the context of IDS/IPS?',
            answer: 'Techniques to bypass or avoid detection by security systems',
            alternatives: ['bypassing detection'],
            hint: 'Attackers trying to avoid being caught.',
            explanation: 'IDS/IPS evasion techniques include fragmentation, encryption, encoding, protocol manipulation, and timing attacks. Attackers use these to make malicious traffic appear benign or unrecognizable to detection systems.'
        },
        {
            id: 'M2-030',
            type: 'application',
            difficulty: 'hard',
            question: 'How can attackers evade signature-based IDS?',
            answer: 'By modifying attack patterns to not match known signatures',
            alternatives: ['modifying attack patterns'],
            hint: 'Signature-based detection relies on known patterns.',
            explanation: 'Attackers evade signature-based detection by modifying malware or attack techniques so they no longer match known signatures. This involves changing code, encoding payloads, using polymorphism/metamorphism, or using completely new attack methods.'
        }
    ]
};

// Module 3: OS Security
practiceProblems.osSecurity = {
    linuxSecurity: [
        {
            id: 'M3-001',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is the Linux root account?',
            answer: 'The superuser account with full system access',
            alternatives: ['superuser with full access'],
            hint: 'Think about the word root in biology - the base.',
            explanation: 'The root account is the superuser in Linux with UID 0, having unlimited privileges to perform any action on the system. Because root can bypass all restrictions, Linux security practices emphasize limiting its use.'
        },
        {
            id: 'M3-002',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What command changes file permissions in Linux?',
            answer: 'chmod',
            alternatives: [],
            hint: 'Change mode.',
            explanation: 'chmod (change mode) modifies file permissions in Linux. Permissions are set using octal notation (e.g., 755, 644) or symbolic notation (e.g., u+x, g-w). Permissions control read, write, and execute access for user, group, and others.'
        },
        {
            id: 'M3-003',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What command changes file ownership in Linux?',
            answer: 'chown',
            alternatives: [],
            hint: 'Change owner.',
            explanation: 'chown (change owner) changes the user and group ownership of files. Use chown user:group file or just chown user file. Only root can change ownership to another user.'
        },
        {
            id: 'M3-004',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What does permission 755 mean?',
            answer: 'Owner: read/write/execute, Group: read/execute, Others: read/execute',
            alternatives: ['owner rwx, group rx, others rx'],
            hint: 'Break down 7, 5, 5 into rwx values.',
            explanation: '755 means: User (7=rwx) has read, write, execute; Group (5=r-x) has read, execute; Others (5=r-x) has read, execute. This is common for programs and directories, giving full control to owner but allowing others to run or access.'
        },
        {
            id: 'M3-005',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What does permission 644 mean?',
            answer: 'Owner: read/write, Group: read, Others: read',
            alternatives: ['owner rw, group r, others r'],
            hint: 'Break down 6, 4, 4.',
            explanation: '644 means: User (6=rw-) has read, write; Group (4=r--) has read; Others (4=r--) has read. This is the default for many files, allowing the owner to modify but others only to read.'
        },
        {
            id: 'M3-006',
            type: 'application',
            difficulty: 'medium',
            question: 'What is the principle of least privilege?',
            answer: 'Granting only necessary permissions for required tasks',
            alternatives: ['only grant necessary permissions'],
            hint: 'Users and processes should have minimum needed access.',
            explanation: 'The principle of least privilege states that every user and process should only have the bare minimum permissions necessary to perform their required functions. This limits potential damage from compromised accounts or processes.'
        },
        {
            id: 'M3-007',
            type: 'application',
            difficulty: 'medium',
            question: 'Why should you avoid logging in as root for regular tasks?',
            answer: 'To prevent accidental damage and limit exposure if account is compromised',
            alternatives: ['prevent accidents and limit compromise damage'],
            hint: 'Root can do anything - including delete everything.',
            explanation: 'Logging in as root for regular tasks increases risk of accidental damage (e.g., wrong command deletes critical files) and provides complete access if compromised. Use sudo for specific commands requiring elevated privileges instead.'
        },
        {
            id: 'M3-008',
            type: 'application',
            difficulty: 'medium',
            question: 'What is sudo?',
            answer: 'Allows authorized users to execute commands with superuser privileges',
            alternatives: ['execute commands with superuser privileges'],
            hint: 'Superuser DO gives limited elevated access.',
            explanation: 'sudo (superuser do) allows authorized users to execute specific commands with root or other user privileges. It provides better security than direct root login by limiting elevated access to specific commands and logging all sudo usage.'
        },
        {
            id: 'M3-009',
            type: 'application',
            difficulty: 'medium',
            question: 'What file contains user account information in Linux?',
            answer: '/etc/passwd',
            alternatives: ['/etc/passwd'],
            hint: 'Think about where password and user data is stored.',
            explanation: '/etc/passwd contains user account information including username, UID, GID, home directory, and shell. Historical password hashes are now in /etc/shadow for security. The file is readable by all users for compatibility reasons.'
        },
        {
            id: 'M3-010',
            type: 'application',
            difficulty: 'medium',
            question: 'What file contains encrypted password hashes in Linux?',
            answer: '/etc/shadow',
            alternatives: ['/etc/shadow'],
            hint: 'Shadowed for security - only root can read.',
            explanation: '/etc/shadow contains encrypted password hashes and related account information. It is only readable by root, password hashes use stronger one-way encryption, and it includes account expiration and lockout settings.'
        }
    ],
    windowsSecurity: [
        {
            id: 'M3-011',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is UAC in Windows?',
            answer: 'User Account Control - prompts for approval before elevated actions',
            alternatives: ['User Account Control'],
            hint: 'Asks "Are you sure?" for important actions.',
            explanation: 'User Account Control (UAC) prompts users for approval or administrator credentials before allowing actions that make system changes. This prevents malware from making unauthorized changes even when running with limited user accounts.'
        },
        {
            id: 'M3-012',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is the Windows Administrator account?',
            answer: 'Account with full system access and control',
            alternatives: ['account with full system access'],
            hint: 'Similar to Linux root account.',
            explanation: 'The Administrator account in Windows has full system access and control over all functions. Like Linux root, it should only be used when necessary, and regular administration should use accounts with appropriate limited permissions.'
        },
        {
            id: 'M3-013',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is Windows Defender?',
            answer: 'Built-in antivirus and malware protection in Windows',
            alternatives: ['built-in antivirus and malware protection'],
            hint: 'Defends against threats.',
            explanation: 'Windows Defender is Microsoft's built-in antivirus and anti-malware solution included with Windows. It provides real-time protection, periodic scanning, and integration with Windows Security Center.'
        },
        {
            id: 'M3-014',
            type: 'conceptual',
            difficulty: 'easy',
            question: 'What is Windows Firewall?',
            answer: 'Built-in host-based firewall in Windows',
            alternatives: ['built-in host-based firewall'],
            hint: 'Protects the Windows host.',
            explanation: 'Windows Firewall is the built-in host-based firewall that monitors incoming and outgoing network traffic. It can be configured with rules to allow or block specific programs, ports, or addresses.'
        },
        {
            id: 'M3-015',
            type: 'application',
            difficulty: 'medium',
            question: 'Should you disable UAC for convenience?',
            answer: 'No',
            alternatives: ['no'],
            hint: 'UAC provides protection against unauthorized changes.',
            explanation: 'Disabling UAC removes an important security layer. While it may reduce prompts, it also allows malware to make system-wide changes without user intervention. The slight inconvenience is a worthwhile security trade-off.'
        },
        {
            id: 'M3-016',
            type: 'application',
            difficulty: 'medium',
            question: 'What is the principle of least privilege applied to Windows?',
            answer: 'Use standard user accounts, elevate only when necessary',
            alternatives: ['use standard accounts, elevate when needed'],
            hint: 'Do not run as Administrator all the time.',
            explanation: 'In Windows, apply least privilege by running as a standard user account most of the time. Only elevate to Administrator privileges when needed for specific tasks, using UAC prompts to approve elevation.'
        },
        {
            id: 'M3-017',
            type: 'application',
            difficulty: 'medium',
            question: 'What is Windows Event Viewer used for?',
            answer: 'Viewing system, security, and application event logs',
            alternatives: ['viewing system security application logs'],
            hint: 'You can view events that occurred on the system.',
            explanation: 'Event Viewer displays logged events from the system, applications, and security. Security events particularly include login attempts, privilege changes, object access, and other security-relevant activities useful for forensics and monitoring.'
        },
        {
            id: 'M3-018',
            type: 'application',
            difficulty: 'medium',
            question: 'What is Active Directory?',
            answer: 'Microsoft directory service for managing Windows domain networks',
            alternatives: ['directory service for windows domains'],
            hint: 'Directory service for authentication and authorization.',
            explanation: 'Active Directory (AD) is Microsoft's directory service for Windows domain networks. It stores information about network resources (users, computers, groups) and provides authentication, authorization, and policy enforcement services.'
        },
        {
            id: 'M3-019',
            type: 'application',
            difficulty: 'hard',
            question: 'What is Group Policy in Windows?',
            answer: 'Centralized management system for configuring user and computer settings',
            alternatives: ['centralized configuration management system'],
            hint: 'Allows managing many computers from one place.',
            explanation: 'Group Policy is a feature of Active Directory that allows administrators to centrally manage and enforce configuration settings for users and computers. This includes security settings, software installation, and desktop configurations across an organization.'
        },
        {
            id: 'M3-020',
            type: 'application',
            difficulty: 'hard',
            question: 'What is the Windows SAM file?',
            answer: 'Security Account Manager - stores local user password hashes',
            alternatives: ['stores local user password hashes'],
            hint: 'SAM - Security Account Manager.',
            explanation: 'The SAM (Security Account Manager) file stores local user account password hashes and related security information. It is a high-value target for attackers trying to extract credentials from compromised Windows systems.'
        }
    ]
};

// Continue with remaining modules...
// This is a partial file - continuing with more modules would follow

console.log('Problems database loaded');