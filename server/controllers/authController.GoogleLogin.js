import User from "../models/user.model.js";

const googleLogin = async (req, res) => {
  try {
    const { email, uid } = req.body;

    if (!email || !uid) {
      res.status(400).json({
        success: false,
        message: "Email & UID are required!",
      });
    }

    let user = await User.findOne({ uid });
    if (!user) {
      user = new User({ email, uid });
      await user.save();
      res.status(200).json({
        success: true,
        message: "Login successful!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { googleLogin };
