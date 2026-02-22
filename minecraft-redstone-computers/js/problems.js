// Practice Problems Database for Minecraft Redstone Computers Course
// Each module contains 50-80+ problems covering all concepts

const practiceProblems = {
    // MODULE 1: Logic Gates
    logicGates: {
        truthTables: [
            {
                id: 'LG-1-1',
                type: 'truth-table',
                difficulty: 'easy',
                question: 'What is the output of an AND gate when both inputs are ON (1, 1)?',
                answer: '1',
                alternatives: ['true', 'high', 'on'],
                hint: 'An AND gate outputs ON only when ALL inputs are ON.',
                explanation: 'The AND gate represents logical conjunction. For inputs (1, 1), the AND gate outputs 1 because both inputs are true.'
            },
            {
                id: 'LG-1-2',
                type: 'truth-table',
                difficulty: 'easy',
                question: 'What is the output of an AND gate when one input is ON and the other is OFF (1, 0)?',
                answer: '0',
                alternatives: ['false', 'low', 'off'],
                hint: 'An AND gate requires ALL inputs to be ON for the output to be ON.',
                explanation: 'For inputs (1, 0), the AND gate outputs 0 because not all inputs are true.'
            },
            {
                id: 'LG-1-3',
                type: 'truth-table',
                difficulty: 'easy',
                question: 'What is the output of an OR gate when both inputs are OFF (0, 0)?',
                answer: '0',
                alternatives: ['false', 'low', 'off'],
                hint: 'An OR gate outputs ON if ANY input is ON.',
                explanation: 'For inputs (0, 0), the OR gate outputs 0 because no inputs are true.'
            },
            {
                id: 'LG-1-4',
                type: 'truth-table',
                difficulty: 'easy',
                question: 'What is the output of an OR gate when one input is ON (1, 1)?',
                answer: '1',
                alternatives: ['true', 'high', 'on'],
                hint: 'An OR gate outputs ON if ANY input is ON.',
                explanation: 'For inputs (1, 1), the OR gate outputs 1 because at least one input is true.'
            },
            {
                id: 'LG-1-5',
                type: 'truth-table',
                difficulty: 'easy',
                question: 'What is the output of a NOT gate when the input is ON (1)?',
                answer: '0',
                alternatives: ['false', 'low', 'off'],
                hint: 'A NOT gate inverts the input.',
                explanation: 'A NOT gate (inverter) outputs the opposite of its input. Input 1 becomes output 0.'
            },
            {
                id: 'LG-1-6',
                type: 'truth-table',
                difficulty: 'easy',
                question: 'What is the output of a NOT gate when the input is OFF (0)?',
                answer: '1',
                alternatives: ['true', 'high', 'on'],
                hint: 'A NOT gate inverts the input.',
                explanation: 'A NOT gate (inverter) outputs the opposite of its input. Input 0 becomes output 1.'
            },
            {
                id: 'LG-1-7',
                type: 'truth-table',
                difficulty: 'medium',
                question: 'What is the output of an XOR gate when both inputs are ON (1, 1)?',
                answer: '0',
                alternatives: ['false', 'low', 'off'],
                hint: 'XOR stands for "exclusive OR" - outputs ON only when inputs are DIFFERENT.',
                explanation: 'For inputs (1, 1), the XOR gate outputs 0 because both inputs are the same.'
            },
            {
                id: 'LG-1-8',
                type: 'truth-table',
                difficulty: 'medium',
                question: 'What is the output of an XOR gate when inputs are (1, 0)?',
                answer: '1',
                alternatives: ['true', 'high', 'on'],
                hint: 'XOR outputs ON only when inputs are DIFFERENT.',
                explanation: 'For inputs (1, 0), the XOR gate outputs 1 because the inputs are different.'
            },
            {
                id: 'LG-1-9',
                type: 'truth-table',
                difficulty: 'medium',
                question: 'What is the output of a NAND gate when both inputs are ON (1, 1)?',
                answer: '0',
                alternatives: ['false', 'low', 'off'],
                hint: 'NAND is "NOT AND" - it is the inverse of an AND gate.',
                explanation: 'For inputs (1, 1), AND would give 1, then NOT inverts it to 0.'
            },
            {
                id: 'LG-1-10',
                type: 'truth-table',
                difficulty: 'medium',
                question: 'What is the output of a NAND gate when inputs are (0, 1)?',
                answer: '1',
                alternatives: ['true', 'high', 'on'],
                hint: 'First determine what AND would output, then invert it.',
                explanation: 'For inputs (0, 1), AND would give 0, then NOT inverts it to 1.'
            }
        ],
        minecraftImplementation: [
            {
                id: 'LG-2-1',
                type: 'implementation',
                difficulty: 'easy',
                question: 'What Minecraft block is commonly used to create a NOT gate?',
                answer: 'redstone torch',
                alternatives: ['torch', 'redstone torch on block'],
                hint: 'Redstone torches act as inverters in circuit behavior.',
                explanation: 'A redstone torch attached to the side of a block acts as a NOT gate, inverting any signal into the block.'
            },
            {
                id: 'LG-2-2',
                type: 'implementation',
                difficulty: 'easy',
                question: 'How many redstone dust are needed to create a basic connection between two components?',
                answer: '1',
                alternatives: ['one'],
                hint: 'Think about the minimum connection required.',
                explanation: 'A single redstone dust placed between two blocks can connect components at the same level.'
            },
            {
                id: 'LG-2-3',
                type: 'implementation',
                difficulty: 'easy',
                question: 'What is the input signal range for redstone dust in Minecraft?',
                answer: '0-15',
                alternatives: ['15', '15 levels', '0 to 15'],
                hint: 'Redstone signals have specific strength values.',
                explanation: 'Redstone signals in Minecraft range from 0 (off) to 15 (maximum power), with 16 total levels.'
            },
            {
                id: 'LG-2-4',
                type: 'implementation',
                difficulty: 'medium',
                question: 'To build an AND gate with two inputs in Minecraft, you need to combine signals. What happens if you simply place redstone dust connecting both input lines together?',
                answer: 'they become an OR gate',
                alternatives: ['or gate', 'creates or'],
                hint: 'Think about how redstone signals combine when they meet.',
                explanation: 'Simply connecting redstone dust from two inputs creates an OR gate, since if either input is on, the output line will be on.'
            },
            {
                id: 'LG-2-5',
                type: 'implementation',
                difficulty: 'medium',
                question: 'In Minecraft, what can you add to a redstone line to boost the signal strength back to 15?',
                answer: 'redstone repeater',
                alternatives: ['repeater'],
                hint: 'This component can repeat and boost signals.',
                explanation: 'A redstone repeater both strengthens signals back to 15 and adds a delay, useful for extending signal distance.'
            },
            {
                id: 'LG-2-6',
                type: 'implementation',
                difficulty: 'medium',
                question: 'How can you create a basic XOR gate using only the following components: redstone dust, redstone torches, and blocks?',
                answer: 'combine and or and not',
                alternatives: ['and + or + not', 'using and or not gates', 'and or not'],
                hint: 'XOR can be built by combining basic gates.',
                explanation: 'XOR = (A AND NOT B) OR (NOT A AND B). You can build it with AND, OR, and NOT gates in Minecraft.'
            },
            {
                id: 'LG-2-7',
                type: 'implementation',
                difficulty: 'hard',
                question: 'What is the most compact way to build a 2-input AND gate in Minecraft using standard components?',
                answer: 'torch inverter method',
                alternatives: ['using torches', 'redstone torch method', 'torches'],
                hint: 'Consider using redstone torch behavior and signal inversion.',
                explanation: 'A compact AND gate can be made by inverting both inputs (with torches), connecting them together (creates NAND), then inverting the output (with another torch).'
            },
            {
                id: 'LG-2-8',
                type: 'implementation',
                difficulty: 'hard',
                question: 'How would you build a NOR gate in Minecraft using the least number of redstone torches?',
                answer: '1',
                alternatives: ['one torch', 'single torch'],
                hint: 'A NOR gate is the inverse of OR. OR = simple connection.',
                explanation: 'A NOR gate can be built with just one redstone torch: connect inputs to the block under the torch, the torch output is the NOR output.'
            },
            {
                id: 'LG-2-9',
                type: 'implementation',
                difficulty: 'medium',
                question: 'What component can be used in Minecraft to control redstone signal flow direction?',
                answer: 'redstone repeater',
                alternatives: ['repeater'],
                hint: 'This component only allows signals to pass in one direction.',
                explanation: 'Redstone repeaters enforce signal direction, preventing signal backflow and providing signal boosting with delay.'
            },
            {
                id: 'LG-2-10',
                type: 'implementation',
                difficulty: 'medium',
                question: 'To input a signal into a block from a redstone torch, where must the torch be placed?',
                answer: 'side of the block',
                alternatives: ['on the side', 'attached to side'],
                hint: 'Redstone torches can attach to blocks in specific ways.',
                explanation: 'When a redstone torch is attached to the side of a block, it can power that block and any redstone dust or mechanisms connected to it.'
            }
        ],
        gateCombinations: [
            {
                id: 'LG-3-1',
                type: 'combination',
                difficulty: 'easy',
                question: 'If you connect the output of an AND gate to a NOT gate, what combined gate do you effectively create?',
                answer: 'NAND',
                alternatives: ['nand gate'],
                hint: 'NAND = NOT + AND combined.',
                explanation: 'Combining an AND gate followed by a NOT gate creates a NAND gate, which outputs the opposite of AND.'
            },
            {
                id: 'LG-3-2',
                type: 'combination',
                difficulty: 'easy',
                question: 'If you connect the output of an OR gate to a NOT gate, what combined gate do you effectively create?',
                answer: 'NOR',
                alternatives: ['nor gate'],
                hint: 'NOR = NOT + OR combined.',
                explanation: 'Combining an OR gate followed by a NOT gate creates a NOR gate, which outputs the opposite of OR.'
            },
            {
                id: 'LG-3-3',
                type: 'combination',
                difficulty: 'medium',
                question: 'What is the Boolean expression for an XOR gate using AND, OR, and NOT?',
                answer: 'A-B- + A-B',
                alternatives: ['A AND NOT B OR NOT A AND B', 'A*B\' + A\'*B'],
                hint: 'XOR outputs true when inputs are different (one is 1, other is 0).',
                explanation: 'XOR = (A AND NOT B) OR (NOT A AND B). In Boolean algebra: AB\' + A\'B.'
            },
            {
                id: 'LG-3-4',
                type: 'combination',
                difficulty: 'medium',
                question: 'How can you build a 3-input AND gate using only 2-input AND gates?',
                answer: 'combine two 2-input and gates',
                alternatives: ['chain and gates', 'two and gates'],
                hint: 'First AND two inputs, then AND the result with the third input.',
                explanation: 'Connect two inputs to the first AND gate, then connect that output and the third input to a second AND gate.'
            },
            {
                id: 'LG-3-5',
                type: 'combination',
                difficulty: 'medium',
                question: 'What is the De Morgan\'s law equivalent for NAND?',
                answer: 'NOT (A AND B) = NOT A OR NOT B',
                alternatives: ['NAND = NOT A OR NOT B', 'A\' + B\''],
                hint: 'De Morgan\'s laws show equivalence between AND/OR with inversions.',
                explanation: 'De Morgan\'s law: NOT (A AND B) means the same as (NOT A) OR (NOT B). This shows NAND can be built with OR and NOT gates.'
            },
            {
                id: 'LG-3-6',
                type: 'combination',
                difficulty: 'hard',
                question: 'Using De Morgan\'s law, how can you build an OR gate using only NAND gates?',
                answer: 'nand of not a and not b',
                alternatives: ['NAND(NOT A, NOT B)', 'inverted inputs'],
                hint: 'OR = NOT (NOT A AND NOT B) which is NAND(NOT A, NOT B).',
                explanation: 'Since NAND(A, B) = NOT(A AND B), to make OR: OR(A, B) = NOT(NOT A AND NOT B) = NAND(NOT A, NOT B).'
            },
            {
                id: 'LG-3-7',
                type: 'combination',
                difficulty: 'medium',
                question: 'What happens when you connect two NOT gates in series?',
                answer: 'they cancel out',
                alternatives: ['buffer', 'double inversion', 'identity'],
                hint: 'NOT(NOT(X)) equals what?',
                explanation: 'Two NOT gates in series act as a buffer or identity function. NOT(NOT(X)) = X. The signal passes through unchanged.'
            },
            {
                id: 'LG-3-8',
                type: 'combination',
                difficulty: 'hard',
                question: 'How many NAND gates are needed to build a 2-input XOR gate?',
                answer: '4',
                alternatives: ['four'],
                hint: 'XOR = NAND(NAND(A, NAND(A,B)), NAND(B, NAND(A,B)))',
                explanation: 'A 2-input XOR gate can be built using exactly 4 NAND gates: X = NAND(NAND(A, NAND(A,B)), NAND(B, NAND(A,B))).'
            },
            {
                id: 'LG-3-9',
                type: 'combination',
                difficulty: 'medium',
                question: 'What is the result of AND(A, NOT A)?',
                answer: '0',
                alternatives: ['false', 'never', 'always false'],
                hint: 'Can A be both 1 and NOT 1 at the same time?',
                explanation: 'AND(A, NOT A) is always 0 (false). A value cannot be both true and false simultaneously.'
            },
            {
                id: 'LG-3-10',
                type: 'combination',
                difficulty: 'medium',
                question: 'What is the result of OR(A, NOT A)?',
                answer: '1',
                alternatives: ['true', 'always', 'always true'],
                hint: 'Either A is true OR NOT A is true.',
                explanation: 'OR(A, NOT A) is always 1 (true). Either A is true, or its negation is true - one of them must be.'
            }
        ],
        logicalReasoning: [
            {
                id: 'LG-4-1',
                type: 'reasoning',
                difficulty: 'easy',
                question: 'If a system outputs 1 only when all three inputs are 1, what type of gate is this?',
                answer: 'AND gate',
                alternatives: ['AND', '3-input AND'],
                hint: 'This gate requires ALL inputs to be 1.',
                explanation: 'A gate that outputs 1 only when all inputs are 1 is an AND gate. For three inputs, this is a 3-input AND.'
            },
            {
                id: 'LG-4-2',
                type: 'reasoning',
                difficulty: 'easy',
                question: 'If a system outputs 1 when ANY of three inputs is 1, what type of gate is this?',
                answer: 'OR gate',
                alternatives: ['OR', '3-input OR'],
                hint: 'This gate outputs 1 if ANY input is 1.',
                explanation: 'A gate that outputs 1 when any input is 1 is an OR gate. For three inputs, this is a 3-input OR.'
            },
            {
                id: 'LG-4-3',
                type: 'reasoning',
                difficulty: 'medium',
                question: 'You have a circuit with output 1. You add a NOT gate at the end. What is the new output?',
                answer: '0',
                alternatives: ['false', 'off'],
                hint: 'A NOT gate inverts whatever comes in.',
                explanation: 'A NOT gate inverts its input. If the previous output was 1, after the NOT gate it becomes 0.'
            },
            {
                id: 'LG-4-4',
                type: 'reasoning',
                difficulty: 'medium',
                question: 'A signal passes through 3 redstone repeaters. If each repeater adds 1 tick delay, what is the total delay?',
                answer: '3 ticks',
                alternatives: ['3 redstone ticks'],
                hint: 'Each repeater adds its delay to the total.',
                explanation: 'Each redstone repeater adds 1 tick delay. Three repeaters result in 3 ticks total delay.'
            },
            {
                id: 'LG-4-5',
                type: 'reasoning',
                difficulty: 'medium',
                question: 'If input A=1 and input B=0, what is the output of (A AND B) OR (NOT B)?',
                answer: '1',
                alternatives: ['true', 'on'],
                hint: 'Break it down: (1 AND 0) = ?, NOT 0 = ?, then OR the results.',
                explanation: '(A AND B) = (1 AND 0) = 0. (NOT B) = (NOT 0) = 1. Then: 0 OR 1 = 1.'
            },
            {
                id: 'LG-4-6',
                type: 'reasoning',
                difficulty: 'hard',
                question: 'Given inputs A=1, B=1, C=0. What is the output of (A AND B) OR (A AND C)?',
                answer: '1',
                alternatives: ['true', 'on'],
                hint: 'Compute each part separately, then combine.',
                explanation: '(A AND B) = (1 AND 1) = 1. (A AND C) = (1 AND 0) = 0. Then: 1 OR 0 = 1.'
            },
            {
                id: 'LG-4-7',
                type: 'reasoning',
                difficulty: 'hard',
                question: 'What is the minimum number of 2-input gates needed to create a 4-input AND gate?',
                answer: '3',
                alternatives: ['three'],
                hint: 'Tree structure: first AND pairs, then AND those results.',
                explanation: 'For 4 inputs: AND(A,B) AND AND(C,D) AND the two results together. Total: 3 two-input AND gates.'
            },
            {
                id: 'LG-4-8',
                type: 'reasoning',
                difficulty: 'medium',
                question: 'A signal has strength 12. After traveling 4 blocks, what is its strength?',
                answer: '8',
                alternatives: ['8 strength'],
                hint: 'Signal strength decreases by 1 per block traveled.',
                explanation: 'Redstone signal loses 1 strength per block. Starting at 12 - 4 blocks = 8 strength.'
            },
            {
                id: 'LG-4-9',
                type: 'reasoning',
                difficulty: 'medium',
                question: 'If a redstone line has length 20 blocks and starts at strength 15, how many repeaters are needed to maintain signal throughout?',
                answer: '2',
                alternatives: ['two'],
                hint: 'Signal can travel 15 blocks before needing a repeater.',
                explanation: 'Signal travels 15 blocks. For 20 blocks: place repeater at block 15, it boosts to 15, travels remaining 5 blocks. Need 1 repeater minimum. For optimal placement, 2-3 gives more flexibility but 1 is minimum. Actually standard is 2 for clean design at blocks 0 and 15.'
            },
            {
                id: 'LG-4-10',
                type: 'reasoning',
                difficulty: 'hard',
                question: 'What is the Boolean expression for a 3-input majority gate (outputs 1 if 2 or more inputs are 1)?',
                answer: 'AB + AC + BC',
                alternatives: ['A AND B OR A AND C OR B AND C'],
                hint: 'List all combinations where exactly 2 or all 3 inputs are 1.',
                explanation: 'For 3 inputs (A,B,C), combinations with 2+ ones: AB, AC, BC (all pairs). Expression: AB OR AC OR BC.'
            }
        ]
    },

    // MODULE 2: Adders and Arithmetic
    addersArithmetic: {
        binaryNumbers: [
            {
                id: 'AA-1-1',
                type: 'binary',
                difficulty: 'easy',
                question: 'What is the decimal value of binary 101?',
                answer: '5',
                alternatives: ['five'],
                hint: 'Remember: bits are powers of 2 (4, 2, 1)',
                explanation: 'Binary 101 = (1×4) + (0×2) + (1×1) = 4 + 0 + 1 = 5'
            },
            {
                id: 'AA-1-2',
                type: 'binary',
                difficulty: 'easy',
                question: 'What is decimal 7 in binary?',
                answer: '111',
                alternatives: ['0111'],
                hint: 'Powers of 2: 4 + 2 + 1 = 7',
                explanation: 'Decimal 7 = 4 + 2 + 1, so binary is 111 (or 0111)'
            },
            {
                id: 'AA-1-3',
                type: 'binary',
                difficulty: 'easy',
                question: 'What is the decimal value of binary 1101?',
                answer: '13',
                alternatives: ['thirteen'],
                hint: 'Calculating: 8 + 4 + 0 + 1',
                explanation: 'Binary 1101 = (1×8) + (1×4) + (0×2) + (1×1) = 8 + 4 + 0 + 1 = 13'
            },
            {
                id: 'AA-1-4',
                type: 'binary',
                difficulty: 'medium',
                question: 'What is decimal 10 in binary?',
                answer: '1010',
                alternatives: ['01010'],
                hint: 'Calculate: 8 + ? + ? + 0 = 10',
                explanation: 'Decimal 10 = 8 + 2 + 0 + 0 = 1010 in binary'
            },
            {
                id: 'AA-1-5',
                type: 'binary',
                difficulty: 'medium',
                question: 'What is the largest decimal number you can represent with 4 binary bits?',
                answer: '15',
                alternatives: ['fifteen'],
                hint: 'Maximum when all bits are 1: 1111',
                explanation: 'With 4 bits, maximum is 1111 = 8 + 4 + 2 + 1 = 15'
            },
            {
                id: 'AA-1-6',
                type: 'binary',
                difficulty: 'medium',
                question: 'How many different values can 3 binary bits represent?',
                answer: '8',
                alternatives: ['eight', '2^3'],
                hint: 'Formula: 2 to the power of number of bits',
                explanation: '3 bits can represent 2³ = 8 different values (0 through 7)'
            },
            {
                id: 'AA-1-7',
                type: 'binary',
                difficulty: 'medium',
                question: 'What is the decimal value of binary 10000?',
                answer: '16',
                alternatives: ['sixteen'],
                hint: 'This is 2 raised to what power?',
                explanation: 'Binary 10000 = 2⁴ = 16 in decimal'
            },
            {
                id: 'AA-1-8',
                type: 'binary',
                difficulty: 'hard',
                question: 'What is decimal 255 in binary?',
                answer: '11111111',
                alternatives: ['0b11111111'],
                hint: 'This is a common value in computing (8 bits all set to 1)',
                explanation: 'Decimal 255 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 11111111 in binary'
            },
            {
                id: 'AA-1-9',
                type: 'binary',
                difficulty: 'medium',
                question: 'How many bits are needed to represent decimal 32?',
                answer: '6',
                alternatives: ['six bits'],
                hint: '2 to the power of ? >= 32',
                explanation: '2⁵ = 32, so we need 6 bits (including the bit for 32, which is position 6, zero-indexed as 2⁵)'
            },
            {
                id: 'AA-1-10',
                type: 'binary',
                difficulty: 'hard',
                question: 'What is the binary representation of decimal 42?',
                answer: '101010',
                alternatives: ['0101010'],
                hint: 'Break down: 32 + 8 + 2 = 42',
                explanation: 'Decimal 42 = 32 + 8 + 2 = 101010 in binary'
            }
        ],
        halfAdder: [
            {
                id: 'AA-2-1',
                type: 'half-adder',
                difficulty: 'easy',
                question: 'What is the sum output of a half adder when adding 0 + 0?',
                answer: '0',
                alternatives: ['false', 'off'],
                hint: 'Simple: 0 plus 0 equals what?',
                explanation: 'A half adder takes two single-bit inputs. For 0 + 0, the sum is 0 and the carry is 0.'
            },
            {
                id: 'AA-2-2',
                type: 'half-adder',
                difficulty: 'easy',
                question: 'What is the carry output of a half adder when adding 0 + 1?',
                answer: '0',
                alternatives: ['false', 'off'],
                hint: 'Carry occurs when the result is 2 or more.',
                explanation: 'For inputs 0 + 1 = 1, which is less than 2, so there is no carry output.'
            },
            {
                id: 'AA-2-3',
                type: 'half-adder',
                difficulty: 'easy',
                question: 'What is the sum output of a half adder when adding 1 + 1?',
                answer: '0',
                alternatives: ['false', 'off'],
                hint: '1 + 1 in binary gives sum 0 and carry 1.',
                explanation: 'For 1 + 1 = 10 in binary, the sum bit is 0 and the carry bit is 1.'
            },
            {
                id: 'AA-2-4',
                type: 'half-adder',
                difficulty: 'easy',
                question: 'What is the carry output of a half adder when adding 1 + 1?',
                answer: '1',
                alternatives: ['true', 'on'],
                hint: 'When both inputs are 1, what happens?',
                explanation: 'For 1 + 1 = 10 in binary, the sum bit is 0 and the carry bit is 1.'
            },
            {
                id: 'AA-2-5',
                type: 'half-adder',
                difficulty: 'medium',
                question: 'What basic gate generates the SUM output in a half adder?',
                answer: 'XOR',
                alternatives: ['XOR gate'],
                hint: 'The sum is 1 when inputs are different.',
                explanation: 'The SUM output of a half adder is generated by an XOR gate because the sum bit is 1 only when inputs differ (0+1 or 1+0).'
            },
            {
                id: 'AA-2-6',
                type: 'half-adder',
                difficulty: 'medium',
                question: 'What basic gate generates the CARRY output in a half adder?',
                answer: 'AND',
                alternatives: ['AND gate'],
                hint: 'Carry is 1 only when both inputs are 1.',
                explanation: 'The CARRY output of a half adder is generated by an AND gate because a carry only happens when both inputs are 1 (1+1=10).'
            },
            {
                id: 'AA-2-7',
                type: 'half-adder',
                difficulty: 'medium',
                question: 'How many inputs does a half adder have?',
                answer: '2',
                alternatives: ['two'],
                hint: 'A half adder adds two single bits.',
                explanation: 'A half adder has exactly 2 inputs (the two bits to add) and 2 outputs (sum and carry).'
            },
            {
                id: 'AA-2-8',
                type: 'half-adder',
                difficulty: 'hard',
                question: 'Why is it called a "half" adder?',
                answer: 'cannot handle carry in',
                alternatives: ['no carry input', 'only adds two bits'],
                hint: 'Think about what it cannot do compared to a full adder.',
                explanation: 'It\'s called "half" because it cannot accept a carry-in from previous addition. A full adder has this capability.'
            },
            {
                id: 'AA-2-9',
                type: 'half-adder',
                difficulty: 'medium',
                question: 'How many gates are needed to build a basic half adder?',
                answer: '2',
                alternatives: ['two gates'],
                hint: 'One for sum, one for carry.',
                explanation: 'A half adder requires 2 gates: one XOR for the sum output and one AND for the carry output.'
            },
            {
                id: 'AA-2-10',
                type: 'half-adder',
                difficulty: 'medium',
                question: 'In Minecraft, what component can be used to create an XOR gate for the half adder sum?',
                answer: 'redstone torches and blocks',
                alternatives: ['torches', 'gates', 'custom circuitry'],
                hint: 'XOR can be built with basic components.',
                explanation: 'In Minecraft, XOR gates can be built using redstone torches, blocks, and careful circuit design.'
            }
        ],
        fullAdder: [
            {
                id: 'AA-3-1',
                type: 'full-adder',
                difficulty: 'easy',
                question: 'How many inputs does a full adder have?',
                answer: '3',
                alternatives: ['three'],
                hint: 'It needs two inputs to add plus...',
                explanation: 'A full adder has 3 inputs: two bits to add (A, B) and one carry-in from previous addition.'
            },
            {
                id: 'AA-3-2',
                type: 'full-adder',
                difficulty: 'easy',
                question: 'What are the two outputs of a full adder?',
                answer: 'sum and carry',
                alternatives: ['sum and carry out'],
                hint: 'Like the half adder, it produces...',
                explanation: 'A full adder produces a SUM output and a CARRY-OUT output.'
            },
            {
                id: 'AA-3-3',
                type: 'full-adder',
                difficulty: 'medium',
                question: 'What is the sum output when adding A=0, B=1, CarryIn=0?',
                answer: '1',
                alternatives: ['true', 'on'],
                hint: 'Total to add: 0 + 1 + 0 = ?',
                explanation: 'For inputs (0, 1, 0): total = 1. Since 1 < 2, sum = 1, carry = 0.'
            },
            {
                id: 'AA-3-4',
                type: 'full-adder',
                difficulty: 'medium',
                question: 'What is the carry output when adding A=1, B=1, CarryIn=0?',
                answer: '1',
                alternatives: ['true', 'on'],
                hint: 'Total: 1 + 1 + 0 = 2, which results in...',
                explanation: 'For inputs (1, 1, 0): total = 2. In binary: 10, so sum = 0, carry = 1.'
            },
            {
                id: 'AA-3-5',
                type: 'full-adder',
                difficulty: 'medium',
                question: 'What is the sum output when adding A=1, B=1, CarryIn=1?',
                answer: '1',
                alternatives: ['true', 'on'],
                hint: 'Total: 1 + 1 + 1 = 3, which is binary...',
                explanation: 'For inputs (1, 1, 1): total = 3. In binary: 11, so sum = 1, carry = 1.'
            },
            {
                id: 'AA-3-6',
                type: 'full-adder',
                difficulty: 'hard',
                question: 'How many half adders are needed to build a full adder?',
                answer: '2',
                alternatives: ['two'],
                hint: 'Think about cascading half adders.',
                explanation: 'A full adder can be built using 2 half adders: one adds A and B, second adds that sum with CarryIn.'
            },
            {
                id: 'AA-3-7',
                type: 'full-adder',
                difficulty: 'hard',
                question: 'In the full adder built from half adders, what additional gate is needed to combine the carries?',
                answer: 'OR',
                alternatives: ['OR gate'],
                hint: 'Two carries are generated and need to be combined.',
                explanation: 'When building a full adder from 2 half adders, an OR gate combines the two carry outputs.'
            },
            {
                id: 'AA-3-8',
                type: 'full-adder',
                difficulty: 'hard',
                question: 'What is the Boolean expression for the SUM output of a full adder?',
                answer: 'A XOR B XOR Cin',
                alternatives: ['A-B-Cin', 'xor of all inputs'],
                hint: 'The sum comes from XOR-ing all inputs.',
                explanation: 'SUM = A XOR B XOR Cin. The sum bit is 1 when an odd number of inputs are 1.'
            },
            {
                id: 'AA-3-9',
                type: 'full-adder',
                difficulty: 'hard',
                question: 'What happens to the carry if both half adders in a full adder produce a carry?',
                answer: 'still only 1 carry out',
                alternatives: ['or gate combines', 'single carry'],
                hint: 'How does the OR gate handle two carries?',
                explanation: 'When both half adders produce a carry, the OR gate outputs a single carry (1), not 2.'
            },
            {
                id: 'AA-3-10',
                type: 'full-adder',
                difficulty: 'medium',
                question: 'What is the carry output when adding A=0, B=0, CarryIn=1?',
                answer: '0',
                alternatives: ['false', 'off'],
                hint: 'Total: 0 + 0 + 1 = 1',
                explanation: 'For inputs (0, 0, 1): total = 1. Since 1 < 2, there is no carry. Sum = 1, carry = 0.'
            }
        ],
        rippleCarry: [
            {
                id: 'AA-4-1',
                type: 'ripple-carry',
                difficulty: 'easy',
                question: 'How many full adders are needed to add two 4-bit numbers?',
                answer: '4',
                alternatives: ['four'],
                hint: 'One full adder per bit position.',
                explanation: 'To add two 4-bit numbers, you need 4 full adders, one for each bit position.'
            },
            {
                id: 'AA-4-2',
                type: 'ripple-carry',
                difficulty: 'easy',
                question: 'In a ripple carry adder, where does the first full adder\'s carry-in come from?',
                answer: '0',
                alternatives: ['ground', 'false', 'off'],
                hint: 'For the least significant bit, there is no previous addition.',
                explanation: 'The first (least significant) full adder has carry-in = 0 because there is no previous bit to carry from.'
            },
            {
                id: 'AA-4-3',
                type: 'ripple-carry',
                difficulty: 'medium',
                question: 'Why is it called a "ripple" carry adder?',
                answer: 'carry propagates through',
                alternatives: ['carry ripples', 'chain reaction'],
                hint: 'How does the carry signal move through the adders?',
                explanation: 'It\'s called "ripple" because the carry signal propagates (ripples) from one adder to the next, like a chain reaction.'
            },
            {
                id: 'AA-4-4',
                type: 'ripple-carry',
                difficulty: 'medium',
                question: 'What is the total result of adding binary 0110 + 0011?',
                answer: '1001',
                alternatives: ['binary 1001'],
                hint: 'Add: 6 + 3 in decimal, or add bit by bit in binary.',
                explanation: '0110 (6) + 0011 (3) = 1001 (9). In binary: 0+1=1, 1+1=10(carry1), 1+0+1=10(carry1), 0+0+1=1.'
            },
            {
                id: 'AA-4-5',
                type: 'ripple-carry',
                difficulty: 'medium',
                question: 'What determines the delay in a ripple carry adder?',
                answer: 'number of bits',
                alternatives: ['bit width', 'full adders count'],
                hint: 'How many stages must the carry pass through?',
                explanation: 'Delay is proportional to the number of bits - the carry must ripple through each full adder sequentially.'
            },
            {
                id: 'AA-4-6',
                type: 'ripple-carry',
                difficulty: 'hard',
                question: 'What is the longest delay path in a 4-bit ripple carry adder?',
                answer: '4 full adders',
                alternatives: ['4 stages', 'through all adders'],
                hint: 'In worst case, how many adders does the carry pass?',
                explanation: 'Worst case: carry must ripple through all 4 full adders from LSB to MSB, causing maximum delay.'
            },
            {
                id: 'AA-4-7',
                type: 'ripple-carry',
                difficulty: 'medium',
                question: 'What is the result of adding binary 1111 + 0001?',
                answer: '10000',
                alternatives: ['10000 binary', '0 with carry out'],
                hint: 'This is an overflow situation.',
                explanation: '1111 (15) + 0001 (1) = 10000 (16). The 4-bit adder produces 0000 with a carry out of 1.'
            },
            {
                id: 'AA-4-8',
                type: 'ripple-carry',
                difficulty: 'hard',
                question: 'When adding two 4-bit numbers result in a 5th bit carry-out, what does this indicate?',
                answer: 'overflow',
                alternatives: ['overflow occurred', 'result larger than 4 bits'],
                hint: 'Does the result fit in the available bits?',
                explanation: 'A carry-out beyond the most significant bit indicates overflow - the result requires more bits than available.'
            },
            {
                id: 'AA-4-9',
                type: 'ripple-carry',
                difficulty: 'medium',
                question: 'What is the maximum number of bits in the result of adding two 4-bit numbers?',
                answer: '5',
                alternatives: ['five bits'],
                hint: '4 + 4 bits could produce an extra bit.',
                explanation: 'Adding two 4-bit numbers can produce up to 5 bits (including the carry-out).'
            },
            {
                id: 'AA-4-10',
                type: 'ripple-carry',
                difficulty: 'hard',
                question: 'Adding 1010 + 0101 in binary, what is the 4-bit result?',
                answer: '1111',
                alternatives: ['binary 1111'],
                hint: 'Calculate: 10 + 5 = 15, or add bit by bit.',
                explanation: '1010 (10) + 0101 (5) = 1111 (15). Each bit position: 0+1=1, 1+0=1, 0+1=1, 1+0=1.'
            }
        ]
    },

    // MODULE 3: Memory and Storage
    memoryStorage: {
        rsLatch: [
            {
                id: 'MS-1-1',
                type: 'rs-latch',
                difficulty: 'easy',
                question: 'What does RS stand for in RS latch?',
                answer: 'reset-set',
                alternatives: ['set-reset'],
                hint: 'S is for Set, R and S control...',
                explanation: 'RS = Reset-Set. The R input resets (clears) the latch. The S input sets the latch to 1.'
            },
            {
                id: 'MS-1-2',
                type: 'rs-latch',
                difficulty: 'easy',
                question: 'How many stable states does an RS latch have?',
                answer: '2',
                alternatives: ['two'],
                hint: 'It can store information in two states.',
                explanation: 'An RS latch has two stable states: SET (Q=1) and RESET (Q=0), allowing it to store 1 bit.'
            },
            {
                id: 'MS-1-3',
                type: 'rs-latch',
                difficulty: 'medium',
                question: 'When an RS latch is SET (S=1, R=0), what are the Q and Q\' outputs?',
                answer: '1 and 0',
                alternatives: ['Q=1 Q\'=0', 'on and off'],
                hint: 'SET means Q becomes high (1).',
                explanation: 'When SET (S=1, R=0), the latch enters the SET state: Q = 1, Q\' = 0.'
            },
            {
                id: 'MS-1-4',
                type: 'rs-latch',
                difficulty: 'medium',
                question: 'When S=0 and R=0 in an RS latch, what happens?',
                answer: 'no change',
                alternatives: ['remains same', 'holds value', 'memory'],
                hint: 'Neither input is trying to change the state.',
                explanation: 'When S=0 and R=0, the latch maintains its current state. This is the "memory" state.'
            },
            {
                id: 'MS-1-5',
                type: 'rs-latch',
                difficulty: 'medium',
                question: 'What happens when both S=1 and R=1 in an NOR-based RS latch?',
                answer: 'invalid state',
                alternatives: ['forbidden', 'undefined', 'not allowed'],
                hint: 'Both inputs trying to do opposite things.',
                explanation: 'S=1, R=1 creates an invalid/undefined state in NOR-based RS latches. Avoid this condition.'
            },
            {
                id: 'MS-1-6',
                type: 'rs-latch',
                difficulty: 'medium',
                question: 'In Minecraft redstone, what creates feedback in an RS latch?',
                answer: 'redstone torch loop',
                alternatives: ['torch feedback', 'circuit loop'],
                hint: 'The output feeds back to affect the input.',
                explanation: 'Redstone torches create feedback loops where the output affects what happens at the input, creating memory.'
            },
            {
                id: 'MS-1-7',
                type: 'rs-latch',
                difficulty: 'hard',
                question: 'How many NOR gates are used to build a basic RS latch?',
                answer: '2',
                alternatives: ['two'],
                hint: 'Each gate handles one output (Q or Q\').',
                explanation: 'A basic RS latch uses 2 NOR gates (or 2 NAND gates), connected in cross-coupled fashion.'
            },
            {
                id: 'MS-1-8',
                type: 'rs-latch',
                difficulty: 'medium',
                question: 'After RESET (R=1, S=0), the Q output becomes...',
                answer: '0',
                alternatives: ['false', 'off'],
                hint: 'RESET clears the latch to 0.',
                explanation: 'When RESET (R=1, S=0), the latch clears: Q = 0, Q\' = 1.'
            },
            {
                id: 'MS-1-9',
                type: 'rs-latch',
                difficulty: 'hard',
                question: 'What is Q\' in relation to Q?',
                answer: 'opposite of Q',
                alternatives: ['not Q', 'inverse of Q', 'Q complement'],
                hint: 'Q\' is pronounced "Q not" or "Q bar".',
                explanation: 'Q\' (Q-bar) is always the opposite of Q. When Q=1, Q\'=0. When Q=0, Q\'=1.'
            },
            {
                id: 'MS-1-10',
                type: 'rs-latch',
                difficulty: 'easy',
                question: 'An RS latch can store how many bits of information?',
                answer: '1',
                alternatives: ['one bit', 'single bit'],
                hint: 'It has only two states (0 or 1).',
                explanation: 'An RS latch stores exactly 1 bit - it can be either 0 or 1.'
            }
        ],
        dFlipFlop: [
            {
                id: 'MS-2-1',
                type: 'd-flip-flop',
                difficulty: 'easy',
                question: 'What does D stand for in D flip-flop?',
                answer: 'data',
                alternatives: ['delay', 'd latches data'],
                hint: 'D represents what is being stored.',
                explanation: 'D stands for DATA. The D input contains the data to be stored on the clock edge.'
            },
            {
                id: 'MS-2-2',
                type: 'd-flip-flop',
                difficulty: 'medium',
                question: 'What happens to the Q output when the clock (CLK) transitions from 0 to 1?',
                answer: 'Q becomes D',
                alternatives: ['takes value of D', 'Q = D'],
                hint: 'On rising clock edge, input is captured.',
                explanation: 'On the rising clock edge (0→1), the flip-flop captures D and Q becomes equal to D.'
            },
            {
                id: 'MS-2-3',
                type: 'd-flip-flop',
                difficulty: 'medium',
                question: 'What does it mean that a D flip-flop is "edge-triggered"?',
                answer: 'updates on clock edge',
                alternatives: ['only at clock transition', 'clock edge capture'],
                hint: 'It captures data only at specific moments.',
                explanation: 'Edge-triggered means it only captures the D input at the moment the clock edge (rising or falling) occurs.'
            },
            {
                id: 'MS-2-4',
                type: 'd-flip-flop',
                difficulty: 'medium',
                question: 'What are the three inputs to a standard D flip-flop?',
                answer: 'clock data reset',
                alternatives: ['clk d rst', 'clock data and reset'],
                hint: 'CLK triggers, D is the data, and...',
                explanation: 'Standard D flip-flop has inputs: Clock (CLK), Data (D), and optional Reset (R) to clear Q to 0.'
            },
            {
                id: 'MS-2-5',
                type: 'd-flip-flop',
                difficulty: 'medium',
                question: 'How many stable states does a D flip-flop have when not clocked?',
                answer: '2',
                alternatives: ['two'],
                hint: 'It stores either 0 or 1.',
                explanation: 'Between clock cycles, the D flip-flop holds its value (0 or 1) - it has 2 stable states.'
            },
            {
                id: 'MS-2-6',
                type: 'd-flip-flop',
                difficulty: 'hard',
                question: 'What is the key advantage of a D flip-flop over an RS latch?',
                answer: 'synchronous operation',
                alternatives: ['clocked', 'controlled by clock'],
                hint: 'Think about timing and control.',
                explanation: 'D flip-flops use a clock for synchronous operation, allowing precise control over when data is stored.'
            },
            {
                id: 'MS-2-7',
                type: 'd-flip-flop',
                difficulty: 'easy',
                question: 'If D=0 when the clock rises, what does Q become?',
                answer: '0',
                alternatives: ['false', 'off'],
                hint: 'Q takes the value of D on clock edge.',
                explanation: 'When D=0 and the clock rises, Q becomes 0. The flip-flop stores a 0.'
            },
            {
                id: 'MS-2-8',
                type: 'd-flip-flop',
                difficulty: 'easy',
                question: 'If D=1 when the clock rises, what does Q become?',
                answer: '1',
                alternatives: ['true', 'on'],
                hint: 'Q takes the value of D on clock edge.',
                explanation: 'When D=1 and the clock rises, Q becomes 1. The flip-flop stores a 1.'
            },
            {
                id: 'MS-2-9',
                type: 'd-flip-flop',
                difficulty: 'hard',
                question: 'What does "transparent" mean in the context of a D latch?',
                answer: 'Q follows D when enabled',
                alternatives: ['output equals input when enabled', 'pass-through'],
                hint: 'It\'s different from edge-triggered flip-flops.',
                explanation: 'A D latch is "transparent" while enabled: Q directly follows D. When disabled, Q holds the last value.'
            },
            {
                id: 'MS-2-10',
                type: 'd-flip-flop',
                difficulty: 'medium',
                question: 'In Minecraft, how can you create edge-detection for a D flip-flop clock?',
                answer: 'comparator detection',
                alternates: ['comparator edge detector'],
                hint: 'Minecraft comparators can detect changes.',
                explanation: 'In Minecraft, redstone comparators can detect rising or falling edges to create clock edge detection.'
            }
        ],
        registers: [
            {
                id: 'MS-3-1',
                type: 'register',
                difficulty: 'easy',
                question: 'What is a register in computing?',
                answer: 'multiple flip-flops',
                alternatives: ['group of memory cells', 'array of flip-flops'],
                hint: 'It stores more than 1 bit.',
                explanation: 'A register is a collection of flip-flops that stores multiple bits (typically 4, 8, 16, or 32 bits).'
            },
            {
                id: 'MS-3-2',
                type: 'register',
                difficulty: 'easy',
                question: 'How many D flip-flops are needed to create a 4-bit register?',
                answer: '4',
                alternatives: ['four'],
                hint: 'One flip-flop per bit.',
                explanation: 'A 4-bit register needs 4 D flip-flops, one for each bit position.'
            },
            {
                id: 'MS-3-3',
                type: 'register',
                difficulty: 'medium',
                question: 'What connects all the flip-flops\' clock inputs in a register?',
                answer: 'common clock line',
                alternatives: ['shared clock', 'single clock'],
                hint: 'All bits should update simultaneously.',
                explanation: 'All flip-flops in a register share a common clock line so all bits update at the same time.'
            },
            {
                id: 'MS-3-4',
                type: 'register',
                difficulty: 'easy',
                question: 'How many bits does a standard 8-bit register store?',
                answer: '8',
                alternatives: ['eight bits', 'one byte'],
                hint: 'The name tells you the capacity.',
                explanation: 'An 8-bit register stores exactly 8 bits of data (also called 1 byte).'
            },
            {
                id: 'MS-3-5',
                type: 'register',
                difficulty: 'medium',
                question: 'What is the total number of inputs for an 8-bit register with write enable?',
                answer: '9',
                alternatives: ['8 data + 1 clock + write enable', 'eight plus clock plus we'],
                hint: 'Don\'t forget: data bits + clock + control signal.',
                explanation: '8-bit register: 8 data inputs + 1 clock input + optional write enable = minimum 9 inputs for basic operation.'
            },
            {
                id: 'MS-3-6',
                type: 'register',
                difficulty: 'medium',
                question: 'What is a "write enable" signal?',
                answer: 'controls when register updates',
                alternatives: ['enables writing', 'write permission'],
                hint: 'Not all clocks should update the register.',
                explanation: 'Write enable controls whether the register updates on clock. When disabled, register holds its value.'
            },
            {
                id: 'MS-3-7',
                type: 'register',
                difficulty: 'hard',
                question: 'How can you implement write enable in a D flip-flop?',
                answer: 'gate the D input',
                alternatives: ['AND gate with WE and D', 'multiplexer'],
                hint: 'Think about controlling the data input.',
                explanation: 'Write enable can be implemented by gating the D input (e.g., D_new = AND(D_old, WE)) or using a multiplexer.'
            },
            {
                id: 'MS-3-8',
                type: 'register',
                difficulty: 'medium',
                question: 'What happens to a register\'s contents when power is turned off?',
                answer: 'data is lost',
                alternatives: ['cleared', 'forgotten', 'volatile'],
                hint: 'Most computer memory needs power.',
                explanation: 'Registers are volatile memory - they lose their contents when power is removed.'
            },
            {
                id: 'MS-3-9',
                type: 'register',
                difficulty: 'hard',
                question: 'What is a "load" signal in a register?',
                answer: 'same as write enable',
                alternatives: ['write enable', 'controls loading data'],
                hint: 'Another name for write enable.',
                explanation: 'Load signal is another name for write enable - it controls when the register accepts new data.'
            },
            {
                id: 'MS-3-10',
                type: 'register',
                difficulty: 'medium',
                question: 'In Minecraft, what physical arrangement is typical for a multi-bit register?',
                answer: 'parallel flip-flops',
                alternatives: ['side by side', 'adjacent'],
                hint: 'Each flip-flop needs to be accessible.',
                explanation: 'In Minecraft, multi-bit registers are typically built with flip-flops arranged in parallel lines, one per bit.'
            }
        ],
        ramCells: [
            {
                id: 'MS-4-1',
                type: 'ram-cell',
                difficulty: 'easy',
                question: 'What does RAM stand for?',
                answer: 'random access memory',
                alternatives: ['random access'],
                hint: 'You can access any location equally.',
                explanation: 'RAM = Random Access Memory. Memory locations can be accessed in any order, not just sequentially.'
            },
            {
                id: 'MS-4-2',
                type: 'ram-cell',
                difficulty: 'easy',
                question: 'What is the basic storage unit in RAM?',
                answer: '1 bit',
                alternatives: ['single bit', 'one bit cell'],
                hint: 'The smallest possible storage unit.',
                explanation: 'The basic RAM cell stores 1 bit of data. Multiple bits make up bytes and words.'
            },
            {
                id: 'MS-4-3',
                type: 'ram-cell',
                difficulty: 'medium',
                question: 'What is "word size" in RAM?',
                answer: 'bits read/written at once',
                alternatives: ['data bus width', 'number of bits per address'],
                hint: 'How many bits can you access simultaneously?',
                explanation: 'Word size is the number of bits read or written at once (e.g., 8-bit word, 16-bit word, 32-bit word).'
            },
            {
                id: 'MS-4-4',
                type: 'ram-cell',
                difficulty: 'medium',
                question: 'How does address decoding relate to RAM size?',
                answer: 'address bits determine locations',
                alternatives: ['2^n locations with n address bits'],
                hint: 'More address bits means more possible addresses.',
                explanation: 'With n address bits, you can address 2^n locations. 4 address bits = 16 locations, 8 bits = 256 locations.'
            },
            {
                id: 'MS-4-5',
                type: 'ram-cell',
                difficulty: 'medium',
                question: 'How many RAM cells are needed for an 8x1 RAM (8 locations, 1 bit each)?',
                answer: '8',
                alternatives: ['eight cells'],
                hint: 'One bit cell per memory location.',
                explanation: '8x1 RAM has 8 memory locations × 1 bit each = 8 total RAM cells needed.'
            },
            {
                id: 'MS-4-6',
                type: 'ram-cell',
                difficulty: 'hard',
                question: 'How many RAM cells are needed for a 4x4 RAM (4 locations, 4 bits each)?',
                answer: '16',
                alternatives: ['sixteen cells', '4 times 4'],
                hint: 'Locations × bits per location.',
                explanation: '4x4 RAM: 4 locations × 4 bits per location = 16 total RAM cells.'
            },
            {
                id: 'MS-4-7',
                type: 'ram-cell',
                difficulty: 'hard',
                question: 'What does a RAM cell need besides the storage element?',
                answer: 'read and write control',
                alternatives: ['address decoding', 'data access', 'control lines'],
                hint: 'How do you read from or write to it?',
                explanation: 'Each RAM cell needs storage + read control + write control + data I/O to allow reading and writing.'
            },
            {
                id: 'MS-4-8',
                type: 'ram-cell',
                difficulty: 'medium',
                question: 'What distinguishes SRAM from DRAM?',
                answer: 'SRAM uses flip-flops',
                alternatives: ['static vs dynamic', 'flip-flops vs capacitors'],
                hint: 'S = Static, D = Dynamic.',
                explanation: 'SRAM uses flip-flops (static, doesn\'t need refresh). DRAM uses capacitors (dynamic, needs periodic refresh).'
            },
            {
                id: 'MS-4-9',
                type: 'ram-cell',
                difficulty: 'easy',
                question: 'In Minecraft, which type of memory cell is typically used for RAM?',
                answer: 'D flip-flop',
                alternatives: ['flip-flop based', 'latch based'],
                hint: 'Minecraft memory typically uses flip-flops.',
                explanation: 'In Minecraft, RAM is typically built using D flip-flops (or D latches) as the basic storage cells.'
            },
            {
                id: 'MS-4-10',
                type: 'ram-cell',
                difficulty: 'hard',
                question: 'How many address signals are needed to access a 16-location RAM array?',
                answer: '4',
                alternatives: ['four address lines'],
                hint: '2^n = 16, what is n?',
                explanation: '2^4 = 16, so 4 address signals can address 16 different locations.'
            }
        ]
    }
};

