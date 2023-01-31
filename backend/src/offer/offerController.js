const ofs = require('./offerService');

const getOfferDetailfn = async (req, res) =>
{
    const off = await ofs.getOfferDetails();
    res.send({ "status": true, "data": off });
}

const createOfferDetailfn = async (req, res) => 
{
    const status = await ofs.createOfferDetails(req.body);
    if (status) {
        res.send({ "status": true, "message": "Added successfully" });
    } else {
        res.send({ "status": false, "message": "Error" });
    }
}

const removeOfferDetailfn = async (req, res) => 
{
     console.log(req.params.id);
     const result = await ofs.removeOfferDetails(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Deleted successfully"} );
     } else {
         res.send({ "status": false, "message": "Failed" });
     }
}


module.exports = { getOfferDetailfn, createOfferDetailfn,removeOfferDetailfn};