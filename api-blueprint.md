# Product Management API

This API allows you to manage products in a store.

## Group Products

### Product [/products]

#### Create a Product [POST]

+ Request (application/json)

 curl --location 'localhost:4000/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "Kingsley",
    "email": "IKHsw@gmail.com",
    "password": "12345",
    "fullname": "Kingsley"
}'

+ Response 201 (application/json)

    + Body

            {
                "message": "Product created successfully",
                "product": {
                    "productName": "Example Product",
                    "description": "This is an example product",
                    "amount": 100,
                    "quantity": 10,
                    "price": 50
                }
            }

#### Get All Products [GET]

+ Request (application/json)

    + Headers

            Authorization: Bearer <verifyToken>

+ Response 200 (application/json)

    + Body

            [
                {
                    "productName": "Example Product",
                    "description": "This is an example product",
                    "amount": 100,
                    "quantity": 10,
                    "price": 50
                },
                // More products...
            ]

### Product [/products/{productId}]

#### Update a Product [PUT]

+ Request (application/json)

    + Headers

            Authorization: Bearer <VerifyToken>

    + Body

            {
                "productName": "Updated Product",
                "description": "Description of the product",
                "amount": 150,
                "quantity": 20,
                "price": 75
            }

+ Response 200 (application/json)

    + Body

            {
                "message": "Product updated successfully",
                "product": {
                    "productName": "Updated Product",
                    "description": "Description of the product",
                    "amount": 150,
                    "quantity": 20,
                    "price": 75
                }
            }

#### Delete a Product [DELETE]

+ Request (application/json)

    + Headers

            Authorization: Bearer <VerifyToken>

+ Response 200 (application/json)

    + Body

            {
                "message": "Product deleted successfully",
                "product": {
                    "productName": "Updated Product",
                    "description": "This product has been deleted",
                    "amount": 150,
                    "quantity": 20,
                    "price": 75
                }
            }


#### SIGNUP [POST]
+ Request (application/json)

curl --location 'localhost:4000/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "Kingsley",
    "email": "IKHsw@gmail.com",
    "password": "12345",
    "fullname": "Kingsley"
}'

+ Response 200 (application/json)
{
    "message": "User registered successfully",
    "user": {
        "username": "Kingsley",
        "userId": "65a97d60a886f31b49188389",
        "email": "IKHsw@gmail.com",
        "password": "$2b$10$oZlqU0RA2aKwsjnBvhk9ku4VayvNsd56W0z6WnA1BCyJfBSfhcDAS",
        "fullname": "Kingsley",
        "_id": "65a97d60a886f31b4918838a",
        "__v": 0
    }
}

#### SIGNUP [POST]
+ Request (application/json)

curl --location 'localhost:4000/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "IKs@gmail.com",
    "password": "12345"
}'

+ Response 200 (application/json)
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWE5NmMzMTQ2OGY4NDMwNjFiZDE4MWYiLCJlbWFpbCI6IklLc0BnbWFpbC5jb20iLCJpYXQiOjE3MDU2MDY0MjQsImV4cCI6MTcwNTYxMDAyNH0.EEsXW5_B1M1RayPChsE18rIRlyZbFpq2DzQRyYWo0cA",
    "message": "Login Successfully",
    "user": {
        "_id": "65a96c31468f843061bd181f",
        "username": "Kingsley",
        "userId": "65a96c31468f843061bd181e",
        "email": "IKs@gmail.com",
        "password": "$2b$10$Gh8PVlR3SNi4gzNYpRqS8OhfuqAVuNNSMrAmmsoE8MjP3cPCj/cxC",
        "fullname": "Kingsley",
        "__v": 0
    }
}

#### LOGOUT [POST]
+ Request (application/json)

curl --location 'localhost:4000/logout' \
--header 'Content-Type: text/plain' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTYzZWM4MzZkNWNmNzdiMmM5OGZjNjAiLCJpYXQiOjE3MDEwNDc1NTgsImV4cCI6MTcwMTY1MjM1OH0.LJkMt17rcihFn4-qtDMoUzJHrZLrvH9pXvg-PVAEnDE' \
--data '{
    
}'

