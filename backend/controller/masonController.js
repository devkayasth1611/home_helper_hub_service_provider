const masonSchema = require("../model/masonModel");

exports.addMasonDetails = (req,res) => {
  const mason = new masonSchema(req.body);
  mason.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Mason Details",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Mason Details add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Mason Details",
          status: 400,
          error: err,
        });
  })
};


exports.getAllMason = (req,res) => {
    masonSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Mason Details",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Mason Details fetching successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Mason Details",
            status: 400,
            error: err,
          });
    })
};


exports.getMasonById = (req,res) => {
  // const proId = req.params.id;
  masonSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Mason Details.",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Mason Details id fetched successfully.",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Mason Details.",
        status: 400,
        error: err,
      });
    });
};




exports.updateMasonById = (req, res) => {
    masonSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Mason Details",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Mason Details updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Mason Details",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteMasonById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    masonSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleteing the Mason Details",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Mason Details deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting the Mason Details",
        status: 400,
        error: err,
      });
    })
  }