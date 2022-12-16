const userServices = require("../services/user.service");

const usersControllers = {
  register: async (req, res) => {
    const { email, password, role } = req.body;
    try {
      const user = await userServices.register({ email, password, role });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const { userData, token } = await userServices.login({ email, password });
      res.json({ userData, token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  loginToken: async (req, res) => {
    try {
      const { userData, token } = await userServices.loginToken(req.user);
      res.json({ userData, token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await userServices.deleteUser(req.params);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = usersControllers;
