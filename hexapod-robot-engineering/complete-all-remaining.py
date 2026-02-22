#!/usr/bin/env python3

"""Complete all remaining module HTML files (4-13) with proper formatting"""

def get_module_template(num, title, subtitle, sections):
    """Generate complete HTML for a module"""
    prev_num = num - 1 if num > 1 else None

def create_module(num, title, subtitle, sections):
    prev_file = f'module{num-1}.html' if num > 1 else '../index.html'  
    next_file = f'module{num+1}.html' if num < 13 else '13-final.html'

    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Module {num}: {title}</title>
<link rel="stylesheet" href="../css/styles.css">
<script>
MathJax = {{tex: {{inlineMath: [['\\\\(','\\\\)']], displayMath: [['$$','$$']]}}}};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script src="../js/navigation.js"></script>
<script src="../js/problems.js"></script>
<script src="../js/quizzes.js"></script>
</head>
<body>
<header>
<div class="header-content">
<h1>MODULE {num}: {title}</h1>
<p class="subtitle">{subtitle}</p>
</div>
</header>
<main class="container">
<div class="progress-container">
<div class="progress-bar"></div>
<div class="progress-text">0% Complete</div>
</div>
'''

for section in sections:
    html += f'<section class="content-section" id="{section.lower().replace(" ","-")}"><h2>{section}</h2>'
    html += f'<p>Content for {section} coming soon. Inline math test: \\(E = mc^2\\)</p></section>'

html += '''<section class="quiz-section">
<h2>Module Quiz</h2>
<div id="quiz-container"></div>
<button class="submit" onclick="module'''+str(num)'''Quiz()">Submit Quiz</button>
<div id="quiz-results"></div>
</section>
<div class="nav-buttons">'''

if prev_num > 0:
    html += f'<button class="secondary" onclick="navigateTo(\'{num-1}.html\')">Previous</button>'

html += f'<button onclick="navigateTo(\'{num+1}.html\')">Next</button>
</div></main><footer><p>Module {num}</p></footer>
<script>
function module'''+str(num)'''Quiz() {{ result = submitQuiz(\"'''+str(num)+'''\"); }}
window.addEventListener("load", function() {{ updateProgressBar(); }});
</script></body></html>'''

return html

# Create simplified versions of modules 4-13
modules = [
    (4, "Circuits & Electronics", "Analog & Digital Circuits", ["Overview", "Op-Amps", "Digital Logic", "Power Electronics"]),
    (5, "Materials Science", "Stress & Strain", ["Overview", "Material Properties", "Stress-Strain Curve", "Fatigue"]),
    (6, "Differential Equations", "ODEs & Laplace Transforms", ["Overview", "Second-Order ODE", "Mass-Spring-Damper", "State-Space"]),
    (7, "Kinematics", "Forward & Inverse Kinematics", ["Overview", "Forward Kinematics", "Inverse Kinematics", "Jacobian"]),
    (8, "Vibrations & Waves", "Free & Forced Vibrations", ["Overview", "Natural Frequency", "Damping", "Resonance"]),
    (9, "Control Theory", "PID & Stability", ["Overview", "PID Control", "Stability", "Frequency Response"]),
    (10, "Fluid Mechanics", "Bernoulli & Drag", ["Overview", "Bernoulli", "Reynolds Number", "Drag & Lift"]),
    (11, "Thermodynamics", "Heat Transfer", ["Overview", "First Law", "Heat Transfer Modes", "Thermal Design"]),
    (12, "Hexapod Design", "Legs & Gaits", ["Overview", "Leg Kinematics", "Gait Patterns", "Stability"]),
    (13, "Final Assessment", "Comprehensive Review", ["Overview", "Review", "Formula Sheet", "Final Exam"])
]

for num, title, subtitle, section_titles in modules:
    filename = f'lessons/{num:02d}-{title.split()[0].lower()}.html'
    if not filename in lessons:
        print(f"Note: Using fallback filename format")
        filename = f'lessons/module{num}.html'

    html = create_module(num, title, subtitle, section_titles)
    with open(filename, 'w') as f:
        f.write(html)
    print(f"Created {filename}")

print("All modules created successfully!")
