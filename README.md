# Learning Management System (LMS)

This repository contains the source code for a Learning Management System (LMS) developed using the MERN stack (MongoDB, Express.js, React, Node.js), Tailwind CSS, and Cloudinary.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Contributing](#contributing)
- [Support](#support)

## Overview

The Learning Management System (LMS) is a web-based application that facilitates the management and delivery of educational content. It allows administrators to create courses, manage users, and track progress. Users can access courses, view content, and complete assessments.

## Features

- User authentication and authorization (using JWT)
- Course creation, modification, and deletion
- Content upload and management via Cloudinary
- User enrollment in courses and progress tracking
- Interactive user interface using React and Tailwind CSS

## Installation

To get started with the project, clone the repository:

```bash
git clone https://github.com/your-username/Larning-Management-System.git
```

### Frontend Setup

1.  Navigate to the `Client` directory:
    ```bash
    cd Client
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

### Backend Setup

1.  Navigate to the `Server` directory:
    ```bash
    cd Server
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Set up environment variables:
    Create a `.env` file in the `Server` directory and add the following variables:

    ```bash
    PORT = <Port number>
    MONGODB_URL = <Connection_LINK>
    JWT_SECRET = <YOUR_LONG_JWT_SECRET>
    JWT_EXPIRY = <JWT_EXPIRY>

    FRONTEND_URL = <YOUR_FRONTEND_WEBSITE_URL>

    CONTACT_US_EMAIL = <YOUR_CONTACT_US_EMAIL>

    CLOUDINARY_CLOUD_NAME = <YOUR_CLOUDINARY_CLOUD_NAME>
    CLOUDINARY_API_KEY = <YOUR_CLOUDINARY_API_KEY>
    CLOUDINARY_API_SECRET = <YOUR_CLOUDINARY_API_SECRET>

    SMTP_HOST = <YOUR_SMTP_HOST>
    SMTP_PORT = <YOUR_SMTP_POST>
    SMTP_USERNAME = <YOUR_SMTP_USERNAME>
    SMTP_PASSWORD = <YOUR_SMTP_PASSWORD>
    SMTP_FROM_EMAIL = <YOUR_SMTP_FROM_EMAIL>
    ```

## Prerequisites

Before running this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)
- [MongoDB](https://www.mongodb.com/) (v4.x or higher)
- [Cloudinary](https://cloudinary.com/) account and API credentials

## Contributing

We welcome contributions to the Learning Management System. Feel free to create pull requests with your enhancements or bug fixes. Please ensure your contributions adhere to the coding style and conventions used in the project.

## Support

If you encounter any issues or have questions, please open an issue on GitHub, and we'll be happy to assist you.
