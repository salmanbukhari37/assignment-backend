var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
const contactController = require("../controllers/contactController");
const reservationController = require("../controllers/reservationController");
const parkingLotController = require("../controllers/parkingLotController");
const slotController = require("../controllers/slotController");

// Student Controller
const studentController = require("../controllers/studentController");

// Course Controller
const courseController = require("../controllers/courseController");

// Enrollment Controller
const enrollmentController = require("../controllers/enrollmentController");

// Parking Lot Routes
router.get("/parking/get/login", parkingLotController.GetLogin);

// actual login
router.post("/parking/login", parkingLotController.Login);

// Logout
router.post("/parking/logout", parkingLotController.Logout);

// Sign up - Create User
router.post("/parking/create/user", parkingLotController.CreateUser);

// Get Users
router.get("/parking/get/user", parkingLotController.GetUser);

// // Test
// router.get("/test", userController.test);

// // Login
// router.post("/login", userController.login);

// Registration
router.post("/signup", userController.signup);

// Contact Form
router.post("/contact-form/save", contactController.saveContactForm);
router.post("/contact-form/send/email", contactController.sendEmail);

// Get All Contact Details
router.get("/contact/get", contactController.getContactDetail);

// Get one record by id
router.get("/contact/get/one", contactController.getContactDetailOne);

// update contact detail
router.put("/contact/update", contactController.updateContactDetail);

// Delete Contact Detail
router.delete("/contact/delete", contactController.deleteContactDetail);

// ReservationRoutes
router.get("/reservation/get", reservationController.getReservationData);
router.post("/reservation/get/one", reservationController.getReservationById);
router.post("/reservation/add", reservationController.saveReservation);
router.put(
  "/reservation/update",
  reservationController.updateReservationDataById
);
router.delete(
  "/reservation/delete",
  reservationController.deleteReservationData
);

// Student API
router.get("/student/get", studentController.GetStudent);
router.post("/student/add", studentController.AddStudent);

// Course API
router.get("/course/get", courseController.GetCourse);
router.post("/course/add", courseController.AddCourse);

// Enrollment API
router.get("/enrollment/get", enrollmentController.GetEnrollment);
router.post("/enrollment/add", enrollmentController.AddEnrollment);

// Slot API
router.post("/slot/add", slotController.AddSlot);

// Assign Slot API
router.post("/assign/slot/add", slotController.AssignSlot);

module.exports = {
  router: router
};
