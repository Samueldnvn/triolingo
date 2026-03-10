# TRIOlingO Manual Lesson Management

## Overview

TRIOlingO now uses a **manual lesson management system**. All lessons are written by hand in `lessons.json` and loaded directly by the application.

## File Structure

```
triolingo/
├── lessons.json              # Main lesson store - edit this file by hand
├── backups/                  # Automatic backups of lessons.json
│   ├── lessons_20260309_210000.json
│   └── lessons_20260309_220000.json
├── cron_validate_lessons.sh  # Cron job script
├── cron.log                  # Cron job log
├── app.js                    # Main application (loads lessons.json)
└── index.html                # Main HTML file
```

## lessons.json Structure

The `lessons.json` file contains all course content in a structured format:

```json
{
  "version": "1.0",
  "courses": {
    "french": {
      "id": "french",
      "name": "French",
      "units": [
        {
          "id": 1,
          "title": "Basics",
          "lessons": [
            {
              "id": "1-1",
              "title": "Greetings",
              "xp": 15,
              "type": "lesson",
              "questions": [
                {
                  "id": "french-1-1-1",
                  "type": "multiple-choice",
                  "question": "What does \"Bonjour\" mean?",
                  "options": ["Hello", "Goodbye", "Thank you", "Please"],
                  "correct": 0,
                  "xp": 2
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

## Adding Lessons

To add a new lesson:

1. Open `lessons.json` in a text editor
2. Navigate to the desired course and unit
3. Add a new lesson object to the `lessons` array
4. Add questions to the `questions` array

### Question Types

**Multiple Choice:**
```json
{
  "id": "unique-id",
  "type": "multiple-choice",
  "question": "Your question here?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correct": 0,
  "xp": 2
}
```

**Typing:**
```json
{
  "id": "unique-id",
  "type": "typing",
  "question": "Type your answer:",
  "correctAnswer": ["answer1", "answer2"],
  "xp": 5
}
```

**Code:**
```json
{
  "id": "unique-id",
  "type": "code",
  "question": "Write code to solve the problem",
  "codeTemplate": "// Your code here",
  "expectedOutput": "Expected output",
  "xp": 10
}
```

**Fill in Blank:**
```json
{
  "id": "unique-id",
  "type": "fill-blank",
  "question": "Fill in the blank: _____ is awesome",
  "correctWord": "TRIOlingO",
  "options": ["TRIOlingO", "Duolingo", "Lingoda", "Babbel"],
  "correct": 0,
  "xp": 3
}
```

## Editing Lessons

1. Make a copy of `lessons.json` as backup
2. Edit `lessons.json` with your changes
3. Validate JSON: `python3 -m json.tool lessons.json`
4. Test in the application

## Cron Job

The cron job (`cron_validate_lessons.sh`) runs automatically to:

1. Validate `lessons.json` syntax
2. Create timestamped backups
3. Keep only the last 10 backups
4. Log results to `cron.log`

### Setup Cron Job

```bash
crontab -e
```

Add this line to run every hour:
```bash
# Validate TRIOlingO lessons every hour
0 * * * * /home/samueldnvn4/.openclaw/workspace/triolingo/cron_validate_lessons.sh
```

Or run daily at 2 AM:
```bash
# Validate TRIOlingO lessons daily at 2 AM
0 2 * * * /home/samueldnvn4/.openclaw/workspace/triolingo/cron_validate_lessons.sh
```

## Backups

Backups are automatically created and stored in the `backups/` directory:
- Filename format: `lessons_YYYYMMDD_HHMMSS.json`
- Last 10 backups are kept
- Older backups are automatically deleted

## Manual Backup

To manually create a backup:
```bash
cd /home/samueldnvn4/.openclaw/workspace/triolingo
cp lessons.json backups/lessons_manual_$(date +%Y%m%d_%H%M%S).json
```

## Restore from Backup

To restore from a backup:
```bash
cd /home/samueldnvn4/.openclaw/workspace/triolingo
cp backups/lessons_YYYYMMDD_HHMMSS.json lessons.json
```

## Loading Lessons

The application automatically loads lessons from `lessons.json` on startup. No additional setup needed.

## Deleting Lessons

To remove a lesson:
1. Open `lessons.json`
2. Find the lesson object to delete
3. Remove it from the `lessons` array
4. Validate JSON: `python3 -m json.tool lessons.json`

## Important Notes

- ✅ **All lessons are manually written** - no automated generation
- ✅ **Direct JSON editing** - use any text editor
- ✅ **Automatic validation** - cron job checks syntax
- ✅ **Automatic backups** - every time cron runs
- ✅ **Version tracking** - use git to track changes

## Troubleshooting

### Invalid JSON
If you see "Invalid JSON" error:
```bash
python3 -m json.tool lessons.json
```
This will show you where the syntax error is.

### Lessons Not Showing
1. Check `lessons.json` exists
2. Validate JSON syntax
3. Check browser console for errors
4. Refresh the page

### Cron Job Not Running
1. Check `cron.log` for errors
2. Verify script is executable: `chmod +x cron_validate_lessons.sh`
3. Check crontab: `crontab -l`

## Best Practices

1. **Always validate JSON** after editing
2. **Make manual backups** before major changes
3. **Use descriptive IDs** for questions and lessons
4. **Keep questions focused** and clear
5. **Test lessons** in the application after editing
6. **Use git** to track changes: `git add lessons.json && git commit -m "Added new lesson"`