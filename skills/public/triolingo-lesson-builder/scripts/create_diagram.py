#!/usr/bin/env python3
"""
Matplotlib Diagram Generator for TRIOlingO Lessons
Creates elegant, colored diagrams for technical lessons.

Usage:
    python3 create_diagram.py <diagram-type> <output-filename> [options]

Diagram types:
    - function: Plot a mathematical function
    - tangent: Show a function with tangent line at a point
    - limit: Visualize limit behavior with approach arrows
    - area: Show area under a curve (for integrals)
    - vector: Draw vectors for linear algebra
"""

import matplotlib.pyplot as plt
import numpy as np
import sys
from pathlib import Path

# Set style for professional appearance
plt.style.use('seaborn-v0_8-whitegrid')
plt.rcParams['figure.dpi'] = 150
plt.rcParams['font.size'] = 12
plt.rcParams['axes.labelsize'] = 12
plt.rcParams['axes.titlesize'] = 14


def create_function_diagram(output_path, func, x_range, title, color='#3498db'):
    """Plot a mathematical function."""
    x = np.linspace(x_range[0], x_range[1], 100)
    y = func(x)

    fig, ax = plt.subplots(figsize=(8, 6))
    ax.plot(x, y, linewidth=2, color=color)
    ax.set_title(title, fontsize=14, fontweight='bold')
    ax.set_xlabel('x', fontsize=12)
    ax.set_ylabel('y', fontsize=12)
    ax.grid(True, alpha=0.3)
    ax.axhline(y=0, color='k', linewidth=0.5)
    ax.axvline(x=0, color='k', linewidth=0.5)

    plt.tight_layout()
    plt.savefig(output_path, dpi=150, bbox_inches='tight')
    plt.close()
    print(f"Created: {output_path}")


def create_tangent_diagram(output_path, func, point, title, color='#3498db'):
    """Plot a function with its tangent line at a specific point."""
    x = np.linspace(point - 3, point + 3, 100)
    y = func(x)

    # Calculate tangent line
    h = 0.0001
    slope = (func(point + h) - func(point - h)) / (2 * h)
    intercept = func(point) - slope * point
    tangent_y = slope * x + intercept

    fig, ax = plt.subplots(figsize=(8, 6))
    ax.plot(x, y, linewidth=2, color=color, label='f(x)')
    ax.plot(x, tangent_y, linewidth=2, color='#e74c3c', linestyle='--', label='Tangent')
    ax.scatter([point], [func(point)], color='#2ecc71', s=100, zorder=5)

    ax.set_title(title, fontsize=14, fontweight='bold')
    ax.set_xlabel('x', fontsize=12)
    ax.set_ylabel('y', fontsize=12)
    ax.legend()
    ax.grid(True, alpha=0.3)
    ax.axhline(y=0, color='k', linewidth=0.5)
    ax.axvline(x=0, color='k', linewidth=0.5)

    plt.tight_layout()
    plt.savefig(output_path, dpi=150, bbox_inches='tight')
    plt.close()
    print(f"Created: {output_path}")


def create_limit_diagram(output_path, func, x0, title, color='#3498db'):
    """Visualize limit behavior with approach arrows."""
    x_left = np.linspace(x0 - 2, x0 - 0.1, 50)
    x_right = np.linspace(x0 + 0.1, x0 + 2, 50)

    fig, ax = plt.subplots(figsize=(8, 6))
    ax.plot(x_left, func(x_left), linewidth=2, color=color)
    ax.plot(x_right, func(x_right), linewidth=2, color=color)

    # Add approach arrows
    y_left = func(x0 - 0.1)
    y_right = func(x0 + 0.1)

    # Left approach arrow
    ax.annotate('', xy=(x0 - 0.1, y_left), xytext=(x0 - 1.5, y_left),
                arrowprops=dict(arrowstyle='->', color='#e74c3c', lw=2))

    # Right approach arrow
    ax.annotate('', xy=(x0 + 0.1, y_right), xytext=(x0 + 1.5, y_right),
                arrowprops=dict(arrowstyle='->', color='#e74c3c', lw=2))

    # Point at limit
    ax.scatter([x0], [func(x0)], color='#2ecc71', s=100, zorder=5)

    ax.set_title(title, fontsize=14, fontweight='bold')
    ax.set_xlabel('x', fontsize=12)
    ax.set_ylabel('y', fontsize=12)
    ax.grid(True, alpha=0.3)
    ax.axhline(y=0, color='k', linewidth=0.5)
    ax.axvline(x=0, color='k', linewidth=0.5)

    plt.tight_layout()
    plt.savefig(output_path, dpi=150, bbox_inches='tight')
    plt.close()
    print(f"Created: {output_path}")


