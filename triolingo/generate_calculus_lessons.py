#!/usr/bin/env python3
"""
Generate TRIOlingO Calculus Lessons
Creates comprehensive calculus lessons with 15-20 questions each,
using seaborn for elegant colored diagrams.
"""

import json
import os
import random
import math
import matplotlib
matplotlib.use('Agg')  # Use non-interactive backend
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Set style
sns.set_style("whitegrid")
sns.set_palette("husl")

# Paths
TRIO_DIR = "/home/samueldnvn4/.openclaw/workspace/triolingo"
LESSONS_FILE = os.path.join(TRIO_DIR, "lessons.json")
DIAGRAMS_DIR = os.path.join(TRIO_DIR, "diagrams")

# Color palettes for diagrams
COLOR_PALETTES = [
    ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
    ['#A8E6CF', '#DCEDC1', '#FFD3B6', '#FF8B94', '#FFAAA5'],
    ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'],
    ['#11998e', '#38ef7d', '#00b4db', '#0083b0', '#f857a6'],
    ['#ee0979', '#ff6a00', '#6a11cb', '#2575fc', '#00f260']
]

def ensure_diagrams_dir():
    """Ensure diagrams directory exists"""
    os.makedirs(DIAGRAMS_DIR, exist_ok=True)

def generate_limit_diagram(question_id, limit_value, function_expr, x_range=(-5, 5)):
    """Generate a limit diagram with function approaching a point"""
    ensure_diagrams_dir()
    colors = random.choice(COLOR_PALETTES)

    x = np.linspace(x_range[0], x_range[1], 1000)
    # Parse simple functions
    if 'x^2' in function_expr:
        y = x**2
    elif 'x^3' in function_expr:
        y = x**3
    elif '2x' in function_expr:
        y = 2*x
    elif 'x+3' in function_expr:
        y = x + 3
    elif 'sin' in function_expr:
        y = np.sin(x)
    elif 'cos' in function_expr:
        y = np.cos(x)
    else:
        y = x**2  # Default

    fig, ax = plt.subplots(figsize=(10, 6))
    ax.plot(x, y, color=colors[0], linewidth=3, label=f'f(x) = {function_expr}')

    # Highlight the limit point
    ax.axvline(x=limit_value, color=colors[1], linestyle='--', linewidth=2, alpha=0.7)
    ax.scatter([limit_value], [np.interp(limit_value, x, y)],
              color=colors[2], s=200, zorder=5, edgecolor='black', linewidth=2)

    # Add arrows approaching from left and right
    ax.annotate('', xy=(limit_value - 0.5, np.interp(limit_value - 0.5, x, y)),
                xytext=(limit_value - 1.5, np.interp(limit_value - 1.5, x, y)),
                arrowprops=dict(arrowstyle='->', color=colors[3], lw=2))
    ax.annotate('', xy=(limit_value + 0.5, np.interp(limit_value + 0.5, x, y)),
                xytext=(limit_value + 1.5, np.interp(limit_value + 1.5, x, y)),
                arrowprops=dict(arrowstyle='->', color=colors[3], lw=2))

    ax.set_xlabel('x', fontsize=12)
    ax.set_ylabel('f(x)', fontsize=12)
    ax.set_title(f'Limit: lim(x→{limit_value}) f(x)', fontsize=14, fontweight='bold')
    ax.grid(True, alpha=0.3)
    ax.legend(loc='upper right', fontsize=10)

    plt.tight_layout()
    output_path = os.path.join(DIAGRAMS_DIR, f'{question_id}.png')
    plt.savefig(output_path, dpi=150, bbox_inches='tight', facecolor='white')
    plt.close()
    return output_path

def generate_derivative_diagram(question_id, function_expr, tangent_point):
    """Generate a derivative diagram with tangent line"""
    ensure_diagrams_dir()
    colors = random.choice(COLOR_PALETTES)

    x = np.linspace(-5, 5, 1000)
    if 'x^2' in function_expr:
        y = x**2
        slope = 2 * tangent_point
    elif 'x^3' in function_expr:
        y = x**3
        slope = 3 * (tangent_point**2)
    elif 'sin' in function_expr:
        y = np.sin(x)
        slope = np.cos(tangent_point)
    elif 'cos' in function_expr:
        y = np.cos(x)
        slope = -np.sin(tangent_point)
    else:
        y = x**2
        slope = 2 * tangent_point

    y_at_point = np.interp(tangent_point, x, y)

    # Tangent line: y - y0 = m(x - x0) => y = m(x - x0) + y0
    tangent_x = np.linspace(tangent_point - 2, tangent_point + 2, 100)
    tangent_y = slope * (tangent_x - tangent_point) + y_at_point

    fig, ax = plt.subplots(figsize=(10, 6))
    ax.plot(x, y, color=colors[0], linewidth=3, label=f'f(x) = {function_expr}')
    ax.plot(tangent_x, tangent_y, color=colors[1], linewidth=3, linestyle='--',
            label=f'Tangent line (slope = {slope:.2f})')

    ax.scatter([tangent_point], [y_at_point],
              color=colors[2], s=200, zorder=5, edgecolor='black', linewidth=2)

    ax.set_xlabel('x', fontsize=12)
    ax.set_ylabel('f(x)', fontsize=12)
    ax.set_title(f'Derivative at x = {tangent_point}', fontsize=14, fontweight='bold')
    ax.grid(True, alpha=0.3)
    ax.legend(loc='upper right', fontsize=10)

    plt.tight_layout()
    output_path = os.path.join(DIAGRAMS_DIR, f'{question_id}.png')
    plt.savefig(output_path, dpi=150, bbox_inches='tight', facecolor='white')
    plt.close()
    return output_path

def generate_integral_diagram(question_id, function_expr, bounds):
    """Generate an integral diagram showing area under curve"""
    ensure_diagrams_dir()
    colors = random.choice(COLOR_PALETTES)

    x = np.linspace(bounds[0] - 1, bounds[1] + 1, 1000)
    if 'x^2' in function_expr:
        y = x**2
    elif 'x' == function_expr:
        y = x
    elif 'sin' in function_expr:
        y = np.sin(x)
    elif '2x' in function_expr:
        y = 2*x
    else:
        y = x**2

    # Create shaded region
    x_shade = np.linspace(bounds[0], bounds[1], 500)
    y_shade = np.interp(x_shade, x, y)

    fig, ax = plt.subplots(figsize=(10, 6))
    ax.plot(x, y, color=colors[0], linewidth=3, label=f'f(x) = {function_expr}')
    ax.fill_between(x_shade, 0, y_shade, alpha=0.5, color=colors[1], label='Area under curve')

    # Mark the bounds
    ax.axvline(x=bounds[0], color=colors[2], linestyle='--', linewidth=2, alpha=0.7)
    ax.axvline(x=bounds[1], color=colors[2], linestyle='--', linewidth=2, alpha=0.7)

    ax.set_xlabel('x', fontsize=12)
    ax.set_ylabel('f(x)', fontsize=12)
    ax.set_title(f'Integral: ∫({bounds[0]} to {bounds[1]}) f(x) dx', fontsize=14, fontweight='bold')
    ax.grid(True, alpha=0.3)
    ax.legend(loc='upper right', fontsize=10)

    plt.tight_layout()
    output_path = os.path.join(DIAGRAMS_DIR, f'{question_id}.png')
    plt.savefig(output_path, dpi=150, bbox_inches='tight', facecolor='white')
    plt.close()
    return output_path

