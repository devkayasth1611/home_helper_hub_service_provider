const paymentSchema = require("../model/paymentModel");

exports.addPayment = (req,res) => {
  const payment = new paymentSchema(req.body);
  payment.save()
  .then((data) => {
      if(!data)
      {
          res.json({
              message: "Something went wrong while adding the Payment",
              status: 400,
              error: err,
          });
      }
      else
      {
          res.json({
              message: "Payment add successfully",
              status: 200,
              data: data,
            });
      }
  }).catch((err)=>{
      res.json({
          message: "Something went wrong while adding the Payment",
          status: 400,
          error: err,
        });
  })
}


exports.getAllPayment = (req,res) => {
    paymentSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the Payment",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Payment fetched successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Payment",
            status: 400,
            error: err,
          });
    })
}


exports.getPaymentById = (req, res) => {
  paymentSchema
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while fetching the Payment",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Payment fetched By id successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while fetching the Payment",
        status: 400,
        error: err,
      });
    });
};



exports.updatePaymentById = (req, res) => {
    paymentSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Payment",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Payment updated successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Updating the Payment",
          status: 400,
          error: err,
        });
      })
  };


  exports.deletePaymentById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    paymentSchema.findOneAndDelete(
      {
        _id: id,
      },
    )
    .then((data) => {
      if (!data) {
        res.json({
          message: "Something went wrong while deleteing the Payment",
          status: 400,
          error: err,
        });
      } else {
        res.json({
          message: "Payment deleted successfully",
          status: 200,
          data: data,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong while Deleting Payment",
        status: 400,
        error: err,
      });
    })
  }