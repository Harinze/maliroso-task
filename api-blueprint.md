SignUp page for Product API

Request
var request = require('request');
var options = {
'method': 'POST',
'url': 'localhost:4000/signup',
'headers': {
'Content-Type': 'application/json'
},
body: JSON.stringify({
"username": "Juan Lee",
"email": "juanlee@gmail.com",
"password": "12345",
"fullname": "Kingsley"
}) 
};
request(options, function (error, response) {
if (error) throw new Error(error);
console.log(response.body);
}); 
Response
{ "message": "User registered successfully", "user": { "username": "Juan Lee", "email": "juanlee@gmail.com", "password": "$2b$10$veiVHJfSrocJ6qUCNKehEeLfc82yLgWNRUKLOoI31gfefmhzq2JZq", "fullname": "Kingsley", "userId": "65a9f95488b441415287c467", "products": [], "_id": "65a9f95488b441415287c468", "__v": 0 } }


LOGIN ENDPOINT

Request
var request = require('request'); var options = { 'method': 'POST', 'url': 'localhost:4000/login', 'headers': { 'Content-Type': 'application/json', 'Authorization': 'Access-token' }, body: JSON.stringify({ "email": "juanlee@gmail.com", "password": "12345" })
}; request(options, function (error, response) { if (error) throw new Error(error); console.log(response.body); });

Response
{ "token": "Access-token", "message": "Login Successfully", "user": { "_id": "65a9f95488b441415287c468", "username": "Juan Lee", "email": "juanlee@gmail.com", "password": "$2b$10$veiVHJfSrocJ6qUCNKehEeLfc82yLgWNRUKLOoI31gfefmhzq2JZq", "fullname": "Kingsley", "userId": "65a9f95488b441415287c467", "products": [ "65a9f9b288b441415287c46c" ], "__v": 1 } }


LOGOUT ENDPOINT

Request
var request = require('request');
var options = {
'method': 'POST',
'url': 'localhost:4000/logout',
'headers': {
'Content-Type': 'text/plain',
'Authorization': 'Access-token'
},
body: '{\n \n}' 
};
request(options, function (error, response) {
if (error) throw new Error(error);
console.log(response.body);
}); 

Response
{ "message": "Logout successful" }


CREATE PRODUCT ENDPOINT

Request
var request = require('request');   var options = {   'method': 'POST',   'url': 'localhost:4000/createproducts',   'headers': {   'Content-Type': 'application/json',   'Authorization': 'Access-token'   },   body: JSON.stringify({   "productName": "Laptop",   "price": 150000,   "quantity": 2,   "description": "Lenovo sdk",   "image": "image-link"   })
};   request(options, function (error, response) {   if (error) throw new Error(error);   console.log(response.body);   });

Response
{ "message": "Product created successfully", "product": { "productName": "Laptop", "price": 150000, "quantity": 2, "description": "Lenovo sdk", "image": "image-link", "user": "65a9f95488b441415287c468", "_id": "65aa0030f6568249fc85e9ba", "productId": "65aa0030f6568249fc85e9bb", "__v": 0 } }

GET PRODUCTS ENDPOINT

Request
var request = require('request');   var options = {   'method': 'GET',   'url': 'localhost:4000/products',   'headers': {   }   };   request(options, function (error, response) {   if (error) throw new Error(error);   console.log(response.body);   });

Response
[ { "_id": "65a959dfe108384ecd0ffe5c", "productName": "Shoes", "price": 40000, "quantity": 2, "description": "Brown high shoe", "image": "image-link", "v": 0,  
"productId": "65a9faf488b441415287c477"  
},  
{  
"_id": "65a959fce108384ecd0ffe5e",  
"productName": "Shoes",  
"price": 40000,  
"quantity": 2,  
"description": "Brown high shoe",  
"image": "image-link",  
"v": 0, "productId": "65a9faf488b441415287c478" }, { "_id": "65a95a0ce108384ecd0ffe60", "productName": "Shoes", "price": 45000, "quantity": 5, "description": "Brown high shoe", "image": "image-link", "v": 0,  
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
"v": 0 }, { "_id": "65a97d2da886f31b49188385", "productName": "Shoes okk", "price": 45000, "quantity": 5, "description": "Brown high shoe", "image": "image-link", "productId": "65a97d2da886f31b49188384", "v": 0  
},  
{  
"_id": "65a983c0a886f31b4918838d",  
"productName": "Shoes okk",  
"price": 45000,  
"quantity": 5,  
"description": "Brown high shoe",  
"image": "image-link",  
"productId": "65a983c0a886f31b4918838c",  
"v": 0 }, { "_id": "65a98f5cdd77f84915a3cb2b", "productName": "Shoes my shuy", "price": 4000, "quantity": 5, "description": "Brown high shoey", "image": "image-link y", "user": "65a96c31468f843061bd181f", "productId": "65a98f5cdd77f84915a3cb2c", "v": 0  
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
"v": 0 }, { "_id": "65a9f9b288b441415287c46c", "productName": "Laptop", "price": 150000, "quantity": 2, "description": "Lenovo sdk", "image": "image-link", "user": "65a9f95488b441415287c468", "productId": "65a9f9b288b441415287c46d", "__v": 0 } ]

PLACE ORDER ENDPOINT

Request
var request = require('request');   var options = {   'method': 'POST',   'url': 'localhost:4000/placeorder',   'headers': {   'Content-Type': 'application/json',   'Authorization': 'Access-token'   },   body: JSON.stringify({   "productId": "65a9f9b288b441415287c46d",   "quantity": 3   })
};   request(options, function (error, response) {   if (error) throw new Error(error);   console.log(response.body);   });

Response
{ "message": "Order placed successfully", "order": { "product": "65a9f9b288b441415287c46d", "quantity": 3, "amount": 450000, "user": "65a9f95488b441415287c468", "_id": "65a9f9f188b441415287c474", "__v": 0 } }


UPDATE PRODUCT ENDPOINT

Request
var request = require('request');   var options = {   'method': 'PUT',   'url': 'localhost:4000/products/65a98f5cdd77f84915a3cb2c',   'headers': {   'Content-Type': 'application/json',   'Authorization': 'Access-token'   },   body: JSON.stringify({   "productName": "Shoes my shuy",   "description": "Brown high shoey",   "quantity": 5,   "price": 4000,   "image": "image-link y"   })
};   request(options, function (error, response) {   if (error) throw new Error(error);   console.log(response.body);   });

Response
{ "message": "Product updated successfully", "product": { "productName": "Shoes my shuy", "price": 4000, "quantity": 5, "description": "Brown high shoey", "image": "image-link y", "productId": "65a98f5cdd77f84915a3cb2c", "user": "65a96c31468f843061bd181f", "_id": "65a98f5cdd77f84915a3cb2b", "__v": 0 } }

DELETE PRODUCT ENDPOINT

Request
var request = require('request');   var options = {   'method': 'DELETE',   'url': 'localhost:4000/products/65aa0030f6568249fc85e9bb',   'headers': {   'Authorization': 'Access-token'   }   };   request(options, function (error, response) {   if (error) throw new Error(error);   console.log(response.body);   });

Response
{ "message": "Product deleted successfully", "product": { "_id": "65aa0030f6568249fc85e9ba", "productName": "Laptop", "price": 150000, "quantity": 2, "description": "Lenovo sdk", "image": "image-link", "user": "65a9f95488b441415287c468", "productId": "65aa0030f6568249fc85e9bb", "__v": 0 } }
