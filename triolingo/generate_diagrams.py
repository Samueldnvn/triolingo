"""
Generate matplotlib diagrams for Triolingo Calculus Course
Focus on visualizations for multivariable calculus topics
"""

import matplotlib.pyplot as plt
import math
import numpy as np
from matplotlib.patches import FancyArrowPatch
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.patches as mpatches

# Set style
plt.style.use('seaborn-v0_8-darkgrid')

# ============================================================
# CALCULUS 1 DIAGRAMS
# ============================================================

def derivative_tangent_line():
    """Visualize derivative as tangent line slope"""
    fig, ax = plt.subplots(figsize=(10, 6))
    
    x = np.linspace(-2, 4, 100)
    f = lambda x: x**2
    f_prime = lambda x: 2*x
    
    x0 = 1
    tangent_slope = f_prime(x0)
    tangent_line = lambda x: f(x0) + tangent_slope * (x - x0)
    
    ax.plot(x, f(x), 'b-', linewidth=2, label='f(x) = x²')
    ax.plot(x, tangent_line(x), 'r--', linewidth=2, label=f'Tangent at x={x0}')
    ax.scatter([x0], [f(x0)], color='red', s=100, zorder=5)
    
    # Arrow showing slope
    ax.annotate('', xy=(x0+0.5, f(x0)+tangent_slope*0.5),
                xytext=(x0, f(x0)),
                arrowprops=dict(arrowstyle='->', color='green', lw=2))
    
    ax.text(x0+0.6, f(x0)+0.3, f'Slope = f\'({x0}) = {tangent_slope}',
            fontsize=12, color='green', fontweight='bold')
    
    ax.set_xlabel('x', fontsize=12)
    ax.set_ylabel('f(x)', fontsize=12)
    ax.set_title('Derivative as Slope of Tangent Line', fontsize=14, fontweight='bold')
    ax.legend(fontsize=11)
    ax.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('diagrams/u1_derivative_tangent.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u1_derivative_tangent.png")

def integral_area_under_curve():
    """Visualize integral as area under curve"""
    fig, ax = plt.subplots(figsize=(10, 6))
    
    x = np.linspace(0, 2, 100)
    f = lambda x: x**2
    
    ax.plot(x, f(x), 'b-', linewidth=2, label='f(x) = x²')
    
    # Fill area under curve
    x_fill = np.linspace(0, 2, 100)
    ax.fill_between(x_fill, 0, f(x_fill), alpha=0.3, color='orange', label='∫₀² x² dx')
    
    # Shade Riemann sum rectangles
    n = 10
    a, b = 0, 2
    dx = (b - a) / n
    for i in range(n):
        x_left = a + i * dx
        x_right = a + (i + 1) * dx
        height = f(x_left)
        ax.add_patch(mpatches.Rectangle((x_left, 0), dx, height,
                                       linewidth=0.5, edgecolor='red',
                                       facecolor='red', alpha=0.2))
    
    ax.set_xlabel('x', fontsize=12)
    ax.set_ylabel('f(x)', fontsize=12)
    ax.set_title('Definite Integral as Area Under Curve', fontsize=14, fontweight='bold')
    ax.legend(fontsize=11)
    ax.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('diagrams/u1_integral_area.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u1_integral_area.png")

# ============================================================
# CALCULUS 2 DIAGRAMS
# ============================================================

def taylor_polynomial_approximation():
    """Visualize Taylor polynomial approximation"""
    fig, ax = plt.subplots(figsize=(12, 6))
    
    x = np.linspace(-3, 3, 200)
    f = lambda x: np.sin(x)
    
    ax.plot(x, f(x), 'b-', linewidth=3, label='f(x) = sin(x)', alpha=0.8)
    
    # Taylor approximations
    colors = ['red', 'green', 'purple', 'orange']
    degrees = [1, 3, 5, 7]
    
    for deg, color in zip(degrees, colors):
        taylor_approx = np.zeros_like(x)
        for n in range(deg):
            coeff = (-1)**n / math.factorial(2*n + 1)
            taylor_approx += coeff * x**(2*n + 1)
        ax.plot(x, taylor_approx, color=color, linestyle='--',
                linewidth=2, label=f'T₍{deg}₎(x)', alpha=0.7)
    
    ax.set_xlim(-3, 3)
    ax.set_ylim(-2, 2)
    ax.set_xlabel('x', fontsize=12)
    ax.set_ylabel('f(x)', fontsize=12)
    ax.set_title('Taylor Polynomial Approximation of sin(x)', fontsize=14, fontweight='bold')
    ax.legend(fontsize=10, loc='upper right')
    ax.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('diagrams/u2_taylor_approximation.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u2_taylor_approximation.png")

def volume_disk_method():
    """Visualize disk method for volume of revolution"""
    fig = plt.figure(figsize=(14, 6))
    
    # 3D plot
    ax1 = fig.add_subplot(121, projection='3d')
    x = np.linspace(0, 2, 50)
    theta = np.linspace(0, 2*np.pi, 30)
    X, Theta = np.meshgrid(x, theta)
    R = np.sqrt(X)  # f(x) = sqrt(x)
    Y = R * np.cos(Theta)
    Z = R * np.sin(Theta)
    
    ax1.plot_surface(X, Y, Z, alpha=0.6, cmap='viridis', edgecolor='none')
    ax1.set_xlabel('x', fontsize=10)
    ax1.set_ylabel('y', fontsize=10)
    ax1.set_zlabel('z', fontsize=10)
    ax1.set_title('Volume by Disk Method\ny = √x rotated about x-axis', fontsize=12, fontweight='bold')
    
    # 2D cross-section
    ax2 = fig.add_subplot(122)
    x = np.linspace(0, 2, 100)
    f = lambda x: np.sqrt(x)
    
    ax2.plot(x, f(x), 'b-', linewidth=3, label='f(x) = √x')
    ax2.plot(x, -f(x), 'b-', linewidth=3)
    
    # Draw disk at x=1
    x_disk = 1
    r_disk = f(x_disk)
    disk = mpatches.Circle((x_disk, 0), r_disk, color='red', alpha=0.3, label='Disk at x=1')
    ax2.add_patch(disk)
    
    ax2.set_xlabel('x', fontsize=12)
    ax2.set_ylabel('y', fontsize=12)
    ax2.set_title('Cross-Section: Disk Radius r = f(x)', fontsize=12, fontweight='bold')
    ax2.legend(fontsize=10)
    ax2.grid(True, alpha=0.3)
    ax2.set_aspect('equal')
    
    plt.tight_layout()
    plt.savefig('diagrams/u2_disk_method.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u2_disk_method.png")

# ============================================================
# CALCULUS 3 DIAGRAMS
# ============================================================

def multivariable_function_3d():
    """Visualize multivariable function f(x,y) = x² - y²"""
    fig = plt.figure(figsize=(14, 10))
    
    x = np.linspace(-2, 2, 50)
    y = np.linspace(-2, 2, 50)
    X, Y = np.meshgrid(x, y)
    Z = X**2 - Y**2  # Saddle point
    
    # Surface plot
    ax1 = fig.add_subplot(221, projection='3d')
    surf1 = ax1.plot_surface(X, Y, Z, cmap='coolwarm', alpha=0.8)
    ax1.set_xlabel('x', fontsize=10)
    ax1.set_ylabel('y', fontsize=10)
    ax1.set_zlabel('z', fontsize=10)
    ax1.set_title('f(x,y) = x² - y² (Saddle)', fontsize=11, fontweight='bold')
    
    # Contour plot
    ax2 = fig.add_subplot(222)
    contour = ax2.contour(X, Y, Z, levels=20, cmap='coolwarm')
    ax2.clabel(contour, inline=True, fontsize=8)
    ax2.set_xlabel('x', fontsize=10)
    ax2.set_ylabel('y', fontsize=10)
    ax2.set_title('Contour Plot', fontsize=11, fontweight='bold')
    ax2.set_aspect('equal')
    
    # Heatmap
    ax3 = fig.add_subplot(223)
    im = ax3.imshow(Z, extent=[-2, 2, -2, 2], origin='lower', cmap='coolwarm')
    ax3.set_xlabel('x', fontsize=10)
    ax3.set_ylabel('y', fontsize=10)
    ax3.set_title('Heatmap', fontsize=11, fontweight='bold')
    plt.colorbar(im, ax=ax3)
    
    # Cross-sections
    ax4 = fig.add_subplot(224)
    x_line = np.linspace(-2, 2, 100)
    y_fixed = 0
    z_x = x_line**2 - y_fixed**2
    ax4.plot(x_line, z_x, 'b-', linewidth=2, label='y=0 (along x)')
    
    y_line = np.linspace(-2, 2, 100)
    x_fixed = 0
    z_y = x_fixed**2 - y_line**2
    ax4.plot(y_line, z_y, 'r--', linewidth=2, label='x=0 (along y)')
    
    ax4.set_xlabel('Variable', fontsize=10)
    ax4.set_ylabel('z', fontsize=10)
    ax4.set_title('Cross-Sections', fontsize=11, fontweight='bold')
    ax4.legend(fontsize=9)
    ax4.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('diagrams/u3_multivariable_3d.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u3_multivariable_3d.png")

def gradient_vector_field():
    """Visualize gradient as vector field"""
    fig, ax = plt.subplots(figsize=(12, 10))
    
    # Function: f(x,y) = x² + y²
    x = np.linspace(-3, 3, 20)
    y = np.linspace(-3, 3, 20)
    X, Y = np.meshgrid(x, y)
    Z = X**2 + Y**2
    
    # Gradient: ∇f = ⟨2x, 2y⟩
    U = 2 * X
    V = 2 * Y
    
    # Normalize arrows for better visualization
    magnitude = np.sqrt(U**2 + V**2)
    U_norm = U / magnitude
    V_norm = V / magnitude
    
    # Plot vector field
    ax.quiver(X, Y, U_norm, V_norm, magnitude, 
              cmap='viridis', scale=30, width=0.005, pivot='mid')
    
    # Add contour lines
    contour = ax.contour(X, Y, Z, levels=15, colors='black', alpha=0.3, linewidths=0.5)
    ax.clabel(contour, inline=True, fontsize=8)
    
    # Mark minimum
    ax.scatter([0], [0], color='red', s=200, zorder=5, marker='*', label='Minimum at (0,0)')
    
    ax.set_xlabel('x', fontsize=12)
    ax.set_ylabel('y', fontsize=12)
    ax.set_title('Gradient Field ∇f = ⟨2x, 2y⟩ for f(x,y) = x² + y²\nArrows point steepest ascent', 
                fontsize=14, fontweight='bold')
    ax.legend(fontsize=11, loc='upper right')
    ax.set_aspect('equal')
    
    plt.tight_layout()
    plt.savefig('diagrams/u4_gradient_field.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u4_gradient_field.png")

def directional_derivative():
    """Visualize directional derivative"""
    fig = plt.figure(figsize=(14, 10))
    
    x = np.linspace(-2, 2, 100)
    y = np.linspace(-2, 2, 100)
    X, Y = np.meshgrid(x, y)
    Z = X**2 + Y**2
    
    # Point of interest
    x0, y0 = 1, 1
    z0 = x0**2 + y0**2
    
    # 3D surface
    ax1 = fig.add_subplot(221, projection='3d')
    surf = ax1.plot_surface(X, Y, Z, cmap='viridis', alpha=0.7)
    ax1.scatter([x0], [y0], [z0], color='red', s=100, zorder=5)
    ax1.set_xlabel('x', fontsize=10)
    ax1.set_ylabel('y', fontsize=10)
    ax1.set_zlabel('z', fontsize=10)
    ax1.set_title('f(x,y) = x² + y²', fontsize=11, fontweight='bold')
    
    # Contour with point and gradient
    ax2 = fig.add_subplot(222)
    contour = ax2.contour(X, Y, Z, levels=15, cmap='viridis')
    ax2.clabel(contour, inline=True, fontsize=8)
    
    # Point
    ax2.scatter([x0], [y0], color='red', s=100, zorder=5)
    ax2.text(x0+0.1, y0+0.1, f'P({x0},{y0})', fontsize=10, fontweight='bold')
    
    # Gradient vector
    grad_x = 2 * x0
    grad_y = 2 * y0
    ax2.arrow(x0, y0, grad_x, grad_y, head_width=0.2, head_length=0.2, 
              fc='red', ec='red', linewidth=2, label='∇f')
    
    # Direction vectors
    angles = [0, np.pi/4, np.pi/2, 3*np.pi/4]
    colors = ['blue', 'green', 'orange', 'purple']
    for angle, color in zip(angles, colors):
        u = np.cos(angle)
        v = np.sin(angle)
        directional_deriv = grad_x * u + grad_y * v
        ax2.arrow(x0, y0, u*0.8, v*0.8, head_width=0.1, head_length=0.1,
                  fc=color, ec=color, linewidth=1.5, alpha=0.7)
        ax2.text(x0 + u*1.0, y0 + v*1.0, f'Dᵤf={directional_deriv:.1f}',
                fontsize=9, color=color, fontweight='bold')
    
    ax2.set_xlabel('x', fontsize=10)
    ax2.set_ylabel('y', fontsize=10)
    ax2.set_title('Directional Derivatives at Point P\n∇f points steepest ascent', fontsize=11, fontweight='bold')
    ax2.legend(fontsize=9)
    ax2.set_aspect('equal')
    ax2.set_xlim(-0.5, 2.5)
    ax2.set_ylim(-0.5, 2.5)
    
    # Tangent plane
    ax3 = fig.add_subplot(223, projection='3d')
    X_tan = np.linspace(x0-1, x0+1, 20)
    Y_tan = np.linspace(y0-1, y0+1, 20)
    X_tan, Y_tan = np.meshgrid(X_tan, Y_tan)
    
    # Tangent plane: z = z0 + fₓ(x₀,y₀)(x-x₀) + fᵧ(x₀,y₀)(y-y₀)
    Z_tan = z0 + grad_x * (X_tan - x0) + grad_y * (Y_tan - y0)
    
    ax3.plot_surface(X_tan, Y_tan, Z_tan, alpha=0.7, color='lightblue')
    ax3.scatter([x0], [y0], [z0], color='red', s=100, zorder=5)
    ax3.set_xlabel('x', fontsize=10)
    ax3.set_ylabel('y', fontsize=10)
    ax3.set_zlabel('z', fontsize=10)
    ax3.set_title('Tangent Plane at P', fontsize=11, fontweight='bold')
    
    # Level curves explanation
    ax4 = fig.add_subplot(224)
    ax4.text(0.1, 0.9, 'Directional Derivative:', transform=ax4.transAxes, fontsize=12, fontweight='bold')
    ax4.text(0.1, 0.8, f'Dᵤf = ∇f · u', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.7, f'At P({x0},{y0}):', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.6, f'∇f = ⟨{grad_x}, {grad_y}⟩', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.5, 'Maximum increase: along ∇f', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.4, 'Maximum decrease: opposite ∇f', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.3, 'Zero change: perpendicular to ∇f', transform=ax4.transAxes, fontsize=11)
    ax4.axis('off')
    
    plt.tight_layout()
    plt.savefig('diagrams/u5_directional_derivative.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u5_directional_derivative.png")

def lagrange_multipliers():
    """Visualize Lagrange multipliers"""
    fig, ax = plt.subplots(figsize=(12, 10))
    
    # Constraint: x + y = 4
    x = np.linspace(-1, 5, 100)
    y_constraint = 4 - x
    
    # Function: f(x,y) = x² + y² (minimize)
    x_level = np.linspace(-2, 6, 100)
    y_level = np.linspace(-2, 6, 100)
    X_level, Y_level = np.meshgrid(x_level, y_level)
    Z_level = X_level**2 + Y_level**2
    
    # Plot constraint line
    ax.plot(x, y_constraint, 'r-', linewidth=3, label='Constraint: x + y = 4')
    
    # Plot level curves of f
    contour = ax.contour(X_level, Y_level, Z_level, levels=20, cmap='viridis', alpha=0.7)
    ax.clabel(contour, inline=True, fontsize=8)
    
    # Mark optimal point (where gradient is parallel to constraint)
    # At x + y = 4, minimum of x² + y² occurs at x = y = 2
    x_opt, y_opt = 2, 2
    ax.scatter([x_opt], [y_opt], color='black', s=200, zorder=5, marker='*', label='Optimal point')
    
    # Draw gradient vectors
    ax.arrow(x_opt, y_opt, 2*x_opt*0.3, 2*y_opt*0.3, head_width=0.2, head_length=0.2,
              fc='blue', ec='blue', linewidth=2, label='∇f')
    ax.arrow(x_opt, y_opt, -1*0.4, -1*0.4, head_width=0.2, head_length=0.2,
              fc='green', ec='green', linewidth=2, label='∇g')
    
    ax.text(x_opt+0.3, y_opt+0.3, f'Optimal: ({x_opt}, {y_opt})', fontsize=12, fontweight='bold')
    
    ax.set_xlabel('x', fontsize=12)
    ax.set_ylabel('y', fontsize=12)
    ax.set_title('Lagrange Multipliers: Minimize f(x,y) = x² + y² subject to x + y = 4\n∇f is parallel to ∇g at optimum', 
                fontsize=14, fontweight='bold')
    ax.legend(fontsize=11, loc='upper right')
    ax.set_aspect('equal')
    ax.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('diagrams/u6_lagrange_multipliers.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u6_lagrange_multipliers.png")

def double_integral_region():
    """Visualize double integral over region"""
    fig = plt.figure(figsize=(14, 10))
    
    x = np.linspace(0, 2, 100)
    
    # Region bounded by y = x² and y = x
    y_top = x
    y_bottom = x**2
    
    # Area between curves
    ax1 = fig.add_subplot(221)
    ax1.fill_between(x, y_bottom, y_top, alpha=0.4, color='lightblue', label='Region D')
    ax1.plot(x, y_top, 'b-', linewidth=2, label='y = x')
    ax1.plot(x, y_bottom, 'r-', linewidth=2, label='y = x²')
    ax1.fill([0.5, 0.5], [0, 0.25], alpha=0.6, color='green', label='dy dx strip')
    ax1.set_xlabel('x', fontsize=10)
    ax1.set_ylabel('y', fontsize=10)
    ax1.set_title('Type I Region\n∫∫ f(x,y) dy dx', fontsize=11, fontweight='bold')
    ax1.legend(fontsize=9)
    ax1.grid(True, alpha=0.3)
    ax1.set_aspect('equal')
    
    # Type II region visualization
    ax2 = fig.add_subplot(222)
    y = np.linspace(0, 1, 100)
    x_right = y  # x = y
    x_left = np.sqrt(y)  # x = √y (from y = x²)
    
    ax2.fill_betweenx(y, x_left, x_right, alpha=0.4, color='lightgreen', label='Region D')
    ax2.plot(x_right, y, 'b-', linewidth=2, label='x = y')
    ax2.plot(x_left, y, 'r-', linewidth=2, label='x = √y')
    ax2.set_xlabel('x', fontsize=10)
    ax2.set_ylabel('y', fontsize=10)
    ax2.set_title('Type II Region\n∫∫ f(x,y) dx dy', fontsize=11, fontweight='bold')
    ax2.legend(fontsize=9)
    ax2.grid(True, alpha=0.3)
    ax2.set_aspect('equal')
    
    # 3D volume visualization
    ax3 = fig.add_subplot(223, projection='3d')
    x_3d = np.linspace(0, 1, 30)
    y_3d = np.linspace(0, 1, 30)
    X_3d, Y_3d = np.meshgrid(x_3d, y_3d)
    Z_3d = np.where((Y_3d >= X_3d**2) & (Y_3d <= X_3d), X_3d + Y_3d, np.nan)
    
    ax3.plot_surface(X_3d, Y_3d, Z_3d, alpha=0.7, cmap='viridis')
    ax3.set_xlabel('x', fontsize=10)
    ax3.set_ylabel('y', fontsize=10)
    ax3.set_zlabel('z = f(x,y)', fontsize=10)
    ax3.set_title('Volume ∫∫ (x+y) dA', fontsize=11, fontweight='bold')
    
    # Formulas
    ax4 = fig.add_subplot(224)
    ax4.text(0.1, 0.9, 'Double Integrals:', transform=ax4.transAxes, fontsize=14, fontweight='bold')
    ax4.text(0.1, 0.8, 'Type I:', transform=ax4.transAxes, fontsize=12)
    ax4.text(0.1, 0.75, '∫₀¹ ∫ₓ²ˣ f(x,y) dy dx', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.65, 'Type II:', transform=ax4.transAxes, fontsize=12)
    ax4.text(0.1, 0.6, '∫₀¹ ∫ᵧˡᵛʸ f(x,y) dx dy', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.5, 'Area:', transform=ax4.transAxes, fontsize=12)
    ax4.text(0.1, 0.45, 'Area = ∫₀¹ (x - x²) dx = 1/6', transform=ax4.transAxes, fontsize=11)
    ax4.axis('off')
    
    plt.tight_layout()
    plt.savefig('diagrams/u7_double_integral.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u7_double_integral.png")

def polar_coordinates_integral():
    """Visualize polar coordinate integration"""
    fig = plt.figure(figsize=(14, 10))
    
    # Create polar plot
    ax1 = fig.add_subplot(221, projection='polar')
    theta = np.linspace(0, 2*np.pi, 100)
    r_circle = np.ones_like(theta)  # Unit circle
    
    ax1.plot(theta, r_circle, 'b-', linewidth=2, label='r = 1')
    ax1.fill(theta, r_circle, alpha=0.3, color='lightblue')
    ax1.set_title('Polar Coordinates: Circle r = 1', fontsize=11, fontweight='bold')
    ax1.grid(True)
    
    # Cartesian with polar grid
    ax2 = fig.add_subplot(222)
    x = np.linspace(-1.5, 1.5, 100)
    y = np.linspace(-1.5, 1.5, 100)
    X, Y = np.meshgrid(x, y)
    R = np.sqrt(X**2 + Y**2)
    Theta = np.arctan2(Y, X)
    
    # Polar grid lines
    for r in [0.5, 1.0, 1.5]:
        circle = plt.Circle((0, 0), r, fill=False, color='gray', alpha=0.5, linestyle='--')
        ax2.add_patch(circle)
        ax2.text(r*np.cos(0.2), r*np.sin(0.2), f'r={r}', fontsize=8, color='gray')
    
    for theta in [0, np.pi/4, np.pi/2, 3*np.pi/4, np.pi]:
        x_line = [0, 1.5*np.cos(theta)]
        y_line = [0, 1.5*np.sin(theta)]
        ax2.plot(x_line, y_line, 'gray', alpha=0.3, linestyle='--')
        ax2.text(0.8*np.cos(theta+0.1), 0.8*np.sin(theta+0.1), 
                f'θ={theta/np.pi:.2f}π', fontsize=8, color='gray')
    
    # Fill region in polar
    mask = R <= 1
    ax2.contourf(X, Y, R, levels=[0, 1], colors=['lightblue'], alpha=0.3)
    
    ax2.set_xlabel('x', fontsize=10)
    ax2.set_ylabel('y', fontsize=10)
    ax2.set_title('Polar Grid: dA = r dr dθ', fontsize=11, fontweight='bold')
    ax2.set_aspect('equal')
    ax2.grid(True, alpha=0.3)
    
    # Jacobian explanation
    ax3 = fig.add_subplot(223)
    x_jac = np.linspace(0, 1, 50)
    y_jac = np.linspace(0, 1, 50)
    X_jac, Y_jac = np.meshgrid(x_jac, y_jac)
    
    # Show how area element changes
    for i in range(5):
        for j in range(5):
            r = (i + 1) * 0.2
            theta = j * np.pi/4
            dr = 0.2
            dtheta = np.pi/4
            
            # Small patch
            r1 = r
            r2 = r + dr
            theta1 = theta
            theta2 = theta + dtheta
            
            # Convert to cartesian
            x_pts = [r1*np.cos(theta1), r2*np.cos(theta1), r2*np.cos(theta2), r1*np.cos(theta2)]
            y_pts = [r1*np.sin(theta1), r2*np.sin(theta1), r2*np.sin(theta2), r1*np.sin(theta2)]
            
            ax3.fill(x_pts, y_pts, alpha=0.4, edgecolor='black')
            ax3.text(r*np.cos(theta), r*np.sin(theta), f'rdθ', fontsize=6, ha='center')
    
    ax3.set_xlim(-1.5, 1.5)
    ax3.set_ylim(-1.5, 1.5)
    ax3.set_xlabel('x', fontsize=10)
    ax3.set_ylabel('y', fontsize=10)
    ax3.set_title('Jacobian: Area Scales with r', fontsize=11, fontweight='bold')
    ax3.set_aspect('equal')
    
    # Formulas
    ax4 = fig.add_subplot(224)
    ax4.text(0.1, 0.9, 'Polar Integration:', transform=ax4.transAxes, fontsize=14, fontweight='bold')
    ax4.text(0.1, 0.8, 'x = r cos θ', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.75, 'y = r sin θ', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.68, 'dA = r dr dθ', transform=ax4.transAxes, fontsize=12, fontweight='bold', color='red')
    ax4.text(0.1, 0.6, '|J| = r', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.5, 'Area of circle:', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.45, '∫₀²π ∫₀ᴿ r dr dθ = πR²', transform=ax4.transAxes, fontsize=11)
    ax4.axis('off')
    
    plt.tight_layout()
    plt.savefig('diagrams/u8_polar_integral.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u8_polar_integral.png")

def vector_field_2d():
    """Visualize 2D vector field"""
    fig = plt.figure(figsize=(14, 10))
    
    x = np.linspace(-3, 3, 20)
    y = np.linspace(-3, 3, 20)
    X, Y = np.meshgrid(x, y)
    
    # Different vector fields
    fields = [
        (X, Y, 'Radial: F = ⟨x, y⟩'),
        (-Y, X, 'Rotational: F = ⟨-y, x⟩'),
        (X, -Y, 'Saddle: F = ⟨x, -y⟩'),
        (Y, X, 'Diagonal: F = ⟨y, x⟩')
    ]
    
    for idx, (U, V, title) in enumerate(fields):
        ax = fig.add_subplot(2, 2, idx+1)
        
        # Normalize arrows
        magnitude = np.sqrt(U**2 + V**2)
        U_norm = U / (magnitude + 0.1)
        V_norm = V / (magnitude + 0.1)
        
        ax.quiver(X, Y, U_norm, V_norm, magnitude, cmap='viridis', 
                  scale=30, width=0.005, pivot='mid')
        
        ax.set_xlabel('x', fontsize=10)
        ax.set_ylabel('y', fontsize=10)
        ax.set_title(title, fontsize=11, fontweight='bold')
        ax.set_aspect('equal')
        ax.grid(True, alpha=0.3)
    
    plt.tight_layout()
    plt.savefig('diagrams/u9_vector_field_2d.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u9_vector_field_2d.png")

def greens_theorem():
    """Visualize Green's Theorem"""
    fig = plt.figure(figsize=(14, 10))
    
    # Unit circle
    theta = np.linspace(0, 2*np.pi, 100)
    x = np.cos(theta)
    y = np.sin(theta)
    
    # Vector field: F = ⟨-y, x⟩ (rotation)
    X, Y = np.meshgrid(np.linspace(-1.5, 1.5, 15), np.linspace(-1.5, 1.5, 15))
    U = -Y
    V = X
    
    # Circulation plot
    ax1 = fig.add_subplot(221)
    ax1.quiver(X, Y, U, V, alpha=0.5, scale=20, width=0.005)
    ax1.plot(x, y, 'r-', linewidth=3, label='Boundary C')
    ax1.fill(x, y, alpha=0.2, color='lightblue', label='Region D')
    
    # Arrow along boundary showing circulation direction
    for t in np.linspace(0, 2*np.pi, 8, endpoint=False):
        x_arrow = np.cos(t)
        y_arrow = np.sin(t)
        dx_arrow = -np.sin(t) * 0.3
        dy_arrow = np.cos(t) * 0.3
        ax1.arrow(x_arrow, y_arrow, dx_arrow, dy_arrow, 
                  head_width=0.1, head_length=0.1, fc='red', ec='red')
    
    ax1.set_xlabel('x', fontsize=10)
    ax1.set_ylabel('y', fontsize=10)
    ax1.set_title('Circulation: ∮C F · dr', fontsize=11, fontweight='bold')
    ax1.legend(fontsize=9, loc='upper right')
    ax1.set_aspect('equal')
    ax1.grid(True, alpha=0.3)
    
    # Curl visualization
    ax2 = fig.add_subplot(222)
    # For F = ⟨-y, x⟩, curl = 2
    curl = np.full_like(X, 2)
    
    # Mask outside circle
    mask = X**2 + Y**2 <= 1
    curl_masked = np.where(mask, curl, np.nan)
    
    im = ax2.imshow(curl_masked, extent=[-1.5, 1.5, -1.5, 1.5], 
                    origin='lower', cmap='coolwarm', vmin=-2, vmax=2)
    ax2.contour(X, Y, X**2 + Y**2, levels=[1], colors='red', linewidths=2)
    ax2.set_xlabel('x', fontsize=10)
    ax2.set_ylabel('y', fontsize=10)
    ax2.set_title('curl(F) = 2', fontsize=11, fontweight='bold')
    plt.colorbar(im, ax=ax2)
    ax2.set_aspect('equal')
    
    # Double integral of curl
    ax3 = fig.add_subplot(223)
    x_dbl = np.linspace(-1, 1, 100)
    ax3.plot(x_dbl, np.sqrt(1 - x_dbl**2), 'b-', linewidth=2, label='y = √(1-x²)')
    ax3.plot(x_dbl, -np.sqrt(1 - x_dbl**2), 'b-', linewidth=2, label='y = -√(1-x²)')
    ax3.fill_between(x_dbl, -np.sqrt(1 - x_dbl**2), np.sqrt(1 - x_dbl**2), 
                     alpha=0.3, color='lightgreen')
    ax3.set_xlabel('x', fontsize=10)
    ax3.set_ylabel('y', fontsize=10)
    ax3.set_title('∫∫D curl(F) dA', fontsize=11, fontweight='bold')
    ax3.legend(fontsize=9)
    ax3.set_aspect('equal')
    ax3.grid(True, alpha=0.3)
    
    # Formula
    ax4 = fig.add_subplot(224)
    ax4.text(0.1, 0.9, "Green's Theorem:", transform=ax4.transAxes, fontsize=14, fontweight='bold')
    ax4.text(0.1, 0.8, '∮C P dx + Q dy', transform=ax4.transAxes, fontsize=12)
    ax4.text(0.1, 0.75, '= ∫∫D (∂Q/∂x - ∂P/∂y) dA', transform=ax4.transAxes, fontsize=12)
    ax4.text(0.1, 0.65, 'For F = ⟨-y, x⟩:', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.6, '∂Q/∂x = 1, ∂P/∂y = -1', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.5, 'curl = 1 - (-1) = 2', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.4, '∮C F · dr = ∫∫D 2 dA = 2π', transform=ax4.transAxes, fontsize=11, fontweight='bold')
    ax4.axis('off')
    
    plt.tight_layout()
    plt.savefig('diagrams/u10_greens_theorem.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u10_greens_theorem.png")

def curl_divergence():
    """Visualize curl and divergence"""
    fig = plt.figure(figsize=(14, 10))
    
    x = np.linspace(-2, 2, 20)
    y = np.linspace(-2, 2, 20)
    X, Y = np.meshgrid(x, y)
    
    # Rotational field: curl ≠ 0, div = 0
    U_rot = -Y
    V_rot = X
    curl_rot = np.full_like(X, 2)
    div_rot = np.zeros_like(X)
    
    # Radial field: curl = 0, div ≠ 0
    U_rad = X
    V_rad = Y
    curl_rad = np.zeros_like(X)
    div_rad = np.full_like(X, 2)
    
    # Plot fields
    for idx, (U, V, curl_val, div_val, title) in enumerate([
        (U_rot, V_rot, curl_rot, div_rot, 'Rotational: F = ⟨-y, x⟩'),
        (U_rad, V_rad, curl_rad, div_rad, 'Radial: F = ⟨x, y⟩')
    ]):
        # Vector field
        ax1 = fig.add_subplot(2, 4, idx*2 + 1)
        mag = np.sqrt(U**2 + V**2)
        ax1.quiver(X, Y, U/mag, V/mag, mag, cmap='viridis', scale=20, width=0.005)
        ax1.set_title(title, fontsize=10, fontweight='bold')
        ax1.set_aspect('equal')
        ax1.grid(True, alpha=0.3)
        
        # Curl
        ax2 = fig.add_subplot(2, 4, idx*2 + 2)
        im = ax2.imshow(curl_val, extent=[-2, 2, -2, 2], origin='lower', 
                        cmap='coolwarm', vmin=-2, vmax=2)
        ax2.set_title('curl(F)', fontsize=10, fontweight='bold')
        plt.colorbar(im, ax=ax2)
    
    plt.tight_layout()
    plt.savefig('diagrams/u11_curl_divergence.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u11_curl_divergence.png")

def stokes_theorem():
    """Visualize Stokes' Theorem"""
    fig = plt.figure(figsize=(14, 10))
    
    # Create hemisphere surface
    theta = np.linspace(0, 2*np.pi, 50)
    phi = np.linspace(0, np.pi/2, 30)
    Theta, Phi = np.meshgrid(theta, phi)
    X = np.cos(Theta) * np.sin(Phi)
    Y = np.sin(Theta) * np.sin(Phi)
    Z = np.cos(Phi)
    
    # 3D surface plot
    ax1 = fig.add_subplot(221, projection='3d')
    surf = ax1.plot_surface(X, Y, Z, alpha=0.7, cmap='viridis')
    
    # Boundary circle
    theta_b = np.linspace(0, 2*np.pi, 100)
    x_b = np.cos(theta_b)
    y_b = np.sin(theta_b)
    z_b = np.zeros_like(theta_b)
    ax1.plot(x_b, y_b, z_b, 'r-', linewidth=3, label='Boundary C')
    
    ax1.set_xlabel('x', fontsize=10)
    ax1.set_ylabel('y', fontsize=10)
    ax1.set_zlabel('z', fontsize=10)
    ax1.set_title('Surface S with Boundary C', fontsize=11, fontweight='bold')
    ax1.legend(fontsize=9)
    
    # Top view
    ax2 = fig.add_subplot(222)
    ax2.plot(x_b, y_b, 'r-', linewidth=3, label='Boundary C')
    ax2.fill(x_b, y_b, alpha=0.3, color='lightblue', label='Surface S')
    
    # Vector field on boundary (showing circulation)
    for t in np.linspace(0, 2*np.pi, 8, endpoint=False):
        x_arrow = np.cos(t)
        y_arrow = np.sin(t)
        dx_arrow = -np.sin(t) * 0.3
        dy_arrow = np.cos(t) * 0.3
        ax2.arrow(x_arrow, y_arrow, dx_arrow, dy_arrow, 
                  head_width=0.1, head_length=0.1, fc='blue', ec='blue')
    
    ax2.set_xlabel('x', fontsize=10)
    ax2.set_ylabel('y', fontsize=10)
    ax2.set_title('Line Integral ∮C F · dr', fontsize=11, fontweight='bold')
    ax2.set_aspect('equal')
    ax2.grid(True, alpha=0.3)
    ax2.legend(fontsize=9)
    
    # Curl through surface
    ax3 = fig.add_subplot(223, projection='3d')
    # Show curl vectors
    for theta in np.linspace(0, 2*np.pi, 8):
        for phi in np.linspace(0.2, np.pi/2, 3):
            x = np.cos(theta) * np.sin(phi)
            y = np.sin(theta) * np.sin(phi)
            z = np.cos(phi)
            
            # Normal vector
            nx, ny, nz = x, y, z
            ax3.quiver(x, y, z, nx*0.3, ny*0.3, nz*0.3, 
                      color='red', arrow_length_ratio=0.2)
    
    ax3.set_xlabel('x', fontsize=10)
    ax3.set_ylabel('y', fontsize=10)
    ax3.set_zlabel('z', fontsize=10)
    ax3.set_title('Surface Integral ∫∫S curl(F) · dS', fontsize=11, fontweight='bold')
    
    # Formula
    ax4 = fig.add_subplot(224)
    ax4.text(0.1, 0.9, "Stokes' Theorem:", transform=ax4.transAxes, fontsize=14, fontweight='bold')
    ax4.text(0.1, 0.8, '∮C F · dr', transform=ax4.transAxes, fontsize=12)
    ax4.text(0.1, 0.75, '= ∫∫S curl(F) · dS', transform=ax4.transAxes, fontsize=12)
    ax4.text(0.1, 0.65, 'Relates:', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.6, '• Circulation around boundary', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.55, '• Curl through surface', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.45, 'Special case:', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.4, "Green's Theorem (2D)", transform=ax4.transAxes, fontsize=11)
    ax4.axis('off')
    
    plt.tight_layout()
    plt.savefig('diagrams/u12_stokes_theorem.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u12_stokes_theorem.png")

def divergence_theorem():
    """Visualize Divergence Theorem"""
    fig = plt.figure(figsize=(14, 10))
    
    # Create sphere
    theta = np.linspace(0, 2*np.pi, 50)
    phi = np.linspace(0, np.pi, 30)
    Theta, Phi = np.meshgrid(theta, phi)
    X = np.cos(Theta) * np.sin(Phi)
    Y = np.sin(Theta) * np.sin(Phi)
    Z = np.cos(Phi)
    
    # 3D sphere
    ax1 = fig.add_subplot(221, projection='3d')
    ax1.plot_surface(X, Y, Z, alpha=0.7, cmap='viridis')
    
    # Normal vectors on surface
    for theta in np.linspace(0, 2*np.pi, 8):
        for phi in np.linspace(0, np.pi, 5):
            x = np.cos(theta) * np.sin(phi)
            y = np.sin(theta) * np.sin(phi)
            z = np.cos(phi)
            ax1.quiver(x, y, z, x*0.2, y*0.2, z*0.2, 
                      color='red', arrow_length_ratio=0.2)
    
    ax1.set_xlabel('x', fontsize=10)
    ax1.set_ylabel('y', fontsize=10)
    ax1.set_zlabel('z', fontsize=10)
    ax1.set_title('Surface ∂E with Outward Normals', fontsize=11, fontweight='bold')
    
    # Cross-section showing flux
    ax2 = fig.add_subplot(222)
    circle = plt.Circle((0, 0), 1, fill=False, color='blue', linewidth=3)
    ax2.add_patch(circle)
    
    # Draw normal vectors
    for theta in np.linspace(0, 2*np.pi, 12, endpoint=False):
        x = np.cos(theta)
        y = np.sin(theta)
        ax2.arrow(x*0.9, y*0.9, x*0.3, y*0.3, 
                  head_width=0.1, head_length=0.1, fc='red', ec='red')
    
    ax2.set_xlim(-1.5, 1.5)
    ax2.set_ylim(-1.5, 1.5)
    ax2.set_xlabel('x', fontsize=10)
    ax2.set_ylabel('y', fontsize=10)
    ax2.set_title('Flux ∫∫∂E F · dS', fontsize=11, fontweight='bold')
    ax2.set_aspect('equal')
    ax2.grid(True, alpha=0.3)
    
    # Volume integration
    ax3 = fig.add_subplot(223, projection='3d')
    # Show grid inside sphere
    x_grid = np.linspace(-0.8, 0.8, 5)
    y_grid = np.linspace(-0.8, 0.8, 5)
    z_grid = np.linspace(-0.8, 0.8, 5)
    
    for x in x_grid:
        for y in y_grid:
            for z in z_grid:
                if x**2 + y**2 + z**2 < 0.6:
                    ax3.scatter(x, y, z, color='blue', s=10, alpha=0.5)
    
    ax3.set_xlabel('x', fontsize=10)
    ax3.set_ylabel('y', fontsize=10)
    ax3.set_zlabel('z', fontsize=10)
    ax3.set_title('Volume ∫∫∫E div(F) dV', fontsize=11, fontweight='bold')
    
    # Formula
    ax4 = fig.add_subplot(224)
    ax4.text(0.1, 0.9, "Divergence Theorem:", transform=ax4.transAxes, fontsize=14, fontweight='bold')
    ax4.text(0.1, 0.8, '∫∫∂E F · dS', transform=ax4.transAxes, fontsize=12)
    ax4.text(0.1, 0.75, '= ∫∫∫E div(F) dV', transform=ax4.transAxes, fontsize=12)
    ax4.text(0.1, 0.65, 'Relates:', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.6, '• Flux through closed surface', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.55, '• Divergence in volume', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.45, 'Example: F = ⟨x, y, z⟩', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.4, 'div(F) = 3', transform=ax4.transAxes, fontsize=11)
    ax4.text(0.1, 0.35, 'Flux = 3 × Volume = 3 × (4π/3) = 4π', transform=ax4.transAxes, fontsize=11)
    ax4.axis('off')
    
    plt.tight_layout()
    plt.savefig('diagrams/u13_divergence_theorem.png', dpi=150, bbox_inches='tight')
    plt.close()
    print("✅ Created: u13_divergence_theorem.png")

# ============================================================
# GENERATE ALL DIAGRAMS
# ============================================================

if __name__ == "__main__":
    print("🎨 Generating Triolingo Calculus Diagrams...")
    print("=" * 60)
    
    print("\n📐 Calculus 1 Diagrams:")
    derivative_tangent_line()
    integral_area_under_curve()
    
    print("\n📐 Calculus 2 Diagrams:")
    taylor_polynomial_approximation()
    volume_disk_method()
    
    print("\n📐 Calculus 3 Diagrams:")
    multivariable_function_3d()
    gradient_vector_field()
    directional_derivative()
    lagrange_multipliers()
    double_integral_region()
    polar_coordinates_integral()
    vector_field_2d()
    greens_theorem()
    curl_divergence()
    stokes_theorem()
    divergence_theorem()
    
    print("\n" + "=" * 60)
    print("✅ All diagrams generated successfully!")
    print(f"📁 Saved in: diagrams/")
    print("=" * 60)