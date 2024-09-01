const zod = require('zod');

const carpenterValidation = zod.object({
    body: zod.object({
        serviceType: zod.string(),
        materialType: zod.string(),
        projectSize: zod.number(),
        date: zod.string(),
        time: zod.string(),
        additionalDetails: zod.string(),
    }),
});

module.exports = carpenterValidation;