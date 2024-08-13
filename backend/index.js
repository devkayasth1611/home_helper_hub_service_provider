const express = require("express"); // creating the server
const app = express();

const mongoose = require("mongoose"); // For Connecting to Database

app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: false })); // middleware

mongoose
  .connect("mongodb://127.0.0.1:27017/Home_Helper_Hub")
  .then((sucess) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port=>" + 3000);
  }
}); //where my services will called()





const multer = require('multer');
//const upload = multer();
const upload = multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb)
    {
      cb(null,"Upload")
    },
    filename: function(req,file,cb)
    {
      cb(null,file.filename+"-"+Date.now()+".png")
    }
  })

}).single("user_file");

app.post("/upload",upload,(req,res) =>{
  res.send("file upload")
});


const addressRoutes = require("./routes/addressRoutes");
app.use("/addresses", addressRoutes);

const appointmentRoutes = require("./routes/appointmentRoutes");
app.use("/appointments", appointmentRoutes);

const paymentRoutes = require("./routes/paymentRoutes");
app.use("/payments", paymentRoutes);

const reviewRoutes = require("./routes/reviewRoutes");
app.use("/reviews", reviewRoutes);

const serviceCategoryRoutes = require("./routes/serviceCategoryRoutes");
app.use("/categories", serviceCategoryRoutes);

const serviceProviderRoutes = require("./routes/serviceProviderRoutes");
app.use("/serviceproviders", serviceProviderRoutes);

const serviceRoutes = require("./routes/serviceRoutes");
app.use("/services", serviceRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);


const sendMail = require("./util/mailer");
app.post("/sendMail", sendMail);
