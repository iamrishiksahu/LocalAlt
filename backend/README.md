
### Developer Documentation
- index.js is the base level entry file 
- routes are defined inside the routes folder
- default port is 8001

# vendor= uid=zGL8PUJJ3NcdruVeFGDJG91hLBF2
# customer= uid=eBgnibrTPqMG0QmBjtwv9KVnnRj2

## endpoints

### register using email and password
- POST(http://localhost:8001/auth/register)
- body:

IMPORTANT: role is 0 for customer and 1 for vendor
```
{
  "name":"Rishik Sahu",
  "email": "iamrishiksahu@gmail.com",
  "password":"test@aryan",
  "role":"1",
  "contact":"9470380221",
  "locality":"Ranchi",
  "longitude":"85.015",
  "latitude":"23.06",
  "address": {
      "address_line_1":"Shop 156, Hostel 5, BIT Mesra",
      "address_line_2":"Ranchi",
      "city":"Ranchi",
      "pincode":"835215"
  }
}
```
- Payload- 
```
{
    "message": "Registration successful",
    "user": {
        "uid": "b6WmnL9gvrN92D901HvM46adbNl2",
        "documentId": "b6WmnL9gvrN92D901HvM46adbNl2",
        "email": "testalpha@gmail.com",
        "emailVerified": false,
        "phoneNumber": "1234567890",
        "displayName": "test123",
        "role": "0",
        "location": "Kanke",
        "longitude": "24",
        "latitude": "37",
        "address": {
            "address_line_1": "sample address",
            "address_line_2": "sample address2",
            "city": "Ranchi",
            "pincode": "800001"
        },
        "tenantId": null,
        "providerData": [
            {
                "providerId": "password",
                "uid": "testalpha@gmail.com",
                "displayName": null,
                "email": "testalpha@gmail.com",
                "phoneNumber": null,
                "photoURL": null
            }
        ]
    }
}
```

### login using email and password 

- POST (http://localhost:8001/auth/login)
- body: 
```
{
  "email": "aryanraj2k25@gmail.com",
  "password": "test@aryan"
}
```
- payload format
```
{
    "message": "Login successful",
    "user": {
        "uid": "eBgnibrTPqMG0QmBjtwv9KVnnRj2",
        "email": "aryanraj2k25@gmail.com",
        "emailVerified": false,
        "isAnonymous": false,
        "providerData": [
            {
                "providerId": "password",
                "uid": "aryanraj2k25@gmail.com",
                "displayName": null,
                "email": "aryanraj2k25@gmail.com",
                "phoneNumber": null,
                "photoURL": null
            }
        ],
        "stsTokenManager": {
            "refreshToken": "AMf-vBwOM5WlW8jFvo3b5rrPssgQLve0AtCeccTVd8g1FX9XYMNG1eGnxHRB0ibPU2-iAw4oYCd_huGlTma7LBGg02rwl5E1-J2LJP_nVcYJE54gJMQhONodUSXkqa-GdnNXSYyXw8L9Fug8249XcYwoCZG6cFmhhaxIKejqCVwyc8WjWRUTf7np-pD12f6G5iTJ0d5anz2y",
            "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ0OWU0N2ZiZGQ0ZWUyNDE0Nzk2ZDhlMDhjZWY2YjU1ZDA3MDRlNGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbG9jYWxhbHQiLCJhdWQiOiJsb2NhbGFsdCIsImF1dGhfdGltZSI6MTY5OTEwNjE1OSwidXNlcl9pZCI6ImVCZ25pYnJUUHFNRzBRbUJqdHd2OUtWbm5SajIiLCJzdWIiOiJlQmduaWJyVFBxTUcwUW1CanR3djlLVm5uUmoyIiwiaWF0IjoxNjk5MTA2MTU5LCJleHAiOjE2OTkxMDk3NTksImVtYWlsIjoiYXJ5YW5yYWoyazI1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhcnlhbnJhajJrMjVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.d64NWlLlrplU9eK1xzmFw6WO6Z4knzaHc585jkUO81jJlhlFzv9TnUWiaSWueH93k07ADTratHxmenCZdXDsbncljyweO8vlp7spAe0VwkOEDBV_UcwN1etXtC_QN7cBOG41ZTFY7meGBdHZqA2kc9HuykAkIvTQ6L6aQnvUdpCVZ-x6AYrJUZ4g8TB0ahdAuwN-EvtU2IxJ4rIWtzg_SAp7yyXi13uPr5Bfp5nIlU_Lvd5CHMqu3DLXKJIpL9lrmXan8tbxH2AYmXaY70XFbetE5ujNFJqRAeZdFp0mXy_ok_HJVINj1RH-9qncr62gPWjTb7cKFVTK5sPVKRjSAA",
            "expirationTime": 1699109760052
        },
        "createdAt": "1699105563696",
        "lastLoginAt": "1699106159949",
        "apiKey": "AIzaSyBVdo0lgjLhsSO5StQbo3n7I2ttiTkDY_8",
        "appName": "[DEFAULT]"
    }
}
```

### Forgot Password
- POST (http://localhost:8001/auth/forgot-password)
- body: 
```
{
  "email": "nakul@test.com"
```
- payload format
```
{
    "message": "Password reset email sent successfully"
}
```

### logout 
- POST (http://localhost:8001/auth/logout)
- body: 
```
{
  "email": "
```
- payload format
```
{
    "message": "Logout successful"
}
```
### get store details
- GET(http://localhost:8001/store/store-details)

```
{
    "stores": [
        {
            "id": "store_zGL8PUJJ3NcdruVeFGDJG91hLBF2",
            "data": {
                "store_name": "Sai Honda",
                "address": "East Jail Road, near Nucleus Mall, Lalpur",
                "locality": "Lalpur",
                "store_id": "store_zGL8PUJJ3NcdruVeFGDJG91hLBF2",
                "longitude": "85.03",
                "uid": "zGL8PUJJ3NcdruVeFGDJG91hLBF2",
                "store_owner": "Rishik Kumar Sahu",
                "contact": "7209440551",
                "latitude": "23.05",
                "city": "Ranchi"
            }
        }
    ]
}
```
### create a new store
- POST(http://localhost:8001/store/store-details)
- body:
```
{
    {
    "store_name": "Sai Honda",
    "address": "East Jail Road, near Nucleus Mall, Lalpur",
    "store_owner": "Rishik Kumar Sahu",
    "uid": "zGL8PUJJ3NcdruVeFGDJG91hLBF2",
    "city": "Ranchi",
    "locality": "Lalpur",
    "longitude": "85.03",
    "latitude": "23.05",
    "contact": "7209440551"
}
}

```

- payload format
```
{
    "message": "Store Registered successful",
    "store_id": "store_zGL8PUJJ3NcdruVeFGDJG91hLBF2",
    "store_name": "Sai Honda",
    "store_owner": "Rishik Kumar Sahu",
    "uid": "zGL8PUJJ3NcdruVeFGDJG91hLBF2"
}
```

### add a product (NOTE: Please take care of 's' in Products and Product (got stuck while implementing this :P))
- POST(http://localhost:8001/products/add-product)

- body:
```
{
  "product_name": "Apple Phone",
  "subtitle": "Smart Phone",
  "description": "Sample Phone Description",
  "price": 54000,
  "quantity": 100,
  "images": ["https://m.media-amazon.com/images/I/41TmlehQnaL._SX300_SY300_QL70_FMwebp_.jpg", 
  "https://m.media-amazon.com/images/I/41TmlehQnaL._SX300_SY300_QL70_FMwebp_.jpg",
  "https://m.media-amazon.com/images/I/41TmlehQnaL._SX300_SY300_QL70_FMwebp_.jpg"],
  "category": "Electronics",
  "subcategory": "Phones",
  "availability": true,
  "rating": 4.5,
  "reviews_count": 25,
  "store_id": "store_zGL8PUJJ3NcdruVeFGDJG91hLBF2"
}
```
- payload format
```
{
    "message": "Product added successfully",
    "product_added": true,
    "product_id": "9becfe8d-3e2c-4197-b60c-9d6157d586b8",
    "status": 200,
    "storeDataFromStoreId": {
        "store_name": "Sai Honda",
        "latitude": "23.05",
        "longitude": "85.03"
    }
}
```

### get all products (DISCLAIMER: NOT FILTERED WITH THE DISTANCE)
- GET(http://localhost:8001/products/all-products)

### get individual product
- GET(http://localhost:8001/products/:product_id)

Path Variable: product_id=9becfe8d-3e2c-4197-b60c-9d6157d586b8

- payload format
```
{
    "product": {
        "subtitle": "Smart Phone",
        "subcategory": "Phones",
        "images": [
            "https://m.media-amazon.com/images/I/41TmlehQnaL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/41TmlehQnaL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/41TmlehQnaL._SX300_SY300_QL70_FMwebp_.jpg"
        ],
        "availability": true,
        "rating": 4.5,
        "category": "Electronics",
        "product_name": "OnePlus Phone",
        "price": 10.99,
        "product_id": "98cb1c39-e5e4-4cbb-940b-dd38039c54b7",
        "quantity": 100,
        "description": "Sample Phone Description",
        "store_id": "store_user459",
        "reviews_count": 25,
        "store_data": {
            "store_name": "Brooklyn 99 Store",
            "latitude": "23.035",
            "longitude": "85.035"
        }
    }
}
```

### get products filtered by location

- POST(http://localhost:8001/products/products-by-distance)

- body:
```
{
  "latitude": 23.7128,
  "longitude": 85.0060
}
```

- payload format
```
{
            "latitude": "23.035",
            "locality": "Downtown",
            "store_id": "store_user459",
            "address": "123 Main Street",
            "store_name": "Brooklyn 99 Store",
            "uid": "user459",
            "store_owner": "John Doe",
            "longitude": "85.035",
            "city": "New York",
            "store_distance": 5.289313666098676
}
```

### get products by store_id

- POST("http://localhost:8001/products/store/:store_id")

- body:
```
{
  "store_id": "store_zGL8PUJJ3NcdruVeFGDJG91hLBF2"
}
```

- Payload 
```
{
        "images": [
            "https://m.media-amazon.com/images/I/41TmlehQnaL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/41TmlehQnaL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/41TmlehQnaL._SX300_SY300_QL70_FMwebp_.jpg"
        ],
        "category": "Electronics",
        "product_name": "Apple Phone",
        "subcategory": "Phones",
        "availability": true,
        "quantity": 100,
        "reviews_count": 25,
        "description": "Sample Phone Description",
        "price": 54000,
        "store_id": "store_zGL8PUJJ3NcdruVeFGDJG91hLBF2",
        "product_id": "440aa615-8011-4859-8970-8c48bf23b61d",
        "subtitle": "Smart Phone",
        "rating": 4.5
    }
```

### Search functionality to get products by product
- GET("http://localhost:8001/seacrh/searchProduct/:product_name")
- Payload
```
{
        "images": [
            "https://m.media-amazon.com/images/I/41TmlehQnaL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/41TmlehQnaL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/41TmlehQnaL._SX300_SY300_QL70_FMwebp_.jpg"
        ],
        "category": "Electronics",
        "product_name": "Apple Phone",
        "subcategory": "Phones",
        "availability": true,
        "quantity": 100,
        "reviews_count": 25,
        "description": "Sample Phone Description",
        "price": 54000,
        "store_id": "store_zGL8PUJJ3NcdruVeFGDJG91hLBF2",
        "product_id": "440aa615-8011-4859-8970-8c48bf23b61d",
        "subtitle": "Smart Phone",
        "rating": 4.5
    }
```
### Add Products to Wishlist
- POST("http://localhost:8001/orders/wishlist/")
- Body
```
{
  "product_id": "fgagaagagasdsds",
  "user_id": "loveday"
}
```
- Payload
```
{
    "message": "Order placed successfully"
}
```

### Show products in wishlist
- GET("http://localhost:8001/orders/fetch-orders/:user_id")
- Payload 
```
    "orders": [
        {
            "order_id": "ord567887789",
            "status": "pending",
            "user_id": "user98765",
            "orderDate": "2023-11-04T13:48:56.968Z",
            "product_id": "prod12345",
            "id": "ord567887789"
        },
        {
            "order_id": "ord56789",
            "status": "pending",
            "user_id": "user98765",
            "product_id": "prod12345",
            "orderDate": "2023-11-04T13:26:59.149Z",
            "id": "ord56789"
        },
        {
            "product_id": "prod12345",
            "user_id": "user98765",
            "status": "pending",
            "orderDate": "2023-11-04T13:27:33.573Z",
            "order_id": "ord789",
            "id": "ord789"
        }
    ]
}
```
### Delete Product in Wishlist
- POST("http://localhost:8001/orders/delete-order")
- Body
```
{
    "order_id":"ord56789"
}
```
- Payload
```
Document successfully deleted!
```