def generate_rates_diagram(question_id, data_points):
    """Generate a rate of change diagram"""
    ensure_diagrams_dir()
    colors = random.choice(COLOR_PALETTES)

    x = np.array(data_points['x'])
    y = np.array(data_points['y'])

    fig, ax = plt.subplots(figsize=(10, 6))
    ax.plot(x, y, color=colors[0], linewidth=3, marker='o', markersize=8,
            label='Position over time')

    # Draw slope arrows showing rate of change
    for i in range(len(x) - 1):
        dx = x[i+1] - x[i]
        dy = y[i+1] - y[i]
        mid_x = (x[i] + x[i+1]) / 2
        mid_y = (y[i] + y[i+1]) / 2
        slope = dy / dx
        ax.annotate('', xy=(mid_x + 0.3, mid_y + 0.3 * slope),
                    xytext=(mid_x - 0.3, mid_y - 0.3 * slope),
                    arrowprops=dict(arrowstyle='->', color=colors[1], lw=2))

    ax.set_xlabel('Time (t)', fontsize=12)
    ax.set_ylabel('Position (s)', fontsize=12)
    ax.set_title('Rate of Change: Velocity', fontsize=14, fontweight='bold')
    ax.grid(True, alpha=0.3)
    ax.legend(loc='upper right', fontsize=10)

    plt.tight_layout()
    output_path = os.path.join(DIAGRAMS_DIR, f'{question_id}.png')
    plt.savefig(output_path, dpi=150, bbox_inches='tight', facecolor='white')
    plt.close()
    return output_path

def generate_optimization_diagram(question_id, scenario, optimal_point):
    """Generate an optimization diagram"""
    ensure_diagrams_dir()
    colors = random.choice(COLOR_PALETTES)

    x = np.linspace(0, 10, 1000)
    if 'area' in scenario.lower():
        y = -(x - optimal_point)**2 + optimal_point**2  # Inverted parabola
        ylabel = 'Area'
    else:
        y = -(x - optimal_point)**2 + 25  # Generic
        ylabel = 'Objective Function'

    fig, ax = plt.subplots(figsize=(10, 6))
    ax.plot(x, y, color=colors[0], linewidth=3, label='Objective Function')

    # Mark optimal point
    optimal_y = -(optimal_point - optimal_point)**2 + (optimal_point**2 if 'area' in scenario.lower() else 25)
    ax.scatter([optimal_point], [optimal_y], color=colors[1], s=300,
              zorder=5, edgecolor='black', linewidth=3, label='Optimum')

    # Draw lines to optimum
    ax.axvline(x=optimal_point, color=colors[2], linestyle='--', linewidth=2, alpha=0.7)
    ax.axhline(y=optimal_y, color=colors[2], linestyle='--', linewidth=2, alpha=0.7)

    ax.set_xlabel('Variable', fontsize=12)
    ax.set_ylabel(ylabel, fontsize=12)
    ax.set_title('Optimization Problem', fontsize=14, fontweight='bold')
    ax.grid(True, alpha=0.3)
    ax.legend(loc='upper right', fontsize=10)

    plt.tight_layout()
    output_path = os.path.join(DIAGRAMS_DIR, f'{question_id}.png')
    plt.savefig(output_path, dpi=150, bbox_inches='tight', facecolor='white')
    plt.close()
    return output_path

def create_multiple_choice_question(qid, question, options, correct, xp=3, diagram_path=None):
    """Create a multiple choice question"""
    q = {
        "id": qid,
        "type": "multiple-choice",
        "question": question,
        "options": options,
        "correct": correct,
        "xp": xp
    }
    if diagram_path:
        q["image"] = os.path.basename(diagram_path)
    return q

def create_typing_question(qid, question, correct_answers, xp=5, diagram_path=None):
    """Create a typing question"""
    q = {
        "id": qid,
        "type": "typing",
        "question": question,
        "correctAnswer": correct_answers if isinstance(correct_answers, list) else [correct_answers],
        "xp": xp
    }
    if diagram_path:
        q["image"] = os.path.basename(diagram_path)
    return q

def create_fill_blank_question(qid, question, correct_word, xp=4, diagram_path=None):
    """Create a fill-in-the-blank question"""
    q = {
        "id": qid,
        "type": "fill-blank",
        "question": question,
        "correctWord": correct_word,
        "options": [correct_word, "Option2", "Option3", "Option4"],
        "correct": 0,
        "xp": xp
    }
    if diagram_path:
        q["image"] = os.path.basename(diagram_path)
    return q

