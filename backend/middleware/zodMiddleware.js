const zod = require('zod');

const validate = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync({
      body: req.body,
      params: req.params,
      headers: req.headers,
    });
    return next();
  } catch (err) {
    return res.json({
      message: "Something went wrong while validating the request",
      status: 400,
      error: err,
    });
  }
};

module.exports = validate;