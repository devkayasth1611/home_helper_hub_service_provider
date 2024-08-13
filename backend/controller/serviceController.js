const serviceSchema = require("../model/serviceModel");

exports.addService = (req,res) => {
  const service = new serviceSchema(req.body);
  service.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Service",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Service add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Service",
          status: 400,
          error: err,
        });
  })
}


exports.getAllService = (req,res) => {
    serviceSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Service",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Service fetched successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Service",
            status: 400,
            error: err,
          });
    })
}


exports.getServiceById = (req, res) => {
  serviceSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Service",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Service fetched By id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Service",
        status: 400,
        error: err,
      });
    });
};



exports.updateServiceById = (req, res) => {
    serviceSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Service",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Service updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Service",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteServiceById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    serviceSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleting the Service",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Service deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting Service",
        status: 400,
        error: err,
      });
    })
  }