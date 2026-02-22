// Quiz Questions for Minecraft Redstone Computers Course
// Each module has 8-15 questions, final exam has 20-30 questions

const quizQuestions = {
    logicGates: [
        {
            id: 'Q-LG-1',
            question: 'What is the output of an AND gate when inputs are (1, 1)?',
            options: [
                'A. 0',
                'B. 1',
                'C. Both 0 and 1',
                'D. Invalid'
            ],
            correct: 'B',
            explanation: 'An AND gate outputs 1 only when ALL inputs are 1. For inputs (1, 1), the output is 1.'
        },
        {
            id: 'Q-LG-2',
            question: 'What Minecraft component is commonly used as a NOT gate?',
            options: [
                'A. Redstone block',
                'B. Redstone dust',
                'C. Redstone torch',
                'D. Redstone repeater'
            ],
            correct: 'C',
            explanation: 'A redstone torch attached to a block acts as a NOT gate (inverter), inverting the signal into the block.'
        },
        {
            id: 'Q-LG-3',
            question: 'What is the output of an OR gate when both inputs are 0?',
            options: [
                'A. 0',
                'B. 1',
                'C. Depends on signal strength',
                'D. Undefined'
            ],
            correct: 'A',
            explanation: 'An OR gate outputs 1 if ANY input is 1. When both inputs are 0, no input is 1, so the output is 0.'
        },
        {
            id: 'Q-LG-4',
            question: 'What does XOR stand for?',
            options: [
                'A. Exclusive OR',
                'B. Extended OR',
                'C. Extra OR',
                'D. External OR'
            ],
            correct: 'A',
            explanation: 'XOR stands for Exclusive OR - it outputs 1 only when inputs are different (one is 1 and the other is 0).'
        },
        {
            id: 'Q-LG-5',
            question: 'What is the truth table output for XOR with inputs (1, 1)?',
            options: [
                'A. 0',
                'B. 1',
                'C. Undefined',
                'D. Both 0 and 1'
            ],
            correct: 'A',
            explanation: 'XOR outputs 1 only when inputs differ. When both are 1 (same input), XOR outputs 0.'
        },
        {
            id: 'Q-LG-6',
            question: 'What is a NAND gate equivalent to?',
            options: [
                'A. AND + OR',
                'B. AND + NOT',
                'C. OR + NOT',
                'D. XOR + NOT'
            ],
            correct: 'B',
            explanation: 'NAND = NOT AND. It is the inverse of an AND gate built by connecting AND output to a NOT gate.'
        },
        {
            id: 'Q-LG-7',
            question: 'How many NAND gates are needed to build a 2-input XOR gate?',
            options: [
                'A. 2',
                'B. 3',
                'C. 4',
                'D. 5'
            ],
            correct: 'C',
            explanation: 'A 2-input XOR can be built using exactly 4 NAND gates: X = NAND(NAND(A, NAND(A,B)), NAND(B, NAND(A,B))).'
        },
        {
            id: 'Q-LG-8',
            question: 'What is De Morgan\'s Law for NAND?',
            options: [
                'A. NOT(A AND B) = NOT A AND NOT B',
                'B. NOT(A AND B) = NOT A OR NOT B',
                'C. NOT(A OR B) = NOT A OR NOT B',
                'D. NOT(A OR B) = NOT A AND NOT B'
            ],
            correct: 'B',
            explanation: 'De Morgan\'s Law: NOT(A AND B) is equivalent to (NOT A) OR (NOT B). This shows NAND can be expressed using OR and NOT gates.'
        },
        {
            id: 'Q-LG-9',
            question: 'What is the result of AND(A, NOT A)?',
            options: [
                'A. A',
                'B. NOT A',
                'C. Always 0',
                'D. Always 1'
            ],
            correct: 'C',
            explanation: 'AND(A, NOT A) is always 0 because a value cannot be both A and NOT A simultaneously.'
        },
        {
            id: 'Q-LG-10',
            question: 'What redstone signal strength values are possible in Minecraft?',
            options: [
                'A. 0-7',
                'B. 0-15',
                'C. 0-31',
                'D. 1-16'
            ],
            correct: 'B',
            explanation: 'Redstone signal strength in Minecraft ranges from 0 (off) through 15 (maximum power), for 16 total levels.'
        },
        {
            id: 'Q-LG-11',
            question: 'What does a redstone repeater primarily do?',
            options: [
                'A. Creates a NOT gate',
                'B. Extends signal distance and adds delay',
                'C. Stores data',
                'D. Splits signals'
            ],
            correct: 'B',
            explanation: 'Redstone repeaters boost signals back to strength 15 (extending distance) and add a configurable delay.'
        },
        {
            id: 'Q-LG-12',
            question: 'What is the result of OR(A, NOT A)?',
            options: [
                'A. A',
                'B. NOT A',
                'C. Always 0',
                'D. Always 1'
            ],
            correct: 'D',
            explanation: 'OR(A, NOT A) is always 1 because either A is true, or its negation is true - one of them must be.'
        }
    ],
    addersArithmetic: [
        {
            id: 'Q-AA-1',
            question: 'What is the decimal value of binary 110?',
            options: [
                'A. 4',
                'B. 5',
                'C. 6',
                'D. 7'
            ],
            correct: 'C',
            explanation: 'Binary 110 = (1×4) + (1×2) + (0×1) = 4 + 2 + 0 = 6'
        },
        {
            id: 'Q-AA-2',
            question: 'What is decimal 8 in binary?',
            options: [
                'A. 100',
                'B. 110',
                'C. 1000',
                'D. 1010'
            ],
            correct: 'C',
            explanation: 'Decimal 8 = 8 + 0 + 0 + 0 = 1000 in binary (2³ = 8)'
        },
        {
            id: 'Q-AA-3',
            question: 'What gates generate the SUM and CARRY outputs of a half adder?',
            options: [
                'A. SUM: OR, CARRY: AND',
                'B. SUM: XOR, CARRY: AND',
                'C. SUM: AND, CARRY: XOR',
                'D. SUM: NOT, CARRY: AND'
            ],
            correct: 'B',
            explanation: 'Half adder: SUM uses XOR (outputs 1 when inputs differ), CARRY uses AND (outputs 1 only when both inputs are 1).'
        },
        {
            id: 'Q-AA-4',
            question: 'How many inputs does a full adder have?',
            options: [
                'A. 2',
                'B. 3',
                'C. 4',
                'D. 5'
            ],
            correct: 'B',
            explanation: 'A full adder has 3 inputs: two bits to add (A, B) and one carry-in from previous addition.'
        },
        {
            id: 'Q-AA-5',
            question: 'What is the sum output when full adder inputs are A=1, B=1, CarryIn=1?',
            options: [
                'A. 0',
                'B. 1',
                'C. 10',
                'D. 11'
            ],
            correct: 'B',
            explanation: '1 + 1 + 1 = 3. In binary: 11. Sum bit = 1, carry bit = 1.'
        },
        {
            id: 'Q-AA-6',
            question: 'How many half adders are needed to build one full adder?',
            options: [
                'A. 1',
                'B. 2',
                'C. 3',
                'D. 4'
            ],
            correct: 'B',
            explanation: 'A full adder can be built using 2 half adders plus an OR gate to combine the carry outputs.'
        },
        {
            id: 'Q-AA-7',
            question: 'What is the Boolean expression for the SUM output of a full adder?',
            options: [
                'A. A AND B AND Cin',
                'B. A XOR B XOR Cin',
                'C. (A OR B) AND Cin',
                'D. NOT(A XOR B XOR Cin)'
            ],
            correct: 'B',
            explanation: 'SUM = A XOR B XOR Cin. The sum bit is 1 when an odd number of inputs (A, B, Cin) are 1.'
        },
        {
            id: 'Q-AA-8',
            question: 'How many full adders are needed to add two 8-bit numbers?',
            options: [
                'A. 4',
                'B. 6',
                'C. 8',
                'D. 9'
            ],
            correct: 'C',
            explanation: 'To add two 8-bit numbers, you need 8 full adders, one for each bit position.'
        },
        {
            id: 'Q-AA-9',
            question: 'What causes the "ripple" in a ripple carry adder?',
            options: [
                'A. Signal reflection',
                'B. Carry propagating through adders',
                'C. Data bus oscillation',
                'D. Clock signal'
            ],
            correct: 'B',
            explanation: 'Carry propagates (ripples) from one full adder to the next, creating sequential delays.'
        },
        {
            id: 'Q-AA-10',
            question: 'What is the result of binary 0111 + 0011?',
            options: [
                'A. 1001',
                'B. 1010',
                'C. 1011',
                'D. 1100'
            ],
            correct: 'B',
            explanation: '0111 (7) + 0011 (3) = 1010 (10). Add bit by bit: 1+1=10(0,c1), 1+1+1=11(1,c1), 1+0+1=10(0,c1), 0+0+1=1. Result: 1010.'
        },
        {
            id: 'Q-AA-11',
            question: 'What indicates overflow in a ripple carry adder?',
            options: [
                'A. Final sum is negative',
                'B. Carry-out from most significant adder',
                'C. Clock signal mismatch',
                'D. All inputs are 1'
            ],
            correct: 'B',
            explanation: 'A carry-out from the last (most significant) adder indicates overflow - result needs more bits than available.'
        },
        {
            id: 'Q-AA-12',
            question: 'What is the decimal value of binary 1111?',
            options: [
                'A. 13',
                'B. 14',
                'C. 15',
                'D. 16'
            ],
            correct: 'C',
            explanation: 'Binary 1111 = 8 + 4 + 2 + 1 = 15. This is the maximum value for 4 bits.'
        },
        {
            id: 'Q-AA-13',
            question: 'What is the first (least significant) full adder\'s carry-in value?',
            options: [
                'A. It depends on inputs',
                'B. Always 0',
                'C. Always 1',
                'D. Undefined'
            ],
            correct: 'B',
            explanation: 'The LSB full adder has no previous bit, so its carry-in is always 0.'
        }
    ],
    memoryStorage: [
        {
            id: 'Q-MS-1',
            question: 'What does RS stand for in RS latch?',
            options: [
                'A. Read-Store',
                'B. Reset-Set',
                'C. Register-Store',
                'D. Random-Signal'
            ],
            correct: 'B',
            explanation: 'RS = Reset-Set. S input sets the latch, R input resets (clears) it.'
        },
        {
            id: 'Q-MS-2',
            question: 'When both S=0 and R=0 in an RS latch, what happens?',
            options: [
                'A. Output is 0',
                'B. Output is 1',
                'C. No change (maintains state)',
                'D. Invalid state'
            ],
            correct: 'C',
            explanation: 'S=0, R=0 means neither set nor reset is active. The latch maintains its current state (memory mode).'
        },
        {
            id: 'Q-MS-3',
            question: 'How many stable states does an RS latch have?',
            options: [
                'A. 1',
                'B. 2',
                'C. 3',
                'D. 4'
            ],
            correct: 'B',
            explanation: 'An RS latch has 2 stable states: SET (Q=1) and RESET (Q=0), allowing it to store 1 bit.'
        },
        {
            id: 'Q-MS-4',
            question: 'What is Q\' in relation to Q?',
            options: [
                'A. Q times 2',
                'B. The opposite of Q',
                'C. Same as Q',
                'D. Q plus 1'
            ],
            correct: 'B',
            explanation: 'Q\' (Q-bar or Q-not) is always the opposite (complement) of Q. When Q=1, Q\'=0; when Q=0, Q\'=1.'
        },
        {
            id: 'Q-MS-5',
            question: 'What does D stand for in D flip-flop?',
            options: [
                'A. Delay',
                'B. Data',
                'C. Digital',
                'D. Dynamic'
            ],
            correct: 'B',
            explanation: 'D stands for DATA. The D input contains the data to be stored on the clock edge.'
        },
        {
            id: 'Q-MS-6',
            question: 'When does a D flip-flop capture the D input?',
            options: [
                'A. When D changes',
                'B. When clock transitions',
                'C. Continuously',
                'D. When reset signal is on'
            ],
            correct: 'B',
            explanation: 'D flip-flops capture D input at the clock edge (typically rising edge: 0 to 1 transition).'
        },
        {
            id: 'Q-MS-7',
            question: 'What is the key advantage of D flip-flops over RS latches?',
            options: [
                'A. Smaller size',
                'B. Synchronous operation',
                'C. More states',
                'D. Less power consumption'
            ],
            correct: 'B',
            explanation: 'D flip-flops use a clock for synchronous operation, allowing precise timing control over when data is stored.'
        },
        {
            id: 'Q-MS-8',
            question: 'How many D flip-flops are needed for a 4-bit register?',
            options: [
                'A. 2',
                'B. 3',
                'C. 4',
                'D. 5'
            ],
            correct: 'C',
            explanation: 'A 4-bit register needs 4 D flip-flops, one for each bit to be stored.'
        },
        {
            id: 'Q-MS-9',
            question: 'What is the purpose of a write enable signal?',
            options: [
                'A. To enable power',
                'B. To control when register updates',
                'C. To write to disk',
                'D. To enable reading'
            ],
            correct: 'B',
            explanation: 'Write enable controls whether a register updates on clock. When disabled, register holds its value regardless of D input.'
        },
        {
            id: 'Q-MS-10',
            question: 'What does RAM stand for?',
            options: [
                'A. Random Access Memory',
                'B. Real Access Memory',
                'C. Read-All Memory',
                'D. Rapid Access Module'
            ],
            correct: 'A',
            explanation: 'RAM = Random Access Memory. Any location can be accessed in any order, not just sequentially.'
        },
        {
            id: 'Q-MS-11',
            question: 'With 4 address bits, how many memory locations can be addressed?',
            options: [
                'A. 4',
                'B. 8',
                'C. 16',
                'D. 32'
            ],
            correct: 'C',
            explanation: 'With n address bits, you can address 2^n locations. 2^4 = 16 locations.'
        },
        {
            id: 'Q-MS-12',
            question: 'What is the difference between SRAM and DRAM?',
            options: [
                'A. SRAM is faster, DRAM is slower',
                'B. SRAM uses flip-flops, DRAM uses capacitors',
                'C. SRAM is smaller, DRAM is larger',
                'D. There is no difference'
            ],
            correct: 'B',
            explanation: 'SRAM uses flip-flops (static, no refresh needed). DRAM uses capacitors (dynamic, needs periodic refresh).'
        },
        {
            id: 'Q-MS-13',
            question: 'How many total RAM cells are needed for a 4x4 RAM?',
            options: [
                'A. 4',
                'B. 8',
                'C. 16',
                'D. 24'
            ],
            correct: 'C',
            explanation: '4x4 RAM: 4 locations × 4 bits per location = 16 total RAM cells needed.'
        }
    ],
    clocksTiming: [
        {
            id: 'Q-CT-1',
            question: 'What is a redstone clock in Minecraft?',
            options: [
                'A. A way to tell time',
                'B. A circuit that outputs repeating pulses',
                'C. A storage device',
                'D. A logic gate'
            ],
            correct: 'B',
            explanation: 'A redstone clock is a circuit that continuously outputs repeating ON/OFF signals.'
        },
        {
            id: 'Q-CT-2',
            question: 'What is the fastest possible clock in Minecraft?',
            options: [
                'A. 1 tick cycle',
                'B. 2 tick cycle',
                'C. 3 tick cycle',
                'D. 4 tick cycle'
            ],
            correct: 'A',
            explanation: 'The fastest stable clock uses comparator updates and torch behavior to achieve 1-tick cycles, though it\'s unstable.'
        },
        {
            id: 'Q-CT-3',
            question: 'What is a pulse generator?',
            options: [
                'A. A clock',
                'B. A circuit that creates a single pulse',
                'C. A repeater',
                'D. A NOT gate'
            ],
            correct: 'B',
            explanation: 'A pulse generator creates a single pulse signal when triggered, not a repeating clock.'
        },
        {
            id: 'Q-CT-4',
            question: 'What does a pulse extender do?',
            options: [
                'A. Shortens the pulse',
                'B. Lengthens the pulse',
                'C. Creates pulses',
                'D. Blocks pulses'
            ],
            correct: 'B',
            explanation: 'A pulse extender takes a short input signal and outputs a longer pulse of specified duration.'
        },
        {
            id: 'Q-CT-5',
            question: 'What is an edge detector?',
            options: [
                'A. Detects block edges',
                'B. Detects signal transitions',
                'C. Creates edge blocks',
                'D. A type of clock'
            ],
            correct: 'B',
            explanation: 'An edge detector responds to signal transitions (rising: 0→1 or falling: 1→0) by outputting a pulse.'
        },
        {
            id: 'Q-CT-6',
            question: 'How do hopper clocks work?',
            options: [
                'A. Using hoppers moving items',
                'B. Using redstone torches',
                'C. Using comparators only',
                'D. Using sticky pistons'
            ],
            correct: 'A',
            explanation: 'Hopper clocks use hoppers transferring items back and forth, with comparators detecting item changes.'
        },
        {
            id: 'Q-CT-7',
            question: 'What is the primary use of a monostable circuit?',
            options: [
                'A. Generate continuous clock',
                'B. Generate single pulse on trigger',
                'C. Store data',
                'D. Add two numbers'
            ],
            correct: 'B',
            explanation: 'Monostable circuits (one-shots) output a single pulse when triggered, returning to stable state afterward.'
        },
        {
            id: 'Q-CT-8',
            question: 'What is "clock skew" in digital systems?',
            options: [
                'A. Clock is broken',
                'B. Clock signals arrive at different times',
                'C. Clock is too fast',
                'D. Clock is too slow'
            ],
            correct: 'B',
            explanation: 'Clock skew is when clock signals arrive at different components at slightly different times due to propagation delays.'
        },
        {
            id: 'Q-CT-9',
            question: 'Why are repeaters used in redstone clocks?',
            options: [
                'A. They make clocks slower',
                'B. They create the delay and prevent signal decay',
                'C. They increase power',
                'D. They look nice'
            ],
            correct: 'B',
            explanation: 'Repeaters add delay (adjustable) and boost signal strength, preventing signal decay in clock loops.'
        },
        {
            id: 'Q-CT-10',
            question: 'What is a T flip-flop used for?',
            options: [
                'A. Adding numbers',
                'B. Toggling state on each clock',
                'C. Storing data indefinitely',
                'D. Generating clock signals'
            ],
            correct: 'B',
            explanation: 'T flip-flop toggles output on each clock pulse (0→1→0→1...). Used for counters and frequency division.'
        },
        {
            id: 'Q-CT-11',
            question: 'What creates a rising edge pulse?',
            options: [
                'A. Signal going 1→0',
                'B. Signal going 0→1',
                'C. Signal staying at 1',
                'D. Signal staying at 0'
            ],
            correct: 'B',
            explanation: 'A rising edge is the transition from 0 to 1. Rising edge detectors output a pulse when this occurs.'
        }
    ],
    dataTransmission: [
        {
            id: 'Q-DT-1',
            question: 'What is a data bus?',
            options: [
                'A. A public transit system',
                'B. A set of parallel wires carrying data',
                'C. A single wire',
                'D. A clock signal'
            ],
            correct: 'B',
            explanation: 'A data bus is a bundle of multiple parallel wires that carry data simultaneously (e.g., 8-bit bus carries 8 bits at once).'
        },
        {
            id: 'Q-DT-2',
            question: 'What is multiplexing?',
            options: [
                'A. Making multiple copies',
                'B. Sending multiple signals over one channel',
                'C. Splitting one signal',
                'D. Adding signals'
            ],
            correct: 'B',
            explanation: 'Multiplexing combines multiple input signals into one output channel, controlled by selection signals.'
        },
        {
            id: 'Q-DT-3',
            question: 'What does a demultiplexer do?',
            options: [
                'A. Combines signals',
                'B. Splits one signal to multiple outputs',
                'C. Inverts signals',
                'D. Adds signals'
            ],
            correct: 'B',
            explanation: 'A demultiplexer (demux) takes one input and routes it to one of multiple outputs based on selection signals.'
        },
        {
            id: 'Q-DT-4',
            question: 'What is tri-state logic?',
            options: [
                'A. Logic with three values',
                'B. Output can be 0, 1, or disconnected',
                'C. Three inputs',
                'D. Three clocks'
            ],
            correct: 'B',
            explanation: 'Tri-state outputs can be 0, 1, or high-impedance (disconnected/disconnected from bus), enabling bus sharing.'
        },
        {
            id: 'Q-DT-5',
            question: 'Why are repeaters or comparators needed for long-distance transmission?',
            options: [
                'A. To add delay',
                'B. To boost signal strength',
                'C. To block signals',
                'D. To invert signals'
            ],
            correct: 'B',
            explanation: 'Redstone signals lose strength over distance. Repeaters or comparators boost signals back to full strength.'
        },
        {
            id: 'Q-DT-6',
            question: 'What is serial transmission?',
            options: [
                'A. Sending all bits at once',
                'B. Sending bits one after another',
                'C. Using serial cables',
                'D. Wireless transmission'
            ],
            correct: 'B',
            explanation: 'Serial transmission sends bits sequentially one after another over a single channel (slower but uses fewer wires).'
        },
        {
            id: 'Q-DT-7',
            question: 'What is parallel transmission?',
            options: [
                'A. Sending bits one at a time',
                'B. Sending multiple bits simultaneously',
                'C. Using no wires',
                'D. Wireless only'
            ],
            correct: 'B',
            explanation: 'Parallel transmission sends multiple bits at the same time over multiple wires (faster but needs more wires).'
        },
        {
            id: 'Q-DT-8',
            question: 'What is the main disadvantage of parallel busses?',
            options: [
                'A. Slower speed',
                'B. More wires, signal skew, crosstalk',
                'C. Harder to build',
                'D. Less data'
            ],
            correct: 'B',
            explanation: 'Parallel busses need many wires, have signal skew (different arrival times), and crosstalk between wires.'
        },
        {
            id: 'Q-DT-9',
            question: 'How many select lines are needed for an 8-to-1 multiplexer?',
            options: [
                'A. 2',
                'B. 3',
                'C. 4',
                'D. 8'
            ],
            correct: 'B',
            explanation: '2^n inputs needs n select lines. 8 inputs needs log2(8) = 3 select lines.'
        },
        {
            id: 'Q-DT-10',
            question: 'What enables bidirectional communication on a shared bus?',
            options: [
                'A. Two separate busses',
                'B. Tri-state buffers and direction control',
                'C. Clock signals only',
                'D. Inverters'
            ],
            correct: 'B',
            explanation: 'Tri-state buffers enable sharing a bidirectional bus: components can be drivers (0/1 outputs) or disabled (high-Z).'
        }
    ],
    alu: [
        {
            id: 'Q-ALU-1',
            question: 'What does ALU stand for?',
            options: [
                'A. Advanced Logic Unit',
                'B. Arithmetic Logic Unit',
                'C. Arithmetic Logical Unit',
                'D. Automated Logic Unit'
            ],
            correct: 'B',
            explanation: 'ALU = Arithmetic Logic Unit. It performs arithmetic and logical operations on binary data.'
        },
        {
            id: 'Q-ALU-2',
            question: 'What operations does a basic ALU perform?',
            options: [
                'A. Only addition',
                'B. Arithmetic and logical operations',
                'C. Only logic gates',
                'D. Storage operations'
            ],
            correct: 'B',
            explanation: 'ALU performs arithmetic (add, subtract) and logical (AND, OR, NOT, XOR) operations.'
        },
        {
            id: 'Q-ALU-3',
            question: 'How is subtraction typically implemented in an ALU?',
            options: [
                'A. Direct subtraction circuit',
                'B. Adding the two\'s complement',
                'C. Using separate subtractor',
                'D. Cannot subtract, only add'
            ],
            correct: 'B',
            explanation: 'Subtraction A - B is implemented as A + (twos complement of B). Twos complement = invert bits, add 1.'
        },
        {
                id: 'Q-ALU-4',
            question: 'What is two\'s complement?',
            options: [
                'A. Complement times 2',
                'B. Invert all bits and add 1',
                'C. Reverse the bits',
                'D. Negate the number'
            ],
            correct: 'B',
            explanation: 'Two\'s complement represents negative numbers: invert all bits, then add 1. Used for subtraction.'
        },
        {
            id: 'Q-ALU-5',
            question: 'What are the control inputs to an ALU?',
            options: [
                'A. Data inputs only',
                'B. Operation select signals',
                'C. Clock and reset',
                'D. Address inputs'
            ],
            correct: 'B',
            explanation: 'ALU control inputs (op codes) select which operation to perform (add, subtract, AND, OR, etc.).'
        },
        {
            id: 'Q-ALU-6',
            question: 'How does an ALU select which operation to perform?',
            options: [
                'A. User manually selects',
                'B. Control signals from control unit',
                'C. Random selection',
                'D. Clock phase'
            ],
            correct: 'B',
            explanation: 'The control unit sends operation code signals to the ALU, which internally routes data through proper circuits.'
        },
        {
            id: 'Q-ALU-7',
            question: 'What does an ALU output besides the result?',
            options: [
                'A. Clock signal',
                'B. Status flags (zero, carry, overflow)',
                'C. Next instruction',
                'D. Memory address'
            ],
            correct: 'B',
            explanation: 'ALU outputs result plus status flags: Zero (result=0), Carry (overflow), Overflow, Sign, etc.'
        },
        {
            id: 'Q-ALU-8',
            question: 'What is a 4-bit ALU?',
            options: [
                'A. ALU with 4 inputs',
                'B. ALU that processes 4-bit numbers',
                'C. ALU with 4 outputs',
                'D. ALU operated by 4 people'
            ],
            correct: 'B',
            explanation: 'A 4-bit ALU takes two 4-bit inputs and produces a 4-bit output (plus carry for multi-bit operations).'
        },
        {
            id: 'Q-ALU-9',
            question: 'How can you expand a 4-bit ALU to 8 bits?',
            options: [
                'A. Cannot expand',
                'B. Chain multiple ALUs together',
                'C. Use larger components',
                'D. Add more control lines'
            ],
            correct: 'B',
            explanation: 'Multiple ALU slices can be chained. Lower 4-bit ALU\'s carry-out connects to upper 4-bit ALU\'s carry-in.'
        },
        {
            id: 'Q-ALU-10',
            question: 'What is the main component of the arithmetic section of an ALU?',
            options: [
                'A. Logic gates',
                'B. Adders (and subtractor derived from adder)',
                'C. Multiplexers',
                'D. Flip-flops'
            ],
            correct: 'B',
            explanation: 'The arithmetic section uses adders (full adders) for addition. Subtraction uses adders with two\'s complement.'
        },
        {
            id: 'Q-ALU-11',
            question: 'What is a barrel shifter?',
            options: [
                'A. Shifting mechanism',
                'B. Circuit that can shift data by any amount',
                'C. Type of adder',
                'D. Memory device'
            ],
            correct: 'B',
            explanation: 'A barrel shifter is a circuit that can shift or rotate data by any specified amount (commonly powers of 2).'
        },
        {
            id: 'Q-ALU-12',
            question: 'What is the zero flag used for?',
            options: [
                'A. Timing',
                'B. Detecting if ALU result is zero',
                'C. Clock synchronization',
                'D. Memory addressing'
            ],
            correct: 'B',
            explanation: 'Zero flag is set when ALU output is 0. Used for conditional branching (if result equals zero).'
        }
    ],
    controlDecoders: [
        {
            id: 'Q-CD-1',
            question: 'What does an instruction decoder do?',
            options: [
                'A. Encodes instructions',
                'B. Decodes instruction op codes to control signals',
                'C. Stores instructions',
                'D. Fetches instructions'
            ],
            correct: 'B',
            explanation: 'Instruction decoder takes binary instruction (op code) and outputs control signals for ALU, memory, registers.'
        },
        {
            id: 'Q-CD-2',
            question: 'What is an op code?',
            options: [
                'A. Operation code',
                'B. Optional code',
                'C. Output code',
                'D. Optimum code'
            ],
            correct: 'A',
            explanation: 'Op code (operation code) is the part of an instruction that specifies what operation to perform (ADD, SUB, etc.).'
        },
        {
            id: 'Q-CD-3',
            question: 'What is the fetch-decode-execute cycle?',
            options: [
                'A. Instruction fetch, decode, execution',
                'B. Three separate programs',
                'C. A type of clock',
                'D. A storage cycle'
            ],
            correct: 'A',
            explanation: 'The CPU cycle: FETCH (get instruction from memory), DECODE (interpret instruction), EXECUTE (perform operation).'
        },
        {
            id: 'Q-CD-4',
            question: 'What is a program counter?',
            options: [
                'A. Counts total programs',
                'B. Stores address of next instruction',
                'C. Counts clock cycles',
                'D. Counts executed instructions'
            ],
            correct: 'B',
            explanation: 'Program counter (PC) holds the memory address of the next instruction to fetch and execute.'
        },
        {
            id: 'Q-CD-5',
            question: 'How does the PC normally change?',
            options: [
                'A. Randomly',
                'B. Increments to point to next instruction',
                'C. Never changes',
                'D. Decrements'
            ],
            correct: 'B',
            explanation: 'Normally, PC increments by 1 to point to the next sequential instruction. Branch/jump instructions override this.'
        },
        {
            id: 'Q-CD-6',
            question: 'What is microcode?',
            options: [
                'A. Small code',
                'B. Internal control signals for complex instructions',
                'C. Memory code',
                'D. Debug code'
            ],
            correct: 'B',
            explanation: 'Microcode maps complex instructions to sequences of simpler micro-operations, internally controlling the CPU.'
        },
        {
            id: 'Q-CD-7',
            question: 'What determines control signals sent to the ALU?',
            options: [
                'A. User input',
                'B. Instruction decoder based on op code',
                'C. Program counter',
                'D. Data values'
            ],
            correct: 'B',
            explanation: 'The instruction decoder analyzes the op code and generates appropriate control signals for the ALU (add vs subtract, etc.).'
        },
        {
            id: 'Q-CD-8',
            question: 'What is a control unit?',
            options: [
                'A. Controls Minecraft blocks',
                'B. Coordinates CPU components, generates control signals',
                'C. Controls user input',
                'D. Controls memory only'
            ],
            correct: 'B',
            explanation: 'Control unit is the "brain" that coordinates CPU operations: fetches, decodes, generates control signals.'
        },
        {
            id: 'Q-CD-9',
            question: 'What is branching in CPU operation?',
            options: [
                'A. Creating branches',
                'B. Changing execution flow based on condition',
                'C. Tree structure',
                'D. Parallel execution'
            ],
            correct: 'B',
            explanation: 'Branching (jumping) changes PC to a different address based on conditions or instructions, altering execution flow.'
        },
        {
            id: 'Q-CD-10',
            question: 'What are control signals?',
            options: [
                'A. Signals that control the user',
                'B. Binary signals controlling CPU component behavior',
                'C. Clock signals only',
                'D. Data signals'
            ],
            correct: 'B',
            explanation: 'Control signals are binary inputs/outputs that enable/disable operations (register write, ALU op, memory read/write).'
        }
    ],
    cpuArchitecture: [
        {
            id: 'Q-CPU-1',
            question: 'What are the main components of a basic CPU?',
            options: [
                'A. ALU only',
                'B. ALU, control unit, registers',
                'C. Adder and memory',
                'D. Clock and wiring'
            ],
            correct: 'B',
            explanation: 'Basic CPU components: ALU (arithmetic/logic), Control Unit (coordination), Registers (temporary storage).'
        },
        {
            id: 'Q-CPU-2',
            question: 'What is an instruction set architecture?',
            options: [
                'A. Set of instructions a CPU understands',
                'B. Physical CPU structure',
                'C. How instructions are built',
                'D. Memory architecture'
            ],
            correct: 'A',
            explanation: 'Instruction Set Architecture (ISA) is the complete set of instructions (ADD, SUB, LOAD, STORE) that the CPU can execute.'
        },
        {
            id: 'Q-CPU-3',
            question: 'What is a register in the context of a CPU?',
            options: [
                'A. To log data',
                'B. Fast internal storage in the CPU',
                'C. Memory location',
                'D. Instruction'
            ],
            correct: 'B',
            explanation: 'CPU registers are fast internal storage locations for holding data, addresses, and instructions being processed.'
        },
        {
            id: 'Q-CPU-4',
            question: 'What is the von Neumann architecture?',
            options: [
                'A. Separate memory for data and instructions',
                'B. Single memory for both data and instructions',
                'C. Multiple processors',
                'D. No memory'
            ],
            correct: 'B',
            explanation: 'Von Neumann architecture stores both program instructions and data in the same memory, accessed via the same bus.'
        },
        {
            id: 'Q-CPU-5',
            question: 'What is the Harvard architecture?',
            options: [
                'A. Same memory for data and instructions',
                'B. Separate memory for data and instructions',
                'C. Multiple CPUs',
                'D. No memory separation'
            ],
            correct: 'B',
            explanation: 'Harvard architecture has separate memories (and separate busses) for instructions and data, enabling simultaneous access.'
        },
        {
            id: 'Q-CPU-6',
            question: 'What is a bus in computer architecture?',
            options: [
                'A. Public transit',
                'B. System of wires for data transmission',
                'C. A clock signal',
                'D. A register'
            ],
            correct: 'B',
            explanation: 'A bus is a set of wires connecting CPU components for data, address, and control signal transmission.'
        },
        {
            id: 'Q-CPU-7',
            question: 'What is an accumulator?',
            options: [
                'A. Adds things up',
                'B. A special register for ALU results',
                'C. Memory location',
                'D. Clock component'
            ],
            correct: 'B',
            explanation: 'Accumulator is a special register that stores ALU results and is an implicit operand for many instructions.'
        },
        {
            id: 'Q-CPU-8',
            question: 'What is interrupt handling?',
            options: [
                'A. Stopping the CPU',
                'B. Pausing current execution to handle event',
                'C. Breaking execution',
                'D. Error handling'
            ],
            correct: 'B',
            explanation: 'Interrupt handling: pause current execution, save state, handle external event (I/O, timer), then resume.'
        },
        {
            id: 'Q-CPU-9',
            question: 'What determines CPU clock speed?',
            options: [
                'A. User preference',
                'B. Clock signal frequency',
                'C. Number of registers',
                'D. ALU size'
            ],
            correct: 'B',
            explanation: 'CPU clock speed is determined by the frequency of the clock signal (how many cycles per second).'
        },
        {
            id: 'Q-CPU-10',
            question: 'What is pipelining?',
            options: [
                'A. Using pipes',
                'B. Overlapping execution of multiple instructions',
                'C. Sequential execution',
                'D. Memory buffering'
            ],
            correct: 'B',
            explanation: 'Pipelining overlaps stages (fetch, decode, execute) of multiple instructions, improving throughput (more instructions per second).'
        },
        {
            id: 'Q-CPU-11',
            question: 'What is the data bus used for?',
            options: [
                'A. Timing signals',
                'B. Transferring data between components',
                'C. Store addresses',
                'D. Control operations'
            ],
            correct: 'B',
            explanation: 'The data bus carries actual data values between CPU components, memory, and I/O devices.'
        },
        {
            id: 'Q-CPU-12',
            question: 'What is the address bus used for?',
            options: [
                'A. Carry data values',
                'B. Specify memory locations or devices',
                'C. Control signals',
                'D. Timing'
            ],
            correct: 'B',
            explanation: 'Address bus carries addresses specifying which memory location or I/O device to access.'
        },
        {
            id: 'Q-CPU-13',
            question: 'What is the control bus used for?',
            options: [
                'A. Carry data',
                'B. Carry addresses',
                'C. Carry control and timing signals',
                'D. Clock only'
            ],
            correct: 'C',
            explanation: 'Control bus carries control signals (read/write, interrupt acknowledge, bus request) and timing information.'
        }
    ],
    final: [
        {
            id: 'Q-F-1',
            question: 'Starting from basics, build a full 4-bit CPU. What is the correct order for building these components?',
            options: [
                'A. ALU → Logic Gates → Memory → CPU',
                'B. Logic Gates → Adders → Flip-Flops → Registers → ALU → Control Unit → Complete CPU',
                'C. CPU → ALU → Memory → Logic Gates',
                'D. Memory → Flip-Flops → CPU → ALU'
            ],
            correct: 'B',
            explanation: 'Correct progression: Logic Gates (fundamental) → Adders (for arithmetic) → Flip-Flops (memory) → Registers → ALU → Control Unit → Complete CPU.'
        },
        {
            id: 'Q-F-2',
            question: 'What is the theoretical minimum number of logic gates needed to build a complete 4-bit CPU?',
            options: [
                'A. Under 50 gates total',
                'B. Around 100-200 gates',
                'C. At least 500 gates',
                'D. Over 1000 gates'
            ],
            correct: 'B',
            explanation: 'A complete 4-bit CPU (with 4-bit ALU, registers, control unit) typically needs around 100-200 logic gates in total.'
        },
        {
            id: 'Q-F-3',
            question: 'You are building a computer in Minecraft. What is the most effective approach to organize such a large project?',
            options: [
                'A. Build everything at once in one area',
                'B. Build and test each component separately, then integrate',
                'C. Copy from tutorial directly',
                'D. Skip testing, assume it works'
            ],
            correct: 'B',
            explanation: 'Best practice: build and thoroughly test each component (gates, adders, ALU, etc.) separately, then integrate incrementally.'
        },
        {
            id: 'Q-F-4',
            question: 'What is the purpose of a clock in a CPU?',
            options: [
                'A. Tell time',
                'B. Synchronize all CPU operations',
                'C. Store data',
                'D. Perform additions'
            ],
            correct: 'B',
            explanation: 'The CPU clock synchronizes all operations: fetch on cycle 1, decode on cycle 2, execute on cycle 3 (simplified).'
        },
        {
            id: 'Q-F-5',
            question: 'In a simple instruction format (op code + operand), what does 8-bit code "01000001" represent if op code uses top 4 bits and operand uses bottom 4 bits?',
            options: [
                'A. Op code: 0100, Operand: 0001',
                'B. Op code: 0001, Operand: 0100',
                'C. Op code: 0100, Operand: 0101',
                'D. Op code: 0101, Operand: 0000'
            ],
            correct: 'A',
            explanation: 'Top 4 bits: 0100 (op code), Bottom 4 bits: 0001 (operand). Common instruction format splits bits between op code and operand.'
        },
        {
            id: 'Q-F-6',
            question: 'If you have 4 op codes in your instruction set, what is the minimum number of bits needed for the op code field?',
            options: [
                'A. 1 bit',
                'B. 2 bits',
                'C. 3 bits',
                'D. 4 bits'
            ],
            correct: 'B',
            explanation: '2 bits can encode 2² = 4 different values (00, 01, 10, 11), enough for 4 op codes.'
        },
        {
            id: 'Q-F-7',
            question: 'What is the relationship between clock speed and execution speed?',
            options: [
                'A. Slower clock = faster execution',
                'B. Faster clock = faster execution (up to a point)',
                'C. No relationship',
                'D. Clock speed doesn\'t matter'
            ],
            correct: 'B',
            explanation: 'Faster clock means more cycles per second, potentially faster execution. Other factors (instructions per cycle, design) also matter.'
        },
        {
            id: 'Q-F-8',
            question: 'What component fetches instructions from memory?',
            options: [
                'A. ALU',
                'B. Control Unit (via Program Counter)',
                'C. Registers',
                'D. Clock'
            ],
            correct: 'B',
            explanation: 'The control unit (using the Program Counter to know the address) fetches instructions from memory during the fetch phase.'
        },
        {
            id: 'Q-F-9',
            question: 'What happens when a CPU encounters an unconditional jump instruction?',
            options: [
                'A. Continues to next instruction',
                'B. Sets Program Counter to jump target address',
                'C. Halts execution',
                'D. Repeats current instruction'
            ],
            correct: 'B',
            explanation: 'Unconditional jump: PC is set to the target address, causing execution to continue from that location instead of next sequential instruction.'
        },
        {
            id: 'Q-F-10',
            question: 'What is the fundamental building block for ALL digital logic circuits?',
            options: [
                'A. Memory',
                'B. Logic gates (AND, OR, NOT, etc.)',
                'C. Clocks',
                'D. Registers'
            ],
            correct: 'B',
            explanation: 'All digital circuits (including adders, multiplexers, flip-flops, ALUs, CPU) are built from basic logic gates.'
        },
        {
            id: 'Q-F-11',
            question: 'Why is binary used in computers instead of decimal?',
            options: [
                'A. People hate decimal',
                'B. Physical implementation (on/off states)',
                'C. Mathematical preference',
                'D. Random choice'
            ],
            correct: 'B',
            explanation: 'Binary maps perfectly to physical on/off states (electricity presence/absence, transistor on/off, redstone on/off).'
        },
        {
            id: 'Q-F-12',
            question: 'How does a CPU "know" what operation an instruction represents?',
            options: [
                'A. Magic',
                'B. Instruction decoder analyzes op code',
                'C. User tells it',
                'D. Random guess'
            ],
            correct: 'B',
            explanation: 'Instruction decoder takes the op code part of the instruction, analyzes it, and generates appropriate control signals.'
        },
        {
            id: 'Q-F-13',
            question: 'What is stack in computing?',
            options: [
                'A. Pile of blocks',
                'B. LIFO (Last In First Out) memory structure',
                'C. FIFO (First In First Out)',
                'D. Random access memory'
            ],
            correct: 'B',
            explanation: 'Stack is Last-In-First-Out memory: last item pushed is first popped. Used for function calls, return addresses, local variables.'
        },
        {
            id: 'Q-F-14',
            question: 'What is a register file?',
            options: [
                'A. File on disk',
                'B. Collection of registers accessible by number',
                'C. Single register',
                'D. Memory cache'
            ],
            correct: 'B',
            explanation: 'Register file is a set of registers (typically 4, 8, 16, or 32) that can be accessed by specifying a register number.'
        },
        {
            id: 'Q-F-15',
            question: 'What is the main limitation of minecraft-based computers?',
            options: [
                'A. Cannot do math',
                'B. Size, signal propagation delay, redstone tick rate',
                'C. Too powerful',
                'D. No limitations'
            ],
            correct: 'B',
            explanation: 'Minecraft computers are limited by size (need space for components), signal propagation delays, and the tick rate (20 ticks/sec maximum).'
        },
        {
            id: 'Q-F-16',
            question: 'You want to multiply two numbers. Since your ALU only has ADD, how do you do it?',
            options: [
                'A. Cannot multiply',
                'B. Use repeated addition: A × B = A added B times',
                'C. Use special magic circuit',
                'D. Ask user'
            ],
            correct: 'B',
            explanation: 'Without a dedicated multiplier, multiplication can be done via repeated addition (slow) or shift-and-add algorithm (faster).'
        },
        {
            id: 'Q-F-17',
            question: 'What is the "carry flag" used for?',
            options: [
                'A. Carry things',
                'B. Indicates when addition resulted in overflow',
                'C. Always set to 1',
                'D. Part of clock'
            ],
            correct: 'B',
            explanation: 'Carry flag is set when an addition results in a carry-out (e.g., 15 + 1 = 16, needs another bit). Used for multi-bit addition.'
        },
        {
                id: 'Q-F-18',
            question: 'What determines the maximum memory addressable by a CPU?',
            options: [
                'A. Clock speed',
                'B. Number of address bits',
                'C. ALU size',
                'D. Number of registers'
            ],
            correct: 'B',
            explanation: 'With n address bits, maximum addressable locations = 2^n. 16 address bits = 65536 locations.'
        },
        {
            id: 'Q-F-19',
            question: 'What is a word in computer architecture?',
            options: [
                'A. Text word',
                'B. Natural unit of data the CPU processes at once',
                'C. Memory block',
                'D. Instruction'
            ],
            correct: 'B',
            explanation: 'Word is the natural unit of data: typically 8-bit CPU has 8-bit words, 16-bit has 16-bit words, etc.'
        },
        {
            id: 'Q-F-20',
            question: 'What does Moore\'s Law describe?',
            options: [
                'A. Computer speed',
                'B. Transistor density doubling every ~2 years',
                'C. Memory capacity',
                'D. Clock frequency'
            ],
            correct: 'B',
            explanation: 'Moore\'s Law: transistor density (and thus complexity) of integrated circuits doubles approximately every 2 years.'
        },
        {
            id: 'Q-F-21',
            question: 'In Minecraft, what is a common way to implement a multiplexer for selecting between multiple registers?',
            options: [
                'A. Use command blocks',
                'B. Redstone network that routes based on selector signals',
                'C. Physical user selection',
                'D. Random routing'
            ],
            correct: 'B',
            explanation: 'In Minecraft, multiplexers are implemented with redstone networks that route one of several inputs to output based on binary selector signals.'
        },
        {
            id: 'Q-F-22',
            question: 'What is the bottleneck that typically limits minecraft computer speed?',
            options: [
                'A. ALU complexity',
                'B. Redstone tick rate (20 ticks/sec)',
                'C. Number of registers',
                'D. Instruction set size'
            ],
            correct: 'B',
            explanation: 'Redstone updates at most once per redstone tick (minecraft tick), which is 20 per second max. This is the fundamental speed limitation.'
        },
        {
            id: 'Q-F-23',
            question: 'What is the role of an assembler in computer systems?',
            options: [
                'A. Physical machine',
                'B. Converts assembly language to machine code',
                'C. Builds computers',
                'D. Memory device'
            ],
            correct: 'B',
            explanation: 'Assembler is software that converts human-readable assembly code (ADD R1, R2) to binary machine code that the CPU executes.'
        },
        {
            id: 'Q-F-24',
            question: 'How does CPU distinguish between data and instructions in stored programs?',
            options: [
                'A. It cannot, they\'re the same format',
                'B. User specifies',
                'C. Instruction decoder identifies op codes',
                'D. Separate memory types'
            ],
            correct: 'A',
            explanation: 'In von Neumann architecture, data and instructions are identical in memory. CPU interprets based on what PC points to and how it\'s used.'
        },
        {
            id: 'Q-F-25',
            question: 'What is "instruction encoding"?',
            options: [
                'A. Hiding instructions',
                'B. Binary format representing instructions',
                'C. Language translation',
                'D. CPU design'
            ],
            correct: 'B',
            explanation: 'Instruction encoding is the binary representation of instructions: how op codes, operands, and fields map to bits.'
        }
    ]
};

