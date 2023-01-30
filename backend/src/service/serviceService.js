const cm = require('./serviceModel');

module.exports.getclothes = () => {
    return new Promise(function checkURL(resolve, reject) {
        cm.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
    }).catch(e => {
    });
 }

 module.exports.createclothes = (clothesd) => {
    return new Promise(function myFn(resolve, reject) {
        const cmd = new cm()
        cmd.username = clothesd.username;
        cmd.phone = clothesd.phone;
        cmd.service = clothesd.service;
        cmd.date = clothesd.date;
        cmd.persons = clothesd.persons;
        cmd.save(function resultHandle(err, result) {
            if (err) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    }).catch(e => {    
    });
 }


 module.exports.removeclothes = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        cm.findByIdAndDelete(id, function returnData(er, res) {

          if(er)
          {
                reject(false);
          }
          else
          {
             resolve(res);
          }          
        });
    }).catch(e => {       
    }); 
 }
