Tech Stacks involved --> HTML, Tailwind CSS, React, JavaScript, NodeJS, Express and MongoDB. Provides options to add a new Story and displays all the stories dynamically 
in real time. The recent uploaded story will be given priority and will be displayed at the start. The images are uploaded on Cloudinary through multer.

Backend Environment variables :

MONGO_URL : --> provide MongoDB url <--
PORT : --> port number to run the backend server <--
CLOUDINARY_CLOUD_NAME : --> Provide cloudinary name <--
CLOUDINARY_API_KEY : --> Provide api key of cloudinary <--
CLOUDINARY_API_SECRET : --> Cloudinary api secret <--
FRONTEND_URL : --> frontend url <--

Frontend Environment variables :

VITE_APP_DOMAIN = --> backend url <--

To run backend : 

npm install
npm run dev ( in package.json(), add a script for "dev" : "nodemon index.js

To run frontend : 

npm install 
npm run dev
