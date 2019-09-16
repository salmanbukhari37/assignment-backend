# IAgility Practice Session

This Repository is for testing/practice

## 3 Days Assignment

### Auto Complete via Api Service

## File Path

### TS code

```
api-reservation/frontend/src/app/AutoComplete/AutoComplete.component.ts
```

### Form Validation with FormGroup Directive and FormControl Directive' 09/09/2019

## File Path

### TS code

```
api-reservation/frontend/src/app/FlightForm/FlightForm.component.ts
```

### HTML code

```
api-reservation/frontend/src/app/FlightForm/FlightForm.component.html
```

![Screenshot](https://github.com/salmanbukhari37/api-reservation/blob/master/frontend/src/assets/images/Reservation-Form-validation.jpg)

## Angular Assignment Reservation form 06/09/2019

## File Path

### TS code

```
api-reservation/frontend/src/app/FlightForm/FlightForm.component.ts
```

![Screenshot](https://github.com/salmanbukhari37/api-reservation/blob/master/frontend/src/assets/images/Reservation-Form.jpg)

### HTML code

```
api-reservation/frontend/src/app/FlightForm/FlightForm.component.html
```

![Screenshot](https://github.com/salmanbukhari37/api-reservation/blob/master/frontend/src/assets/images/Table.jpg)

## Dynamic Navigation Bar 05/09/2019

## File Path

### TS code

```
api-reservation/frontend/src/app/Navigation/Navigation.component.ts
```

### HTML code

```
api-reservation/frontend/src/app/Navigation/Navigation.component.html
```

## Calculator Assignment 05/09/2019

### File Path

```
api-reservation/frontend/src/app/app.component.ts
```

## Reservation API

### GET API

```
api/reservation/get
```

### POST API by ID

```
api/reservation/get/one
```

#### Request

```
{
	"id" : "5d5d48d853191c2d3898aa19"
}
```

### POST API - add reservation

```
api/reservation/add
```

#### Request

```
{
	"name" : "Salman Bukhari",
	"email" : "salmanbukahri37@gmail.com",
	"room_type" : "4 Bed Rooms",
	"arrival_date" : "08/26/2019",
	"departure_date" : "08/30/2019",
	"number_of_guest" : "4",
	"free_pickup" : "Yes",
	"flight_number" : "ERS345234",
	"special_request" : "VIP Guest"
}
```

### POST API - update reservation

```
api/reservation/update
```

#### Request

```
{
	"id" : "5d5d48d853191c2d3898aa19",
	"updateData" : {
		"email" : "salmanbukhariiiiiit@gmail.com",
		"name" : "Mohammad Usman"
	}
}
```

### POST API - delete reservation

```
api/reservation/delete
```

#### Request

```
{
	"id" : "5d5d4a5dbacacd2c0c08858c"
}
```

# Session - 26/08/2019

## Student, Course, Enrollment API's

## Student API

### GET API

#### URL

```
api/student/get
```

### POST API - Add Student

#### URL

```
api/student/add
```

#### Request

```
{
	"student" :
	{
		"StudentName" : "Salman Bukhari",
		"MobileNumber" : "+92 333 4422233"
	}
}
```

## Course API

### GET API

#### URL

```
api/course/get
```

### POST API - Add Course

#### URL

```
api/course/add
```

#### Request

```
{
	"course" : {
		"CourseCode" : "AES431",
		"CourseName" : "Computer Sceince"
	}
}
```

## Enrollment API

### GET API

#### URL

```
api/enrollment/get
```

### POST API - Add Enrollment

#### URL

```
api/enrollment/add
```

#### Request

```
{
	"enrollment" : {
		"StudentId" : "5d63bc2a2a149b48c410e613",
		"CourseId" : "5d63bf9127630f1d2cdc54e4"
	}
}
```

# Session - 27/08/2019

## Mongoose Concepts - Virtual, Bcrypt

#### URL

```
api/parking/create/user
```

#### Request

```
{
	"first_name" : "Salman",
	"last_name" : "Bukhari",
	"email" : "salmanbukhara@gmail.com",
	"password" : "123456",
	"phone_no" : "+92-333-4422114"
}
```

Encrypt Password using bcrypt

# Assignment Login Credentials check via BCrypt 27/08/2019

#### URL

```
/api/parking/login
```

#### Request

```
{
	"email" : "salmanbukharasi@gmail.com",
	"password" : "123456"
}
```

#### Response

```
{
    "msg": "Logged in successfully",
    "isMatch": true
}
```

![Codeship Status](https://app.codeship.com/projects/42287930-a726-0137-f88c-5ae24cfcc022/status?branch=master)