# ===== UNIT 1: Introduction to Limits =====
def generate_unit1_lesson1():
    """Lesson: Understanding Limits"""
    lesson_id = "1-1"
    questions = []

    # Question 1 - Multiple choice with diagram
    qid = f"calc_u1_l1_q1"
    diagram = generate_limit_diagram(qid, 2, "x^2")
    questions.append(create_multiple_choice_question(
        qid,
        "What is the value of lim(x→2) x²?",
        ["3", "4", "5", "6"],
        1, 4, diagram
    ))

    # Question 2 - Typing
    qid = f"calc_u1_l1_q2"
    questions.append(create_typing_question(
        qid,
        "Evaluate: lim(x→0) x = ?",
        ["0", "zero"], 5
    ))

    # Question 3 - Multiple choice with diagram
    qid = f"calc_u1_l1_q3"
    diagram = generate_limit_diagram(qid, 3, "2x")
    questions.append(create_multiple_choice_question(
        qid,
        "What is lim(x→3) 2x?",
        ["5", "6", "7", "8"],
        1, 4, diagram
    ))

    # Question 4 - Typing
    qid = f"calc_u1_l1_q4"
    questions.append(create_typing_question(
        qid,
        "Evaluate: lim(x→1) x³ = ?",
        ["1", "one"], 5
    ))

    # Question 5 - Multiple choice
    qid = f"calc_u1_l1_q5"
    questions.append(create_multiple_choice_question(
        qid,
        "What does a limit represent?",
        ["The value at a point", "The value approaching a point", "The derivative", "The area under curve"],
        1, 3
    ))

    # Question 6 - Typing with diagram
    qid = f"calc_u1_l1_q6"
    diagram = generate_limit_diagram(qid, 0, "x+3")
    questions.append(create_typing_question(
        qid,
        "Using the diagram, what is lim(x→0) (x+3)?",
        ["3"], 5, diagram
    ))

    # Question 7 - Multiple choice
    qid = f"calc_u1_l1_q7"
    questions.append(create_multiple_choice_question(
        qid,
        "If lim(x→a) f(x) = L, what happens as x gets closer to a?",
        ["f(x) gets farther from L", "f(x) gets closer to L", "f(x) stays constant", "f(x) goes to infinity"],
        1, 3
    ))

    # Question 8 - Typing
    qid = f"calc_u1_l1_q8"
    questions.append(create_typing_question(
        qid,
        "Evaluate: lim(x→5) (x - 2) = ?",
        ["3"], 5
    ))

    # Question 9 - Multiple choice with diagram
    qid = f"calc_u1_l1_q9"
    diagram = generate_limit_diagram(qid, 1, "sin(x)")
    questions.append(create_multiple_choice_question(
        qid,
        "What is approximately lim(x→1) sin(x)?",
        ["0.5", "0.84", "1", "0"],
        1, 4, diagram
    ))

    # Question 10 - Typing
    qid = f"calc_u1_l1_q10"
    questions.append(create_typing_question(
        qid,
        "Evaluate: lim(x→4) (2x + 1) = ?",
        ["9"], 5
    ))

    # Question 11 - Multiple choice
    qid = f"calc_u1_l1_q11"
    questions.append(create_multiple_choice_question(
        qid,
        "What is lim(x→2) (x² + x)?",
        ["4", "6", "8", "10"],
        1, 3
    ))

    # Question 12 - Typing
    qid = f"calc_u1_l1_q12"
    questions.append(create_typing_question(
        qid,
        "Evaluate: lim(x→0) cos(x) = ?",
        ["1", "one"], 5
    ))

    # Question 13 - Multiple choice
    qid = f"calc_u1_l1_q13"
    questions.append(create_multiple_choice_question(
        qid,
        "Which notation represents a limit?",
        ["f'(x)", "∫f(x)dx", "lim(x→a)f(x)", "f(x)"],
        2, 3
    ))

    # Question 14 - Typing with diagram
    qid = f"calc_u1_l1_q14"
    diagram = generate_limit_diagram(qid, -1, "x^3")
    questions.append(create_typing_question(
        qid,
        "What is lim(x→-1) x³?",
        ["-1", "negative one"], 5, diagram
    ))

    # Question 15 - Multiple choice
    qid = f"calc_u1_l1_q15"
    questions.append(create_multiple_choice_question(
        qid,
        "If lim(x→a) f(x) exists, what must be true?",
        ["f(a) must exist", "f(a) must equal the limit", "Left and right limits must be equal", "The function must be continuous"],
        2, 4
    ))

    # Question 16 - Typing
    qid = f"calc_u1_l1_q16"
    questions.append(create_typing_question(
        qid,
        "Evaluate: lim(x→10) (x/2) = ?",
        ["5"], 5
    ))

    # Question 17 - Multiple choice
    qid = f"calc_u1_l1_q17"
    questions.append(create_multiple_choice_question(
        qid,
        "What is lim(x→0) (3x + 5)?",
        ["3", "5", "8", "15"],
        2, 3
    ))

    # Question 18 - Typing
    qid = f"calc_u1_l1_q18"
    questions.append(create_typing_question(
        qid,
        "Evaluate: lim(x→3) (x² - 4) = ?",
        ["5"], 5
    ))

    return {
        "id": lesson_id,
        "title": "Understanding Limits",
        "xp": 75,
        "type": "lesson",
        "questions": questions
    }

def generate_unit1_lesson2():
    """Lesson: Calculating Limits"""
    lesson_id = "1-2"
    questions = []

    # Question 1
    qid = f"calc_u1_l2_q1"
    diagram = generate_limit_diagram(qid, 4, "x^2")
    questions.append(create_typing_question(
        qid,
        "Calculate: lim(x→4) x² = ?",
        ["16"], 5, diagram
    ))

    # Question 2
    qid = f"calc_u1_l2_q2"
    questions.append(create_multiple_choice_question(
        qid,
        "What is lim(x→3) (2x + 1)?",
        ["6", "7", "8", "9"],
        1, 3
    ))

    # Question 3
    qid = f"calc_u1_l2_q3"
    questions.append(create_typing_question(
        qid,
        "Evaluate: lim(x→5) (x - 3) = ?",
        ["2"], 5
    ))

    # Question 4
    qid = f"calc_u1_l2_q4"
    diagram = generate_limit_diagram(qid, 2, "x^3")
    questions.append(create_multiple_choice_question(
        qid,
        "What is lim(x→2) x³?",
        ["6", "8", "10", "12"],
        1, 4, diagram
    ))

    # Question 5
    qid = f"calc_u1_l2_q5"
    questions.append(create_typing_question(
        qid,
        "Calculate: lim(x→0) (5x + 2) = ?",
        ["2"], 5
    ))

    # Question 6
    qid = f"calc_u1_l2_q6"
    questions.append(create_multiple_choice_question(
        qid,
        "What is lim(x→1) (x² + 2x)?",
        ["1", "2", "3", "4"],
        2, 3
    ))

    # Question 7
    qid = f"calc_u1_l2_q7"
    diagram = generate_limit_diagram(qid, 0, "cos(x)")
    questions.append(create_typing_question(
        qid,
        "What is lim(x→0) cos(x)?",
        ["1"], 5, diagram
    ))

    # Question 8
    qid = f"calc_u1_l2_q8"
    questions.append(create_multiple_choice_question(
        qid,
        "Evaluate: lim(x→2) (3x - 1)",
        ["4", "5", "6", "7"],
        1, 3
    ))

    # Question 9
    qid = f"calc_u1_l2_q9"
    questions.append(create_typing_question(
        qid,
        "Calculate: lim(x→6) (x/3) = ?",
        ["2"], 5
    ))

    # Question 10
    qid = f"calc_u1_l2_q10"
    diagram = generate_limit_diagram(qid, 1, "sin(x)")
    questions.append(create_multiple_choice_question(
        qid,
        "What is approximately lim(x→1) sin(x)?",
        ["0.5", "0.84", "0.95", "1"],
        1, 4, diagram
    ))

    # Question 11
    qid = f"calc_u1_l2_q11"
    questions.append(create_typing_question(
        qid,
        "Evaluate: lim(x→0) (x + 10) = ?",
        ["10"], 5
    ))

    # Question 12
    qid = f"calc_u1_l2_q12"
    questions.append(create_multiple_choice_question(
        qid,
        "What is lim(x→3) (x² - 2)?",
        ["5", "6", "7", "8"],
        2, 3
    ))

    # Question 13
    qid = f"calc_u1_l2_q13"
    questions.append(create_typing_question(
        qid,
        "Calculate: lim(x→4) (x + x) = ?",
        ["8"], 5
    ))

    # Question 14
    qid = f"calc_u1_l2_q14"
    diagram = generate_limit_diagram(qid, 2, "x+3")
    questions.append(create_multiple_choice_question(
        qid,
        "What is lim(x→2) (x + 3)?",
        ["4", "5", "6", "7"],
        1, 4, diagram
    ))

    # Question 15
    qid = f"calc_u1_l2_q15"
    questions.append(create_typing_question(
        qid,
        "Evaluate: lim(x→5) (2x - 3) = ?",
        ["7"], 5
    ))

    # Question 16
    qid = f"calc_u1_l2_q16"
    questions.append(create_multiple_choice_question(
        qid,
        "What is lim(x→1) (3x + 2)?",
        ["3", "4", "5", "6"],
        2, 3
    ))

    # Question 17
    qid = f"calc_u1_l2_q17"
    questions.append(create_typing_question(
        qid,
        "Calculate: lim(x→8) (x/4) = ?",
        ["2"], 5
    ))

    # Question 18
    qid = f"calc_u1_l2_q18"
    questions.append(create_multiple_choice_question(
        qid,
        "What is lim(x→0) (4x + 1)?",
        ["0", "1", "4", "5"],
        1, 3
    ))

    return {
        "id": lesson_id,
        "title": "Calculating Limits",
        "xp": 80,
        "type": "lesson",
        "questions": questions
    }

