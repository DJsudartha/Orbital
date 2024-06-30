ReVerb is a music training application.

Code Documentation

Metronome:

Description: 

The metronome feature allows users to quickly practice songs with the ability to choose a BPM with an interactive slider and play an audio click to follow along to their favorite songs. Currently, the metronome has a functional while albeit simple click function that responds to the slider and updates the click whenever the play button is clicked if the click has been stopped with the stop button.

In the future, we plan to add a feature where different time signatures can be chosen, in order to expand the pool of songs that users can play along to. Following that philosophy, we plan to implement basic CRUD functionality in order for users to save certain presets for songs and refer back to those presets with ease, decreasing the friction of practice. Both plans have already had their foundations built, further explained in the code description. We also plan to iteratively improve the basic click functionality, by making the click respond to slider movements without the need to stop and start the slider.

Code description:

The metronome is made up of two different folders, split by backend and frontend functionalities. 

The backend has been set up and shows responsiveness when performing basic CRUD operations using postman. However, it has not been implemented alongside the frontend for users to use. The backend was built with express JS, node JS and MongoDB and written in JS, fulfilling the roles of a web application framework, a runtime environment, as well as a database. The models folder holds all the models for the database, currently one: SongMetronome. The routes folder holds the different routes for CRUD functionality. Port.js holds miscellaneous constants to connect to the server in index.js

The frontend was made with react, with vite as the local development server and bootstrap as the CSS framework. Important code is stored in the src folder, which is further split into assets, components, and pages. The assets folder holds miscellaneous constants and an unused function taken from github user musicandcode (https://github.com/musicandcode/Metronome.git) which provides a more accurate timer for the metronome that will be implemented in the future. The components folder holds important frontend components, while pages holds the various pages that will be used in the final product. These pages provide users to be able to perform CRUD operations from the front end.

Technical test:

In order to test the metronome, follow the link in the google docs or alternatively click this link: https://665c570d37abf641b1ca22bb--unique-otter-9fa485.netlify.app/. To use the metronome: 1. Move the slider to the desired BPM 2. Press play 3. Press stop 4. Repeat. Since this is a web application, it should not be OS dependent, but do keep in mind that this feature was designed with mobile devices in mind. Login Page:

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