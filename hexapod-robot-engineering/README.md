# Hexapod Robot Engineering Course

A comprehensive educational website covering all engineering disciplines needed to design, build, and control a hexapod robot to perfection.

## Course Structure

This course contains 13 comprehensive modules, each with extensive content, practice problems, and quizzes:

1. **Foundations & Prerequisites** - Vector calculus, matrices, coordinate systems, transformations
2. **Statics & Dynamics** - Forces, torques, equilibrium, Newton-Euler equations
3. **Electricity & Magnetism** - Circuits, motors, electromagnetic principles
4. **Circuits & Electronics** - Analog/digital circuits, microcontrollers, power electronics
5. **Materials Science** - Stress, strain, material selection, fatigue
6. **Differential Equations** - ODEs, Laplace transforms, state-space models
7. **Kinematics** - Forward/inverse kinematics, Jacobian, workspace
8. **Vibrations & Waves** - Free/forced vibrations, resonance, modal analysis
9. **Control Theory** - PID control, stability, frequency response
10. **Fluid Mechanics** - Bernoulli, Reynolds number, drag, lift
11. **Thermodynamics** - Heat transfer, thermal management, efficiency
12. **Hexapod Design & Gait Planning** - Leg IK, gaits, stability, terrain adaptation
13. **Review & Final Assessment** - Comprehensive exam with 25 questions

## Getting Started

### Prerequisites

- Modern web browser with JavaScript enabled
- MathJax for equation rendering (loaded from CDN)
- No server required - runs entirely in browser

### How to Use

1. Open `index.html` in your web browser to view the course home page
2. Navigate through modules in order (each builds on previous knowledge)
3. Read lessons, work through examples, and complete practice problems
4. Take quizzes at end of each module (70% to pass)
5. Complete final exam (80% required for course completion)

### File Structure

```
hexapod-robot-engineering/
├── index.html                 # Course homepage
├── README.md                 # This file
├── css/
│   └── styles.css           # Course styling (solid color blocks)
├── js/
│   ├── navigation.js         # Progress tracking, navigation
│   ├── problems.js           # Practice problem database
│   └── quizzes.js            # Quiz questions (13 modules + final)
└── lessons/
    ├── 01-foundations.html
    ├── 02-statics-dynamics.html
    ├── 03-electricity-magnetism.html
    ├── 04-circuits-electronics.html
    ├── 05-materials-science.html
    ├── 06-differential-equations.html
    ├── 07-kinematics.html
    ├── 08-vibrations-waves.html
    ├── 09-control-theory.html
    ├── 10-fluid-mechanics.html
    ├── 11-thermodynamics.html
    ├── 12-hexapod-design.html
    └── 13-final.html         # Final assessment
```

## Course Features

### Interactive Elements

- **Progress Tracking** - Saves progress via localStorage between sessions
- **Practice Problems** - Extensive problem sets with hints and explanations
- **Quizzes** - Module quizzes (8-10 questions each) and final exam (25 questions)
- **Immediate Feedback** - Check answers and view detailed explanations

### Mathematical Content

All mathematical equations use MathJax for proper rendering:
- Inline math: `\(...\)` displays inline
- Display math: `\[...\]` displays centered blocks

### Styling

- Modern tech magazine aesthetic
- Solid color blocks (no gradients)
- Color palette: Yellow, Blue, Purple, Green, Magenta, Orange, Dark Green, White
- Definition boxes, example boxes, formula boxes, warning boxes
- Responsive design for mobile devices

## Technical Details

### Target Audience

Students who have completed **Calculus III** (multivariable vector calculus). No prior robotics background required.

### Time Investment

- Each module: 2-4 hours reading + practice problems
- Quizzes: 15-30 minutes each
- Final exam: 90 minutes recommended
- Total course: 40-60 hours for complete study

### Browser Compatibility

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Requires:
- JavaScript enabled
- MathJax CDN access (or load locally for offline use)

## Completion Requirements

To receive course completion certification:

1. Complete all 12 module quizzes with ≥70% score
2. Pass final comprehensive exam with ≥80% score
3. Demonstrate understanding of key concepts in final exam explanations

## Content Coverage Summary

### Mathematics
- Vector operations (dot/cross products, gradient, divergence, curl)
- Matrix algebra and transformations
- Differential equations (ODEs, Laplace transforms)
- Coordinate systems (Cartesian, spherical, cylindrical)

### Mechanics
- Statics (forces, moments, equilibrium)
- Dynamics (Newton's laws, rotational dynamics)
- Vibrations (free, forced, damped, resonance)
- Material properties (stress, strain, fatigue)

### Electronics & Electromagnetics
- Electric circuits (Ohm's Law, Kirchhoff's laws)
- DC motors (torque, back-EMF, speed control)
- Electromagnetic principles (Faraday's Law, Lorentz force)
- Sensors (Hall effect, inductive, capacitive)
- Motor control (PWM, H-bridges, microcontrollers)
- Power electronics (linear/switching regulators)

### Control Theory
- PID control (tuning, stability)
- System analysis (poles, zeros, stability margins)
- Frequency response (Bode plots, gain/phase margin)
- Feedback control design

### Other Topics
- Fluid mechanics (Bernoulli, Reynolds number, drag)
- Thermodynamics (heat transfer, thermal management)
- Hexapod-specific design (kinematics, gaits, stability)

## License

Educational use free. Please credit original course when using materials.

## Version

Version 1.0 - Initial release with complete 13-module curriculum

---

**Start Learning** - Open `index.html` to begin your hexapod robot engineering journey!