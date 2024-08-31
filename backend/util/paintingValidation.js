const zod = require('zod');

const paintingValidation = zod.object({
    body: zod.object({
        status: zod.string()
        .max(50,"The maximum character of status should be 50")
        .min(3,"The minimum character of status should be 3"),
    }),
});

module.exports = appointmentValidation;