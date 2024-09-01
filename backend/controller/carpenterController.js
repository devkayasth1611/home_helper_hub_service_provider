const carpenterSchema = require("../model/carpenterModel");

exports.addCarpenterDetails = async(req,res) => {
  const carpenter = new carpenterSchema(req.body);
  await carpenter.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Carpenter Details",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Carpenter Details add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Carpenter Details",
          status: 400,
          error: err,
        });
  })
};


exports.getAllCarpenter = (req,res) => {
    carpenterSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Carpenter Details",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Carpenter Details fetching successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Carpenter Details",
            status: 400,
            error: err,
          });
    })
};


exports.getCarpenterById = (req,res) => {
  // const proId = req.params.id;
     carpenterSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Carpenter Details.",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Carpenter Details id fetched successfully.",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Carpenter Details.",
        status: 400,
        error: err,
      });
    });
};

exports.updateCarpenterById = (req, res) => {
       carpenterSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Carpenter Details",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Carpenter Details updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Carpenter Details",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteCarpenterById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    carpenterSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleteing the Carpenter Details",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Carpenter Details deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting the Carpenter Details",
        status: 400,
        error: err,
      });
    })
  }