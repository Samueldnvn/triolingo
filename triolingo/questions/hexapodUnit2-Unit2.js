// Hexapod Engineering - Unit2
// Generated: 2026-03-08 14:01:27

const Unit2 = {
  "unitId": "2",
  "unitName": "Statics & Dynamics",
  "unitDescription": "Master statics, friction, structural mechanics, dynamics, and stability",
  "subunits": [
    {
      "subunitId": "2.1",
      "subunitName": "Statics",
      "lessons": [
        {
          "lessonId": "free-body",
          "lessonName": "Free Body Diagrams",
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Free Body Diagrams (FBD)\n\nA Free Body Diagram shows all forces acting on an object.\n\n**Steps to draw FBD:**\n1. Isolate the object\n2. Draw the object as a simple shape\n3. Show all external forces with arrows\n4. Label each force clearly\n\n**Common forces:**\n- Weight (W = mg): downward\n- Normal force (N): perpendicular to surface\n- Tension (T): along rope/cable\n- Friction (f): parallel to surface\n- Applied forces: as shown\n\n**Example: Box on ramp:**\n```\n    \u2191 N\n    \u2502\n    \u2502    / W\n    \u2502   /\n    \u2514\u2500\u2500/  \u03b8\n     f\n```\n\n**Equilibrium condition:**\n\u03a3F = 0 (sum of all forces = 0)\n",
          "questions": [
            {
              "id": "hex-2-1-1",
              "type": "typing",
              "question": "What does FBD stand for?",
              "correctAnswer": [
                "Free Body Diagram",
                "Free Body Diagrams"
              ],
              "explanation": "Free Body Diagram.",
              "xp": 4
            },
            {
              "id": "hex-2-1-2",
              "type": "typing",
              "question": "First step in FBD?",
              "correctAnswer": [
                "isolate object",
                "draw the object"
              ],
              "explanation": "Isolate the object.",
              "xp": 4
            },
            {
              "id": "hex-2-1-3",
              "type": "typing",
              "question": "What is weight direction?",
              "correctAnswer": [
                "downward",
                "down",
                "toward earth"
              ],
              "explanation": "Always points down.",
              "xp": 4
            },
            {
              "id": "hex-2-1-4",
              "type": "typing",
              "question": "Weight formula?",
              "correctAnswer": [
                "W = mg",
                "mass times gravity"
              ],
              "explanation": "W = mg.",
              "xp": 4
            },
            {
              "id": "hex-2-1-5",
              "type": "typing",
              "question": "Normal force direction?",
              "correctAnswer": [
                "perpendicular to surface",
                "normal to surface"
              ],
              "explanation": "Perpendicular to contact surface.",
              "xp": 5
            },
            {
              "id": "hex-2-1-6",
              "type": "typing",
              "question": "Tension acts along?",
              "correctAnswer": [
                "rope",
                "cable",
                "string"
              ],
              "explanation": "Along the rope/cable.",
              "xp": 4
            },
            {
              "id": "hex-2-1-7",
              "type": "typing",
              "question": "Friction direction?",
              "correctAnswer": [
                "parallel to surface",
                "opposes motion"
              ],
              "explanation": "Parallel to contact surface.",
              "xp": 5
            },
            {
              "id": "hex-2-1-8",
              "type": "typing",
              "question": "Equilibrium condition?",
              "correctAnswer": [
                "\u03a3F = 0",
                "sum of forces equals zero"
              ],
              "explanation": "Net force is zero.",
              "xp": 5
            },
            {
              "id": "hex-2-1-9",
              "type": "typing",
              "question": "What do arrows represent?",
              "correctAnswer": [
                "forces",
                "vectors"
              ],
              "explanation": "Force vectors.",
              "xp": 4
            },
            {
              "id": "hex-2-1-10",
              "type": "typing",
              "question": "Forces on stationary box on table?",
              "correctAnswer": [
                "W and N",
                "weight and normal"
              ],
              "explanation": "Weight down, normal up.",
              "xp": 5
            },
            {
              "id": "hex-2-1-11",
              "type": "typing",
              "question": "Normal on ramp direction?",
              "correctAnswer": [
                "perpendicular to ramp",
                "normal to ramp surface"
              ],
              "explanation": "At angle to horizontal.",
              "xp": 5
            },
            {
              "id": "hex-2-1-12",
              "type": "typing",
              "question": "How many forces on hanging block?",
              "correctAnswer": [
                "2",
                "two"
              ],
              "explanation": "Weight and tension.",
              "xp": 4
            },
            {
              "id": "hex-2-1-13",
              "type": "typing",
              "question": "Friction opposes what?",
              "correctAnswer": [
                "motion",
                "relative motion"
              ],
              "explanation": "Opposes slipping/motion.",
              "xp": 5
            },
            {
              "id": "hex-2-1-14",
              "type": "typing",
              "question": "Applied force direction?",
              "correctAnswer": [
                "as shown",
                "depends"
              ],
              "explanation": "As shown in problem.",
              "xp": 4
            },
            {
              "id": "hex-2-1-15",
              "type": "typing",
              "question": "\u03a3F means?",
              "correctAnswer": [
                "sum of forces",
                "sigma F"
              ],
              "explanation": "Sum of all forces.",
              "xp": 5
            }
          ]
        },
        {
          "lessonId": "equilibrium",
          "lessonName": "Equilibrium Conditions",
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Equilibrium Conditions\n\nFor an object to be in equilibrium:\n\n**Translational Equilibrium:**\n\u03a3F = 0 (sum of all forces = 0)\n- \u03a3F\u2093 = 0 (forces in x-direction)\n- \u03a3F\u1d67 = 0 (forces in y-direction)\n\n**Rotational Equilibrium:**\n\u03a3\u03c4 = 0 (sum of all torques = 0)\n- \u03c4 = r \u00d7 F (torque = position \u00d7 force)\n- Clockwise torque = - (counterclockwise)\n\n**Complete Equilibrium:**\nBoth translational AND rotational equilibrium\n\n**Example: Beam with supports:**\n```\n    F\n    \u2193\n    \u2502\n\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500  \u2190 beam\n    \u2502\n   R\u2081    R\u2082  \u2190 supports\n```\n\n**Requirements:**\n- \u03a3F\u1d67 = 0: R\u2081 + R\u2082 - F = 0\n- \u03a3\u03c4 (about R\u2081) = 0: F\u00b7d - R\u2082\u00b7L = 0\n",
          "questions": [
            {
              "id": "hex-2-1-16",
              "type": "typing",
              "question": "Translational equilibrium?",
              "correctAnswer": [
                "\u03a3F = 0",
                "sum of forces zero"
              ],
              "explanation": "Net force is zero.",
              "xp": 5
            },
            {
              "id": "hex-2-1-17",
              "type": "typing",
              "question": "Rotational equilibrium?",
              "correctAnswer": [
                "\u03a3\u03c4 = 0",
                "sum of torques zero"
              ],
              "explanation": "Net torque is zero.",
              "xp": 5
            },
            {
              "id": "hex-2-1-18",
              "type": "typing",
              "question": "Torque formula?",
              "correctAnswer": [
                "\u03c4 = r \u00d7 F",
                "r cross F"
              ],
              "explanation": "Position cross force.",
              "xp": 5
            },
            {
              "id": "hex-2-1-19",
              "type": "typing",
              "question": "Torque also called?",
              "correctAnswer": [
                "moment",
                "moment of force"
              ],
              "explanation": "Moment of force.",
              "xp": 4
            },
            {
              "id": "hex-2-1-20",
              "type": "typing",
              "question": "What is \u03a3F\u2093?",
              "correctAnswer": [
                "sum of x-forces",
                "horizontal forces"
              ],
              "explanation": "Forces in x-direction.",
              "xp": 4
            },
            {
              "id": "hex-2-1-21",
              "type": "typing",
              "question": "What is \u03a3F\u1d67?",
              "correctAnswer": [
                "sum of y-forces",
                "vertical forces"
              ],
              "explanation": "Forces in y-direction.",
              "xp": 4
            },
            {
              "id": "hex-2-1-22",
              "type": "typing",
              "question": "Clockwise torque sign?",
              "correctAnswer": [
                "negative",
                "-"
              ],
              "explanation": "Negative convention.",
              "xp": 5
            },
            {
              "id": "hex-2-1-23",
              "type": "typing",
              "question": "Complete equilibrium needs?",
              "correctAnswer": [
                "both translational and rotational",
                "\u03a3F=0 and \u03a3\u03c4=0"
              ],
              "explanation": "Both conditions.",
              "xp": 5
            },
            {
              "id": "hex-2-1-24",
              "type": "typing",
              "question": "Torque depends on?",
              "correctAnswer": [
                "force and distance",
                "F and r"
              ],
              "explanation": "Force and lever arm.",
              "xp": 5
            },
            {
              "id": "hex-2-1-25",
              "type": "typing",
              "question": "What if \u03a3F \u2260 0?",
              "correctAnswer": [
                "accelerates",
                "moves"
              ],
              "explanation": "Object accelerates.",
              "xp": 5
            },
            {
              "id": "hex-2-1-26",
              "type": "typing",
              "question": "What if \u03a3\u03c4 \u2260 0?",
              "correctAnswer": [
                "rotates",
                "angular acceleration"
              ],
              "explanation": "Object rotates.",
              "xp": 5
            },
            {
              "id": "hex-2-1-27",
              "type": "typing",
              "question": "Beam support forces?",
              "correctAnswer": [
                "reactions",
                "reaction forces"
              ],
              "explanation": "Support reactions.",
              "xp": 4
            },
            {
              "id": "hex-2-1-28",
              "type": "typing",
              "question": "Choose point for torque?",
              "correctAnswer": [
                "any point",
                "any convenient point"
              ],
              "explanation": "Any point works.",
              "xp": 5
            },
            {
              "id": "hex-2-1-29",
              "type": "typing",
              "question": "2D equilibrium equations?",
              "correctAnswer": [
                "3 equations",
                "\u03a3Fx=0, \u03a3Fy=0, \u03a3\u03c4=0"
              ],
              "explanation": "Three independent equations.",
              "xp": 5
            },
            {
              "id": "hex-2-1-30",
              "type": "typing",
              "question": "Static equilibrium means?",
              "correctAnswer": [
                "no motion",
                "at rest"
              ],
              "explanation": "Object is stationary.",
              "xp": 4
            }
          ]
        },
        {
          "lessonId": "force-decomposition",
          "lessonName": "Force Decomposition",
          "type": "lesson",
          "difficulty": "beginner",
          "lessonText": "# Force Decomposition\n\nBreaking forces into components using trigonometry.\n\n**Components on x-y plane:**\nF\u2093 = F\u00b7cos(\u03b8) (horizontal)\nF\u1d67 = F\u00b7sin(\u03b8) (vertical)\n\n**Magnitude from components:**\nF = \u221a(F\u2093\u00b2 + F\u1d67\u00b2)\n\n**Angle from components:**\n\u03b8 = tan\u207b\u00b9(F\u1d67 / F\u2093)\n\n**Example: Force at 30\u00b0:**\n```\n    F\u1d67 = F\u00b7sin(30\u00b0)\n    \u2191\n    \u2502\u2571\n   F\u2571 \u03b8 = 30\u00b0\n  \u2571\u2502\n\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2192 F\u2093 = F\u00b7cos(30\u00b0)\n```\n\nIf F = 100 N:\nF\u2093 = 100\u00b7cos(30\u00b0) = 86.6 N\nF\u1d67 = 100\u00b7sin(30\u00b0) = 50 N\n\n**Use cases:**\n- Forces on ramps\n- Tension at angles\n- Any non-axis-aligned force\n",
          "questions": [
            {
              "id": "hex-2-1-31",
              "type": "typing",
              "question": "Horizontal component formula?",
              "correctAnswer": [
                "F\u00b7cos(\u03b8)",
                "F cos theta"
              ],
              "explanation": "F times cosine of angle.",
              "xp": 5
            },
            {
              "id": "hex-2-1-32",
              "type": "typing",
              "question": "Vertical component formula?",
              "correctAnswer": [
                "F\u00b7sin(\u03b8)",
                "F sin theta"
              ],
              "explanation": "F times sine of angle.",
              "xp": 5
            },
            {
              "id": "hex-2-1-33",
              "type": "typing",
              "question": "100 N at 0\u00b0 has F\u2093?",
              "correctAnswer": [
                "100",
                "100 N"
              ],
              "explanation": "cos(0\u00b0) = 1, so 100 N.",
              "xp": 5
            },
            {
              "id": "hex-2-1-34",
              "type": "typing",
              "question": "100 N at 90\u00b0 has F\u1d67?",
              "correctAnswer": [
                "100",
                "100 N"
              ],
              "explanation": "sin(90\u00b0) = 1, so 100 N.",
              "xp": 5
            },
            {
              "id": "hex-2-1-35",
              "type": "typing",
              "question": "100 N at 30\u00b0, F\u2093?",
              "correctAnswer": [
                "86.6",
                "approximately 87"
              ],
              "explanation": "100\u00b7cos(30\u00b0) = 86.6 N.",
              "xp": 5
            },
            {
              "id": "hex-2-1-36",
              "type": "typing",
              "question": "100 N at 30\u00b0, F\u1d67?",
              "correctAnswer": [
                "50",
                "50 N"
              ],
              "explanation": "100\u00b7sin(30\u00b0) = 50 N.",
              "xp": 5
            },
            {
              "id": "hex-2-1-37",
              "type": "typing",
              "question": "Reconstruct magnitude?",
              "correctAnswer": [
                "\u221a(F\u2093\u00b2 + F\u1d67\u00b2)",
                "sqrt(Fx^2 + Fy^2)"
              ],
              "explanation": "Pythagorean theorem.",
              "xp": 5
            },
            {
              "id": "hex-2-1-38",
              "type": "typing",
              "question": "Find angle formula?",
              "correctAnswer": [
                "tan\u207b\u00b9(F\u1d67/F\u2093)",
                "arctan(Fy/Fx)"
              ],
              "explanation": "Inverse tangent.",
              "xp": 5
            },
            {
              "id": "hex-2-1-39",
              "type": "typing",
              "question": "F\u2093=3, F\u1d67=4, magnitude?",
              "correctAnswer": [
                "5",
                "five"
              ],
              "explanation": "\u221a(9+16) = 5.",
              "xp": 5
            },
            {
              "id": "hex-2-1-40",
              "type": "typing",
              "question": "F\u2093=3, F\u1d67=4, angle?",
              "correctAnswer": [
                "53\u00b0",
                "53 degrees",
                "approximately 53"
              ],
              "explanation": "tan\u207b\u00b9(4/3) \u2248 53\u00b0.",
              "xp": 5
            },
            {
              "id": "hex-2-1-41",
              "type": "typing",
              "question": "Force on 30\u00b0 ramp component?",
              "correctAnswer": [
                "parallel and perpendicular",
                "along ramp, normal"
              ],
              "explanation": "Decompose along/normal to ramp.",
              "xp": 5
            },
            {
              "id": "hex-2-1-42",
              "type": "typing",
              "question": "cos(45\u00b0) = ?",
              "correctAnswer": [
                "0.707",
                "1/\u221a2",
                "0.7071"
              ],
              "explanation": "\u221a2/2 \u2248 0.707.",
              "xp": 5
            },
            {
              "id": "hex-2-1-43",
              "type": "typing",
              "question": "sin(45\u00b0) = ?",
              "correctAnswer": [
                "0.707",
                "1/\u221a2",
                "0.7071"
              ],
              "explanation": "\u221a2/2 \u2248 0.707.",
              "xp": 5
            },
            {
              "id": "hex-2-1-44",
              "type": "typing",
              "question": "Components at 45\u00b0 equal?",
              "correctAnswer": [
                "yes",
                "Yes"
              ],
              "explanation": "sin(45\u00b0) = cos(45\u00b0).",
              "xp": 4
            },
            {
              "id": "hex-2-1-45",
              "type": "typing",
              "question": "Why decompose?",
              "correctAnswer": [
                "easier calculations",
                "solve equilibrium"
              ],
              "explanation": "Simplify equations.",
              "xp": 5
            }
          ]
        }
      ]
    }
  ]
};

