const zod = require('zod');

const addressValidation = zod.object({
    body: zod.object({
        street: zod.string()
        .max(20,"The maximum character of street should be 20")
        .min(3,"The minimum character of street should be 3"),
        city: zod.string()
        .max(20,"The maximum character of City should be 20")
        .min(3,"The minimum character of City should be 3"),
        state: zod.string()
        .max(20,"The maximum character of state should be 20")
        .min(3,"The minimum character of state should be 3"),
        postalCode: zod.number(),
        country: zod.string()
        .max(15,"The maximum character of country should be 15")
        .min(3,"The minimum character of country should be 3"),
    }),
});

module.exports = addressValidation;