const serviceproviderSchema = require("../model/serviceProviderModel");

exports.addServiceProvider = (req,res) => {
  const serviceprovider = new serviceproviderSchema(req.body);
  serviceprovider.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Service Provider",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Service Provider add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Service Provider",
          status: 400,
          error: err,
        });
  })
}


exports.getAllServiceProvider = (req,res) => {
    serviceproviderSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Service Provider",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Service Provider fetched successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Service Provider",
            status: 400,
            error: err,
          });
    })
}


exports.getServiceProviderById = (req, res) => {
  serviceproviderSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Service Provider",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Service Provider fetched By Id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Service Provider",
        status: 400,
        error: err,
      });
    });
};



exports.updateServiceProviderById = (req, res) => {
    serviceproviderSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Service Provider",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Service Provider updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Service Provider",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteServiceProviderById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    serviceproviderSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleteing the Service Provider",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Service Provider deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting Service Provider",
        status: 400,
        error: err,
      });
    })
  }