// Quiz state
let quizAnswers = {};

// Initialize quizzes
function initializeQuizzes() {
    // Load saved scores
    const saved = localStorage.getItem('redstoneCourseProgress');
    if (saved) {
        const data = JSON.parse(saved);
        quizScores = data.quizScores || {};
    }

    // Setup each quiz
    for (let moduleKey in quizQuestions) {
        setupQuiz(moduleKey);
    }
}

// Setup quiz for a module
function setupQuiz(moduleKey) {
    const quizContainer = document.getElementById(`quiz-${moduleKey}`);
    if (!quizContainer) return;

    const questions = quizQuestions[moduleKey];
    quizAnswers[moduleKey] = {};

    // Create questions
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.dataset.questionId = question.id;

        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = `${index + 1}. ${question.question}`;
        questionDiv.appendChild(questionText);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        question.options.forEach(option => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `quiz-${moduleKey}-q${index}`;
            radio.value = option.charAt(0); // A, B, C, or D
            radio.addEventListener('change', function() {
                quizAnswers[moduleKey][question.id] = this.value;
            });
            label.appendChild(radio);
            label.appendChild(document.createTextNode(' ' + option));
            optionsDiv.appendChild(label);
        });

        questionDiv.appendChild(optionsDiv);

        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback quiz-feedback';
        feedbackDiv.id = `feedback-${moduleKey}-${question.id}`;
        feedbackDiv.style.display = 'none';
        questionDiv.appendChild(feedbackDiv);

        quizContainer.appendChild(questionDiv);
    });

    // Create submit button
    const submitBtn = document.createElement('button');
    submitBtn.className = 'submit-quiz';
    submitBtn.textContent = 'Submit Quiz';
    submitBtn.addEventListener('click', function() {
        submitQuiz(moduleKey);
    });
    quizContainer.appendChild(submitBtn);

    // Create results container
    const resultsDiv = document.createElement('div');
    resultsDiv.className = 'quiz-results';
    resultsDiv.id = `results-${moduleKey}`;
    resultsDiv.style.display = 'none';
    quizContainer.appendChild(resultsDiv);
}

