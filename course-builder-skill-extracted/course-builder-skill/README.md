# Course Builder Skill - Installation & Usage

## What is This Skill?

The **Course Builder** skill enables you (or another AI agent) to create comprehensive, interactive educational websites on ANY subject. The course includes:

- ✅ 8-10 modules of thorough content
- ✅ 300-500+ practice problems with instant feedback
- ✅ Interactive quizzes and exams
- ✅ Progress tracking system
- ✅ Customizable themes and styles
- ✅ Diagrams and visualizations
- ✅ Fully functional local website (no server needed)

## File Structure

```
course-builder-skill/
├── SKILL.md                                 # Main skill instructions
├── references/
│   ├── course-structure.md                  # Course planning framework
│   └── content-research.md                  # Research & content creation guide
└── assets/
    └── course-template/                     # Complete working example
        ├── index.html                       # Homepage
        ├── css/styles.css                   # Full styling system
        ├── js/
        │   ├── navigation.js                # Progress tracking
        │   ├── problems.js                  # 120+ problem examples
        │   └── quizzes.js                   # Quiz system
        ├── lessons/
        │   └── 01-introduction.html         # Full module example
        └── README.md                       # Course documentation
```

## How to Install

### Option 1: Manual Installation

Copy the `course-builder-skill` directory to your OpenClaw skills location:

```bash
# Default skills location
~/.openclaw/skills/public/

# Or custom location
cp -r course-builder-skill ~/.openclaw/skills/public/course-builder
```

### Option 2: Package as .skill File (Requires packaging script)

If you have OpenClaw's packaging tools:

```bash
# Navigate to skill parent directory
cd /path/to/course-builder-skill/..

# Package the skill (if packaging script exists)
python3 scripts/package_skill.py course-builder-skill

# This creates course-builder.skill
```

## How to Use

### For Human Users

Ask OpenClaw (Codex) to build a course:

```
"Create a complete course on Python programming 
with a modern tech theme. I want 8 modules, at least 
300 practice problems, and focus on practical examples."
```

Or:
```
"Build me a comprehensive course on American History 
with an academic theme. Include primary sources, 
maps, and timelines as diagrams."
```

Or:
```
"Create a course on Photography Basics with a creative 
theme. Focus on practical skills and include image 
examples."
```

### For AI Agents

The skill will automatically trigger when:
1. User requests creating a complete course
2. User wants comprehensive learning materials
3. User asks to build educational websites
4. User requests training materials with research

**Agent workflow when skill triggers:**

