const User = require("../models/User");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const environments = require("../config/environments");

const userServices = {
  register: async ({ email, password, role }) => {
    const user = await User.findOne({ where: { email } });
    if (user) throw new Error("El usuario ya existe");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hash", hashedPassword);
    return await User.create({
      email,
      password: hashedPassword,
      role,
    });
  },
  login: async ({ email, password }) => {
    const userExists = await User.findOne({ where: { email } });
    if (!userExists) throw new Error("El usuario no existe");
    let hashedPassword = bcrypt.compare(password, userExists.password);
    if (!hashedPassword) throw new Error("Verifica tus datos");
    const userData = {
      id: userExists.id,
      email: userExists.email,
      role: userExists.role,
    };
    const token = sign({ id: userData.id }, environments.SECRET_KEY, {
      expiresIn: "7d",
    });
    return { userData, token };
  },
  deleteUser: async (id) => {
    return await User.destroy({ where: { id } });
  },
  loginToken: async (user) => {
    const token = sign({ id: user.id }, environments.SECRET_KEY, {
      expiresIn: "7d",
    });
    const userData = {
      id: userExists.id,
      email: userExists.email,
      role: userExists.role,
    };

    return { userData, token }
  },
};

module.exports = userServices;
