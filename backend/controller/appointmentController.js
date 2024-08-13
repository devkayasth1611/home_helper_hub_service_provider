const appointmentSchema = require("../model/appointmentModel");

exports.addAppointment = (req,res) => {
  const appointment = new appointmentSchema(req.body);
  appointment.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Appointment",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Appointment add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Appointment",
          status: 400,
          error: err,
        });
  })
};


exports.getAllAppointment = (req,res) => {
    appointmentSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Appointment",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Appointment fetching successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Appointment",
            status: 400,
            error: err,
          });
    })
};


exports.getAppointmentById = (req,res) => {
  // const proId = req.params.id;
  appointmentSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the appointment.",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Appointment id fetched successfully.",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Appointment.",
        status: 400,
        error: err,
      });
    });
};




exports.updateAppointmentById = (req, res) => {
    appointmentSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Appointment",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Appointment updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Appointment",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteAppointmentById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    appointmentSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleteing the Appointment",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Appointment deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting the Appointment",
        status: 400,
        error: err,
      });
    })
  }