
# Production-Level Boilerplate for Backend Development

This is a production-ready backend boilerplate built with Node.js, Express, and Mongoose. It incorporates authentication using JSON Web Tokens, secure password hashing with Bcrypt, file uploads via Multer, and cloud storage using Cloudinary. The setup includes environment variable management with `dotenv` and cross-origin resource sharing (CORS).

## Features

- **Authentication**: Secure JWT-based authentication.
- **Password Hashing**: Utilizes Bcrypt for hashing user passwords.
- **File Uploads**: Multer middleware for handling multipart form data (files).
- **Cloud Storage**: Cloudinary integration for image and file storage.
- **Environment Variables**: Managed with `dotenv`.
- **CORS**: Configured to allow cross-origin requests.
- **Database**: MongoDB with Mongoose for data modeling and validation.

## Tech Stack

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building RESTful APIs.
- **Mongoose**: ODM for MongoDB.
- **Bcrypt.js**: Secure password hashing.
- **JSON Web Token (JWT)**: For secure authentication.
- **Multer**: Middleware for handling multipart form data.
- **Cloudinary**: Cloud-based storage for media files.
- **Dotenv**: Environment variable management.
- **CORS**: Middleware for handling cross-origin requests.

## Prerequisites

- **Node.js** (v14 or later)
- **MongoDB** (local or cloud-based)
- **Cloudinary Account** (for media storage)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your `.env` file in the root directory. Example `.env`:

   ```bash
   PORT=3000
   MONGO="mongodb://localhost:27017"
   CORS_ORIGIN=*

   ACCESS_TOKEN_SECRET=
   ACCESS_TOKEN_EXPIRY=1d
   REFRESH_TOKEN_SECRET=
   REFRESH_TOKEN_EXPIRY=10d

   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   ```

4. Start the development server:

   ```bash
   npm run start
   ```

## Usage

- **Authentication Routes**:
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Authenticate a user and return a JWT.

- **File Upload**:
  - `POST /api/upload`: Upload files using Multer, stored on Cloudinary.

## Folder Structure

```
.
├── node_modules
├── public
├── src
│   ├── controllers
│   ├── db
│   │   └── connectDb.js
│   ├── middleware
│   │   └── multer.middleware.js
│   ├── models
│   │   ├── user.model.js
│   │   └── video.model.js
│   ├── routes
│   ├── utils
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   ├── fileUpload.js
│   ├── app.js
│   ├── constants.js
│   └── index.js
├── .env
├── .gitignore
├── .prettierrc
├── package.json
├── package-lock.json
└── README.md
```

## Middleware

1. **Multer**: Configured for handling file uploads.
2. **Cloudinary**: Used to store uploaded files in the cloud.
3. **JWT Authentication**: Protects routes using JSON Web Tokens.

## API Endpoints

- **Authentication**:
  - `POST /api/auth/register`
  - `POST /api/auth/login`

- **File Upload**:
  - `POST /api/upload`

- **Protected Routes**:
  Example: `GET /api/protected`, accessible only with valid JWT.

## Environment Variables

- `PORT`: Port number for the server (default is 3000).
- `MONGO`: MongoDB connection URI.
- `CORS_ORIGIN`: Allowed origins for cross-origin requests.
- `ACCESS_TOKEN_SECRET`: Secret key for JWT access tokens.
- `ACCESS_TOKEN_EXPIRY`: Expiration time for access tokens.
- `REFRESH_TOKEN_SECRET`: Secret key for JWT refresh tokens.
- `REFRESH_TOKEN_EXPIRY`: Expiration time for refresh tokens.
- `CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name for file storage.
- `CLOUDINARY_API_KEY`: Cloudinary API key.
- `CLOUDINARY_API_SECRET`: Cloudinary API secret.

## Contributing

Feel free to fork the repository and submit pull requests for improvements and new features.

## License

This project is licensed under the MIT License.
