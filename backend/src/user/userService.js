const um = require('./userModel');

module.exports.getData = () => {
    return new Promise(function checkURL(resolve, reject) 
    { 
        um.find({}, function returnDATA(error, result) {
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
    }).catch(error => { 
    }); 
}
module.exports.loginService = async (username, password) => {
    try {
        const user = await um.findOne({username: username, password: password})
         return user;
    } catch(e) {
        throw e
    }
 }
module.exports.UserRegister = (reg) => {
    return new Promise(function fn(resolve, reject) {
 
        const umd = new um();
 
        umd.name = reg.name;
        umd.nic = reg.nic;
        umd.address = reg.address;
        umd.email = reg.email;
        umd.phone = reg.phone;
        umd.username = reg.username;
        umd.password = reg.password;

        umd.save(function result(err, result) {
 
            if (err) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    }).catch(error => { 
    }); 
} 
module.exports.remove = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        um.findByIdAndDelete(id, function returnData(error, result) {
 
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        }); });
 
 }