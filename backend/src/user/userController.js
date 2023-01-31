const us = require('./userService');

const getDatafn = async (req, res) =>
{
    const emp = await us.getData();
    res.send({ "status": true, "data": emp });
}
const UserRegisterFn = async (req, res) => 
{
    const s = await us.UserRegister(req.body);
    if (s) {
        res.send({ "status": true, "message": "Registration successfully" });
    } else {
        res.send({ "status": false, "message": "ERROR" });
    }
}
const deleteUserfn = async (req, res) => 
{
     console.log(req.params.id);
     const result = await us.remove(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Deleted Successfully"} );
     } else {
         res.send({ "status": false, "message": "ERROR" });
     }
}
const userLoginControllerfn = async(req, res) => {
    try {
        const username = req.body["username"]
        const password = req.body["password"]

    const user = await us.loginService(username, password)

    if(user) {      
        res.status(200).json({
            message: {
                username: user.username
            }
        })
    } else {        
        res.status(401).send({
            messgae: "Unauthorized"
        })
    }
    } catch(e) {
        
        res.status(500).send({
            message: "Internal server error"
        })
    }
}
module.exports = {getDatafn,UserRegisterFn,deleteUserfn,userLoginControllerfn};