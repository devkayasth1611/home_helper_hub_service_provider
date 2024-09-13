const express = require("express"); // creating the server
const cors = require('cors');
const app = express();

const mongoose = require("mongoose"); // For Connecting to Database

const allowedOrigins = [
  'http://localhost:5173', // Client port (Adjust as per your Vite client port)
  'http://localhost:5174'  // Admin port (Adjust as per your Vite admin port)
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., mobile apps, curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
}));

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


const adminRoutes = require("./routes/adminRoutes");
app.use("/admins", adminRoutes);

const paintingRoutes = require("./routes/paintingRoutes");
app.use("/paintings", paintingRoutes);

const masonRoutes = require("./routes/masonRoutes");
app.use("/masons", masonRoutes);

const electricRoutes = require("./routes/electricRoutes");
app.use("/electrics", electricRoutes);

const cleaningRoutes = require("./routes/cleaningRoutes");
app.use("/cleanings", cleaningRoutes);

const carpenterRoutes = require("./routes/carpenterRoutes");
app.use("/carpenters", carpenterRoutes);

const plumberRoutes = require("./routes/plumberRoutes");
app.use("/plumbers", plumberRoutes);

const eventRoutes = require("./routes/eventRoutes");
app.use("/events", eventRoutes);

const swiftMoveRoutes = require("./routes/swiftMoveRoutes");
app.use("/swiftMoves", swiftMoveRoutes);

const login = require("./routes/login");
app.use("/logins", login);