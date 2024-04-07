Tech Stacks involved --> HTML, Tailwind CSS, React, JavaScript, NodeJS, Express and MongoDB. Provides options to add a new Story and displays all the stories dynamically 
in real time. The recent uploaded story will be given priority and will be displayed at the start. The images are uploaded on Cloudinary through multer. A new story will be displayed as soon as its get added because of the use of socket.io library.

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

cd backend
npm install
npm run dev ( in package.json(), add a script for "dev" : "nodemon index.js

To run frontend : 

cd frontend
npm install 
npm run dev

****** SNAPSHOTS *****

(1) This is the home page where all the stories will be displayed

![Screenshot 2024-04-07 233019](https://github.com/Swarnim2410/WebPe/assets/131441406/d86a2101-6136-4166-95fa-62da3ef48afb)

(2) This is the add story section where one can add a new story (The actual access will only be provided to an admin)

![Screenshot 2024-04-07 232528](https://github.com/Swarnim2410/WebPe/assets/131441406/9ea19f40-ca5d-4994-b395-521c7440d3a6)

(3) Home section display in mobile version

![Screenshot 2024-04-07 232424](https://github.com/Swarnim2410/WebPe/assets/131441406/001f6e73-a71e-4e01-9625-c0d4a5a91f7b)

(4) Add story section display in mobile version

![Screenshot 2024-04-07 232442](https://github.com/Swarnim2410/WebPe/assets/131441406/7a1529da-5530-4e55-93d3-a5a4aa5c5847)