# ===== UNIT 2: Derivatives =====
def generate_unit2_lesson1():
    """Lesson: Introduction to Derivatives"""
    lesson_id = "2-1"
    questions = []

    # Question 1 - Multiple choice with diagram
    qid = f"calc_u2_l1_q1"
    diagram = generate_derivative_diagram(qid, "x^2", 2)
    questions.append(create_multiple_choice_question(
        qid,
        "What does the derivative represent?",
        ["The area under a curve", "The instantaneous rate of change", "The limit of a function", "The integral"],
        1, 4, diagram
    ))

    # Question 2 - Typing
    qid = f"calc_u2_l1_q2"
    questions.append(create_typing_question(
        qid,
        "The derivative of f(x) = x² is:",
        ["2x"], 5
    ))

    # Question 3 - Multiple choice
    qid = f"calc_u2_l1_q3"
    questions.append(create_multiple_choice_question(
        qid,
        "What is the notation for derivative?",
        ["∫f(x)", "f'(x)", "limf(x)", "Δf(x)"],
        1, 3
    ))

    # Question 4 - Typing with diagram
    qid = f"calc_u2_l1_q4"
    diagram = generate_derivative_diagram(qid, "x^3", 1)
    questions.append(create_typing_question(
        qid,
        "What is the derivative of f(x) = x³?",
        ["3x^2", "3x²"], 5, diagram
    ))

    # Question 5 - Multiple choice
    qid = f"calc_u2_l1_q5"
    questions.append(create_multiple_choice_question(
        qid,
        "Geometrically, the derivative is the:",
        ["Slope of the tangent line", "Area under curve", "Y-intercept", "X-intercept"],
        0, 3
    ))

    # Question 6 - Typing
    qid = f"calc_u2_l1_q6"
    questions.append(create_typing_question(
        qid,
        "If f(x) = 3x, what is f'(x)?",
        ["3"], 5
    ))

    # Question 7 - Multiple choice
    qid = f"calc_u2_l1_q7"
    questions.append(create_multiple_choice_question(
        qid,
        "The derivative measures:",
        ["Total change", "Average rate of change", "Instantaneous rate of change", "Maximum value"],
        2, 3
    ))

    # Question 8 - Typing
    qid = f"calc_u2_l1_q8"
    questions.append(create_typing_question(
        qid,
        "What is the derivative of f(x) = x?",
        ["1"], 5
    ))

    # Question 9 - Multiple choice with diagram
    qid = f"calc_u2_l1_q9"
    diagram = generate_derivative_diagram(qid, "sin(x)", 0)
    questions.append(create_multiple_choice_question(
        qid,
        "What is the derivative of sin(x)?",
        ["sin(x)", "cos(x)", "-sin(x)", "-cos(x)"],
        1, 4, diagram
    ))

    # Question 10 - Typing
    qid = f"calc_u2_l1_q10"
    questions.append(create_typing_question(
        qid,
        "If f(x) = 5, what is f'(x)?",
        ["0"], 5
    ))

    # Question 11 - Multiple choice
    qid = f"calc_u2_l1_q11"
    questions.append(create_multiple_choice_question(
        qid,
        "What does f'(a) tell us about the function at x=a?",
        ["The value of f(a)", "The slope at x=a", "The area up to a", "The limit at a"],
        1, 3
    ))

    # Question 12 - Typing
    qid = f"calc_u2_l1_q12"
    questions.append(create_typing_question(
        qid,
        "What is the derivative of cos(x)?",
        ["-sin(x)", "-sinx"], 5
    ))

    # Question 13 - Multiple choice
    qid = f"calc_u2_l1_q13"
    questions.append(create_multiple_choice_question(
        qid,
        "If a function has derivative f'(x) = 0 everywhere, it is:",
        ["Linear", "Constant", "Quadratic", "Exponential"],
        1, 3
    ))

    # Question 14 - Typing
    qid = f"calc_u2_l1_q14"
    questions.append(create_typing_question(
        qid,
        "What is the derivative of f(x) = 4x?",
        ["4"], 5
    ))

    # Question 15 - Multiple choice
    qid = f"calc_u2_l1_q15"
    questions.append(create_multiple_choice_question(
        qid,
        "The power rule states that d/dx(x^n) =:",
        ["x^(n-1)", "nx^(n-1)", "nx^n", "x^n"],
        1, 4
    ))

    # Question 16 - Typing
    qid = f"calc_u2_l1_q16"
    questions.append(create_typing_question(
        qid,
        "Apply power rule: d/dx(x^4) = ?",
        ["4x^3", "4x³"], 5
    ))

    # Question 17 - Multiple choice
    qid = f"calc_u2_l1_q17"
    questions.append(create_multiple_choice_question(
        qid,
        "If f'(x) > 0, the function is:",
        ["Decreasing", "Increasing", "Constant", "At a maximum"],
        1, 3
    ))

    # Question 18 - Typing
    qid = f"calc_u2_l1_q18"
    questions.append(create_typing_question(
        qid,
        "What is the derivative of f(x) = 2x²?",
        ["4x"], 5
    ))

    return {
        "id": lesson_id,
        "title": "Introduction to Derivatives",
        "xp": 75,
        "type": "lesson",
        "questions": questions
    }

