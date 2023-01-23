const Auth = require("../model/Auth");
const nodemailer = require("nodemailer");
const { mymail } = require("../utils/mail");
async function resetPassword(req, res) {
  const { email } = req.body;
  let user = await Auth.findOne({ email });

  if (!user) {
    return res.json({ err: 1, msg: "This email has not been registered!" });
  }
  try {
    mymail(req, res, email);
  } catch (ex) {
    res.status(400).json(ex.message);
  }
}
module.exports = { resetPassword };
