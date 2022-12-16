const passport = require("passport");

const validateUser = passport.authenticate('jwt', { session: false })

module.exports = { validateUser }