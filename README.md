# MERN advanced authentication

**Developed by:** Eranda Samarasinghe
<hr />

## Project Background and Overview
This repository focuses on full-stack development using the MERN stack. It highlights API security, scalable architecture, and database management, while also implementing advanced 2FA authentication using email OTP. Additionally, it is integrated with CI/CD and deployed on AWS EC2 helping to learn cloud infrastructure and automation
<hr />

## Project Goals
The main objectives of this application are to:

1. Implemented JWT authentication to secure API endpoints and manage sessions
2. Built a scalable architecture with modular code using Node.js and Express.js
3. Used MongoDB for efficient and flexible data storage
4. Integrated frontend authentication in React for a smooth user experience
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
   git clone https://github.com/dev-eranda/mern-auth-techniques.git
   
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