+ Response 200 (application/json)

{
    "message": "Logout successful"
}


#### CREATE PRODUCT [POST]
+ Request (application/json)

curl --location --request POST 'localhost:4000/createproducts' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWE5NmMzMTQ2OGY4NDMwNjFiZDE4MWYiLCJlbWFpbCI6IklLc0BnbWFpbC5jb20iLCJpYXQiOjE3MDU2MDY0MjQsImV4cCI6MTcwNTYxMDAyNH0.EEsXW5_B1M1RayPChsE18rIRlyZbFpq2DzQRyYWo0cA' \
--data '{
    "productName":"Shoes okk",
    "price":45000,
      "quantity":5,
      "description":"Brown high shoe",
      "image":"image-link"
}'


+ Response 200 (application/json)

{"message":"Product created successfully","product":{"productName":"Shoes okk","price":45000,"quantity":5,"description":"Brown high shoe","image":"image-link","productId":"65a983c0a886f31b4918838c","_id":"65a983c0a886f31b4918838d","__v":0}}


#### GET PRODUCTS [GET]
+ Request (application/json)

curl --location --request GET 'localhost:4000/products'

+ Response 200 (application/json)

[
    {
        "_id": "65a959dfe108384ecd0ffe5c",
        "productName": "Shoes",
        "price": 40000,
        "quantity": 2,
        "description": "Brown high shoe",
        "image": "image-link",
        "__v": 0
    },
    {
        "_id": "65a959fce108384ecd0ffe5e",
        "productName": "Shoes",
        "price": 40000,
        "quantity": 2,
        "description": "Brown high shoe",
        "image": "image-link",
        "__v": 0
    },
    {
        "_id": "65a95a0ce108384ecd0ffe60",
        "productName": "Shoes",
        "price": 45000,
        "quantity": 5,
        "description": "Brown high shoe",
        "image": "image-link",
        "__v": 0
    },
    {
        "_id": "65a9637ad0e862ed595fcd99",
        "productName": "Shoes okk",
        "price": 45000,
        "quantity": 5,
        "description": "Brown high shoe",
        "image": "image-link",
        "productId": "65a9637ad0e862ed595fcd98",
        "__v": 0
    },
    {
        "_id": "65a97d2da886f31b49188385",
        "productName": "Shoes okk",
        "price": 45000,
        "quantity": 5,
        "description": "Brown high shoe",
        "image": "image-link",
        "productId": "65a97d2da886f31b49188384",
        "__v": 0
    },
    {
        "_id": "65a983c0a886f31b4918838d",
        "productName": "Shoes okk",
        "price": 45000,
        "quantity": 5,
        "description": "Brown high shoe",
        "image": "image-link",
        "productId": "65a983c0a886f31b4918838c",
        "__v": 0
    }
]


#### Place Order [POST]
+ Request (application/json)

curl --location --request GET 'localhost:4000/products'



curl --location --request POST 'localhost:4000/placeorder' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWE5NmMzMTQ2OGY4NDMwNjFiZDE4MWYiLCJlbWFpbCI6IklLc0BnbWFpbC5jb20iLCJpYXQiOjE3MDU2MTMzNDgsImV4cCI6MTcwNTYxNjk0OH0.xqJAGYDMEhfon0LHEE1UZBFX0OepW2rmZ3cjM1UrlM4' \
--data '{
    "productId": "65a98f5cdd77f84915a3cb2c",
    "quantity": 3
}'

+ Response 200 (application/json)

{
    "message": "Order placed successfully",
    "order": {
        "product": "65a98f5cdd77f84915a3cb2c",
        "quantity": 3,
        "amount": 135000,
        "user": "65a96c31468f843061bd181f",
        "_id": "65a99a0681faad46defd50d0",
        "__v": 0
    }
}