def create_area_diagram(output_path, func, x_range, title, color='#3498db'):
    """Show area under a curve (for integrals)."""
    x = np.linspace(x_range[0], x_range[1], 100)
    y = func(x)

    fig, ax = plt.subplots(figsize=(8, 6))
    ax.plot(x, y, linewidth=2, color=color)
    ax.fill_between(x, y, alpha=0.3, color=color)

    ax.set_title(title, fontsize=14, fontweight='bold')
    ax.set_xlabel('x', fontsize=12)
    ax.set_ylabel('y', fontsize=12)
    ax.grid(True, alpha=0.3)
    ax.axhline(y=0, color='k', linewidth=0.5)
    ax.axvline(x=0, color='k', linewidth=0.5)

    plt.tight_layout()
    plt.savefig(output_path, dpi=150, bbox_inches='tight')
    plt.close()
    print(f"Created: {output_path}")


def create_vector_diagram(output_path, vectors, title):
    """Draw vectors for linear algebra."""
    fig, ax = plt.subplots(figsize=(8, 6))

    # Set up plot limits
    max_coord = max(max(abs(v[0]), abs(v[1])) for v in vectors) + 1
    ax.set_xlim(-max_coord, max_coord)
    ax.set_ylim(-max_coord, max_coord)
    ax.set_aspect('equal')

    # Plot vectors
    colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12']
    for i, (x, y) in enumerate(vectors):
        ax.arrow(0, 0, x, y, head_width=0.2, head_length=0.2,
                fc=colors[i % len(colors)], ec=colors[i % len(colors)],
                linewidth=2)
        ax.text(x * 1.1, y * 1.1, f'v{i+1}', fontsize=12)

    ax.set_title(title, fontsize=14, fontweight='bold')
    ax.set_xlabel('x', fontsize=12)
    ax.set_ylabel('y', fontsize=12)
    ax.grid(True, alpha=0.3)
    ax.axhline(y=0, color='k', linewidth=0.5)
    ax.axvline(x=0, color='k', linewidth=0.5)

    plt.tight_layout()
    plt.savefig(output_path, dpi=150, bbox_inches='tight')
    plt.close()
    print(f"Created: {output_path}")


def main():
    if len(sys.argv) < 3:
        print("Usage: python3 create_diagram.py <type> <output> [options]")
        print("\nTypes:")
        print("  function - Plot a function")
        print("  tangent - Function with tangent line")
        print("  limit - Limit visualization")
        print("  area - Area under curve")
        print("  vector - Vector diagram")
        sys.exit(1)

    diagram_type = sys.argv[1]
    output_path = Path(sys.argv[2])

    # Ensure output directory exists
    output_path.parent.mkdir(parents=True, exist_ok=True)

    if diagram_type == 'function':
        # Usage: create_diagram.py function output.png "lambda x: x**2" [-5,5] "Title" [color]
        func = eval(sys.argv[3])
        x_range = eval(sys.argv[4])
        title = sys.argv[5]
        color = sys.argv[6] if len(sys.argv) > 6 else '#3498db'
        create_function_diagram(output_path, func, x_range, title, color)

    elif diagram_type == 'tangent':
        # Usage: create_diagram.py tangent output.png "lambda x: x**2" 2 "Title" [color]
        func = eval(sys.argv[3])
        point = float(sys.argv[4])
        title = sys.argv[5]
        color = sys.argv[6] if len(sys.argv) > 6 else '#3498db'
        create_tangent_diagram(output_path, func, point, title, color)

    elif diagram_type == 'limit':
        # Usage: create_diagram.py limit output.png "lambda x: x**2" 0 "Title" [color]
        func = eval(sys.argv[3])
        x0 = float(sys.argv[4])
        title = sys.argv[5]
        color = sys.argv[6] if len(sys.argv) > 6 else '#3498db'
        create_limit_diagram(output_path, func, x0, title, color)

    elif diagram_type == 'area':
        # Usage: create_diagram.py area output.png "lambda x: x**2" [0,2] "Title" [color]
        func = eval(sys.argv[3])
        x_range = eval(sys.argv[4])
        title = sys.argv[5]
        color = sys.argv[6] if len(sys.argv) > 6 else '#3498db'
        create_area_diagram(output_path, func, x_range, title, color)

    elif diagram_type == 'vector':
        # Usage: create_diagram.py vector output.png "[[2,3],[1,-1]]" "Title"
        vectors = eval(sys.argv[3])
        title = sys.argv[4]
        create_vector_diagram(output_path, vectors, title)

    else:
        print(f"Unknown diagram type: {diagram_type}")
        sys.exit(1)


if __name__ == '__main__':
    main()