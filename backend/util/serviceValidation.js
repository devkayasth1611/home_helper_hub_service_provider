const zod = require('zod');

const serviceValidation = zod.object({
    body: zod.object({
        name: zod.string()
        .max(15,"The maximum character of service name should be 15")
        .min(3,"The minimum character of service name should be 3"),
        description: zod.string()
        .max(50,"The maximum character of description should be 50")
        .min(3,"The minimum character of description should be 3"),
        price: zod.number(),
        duration: zod.string()
        .max(10,"The maximum character of duration should be 10")
        .min(3,"The minimum character of duration should be 3"),
    }),
});

module.exports = serviceValidation;