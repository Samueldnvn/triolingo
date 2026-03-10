import json

with open('/home/samueldnvn4/.openclaw/workspace/triolingo/lessons.json') as f:
    data = json.load(f)

calc = data['courses']['calculus']
print(f"Units: {len(calc['units'])}")

total_lessons = sum(len(u['lessons']) for u in calc['units'])
print(f"Total Lessons: {total_lessons}")

total_q = 0
for u in calc['units']:
    for l in u['lessons']:
        total_q += len(l['questions'])

print(f"Total Questions: {total_q}")

# Check each lesson
for unit in calc['units']:
    print(f"\n{unit['title']}:")
    for lesson in unit['lessons']:
        q_count = len(lesson['questions'])
        typing_count = sum(1 for q in lesson['questions'] if q['type'] == 'typing')
        mc_count = sum(1 for q in lesson['questions'] if q['type'] == 'multiple-choice')
        diagram_count = sum(1 for q in lesson['questions'] if 'image' in q)
        print(f"  {lesson['title']}: {q_count} questions ({typing_count} typing, {mc_count} MC, {diagram_count} diagrams)")