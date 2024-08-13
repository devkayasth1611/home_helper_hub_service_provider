const reviewSchema = require("../model/reviewModel");

exports.addReview = (req,res) => {
  const review = new reviewSchema(req.body);
  review.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Review",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Review add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Review",
          status: 400,
          error: err,
        });
  })
}


exports.getAllReview = (req,res) => {
    reviewSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Review",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Review fetched successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Review",
            status: 400,
            error: err,
          });
    })
}


exports.getReviewById = (req, res) => {
  reviewSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Review",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Review fetched By id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Review",
        status: 400,
        error: err,
      });
    });
};



exports.updateReviewById = (req, res) => {
    reviewSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Review",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Review updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Review",
          status: 400,
          error: err,
        });
      })
  };


  exports.deleteReviewById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    reviewSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleting the Review",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Review deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while deleting Review",
        status: 400,
        error: err,
      });
    })
  }