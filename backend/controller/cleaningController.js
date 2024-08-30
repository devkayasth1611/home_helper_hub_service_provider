const cleaningSchema = require("../model/cleaningModel");

exports.addCleaningDetails = (req,res) => {
  const cleaning = new cleaningSchema(req.body);
  cleaning.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Cleaning Details",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Cleaning Details add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Cleaning Details",
          status: 400,
          error: err,
        });
  })
};


exports.getAllCleaning = (req,res) => {
    cleaningSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Cleaning Details",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Cleaning Details fetching successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Cleaning Details",
            status: 400,
            error: err,
          });
    })
};


exports.getCleaningById = (req,res) => {
  // const proId = req.params.id;
     cleaningSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Cleaning Details.",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Cleaning Details id fetched successfully.",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Cleaning Details.",
        status: 400,
        error: err,
      });
    });
};

exports.updateCleaningById = (req, res) => {
      cleaningSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Cleaning Details",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Cleaning Details updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Cleaning Details",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteCleaningById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    cleaningSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleteing the Cleaning Details",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Cleaning Details deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting the Cleaning Details",
        status: 400,
        error: err,
      });
    })
  }