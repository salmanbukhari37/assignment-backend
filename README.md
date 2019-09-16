# Rent a Car System

## Heroku Node API's

### Login

```
[POST] https://assignment-front-app.herokuapp.com/login
```

#### Request

```
{
	"loginCredentials" :{
		"username" : "admin",
		"password" : "123456"
	}
}
```

#### Response

```
{
    "result": {
        "_id": "5d7f84332fdd0b137461db4c",
        "FirstName": "Administrator",
        "LastName": "",
        "Username": "admin",
        "Email": "salmanbukhari37@gmail.com",
        "Password": "$2a$10$iH7ThC2rPUdW8mTLdXbChO35JVZ/L1iozaOxTRQwmeE2znbcjW/XW",
        "PhoneNo": "+92-333-4422114",
        "LoginTime": "2019-09-16T12:46:43.127Z",
        "createdAt": "2019-09-16T12:46:43.134Z",
        "updatedAt": "2019-09-16T12:46:43.134Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiX2lkIjoiNWQ3Zjg0MzMyZmRkMGIxMzc0NjFkYjRjIiwiRmlyc3ROYW1lIjoiQWRtaW5pc3RyYXRvciIsIkxhc3ROYW1lIjoiIiwiVXNlcm5hbWUiOiJhZG1pbiIsIkVtYWlsIjoic2FsbWFuYnVraGFyaTM3QGdtYWlsLmNvbSIsIlBhc3N3b3JkIjoiJDJhJDEwJGlIN1RoQzJyUFVkVzhtVExkWGJDaE8zNUpWWi9MMWlvemFPeFRSUXdtZUUyem5iY2pXL1hXIiwiUGhvbmVObyI6Iis5Mi0zMzMtNDQyMjExNCIsIkxvZ2luVGltZSI6IjIwMTktMDktMTZUMTI6NDY6NDMuMTI3WiIsImNyZWF0ZWRBdCI6IjIwMTktMDktMTZUMTI6NDY6NDMuMTM0WiIsInVwZGF0ZWRBdCI6IjIwMTktMDktMTZUMTI6NDY6NDMuMTM0WiIsIl9fdiI6MH0sImlhdCI6MTU2ODY1NzMzNywiZXhwIjoxNTY4Njg3MzM3fQ.EWkKTqkmsYjiNgcBYmGXqWc9GAgJYiOABzPulmVshzs"
}
```

### Create User

```
[POST] https://assignment-front-app.herokuapp.com/user
```

#### Request

```
{
	"userData" : {
		"FirstName" : "Administrator",
		"LastName" : "",
		"Username" : "admins",
		"Email" : "salmanbukhari37ss@gmail.com",
		"Password" : "123456",
		"PhoneNo" : "+92-333-4422114"
	}
}
```

#### Response

```
{
    "_id": "5d7fd00bfc83b22418479b1e",
    "FirstName": "Administrator",
    "LastName": "",
    "Username": "admins",
    "Email": "salmanbukhari37ss@gmail.com",
    "Password": "$2a$10$EFUh24i7E7ATcmZLHuGVhuM.kTrZzXodqF1B1GNyesqH2NRHDiGU2",
    "PhoneNo": "+92-333-4422114",
    "LoginTime": "2019-09-16T18:10:19.543Z",
    "createdAt": "2019-09-16T18:10:19.550Z",
    "updatedAt": "2019-09-16T18:10:19.550Z",
    "__v": 0
}
```

### Car Api's

### POST Car

```
[POST] https://assignment-front-app.herokuapp.com/api/car
```

#### Request

```
{
	"carData" : {
		"CarBrand" : "Toyota",
		"CarModel" : "BMW X6",
		"Color" : "Golden",
		"EngineSize" : "3",
		"ProductionYear" : "2015",
		"RegistrationNumber" : "45673",
		"FuelType" : "Petrol",
		"Mileage" : "12",
		"BodyType" : "Convertable"
	}
}
```

#### Response

```
{
    "_id": "5d7fd078fc83b22418479b1f",
    "CarBrand": "Toyota",
    "CarModel": "BMW X6",
    "Color": "Golden",
    "EngineSize": 3,
    "ProductionYear": 2015,
    "RegistrationNumber": 45673,
    "FuelType": "Petrol",
    "Mileage": 12,
    "BodyType": "Convertable",
    "createdAt": "2019-09-16T18:12:08.801Z",
    "updatedAt": "2019-09-16T18:12:08.801Z",
    "__v": 0
}
```

### PUT Car

```
[PUT] https://assignment-front-app.herokuapp.com/api/car
```

#### Request

```
{
	"id" : "5d7f998a36b360221cd2f3d0",
	"carData" : {
		"CarBrand" : "Toyota",
		"CarModel" : "BMW X6",
		"Color" : "Golden",
		"EngineSize" : "3",
		"ProductionYear" : "2015",
		"RegistrationNumber" : "45673",
		"FuelType" : "Petrol",
		"Mileage" : "12",
		"BodyType" : "Convertable"
	}
}
```

#### Response

```
{
    "message": "Record updated successfully",
    "result": {
        "_id": "5d7f998a36b360221cd2f3d0",
        "createdAt": "2019-09-16T14:17:46.809Z",
        "updatedAt": "2019-09-16T14:36:52.009Z",
        "__v": 0,
        "BodyType": "Convertable",
        "CarBrand": "Toyota",
        "CarModel": "BMW X6",
        "Color": "Golden",
        "EngineSize": 3,
        "FuelType": "Petrol",
        "Mileage": 12,
        "ProductionYear": 2015,
        "RegistrationNumber": 45673
    }
}
```

### GET Car

```
[GET] https://assignment-front-app.herokuapp.com/api/car
```

#### Response

```
[
    {
        "_id": "5d7f9998ed9900163c4587e9",
        "CarBrand": "Toyota",
        "CarModel": "BMW X6",
        "Color": "Golden",
        "EngineSize": 3,
        "ProductionYear": 2015,
        "RegistrationNumber": 45673,
        "FuelType": "Petrol",
        "Mileage": 12,
        "BodyType": "Convertable",
        "createdAt": "2019-09-16T14:18:00.554Z",
        "updatedAt": "2019-09-16T14:18:00.554Z",
        "__v": 0
    }
]
```

### GET Car by ID

```
[GET] https://assignment-front-app.herokuapp.com/api/car/5d7f9998ed9900163c4587e9
```

#### Response

```
{
    "_id": "5d7f9998ed9900163c4587e9",
    "CarBrand": "Toyota",
    "CarModel": "BMW X6",
    "Color": "Golden",
    "EngineSize": 3,
    "ProductionYear": 2015,
    "RegistrationNumber": 45673,
    "FuelType": "Petrol",
    "Mileage": 12,
    "BodyType": "Convertable",
    "createdAt": "2019-09-16T14:18:00.554Z",
    "updatedAt": "2019-09-16T14:18:00.554Z",
    "__v": 0
}
```

![Codeship Status](https://app.codeship.com/projects/42287930-a726-0137-f88c-5ae24cfcc022/status?branch=master)
