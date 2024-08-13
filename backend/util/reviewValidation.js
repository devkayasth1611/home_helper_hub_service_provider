const zod = require('zod');

const reviewValidation = zod.object({
    body: zod.object({
        rating: zod.number(),
        comment: zod.string()
        .max(100,"The maximum character of comment should be 100")
        .min(3,"The minimum character of comment should be 3"),
    }),
});

module.exports = reviewValidation;