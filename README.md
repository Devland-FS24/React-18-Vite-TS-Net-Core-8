# Project Title
React 18 app created with Vite, TypeScript and .Net Core 8.

## Table of Contents
- [About](#about)
- [InstallationUsage](#installationusage)
- [Highlights](#highlights)
- [Contributing](#contributing)
- [License](#license)

## About
This a demo of a monolithic Company web application which implements ASP.NET Web Api as backend and ReactJS 18 as frontend. 
You can perform CRUD operations over Company's Departments ONLY.

## InstallationUsage

  Previous requirements:

  THE .NET 8 FRAMEWORK MUST BE INSTALLED.
  EXPLORER BY DEFAULT, GOOGLE CHROME.
  Visual Studio 2022 Community.
  Visual Studio Code.
  SQL Server 2014 or higher.
  SQL Management Studio v17.8.1 or higher.
  NodeJS v 22.6.0 for windows 10.
  POSTMAN for Windows 10.
  
1. Download the ZIP file of this project.
2. OPEN AND RESTORE THE DATABASE "malldb"
   
    \\ReactViteTSNC8\DB\malldb.bak, 
    
        ON THE SELECTED LOCAL SQL SERVER.

  2.1. OPEN THE FILE 
     \\ReactViteTSNC8\API\WebAPIMall\appsettings.json
      
      AND MODIFY THE CONNECTION STRING:
  
      "Data Source=<YOUR LOCAL SQL SERVER>\\<SQL INSTANCE NAME, NONE IF DEFAULT>;Initial Catalog=malldb; Integrated Security=true"
  
      SO THE DATASOURCE CAN POINT TO YOUR LOCAL SQL SERVER.


3. OPEN THE VISUAL STUDIO SOLUTION 

    \\ReactViteTSNC8\API\WebAPIMall\WebAPIMall.sln

4. RUN THE SOLUTION.

5. In case you run into a problem with the Web Api you can recreate the Context and the Model classes by proceeding to:

    5.1. Comment the lines:
    
        using NETCore6_React.Models;
        AND
        builder.Services.AddDbContext<DepartmentDBContext>();

        in the Program.cs file.

    5.2. Delete all the files within the Models folder.

    5.3. Backup all the content of the file "Controllers\DepartmentController.cs" 
         into a text file.

    5.4. Delete the file DepartmentController.cs

    5.5. Go to Tools Nuget Package Manager-->Package Manager Console. This will
         open a console like window.

    5.6. Copy the following command into another text file:

         Scaffold-DbContext "Server=DESKTOP-SH6IB0S; DataBase=DepartmentDB;Integrated Security=True;Encrypt=False;" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models 

    5.7. Modify the previous command to point to your local SQL Server 
         installation.

    5.8. Inside the console opened in step 4.5, type in or paste the following
         command modified in step 4.7, THEN HIT ENTER.

    5.9. You should not be seeing errors in the console.

    5.10. Verify the new files created in the Models folder.

    5.11. Create a new Empty API Controller in the Contollers folder and name it
         "DepartmentController".

    5.12. In the new Controller file, delete the entire class ONLY, leave the rest
          as it is.

    5.13. Copy the entire class from the previous Controller you backed up on
          a text file, then paste it into the new Controller file.

    5.14. Save the changes.

    5.15. Uncomment the lines you commented in step 4.1.

    5.16. Rebuild the whole solution. You should not SEE any errors.

    5.17. Now you can run the solution again AND WAIT FOR IT TO OPEN A NEW BROWSER WINDOW.

    5.18. Check if the screens you see are similar to the ones in the Screen Captures folder.

6- OPEN A NEW WINDOWS EXPLORER WINDOW AT THE LOCATION 
    \\ReactViteTSNC8\ui\uidep

7- SELECT THE ADDRESS BAR OF THE OPENED WINDOW OF THE PREVIOUS STEP.

8- WRITE THE COMMAND "CMD" IN THE ADDRESS BAR, OVERWRITING THE CURRENT PATH, THEN 
   PRESS ENTER.

9- IN THE COMMAND LINE WINDOW THAT WAS JUST OPENED, WRITE "code ." AND THEN PRESS
   THE ENTER. IT'S IMPORTANT TO LEAVE A SPACE AFTER "code".

10- COPY THE URL SHOWN IN THE STEP 4.17 INTO A NOTEPAD.

11- MODIFY THE FILE 
     \\ReactViteTSNC8\ui\uidep\src\settings\appsettings.ts, 
     SO THAT THE API_URL POINTS TO THE URL THAT WAS COPIED TO THE NOTEPAD FROM THE PREVIOUS STEP.

12- IN THE OPENED COMMAND LINE WINDOW, TYPE "npm run dev" AND THEN PRESS ENTER.

13- WAIT FOR THE BROWSER TO OPEN A NEW WINDOW SHOWING THE MAIN PAGE
    OF THE APPLICATION.

14- IN THE EVENT THAT THE WINDOWS FIREWALL REQUESTS PERMISSION TO RUN THIS APP,
CLICK ON "ACCEPT".

## Highlights

     - This application implements Entity Framework Core for the Data Access layer.
     - The Context and Model classes implement the "Database First" approach.
     -  Implementation of very powerful TypeScript features out of the box such us:
          - Vite v 5.2.0
          - React v 18.3.0
          - Typescript
          - Speedy Web Compiler (SWC)
          - ESlint
          - ES7 snippets
          - Sweet Alert 2
          - Arrow functions.
          - Implementation of "const".
          - Hooks: useState, useEffect
          
## Contributing
 This application is intended as a demo that is part of my Portfolio of apps. 
 I'll update this Portfolio with the latest technologies I have skills on as soon as possible.

## License
This project is licensed under the [MIT License](LICENSE).
