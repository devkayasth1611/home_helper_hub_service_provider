const plumberSchema = require("../model/plumberModel");

exports.addPlumberDetails = (req,res) => {
  const plumber = new plumberSchema(req.body);
  plumber.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Plumber Details",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Plumber Details add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Plumber Details",
          status: 400,
          error: err,
        });
  })
};


exports.getAllPlumber = (req,res) => {
    plumberSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Plumber Details",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Plumber Details fetching successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Plumber Details",
            status: 400,
            error: err,
          });
    })
};


exports.getPlumberById = (req,res) => {
  // const proId = req.params.id;
    plumberSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Plumber Details.",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Plumber Details id fetched successfully.",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Plumber Details.",
        status: 400,
        error: err,
      });
    });
};

exports.updatePlumberById = (req, res) => {
        plumberSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Plumber Details",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Plumber Details updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Plumber Details",
          status: 400,
          error: err,
        });
      })
  };


  exports.deletePlumberById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    plumberSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleteing the Plumber Details",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Plumber Details deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting the Plumber Details",
        status: 400,
        error: err,
      });
    })
  }