def generate_unit2_lesson2():
    """Lesson: Power Rule Practice"""
    lesson_id = "2-2"
    questions = []

    # Question 1
    qid = f"calc_u2_l2_q1"
    diagram = generate_derivative_diagram(qid, "x^2", 1)
    questions.append(create_typing_question(
        qid,
        "Find f'(x) for f(x) = x²",
        ["2x"], 5, diagram
    ))

    # Question 2
    qid = f"calc_u2_l2_q2"
    questions.append(create_multiple_choice_question(
        qid,
        "What is d/dx(x^5)?",
        ["x^4", "5x^4", "5x^5", "4x^5"],
        1, 3
    ))

    # Question 3
    qid = f"calc_u2_l2_q3"
    questions.append(create_typing_question(
        qid,
        "Find the derivative: d/dx(x^7) = ?",
        ["7x^6", "7x⁶"], 5
    ))

    # Question 4
    qid = f"calc_u2_l2_q4"
    diagram = generate_derivative_diagram(qid, "x^3", 2)
    questions.append(create_multiple_choice_question(
        qid,
        "What is f'(x) if f(x) = x³?",
        ["3x", "3x^2", "x^2", "3x^3"],
        1, 4, diagram
    ))

    # Question 5
    qid = f"calc_u2_l2_q5"
    questions.append(create_typing_question(
        qid,
        "Apply power rule: d/dx(x^10) = ?",
        ["10x^9", "10x⁹"], 5
    ))

    # Question 6
    qid = f"calc_u2_l2_q6"
    questions.append(create_multiple_choice_question(
        qid,
        "What is d/dx(x^4)?",
        ["4x^3", "4x^4", "3x^3", "x^3"],
        0, 3
    ))

    # Question 7
    qid = f"calc_u2_l2_q7"
    questions.append(create_typing_question(
        qid,
        "Find derivative: d/dx(x^6) = ?",
        ["6x^5", "6x⁵"], 5
    ))

    # Question 8
    qid = f"calc_u2_l2_q8"
    diagram = generate_derivative_diagram(qid, "x^2", 3)
    questions.append(create_multiple_choice_question(
        qid,
        "What is the slope of f(x) = x² at x = 3?",
        ["3", "6", "9", "12"],
        1, 4, diagram
    ))

    # Question 9
    qid = f"calc_u2_l2_q9"
    questions.append(create_typing_question(
        qid,
        "Evaluate f'(2) for f(x) = x³",
        ["12"], 5
    ))

    # Question 10
    qid = f"calc_u2_l2_q10"
    questions.append(create_multiple_choice_question(
        qid,
        "What is d/dx(x^8)?",
        ["8x^7", "8x^8", "7x^7", "x^7"],
        0, 3
    ))

    # Question 11
    qid = f"calc_u2_l2_q11"
    questions.append(create_typing_question(
        qid,
        "Find f'(x) for f(x) = x^9",
        ["9x^8", "9x⁸"], 5
    ))

    # Question 12
    qid = f"calc_u2_l2_q12"
    diagram = generate_derivative_diagram(qid, "x^3", 1)
    questions.append(create_multiple_choice_question(
        qid,
        "At what x-value does f(x) = x³ have slope 3?",
        ["0", "1", "2", "3"],
        1, 4, diagram
    ))

    # Question 13
    qid = f"calc_u2_l2_q13"
    questions.append(create_typing_question(
        qid,
        "What is d/dx(x^11)?",
        ["11x^10", "11x¹⁰"], 5
    ))

    # Question 14
    qid = f"calc_u2_l2_q14"
    questions.append(create_multiple_choice_question(
        qid,
        "If f(x) = x^2, what is f'(4)?",
        ["4", "8", "16", "32"],
        1, 3
    ))

    # Question 15
    qid = f"calc_u2_l2_q15"
    questions.append(create_typing_question(
        qid,
        "Find the derivative: d/dx(x^12) = ?",
        ["12x^11", "12x¹¹"], 5
    ))

    # Question 16
    qid = f"calc_u2_l2_q16"
    questions.append(create_multiple_choice_question(
        qid,
        "What is d/dx(x^3) at x = 2?",
        ["6", "8", "12", "16"],
        2, 3
    ))

    # Question 17
    qid = f"calc_u2_l2_q17"
    questions.append(create_typing_question(
        qid,
        "Evaluate: d/dx(x^5) at x = 1",
        ["5"], 5
    ))

    # Question 18
    qid = f"calc_u2_l2_q18"
    diagram = generate_derivative_diagram(qid, "x^2", 0)
    questions.append(create_multiple_choice_question(
        qid,
        "Where does f(x) = x² have a horizontal tangent?",
        ["x = 0", "x = 1", "x = -1", "Nowhere"],
        0, 4, diagram
    ))

    return {
        "id": lesson_id,
        "title": "Power Rule Practice",
        "xp": 80,
        "type": "lesson",
        "questions": questions
    }

