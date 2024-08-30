const electricSchema = require("../model/electricModel");

exports.addElectricDetails = (req,res) => {
  const electric = new electricSchema(req.body);
  electric.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Electric Details",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Electric Details add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Electric Details",
          status: 400,
          error: err,
        });
  })
};


exports.getAllElectric = (req,res) => {
    electricSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Electric Details",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Electric Details fetching successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Electric Details",
            status: 400,
            error: err,
          });
    })
};


exports.getElectricById = (req,res) => {
  // const proId = req.params.id;
  electricSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Electric Details.",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Electric Details id fetched successfully.",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Electric Details.",
        status: 400,
        error: err,
      });
    });
};




exports.updateElectricById = (req, res) => {
    electricSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Electric Details",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Electric Details updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Electric Details",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteElectricById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    electricSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleteing the Electric Details",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Electric Details deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting the Electric Details",
        status: 400,
        error: err,
      });
    })
  }