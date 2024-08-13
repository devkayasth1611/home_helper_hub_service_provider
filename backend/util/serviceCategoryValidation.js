const zod = require('zod');

const categoryValidation = zod.object({
    body: zod.object({
        name: zod.string()
        .max(15,"The maximum character of name should be 15")
        .min(3,"The minimum character of name should be 3"),
        description: zod.string()
        .max(50,"The maximum character of description should be 50")
        .min(3,"The minimum character of description should be 3"),
    }),
});

module.exports = categoryValidation;