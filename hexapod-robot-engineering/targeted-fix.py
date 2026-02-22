#!/usr/bin/env python3
import glob

# Specific pattern replacements based on what was found

replacements = [
    # Pattern: \( \vec{something} with/during/etc
    ('\\(\\vec{F} with', '\\(\\vec{F}\\) with'),
    ('\\(\\vec{F} about', '\\(\\vec{F}\\) about'),
    ('\\(\\vec{r} re', '\\(\\vec{r}\\) re'),
    ('\\(\\vec{p}', '\\(\\vec{p}\\)'),

    # Greek letters
    ('\\(\\hat{i}, \\(\\hat{j}, \\(\\hat{k}', '\\(\\hat{i}\\), \\(\\hat{j}\\), \\(\\hat{k}\\)'),
    ('\\(\\theta is', '\\(\\theta\\) is'),
    ('\\(\\theta is the', '\\(\\theta\\) is the'),
    ('\\(\\theta:', '\\(\\theta\\)'),
    ('\\(\\theta:', '\\(\\theta\\)'),
    ('\\(\\lambda', '\\(\\lambda\\)'),
    ('\\(\\omega', '\\(\\omega\\)'),
    ('\\(\\omega_n', '\\(\\omega_n\\)'),
    ('\\(\\omega_n =', '\\(\\omega_n\\) ='),
    ('\\(\\rho', '\\(\\rho\\)'),
    ('\\(\\sigma', '\\(\\sigma\\)'),
    ('\\(\\sigma_y', '\\(\\sigma_y\\)'),
    ('\\(\\sigma_{UTS}', '\\(\\sigma_{UTS}\\)'),
    ('\\(\\sigma_f', '\\(\\sigma_f\\)'),
    ('\\(\\sigma_e', '\\(\\sigma_e\\)'),
    ('\\(\\phi', '\\(\\phi\\)'),
    ('\\(\\zeta', '\\(\\zeta\\)'),
    ('\\(\\zeta =', '\\(\\zeta\\) ='),
    ('\\(\\zeta <', '\\(\\zeta\\) <'),
    ('\\(\\zeta = 1', '\\(\\zeta\\) = 1'),
    ('\\(\\zeta >', '\\(\\zeta\\) >'),
    ('\\(\\alpha', '\\(\\alpha\\)'),
    ('\\(\\alpha \\pm', '\\(\\alpha\\) \\pm'),
    ('\\(\\beta', '\\(\\beta\\)'),
    ('\\(\\mu', '\\(\\mu\\)'),
    ('\\(\\mu_0', '\\(\\mu_0\\)'),
    ('\\(\\tau', '\\(\\tau\\)'),
    ('\\(\\tau =', '\\(\\tau\\) ='),
    ('\\(\\varepsilon', '\\(\\varepsilon\\)'),
    ('\\(\\varepsilon =', '\\(\\varepsilon\\)'),

    # Vectors
    ('\\(\\vec{F} about', '\\(\\vec{F}\\) about'),
    ('\\(\\vec{F} at', '\\(\\vec{F}\\) at'),
    ('\\(\\vec{F} =', '\\(\\vec{F}\\) ='),
    ('\\(\\vec{A}', '\\(\\vec{A}\\)'),
    ('\\(\\vec{B}', '\\(\\vec{B}\\)'),
    ('\\(\\vec{x}', '\\(\\vec{x}\\)'),
    ('\\(\\vec{y}', '\\(\\vec{y}\\)'),
    ('\\(\\vec{u}', '\\(\\vec{u}\\)'),
    ('\\(\\vec{v}', '\\(\\vec{v}\\)'),
    ('\\(\\vec{p}', '\\(\\vec{p}\\) = m\\ve'),  # Partial match
    ('\\(\\vec{m} poi', '\\(\\vec{m}\\) poi'),
    ('\\(\\vec{\\tau} =', '\\(\\vec{\\tau}\\) ='),
    ('\\(\\vec{\\tau}|', '\\(\\vec{\\tau}\\)|'),

    # Expressions
    ('\\(\\sum \\vec{F} = \\vec{0} (net fo', '\\(\\sum \\vec{F} = \\vec{0}\\) (net fo'),
    ('\\(\\sum \\vec{F} = \\frac{d\\vec{p}}{dt}, where', '\\(\\sum \\vec{F} = \\frac{d\\vec{p}}{dt}\\), where'),
    ('\\(\\sum \\vec{\\tau} = \\vec{0} (net mo', '\\(\\sum \\vec{\\tau} = \\vec{0}\\) (net mo'),
    ('\\(N = 60/6 = 10 N (vertical upward)', '\\(N = 60/6 = 10 N\\) (vertical upward)'),
    ('\\(6 \\times 10 N up = 60 N, which', '\\(6 \\times 10 N up = 60 N\\), which'),
    ('\\(6 \\times 10 N up = 60 N, which balances gravity', '\\(6 \\times 10 N up = 60 N\\), which balances gravity'),
    ('\\(|\\vec{\\tau}| = rF\\sin(', '\\(|\\vec{\\tau}| = rF\\sin(\\theta\\)'),
    ('\\(r is perpendicular', '\\(r\\) is perpendicular'),
    ('\\(I d\\vec{L}', '\\(I d\\vec{L}\\)'),

    # Equations
    ('\\(I = d', '\\(I = d\\) d'),
    ('\\(V = IR, Kirchhoff', '\\(V = IR\\), Kirchhoff'),
    ('\\(V = IR, Kirchhoff\'s laws', '\\(V = IR\\), Kirchhoff\'s laws'),
    ('\\(\\tau = K_t I, Back-EMF', '\\(\\tau = K_t I\\), Back-EMF'),
    ('\\(\\varepsilon = K_e \\omega', '\\(\\varepsilon = K_e \\omega\\)'),
    ('\\(\\vec{B}:', '\\(\\vec{B}\\):'),
    ('\\(\\vec{B})</h3>', '\\(\\vec{B}\\)</h3>'),

    # Material properties
    ('\\(\\sigma_y):</strong>', '\\(\\sigma_y\\)):</strong>'),
    ('\\(\\sigma_{UTS}):</strong>', '\\(\\sigma_{UTS}\\)):</strong>'),
    ('\\(\\sigma_f):</strong>', '\\(\\sigma_f\\)):</strong>'),
    ('\\(\\sigma_e)</span>', '\\(\\sigma_e\\)</span>'),
    ('\\(E = \\sigma/\\varepsilon (stiffness)', '\\(E = \\sigma/\\varepsilon\\) (stiffness)'),
    ('\\(\\varepsilon = \\Delta L/L', '\\(\\varepsilon = \\Delta L/L\\)'),
    ('\\(\\sigma = F/A, strain', '\\(\\sigma = F/A\\), strain'),
    ('\\(\\varepsilon = \\Delta L/L', '\\(\\varepsilon = \\Delta L/L\\)'),
    ('\\(E = \\sigma/\\varepsilon (stiffness)', '\\(E = \\sigma/\\varepsilon\\) (stiffness)'),
    ('\\(\\sigma = F/A, strain', '\\(\\sigma = F/A\\), strain'),

    # Control theory
    ('\\(u = K_p e + K_i', '\\(u = K_p e + K_i'),
    ('\\(\\dot{x} = A\\vec{x} + B\\vec{u}', '\\(\\dot{x} = A\\vec{x} + B\\vec{u}\\)'),
    ('\\(\\vec{y} = C\\vec{x} + D\\vec{u}', '\\(\\vec{y} = C\\vec{x} + D\\vec{u}\\)'),
    ('\\(\\vec{x} is state', '\\(\\vec{x}\\) is state'),
    ('\\(\\vec{u} is input', '\\(\\vec{u}\\) is input'),
    ('\\(\\vec{y} is outp', '\\(\\vec{y}\\) is outp'),
    ('\\(\\zeta < 1 underdamped, \\(\\zeta = 1 critical', '\\(\\zeta < 1\\) underdamped, \\(\\zeta = 1\\) critical'),
    ('\\(\\dot{x} = J\\dot{\\theta}', '\\(\\dot{x} = J\\dot{\\theta}\\)'),
    ('\\(\\zeta = c/(2\\sqrt{mk})', '\\(\\zeta = c/(2\\sqrt{mk})\\'),

    # Differential equations
    ('\\(a\\frac{dy}{dx} + by = f(x)</p>', '\\(a\\frac{dy}{dx} + by = f(x)\\)</p>'),
    ('\\(f(x) = 0): \\(a\\frac{dy}{dx} + by = 0', '\\(f(x) = 0\\): \\(a\\frac{dy}{dx} + by = 0\\)'),
    ('\\(\\frac{dP}{dt} = kP. Solution:', '\\(\\frac{dP}{dt} = kP\\). Solution:'),
    ('\\(P(t) = P_0 e^{kt}. Exponential', '\\(P(t) = P_0 e^{kt}\\). Exponential'),
    ('\\(a\\frac{d^2y}{dt^2} + b', '\\(a\\frac{d^2y}{dt^2} + b\\)'),
    ('\\(ar^2 + br + c = 0 for roots', '\\(ar^2 + br + c = 0\\) for roots'),
    ('\\(r_1, r_2: \\(y(t) =', '\\(r_1, r_2\\): \\(y(t) ='),
    ('\\(y(t) = (C_1 + C_2 t)e^{rt}</li>', '\\(y(t) = (C_1 + C_2 t)e^{rt}\\)</li>'),
    ('\\(\\alpha \\pm i\\beta:', '\\(\\alpha \\pm i\\beta\\)'),
    ('\\(y(t) = e^{\\alpha t}(C_1 \\cos', '\\(y(t) = e^{\\alpha t}(C_1 \\cos\\)'),
    ('\\(\\omega_n = \\sqrt{\\frac{k}{}} is', '\\(\\omega_n = \\sqrt{\\frac{k}{}}\\) is'),
    ('\\(\\zeta = \\frac{c}{2\\sqrt{mk}}', '\\(\\zeta = \\frac{c}{2\\sqrt{mk}}\\)'),
    ('\\(\\omega_n = \\sqrt{\\frac{k}{m}} is natural', '\\(\\omega_n = \\sqrt{\\frac{k}{m}}\\) is natural'),

    # Vibrations
    ('\\(m\\ddot{x} + kx = 0. Solution:', '\\(m\\ddot{x} + kx = 0\\). Solution:'),
    ('\\(x(t) = A\\cos(', '\\(x(t) = A\\cos(\\omega_n t) + B\\sin(\\omega_n t)'),

    # Coordinate systems
    ('\\((x, y, z) in body', '\\((x, y, z)\\) in body'),
    ('\\((x, y, z) is represented', '\\((x, y, z)\\) is represented'),
    ('\\((\\rho, \\theta, \\phi)', '\\((\\rho, \\theta, \\phi)\\)'),
    ('\\((\\rho, \\theta, \\phi) where:', '\\((\\rho, \\theta, \\phi)\\) where:'),
    ('\\((x, y, z, 1). Homogeneous', '\\((x, y, z, 1)\\). Homogeneous'),

    # Fluid mechanics
    ('\\(\\rho):</span>', '\\(\\rho\\)</span>'),
    ('\\(\\mu):</span>', '\\(\\mu\\)</span>'),
    ('\\(Re = \\rho v L/\\mu (laminar', '\\(Re = \\rho v L/\\mu\\) (laminar'),

    # Electronics
    ('\\(R_2 to avoid', '\\(R_2\\) to avoid'),
    ('\\(A_{OL} is open-loop', '\\(A_{OL}\\) is open-loop'),
    ('\\(= R_f/R_{in}. Negative', '\\(= R_f/R_{in}\\). Negative'),
    ('\\(\\geq 1 (always', '\\(\\geq 1\\) (always'),
    ('\\(V_{GS} < V_{th}: channel', '\\(V_{GS} < V_{th}\\): channel'),
    ('\\(V_{GS} > V_{th}, V_{DS} <', '\\(V_{GS} > V_{th}\\), V_{DS} <'),
    ('\\(V_{GS} > V_{th}, V_{DS} >', '\\(V_{GS} > V_{th}\\), V_{DS} >'),
]

for filename in glob.glob("lessons/*.html"):
    with open(filename, 'r') as f:
        content = f.read()

    original = content
    for old, new in replacements:
        content = content.replace(old, new)

    if content != original:
        print(f"Fixed {filename}")
        with open(filename, 'w') as f:
            f.write(content)
    else:
        print(f"No changes: {filename}")