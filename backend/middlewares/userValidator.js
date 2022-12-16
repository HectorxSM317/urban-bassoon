const joi = require("joi");

const registerValidator = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email({ minDomainSegments: 2 }).required().messages({
      "string.email": '"mail": incorrect format',
    }),
    password: joi
      .string()
      .min(6)
      .max(30)
      .pattern(new RegExp("[a-zA-Zd@$!%*?&]"))
      .required()
      .messages({
        "string.min": '"password": min 6 characters',
        "string.max": '"password": max 30 characters',
      }),
    role: joi.string().required(),
  });

  const validation = schema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    return res.json({
      success: false,
      from: "validator",
      message: validation.error.details,
      test: validation,
    });
  }
  next();
};

const loginValidator = (req, res, next) => {
    const schema = joi.object({
     
      email: joi.string().email({ minDomainSegments: 2 }).required().messages({
        "string.email": '"mail": incorrect format',
      }),
      password: joi.string().min(6).max(30).pattern(new RegExp("[a-zA-Z\d@$!%*?&]")).required().messages({
        "string.min": '"password": min 6 characters',
        "string.max": '"password": max 30 characters',
      }),
    });
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      return res.json({
        success: false,
        from: "validator",
        message: validation.error.details,
        test: validation,
      });
    }
    next();
  };

module.exports = {
    registerValidator,
    loginValidator
};
