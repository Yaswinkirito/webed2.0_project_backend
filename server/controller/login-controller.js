const user = require("../model/user")
const bcrypt  = require("bcryptjs")
const loginController   = async (req, res) => {
    const {name, password} = req.body.data
    const author =await user.findOne({name: name})
    if (!name){
        return res.json({status:"failed"})
    }
    console.log(`${author.name} is requesting login`)
    const validator = await bcrypt.compare( password, author.password)
    if(validator){
        if (res.status(200)){
            console.log("login sucessfull")
            return res.json({status: "ok",name: name,loggedin: true})
        }else{
            return res.json({error:"error"});
        }

    }
    res.json({status: "error",error:"Invalid Password"});
}
module.exports = loginController