const User=require('../../../models/user');
const jwt=require('jsonwebtoken');


//Register the user in app
module.exports.register = async function(req,res) {
  try {

    const user =  await User.create(req.body);
      
      return res.status(200).json({
          success: true,
          message:user
      });

  } catch (err) {
      return res.status(500).json({
          success: false,
          message:err.message
      });
  }
}

//User Login
module.exports.login= async (req, res)=>{
  try {

    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        msg:'No email or password'
      });
    }

    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        msg: "Invalid Username or Password!" 
      });
    }
    
    // Check if password matches // we are calling function from User model bcrypt function.
    const isMatch = await user.matchPassword(password);
    // Error handling if invalid password
    if (!isMatch) {
      return res.status(401).json({ 
        success: false, 
        msg: "Invalid Username or Password!" 
      });
    }

    // Get JWT token
    const token = user.getSignedJwtToken();

    // Return response
    res.status(200).json({
      success: true,
      token,
      msg: `Log In Sucessful! Keep the Token safely  ${user.username}!`
    });

  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      msg:'Error Occoured!'
    });
  }
}