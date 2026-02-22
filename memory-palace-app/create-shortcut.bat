@echo off
REM ============================================
REM Memory Palace Practice - Windows Shortcut Creator
REM ============================================

echo 🧠 Creating desktop shortcut for Memory Palace Practice...
echo.

REM Get current directory
set "APP_DIR=%~dp0"
set "APP_DIR=%APP_DIR:~0,-1%"

REM Create batch file to run the app
set "RUN_BAT=%APP_DIR%\run.bat"
(
echo @echo off
echo cd /d "%APP_DIR%"
echo npm start
) > "%RUN_BAT%"

REM Create desktop shortcut
set "SHORTCUT=%USERPROFILE%\Desktop\Memory Palace Practice.lnk"

PowerShell -Command "^
$WshShell = New-Object -ComObject WScript.Shell;^
$Shortcut = $WshShell.CreateShortcut('%SHORTCUT%');^
$Shortcut.TargetPath = '%RUN_BAT%';^
$Shortcut.WorkingDirectory = '%APP_DIR%';^
$Shortcut.Description = 'Practice memory palace techniques with ASMR sounds';^
$Shortcut.IconLocation = '%APP_DIR%\assets\icon.png,0';^
$Shortcut.Save()^
"

if exist "%SHORTCUT%" (
    echo ✅ Desktop shortcut created: %SHORTCUT%
    echo.
    echo 📋 Quick Start:
    echo    1. Install dependencies: npm install
    echo    2. Double-click the desktop shortcut to launch!
    echo.
    echo 💡 Or run: npm start
) else (
    echo ❌ Failed to create shortcut. You may need to run as administrator.
    echo.
    echo 💡 You can still run the app with: npm start
)

echo.
pause