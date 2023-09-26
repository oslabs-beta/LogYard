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
![Passport](https://img.shields.io/badge/-Passport-black?style=for-the-badge&logo=Passport&logoColor=green)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-white?style=for-the-badge&logo=jest&logoColor=red)
![Supertest](https://img.shields.io/badge/-Supertest-C21325?style=for-the-badge&logo=Supertest&logoColor=white)
![Vitest](https://img.shields.io/badge/-Vitest-white?style=for-the-badge&logo=Vitest&logoColor=yellow)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
<br>

## Introduction

Our mission is to simplify log management for our users. With our custom logging package that seamlessly integrates into your code, alongside the LogYard application, you can easily visualize and analyze logs using multiple, customizable graphs based on timeframes and log types. Our platform also offers dynamic log filtering, allowing users to group logs as well as filter them based on their individual properties. These features aim to make log management a breeze - helping you monitor and troubleshoot effortlessly. 

## Features

- Logging Package

    - Our custom logging package allows you to record frontend and backend logs and to store them safely in a local Docker or MongoDB cloud database.
    - Logs have various customizable attributes:
        - Type ( Options: error, warn, info, http, verbose, debug, silly )
        - Message ( What message do you want to be displayed with this log? )
        - Context ( Allows you to assign relevant information to your log, such as which file or container it came from. )

- Application

    - See your logs in real time.
    - Sort and filter logs based on level and customizable properties.
    - Save custom filters to your account.
    - Visualize your logs through several graph types. Using log-type filtering and time selection, only visualize the logs you need.
<!-- 
## Walkthrough

- Login / Signup

    <img width='' src='LOGIN GIF'/>GIF

- Dashboard / Filtering

    <img width='' src='DASHBOARD GIF'/>GIF

- Visualizer

    <img width='' src='VISUALIZER GIF'/>GIF -->

# <img width='20px' src='./public/Icon.png'/> Demo Our Product

We created a demo project for you to easily test our product's logging functionality and use our frontend manager/visualizer. Follow the steps below in order to properly run the demo.

1. LogYard

    1. Ensure you have Docker Desktop installed and opened, and that you are signed in with your Docker account.

    2. In your browser, navigate to the [LogYard GitHub repository](https://github.com/oslabs-beta/LogYard).

    3. Clone this repository using the following terminal command:

        `git clone https://github.com/oslabs-beta/LogYard.git`

    4. Open this repo in your terminal and enter the following command lines in your terminal to properly create a Docker image.

        `docker-compose ...`

        `docker-...`

    5. Open Docker Desktop and navigate to your containers.

    6. To open the LogYard application, click on the port for ...

    7. Filter and visualize your data - see how [here](#Using-GUI).

2. Demo App

    1. Navigate to our [demo app's GitHub repository](https://www.google.com/).

    2. Clone this repository using the following command in your terminal:

        `git clone https://ourdemoapprepopage.com`

    3. Within the demo app's directory, install package dependencies and run the app using the following terminal commands, in this order:

        `npm install`

        `npm run dev`

- After following the above steps, the demo app should now be visible on localhost:0000 and the LogYard GUI should be available on localhost:9999.

    4. Implement our package into the demo app using [these steps](#Using-packages).

# <img width='20px' src='./public/Icon.png'/> Use Our Product

In order to start logging in your application and using LogYard, follow the steps below to install the proper dependencies.

## 1. Logging Packages

### Installing packages

1. Navigate to the directory in which you would like to install our packages. This should be the root directory for your project.

2. In your terminal, type the following commands to install the appropriate packages for frontend and backend logging capabilities.

    `npm install logyard`

    `npm install logyardbackend`

### Using packages

1. Navigate to the file that you would like to use the logger in. 

2. At the top of your file, import the appropriate logger using one of the following line of code: 

    - For Frontend Logs: `import logyard from 'logyard'`

    - For Backend Logs: `import logyard from 'logyardbackend'`

3. Once the frontend logger has been imported, embed the 'logyard' function with the following argument options and by following the template below.

    - Arguments:

        - Error Type (Type: String) : 
            - 'error', 'warn', 'info', 'http', 'verbose', 'debug', or 'silly'.

        - Message (Type: String) : 
            - Any message you wish to be sent with the log.

        - Context(s) (Type: Object) :
            - Key-value pairs for each context you wish to include.

        ```env
            Template:
            logyard(
                [Error Type] , 
                [Message] , 
                { [ Context(s) ] } 
            );
            
            Example:
            logyard(
                'error', 
                'authController.setCookie failure', 
                { Location: controllers/authController }
            )
        ```

## 2. Setting up .env file
Directions here...

## 3. Setting up .config file(s)
Directions here...

## 4. LogYard GUI

### Installing GUI
... copy directions from demo...

### Using GUI
For any inquiries about installation or usage, please feel free to contact the team at logyardOSP@gmail.com.

# <img width='20px' src='./public/Icon.png' /> FAQ

1. Why do two seperate packages exist for logging?
    - A browser application cannot directly connect to a database. Therefore the frontend logger sends logs first to a server that is connected to your database. The backend logger directly connects to the database.

2. I can read my server logs why use this service?
    - LogYard provides a central location for accessing, reading, and analyzing logs. It is unnecessary for a single server but as an organization scales reading logs from more than 2-3 sources quickly becomes a time sink.

3. Will this work with my distributed compute cluster?
    - LogYard is designed to work with any compute service that can connect to a database.

4. Can I use this for state replication?
    - LogYard does not provide state replication. It is intended as a lightweight solution for active logging analysis not an all encompassing tool.

5. What if my app is running on port 8080?
    - answer

# <img width='20px' src='./public/Icon.png' /> Contributing
We hope you enjoy using our product and find it useful! 

If you have found a bug or an area that you feel could be improved within our product, please reach out - or if you'd like, you can create a fork on this repo and contribute to our product yourself! Contributions are vital to the open-source community and all contributions are greatly appreciated!

Following the completion of your outstanding work, if you create a PR, our team will review your code! We thank all of those who contribute toward improving our product's reliability and expanding upon it's features.

## Tasks for Contrubution
- [ ] Improving analysis tools. Current tools provide a simple interface but lack in depth capabilities.
- [ ] Additional account customization. 
    - Current accounts lack any organization features. Managing access to logs could be useful depending on application.
    - A more customizable dashboard and visualization page. Currently rather basic save, load, and delete is used for monitoring.
- [ ] More robust log displays. Currently all logs require a specific layout. A major improvement would be a single location to allow a drop in replacement for different log models.
- [ ] Improved C3 integrations. C3 is a powerful graphing tool however it directly effects the DOM unlike React which uses a virtual DOM. A major task would be to improve the current interface between C3 and React. Specifically more a more responsive layout for graphs allowing a more customizable visualization page.

# <img width='20px' src='./public/Icon.png'> Publications
- Link to various article(s) - Medium, etc.

# <img width='20px' src='./public/Icon.png'> Our Team
| [<img src="./public/PrestonHeadshot.jpeg" width="100px" >](https://www.linkedin.com/in/prestoncoldwell/) | [<img src="./public/RyanHeadshot.jpg" width="100px" >](https://www.linkedin.com/in/ryan-smithey/) | [<img src="./public/GeoffHeadshot.png" width="100px" >](https://www.linkedin.com/in/geoffrey-sun/) | [<img src="./public/AndyHeadshot.jpeg" width="100px" >](https://www.linkedin.com/in/andrewclarkwagner/) | [<img src="./public/BrianHeadshot.jpeg" width="100px" >](https://www.linkedin.com/in/brianhwang2/) |
| ------------- | ------------- |------------- | ------------- | ------------- |
| <div style="text-align: center">Preston Coldwell</div>  <div style="text-align: center">[<img src="./public/githubIcon.png" width="20px" >](https://github.com/PrestonColdwell) [<img src="./public/linkedInLogo.png" width="22px" >](https://www.linkedin.com/in/prestoncoldwell/)</div> | <div style="text-align: center">Ryan Smithey</div>  <div style="text-align: center">[<img src="./public/githubIcon.png" width="20px" >](https://github.com/RyanSmithey) [<img src="./public/linkedInLogo.png" width="22px" >](https://www.linkedin.com/in/ryan-smithey/)</div> | <div style="text-align: center">Geoffrey Sun</div>  <div style="text-align: center">[<img src="./public/githubIcon.png" width="20px" >](https://github.com/geoffsun2) [<img src="./public/linkedInLogo.png" width="22px" >](https://www.linkedin.com/in/geoffrey-sun/)</div> | <div style="text-align: center">Andy Wagner</div>  <div style="text-align: center">[<img src="./public/githubIcon.png" width="20px" >](https://github.com/a-c-wagner) [<img src="./public/linkedInLogo.png" width="22px" >](https://www.linkedin.com/in/andrewclarkwagner/)</div> | <div style="text-align: center">Brian Hwang</div>  <div style="text-align: center">[<img src="./public/githubIcon.png" width="20px" >](https://github.com/bri-engineer) [<img src="./public/linkedInLogo.png" width="22px" >](https://www.linkedin.com/in/brianhwang2/)</div> |

# <img width='20px' src='./public/Icon.png'> Acknowledgments
- [OSLabs](https://github.com/open-source-labs)


# <img width='20px' src='./public/Icon.png'> Support Us
If our product has helped you, or you would just like to show your support, please ⭐️ this repository! It helps more than you know!

<!-- level: USER DECLARED ( (0)error, (1)warn, (2)info, (3)http, (4)verbose, (5)debug, (6)silly ) -->