# ===== UNIT 3: Integration =====
def generate_unit3_lesson1():
    """Lesson: Introduction to Integration"""
    lesson_id = "3-1"
    questions = []

    # Question 1 - Multiple choice with diagram
    qid = f"calc_u3_l1_q1"
    diagram = generate_integral_diagram(qid, "x", (0, 2))
    questions.append(create_multiple_choice_question(
        qid,
        "What does ∫f(x)dx represent?",
        ["The derivative of f", "The area under the curve", "The limit of f", "The slope"],
        1, 4, diagram
    ))

    # Question 2 - Typing
    qid = f"calc_u3_l1_q2"
    questions.append(create_typing_question(
        qid,
        "What is ∫x dx?",
        ["x²/2 + C", "x^2/2 + C", "x squared over 2 plus C"], 5
    ))

    # Question 3 - Multiple choice
    qid = f"calc_u3_l1_q3"
    questions.append(create_multiple_choice_question(
        qid,
        "The symbol ∫ is called the:",
        ["Limit symbol", "Integral symbol", "Derivative symbol", "Delta symbol"],
        1, 3
    ))

    # Question 4 - Typing with diagram
    qid = f"calc_u3_l1_q4"
    diagram = generate_integral_diagram(qid, "x^2", (0, 1))
    questions.append(create_typing_question(
        qid,
        "What is ∫x² dx?",
        ["x³/3 + C", "x^3/3 + C", "x cubed over 3 plus C"], 5, diagram
    ))

    # Question 5 - Multiple choice
    qid = f"calc_u3_l1_q5"
    questions.append(create_multiple_choice_question(
        qid,
        "What does the 'C' represent in ∫f(x)dx = F(x) + C?",
        ["Constant of integration", "Coefficient", "Calculus", "Coordinate"],
        0, 3
    ))

    # Question 6 - Typing
    qid = f"calc_u3_l1_q6"
    questions.append(create_typing_question(
        qid,
        "What is ∫2x dx?",
        ["x² + C", "x^2 + C"], 5
    ))

    # Question 7 - Multiple choice
    qid = f"calc_u3_l1_q7"
    diagram = generate_integral_diagram(qid, "sin(x)", (0, 1))
    questions.append(create_multiple_choice_question(
        qid,
        "What is ∫sin(x) dx?",
        ["sin(x) + C", "cos(x) + C", "-cos(x) + C", "-sin(x) + C"],
        2, 4, diagram
    ))

    # Question 8 - Typing
    qid = f"calc_u3_l1_q8"
    questions.append(create_typing_question(
        qid,
        "What is ∫cos(x) dx?",
        ["sin(x) + C"], 5
    ))

    # Question 9 - Multiple choice
    qid = f"calc_u3_l1_q9"
    questions.append(create_multiple_choice_question(
        qid,
        "Integration is the reverse operation of:",
        ["Addition", "Differentiation", "Multiplication", "Division"],
        1, 3
    ))

    # Question 10 - Typing
    qid = f"calc_u3_l1_q10"
    questions.append(create_typing_question(
        qid,
        "What is ∫3x dx?",
        ["1.5x² + C", "1.5x^2 + C", "3/2 x squared plus C"], 5
    ))

    # Question 11 - Multiple choice with diagram
    qid = f"calc_u3_l1_q11"
    diagram = generate_integral_diagram(qid, "2x", (0, 3))
    questions.append(create_multiple_choice_question(
        qid,
        "What is ∫₀³ 2x dx?",
        ["6", "9", "12", "18"],
        1, 4, diagram
    ))

    # Question 12 - Typing
    qid = f"calc_u3_l1_q12"
    questions.append(create_typing_question(
        qid,
        "What is ∫5 dx?",
        ["5x + C"], 5
    ))

    # Question 13 - Multiple choice
    qid = f"calc_u3_l1_q13"
    questions.append(create_multiple_choice_question(
        qid,
        "The Fundamental Theorem of Calculus connects:",
        ["Limits and derivatives", "Derivatives and integrals", "Integrals and areas", "Functions and graphs"],
        1, 3
    ))

    # Question 14 - Typing
    qid = f"calc_u3_l1_q14"
    questions.append(create_typing_question(
        qid,
        "What is ∫x³ dx?",
        ["x⁴/4 + C", "x^4/4 + C"], 5
    ))

    # Question 15 - Multiple choice
    qid = f"calc_u3_l1_q15"
    diagram = generate_integral_diagram(qid, "x", (1, 4))
    questions.append(create_multiple_choice_question(
        qid,
        "What is ∫₁⁴ x dx?",
        ["6", "7.5", "8", "10"],
        1, 4, diagram
    ))

    # Question 16 - Typing
    qid = f"calc_u3_l1_q16"
    questions.append(create_typing_question(
        qid,
        "What is ∫4x dx?",
        ["2x² + C", "2x^2 + C"], 5
    ))

    # Question 17 - Multiple choice
    qid = f"calc_u3_l1_q17"
    questions.append(create_multiple_choice_question(
        qid,
        "A definite integral has:",
        ["Infinite limits", "Specific limits", "No limits", "Variable limits"],
        1, 3
    ))

    # Question 18 - Typing
    qid = f"calc_u3_l1_q18"
    questions.append(create_typing_question(
        qid,
        "What is ∫e^x dx?",
        ["e^x + C", "eˣ + C"], 5
    ))

    return {
        "id": lesson_id,
        "title": "Introduction to Integration",
        "xp": 75,
        "type": "lesson",
        "questions": questions
    }

def generate_unit3_lesson2():
    """Lesson: Definite Integrals"""
    lesson_id = "3-2"
    questions = []

    # Question 1
    qid = f"calc_u3_l2_q1"
    diagram = generate_integral_diagram(qid, "x", (0, 3))
    questions.append(create_typing_question(
        qid,
        "Evaluate: ∫₀³ x dx = ?",
        ["4.5", "9/2"], 5, diagram
    ))

    # Question 2
    qid = f"calc_u3_l2_q2"
    questions.append(create_multiple_choice_question(
        qid,
        "What is ∫₀¹ 2x dx?",
        ["0", "1", "2", "4"],
        1, 3
    ))

    # Question 3
    qid = f"calc_u3_l2_q3"
    questions.append(create_typing_question(
        qid,
        "Calculate: ∫₀² x dx = ?",
        ["2"], 5
    ))

    # Question 4
    qid = f"calc_u3_l2_q4"
    diagram = generate_integral_diagram(qid, "x^2", (0, 2))
    questions.append(create_multiple_choice_question(
        qid,
        "What is ∫₀² x² dx?",
        ["4/3", "8/3", "4", "8"],
        1, 4, diagram
    ))

    # Question 5
    qid = f"calc_u3_l2_q5"
    questions.append(create_typing_question(
        qid,
        "Evaluate: ∫₀¹ x² dx = ?",
        ["1/3"], 5
    ))

    # Question 6
    qid = f"calc_u3_l2_q6"
    questions.append(create_multiple_choice_question(
        qid,
        "What is ∫₀³ 3 dx?",
        ["3", "6", "9", "12"],
        2, 3
    ))

    # Question 7
    qid = f"calc_u3_l2_q7"
    diagram = generate_integral_diagram(qid, "2x", (1, 3))
    questions.append(create_typing_question(
        qid,
        "Calculate: ∫₁³ 2x dx = ?",
        ["8"], 5, diagram
    ))

    # Question 8
    qid = f"calc_u3_l2_q8"
    questions.append(create_multiple_choice_question(
        qid,
        "What is ∫₀¹ (x + 1) dx?",
        ["1", "1.5", "2", "2.5"],
        1, 3
    ))

    # Question 9
    qid = f"calc_u3_l2_q9"
    questions.append(create_typing_question(
        qid,
        "Evaluate: ∫₀² 3x dx = ?",
        ["6"], 5
    ))

    # Question 10
    qid = f"calc_u3_l2_q10"
    diagram = generate_integral_diagram(qid, "x", (0, 5))
    questions.append(create_multiple_choice_question(
        qid,
        "What is ∫₀⁵ x dx?",
        ["10", "12.5", "15", "25"],
        1, 4, diagram
    ))

    # Question 11
    qid = f"calc_u3_l2_q11"
    questions.append(create_typing_question(
        qid,
        "Calculate: ∫₁² 2x dx = ?",
        ["3"], 5
    ))

    # Question 12
    qid = f"calc_u3_l2_q12"
    questions.append(create_multiple_choice_question(
        qid,
        "What is ∫₀³ (2x + 1) dx?",
        ["9", "12", "15", "18"],
        1, 3
    ))

    # Question 13
    qid = f"calc_u3_l2_q13"
    questions.append(create_typing_question(
        qid,
        "Evaluate: ∫₀⁴ x dx = ?",
        ["8"], 5
    ))

    # Question 14
    qid = f"calc_u3_l2_q14"
    diagram = generate_integral_diagram(qid, "3x", (0, 2))
    questions.append(create_multiple_choice_question(
        qid,
        "What is ∫₀² 3x dx?",
        ["3", "6", "9", "12"],
        1, 4, diagram
    ))

    # Question 15
    qid = f"calc_u3_l2_q15"
    questions.append(create_typing_question(
        qid,
        "Calculate: ∫₀¹ (x + 2) dx = ?",
        ["2.5", "5/2"], 5
    ))

    # Question 16
    qid = f"calc_u3_l2_q16"
    questions.append(create_multiple_choice_question(
        qid,
        "What is ∫₁³ (x) dx?",
        ["3", "4", "5", "6"],
        1, 3
    ))

    # Question 17
    qid = f"calc_u3_l2_q17"
    questions.append(create_typing_question(
        qid,
        "Evaluate: ∫₀² (x + x) dx = ?",
        ["4"], 5
    ))

    # Question 18
    qid = f"calc_u3_l2_q18"
    diagram = generate_integral_diagram(qid, "x", (2, 4))
    questions.append(create_multiple_choice_question(
        qid,
        "What is ∫₂⁴ x dx?",
        ["4", "6", "8", "10"],
        1, 4, diagram
    ))

    return {
        "id": lesson_id,
        "title": "Definite Integrals",
        "xp": 80,
        "type": "lesson",
        "questions": questions
    }

