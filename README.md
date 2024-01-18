# Product Management API

This API provides endpoints for managing products in a store. It includes functionalities for creating, retrieving, updating, and deleting products.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB server running

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Harinze/maliroso-task.git
   
2. Navigate to the project directory:
   cd maliroso-task

3. Install dependencies:
   npm install

4. Start the server:
   npm start


## API Documentation
API documentation is available in API Blueprint format. 
You can view the documentation by opening the api-documentation.md file. 

## Endpoints
Create a Product: POST /products
Get All Products: GET /products
Update a Product: PUT /products/{productId}
Delete a Product: DELETE /products/{productId}

## Authentication
All endpoints except for the GET /products endpoint require authentication. 
Include a valid access token in the Authorization header to access these endpoints.

