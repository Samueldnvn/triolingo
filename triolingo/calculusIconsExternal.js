// Calculus External Icons - Downloaded from Wikimedia Commons
// These are high-quality calculus icons loaded from external files

const CalculusExternalIcons = {
  // Limits & Continuity
  limit: 'calculus_icons/limit.png',
  
  // Derivatives
  derivative: 'calculus_icons/derivative.svg',
  
  // Integration
  integral: 'calculus_icons/integral.png',
  riemannSum: 'calculus_icons/riemann_sum.png',
  riemannSumPolar: 'calculus_icons/riemann_sum_polar.svg',
  areaUnderCurve: 'calculus_icons/signed_area.png',
  
  // Vectors & Multivariable
  nabla: 'calculus_icons/nabla.svg',
  dotProduct: 'calculus_icons/dot_product.svg',
  crossProduct: 'calculus_icons/cross_product.png'
};

// Map lesson functions to appropriate external icons
const CalculusExternalIconMap = {
  // Unit 1 - Limits
  limits1: CalculusExternalIcons.limit,
  limits2: CalculusExternalIcons.limit,
  limits3: CalculusExternalIcons.limit,
  limits4: CalculusExternalIcons.limit,
  limits5: CalculusExternalIcons.limit,
  limits6: CalculusExternalIcons.limit,
  
  // Unit 2 - Derivatives
  derivBasics1: CalculusExternalIcons.derivative,
  derivBasics2: CalculusExternalIcons.derivative,
  derivBasics3: CalculusExternalIcons.derivative,
  derivBasics4: CalculusExternalIcons.derivative,
  derivBasics5: CalculusExternalIcons.derivative,
  derivBasics6: CalculusExternalIcons.derivative,
  
  // Unit 3 - Derivative Applications
  derivApps1: CalculusExternalIcons.derivative,
  derivApps2: CalculusExternalIcons.derivative,
  derivApps3: CalculusExternalIcons.derivative,
  derivApps4: CalculusExternalIcons.derivative,
  derivApps5: CalculusExternalIcons.derivative,
  derivApps6: CalculusExternalIcons.derivative,
  
  // Unit 4 - Integration Basics
  intBasics1: CalculusExternalIcons.integral,
  intBasics2: CalculusExternalIcons.riemannSum,
  intBasics3: CalculusExternalIcons.riemannSum,
  intBasics4: CalculusExternalIcons.riemannSum,
  intBasics5: CalculusExternalIcons.riemannSum,
  
  // Unit 5 - Integration Techniques
  intTech1: CalculusExternalIcons.integral,
  intTech2: CalculusExternalIcons.integral,
  intTech3: CalculusExternalIcons.integral,
  intTech4: CalculusExternalIcons.integral,
  intTech5: CalculusExternalIcons.integral,
  
  // Unit 6 - Integration Applications
  intApps1: CalculusExternalIcons.areaUnderCurve,
  intApps2: CalculusExternalIcons.riemannSum,
  intApps3: CalculusExternalIcons.riemannSumPolar,
  intApps4: CalculusExternalIcons.areaUnderCurve,
  intApps5: CalculusExternalIcons.areaUnderCurve,
  intApps6: CalculusExternalIcons.integral,
  
  // Unit 7 - Advanced Integration
  advInt1: CalculusExternalIcons.integral,
  advInt2: CalculusExternalIcons.integral,
  advInt3: CalculusExternalIcons.integral,
  advInt4: CalculusExternalIcons.integral,
  advInt5: CalculusExternalIcons.riemannSum,
  advInt6: CalculusExternalIcons.integral,
  
  // Unit 8 - Integration Applications II
  appInt1: CalculusExternalIcons.areaUnderCurve,
  appInt2: CalculusExternalIcons.riemannSumPolar,
  appInt3: CalculusExternalIcons.areaUnderCurve,
  appInt4: CalculusExternalIcons.integral,
  appInt5: CalculusExternalIcons.integral,
  
  // Unit 9 - Sequences
  seq1: CalculusExternalIcons.limit,
  seq2: CalculusExternalIcons.limit,
  seq3: CalculusExternalIcons.limit,
  seq4: CalculusExternalIcons.limit,
  seq5: CalculusExternalIcons.limit,
  
  // Unit 10 - Series
  series1: CalculusExternalIcons.limit,
  series2: CalculusExternalIcons.limit,
  series3: CalculusExternalIcons.limit,
  series4: CalculusExternalIcons.limit,
  series5: CalculusExternalIcons.limit,
  series6: CalculusExternalIcons.limit,
  series7: CalculusExternalIcons.limit,
  
  // Unit 11 - Power Series
  power1: CalculusExternalIcons.limit,
  power2: CalculusExternalIcons.limit,
  power3: CalculusExternalIcons.limit,
  power4: CalculusExternalIcons.limit,
  power5: CalculusExternalIcons.limit,
  power6: CalculusExternalIcons.limit,
  
  // Unit 12 - Parametric & Polar
  param1: CalculusExternalIcons.limit,
  param2: CalculusExternalIcons.limit,
  param3: CalculusExternalIcons.limit,
  param4: CalculusExternalIcons.limit,
  param5: CalculusExternalIcons.limit,
  param6: CalculusExternalIcons.limit,
  
  // Unit 13 - Vectors & 3D
  vec3d1: CalculusExternalIcons.crossProduct,
  vec3d2: CalculusExternalIcons.crossProduct,
  vec3d3: CalculusExternalIcons.dotProduct,
  vec3d4: CalculusExternalIcons.crossProduct,
  vec3d5: CalculusExternalIcons.nabla,
  vec3d6: CalculusExternalIcons.crossProduct,
  vec3d7: CalculusExternalIcons.crossProduct,
  
  // Unit 14 - Vector Functions
  vecFun1: CalculusExternalIcons.crossProduct,
  vecFun2: CalculusExternalIcons.nabla,
  vecFun3: CalculusExternalIcons.dotProduct,
  vecFun4: CalculusExternalIcons.crossProduct,
  vecFun5: CalculusExternalIcons.nabla,
  vecFun6: CalculusExternalIcons.crossProduct,
  
  // Unit 15 - Multivariable
  multi1: CalculusExternalIcons.nabla,
  multi2: CalculusExternalIcons.nabla,
  multi3: CalculusExternalIcons.nabla,
  multi4: CalculusExternalIcons.nabla,
  multi5: CalculusExternalIcons.nabla,
  multi6: CalculusExternalIcons.nabla,
  multi7: CalculusExternalIcons.nabla,
  
  // Unit 16 - Multiple Integrals
  multiInt1: CalculusExternalIcons.riemannSum,
  multiInt2: CalculusExternalIcons.riemannSumPolar,
  multiInt3: CalculusExternalIcons.areaUnderCurve,
  multiInt4: CalculusExternalIcons.areaUnderCurve,
  multiInt5: CalculusExternalIcons.riemannSumPolar,
  multiInt6: CalculusExternalIcons.areaUnderCurve,
  multiInt7: CalculusExternalIcons.riemannSum,
  
  // Unit 17 - Vector Calculus
  vecCalc1: CalculusExternalIcons.nabla,
  vecCalc2: CalculusExternalIcons.dotProduct,
  vecCalc3: CalculusExternalIcons.crossProduct,
  vecCalc4: CalculusExternalIcons.nabla,
  vecCalc5: CalculusExternalIcons.dotProduct,
  vecCalc6: CalculusExternalIcons.crossProduct,
  vecCalc7: CalculusExternalIcons.nabla,
  vecCalc8: CalculusExternalIcons.crossProduct,
  vecCalc9: CalculusExternalIcons.nabla,
  
  // Unit 18 - Calc 3 Final
  calc3Final1: CalculusExternalIcons.limit,
  calc3Final2: CalculusExternalIcons.limit,
  calc3Final3: CalculusExternalIcons.limit
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalculusExternalIcons, CalculusExternalIconMap };
} else {
  // Browser: expose to window (this is the main map we want to use)
  window.CalculusExternalIconMap = CalculusExternalIconMap;
  // Also update the global CalculusIconMap (only external icons, no custom SVGs)
  window.CalculusIconMap = CalculusExternalIconMap;
}