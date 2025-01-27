# MERN Advanced Authentication

**Developed By:** Eranda Samarasinghe
<hr />

## Project Backgroud and Overview
Focused on mastering back-end and full-stack development, this secure authentication application was built using the MERN stack. The project emphasizes best practices in API security, scalable architecture, and database management, while also incorporating advanced testing techniques to ensure reliability.
<hr />

## Project Goals
The main objectives of this application are to:

1. Implementing JWT-based authentication for securing API endpoints and managing user sessions.
2. Developing a scalable architecture using modular coding patterns with Node.js and Express.js.
3. Leveraging MongoDB as the primary database for efficient and flexible data storage.
4. Integrating frontend authentication workflows using React.js to deliver a seamless user experience.
<hr />

## Technical Details
Core technologies used: 

- **MERN Stack, JWT Authentication**
<hr />

## Configuration
1. Set up environment variables:
```sh
# MongoDB Connection URI
MONGO_URI = mongo_uri

# Application Port
PORT = 5000

# JWT Secret Key for Authentication
JWT_SECRET = secret_key

# Environment Mode (development or production)
NODE_ENV = development

# Mailtrap Configuration for Email Handling
MAILTRAP_TOKEN = mailtrap_token
MAILTRAP_ENDPOINT = https://send.api.mailtrap.io/

# Frontend Application URL
CLIENT_URL = http://localhost:5173

```
<hr />

## Installation
1. Clone repository:
   ```sh
   git clone https://github.com/dev-eranda/mern-auth-techniques
   
2. Install dependencies:
   ```sh
   npm install

3. Build the Frontend Application:
   ```sh
   npm run build

4. Start the Server Application:
   ```sh
   npm start
   
  - **Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.**
