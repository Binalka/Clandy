const cs = require('./serviceService');

const getServicefn = async (req, res) =>
{
    const m = await cs.getclothes();
    res.send({ "status": true, "data": m });
}

const createServicefn = async (req, res) => 
{
    const status = await cs.createclothes(req.body);
    if (status) {
        res.send({ "status": true, "message": "Added successfully" });
    } else {
        res.send({ "status": false, "message": "Error" });
    }
}


const removeServicefn = async (req, res) => 
{
     console.log(req.params.id);
     const result = await cs.removeclothes(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Deleted successfully"} );
     } else {
         res.send({ "status": false, "message": "ERROR" });
     }
}


module.exports = { getServicefn, createServicefn,removeServicefn};