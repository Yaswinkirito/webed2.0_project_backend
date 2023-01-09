const bcrypt = require('bcryptjs');



const user = require('../model/user.js');



const createUser = async (req, res) => {
       try {
        const {name , email , password} = req.body.data
        const hashedpassword = await bcrypt.hash(password, 6)
        const User = { name: name, email: email, password: hashedpassword }

        const newUser = await new user(User);
        await newUser.save();
        console.log("User Registered")
        return res.json({status: "ok"})}
        catch (error) {
            console.log("Error while signing user",error)
            return res.status(500).json({msg: 'Error while signing up user' });
        }
    } 


module.exports = createUser