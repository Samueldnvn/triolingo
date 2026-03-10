# Unit 2: Random Variables - Diagram Update

## What Was Changed

Updated Unit 2 lessons to use a greater variety of unique diagrams instead of reusing the same ones.

## Old Diagrams (Removed)
- `rv-discrete-pmf-cdf.png` ❌
- `rv-continuous-normal-cdf.png` ❌
- `rv-pmf-vs-pdf.png` ❌

These were being reused across multiple lessons.

## New Diagrams Created (15 unique diagrams)

### Lesson 2-1: Discrete Variables (3 diagrams)
1. **`discrete-vs-continuous-examples.png`** - Side-by-side comparison showing discrete (website visitors) vs continuous (temperature) examples
2. **`discrete-variable-types.png`** - 4-panel grid showing: die rolls, children per family, cars sold, emails per hour
3. **`discrete-countable-explanation.png`** - Visual explanation of "countable" with numbered elements

### Lesson 2-2: Continuous Variables (3 diagrams)
1. **`continuous-uncountable.png`** - Shows that between any two points, infinitely many points exist
2. **`continuous-variable-types.png`** - 4-panel grid showing: height distribution, temperature, response time, stock price
3. **`continuous-point-vs-interval.png`** - Explains why P(X=a)=0 by comparing point (zero width) vs interval (has area)

### Lesson 2-3: Probability Mass Function (3 diagrams)
1. **`pmf-die-roll.png`** - PMF for fair die roll (uniform discrete distribution)
2. **`pmf-poisson-comparison.png`** - Poisson distributions with different λ values (λ=2 and λ=5)
3. **`pmf-binomial-comparison.png`** - Binomial distributions with different p values (p=0.3, 0.5, 0.7)

### Lesson 2-4: Probability Density Function (3 diagrams)
1. **`pdf-exponential.png`** - Exponential distributions with different λ values (λ=0.5, 1.0, 2.0)
2. **`pdf-uniform.png`** - Uniform distributions on different intervals
3. **`pdf-area-under-curve.png`** - Shows probability as area under curve (highlights P(-1 ≤ X ≤ 1) for normal)

### Lesson 2-5: Cumulative Distribution Function (3 diagrams)
1. **`cdf-distributions-comparison.png`** - Side-by-side CDFs: discrete (coin flips), continuous (normal), exponential
2. **`cdf-properties.png`** - 4-panel grid showing: monotonic, limits [0,1], bounds, right-continuous
3. **`cdf-quantile-function.png`** - Quantile function Q(p) = F⁻¹(p) for standard normal

## Diagram Distribution

| Lesson | Diagrams | Total |
|--------|----------|-------|
| 2-1 | discrete-vs-continuous-examples, discrete-variable-types, discrete-countable-explanation | 3 |
| 2-2 | continuous-uncountable, continuous-variable-types, continuous-point-vs-interval | 3 |
| 2-3 | pmf-die-roll, pmf-poisson-comparison, pmf-binomial-comparison | 3 |
| 2-4 | pdf-exponential, pdf-uniform, pdf-area-under-curve | 3 |
| 2-5 | cdf-distributions-comparison, cdf-properties, cdf-quantile-function | 3 |
| **Total** | | **15** |

## Files Updated
- `questions/aiAllTopics.js` - Updated diagram references in lesson text and questions
- `lessons.json` - Updated diagram references

## Benefits of New Diagrams
1. **No reuse**: Each diagram is unique to its lesson
2. **Variety**: Different distributions (binomial, poisson, exponential, uniform)
3. **Visual clarity**: Each diagram illustrates a specific concept clearly
4. **Professional appearance**: Well-formatted with LaTeX math formulas
5. **Comprehensive coverage**: Each lesson has 3 distinct visualizations

## Technical Details
- Created with matplotlib
- High resolution (150 DPI)
- Consistent color scheme
- LaTeX math formulas in diagrams
- Clear labels and annotations
- Professional styling

---

**Status:** ✅ Unit 2 now has 15 unique diagrams (3 per lesson). No diagram reuse across lessons.