# ===== UNIT 4: Applications =====
def generate_unit4_lesson1():
    """Lesson: Rates of Change"""
    lesson_id = "4-1"
    questions = []

    # Question 1 - Multiple choice with diagram
    qid = f"calc_u4_l1_q1"
    data = {'x': [0, 1, 2, 3, 4], 'y': [0, 2, 4, 6, 8]}
    diagram = generate_rates_diagram(qid, data)
    questions.append(create_multiple_choice_question(
        qid,
        "If position s(t) = t², what is the velocity v(t)?",
        ["t", "2t", "t²", "2t²"],
        1, 4, diagram
    ))

    # Question 2 - Typing
    qid = f"calc_u4_l1_q2"
    questions.append(create_typing_question(
        qid,
        "If s(t) = 3t, what is the velocity?",
        ["3"], 5
    ))

    # Question 3 - Multiple choice
    qid = f"calc_u4_l1_q3"
    questions.append(create_multiple_choice_question(
        qid,
        "Velocity is the derivative of:",
        ["Acceleration", "Position", "Time", "Speed"],
        1, 3
    ))

    # Question 4 - Typing
    qid = f"calc_u4_l1_q4"
    data = {'x': [0, 1, 2, 3], 'y': [1, 3, 5, 7]}
    diagram = generate_rates_diagram(qid, data)
    questions.append(create_typing_question(
        qid,
        "If s(t) = 2t + 1, what is v(t)?",
        ["2"], 5, diagram
    ))

    # Question 5 - Multiple choice
    qid = f"calc_u4_l1_q5"
    questions.append(create_multiple_choice_question(
        qid,
        "Acceleration is the derivative of:",
        ["Velocity", "Position", "Time", "Distance"],
        0, 3
    ))

    # Question 6 - Typing
    qid = f"calc_u4_l1_q6"
    questions.append(create_typing_question(
        qid,
        "If v(t) = 4t, what is the acceleration a(t)?",
        ["4"], 5
    ))

    # Question 7 - Multiple choice
    qid = f"calc_u4_l1_q7"
    data = {'x': [0, 1, 2, 3, 4], 'y': [0, 1, 4, 9, 16]}
    diagram = generate_rates_diagram(qid, data)
    questions.append(create_multiple_choice_question(
        qid,
        "For s(t) = t², what is the velocity at t = 2?",
        ["2", "4", "6", "8"],
        1, 4, diagram
    ))

    # Question 8 - Typing
    qid = f"calc_u4_l1_q8"
    questions.append(create_typing_question(
        qid,
        "If s(t) = 5t, what is the instantaneous velocity at t = 3?",
        ["5"], 5
    ))

    # Question 9 - Multiple choice
    qid = f"calc_u4_l1_q9"
    questions.append(create_multiple_choice_question(
        qid,
        "The average rate of change of f(x) from a to b is:",
        ["f(b) - f(a)", "(f(b)-f(a))/(b-a)", "f'(a)", "f'(b)"],
        1, 3
    ))

    # Question 10 - Typing
    qid = f"calc_u4_l1_q10"
    questions.append(create_typing_question(
        qid,
        "If s(t) = t² + t, what is v(t)?",
        ["2t + 1"], 5
    ))

    # Question 11 - Multiple choice
    qid = f"calc_u4_l1_q11"
    questions.append(create_multiple_choice_question(
        qid,
        "What is the instantaneous rate of change at a point?",
        ["The slope of the secant line", "The slope of the tangent line", "The area under curve", "The value at that point"],
        1, 3
    ))

    # Question 12 - Typing
    qid = f"calc_u4_l1_q12"
    data = {'x': [0, 1, 2, 3], 'y': [2, 4, 6, 8]}
    diagram = generate_rates_diagram(qid, data)
    questions.append(create_typing_question(
        qid,
        "If s(t) = 2t, what is the velocity at t = 2?",
        ["2"], 5, diagram
    ))

    # Question 13 - Multiple choice
    qid = f"calc_u4_l1_q13"
    questions.append(create_multiple_choice_question(
        qid,
        "If v(t) = 3t², what is a(t)?",
        ["3t", "6t", "3t²", "6t²"],
        1, 3
    ))

    # Question 14 - Typing
    qid = f"calc_u4_l1_q14"
    questions.append(create_typing_question(
        qid,
        "What is the velocity if s(t) = t³?",
        ["3t²", "3t^2"], 5
    ))

    # Question 15 - Multiple choice
    qid = f"calc_u4_l1_q15"
    data = {'x': [0, 1, 2, 3, 4], 'y': [0, 0, 0, 0, 0]}
    diagram = generate_rates_diagram(qid, data)
    questions.append(create_multiple_choice_question(
        qid,
        "If an object is at rest, its velocity is:",
        ["Positive", "Negative", "Zero", "Undefined"],
        2, 4, diagram
    ))

    # Question 16 - Typing
    qid = f"calc_u4_l1_q16"
    questions.append(create_typing_question(
        qid,
        "If s(t) = 4t + 2, what is v(t)?",
        ["4"], 5
    ))

    # Question 17 - Multiple choice
    qid = f"calc_u4_l1_q17"
    questions.append(create_multiple_choice_question(
        qid,
        "What does a negative velocity indicate?",
        ["Moving forward", "Moving backward", "At rest", "Accelerating"],
        1, 3
    ))

    # Question 18 - Typing
    qid = f"calc_u4_l1_q18"
    questions.append(create_typing_question(
        qid,
        "If v(t) = -5, what is a(t)?",
        ["0"], 5
    ))

    return {
        "id": lesson_id,
        "title": "Rates of Change",
        "xp": 75,
        "type": "lesson",
        "questions": questions
    }

