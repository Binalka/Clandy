const fbm = require('./feedbackModel');

module.exports.getDataFeedback = () => {
    return new Promise(function checkURL(resolve, reject) 
    { 
        fbm.find({}, function returnDATA(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
}

// user feedback
module.exports.creatFeedback = (feedback) => {
    return new Promise(function fn(resolve, reject) {
        const fbModelDAta = new fbm();
        fbModelDAta.feedback = feedback.feedback;
        fbModelDAta.save(function result(err, result) {
            if (err) {
                reject(false);
            } else {
                resolve(result);
            }
        })
    }).catch(error => { 
    });  
}



module.exports.removefeedback = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        fbm.findByIdAndDelete(id, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    }).catch(error => { 
    }); 
 
 }
