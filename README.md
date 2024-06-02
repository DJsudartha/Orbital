ReVerb is a music training application.

Code Documentation

Metronome:

Description: 

The metronome feature allows users to quickly practice songs with the ability to choose a BPM with an interactive slider and play an audio click to follow along to their favourite songs. Currently, the metronome has a functional while albeit simple click function that responds to the slider and updates the click whenever the play button is clicked if the click has been stopped with the stop button.

In the future, we plan to add a feature where different time signatures can be chosen, in order to expand the pool of songs that users can play along to. Following that philosophy, we plan to implement basic CRUD functionality in order for users to save certain presets for songs and refer back to those presets with ease, decreassing the friction of practice. Both plans have already had their foundations built, further explained in the code description. We also plan to iteratively improve the basic click functionality, by making the click respond to slider movements without the need to stop and start the slider.

Code description:

The metronome is made up of two different folders, split by backend and frontend functionalities. 

The backend has been set up and shows responsiveness when performing basic CRUD operations using postman. However, it has not been implemented alongside the frontend for users to use. The backend was built with express JS, node JS and MongoDB and written in JS, fulfilling the roles of a web application framework, a runtime environment, as well as a database. The models folder holds all the models for the database, currently one: SongMetronome. The routes folder holds the different routes for CRUD functionality. Port.js holds miscellaneous constants to connect to the server in index.js

The frontend was made with react, with vite as the local development server and bootstrap as the CSS framework. Important code is stored in the src folder, which is further split into assets, components, and pages. The assets folder holds miscellaneous constants and an unused function taken from github user musicandcode (https://github.com/musicandcode/Metronome.git) which provides a more accurate timer for the metronome that will be implemented in the future. The components folder holds important frontend components, while pages holds the various pages that will be used in the final product. These pages provide users to be able to perform CRUD operations from the front end.

Technical test:

In order to test the metronome, follow the link in the google docs or alternatively click this link: https://665c570d37abf641b1ca22bb--unique-otter-9fa485.netlify.app/. To use the metronome: 1. Move the slider to the desired BPM 2. Press play 3. Press stop 4. Repeat. Since this is a web application, it should not be OS dependent, but do keep in mind that this feature was designed with mobile devices in mind. 