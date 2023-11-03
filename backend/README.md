
### Developer Documentation
- index.js is the base level entry file 
- routes are defined inside the routes folder
- default port is 8001
- https://chat.openai.com/share/8acba82a-5cd4-4a0e-9c13-e299d54f1d84 (check out the part in boilerplate codes for controllers and routes)


## endpoints

### register using email and password
- POST(http://localhost:8001/auth/register)
- body:

IMPORTANT: role is 0 for customer and 1 for vendor
```
{
  "name":"test123",
  "email": "testalpha@gmail.com",
  "password":"test@123",
  "role":"0",
  "contact":"1234567890",
  "locality":"Kanke",
  "longitude":"24",
  "latitude":"37",
  "address": {
      "address_line_1":"sample address",
      "address_line_2":"sample address2",
      "city":"Ranchi",
      "pincode":"800001"
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
  "email": "mike@test.com",
  "password": "test@123"
}
```
- payload format
```
{
    "message": "Login successful",
    "user": {
        "uid": "bmGWhpFLhAeOrakNckqcKEAMWMG3",
        "email": "mike@test.com",
        "emailVerified": false,
        "isAnonymous": false,
        "providerData": [
            {
                "providerId": "password",
                "uid": "mike@test.com",
                "displayName": null,
                "email": "mike@test.com",
                "phoneNumber": null,
                "photoURL": null
            }
        ],
        "stsTokenManager": {
            "refreshToken": "AMf-vByyCJ_cX8f6Txe7k2cvYn5a8pCZ36c-IC2SkfBGz_kcz0Zre9kO1S6tc0Ihxxm2W9sSzxpxq-1IJCy8mqAEhYnsXm0iJL55GAciDC52Fdv6e0tEjEu5RG0hMvflT87_WOuzztpau7VcfELHXfggi3S8_4lkYd8fbgKIxuCvoksR-RDS1mbwBuQvWsjsIV03uMXd0tND",
            "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBkMGU4NmJkNjQ3NDBjYWQyNDc1NjI4ZGEyZWM0OTZkZjUyYWRiNWQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbG9jYWxhbHQiLCJhdWQiOiJsb2NhbGFsdCIsImF1dGhfdGltZSI6MTY5ODk1MTk4MiwidXNlcl9pZCI6ImJtR1docEZMaEFlT3Jha05ja3FjS0VBTVdNRzMiLCJzdWIiOiJibUdXaHBGTGhBZU9yYWtOY2txY0tFQU1XTUczIiwiaWF0IjoxNjk4OTUxOTgyLCJleHAiOjE2OTg5NTU1ODIsImVtYWlsIjoibWlrZUB0ZXN0LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJtaWtlQHRlc3QuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.BiMRlLRwNXss4u5EP4AR-s1BL70y02n5IU2bFfvzMrMe4ohQbv225YR_iiCP4rQcBT7GbNsJCRF-OhlB50ga9sZ3mqGCD1e413w0A_ztFyBZI-0xnB_2zFOq1UvdtgrBmFGJ79LAROOJDvrRNUF0YS2zoQw-i8N9SSiThTjZnwbl2roxkJAo4Q4dYgheogzaYz8dc7kBym-11HYpDRQaSyV4CAhA3Gz5rJg31HvnV17gzkhnyex1KW_vZxwtQAnHZPtKKR_6pDScUmIm1VUQQUeIdMnEtWRWp97869ghnrjWyrbUOEVlMYdBcpV_dr8mfecW3XxbjaLSd7ETfFpojQ",
            "expirationTime": 1698955582646
        },
        "createdAt": "1698941473248",
        "lastLoginAt": "1698951982523",
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
            "id": "store_id",
            "data": {
                "address": {
                    "address_line_2": "test",
                    "city": "Ranchi",
                    "pincode": "800001",
                    "address_line_1": "behind h5"
                },
                "store_id": "store_jcgc7883ggagjdcg99v9s",
                "longitude": "67",
                "store_owner": "Chotu",
                "city": "Ranchi",
                "store_name": "Chotu-Dhaba",
                "uid": "jcgc7883ggagjdcg99v9s",
                "locality": "Mesra",
                "latitude": "93"
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
    "store_name": "My Store",
    "address": "123 Main Street",
    "store_owner": "John Doe",
    "uid": "user456",
    "city": "New York",
    "locality": "Downtown",
    "longitude": "40.7128",
    "latitude": "-74.0060"
}

```

- payload format
```
{
    "message": "Store created successfully"
}
```

### add a product (NOTE: Please take care of 's' in Products and Product (got stuck while implementing this :P))
- POST(http://localhost:8001/products/add-product)

- body:
```
{
  "product_name": "Product Name",
  "subtitle": "Product Subtitle",
  "description": "Product Description",
  "price": 10.99,
  "quantity": 100,
  "images": ["image1.jpg", "image2.jpg"],
  "category": "Category",
  "subcategory": "Subcategory",
  "availability": true,
  "rating": 4.5,
  "reviews_count": 25,
  "store_id": "store_12345"
}

```
- payload format
```
{
    "message": "Product added successfully",
    "product_added": true,
    "status": 200
}
```

### get all products (DISCLAIMER: NOT FILTERED WITH THE DISTANCE)
- GET(http://localhost:8001/products/all-products)

