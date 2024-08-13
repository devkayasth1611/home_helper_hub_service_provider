const zod = require('zod');

const paymentValidation = zod.object({
    body: zod.object({
        amount: zod.number(),
        paymentMethod: zod.string()
        .max(15,"The maximum character of Payment Method should be 15")
        .min(3,"The minimum character of Payment Method should be 3"),
    }),
});

module.exports = paymentValidation;