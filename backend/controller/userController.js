const userSchema = require("../model/userModel");

exports.addUser = (req,res) => {
  const user = new userSchema(req.body);
  user.save()
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
              message: "User add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the User",
          status: 400,
          error: err,
        });
  })
}


exports.getAllUser = (req,res) => {
    userSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the User",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "User fetched successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the User",
            status: 400,
            error: err,
          });
    })
}


exports.getUserById = (req, res) => {
  userSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the User",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "User fetched By id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the User",
        status: 400,
        error: err,
      });
    });
};



exports.updateUserById = (req, res) => {
    userSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the User",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "User updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the User",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteUserById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    userSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleting the User",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "User deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting User",
        status: 400,
        error: err,
      });
    })
  }