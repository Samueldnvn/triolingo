#!/usr/bin/env python3
import re

# Module content templates with proper inline math formatting

modules = {
    '04-circuits-electronics.html': {
        'title': 'CIRCUITS & ELECTRONICS',
        'subtitle': 'Analog/Digital Circuits, Microcontrollers, Power Electronics',
        'content': [
            ('Overview', 'Analog and digital circuits form the intelligence and actuation backbone of hexapod robots. From sensor signal conditioning to motor drivers, from microcontrollers to PWM control, proper circuit design ensures reliable operation.',
            [('Op-Amps', 'Operational amplifiers amplify signals. Inverting: \(V_{out} = -(R_f/R_{in})V_{in}.\) Non-inverting gain \(\geq 1.\)'),
            ('Digital Logic', 'Binary representation. Gate operations. Microcontroller GPIO pins control motors and read sensors.'),
            ('Power Electronics', 'H-bridges control motor direction. PWM varies motor speed smoothly. Linear and switching regulators power electronics.')]),
            ('Quiz', 'M4-Q1:B,M4-Q2:B,M4-Q3:B,M4-Q4:B,M4-Q5:A,M4-Q6:B,M4-Q7:B,M4-Q8:B,M4-Q9:B,M4-Q10:B')
        ]
    },
    '05-materials-science.html': {
        'title': 'MATERIALS SCIENCE',
        'subtitle': 'Stress, Strain, Material Selection, Fatigue',
        'content': [
            ('Overview', 'Material selection critically affects hexapod robot weight, strength, and durability. Understanding stress, strain, and fatigue life ensures reliable operation in demanding environments.',
            [('Stress and Strain', 'Stress \(\sigma = F/A\) (\(\text{Pa}\)). Strain \(\varepsilon = \Delta L/L\) (dimensionless).'),
            ('Material Properties', 'Yield strength \(\sigma_y\): plastic deformation begins. Ultimate tensile strength \(\sigma_{UTS}\): maximum stress. Fatigue: repeated loading causes failure below yield.'),
            ('Endurance Limit', 'For steel, stresses below \(\sigma_e\) cause no fatigue failure even after infinite cycles (endurance limit).')]),
            ('Quiz', 'M5-Q1:B,M5-Q2:B,M5-Q3:B,M5-Q4:C,M5-Q5:B,M5-Q6:A,M5-Q7:B,M5-Q8:B,M5-Q9:A,M5-Q10:B')
        ]
    },
    '06-differential-equations.html': {
        'title': 'DIFFERENTIAL EQUATIONS',
        'subtitle': 'ODEs, Laplace Transforms, State-Space Methods',
        'content': [
            ('Overview', 'Differential equations model robot dynamics and control. From mass-spring-damper systems to state-space representation, they provide mathematical tools for analysis and design.',
            [('Second-Order ODE', 'Characteristic equation \(ar^2 + br + c = 0\) for roots. Underdamped: \(\zeta < 1\) oscillates. Critical: \(\zeta = 1\) fastest return.'),
            ('Mass-Spring-Damper', '\(m\ddot{x} + c\dot{x} + kx = F(t).\) Dividing: \(\ddot{x} + 2\zeta\omega_n\dot{x} + \omega_n^2 x = F(t)/m.\)'),
            ('Laplace Transform', '\(\mathcal{L}\{f(t)\} = F(s) = \int_0^{\infty}f(t)e^{-st}dt.\) Converts differential equations to algebraic.'),
            ('State-Space', '\(\dot{x} = Ax + Bu,\) \(\hat{y} = Cx + Du.\) A is system matrix, B input matrix.')]),
            ('Quiz', 'M6-Q1:B,M6-Q2:C,M6-Q3:B,M6-Q4:B,M6-Q5:B,M6-Q6:B,M6-Q7:B,M6-Q8:B,M6-Q9:C,M6-Q10:B')
        ]
    },
    '07-kinematics.html': {
        'title': 'KINEMATICS',
        'subtitle': 'Forward and Inverse Kinematics, Jacobian, Workspace',
        'content': [
            ('Overview', 'Kinematics determines how joint angles map to end-effector positions (FK) and what joint angles achieve desired positions (IK). Essential for gait planning and hexapod leg control.',
            [('Forward Kinematics', 'Given joint angles \(\vec{\theta},\) compute end-effector pose \(\vec{x}: \(\vec{x} = f_{FK}(\vec{\theta}).\) Maps joint to task space.'),
            ('Inverse Kinematics', 'Given desired pose \(\vec{x}_{desired},\) compute joint angles: \(\vec{\theta} = f_{IK}^{-1}(\vec{x}_{desired}).\) Mapping from task to joint space.'),
            ('Jacobian', '\(\dot{x} = J(\theta)\dot{\theta}.\) Jacobian relates joint velocities to end-effector velocities. Singularity when \(\det(J) = 0.\)')],
            ('Quiz', 'M7-Q1:B,M7-Q2:B,M7-Q3:C,M7-Q4:B,M7-Q5:B,M7-Q6:B,M7-Q7:B,M7-Q8:C,M7-Q9:B,M7-Q10:B')
        ]
    },
    '08-vibrations-waves.html': {
        'title': 'VIBRATIONS & WAVES',
        'subtitle': 'Free and Forced Vibrations, Resonance, Modal Analysis',
        'content': [
            ('Overview', 'Vibrations affect hexapod structural integrity and sensor accuracy. Understanding natural frequency and resonance ensures robots operate safely without destructive oscillations.',
            [('Free Vibration', 'Natural frequency \(\omega_n = \sqrt{k/m}.\) Underdamped (\(\zeta < 1\)) oscillates with decaying amplitude.'),
            ('Damped Systems', 'Equation \(\ddot{x} + 2\zeta\omega_n\dot{x} + \omega_n^2 x = 0.\) Damping ratio \(\zeta = c/(2\sqrt{mk}).\)'),
            ('Forced Vibration', '\(m\ddot{x} + c\dot{x} + kx = F_0\cos(\omega t).\) Resonance when \(\omega \approx \omega_n\) causes large amplitude.'),
            ('Modal Analysis', 'Solve \((K - \omega^2M)v = 0\) for eigenvalues \(\omega^2\) (natural frequencies) and eigenvectors \(v\) (modes).')]),
            ('Quiz', 'M8-Q1:B,M8-Q2:B,M8-Q3:B,M8-Q4:B,M8-Q5:B,M8-Q6:B,M8-Q7:A,M8-Q8:B,M8-Q9:B,M8-Q10:B')
        ]
    },
    '09-control-theory.html': {
        'title': 'CONTROL THEORY',
        'subtitle': 'Linear Systems, PID Control, Stability Analysis',
        'content': [
            ('Overview', 'Control theory enables hexapods to track trajectories and reject disturbances. PID control is widely used for position and velocity control, with stability analysis ensuring safe operation.',
            [('PID Control', 'Control signal: \(u = K_p e + K_i\int edt + K_d de/dt.\) Proportional responds to current error, integral eliminates steady-state, derivative adds damping.'),
            ('System Stability', 'All poles in left half-plane (LHP) = stable. Any pole in right half-plane (RHP) = unstable. Poles on imaginary axis = marginally stable.'),
            ('Frequency Response', 'Bode plots: 20log|G(jw)| vs frequency and phase vs w. Gain margin > 6 dB, phase margin > 30° for typical design.'),
            ('System Types', 'Type 0: no pole at origin. Type 1: one integrator. Type 2: two integrators. Determines steady-state error characteristics.')]),
            ('Quiz', 'M9-Q1:A,M9-Q2:B,M9-Q3:B,M9-Q4:B,M9-Q5:B,M9-Q6:B,M9-Q7:B,M9-Q8:B,M9-Q9:B,M9-Q10:A,M9-Q11:A,M9-Q12:B')
        ]
    },
    '10-fluid-mechanics.html': {
        'title': 'FLUID MECHANICS',
        'subtitle': 'Bernoulli, Reynolds Number, Drag, Lift',
        'content': [
            ('Overview', 'While less directly applicable to terrestrial hexapods, fluid mechanics informs hydraulic actuation, aerodynamic drag, and thermal convection for cooling systems.',
            [('Bernoulli Equation', 'Along streamline: \(p + \frac{1}{2}\rho v^2 + \rho gh = \text{constant}.\) Pressure + dynamic + gravitational potential.'),
            ('Reynolds Number', '\(Re = \rho v L/\mu.\) Ratio of inertial to viscous. \(Re < 2300\): laminar. \(Re > 4000\): turbulent.'),
            ('Drag Force', '\(F_D = \frac{1}{2}C_D \rho A v^2.\) Aerodynamic drag increases with \(v^2\). Important for high-speed robots.'),
            ('Lift Force', '\(F_L = \frac{1}{2}C_L \rho A v^2.\) Lift coefficient \(C_L\) depends on airfoil shape.')]),
            ('Quiz', 'M10-Q1:B,M10-Q2:B,M10-Q3:B,M10-Q4:B,M10-Q5:A,M10-Q6:A,M10-Q7:B,M10-Q8:B,M10-Q9:B,M10-Q10:B')
        ]
    },
    '11-thermodynamics.html': {
        'title': 'THERMODYNAMICS',
        'subtitle': 'Heat Transfer, Thermal Management, Energy Conversion',
        'content': [
            ('Overview', 'Thermal management prevents overheating of motors and electronics. Understanding heat transfer mechanisms ensures reliable operation under various loads and environmental conditions.',
            [('First Law', '\(\Delta U = Q - W.\) Change in internal energy = heat added minus work done by system.'),
            ('Heat Transfer Modes', 'Conduction: \(q = -k dT/dx\) (Fourier\'s Law). Convection: \(q = hA(T_s - T_f)\) (Newton\'s Law of Cooling). Radiation: \(P = \varepsilon\sigma A T^4\) (Stefan-Boltzmann).'),
            ('Motor Heating', 'Power loss \(P_{loss} = I^2 R\) in windings becomes heat. Continuous operation requires thermal design.'),
            ('Heatsinks', 'Increase surface area for convection. Material: aluminum, copper (high \(k\)). Lower component temperature.')]),
            ('Quiz', 'M11-Q1:A,M11-Q2:B,M11-Q3:B,M11-Q4:A,M11-Q5:B,M11-Q6:A,M11-Q7:B,M11-Q8:B,M11-Q9:A,M11-Q10:C')
        ]
    },
    '12-hexapod-design.html': {
        'title': 'HEXAPOD DESIGN & GAIT PLANNING',
        'subtitle': 'Leg Kinematics, Gait Patterns, Stability Analysis',
        'content': [
            ('Overview', 'This module combines all prior knowledge, focusing on hexapod-specific design: leg kinematics, gait patterns, static stability, and terrain adaptation strategies.',
            [('Leg Kinematics', 'Hexapod has 18 DOFs: 6 legs × 3 joints. Three-joint leg provides position control in x,y,z. Inverse kinematics: desired foot position \((x,y,z)\) → joint angles.'),
            ('Gait Patterns', 'Tripod gait: two alternating groups of 3 legs. Groups (1,4,5) and (2,3,6). At any time, 3 legs on ground forming stable triangle.'),
            ('Static Stability', 'Support polygon: convex hull of all ground contact points. COM projection must fall within polygon. Tripod gait: alternating triangles maintain stability.'),
            ('Body Motion', 'When body translates by \([x,y,z]^T\) and rotates by \([roll,pitch,yaw]^T,\) all six feet synchronously adjust to maintain relative positions.')]),
            ('Quiz', 'M12-Q1:B,M12-Q2:B,M12-Q3:B,M12-Q4:B,M12-Q5:B,M12-Q6:B,M12-Q7:B,M12-Q8:B,M12-Q9:B,M12-Q10:B')
        ]
    },
    '13-final.html': {
        'title': 'REVIEW & FINAL ASSESSMENT',
        'subtitle': 'Comprehensive Evaluation & Course Completion',
        'content': [
            ('Overview', 'Congratulations on completing all 12 modules! This final module provides comprehensive review and final assessment. Successful completion demonstrates mastery of hexapod robot engineering fundamentals.',
            [('Review Topics', 'Module 1-12 cover Math, Mechanics, Electronics, Control, and Design. Key concepts: vectors, matrices, Newton\'s laws, \(F = ma,\) circuits, motors, PID control, stability, kinematics, vibrations, thermodynamics, hexapod gaits.'),
            ('Formula Sheet', 'Newton: \(\sum F = ma,\) \(\sum \tau = I\alpha.\) PID: \(u = K_p e + K_i\int e + K_d de/dt.\) Natural freq: \(\omega_n = \sqrt{k/m}.\) Damping: \(\zeta = c/(2\sqrt{mk}).\)'),
            ('Final Exam', '25 comprehensive questions. 80% to pass. Covers all modules.)'),
            ('Quiz', 'FINAL-Q1:B,FINAL-Q2:C,FINAL-Q3:A,FINAL-Q4:B,FINAL-Q5:B,FINAL-Q6:A,FINAL-Q7:B,FINAL-Q8:B,FINAL-Q9:A,FINAL-Q10:A,FINAL-Q11:B,FINAL-Q12:B,FINAL-Q13:B,FINAL-Q14:B,FINAL-Q15:B,FINAL-Q16:B,FINAL-Q17:A,FINAL-Q18:C,FINAL-Q19:A,FINAL-Q20:A,FINAL-Q21:B,FINAL-Q22:B,FINAL-Q23:B,FINAL-Q24:B,FINAL-Q25:B', 'final')
        ]
    }
}

def create_module_file(filename, module_data):
    """Create a complete module HTML file"""
    title = module_data['title']
    subtitle = module_data['subtitle']
    content_sections = module_data['content']

    prev_module = get_filename_by_number(filename[:2], -1)
    next_module = get_filename_by_number(filename[:2], 1)

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{filename[:-5].replace('-', ' ').upper()}</title>
    <link rel="stylesheet" href="../css/styles.css">
    <script>
    MathJax = {{tex: {{inlineMath: [['\\\\(','\\\\)']], displayMath: [['$$','$$'], ['\\\\[','\\\\]']]}}}};
    </script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <script src="../js/navigation.js"></script>
    <script src="../js/problems.js"></script>
    <script src="../js/quizzes.js"></script>
</head>
<body>
    <header>
        <div class="header-content">
            <h1>MODULE {filename[:2]}: {title}</h1>
            <p class="subtitle">{subtitle}</p>
        </div>
    </header>

    <main class="container">
        <div class="progress-container">
            <div class="progress-bar"></div>
            <div class="progress-text">0% Complete</div>
        </div>
'''

    for section in content_sections:
        if section[0] == 'Overview':
            html += f'''
        <section class="content-section" id="overview">
            <h2>Module Overview</h2>
            <p>{escape_html(section[1])}</p>
            <div class="org-box"><h3>Key Concepts</h3><ul>
'''
            if section[1]:  # Add general description
                html += f'''                <li>{escape_html(section[1])}</li>
'''
        elif section[0] == 'Review':
            html += f'''
        <section class="content-section" id="review">
            <h2>Section {filename[:2]}.1: Comprehensive Review</h2>
            <p>{escape_html(section[1])}</p>
'''
        else:
    for subsection in section[1]:
        subsection_title, subsection_content = subsection
        html += f'            <li><strong>{escape_html(subsection_title)}:</strong> {escape_html(subsection_content)}</li>\n'

        if section[0] == 'Overview':
            html += '''            </ul></div>
        </section>
'''
        else:
            html += '''        </section>
'''

    html += '''        <section class="quiz-section">
            <h2>Module Quiz</h2>
            <p>Answer all questions and click "Submit" when complete. You need 70% to pass.</p>
            <div id="quiz-container"></div>
            <button class="submit" onclick="''' + f'module{filename[:2]}Quiz()' + '''">Submit Quiz</button>
            <div id="quiz-results"></div>
        </section>

        <div class="nav-buttons">
''' + (f'            <button class="secondary" onclick="navigateTo(\'{prev_module}\')">Previous Module</button>\n' if prev_module else '') + f'''            <button onclick="navigateTo('{next_module}')">Next Module</button>
        </div>
    </main>

    <footer>
        <p>Hexapod Robot Engineering Course - Module {filename[:2]}</p>
    </footer>

    <script>
        function module''' + filename[:2] + '''Quiz() {
            const correctAnswers = {
'''

    # Quiz data
    quiz_section = content_sections[-1]
    if quiz_section[0] == 'Quiz':
        quiz_data = quiz_section[1].split(',')
        for i, ans in enumerate(quiz_data):
            q_id, correct = ans.split(':')
            html += f"                '{q_id}': '{correct}',\n"

    html += f'''            }};
            const result = submitQuiz('{filename[:2]}', correctAnswers);
            if (result.percentage >= 70) markModuleComplete('{filename[:2]}');
        }

        window.addEventListener('load', function() {{
            const container = document.getElementById('quiz-container');
            quizQuestions.module{filename[:2] if filename[:3] != 'fin' else 'final'}.forEach((q) => {{
                let optionsHtml = '';
                q.options.forEach(opt => optionsHtml += `<label><input type="radio" name="${{q.id}}" value="${{opt.substring(0,1)}}">${{opt}}</label>`);
                const html = `<div class="quiz-question"><div class="question-text">${{q.question}}</div><div class="options">${{optionsHtml}}</div><div id="explanation-${{q.id}}" class="explanation">${{q.explanation}}</div></div>`;
                container.innerHTML += html;
            }});
            updateProgressBar();
        }});
    </script>
</body>
</html>
'''

    with open(filename, 'w') as f:
        f.write(html)

def get_filename_by_number(num, offset):
    """Get filename by module number with offset (-1 or 1)"""
    try:
        n = int(num) + offset
        if n < 1:
            return '../index.html'
        modules_list = ['01-foundations', '02-statics-dynamics', '03-electricity-magnetism',
                       '04-circuits-electronics', '05-materials-science', '06-differential-equations',
                       '07-kinematics', '08-vibrations-waves', '09-control-theory', '10-fluid-mechanics',
                       '11-thermodynamics', '12-hexapod-design', '13-final']
        return modules_list[n-1] + '.html'
    except:
        return '../index.html'

def escape_html(text):
    """Escape HTML characters"""
    return text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')

# Create all modules
for filename, data in modules.items():
    print(f"Creating {filename}...")
    create_module_file(filename, data)

print("\nDone! All modules have been regenerated with proper inline math formatting.")