![README Banner](./public/READMEBanner.png)

# <img width='20px' src='./public/Icon.png' /> About

## Built With
![JavaScript](https://img.shields.io/badge/-javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/-react-white?style=for-the-badge&logo=react&logoColor=blue)
![ReactRouter](https://img.shields.io/badge/-ReactRouter-white?style=for-the-badge&logo=ReactRouter&logoColor=blue)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Node](https://img.shields.io/badge/-node-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-000000?style=for-the-badge&logo=MongoDB&logoColor=green)
![Mongoose](https://img.shields.io/badge/-Mongoose-white?style=for-the-badge&logo=Mongoose&logoColor=brown)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-white?style=for-the-badge&logo=jest&logoColor=red)
![Supertest](https://img.shields.io/badge/-Supertest-C21325?style=for-the-badge&logo=Supertest&logoColor=white)
![Vitest](https://img.shields.io/badge/-Vitest-white?style=for-the-badge&logo=Vitest&logoColor=yellow)
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
<br>

## Introduction

Our mission is to simplify log management for our users. With our custom logging package implemented in your code, alongside the LogYard GUI, you can easily visualize and analyze logs using multiple, customizable graphs based on time and log types. Our platform also offers dynamic log filtering, allowing users to group logs and filter them based on their individual properties. These features aim to make log management a breeze -- helping you monitor and troubleshoot effortlessly. 

## Features

- Logging Package

    - Our custom logging packages allow you to record frontend and backend logs and store them safely in a local Docker or MongoDB cloud database.
    - Logs have various customizable attributes:
        - Level ( Options: error, warn, info, http, verbose, debug, silly )
        - Message ( What message do you want to be displayed with this log? )
        - Context ( Allows you to assign relevant information to your log, such as which file or container it came from. )

- Application

    - See your logs in real time.
    - Sort and filter logs based on level and customizable properties.
    - Save custom filters to your account.
    - Visualize your logs through several graph types. Using filters and time selection, only visualize the logs you need.

# <img width='20px' src='./public/Icon.png'/> Demo Our Product

We created a demo project for you to easily test our product's logging functionality and use our GUI. Follow the steps below in order to properly run the demo.

1. LogYard

    1. Ensure you have Docker Desktop installed and opened, and that you are signed in with your Docker account.

    2. Clone the LogYard repository using the following terminal command:

        `git clone https://github.com/oslabs-beta/LogYard.git`

    3. Open the LogYard repo that you just cloned in your terminal and enter the following command lines to properly create and run the Docker image.

        `docker build -t logyard .`

        `docker compose up`

    4. Open Docker Dashboard and navigate to Containers.

    5. To open the LogYard application, click on the logyard app_container running on port '3333:3333'.

        <img width='' src='./public/GIF/DockerDesktop.gif'/>

    6. You should now see LogYard's user sign-in page in your browser (shown below). To sign in as a guest, enter your server password located in your .env file (named 'VITE_USER_PASSWORD'). Or sign up to have access to additional features, such as the ability to save custom log filters.
        <img width='' src='./public/GIF/AuthRouterNav.gif'/>

2. Demo App

    1. Clone the LogYard demo app's repository using the following terminal command (you can visit the repo [here](https://github.com/OSP7/LogYard-Demo-App)):

        `git clone https://github.com/OSP7/LogYard-Demo-App.git`

    2. Within the demo app's directory, install package dependencies and run the app using the following terminal commands, in order:

        `npm install`

        `npm run dev`

        After following the above steps, the demo app should now be visible on localhost:9000 and the LogYard GUI should remain accessible through your Docker container.

    3. Interacting with the demo app will generate logs that can be seen in the LogYard GUI! Go ahead and give it a try -- filter and visualize these logs!

        <img width='' src='./public/GIF/SaveFilter.gif'/>
        <img width='' src='./public/GIF/GraphFilterAndTime.gif'/>
    
        We hope you find our product useful. Once you're done, implement the logger package in your own application to view your own logs in our app! (see [below](#Use-Our-Product))

# <img width='20px' src='./public/Icon.png'/> Use Our Product

In order to start logging in your application and using the GUI, follow the steps below to install the proper dependencies.

## 1. Logging Packages

### Installing packages

1. Navigate to the directory in which you would like to install our packages. This should be the root directory for your project.

2. In your terminal, type the following command to install the appropriate packages for frontend and backend logging capabilities.

    `npm install logyard logyardbackend`

### Using packages

1. Navigate to the specific file that you would like to use the logger in. 

2. At the top of your file, import the appropriate logger using one of the following lines of code: 

    - For Frontend Logs:
        ```JavaScript
            import logyard from 'logyard'
        ```

    - For Backend Logs: 
        ```JavaScript
            import logyardbackend from 'logyardbackend'
             
            // this step is not necessary if using CJS 'require' to import the logger
            const { logyard } = logyardbackend;
        ```

3. Once the logger has been imported, invoke the 'logyard' function with the following argument options and by using the template below.
    - Arguments:

        1. level (Type: String) : 
            - 'error', 'warn', 'info', 'http', 'verbose', 'debug', or 'silly'.

        2. message (Type: String) : 
            - Any message you wish to be sent with the log.

        3. context(s) (Type: Object) :
            - Key-value pairs for each context you wish to include.

        ```JavaScript
            // Template:
            logyard(
                'level', 
                'message' , 
                { 
                    ContextOneKey : ContextOneValue, 
                    ContextTwoKey : ContextTwoValue,
                } 
            );
            
            // Example:
            logyard(
                'error', 
                'authController.setCookie failure', 
                { 
                    Location: 'controllers/authController', 
                    Server: 6,
                    Etc: 'etc',
                }
            )
        ```

## 2. Setting up .config file
1. In your project's root directory, create a new directory named 'config'.
2. Within this new 'config' directory, create a new file titled 'default.json'.
    ```
        my_project  
             └─── config
             │    └─── default.json
             └─── node_modules
             │
             └─── src
             │
             └─── server
             │
             other root files...
    ```
3. Copy and paste the following code into your newly created 'default.json' file.
    ```json
        {
            "uri": "mongodb://localhost:8000",
            "level": "silly",
            "dbName": "LogYard"
        }
    ```
4. Optional: Modify these 'default.json' variables to meet your needs.
    - uri: URI for which the back-end logger will connect to. Defaults to the MongoDB in the container.
    - level: Level at which all logs <em>and below</em> will be collected and sent to the database and thus, to the LogYard GUI. All logs collected at default level 'silly'.
        - Hierarchy: silly <em>(Highest)</em>, debug, verbose, http, info, warn, error <em>(Lowest)</em>  
    - dbName: The name for which you would like your database to be saved under. This must match the VITE_DB_DBNAME in your .env file.

## 3. LogYard GUI

Note: If you have already installed the GUI from the demo, please ensure you have properly set up your .env file in your project as outlined below.

1. Ensure you have Docker Desktop installed and opened, and that you are signed in with your Docker account.

2. Clone the LogYard repository using the following terminal command (you can visit the repo [here](https://github.com/oslabs-beta/LogYard)):

    `git clone https://github.com/oslabs-beta/LogYard.git`

3. Navigate to your .env file and configure its properties to you and your application's needs.  
    - VITE_USER_PASSWORD - This is the 'server password' used on login.
    - VITE_DB_URI - Database URI that you'd like to connect to. You can use the given MongoDB in the container or put your own MongoDB URI here to have logs and other app information sent there.
    - VITE_DB_DBNAME - The name of your database. This must match 'dbName' in your config/default.json file.

4. Open the LogYard repo that you just cloned in your terminal and enter the following command lines to properly create and run the Docker image.

    `docker build -t logyard .`

    `docker compose up`

5. Open Docker Desktop and navigate to Containers.

6. To open the LogYard application, click on the logyard app_container running on port '3333:3333'.

    <img width='' src='./public/GIF/DockerDesktop.gif'/>

7. You should now see LogYard's user sign-in page in your browser (shown below). To sign in as a guest, enter your server password located in your .env file (named 'VITE_USER_PASSWORD'). Or sign up to have access to additional features, such as the ability to save custom log filters.
    <img width='' src='./public/GIF/AuthRouterNav.gif'/>

8. Interacting with your app to invoke your logging functions will populate them in the LogYard application, allowing them to be analyzed, filtered, and visualized!

    <img width='' src='./public/GIF/SaveFilter.gif'/>
    <img width='' src='./public/GIF/GraphFilterAndTime.gif'/> 

# <img width='20px' src='./public/Icon.png' /> FAQ

1. Why do two separate packages exist for logging?
    - A browser application cannot directly connect to a database. Therefore the frontend logger sends logs first to a server that is connected to your database. The backend logger directly connects to the database. 

2. Does my container need to be running in order for the loggers to work?
    - Yes, the container hosts the database, which must be online to to recieve the incoming logs. However, if you only need logs from the backend logger, you can pause the 'app_container' in Docker. This restricts the ability to send logs from the front end, since they use this server as an API.
 
3. I can already read my server logs. Why use this service?
    - LogYard provides a central location for accessing, reading, and analyzing logs. As an organization scales, reading logs from more than 2-3 sources quickly becomes a time sink.

4. Will this work with my distributed compute cluster?
    - LogYard is designed to work with any compute service that can connect to a database.

5. Can I use this for state replication?
    - LogYard does not provide state replication. It is intended as a lightweight solution for active logging analysis, not a Real User Monitoring (RUM) solution.

# <img width='20px' src='./public/Icon.png' /> Contributing
We hope you enjoy using our product and find it useful! 

If you have found a bug or an area that you feel could be improved within our product, please reach out -- or if you'd like, you can create a fork on this repo and contribute to our product yourself! Contributions are vital to the open-source community and all contributions are greatly appreciated!

Following the completion of your outstanding work, if you create a PR, our team will review your code! We thank all of those who contribute toward improving our product's reliability and expanding upon its features.

## Tasks for Contribution
- [ ] Improving analysis tools. Current tools provide a simple interface but lack in-depth capabilities.
- [ ] Additional account customization: 
    - Current accounts lack any organization features. Managing access to logs could be useful depending on application.
    - A more customizable dashboard and visualization page. Currently, save, load, and delete are used for monitoring.
- [ ] More robust log displays. Currently all logs require a specific layout. A major improvement would be a single location to allow a drop-in replacement for different log models.
- [ ] Improved C3 integrations. C3 is a powerful graphing tool; however, it directly affects the DOM unlike React which uses a virtual DOM. A major task would be to improve the current interface between C3 and React; specifically, creating a more responsive layout for graphs to allow a more customizable visualization page.

# <img width='20px' src='./public/Icon.png'> Publications
- [LogYard: A New Log Management and Visualization Platform for Developers](https://medium.com/@andrewclarkwagner/logyard-a-new-log-management-and-visualization-platform-for-developers-3df574575586)

# <img width='20px' src='./public/Icon.png'> Our Team
| [<img src="./public/PrestonHeadshot.jpeg" width="100px" >](https://www.linkedin.com/in/prestoncoldwell/) | [<img src="./public/RyanHeadshot.jpg" width="100px" >](https://www.linkedin.com/in/ryan-smithey/) | [<img src="./public/GeoffHeadshot.png" width="100px" >](https://www.linkedin.com/in/geoffrey-sun/) | [<img src="./public/AndyHeadshot.jpeg" width="100px" >](https://www.linkedin.com/in/andrewclarkwagner/) | [<img src="./public/BrianHeadshot.jpeg" width="100px" >](https://www.linkedin.com/in/brianhwang2/) |
| ------------- | ------------- |------------- | ------------- | ------------- |
| <div style="text-align: center">Preston Coldwell</div>  <div style="text-align: center">[<img src="./public/githubIcon.png" width="20px" >](https://github.com/PrestonColdwell) [<img src="./public/linkedInLogo.png" width="22px" >](https://www.linkedin.com/in/prestoncoldwell/)</div> | <div style="text-align: center">Ryan Smithey</div>  <div style="text-align: center">[<img src="./public/githubIcon.png" width="20px" >](https://github.com/RyanSmithey) [<img src="./public/linkedInLogo.png" width="22px" >](https://www.linkedin.com/in/ryan-smithey/)</div> | <div style="text-align: center">Geoffrey Sun</div>  <div style="text-align: center">[<img src="./public/githubIcon.png" width="20px" >](https://github.com/geoffsun2) [<img src="./public/linkedInLogo.png" width="22px" >](https://www.linkedin.com/in/geoffrey-sun/)</div> | <div style="text-align: center">Andy Wagner</div>  <div style="text-align: center">[<img src="./public/githubIcon.png" width="20px" >](https://github.com/a-c-wagner) [<img src="./public/linkedInLogo.png" width="22px" >](https://www.linkedin.com/in/andrewclarkwagner/)</div> | <div style="text-align: center">Brian Hwang</div>  <div style="text-align: center">[<img src="./public/githubIcon.png" width="20px" >](https://github.com/bri-engineer) [<img src="./public/linkedInLogo.png" width="22px" >](https://www.linkedin.com/in/brianhwang2/)</div> |

# <img width='20px' src='./public/Icon.png'> Acknowledgments
- [OSLabs](https://github.com/open-source-labs)

# <img width='20px' src='./public/Icon.png'> License
Licensed by MIT.
See 'MIT License' file for more information.

# <img width='20px' src='./public/Icon.png'> Support Us
If our product has helped you, or you would like to show your support, please ⭐️ this repository! It helps more than you know!

<!-- level: USER DECLARED ( (0)error, (1)warn, (2)info, (3)http, (4)verbose, (5)debug, (6)silly ) -->
