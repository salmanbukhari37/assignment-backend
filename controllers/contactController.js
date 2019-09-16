var nodemailer = require("nodemailer");
const ContactFormModel = require("../models/contactFormModel");

// Contact Form
const getContactForm = (req, res) => {
  // var getId = req.query.id;

  // console.log(getId);
  res.render("contact-form");
};

const saveContactForm = (req, res) => {
  var request = req.body;
  // var description = req.body.description;

  let newContact = new ContactFormModel();
  newContact.name = request.name;
  newContact.email = request.email;
  newContact.description = request.description;

  newContact.save((err, result) => {
    if (err.code) res.send(err);
    else
      res.status(200).json({
        message: "Data saved successfully",
        result
      });
  });
};

const getContactDetail = (req, res) => {
  ContactFormModel.find((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json({
        result
      });
    }
  });
};

const getContactDetailOne = (req, res) => {
  var request = req.body;

  const id = request.id;
  ContactFormModel.findById(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json({
        result
      });
    }
  });
};

const deleteContactDetail = (req, res) => {
  var request = req.body;

  const id = request.id;
  ContactFormModel.findByIdAndRemove(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json({
        message: "Record deleted successfully",
        result
      });
    }
  });
};

// update
const updateContactDetail = (req, res) => {
  var request = req.body;

  id = request.id;

  ContactFormModel.findByIdAndUpdate(
    id,
    req.body.contact,
    { new: true },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).json({
          message: "Record updated successfully",
          result
        });
      }
    }
  );
};

const sendEmail = (req, res) => {
  var subject = req.body.subject;
  var emailBody = req.body.emailBody;
  var toClient = req.body.toClient;
  var fromClient = "salmanbukhari37@gmail.com";

  var transporter = nodemailer.createTransport({
    host: "smtp.googlemail.com", // Gmail Host
    pool: true,
    port: 465, // Port
    secure: true, // this is true as port is 465
    auth: {
      user: "salmanbukhari37@gmail.com", //Gmail username
      pass: "STep$$$778899" // Gmail password
    }
  });

  var mailOptions = {
    from: fromClient,
    to: toClient,
    subject: subject,
    text: emailBody
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      res.send("email sent to: " + toClient);
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  getContactForm,
  saveContactForm,
  sendEmail,
  getContactDetail,
  deleteContactDetail,
  getContactDetailOne,
  updateContactDetail
};
