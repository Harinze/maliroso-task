# Product Management API

This API allows you to manage products in a store.

## Group Products

### Product [/products]

#### Create a Product [POST]

+ Request (application/json)

 curl --location --request POST 'localhost:4000/createproducts' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWE5Zjk1NDg4YjQ0MTQxNTI4N2M0NjgiLCJlbWFpbCI6Imp1YW5sZWVAZ21haWwuY29tIiwiaWF0IjoxNzA1NjM4MjU0LCJleHAiOjE3MDU2NDE4NTR9.PJxe2NOYKMnPNzdyC_J8M9MMdAFFulrnSIzBXWnpFsk' \
--data '{
    "productName":"Laptop",
    "price":150000,
      "quantity":2,
      "description":"Lenovo sdk",
      "image":"image-link"
}'

+ Response 201 (application/json)

    + Body

          {
    "message": "Product created successfully",
    "product": {
        "productName": "Laptop",
        "price": 150000,
        "quantity": 2,
        "description": "Lenovo sdk",
        "image": "image-link",
        "user": "65a9f95488b441415287c468",
        "_id": "65a9f9b288b441415287c46c",
        "productId": "65a9f9b288b441415287c46d",
        "__v": 0
    }
}

#### Get All Products [GET]

+ Request (application/json)


           curl --location --request GET 'localhost:4000/products'

+ Response 200 (application/json)

    + Body

            [
    {
        "_id": "65a959dfe108384ecd0ffe5c",
        "productName": "Shoes",
        "price": 40000,
        "quantity": 2,
        "description": "Brown high shoe",
        "image": "image-link",
        "__v": 0,
        "productId": "65a9faf488b441415287c477"
    },
    {
        "_id": "65a959fce108384ecd0ffe5e",
        "productName": "Shoes",
        "price": 40000,
        "quantity": 2,
        "description": "Brown high shoe",
        "image": "image-link",
        "__v": 0,
        "productId": "65a9faf488b441415287c478"
    },
    {
        "_id": "65a95a0ce108384ecd0ffe60",
        "productName": "Shoes",
        "price": 45000,
        "quantity": 5,
        "description": "Brown high shoe",
        "image": "image-link",
        "__v": 0,
        "productId": "65a9faf488b441415287c479"
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
    },
    {
        "_id": "65a98f5cdd77f84915a3cb2b",
        "productName": "Shoes my shuy",
        "price": 4000,
        "quantity": 5,
        "description": "Brown high shoey",
        "image": "image-link y",
        "user": "65a96c31468f843061bd181f",
        "productId": "65a98f5cdd77f84915a3cb2c",
        "__v": 0
    },
    {
        "_id": "65a98f6fdd77f84915a3cb30",
        "productName": "Shoes my shu",
        "price": 45000,
        "quantity": 5,
        "description": "Brown high shoe",
        "image": "image-link",
        "user": "65a96c31468f843061bd181f",
        "productId": "65a98f6fdd77f84915a3cb31",
        "__v": 0
    },
    {
        "_id": "65a9f9b288b441415287c46c",
        "productName": "Laptop",
        "price": 150000,
        "quantity": 2,
        "description": "Lenovo sdk",
        "image": "image-link",
        "user": "65a9f95488b441415287c468",
        "productId": "65a9f9b288b441415287c46d",
        "__v": 0
    }
]

### Product [/products/{productId}]

#### Update a Product [PUT]

+ Request (application/json)

    + Headers
curl --location --request PUT 'localhost:4000/products/65a98f5cdd77f84915a3cb2c' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWE5NmMzMTQ2OGY4NDMwNjFiZDE4MWYiLCJlbWFpbCI6IklLc0BnbWFpbC5jb20iLCJpYXQiOjE3MDU2MzMyOTgsImV4cCI6MTcwNTYzNjg5OH0._qymrJ56bwltkBNMph5zW40-ydtvsNuvqk487RvQS0Y' \
--data '{
    "productName":"Shoes my shuy",
    "description":"Brown high shoey",
      "quantity":5,
      "price":4000,
      "image":"image-link y"
}'



+ Response 200 (application/json)

    + Body

            {
    "message": "Product updated successfully",
    "product": {
        "productName": "Shoes my shuy",
        "price": 4000,
        "quantity": 5,
        "description": "Brown high shoey",
        "image": "image-link y",
        "productId": "65a98f5cdd77f84915a3cb2c",
        "user": "65a96c31468f843061bd181f",
        "_id": "65a98f5cdd77f84915a3cb2b",
        "__v": 0
    }
}

#### Delete a Product [DELETE]

+ Request (application/json)

    + Headers

            curl --location --request DELETE 'localhost:4000/products/65aa0030f6568249fc85e9bb' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWE5Zjk1NDg4YjQ0MTQxNTI4N2M0NjgiLCJlbWFpbCI6Imp1YW5sZWVAZ21haWwuY29tIiwiaWF0IjoxNzA1NjM5MTMwLCJleHAiOjE3MDU2NDI3MzB9.KFivCCxSw-7OkG_I6tEY54Jj1NoZxU1VgpgDXkaZcbw'

+ Response 200 (application/json)

    + Body

            {
    "message": "Product deleted successfully",
    "product": {
        "_id": "65aa0030f6568249fc85e9ba",
        "productName": "Laptop",
        "price": 150000,
        "quantity": 2,
        "description": "Lenovo sdk",
        "image": "image-link",
        "user": "65a9f95488b441415287c468",
        "productId": "65aa0030f6568249fc85e9bb",
        "__v": 0
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

#### LOGIN [POST]
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