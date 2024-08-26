# PixTag - Image Tagging and Search Application

![PixTag Logo](./FrontEnd/src/assets/logo.png)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)


## Overview

PixTag is a web application that allows users to upload images, tag them, and search for images based on tags. It utilizes MongoDB for storing metadata, Cloudinary for image storage, and React.js for the frontend. The application is designed to help users easily manage and search their image collections by associating images with meaningful tags.

## Features

- **Image Upload:** Upload images from your device to Cloudinary.
- **Tagging:** Add tags to your images to categorize them.
- **Search:** Search for images based on tags.
- **Responsive Design:** The application is fully responsive and works well on various devices.
- **User-Friendly Interface:** Clean and intuitive UI for easy navigation.

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB
- Cloudinary Account

### Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

2. **Install Dependencies**

    ```bash
    npm install

3. **Environment Variable**

    ```bash
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    MONGO_URI=your_mongo_db_uri
    PORT=5000

4. **Start the development Server**
    ```bash
    npm run dev

5. **Access the application**
   
    -Open your browser and navigate to http://localhost:5173 

## Usage

### Uploading Images

1. Navigate to the "Upload Image" page.
2. Select an image file from your device.
3. Add tags to describe the image.
4. Click "Upload" to save the image to Cloudinary and store its metadata in MongoDB.

### Searching for Images

1. Go to the "Search Image" page.
2. Enter a tag in the search bar.
3. Click "Search" to display images matching the entered tag.

## Technologies Used

- Frontend: React.js, CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Cloud Storage: Cloudinary
- State Management: React useState
- HTTP Client: Axios
