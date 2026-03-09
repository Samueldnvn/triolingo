// Hexapod - Control
// Generated: 2026-03-08 16:01:44

// Lesson 1: PID Control
{
  "lessonId": "pid-control",
  "lessonName": "PID Control",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# PID Control\n\n## Introduction\nThis lesson covers pid control in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-1-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-1-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-1-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-1-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-1-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-1-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-1-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-1-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-1-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-1-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-1-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-1-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-1-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-1-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-1-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-1-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-1-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-1-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-1-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-1-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 2: State Space
{
  "lessonId": "state-space",
  "lessonName": "State Space",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# State Space\n\n## Introduction\nThis lesson covers state space in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-2-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-2-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-2-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-2-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-2-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-2-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-2-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-2-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-2-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-2-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-2-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-2-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-2-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-2-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-2-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-2-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-2-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-2-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-2-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-2-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 3: Feedback Linearization
{
  "lessonId": "feedback-linearization",
  "lessonName": "Feedback Linearization",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Feedback Linearization\n\n## Introduction\nThis lesson covers feedback linearization in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-3-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-3-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-3-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-3-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-3-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-3-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-3-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-3-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-3-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-3-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-3-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-3-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-3-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-3-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-3-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-3-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-3-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-3-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-3-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-3-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 4: Adaptive Control
{
  "lessonId": "adaptive-control",
  "lessonName": "Adaptive Control",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Adaptive Control\n\n## Introduction\nThis lesson covers adaptive control in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-4-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-4-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-4-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-4-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-4-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-4-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-4-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-4-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-4-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-4-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-4-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-4-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-4-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-4-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-4-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-4-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-4-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-4-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-4-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-4-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 5: Robust Control
{
  "lessonId": "robust-control",
  "lessonName": "Robust Control",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Robust Control\n\n## Introduction\nThis lesson covers robust control in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-5-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-5-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-5-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-5-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-5-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-5-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-5-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-5-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-5-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-5-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-5-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-5-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-5-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-5-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-5-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-5-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-5-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-5-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-5-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-5-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 6: Optimal Control
{
  "lessonId": "optimal-control",
  "lessonName": "Optimal Control",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Optimal Control\n\n## Introduction\nThis lesson covers optimal control in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-6-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-6-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-6-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-6-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-6-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-6-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-6-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-6-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-6-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-6-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-6-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-6-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-6-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-6-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-6-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-6-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-6-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-6-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-6-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-6-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 7: MPC
{
  "lessonId": "mpc",
  "lessonName": "MPC",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# MPC\n\n## Introduction\nThis lesson covers mpc in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-7-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-7-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-7-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-7-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-7-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-7-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-7-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-7-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-7-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-7-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-7-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-7-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-7-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-7-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-7-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-7-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-7-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-7-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-7-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-7-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 8: Trajectory Tracking
{
  "lessonId": "trajectory-tracking",
  "lessonName": "Trajectory Tracking",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Trajectory Tracking\n\n## Introduction\nThis lesson covers trajectory tracking in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-8-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-8-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-8-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-8-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-8-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-8-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-8-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-8-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-8-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-8-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-8-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-8-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-8-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-8-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-8-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-8-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-8-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-8-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-8-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-8-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 9: Stability
{
  "lessonId": "stability",
  "lessonName": "Stability",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Stability\n\n## Introduction\nThis lesson covers stability in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-9-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-9-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-9-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-9-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-9-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-9-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-9-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-9-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-9-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-9-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-9-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-9-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-9-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-9-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-9-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-9-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-9-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-9-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-9-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-9-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 10: Controllability
{
  "lessonId": "controllability",
  "lessonName": "Controllability",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Controllability\n\n## Introduction\nThis lesson covers controllability in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-10-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-10-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-10-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-10-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-10-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-10-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-10-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-10-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-10-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-10-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-10-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-10-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-10-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-10-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-10-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-10-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-10-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-10-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-10-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-10-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 11: Observability
{
  "lessonId": "observability",
  "lessonName": "Observability",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Observability\n\n## Introduction\nThis lesson covers observability in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-11-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-11-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-11-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-11-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-11-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-11-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-11-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-11-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-11-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-11-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-11-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-11-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-11-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-11-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-11-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-11-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-11-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-11-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-11-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-11-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 12: LQR
{
  "lessonId": "lqr",
  "lessonName": "LQR",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# LQR\n\n## Introduction\nThis lesson covers lqr in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-12-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-12-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-12-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-12-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-12-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-12-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-12-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-12-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-12-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-12-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-12-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-12-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-12-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-12-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-12-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-12-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-12-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-12-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-12-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-12-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 13: LQG
{
  "lessonId": "lqg",
  "lessonName": "LQG",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# LQG\n\n## Introduction\nThis lesson covers lqg in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-13-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-13-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-13-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-13-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-13-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-13-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-13-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-13-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-13-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-13-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-13-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-13-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-13-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-13-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-13-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-13-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-13-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-13-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-13-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-13-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 14: H-infinity
{
  "lessonId": "h-infinity",
  "lessonName": "H-infinity",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# H-infinity\n\n## Introduction\nThis lesson covers h-infinity in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-14-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-14-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-14-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-14-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-14-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-14-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-14-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-14-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-14-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-14-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-14-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-14-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-14-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-14-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-14-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-14-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-14-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-14-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-14-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-14-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 15: Sliding Mode
{
  "lessonId": "sliding-mode",
  "lessonName": "Sliding Mode",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Sliding Mode\n\n## Introduction\nThis lesson covers sliding mode in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-15-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-15-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-15-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-15-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-15-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-15-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-15-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-15-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-15-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-15-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-15-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-15-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-15-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-15-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-15-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-15-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-15-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-15-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-15-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-15-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

// Lesson 16: Gain Scheduling
{
  "lessonId": "gain-scheduling",
  "lessonName": "Gain Scheduling",
  "type": "lesson",
  "difficulty": "beginner",
  "lessonText": "# Gain Scheduling\n\n## Introduction\nThis lesson covers gain scheduling in Hexapod.\n\n## Key Concepts\n- Fundamental principles and definitions\n- Important formulas and relationships\n- Practical applications\n\n## Examples\nWorked examples demonstrating the concepts.\n\n## Summary\nKey takeaways and review.\n",
  "questions": [
    {
      "id": "hex-4-16-1",
      "type": "typing",
      "question": "Forward kinematics?",
      "correctAnswer": [
        "joint to end-effector"
      ],
      "explanation": "Joints → Position.",
      "xp": 5
    },
    {
      "id": "hex-4-16-2",
      "type": "typing",
      "question": "Inverse kinematics?",
      "correctAnswer": [
        "position to joints"
      ],
      "explanation": "Position → Joints.",
      "xp": 5
    },
    {
      "id": "hex-4-16-3",
      "type": "typing",
      "question": "DH parameters?",
      "correctAnswer": [
        "robot kinematics convention"
      ],
      "explanation": "Standard.",
      "xp": 5
    },
    {
      "id": "hex-4-16-4",
      "type": "typing",
      "question": "Degrees of freedom?",
      "correctAnswer": [
        "independent motions"
      ],
      "explanation": "Controllable axes.",
      "xp": 5
    },
    {
      "id": "hex-4-16-5",
      "type": "typing",
      "question": "Workspace?",
      "correctAnswer": [
        "reachable positions"
      ],
      "explanation": "All possible positions.",
      "xp": 4
    },
    {
      "id": "hex-4-16-6",
      "type": "typing",
      "question": "Singularity?",
      "correctAnswer": [
        "loss of controllability"
      ],
      "explanation": "Cannot move.",
      "xp": 5
    },
    {
      "id": "hex-4-16-7",
      "type": "typing",
      "question": "Manipulability?",
      "correctAnswer": [
        "ease of motion"
      ],
      "explanation": "Dexterity measure.",
      "xp": 5
    },
    {
      "id": "hex-4-16-8",
      "type": "typing",
      "question": "Jacobian?",
      "correctAnswer": [
        "velocity mapping"
      ],
      "explanation": "Joint → End-effector velocity.",
      "xp": 5
    },
    {
      "id": "hex-4-16-9",
      "type": "typing",
      "question": "Torque?",
      "correctAnswer": [
        "rotational force"
      ],
      "explanation": "Causes rotation.",
      "xp": 5
    },
    {
      "id": "hex-4-16-10",
      "type": "typing",
      "question": "Moment of inertia?",
      "correctAnswer": [
        "resistance to rotation"
      ],
      "explanation": "Rotational mass.",
      "xp": 4
    },
    {
      "id": "hex-4-16-11",
      "type": "typing",
      "question": "Center of mass?",
      "correctAnswer": [
        "balance point"
      ],
      "explanation": "Weight acts here.",
      "xp": 5
    },
    {
      "id": "hex-4-16-12",
      "type": "typing",
      "question": "Lagrangian?",
      "correctAnswer": [
        "kinetic - potential"
      ],
      "explanation": "Energy-based.",
      "xp": 5
    },
    {
      "id": "hex-4-16-13",
      "type": "typing",
      "question": "COG?",
      "correctAnswer": [
        "center of gravity"
      ],
      "explanation": "Balance under gravity.",
      "xp": 5
    },
    {
      "id": "hex-4-16-14",
      "type": "typing",
      "question": "ZMP?",
      "correctAnswer": [
        "zero moment point"
      ],
      "explanation": "Stability criterion.",
      "xp": 5
    },
    {
      "id": "hex-4-16-15",
      "type": "typing",
      "question": "Static stability?",
      "correctAnswer": [
        "support polygon"
      ],
      "explanation": "COG over support.",
      "xp": 4
    },
    {
      "id": "hex-4-16-16",
      "type": "typing",
      "question": "Dynamic stability?",
      "correctAnswer": [
        "moving equilibrium"
      ],
      "explanation": "Balance during motion.",
      "xp": 5
    },
    {
      "id": "hex-4-16-17",
      "type": "typing",
      "question": "Gait?",
      "correctAnswer": [
        "walking pattern"
      ],
      "explanation": "Leg coordination.",
      "xp": 5
    },
    {
      "id": "hex-4-16-18",
      "type": "typing",
      "question": "Tripod gait?",
      "correctAnswer": [
        "3 legs at once"
      ],
      "explanation": "Common pattern.",
      "xp": 5
    },
    {
      "id": "hex-4-16-19",
      "type": "typing",
      "question": "Leg stride?",
      "correctAnswer": [
        "step length"
      ],
      "explanation": "Distance per step.",
      "xp": 5
    },
    {
      "id": "hex-4-16-20",
      "type": "typing",
      "question": "Body trajectory?",
      "correctAnswer": [
        "path of body"
      ],
      "explanation": "Body motion path.",
      "xp": 4
    }
  ]
}