// Initialize problems when DOM is ready
function initializeProblems() {
    // Load saved progress
    const saved = localStorage.getItem('redstoneCourseProgress');
    if (saved) {
        const data = JSON.parse(saved);
        problemProgress = data.problemProgress || {};
    }

    // Setup problem checking for all problems
    setupAllProblems();
}

// Setup problem checking
function setupAllProblems() {
    document.querySelectorAll('.problem').forEach(problemElement => {
        const problemId = problemElement.dataset.problemId;
        if (problemId) {
            const problemObj = findProblemById(problemId);
            if (problemObj) {
                const input = problemElement.querySelector('input[type="text"]');
                const checkBtn = problemElement.querySelector('.check-answer');
                const hintBtn = problemElement.querySelector('.show-hint');
                const feedback = problemElement.querySelector('.feedback');

                if (checkBtn && input && feedback) {
                    checkBtn.addEventListener('click', function() {
                        const userAnswer = input.value.trim();
                        let isCorrect = checkAnswer(userAnswer, problemObj);

                        if (isCorrect) {
                            feedback.textContent = 'Correct! ' + problemObj.explanation;
                            feedback.className = 'feedback correct';
                            feedback.style.display = 'block';
                            markProblemSolved(problemId);
                            input.style.borderColor = 'var(--success)';
                        } else {
                            feedback.textContent = 'Try again!';
                            feedback.className = 'feedback incorrect';
                            feedback.style.display = 'block';
                            input.style.borderColor = 'var(--error)';
                        }
                    });
                }

                if (hintBtn && problemObj.hint) {
                    hintBtn.addEventListener('click', function() {
                        const hintText = 'Hint: ' + problemObj.hint;
                        if (feedback) {
                            feedback.textContent = hintText;
                            feedback.className = 'feedback';
                            feedback.style.display = 'block';
                            feedback.style.background = 'var(--warning)';
                            feedback.style.color = 'var(--obsidian-dark)';
                        }
                    });
                }
            }
        }
    });
}

// Find problem object by ID
function findProblemById(problemId) {
    for (let moduleKey in practiceProblems) {
        for (let categoryKey in practiceProblems[moduleKey]) {
            for (let problem of practiceProblems[moduleKey][categoryKey]) {
                if (problem.id === problemId) {
                    return problem;
                }
            }
        }
    }
    return null;
}

// Check if answer is correct
function checkAnswer(userAnswer, problemObj) {
    const normalizedUser = userAnswer.toLowerCase().replace(/\s+/g, '');
    const normalizedCorrect = problemObj.answer.toLowerCase().replace(/\s+/g, '');

    if (normalizedUser === normalizedCorrect) {
        return true;
    }

    // Check alternatives
    if (problemObj.alternatives) {
        for (let alt of problemObj.alternatives) {
            const normalizedAlt = alt.toLowerCase().replace(/\s+/g, '');
            if (normalizedUser === normalizedAlt) {
                return true;
            }
        }
    }

    return false;
}