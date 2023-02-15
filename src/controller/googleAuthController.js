const googleAuth = require("../services/googleAuthService");
/**
 * @googleAuthControllerService This function takes in a credential object from the request body and returns some data.
 *
 */
const googleAuthControllerService = async (req, res) => {
    try {
        let data = await googleAuth.googleAuthService(req.body.credential);
        console.log("google-response", data);
        if (data) {
            return res.status(201).json(data);
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = googleAuthControllerService;