def generate_unit4_lesson2():
    """Lesson: Optimization Problems"""
    lesson_id = "4-2"
    questions = []

    # Question 1 - Multiple choice with diagram
    qid = f"calc_u4_l2_q1"
    diagram = generate_optimization_diagram(qid, "Maximize area", 5)
    questions.append(create_multiple_choice_question(
        qid,
        "To find the maximum or minimum of a function, we set:",
        ["f(x) = 0", "f'(x) = 0", "f''(x) = 0", "f(x) = 1"],
        1, 4, diagram
    ))

    # Question 2 - Typing
    qid = f"calc_u4_l2_q2"
    questions.append(create_typing_question(
        qid,
        "For f(x) = -x² + 4x, what x-value gives the maximum?",
        ["2"], 5
    ))

    # Question 3 - Multiple choice
    qid = f"calc_u4_l2_q3"
    questions.append(create_multiple_choice_question(
        qid,
        "If f''(x) > 0 at a critical point, the function has a:",
        ["Maximum", "Minimum", "Inflection point", "Undefined"],
        1, 3
    ))

    # Question 4 - Typing
    qid = f"calc_u4_l2_q4"
    diagram = generate_optimization_diagram(qid, "Minimize cost", 3)
    questions.append(create_typing_question(
        qid,
        "For f(x) = x² - 6x + 10, what x-value gives the minimum?",
        ["3"], 5, diagram
    ))

    # Question 5 - Multiple choice
    qid = f"calc_u4_l2_q5"
    questions.append(create_multiple_choice_question(
        qid,
        "A critical point occurs where:",
        ["f(x) = 0", "f'(x) = 0", "f''(x) = 0", "f(x) = 1"],
        1, 3
    ))

    # Question 6 - Typing
    qid = f"calc_u4_l2_q6"
    questions.append(create_typing_question(
        qid,
        "Find the x that minimizes f(x) = x² - 4x + 7",
        ["2"], 5
    ))

    # Question 7 - Multiple choice
    qid = f"calc_u4_l2_q7"
    diagram = generate_optimization_diagram(qid, "Maximize profit", 4)
    questions.append(create_multiple_choice_question(
        qid,
        "For f(x) = -x² + 8x, what is the maximum value?",
        ["8", "12", "16", "32"],
        2, 4, diagram
    ))

    # Question 8 - Typing
    qid = f"calc_u4_l2_q8"
    questions.append(create_typing_question(
        qid,
        "What x maximizes f(x) = -x² + 6x?",
        ["3"], 5
    ))

    # Question 9 - Multiple choice
    qid = f"calc_u4_l2_q9"
    questions.append(create_multiple_choice_question(
        qid,
        "The Second Derivative Test uses:",
        ["f(x)", "f'(x)", "f''(x)", "∫f(x)"],
        2, 3
    ))

    # Question 10 - Typing
    qid = f"calc_u4_l2_q10"
    questions.append(create_typing_question(
        qid,
        "For f(x) = x² - 2x + 5, find the x that minimizes f",
        ["1"], 5
    ))

    # Question 11 - Multiple choice
    qid = f"calc_u4_l2_q11"
    diagram = generate_optimization_diagram(qid, "Optimal dimensions", 6)
    questions.append(create_multiple_choice_question(
        qid,
        "If f'(x) = 0 and f''(x) < 0, we have a:",
        ["Maximum", "Minimum", "Inflection point", "No conclusion"],
        0, 4, diagram
    ))

    # Question 12 - Typing
    qid = f"calc_u4_l2_q12"
    questions.append(create_typing_question(
        qid,
        "Find the x that maximizes f(x) = -2x² + 12x",
        ["3"], 5
    ))

    # Question 13 - Multiple choice
    qid = f"calc_u4_l2_q13"
    questions.append(create_multiple_choice_question(
        qid,
        "To optimize, we first find where:",
        ["f(x) = 0", "f'(x) = 0", "f''(x) = 0", "All of the above"],
        1, 3
    ))

    # Question 14 - Typing
    qid = f"calc_u4_l2_q14"
    diagram = generate_optimization_diagram(qid, "Best solution", 2.5)
    questions.append(create_typing_question(
        qid,
        "For f(x) = x² - 5x + 10, find the minimizing x",
        ["2.5"], 5, diagram
    ))

    # Question 15 - Multiple choice
    qid = f"calc_u4_l2_q15"
    questions.append(create_multiple_choice_question(
        qid,
        "An optimization problem asks us to find:",
        ["The derivative", "The best or worst value", "The integral", "The limit"],
        1, 3
    ))

    # Question 16 - Typing
    qid = f"calc_u4_l2_q16"
    questions.append(create_typing_question(
        qid,
        "What x maximizes f(x) = -3x² + 18x?",
        ["3"], 5
    ))

    # Question 17 - Multiple choice
    qid = f"calc_u4_l2_q17"
    diagram = generate_optimization_diagram(qid, "Maximum area", 7)
    questions.append(create_multiple_choice_question(
        qid,
        "For f(x) = -x² + 14x, what is the maximizing x?",
        ["5", "6", "7", "8"],
        2, 4, diagram
    ))

    # Question 18 - Typing
    qid = f"calc_u4_l2_q18"
    questions.append(create_typing_question(
        qid,
        "If f(x) = 2x² - 8x + 10, find the minimum value",
        ["2"], 5
    ))

    return {
        "id": lesson_id,
        "title": "Optimization Problems",
        "xp": 80,
        "type": "lesson",
        "questions": questions
    }

# ===== MAIN GENERATION FUNCTION =====
def generate_all_lessons():
    """Generate all calculus lessons"""

    # Load existing lessons.json
    with open(LESSONS_FILE, 'r') as f:
        data = json.load(f)

    # Create calculus course structure
    calculus_course = {
        "id": "calculus",
        "name": "Calculus",
        "flag": "∫",
        "units": [
            {
                "id": 1,
                "title": "Limits",
                "description": "Introduction to Limits and Continuity",
                "lessons": [
                    generate_unit1_lesson1(),
                    generate_unit1_lesson2()
                ]
            },
            {
                "id": 2,
                "title": "Derivatives",
                "description": "Introduction to Derivatives",
                "lessons": [
                    generate_unit2_lesson1(),
                    generate_unit2_lesson2()
                ]
            },
            {
                "id": 3,
                "title": "Integration",
                "description": "Introduction to Integration",
                "lessons": [
                    generate_unit3_lesson1(),
                    generate_unit3_lesson2()
                ]
            },
            {
                "id": 4,
                "title": "Applications",
                "description": "Applications of Calculus",
                "lessons": [
                    generate_unit4_lesson1(),
                    generate_unit4_lesson2()
                ]
            }
        ]
    }

    # Update the calculus course in data
    data["courses"]["calculus"] = calculus_course

    # Save updated lessons.json
    with open(LESSONS_FILE, 'w') as f:
        json.dump(data, f, indent=2)

    print(f"✓ Generated 4 units with 8 lessons")
    print(f"✓ Total questions generated: 144")
    print(f"✓ Diagrams saved to: {DIAGRAMS_DIR}")
    print(f"✓ Updated: {LESSONS_FILE}")

if __name__ == "__main__":
    generate_all_lessons()