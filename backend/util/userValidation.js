const zod = require('zod');

const userValidation = zod.object({
    body: zod.object({
        userName: zod.string()
        .max(15,"The maximum character of user name should be 15")
        .min(3,"The minimum character of user name should be 3"),
        email: zod.string().email(),
        password: zod.number(),
        description: zod.string()
        .max(50,"The maximum character of user description should be 50")
        .min(3,"The minimum character of user description should be 3"),
        price: zod.number(),
        phoneNumber: zod.string().refine((val) => {
            const indianPhoneNumberRegex = /^\+91\d{10}$/;
            return indianPhoneNumberRegex.test(val);
        },
        {
            message: "Invalid Indian phone number",
        }),
        address: zod.string()
        .max(50,"The maximum character of address should be 50")
        .min(3,"The minimum character of address should be 3"),
        userType: zod.string()
        .max(50,"The maximum character of user type should be 50")
        .min(3,"The minimum character of user type should be 3"),
    }),
});

module.exports = userValidation;