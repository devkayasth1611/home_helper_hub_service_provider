const adminSchema = require("../model/adminModel");

exports.addAdmin = (req,res) => {
  const admin = new adminSchema(req.body);
  admin.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the User",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Admin add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Admin",
          status: 400,
          error: err,
        });
  })
}


exports.getAllAdmin = (req,res) => {
    adminSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Admin",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Admin fetched successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Admin",
            status: 400,
            error: err,
          });
    })
}


exports.getAdminById = (req, res) => {
  adminSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Admin",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Admin fetched By id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Admin",
        status: 400,
        error: err,
      });
    });
};



exports.updateAdminById = (req, res) => {
    adminSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Admin",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Admin updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Admin",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteAdminById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    adminSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleting the Admin",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Admin deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting Admin",
        status: 400,
        error: err,
      });
    })
  }