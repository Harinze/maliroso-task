# Product Management API

This API allows you to manage products in a store.

## Group Products

### Product [/products]

#### Create a Product [POST]

+ Request (application/json)

    + Headers

            Authorization: Bearer <access_token>

    + Body

            {
                "productName": "Example Product",
                "description": "This is an example product",
                "amount": 100,
                "quantity": 10,
                "price": 50
            }

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
                "description": "This product has been updated",
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
                    "description": "This product has been updated",
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
                    "description": "This product has been updated",
                    "amount": 150,
                    "quantity": 20,
                    "price": 75
                }
            }

