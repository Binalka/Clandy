const fs = require('./feedbackService');

const getDataFeedbackfn = async (req, res) =>
{
    const emp = await fs.getDataFeedback();
    res.send({ "status": true, "data": emp });
}

const FeedbackControllerFn =  (req, res) => 
{
    const s =  fs.creatFeedback(req.body);
    if (s) {
        res.send({ "status": true, "message": "Success" });
    } else {
        res.send({ "status": false, "message": "ERROR" });
    }
}

const deleteFeedbackfn = async (req, res) => 
{
     console.log(req.params.id);
     const result = await fs.removefeedback(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Deleted Sucessfully"} );
     } else {
         res.send({ "status": false, "message": " Error" });
     }
}

module.exports = { getDataFeedbackfn, FeedbackControllerFn, deleteFeedbackfn};