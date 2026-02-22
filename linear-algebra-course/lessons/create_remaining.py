import os

lessons_to_create = [
    # Chapter 3: Determinants
    ('3-1-1-2x2-determinants.html', 'chapter-3', 'toc-yellow', 'Lesson 3.1.1: 2x2 Determinants'),
    ('3-1-2-3x3-determinants.html', 'chapter-3', 'toc-yellow', 'Lesson 3.1.2: 3x3 Determinants'),
    ('3-1-3-properties.html', 'chapter-3', 'toc-yellow', 'Lesson 3.1.3: Properties'),
    ('3-1-4-practice-determinants.html', 'chapter-3', 'toc-yellow', 'Module 3.1 Quiz'),
    # Chapter 4: Advanced (simplified to 4 lessons)
    ('4-1-advanced-complete.html', 'chapter-4', 'toc-green', 'Chapter 4: Advanced Topics Complete'),
    # Chapter 5: Applications
    ('5-1-1-svd-applications.html', 'chapter-5', 'toc-blue', 'Lesson 5.1.1: SVD & Applications'),
]

for filename, body_class, toc_color, title in lessons_to_create:
    if os.path.exists(filename):
        print(f"Skipping {filename} - exists")
    else:
        print(f"Would create {filename}")
