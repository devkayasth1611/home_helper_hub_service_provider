const zod = require('zod');

const adminValidation = zod.object({
    body: zod.object({
        adminName: zod.string()
        .max(15,"The maximum character of user name should be 15")
        .min(3,"The minimum character of user name should be 3"),
        email: zod.string().email(),
        password: zod.number(),
        phoneNumber: zod.string().refine((val) => {
            const indianPhoneNumberRegex = /^\+91\d{10}$/;
            return indianPhoneNumberRegex.test(val);
        },
        {
            message: "Invalid Indian phone number",
        }),
    }),
});

module.exports = adminValidation;