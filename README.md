As part of the Web Development Intern application at University Insights, I have developed a full-stack web application using modern web technologies such as Next.js, ReactJS, Node.js, Express.js, MongoDB, and Tailwind CSS. The purpose of this web application is to provide a platform for student interaction, with key features including student registration, login, profile management, and application tracking.

*Frontend Development:
The frontend of the application is built using ReactJS combined with Next.js to create a fast, SEO-friendly, and scalable web application. Tailwind CSS is used for styling the components, enabling a highly responsive design. The user interface includes several interactive elements, such as forms for registration and login, along with a student dashboard where users can view their profile and application status.

UI/UX Design: The design is optimized for both desktop and mobile devices, ensuring a smooth experience across various screen sizes. The key components of the frontend are:

Student Registration Form: A simple form for users to sign up with their personal details.
Login Form: A form for existing users to authenticate and gain access to their dashboard.
Dashboard: A personalized page where students can manage their profile, view their application status, and perform other interactive actions.
ReactJS/Next.js Integration: Next.js ensures server-side rendering for faster page loads and provides SEO optimization. React components are used for dynamic and reusable UI elements. The app is connected to the backend through Axios for seamless API calls.

Backend Development:
The backend is developed using Node.js and Express.js, which provide a powerful foundation for creating RESTful APIs. The server handles requests from the frontend, processes the data, and interacts with the database.

RESTful APIs:

Authentication API: Handles student login, user verification, and JWT-based authentication to ensure secure access to the system.
Student API: Manages student registration, profile details, and application tracking.
JWT Authentication: JSON Web Tokens (JWT) are used for secure authentication. Once a student logs in, a token is generated and sent back to the frontend to be stored in localStorage. This token is then included in subsequent requests to the backend to verify the user’s identity and ensure secure communication.
Database: I’ve used MongoDB for data management, specifically using Mongoose to interact with the database. MongoDB is chosen for its flexibility and scalability, allowing efficient storage of user data, applications, and other dynamic content.

Key Features Implemented:
Student Registration & Login System: The application allows students to register using their details (name, email, password). After successful registration, they can log in using their credentials. JWT authentication ensures that only authorized users can access protected routes and perform sensitive actions.

Student Dashboard: Once logged in, students are redirected to their dashboard, where they can view and edit their profile information. The dashboard also shows an overview of their applications, along with their current status.

Deployment:
Frontend Deployment: The frontend is hosted on Vercel, providing automatic deployment from GitHub. The platform ensures smooth continuous deployment, and any changes pushed to the repository are automatically reflected on the live site.

Backend Deployment: The backend is hosted on Render for easy scalability and integration with MongoDB. Render is chosen for its simplicity in deploying Node.js applications, and it ensures that the application runs smoothly without any downtime.

Instructions for Running the Application Locally:
Prerequisites:
Install Node.js and npm.
Set up a MongoDB database (either locally or on a service like MongoDB Atlas).
Installation:
Clone the repository to your local machine.
Navigate to the project directory. You will need to run two different terminals:
cd server – For Frontend
cd api – For Backend
Install dependencies for both frontend and backend:
For frontend: npm install
For backend: npm install
Create a .env file in the root directory with the following content:
ini
Copy
MONGODB_URI=mongodb://localhost/your-database-name
Replace your-database-name with the name of your MongoDB database.
Start the backend server:
Run nodemon start in the ems/api directory.
If you encounter issues, try running with PowerShell:
sql
Copy
PowerShell -ExecutionPolicy Bypass nodemon start
Start the frontend:
Run npm run dev in the ems/client directory.
The application should now be running:
Frontend: http://localhost:5173
Backend: http://localhost:4000
Conclusion:
This project demonstrates my ability to build a full-stack web application using modern tools and frameworks. By integrating Next.js, ReactJS, Node.js, Express.js, and MongoDB, I have created a responsive, secure, and functional platform for student interaction. The deployment on Vercel and Render ensures that the application is accessible and scalable. This project is a valuable addition to my portfolio, showcasing my skills in web development and API design.

Thank you for considering my application, and I look forward to the opportunity to further discuss my work.

Live Demo Links:

Frontend: [Vercel URL]
Backend: [Render URL]
GitHub Repository:
[GitHub Repository Link]