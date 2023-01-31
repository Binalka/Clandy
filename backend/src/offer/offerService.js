const om = require('./offerModel');

module.exports.getOfferDetails = () => {
    return new Promise(function checkURL(resolve, reject) {
        om.find({}, function returnData(err, res) {
            if (err) {
                reject(false);
            } else {
         
                resolve(res);
            }
        });
    }).catch(err => {
         
    });
 }



 module.exports.createOfferDetails = (details) => {
    return new Promise(function myFn(resolve, reject) {
        const offerMD = new om();
        offerMD.offer = details.offer;
        offerMD.discount = details.discount;
        offerMD.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    }).catch(err => {     
    });
 }


 module.exports.removeOfferDetails = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        om.findByIdAndDelete(id, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    }).catch(err => {   
    });
 
 }