const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
  router.post("/register", async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user)

    } catch (err) {
        res.status(500).json(err);
    }
  });


//LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(400).json('Wrong credentials!');
      return;
    }
    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      res.status(400).json('Wrong credentials!');
      return;
    }
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.post("/login", async (req, res) => {
//    try{
//     //Find user: !user return Invalid Credentiaals
//     const user = await User.findOne({username:req.body.username});
//     !user && res.status(500).json("Invalid Credentials");
     
//     //Compare and check the password, !it doesnt tally, return invalid credentials
//     const validated = await bcrypt.compare(req.body.password, user.password);
//     !validated && res.status(500).json("Invalid Credentials");
     
//     //But if everything is okay, return success && user
//     res.status(200).json(user)

//    } catch (err) {res.status(500).json(err)}
// })

module.exports = router