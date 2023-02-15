const { userService } = require("../services/userService");
const { authService } = require("../services/authService");
/**
 * @signIn @signUp @resetPassword @changePassword this function request object and passes its body to "authService" function if the function returens
 * The data it respond with JSON object or throw an error 
 */
async function signIn(req, res) {
  const userData = await authService.signIn(req.body);
  if (userData) {
    res.json(userData);
  } else {
    res.json("error");
  }
}
async function signUp(req, res) {
  const userData = await userService.signUp(req.body);
  if (userData) {
    res.json(userData);
  } else {
    res.json("something went wrong");
  }
}
async function resetPassword(req, res) {
  let userData = await authService.resetPassword(req.body);
  if (userData) {
    res.json(userData);
  } else {
    res.json("error");
  }
}
async function changePassword(req, res) {
  console.log(req.body)
  const userData = await authService.changePassword(req.body);
  if (userData) {
    res.json(userData);
  } else {
    res.json("error");
  }
}
const authController = { signUp, signIn, resetPassword, changePassword };
module.exports = { authController };
