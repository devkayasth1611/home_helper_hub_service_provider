const eventSchema = require("../model/eventModel");

exports.addEventDetails = (req,res) => {
  const event = new eventSchema(req.body);
  event.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Event Details",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Event Details add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Event Details",
          status: 400,
          error: err,
        });
  })
};


exports.getAllEvent = (req,res) => {
    eventSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Event Details",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Event Details fetching successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Event Details",
            status: 400,
            error: err,
          });
    })
};


exports.getEventById = (req,res) => {
  // const proId = req.params.id;
     eventSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Event Details.",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Event Details id fetched successfully.",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Event Details.",
        status: 400,
        error: err,
      });
    });
};

exports.updateEventById = (req, res) => {
        eventSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Event Details",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Event Details updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Event Details",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteEventById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    eventSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleteing the Event Details",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Event Details deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting the Event Details",
        status: 400,
        error: err,
      });
    })
  }