@ECHO OFF 

ECHO ============================
ECHO Please wait...
ECHO ============================

cd /d .\ClientReact
start cmd.exe /k "npm install && npm start"

REM start cmd.exe /k "dotnet dev-certs https --trust"

cd /d ..\ClientResource
start cmd.exe /k "dotnet run .\ClientResource.csproj --urls=http://localhost:57180 /property:Configuration=Release"

cd /d ..\ServerLaundryOnline
start cmd.exe /k "dotnet run .\ServerLaundryOnline.csproj --urls=http://localhost:58564 /property:Configuration=Release"
