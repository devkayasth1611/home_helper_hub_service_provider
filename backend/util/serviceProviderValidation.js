const zod = require('zod');

const serviceProviderValidation = zod.object({
    body: zod.object({
        name: zod.string()
        .max(15,"The maximum character of Service Provider name should be 15")
        .min(3,"The minimum character of Service Provider name should be 3"),
        biography: zod.string()
        .max(50,"The maximum character of biography should be 50")
        .min(3,"The minimum character of biography should be 3"),
        rating: zod.number(),
        experience: zod.string()
        .max(100,"The maximum character of experience should be 100")
        .min(3,"The minimum character of experience should be 3"),
    }),
});

module.exports = serviceProviderValidation;