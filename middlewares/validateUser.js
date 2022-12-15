const passport = require("passport");

const validateUser = passport.authenticate('jtw', { session: false })

module.exports = { validateUser }