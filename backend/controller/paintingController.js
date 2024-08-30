const paintingSchema = require("../model/paintingModel");

exports.addPainting = (req,res) => {
  const painting = new paintingSchema(req.body);
  painting.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Painting Details",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Painting Details add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Painting Details",
          status: 400,
          error: err,
        });
  })
};


exports.getAllPainting = (req,res) => {
    paintingSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Painting Details",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Painting Details fetching successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Painting Details",
            status: 400,
            error: err,
          });
    })
};


exports.getPaintingById = (req,res) => {
  // const proId = req.params.id;
  paintingSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Painting Details.",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Painting Details id fetched successfully.",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Painting Details.",
        status: 400,
        error: err,
      });
    });
};




exports.updatePaintingById = (req, res) => {
    paintingSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Painting Details",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Painting Details updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Painting Details",
          status: 400,
          error: err,
        });
      })
  };


  exports.deletePaintingById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    paintingSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleteing the Painting Details",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Painting Details deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting the Painting Details",
        status: 400,
        error: err,
      });
    })
  }