1. **Read SKILL.md** (these instructions)
2. **Read references/** as needed:
   - `course-structure.md` - How to plan the course
   - `content-research.md` - How to research and create content
3. **Copy template** from `assets/course-template/`
4. **Research** the requested subject
5. **Plan** course structure (8-10 modules)
6. **Create content** module by module
7. **Add problems** (300-500+ total)
8. **Add quizzes** and exams
9. **Test** the complete system

## Course Template Details

The Calculus III course in `assets/course-template/` demonstrates:

### Complete Features
- ✅ **Progress tracking** (LocalStorage)
- ✅ **Problem checking** with multiple acceptable answers
- ✅ **Quizzes** with automatic scoring
- ✅ **Hints and explanations** for all problems
- ✅ **Canvas diagrams** for visualizations
- ✅ **Responsive design** (mobile-friendly)
- ✅ **Construction theme** (customizable)

### Template Files to Copy/Modify

1. **CSS** (`css/styles.css`) - Change colors in `:root` variables
2. **Navigation** (`js/navigation.js`) - Modify progress thresholds
3. **Problems** (`js/problems.js`) - Reference structure for problem database
4. **Quizzes** (`js/quizzes.js`) - Reference structure for quizzes
5. **Lesson HTML** (`lessons/01-introduction.html`) - Full lesson template
6. **Index** (`index.html`) - Homepage structure

## Customizing for Different Subjects

### Programming Courses
- Code examples in syntax-highlighted blocks
- Input/output examples
- Debugging problems
- Project-based assignments

### Math/Science Courses
- Formula boxes (use template format)
- Step-by-step derivations
- Computational problems
- Proof problems (for advanced)

### Humanities/Language Courses
- Text analysis examples
- Quote identification
- Essay prompts
- Primary source analysis

### Arts/Skills Courses
- Technique demonstrations
- Portfolio projects
- Critique guidelines
- Style examples

## Example Workflows

### Example 1: Programming Course

```
User: "Create a complete Python programming course for beginners"
  ↓
Agent: 
  1. Research Python curriculum topics
  2. Plan 8 modules (Basics → Advanced)
  3. Copy template files
  4. Create content with code examples
  5. Add programming problems (300+)
  6. Add syntax challenges and debugging problems
  7. Create quizzes testing code understanding
  8. Test and deliver
```

### Example 2: Science Course

```
User: "Build a Physics course about waves and optics"
  ↓
Agent:
  1. Research wave physics curriculum
  2. Plan modules for different wave types
  3. Copy template and theme to blue/cyan
  4. Create wave diagrams (canvas)
  5. Add formula derivations
  6. Add computational problems (300+)
  7. Add conceptual questions about wave behavior
  8. Test and deliver
```

### Example 3: History Course

```
User: "Create a course on World War II"
  ↓
Agent:
  1. Research WWII major events and themes
  2. Plan modules chronologically/thematically
  3. Copy template with academic theme
  4. Create timeline diagrams
  5. Add map diagrams
  6. Add primary source documents
  7. Add practice questions (300+)
  8. Create essay-based quizzes
  9. Test and deliver
```

## Quality Assurance Checklist

Before delivering a course, verify:

### Content Quality
- [ ] All explanations are accurate
- [ ] Formula/example correctness verified
- [ ] No typos or confusing language
- [ ] Logical progression of topics
- [ ] Comprehensive coverage (no major gaps)

### Technical Quality
- [ ] All practice problems work
- [ ] Quiz scoring is correct
- [ ] Progress tracking functions
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] All links work

### Educational Quality
- [ ] Appropriate difficulty level
- [ ] Clear learning objectives
- [ ] Helpful hints (not just answers)
- [ ] Detailed explanations
- [ ] Engaging examples

## Troubleshooting

### Skill Not Triggering?

**If the skill isn't automatically triggering:**
- Check SKILL.md description covers your use case
- Ensure keywords in description match your request
- Describe need more explicitly: "Create a comprehensive course..."

### Template Not Working?

**If copied template has issues:**
- Verify all file paths are correct
- Check JavaScript loads in correct order
- Test in multiple browsers
- Check for CORS issues if using local server

### Content Taking Too Long?

**To speed up course creation:**
- Start with 4-6 modules (not 8-10)
- Aim for 200-300 problems minimum (not 500)
- Use fewer diagrams initially
- Simplify quiz format (no explanations in results)
- Focus on core concepts first

## Expanding Existing Course

To expand a course you've already built:

```bash
# Navigate to course directory
cd your-course-name/

# Add more problems to js/problems.js
# Expand existing practice sets
# Add more quiz questions
# Create additional lesson files
# Add more diagrams
```

## Support & Resources

### Reference Documents
- **Course Structure**: `references/course-structure.md`
- **Content Research**: `references/content-research.md`

### Template Course
- **Complete Example**: `assets/course-template/`
- **Study this** to understand full implementation

### Inspiration
Browse the Calculus III template for:
- Problem formatting
- Quiz structure
- Progress tracking system
- Theme customization
- Module organization

## Limitations

This skill creates **static, client-side only** courses:
- ✅ No server required
- ✅ Runs locally in browser
- ✅ Progress saved to LocalStorage
- ❌ No server-side features (user accounts, cloud sync)
- ❌ No database (data stored in JS/LocalStorage)
- ❌ No backend authentication

For server-backed courses, additional development needed.

## Future Enhancements

Possible additions:
- Video hosting/embedding
- Audio explanations
- Interactive simulations
- Community/discussion features
- LMS integration (Moodle, Canvas)
- Mobile app conversion

---

**Ready to build amazing courses!** 🎓📚

For questions or improvements, refer to the reference documents or study the Calculus III template.