// Submit quiz and calculate score
function submitQuiz(moduleKey) {
    const questions = quizQuestions[moduleKey];
    let correct = 0;
    let total = questions.length;

    questions.forEach((question, index) => {
        const feedback = document.getElementById(`feedback-${moduleKey}-${question.id}`);
        const userAnswer = quizAnswers[moduleKey][question.id];

        if (userAnswer === question.correct) {
            correct++;
            if (feedback) {
                feedback.textContent = 'Correct! ' + question.explanation;
                feedback.className = 'feedback correct quiz-feedback';
                feedback.style.display = 'block';
            }
        } else {
            const selected = document.querySelector(`input[name="quiz-${moduleKey}-q${index}"]:checked`);
            const selectedLabel = selected ? selected.parentElement.textContent : 'Not answered';

            if (feedback) {
                feedback.textContent = `Incorrect. You selected: ${selectedLabel}. ` + question.explanation;
                feedback.className = 'feedback incorrect quiz-feedback';
                feedback.style.display = 'block';
            }
        }
    });

    const percentage = Math.round((correct / total) * 100);
    const results = document.getElementById(`results-${moduleKey}`);

    results.textContent = `Score: ${correct}/${total} (${percentage}%)`;
    results.style.display = 'block';

    if (percentage >= 70) {
        results.classList.remove('failed');
        results.textContent += ' - PASSED! Well done!';
    } else {
        results.classList.add('failed');
        results.textContent += ' - Not yet passing. Review the material and try again.';
    }

    // Save score
    saveQuizScore(moduleKey, percentage);
}

// Quiz answers for reference
function getQuizAnswers(moduleKey) {
    return quizAnswers[moduleKey];
}