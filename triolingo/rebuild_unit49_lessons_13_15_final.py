#!/usr/bin/env python3
"""
Final Rebuild Unit 49 Lessons 13-15 with High-Quality Questions
Matching the detailed quality of Lessons 10-12
"""
import json
import os

print("🚀 Final Rebuild Unit 49 Lessons 13-15 with High-Quality Questions")
print("=" * 70)

# Load current data
script_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(data_path, 'r') as f:
    content = f.read()

import re
json_match = re.search(r'window\.cppCombined\s*=\s*(\{.*?\});?\s*$', content, re.DOTALL)
data = json.loads(json_match.group(1))

# Lesson 13: Backtracking
lesson13 = {
    "id": "cpp-U49-L13",
    "title": "Backtracking",
    "unitTitle": "49. Advanced String Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Backtracking

Systematic search with incremental building and undoing for constraint satisfaction problems.

## Core Concept

Build solutions incrementally, abandoning partial solutions that cannot possibly be completed to a valid solution.

## Key Components

1. **Choose**: Make a decision
2. **Explore**: Recurse deeper
3. **Unchoose**: Backtrack if choice leads to dead end

## Template

```cpp
void backtrack(vector<int>& path, int start) {
    if (isSolution(path)) {
        solutions.push_back(path);
        return;
    }

    for (int i = start; i < n; i++) {
        path.push_back(arr[i]);
        backtrack(path, i + 1);
        path.pop_back();
    }
}
```

## Applications

- N-Queens Problem
- Sudoku Solver
- Permutation Generation
- Subset Generation
- Maze Solving
- Graph Coloring

## Best Practices

1. Prune early with constraints
2. Order choices effectively
3. Use memoization when applicable
4. Handle duplicates carefully
""",
    "questions": [
        {"id": "cpp-49-13-1", "type": "typing", "question": "What is the main purpose of backtracking in algorithm design?", "correctAnswer": ["explore solution space by building and undoing", "systematic search", "constraint satisfaction"], "explanation": "Backtracking builds solutions incrementally and undoes choices that lead to dead ends, efficiently exploring the solution space.", "xp": 5},
        {"id": "cpp-49-13-2", "type": "typing", "question": "When is backtracking most effective compared to other approaches?", "correctAnswer": ["constraint satisfaction problems", "search with pruning", "combinatorial problems"], "explanation": "Backtracking excels at constraint satisfaction where early pruning can eliminate large portions of the search space.", "xp": 5},
        {"id": "cpp-49-13-3", "type": "typing", "question": "What is the time complexity of naive backtracking without pruning?", "correctAnswer": ["exponential O(b^d)", "worst case explores all", "b^d where b=branching, d=depth"], "explanation": "Without pruning, backtracking explores the entire search space with O(b^d) complexity where b is branching factor and d is depth.", "xp": 5},
        {"id": "cpp-49-13-4", "type": "multiple", "question": "Which are key components of backtracking?", "options": ["Choose, Explore, Unchoose", "Prune, Search, Backtrack", "Build, Test, Undo", "All of the above"], "correctAnswer": [3], "explanation": "Backtracking involves choosing a decision, exploring deeper, and undoing choices that lead to dead ends.", "xp": 5},
        {"id": "cpp-49-13-5", "type": "multiple", "question": "Common applications of backtracking?", "options": ["N-Queens", "Sudoku", "Permutation Generation", "All of the above"], "correctAnswer": [3], "explanation": "Backtracking is used in N-Queens, Sudoku, permutation generation, subset generation, maze solving, and graph coloring.", "xp": 5},
        {"id": "cpp-49-13-6", "type": "code", "question": "Implement N-Queens solver using backtracking.", "correctAnswer": ["place queens recursively", "check conflicts", "backtrack on conflict"], "explanation": "Place queens one by one, check for conflicts with previously placed queens, and backtrack if a conflict is found.", "xp": 15},
        {"id": "cpp-49-13-7", "type": "code", "question": "Implement Sudoku solver using backtracking.", "correctAnswer": ["fill empty cells", "check row/col/box constraints", "backtrack on invalid"], "explanation": "Fill empty cells one by one, checking row, column, and box constraints, and backtrack when a placement is invalid.", "xp": 15},
        {"id": "cpp-49-13-8", "type": "code", "question": "Generate all permutations of a set using backtracking.", "correctAnswer": ["swap elements", "recursive permutation", "backtrack to restore"], "explanation": "Generate permutations by swapping elements, recursively generating permutations of remaining elements, and backtracking by swapping back.", "xp": 15},
        {"id": "cpp-49-13-9", "type": "code", "question": "Generate all subsets of a set using backtracking.", "correctAnswer": ["include/exclude elements", "recursive generation", "build all subsets"], "explanation": "Generate all subsets by making include/exclude decisions for each element, building the solution incrementally.", "xp": 15},
        {"id": "cpp-49-13-10", "type": "code", "question": "Solve maze using backtracking.", "correctAnswer": ["try directions", "mark visited", "backtrack on dead end"], "explanation": "Try each direction from current cell, mark cells as visited, and backtrack when hitting a dead end or already visited cell.", "xp": 15},
        {"id": "cpp-49-13-11", "type": "typing", "question": "How does pruning improve backtracking performance?", "correctAnswer": ["eliminates branches early", "reduces search space", "avoids dead ends"], "explanation": "Pruning eliminates branches early when constraints are violated, dramatically reducing the search space.", "xp": 5},
        {"id": "cpp-49-13-12", "type": "typing", "question": "What is the effect of choice ordering in backtracking?", "correctAnswer": ["good ordering finds solutions faster", "affects pruning effectiveness", "constraining choices first"], "explanation": "Ordering choices from most to least constraining can find solutions faster and improve pruning effectiveness.", "xp": 5},
        {"id": "cpp-49-13-13", "type": "typing", "question": "How does backtracking compare to brute force?", "correctAnswer": ["same worst case, better with pruning", "systematic with elimination", "can be much faster"], "explanation": "Backtracking has the same worst-case complexity as brute force but can be much faster with effective pruning.", "xp": 5},
        {"id": "cpp-49-13-14", "type": "code", "question": "Implement backtracking with memoization for repeated subproblems.", "correctAnswer": ["cache partial results", "avoid recomputation", "memoized backtracking"], "explanation": "Store results of partial solutions to avoid recomputing the same subproblems multiple times.", "xp": 15},
        {"id": "cpp-49-13-15", "type": "code", "question": "Implement backtracking with constraint propagation.", "correctAnswer": ["forward checking", "maintain domains", "propagate constraints"], "explanation": "Use forward checking to maintain domains of remaining choices and propagate constraints to prune early.", "xp": 15},
        {"id": "cpp-49-13-16", "type": "code", "question": "Parallel backtracking: explore multiple branches simultaneously.", "correctAnswer": ["multithreading", "parallel search", "divide branches"], "explanation": "Use multiple threads to explore different branches of the search tree in parallel, speeding up the search.", "xp": 15},
        {"id": "cpp-49-13-17", "type": "typing", "question": "Difference between DFS and backtracking?", "correctAnswer": ["backtracking has pruning and constraints", "DFS explores all", "backtracking builds solutions"], "explanation": "Backtracking is like DFS with pruning and constraint checking, while DFS explores the entire search space.", "xp": 5},
        {"id": "cpp-49-13-18", "type": "typing", "question": "How to handle duplicates in backtracking?", "correctAnswer": ["skip duplicate choices", "sort and skip", "track used elements"], "explanation": "Sort choices and skip duplicates, or use tracking to ensure each choice is used exactly once.", "xp": 5},
        {"id": "cpp-49-13-19", "type": "code", "question": "Graph coloring using backtracking with pruning.", "correctAnswer": ["color vertices recursively", "check conflicts", "prune if impossible"], "explanation": "Color vertices one by one, checking for conflicts with already colored vertices, and prune if remaining colors are insufficient.", "xp": 15},
        {"id": "cpp-49-13-20", "type": "code", "question": "Backtracking with iterative deepening for completeness.", "correctAnswer": ["progressive depth", "complete search", "iterative deepening"], "explanation": "Use iterative deepening to progressively explore deeper levels while maintaining memory efficiency.", "xp": 15},
        {"id": "cpp-49-13-21", "type": "code", "question": "Find all solutions using backtracking.", "correctAnswer": ["collect all valid", "continue after finding", "exhaustive search"], "explanation": "Continue searching after finding each solution to collect all valid solutions, not just the first one.", "xp": 15},
        {"id": "cpp-49-13-22", "type": "code", "question": "Generic backtracking framework with pluggable functions.", "correctAnswer": ["template framework", "pluggable choose/explore", "reusable backtracking"], "explanation": "Create a reusable backtracking framework that can be customized for different problems through pluggable functions.", "xp": 15},
        {"id": "cpp-49-13-23", "type": "typing", "question": "When is backtracking preferred over dynamic programming?", "correctAnswer": ["when subproblems are independent", "no overlap", "need all solutions"], "explanation": "Backtracking is preferred when subproblems are independent and there's no overlapping work to cache.", "xp": 5},
        {"id": "cpp-49-13-24", "type": "typing", "question": "How does backtracking handle large search spaces?", "correctAnswer": ["effective pruning is crucial", "constraint propagation", "heuristic ordering"], "explanation": "Large search spaces require effective pruning, constraint propagation, and smart choice ordering to be tractable.", "xp": 5},
        {"id": "cpp-49-13-25", "type": "code", "question": "Visualize backtracking search tree and decisions.", "correctAnswer": ["track choices", "show branches", "visualization"], "explanation": "Record and visualize the search tree to understand the algorithm's behavior and pruning decisions.", "xp": 15}
    ]
}

data['units'][48]['lessons'][12].update(lesson13)
print("✅ Lesson 13: Backtracking - 25 detailed questions")

# Lesson 14: Simulated Annealing
lesson14 = {
    "id": "cpp-U49-L14",
    "title": "Simulated Annealing",
    "unitTitle": "49. Advanced String Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Simulated Annealing

Probabilistic optimization technique inspired by metallurgical annealing.

## Core Concept

Inspired by the annealing process in metallurgy where heated metal slowly cools to reduce defects. Similarly, simulated annealing starts with high "temperature" and gradually cools, allowing the search to escape local optima.

## Key Components

1. **Temperature**: Controls acceptance probability of worse moves
2. **Cooling Schedule**: How temperature decreases over time
3. **Acceptance Probability**: Probability of accepting worse solutions

## Algorithm

```cpp
double simulatedAnnealing(vector<int>& solution) {
    double temperature = 1000.0;
    double coolingRate = 0.999;

    while (temperature > 1.0) {
        vector<int> neighbor = generateNeighbor(solution);
        double delta = cost(neighbor) - cost(solution);

        if (delta < 0 || rand() / double(RAND_MAX) < exp(-delta / temperature)) {
            solution = neighbor;
        }

        temperature *= coolingRate;
    }

    return cost(solution);
}
```

## Applications

- Traveling Salesman Problem
- Graph Partitioning
- Placement Problems
- Scheduling
- VLSI Design

## Best Practices

1. Tune cooling rate for exploration/exploitation balance
2. Set initial temperature high enough
3. Use sufficient iterations at each temperature
4. Multiple runs for better solutions
""",
    "questions": [
        {"id": "cpp-49-14-1", "type": "typing", "question": "What is the main inspiration behind simulated annealing?", "correctAnswer": ["metallurgical annealing process", "metal cooling", "thermal physics"], "explanation": "Simulated annealing is inspired by the annealing process where heated metal slowly cools to reduce defects, allowing atoms to settle into optimal positions.", "xp": 5},
        {"id": "cpp-49-14-2", "type": "typing", "question": "What is the role of temperature in simulated annealing?", "correctAnswer": ["controls acceptance probability of worse moves", "exploration parameter", "cooling affects search"], "explanation": "Temperature controls the probability of accepting worse solutions: higher temperature means more exploration, lower means more exploitation.", "xp": 5},
        {"id": "cpp-49-14-3", "type": "typing", "question": "How does the acceptance probability change as temperature decreases?", "correctAnswer": ["decreases, becomes more selective", "lower probability of worse moves", "more greedy"], "explanation": "As temperature decreases, the probability of accepting worse solutions decreases, making the algorithm more selective and greedy.", "xp": 5},
        {"id": "cpp-49-14-4", "type": "multiple", "question": "Key components of simulated annealing?", "options": ["Temperature", "Cooling Schedule", "Acceptance Probability", "All of the above"], "correctAnswer": [3], "explanation": "Simulated annealing requires temperature, cooling schedule, and acceptance probability function to work effectively.", "xp": 5},
        {"id": "cpp-49-14-5", "type": "multiple", "question": "Common applications of simulated annealing?", "options": ["TSP", "Graph Partitioning", "Scheduling", "All of the above"], "correctAnswer": [3], "explanation": "Simulated annealing is used for TSP, graph partitioning, placement problems, scheduling, and VLSI design.", "xp": 5},
        {"id": "cpp-49-14-6", "type": "code", "question": "Implement basic simulated annealing for TSP.", "correctAnswer": ["temperature cooling", "neighbor generation", "accept probability"], "explanation": "Generate neighboring solutions, accept better ones always, accept worse ones probabilistically based on temperature.", "xp": 15},
        {"id": "cpp-49-14-7", "type": "code", "question": "Implement different cooling schedules (linear, exponential, logarithmic).", "correctAnswer": ["temperature schedule", "cooling strategies", "annealing schedules"], "explanation": "Compare linear (T = T * rate), exponential (T = T * rate^k), and logarithmic (T = T / log(k+1)) cooling.", "xp": 15},
        {"id": "cpp-49-14-8", "type": "code", "question": "Implement acceptance probability calculation.", "correctAnswer": ["exp(-delta/T)", "Boltzmann distribution", "probability function"], "explanation": "Use the Boltzmann distribution: exp(-delta / temperature) to calculate acceptance probability of worse solutions.", "xp": 15},
        {"id": "cpp-49-14-9", "type": "code", "question": "Generate neighboring solutions for optimization problem.", "correctAnswer": ["small perturbations", "local search", "neighbor generation"], "explanation": "Generate solutions close to current one through small perturbations, ensuring connectivity of the search space.", "xp": 15},
        {"id": "cpp-49-14-10", "type": "code", "question": "Compare different cooling strategies effectiveness.", "correctAnswer": ["measure convergence", "solution quality", "speed comparison"], "explanation": "Run simulated annealing with different cooling schedules and compare convergence speed and final solution quality.", "xp": 15},
        {"id": "cpp-49-14-11", "type": "typing", "question": "What happens if initial temperature is too low?", "correctAnswer": ["trapped in local optimum", "premature convergence", "insufficient exploration"], "explanation": "If initial temperature is too low, the algorithm gets trapped in local optima with insufficient exploration of the search space.", "xp": 5},
        {"id": "cpp-49-14-12", "type": "typing", "question": "What happens if cooling is too fast?", "correctAnswer": ["premature convergence to local optimum", "insufficient exploration", "like greedy search"], "explanation": "Too fast cooling reduces exploration, causing premature convergence to a local optimum similar to greedy search.", "xp": 5},
        {"id": "cpp-49-14-13", "type": "typing", "question": "Does simulated annealing guarantee optimal solution?", "correctAnswer": ["no guarantee, probabilistic", "can find near-optimal", "no guarantee"], "explanation": "Simulated annealing does not guarantee an optimal solution; it's a metaheuristic that typically finds good, near-optimal solutions.", "xp": 5},
        {"id": "cpp-49-14-14", "type": "code", "question": "Adaptive simulated annealing with dynamic temperature adjustment.", "correctAnswer": ["adjust temperature based on progress", "adaptive cooling", "dynamic parameters"], "explanation": "Adjust temperature dynamically based on improvement rate, stagnation, or other search metrics to improve performance.", "xp": 15},
        {"id": "cpp-49-14-15", "type": "code", "question": "Parallel simulated annealing with multiple chains.", "correctAnswer": ["multiple independent runs", "parallel search", "diverse exploration"], "explanation": "Run multiple independent annealing processes in parallel, taking the best solution across all chains.", "xp": 15},
        {"id": "cpp-49-14-16", "type": "typing", "question": "How does acceptance probability depend on temperature and cost difference?", "correctAnswer": ["higher T = higher acceptance, larger delta = lower acceptance", "Boltzmann formula", "inverse relationship"], "explanation": "Higher temperature increases acceptance probability; larger cost decrease reduces it following exp(-delta/T).", "xp": 5},
        {"id": "cpp-49-14-17", "type": "typing", "question": "Role of neighbor generation in simulated annealing?", "correctAnswer": ["affects exploration and convergence", "connectivity of search space", "step size matters"], "explanation": "Neighbor generation affects how the algorithm explores the search space and how quickly it converges to good solutions.", "xp": 5},
        {"id": "cpp-49-14-18", "type": "code", "question": "Simulated annealing with reheating for escaping local optima.", "correctAnswer": ["temperature increase", "re-exploration", "escape mechanism"], "explanation": "Periodically increase temperature to re-examine the search space and escape local optima.", "xp": 15},
        {"id": "cpp-49-14-19", "type": "code", "question": "Graph partitioning using simulated annealing.", "correctAnswer": ["partition vertices", "minimize cut", "annealing approach"], "explanation": "Use simulated annealing to partition graph vertices into balanced sets while minimizing edges between partitions.", "xp": 15},
        {"id": "cpp-49-14-20", "type": "code", "question": "Simulated annealing with variable neighborhood search.", "correctAnswer": ["different neighbor sizes", "adaptive search", "VLS annealing"], "explanation": "Use neighborhoods of different sizes, allowing both fine-grained and coarse-grained search.", "xp": 15},
        {"id": "cpp-49-14-21", "type": "code", "question": "Find multiple high-quality solutions with annealing.", "correctAnswer": ["track diverse solutions", "restarts", "solution diversity"], "explanation": "Maintain a population of diverse solutions, using annealing to improve them while maintaining diversity.", "xp": 15},
        {"id": "cpp-49-14-22", "type": "code", "question": "Generic simulated annealing framework.", "correctAnswer": ["template framework", "pluggable functions", "reusable annealing"], "explanation": "Create a reusable simulated annealing framework with pluggable neighbor generation and cost functions.", "xp": 15},
        {"id": "cpp-49-14-23", "type": "typing", "question": "When is simulated annealing preferred over other metaheuristics?", "correctAnswer": ["single solution optimization", "easy neighbor generation", "needs to escape local optima"], "explanation": "Simulated annealing works well for single-solution problems where neighbors are easy to generate and escaping local optima is important.", "xp": 5},
        {"id": "cpp-49-14-24", "type": "typing", "question": "How to determine when to stop simulated annealing?", "correctAnswer": ["temperature threshold", "no improvement for iterations", "time limit"], "explanation": "Stop when temperature drops below threshold, no improvement for many iterations, or time limit is reached.", "xp": 5},
        {"id": "cpp-49-14-25", "type": "code", "question": "Visualize annealing process: temperature, acceptance, solution quality.", "correctAnswer": ["track metrics", "plot progression", "visualization"], "explanation": "Track and visualize temperature, acceptance rates, and solution quality over time to understand algorithm behavior.", "xp": 15}
    ]
}

