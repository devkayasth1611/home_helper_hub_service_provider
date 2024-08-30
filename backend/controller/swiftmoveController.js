const swiftMoveSchema = require("../model/swiftMoveModel");

exports.addSwiftMoveDetails = (req,res) => {
  const swiftMove = new swiftMoveSchema(req.body);
  swiftMove.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Swift Move Details",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Swift Move Details add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Swift Move Details",
          status: 400,
          error: err,
        });
  })
};


exports.getAllSwiftMove = (req,res) => {
    swiftMoveSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Swift Move Details",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Swift Move Details fetching successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Swift Move Details",
            status: 400,
            error: err,
          });
    })
};


exports.getSwiftMoveById = (req,res) => {
  // const proId = req.params.id;
     swiftMoveSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Swift Move Details.",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Swift Move Details id fetched successfully.",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Swift Move Details.",
        status: 400,
        error: err,
      });
    });
};

exports.updateSwiftMoveById = (req, res) => {
       swiftMoveSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Swift Move Details",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Swift Move Details updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Swift Move Details",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteSwiftMoveById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    swiftMoveSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleteing the Swift Move Details",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Swift Move Details deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting the Swift Move Details",
        status: 400,
        error: err,
      });
    })
  }