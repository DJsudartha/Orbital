ReVerb is a music training application.

Code Documentation

Metronome:

Description: 

The metronome feature allows users to quickly practice songs with the ability to choose a BPM with an interactive slider and play an audio click to follow along to their favorite songs. Currently, the metronome has a functional while albeit simple click function that responds to the slider and updates the click whenever the play button is clicked if the click has been stopped with the stop button. Additionaly in milestone, two, CRUD functionality has been integrated alongside the metronome, as well as working time signature functionality.

Potential improvements including creating a function that allows the metronome to be even more accurate.

Code description:

The metronome is split across the backend and frontend. 

The frontend is located under the features folder under the frontend folder. It was built with react on top of vite. It is made up of pages located under the pages folder that are connected to eachother through routes. Shared components in these components are located under the components folder. 

The main metronome functionality can be found in Metronome.jsx, it makes use of setInterval in order to create a semi accurate callback every x seconds, where x is determined based off the slider a user can input. The function setInterval calls back on also keeps track of how many times that function has been called in a global (in the file atleast) variable, once that counter has reached a specified number depending on the time signature drop down, a different click is sounded and the variable is reset.

CRUD functionality is split into pages, and props are passed around pages using the state property in the second parameter of useNavigate and useLocation from react-router-dom. The main source of the data is extracted from the backend in songListActual, where each object in the database is mapped to produce a list. Users can navigate to the deleteSong and editSong page through this list. However, data is not sent to deleteSong or editSong through props, it is sourced straight from the backend using axios.get and useParameter, where the parameter is determined in the songList. This is inefficient and can be changed in the future.

The backend was built with express JS, node JS and MongoDB and written in JS, fulfilling the roles of a web application framework, a runtime environment, as well as a database. The models folder holds all the models for the database, the one being used for the metronome feature being SongMetronome. The routes folder holds the different routes for CRUD functionality. Port.js holds miscellaneous constants to connect to the server in index.js

Technical test:

In order to test the metronome, follow the link in the google docs or alternatively click this link: https://re-verb-app.vercel.app/. To use the metronome: 1. Move the slider to the desired BPM 2. Press play 3. Press stop 4. Repeat. Since this is a web application, it should not be OS dependent, but do keep in mind that this feature was designed with mobile devices in mind.

Login page:

Description: 
The current login page is a simple interface that allows users to make an account with their email and set a password that they can use to login. There is also a forgot password and reset password feature now.

Code description:
There are 2 folders required: ReVerb Login(Frontend) and Server(Backend). Most of the code is inspired by a very informative tutorial by Code with Yousaf, however some changes are made especially in the backend.

The frontend is made with react and bootstrap. Inside the src folder, you can see the different pages that are linked together by buttons in the Login page and SignUp page. The design is a temporary placeholder as we haven't made the final design for ReVerb yet.

The backend has been linked up with any inputs in the frontend. We are mainly using MongoDB as our database but if we face any major constraints this may change in the future. Data inputted inside the signup page will be inputted inside our mongoDB cluster, while the login page looks inside our cluster for any matching data.

The password has now been encrypted with the help of 'bcrypt'. Now inside the database, you can't actually see what the password is. Instead, you can only see the hash of the password, so when you login we are only comparing the hash of the password with the hash of the current input.

There is also now a profile page that currently doesn't work yet, only the front end has been created. In the future, we plan for this to become a progress tracker and place to show of what you have done in ReVerb. A custom profile picture and following system will also be implemented.

Technical Test: 
To test the login page, follow the instructions on the documentation. After opening the login page, you should be able to see the Register page. From here you can input any name, email, and password you want, then it would direct you into the login page. Input the same email and password,  if done successfully you should be transferred into the profile page. You should also try the password forget link and try to reset the password.

Music Starter Journey

Description:

The Music Starer Journey is a feature intended to test users on their necessary music concepts depending on their level. It is similar to duolingo in the sense that it makes use of gameification to attract the user, and uses a similar answer/question scheme. Notably different from Duo Lingo, however, would be its specification to music questions, as shown by its inclusion of questions and answers allowing users to test their sense of rhythm and melodical skill, alongside basic visual questions.

Code description:

The Music Starter Journey is split into its backend and front end components. 

The backend is connected to the same database as everything else in this project using MongoDB, however several schema fall under its jurisdiction and can be found in the Models folder. QuizJourney is the only one with a model, and serves as the basic object in the database. It is made up of 2 schema, AnswerCollection and QuestionJourney, each representing the choice of answers and the question being asked. AnswerCollection in turn is made up of an array of AnswerJourneys, representing an individual answer. This is very clunky in MongoDB, hence motivating us to move to a relational database in the future (milestone 3).

Like the metronome, the frontend of the Music Starter Journey can be found in the Features folder, has a components folder where shared components are located, and a pages folder representing pages to be routed to. The TempAssets folder was used for experimentation and can be ignored. There are three pages in the music starter journey: MusicStarterHome, acting as the page that will soon host the database of different journeys this feature will have, Journey: hosting the units (the frontend of equivalent QuizJourney.js) and TestInterface, representing the question and answer pair used to test the user. The route hierarchy is: MusicStarterHome -> Journey -> TestInterface.

In this build, journey is where data will be fetched from the backend. That data will then be mapped to become each individual unit in this journey. Props will then be sent from that mapping into each individual unit/TestInterface. 

The TestInterface module is admittedly quite bloated and is responsible for a lot. It contains an if check that looks at the props being sent in to determine what answer/question type combination will be shown. These answer/question types have different functionalities and live in different modules/files. They can be found in MusicStarterJourney/Components/AnswerCollection and MusicStarterJourney/Components/Questions. Notably some technolgoies that were used here include tone.js, which was injected in order to produce simple songs. TestInterface is also responsible for checking if an answer is correct. It is currently bugged but functional since multiple answers can be chosen and the last answer being chosen will be the one checked against the actual answer.

Once done with a unit, users will be navigated back to the journey page, where they will notice that the next button representing a TestInterface will be active and clickable. An improvement that really should be looked upon wold be to cache this journey to prevent long wait times.

Technical Test:

In the website select the Music Journey button, then Journey, wait and choose button 1. There you will be greeted with a question. Click the play button to hear audio of a song and click the answer cards to select an answer. Once ready to check click check. Once correct you will be navigated to the Journey page, wait and you will see that button 2 is clickable. Repeat this process until the journey is complete. Answers are in order: Major, 2, 5/4, 1, 1.