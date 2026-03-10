#!/bin/bash
# TRIOlingO Cron Job - Validate and Backup Lessons
# This script validates lessons.json and creates a backup

cd /home/samueldnvn4/.openclaw/workspace/triolingo

# Check if lessons.json exists
if [ ! -f "lessons.json" ]; then
    echo "$(date): ERROR - lessons.json not found" >> cron.log
    exit 1
fi

# Validate JSON syntax
if ! python3 -m json.tool lessons.json > /dev/null 2>&1; then
    echo "$(date): ERROR - lessons.json has invalid JSON" >> cron.log
    exit 1
fi

# Create backup
BACKUP_DIR="backups"
mkdir -p "$BACKUP_DIR"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
cp lessons.json "$BACKUP_DIR/lessons_$TIMESTAMP.json"

# Keep only last 10 backups
cd "$BACKUP_DIR"
ls -t lessons_*.json | tail -n +11 | xargs -r rm
cd ..

echo "$(date): Lessons validated and backed up successfully" >> cron.log

exit 0