data['units'][48]['lessons'][13].update(lesson14)
print("✅ Lesson 14: Simulated Annealing - 25 detailed questions")

# Lesson 15: Genetic Algorithms
lesson15 = {
    "id": "cpp-U49-L15",
    "title": "Genetic Algorithms",
    "unitTitle": "49. Advanced String Structures",
    "xp": 85,
    "type": "lesson",
    "difficulty": "advanced",
    "lessonText": """# Genetic Algorithms

Evolutionary optimization inspired by natural selection and biological evolution.

## Core Concept

Evolve a population of candidate solutions over generations using operations inspired by natural selection: selection, crossover, and mutation.

## Key Components

1. **Population**: Set of candidate solutions
2. **Selection**: Choose parents based on fitness
3. **Crossover**: Combine parents to create offspring
4. **Mutation**: Introduce random variation

## Algorithm Cycle

```cpp
void geneticAlgorithm() {
    // Initialize population
    vector<vector<int>> population = initialize();

    for (int gen = 0; gen < maxGenerations; gen++) {
        // Evaluate fitness
        vector<double> fitness = evaluate(population);

        // Selection
        vector<vector<int>> parents = select(population, fitness);

        // Crossover
        vector<vector<int>> offspring = crossover(parents);

        // Mutation
        mutate(offspring);

        // Replacement
        population = replace(population, offspring);
    }
}
```

## Operators

| Operator | Purpose | Common Methods |
|----------|---------|----------------|
| **Selection** | Choose parents | Tournament, Roulette Wheel, Rank |
| **Crossover** | Recombine | One-point, Two-point, Uniform |
| **Mutation** | Vary | Bit flip, Swap, Gaussian |

## Applications

- Traveling Salesman Problem
- Knapsack Problem
- Function Optimization
- Scheduling Problems
- Machine Learning Hyperparameter Tuning

## Best Practices

1. Population size: 50-500 typically
2. Mutation rate: 0.1% - 1%
3. Crossover rate: 70% - 95%
4. Selection pressure: Balance exploration and exploitation
""",
    "questions": [
        {"id": "cpp-49-15-1", "type": "typing", "question": "What is the main inspiration behind genetic algorithms?", "correctAnswer": ["natural selection and biological evolution", "Darwinian evolution", "genetics"], "explanation": "Genetic algorithms are inspired by natural selection, where better-adapted individuals survive and reproduce.", "xp": 5},
        {"id": "cpp-49-15-2", "type": "typing", "question": "What is the role of the population in genetic algorithms?", "correctAnswer": ["set of candidate solutions", "diverse solutions", "evolves over generations"], "explanation": "The population contains multiple candidate solutions that evolve over generations through selection, crossover, and mutation.", "xp": 5},
        {"id": "cpp-49-15-3", "type": "typing", "question": "What is crossover in genetic algorithms?", "correctAnswer": ["combine parents to create offspring", "recombination", "mix genetic material"], "explanation": "Crossover combines genetic material from two parent solutions to create offspring solutions, mixing their characteristics.", "xp": 5},
        {"id": "cpp-49-15-4", "type": "multiple", "question": "Key operators in genetic algorithms?", "options": ["Selection", "Crossover", "Mutation", "All of the above"], "correctAnswer": [3], "explanation": "Genetic algorithms use selection to choose parents, crossover to create offspring, and mutation to introduce variation.", "xp": 5},
        {"id": "cpp-49-15-5", "type": "multiple", "question": "Common selection methods?", "options": ["Tournament", "Roulette Wheel", "Rank Selection", "All of the above"], "correctAnswer": [3], "explanation": "Common selection methods include tournament selection, roulette wheel (fitness-proportional), and rank-based selection.", "xp": 5},
        {"id": "cpp-49-15-6", "type": "code", "question": "Implement basic genetic algorithm for optimization.", "correctAnswer": ["initialize population", "evaluate fitness", "selection crossover mutation"], "explanation": "Initialize population, evaluate fitness, select parents, perform crossover and mutation, and replace population.", "xp": 15},
        {"id": "cpp-49-15-7", "type": "code", "question": "Implement tournament selection.", "correctAnswer": ["select best from tournament", "random individuals", "selection pressure"], "explanation": "Randomly select k individuals and choose the best one as a parent, creating selection pressure while maintaining diversity.", "xp": 15},
        {"id": "cpp-49-15-8", "type": "code", "question": "Implement one-point crossover.", "correctAnswer": ["split at point", "swap tails", "create offspring"], "explanation": "Choose a random crossover point, split parents at that point, and swap tails to create two offspring.", "xp": 15},
        {"id": "cpp-49-15-9", "type": "code", "question": "Implement bit flip mutation.", "correctAnswer": ["flip random bits", "introduce variation", "mutation operator"], "explanation": "Randomly flip bits in the solution with a given mutation rate, introducing small variations to maintain diversity.", "xp": 15},
        {"id": "cpp-49-15-10", "type": "code", "question": "Compare crossover methods (one-point, two-point, uniform).", "correctAnswer": ["compare effectiveness", "different recombination", "crossover variations"], "explanation": "Implement and compare one-point, two-point, and uniform crossover to understand their effects on search behavior.", "xp": 15},
        {"id": "cpp-49-15-11", "type": "typing", "question": "What happens if mutation rate is too high?", "correctAnswer": ["too much randomness, loss of good solutions", "random search", "convergence issues"], "explanation": "Too high mutation rate introduces excessive randomness, preventing convergence and losing good solutions found.", "xp": 5},
        {"id": "cpp-49-15-12", "type": "typing", "question": "What happens if mutation rate is too low?", "correctAnswer": ["premature convergence", "lack of diversity", "stuck in local optimum"], "explanation": "Too low mutation rate reduces diversity, causing premature convergence to a local optimum.", "xp": 5},
        {"id": "cpp-49-15-13", "type": "typing", "question": "How does population size affect genetic algorithm performance?", "correctAnswer": ["larger population = more diversity, slower convergence", "trade-off", "balance needed"], "explanation": "Larger populations maintain more diversity but converge slower; smaller populations converge faster but risk premature convergence.", "xp": 5},
        {"id": "cpp-49-15-14", "type": "code", "question": "Adaptive genetic algorithms with dynamic parameters.", "correctAnswer": ["adjust rates based on progress", "adaptive mutation", "dynamic parameters"], "explanation": "Adjust mutation and crossover rates dynamically based on convergence speed, diversity, or improvement rate.", "xp": 15},
        {"id": "cpp-49-15-15", "type": "code", "question": "Parallel genetic algorithms with multiple populations.", "correctAnswer": ["island model", "parallel evolution", "multiple populations"], "explanation": "Run multiple independent populations (islands) with occasional migration of individuals between islands.", "xp": 15},
        {"id": "cpp-49-15-16", "type": "typing", "question": "How does selection pressure affect exploration vs exploitation?", "correctAnswer": ["high pressure = exploitation, low = exploration", "balance needed", "trade-off"], "explanation": "High selection pressure favors exploitation of good solutions; low pressure encourages exploration of new areas.", "xp": 5},
        {"id": "cpp-49-15-17", "type": "typing", "question": "Role of diversity in genetic algorithms?", "correctAnswer": ["maintains exploration", "prevents premature convergence", "population variety"], "explanation": "Diversity maintains exploration of the search space and prevents premature convergence to local optima.", "xp": 5},
        {"id": "cpp-49-15-18", "type": "code", "question": "Genetic algorithm for TSP with order crossover.", "correctAnswer": ["order preserving crossover", "TSP GA", "permutation representation"], "explanation": "Use order crossover (OX) for TSP to create valid permutations without duplicate cities.", "xp": 15},
        {"id": "cpp-49-15-19", "type": "code", "question": "Elitism in genetic algorithms.", "correctAnswer": ["preserve best solutions", "ensure quality doesn't decrease", "keep elites"], "explanation": "Carry forward the best solutions unchanged to each generation to ensure solution quality doesn't degrade.", "xp": 15},
        {"id": "cpp-49-15-20", "type": "code", "question": "Niching techniques for maintaining diversity.", "correctAnswer": ["preserve subpopulations", "maintain diversity", "niching methods"], "explanation": "Use niching to maintain diverse subpopulations, preventing premature convergence to a single region.", "xp": 15},
        {"id": "cpp-49-15-21", "type": "code", "question": "Genetic algorithms with constraints.", "correctAnswer": ["constraint handling", "penalty functions", "repair mechanisms"], "explanation": "Handle constraints through penalty functions, repair mechanisms, or constraint-preserving operators.", "xp": 15},
        {"id": "cpp-49-15-22", "type": "code", "question": "Generic genetic algorithm framework.", "correctAnswer": ["template framework", "pluggable operators", "reusable GA"], "explanation": "Create a reusable genetic algorithm framework with pluggable selection, crossover, and mutation operators.", "xp": 15},
        {"id": "cpp-49-15-23", "type": "typing", "question": "When are genetic algorithms preferred over other metaheuristics?", "correctAnswer": ["population-based exploration", "recombination useful", "complex landscapes"], "explanation": "Genetic algorithms work well when exploring complex landscapes and recombination can combine good solution fragments.", "xp": 5},
        {"id": "cpp-49-15-24", "type": "typing", "question": "How to determine convergence in genetic algorithms?", "correctAnswer": ["no improvement for generations", "low diversity", "fitness plateau"], "explanation": "Convergence occurs when there's no improvement for many generations or population diversity becomes very low.", "xp": 5},
        {"id": "cpp-49-15-25", "type": "code", "question": "Visualize genetic algorithm evolution over generations.", "correctAnswer": ["track population metrics", "plot fitness over time", "visualization"], "explanation": "Track and visualize population fitness, diversity, and convergence over generations to understand algorithm behavior.", "xp": 15}
    ]
}

data['units'][48]['lessons'][14].update(lesson15)
print("✅ Lesson 15: Genetic Algorithms - 25 detailed questions")

# Write final
output_path = os.path.join(script_dir, 'questions', 'cppCombined.js')
with open(output_path, 'w') as f:
    f.write('// C++ - All Topics\n\n')
    f.write('window.cppCombined = ')
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print("\n" + "="*70)
print("🎉 UNIT 49 LESSONS 13-15 FINAL REBUILD COMPLETE!")
print("="*70)
print("Lesson 13: Backtracking - 25 detailed questions")
print("Lesson 14: Simulated Annealing - 25 detailed questions")
print("Lesson 15: Genetic Algorithms - 25 detailed questions")
print("\nAll 6 lessons (10-15) now have high-quality, detailed questions!")
print("Total: 6 lessons, 150 questions")
print("="*70)
