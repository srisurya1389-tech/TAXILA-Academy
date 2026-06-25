@echo off
title Taxila Academy Dev Server
echo ===================================================
echo   Taxila Academy - Design Component Runner
echo ===================================================
echo.

:: Check if python is available
where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Python detected. Starting local server on http://localhost:8000 ...
    start http://localhost:8000/
    python -m http.server 8000
    goto end
)

:: Check if npx/node is available
where npx >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Node.js/npx detected. Starting local server on http://localhost:3000 ...
    start http://localhost:3000/
    npx serve -l 3000
    goto end
)

:: Fallback: Open the file directly
echo [INFO] Neither Python nor Node.js was found in PATH.
echo Opening the HTML file directly in your default browser...
start "" "index.html"

:end
pause
