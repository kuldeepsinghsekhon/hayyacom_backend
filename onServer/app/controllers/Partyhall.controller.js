const db = require("../models");
const PartyHall = db.PartyHall;
const Op = db.Sequelize.Op;


exports.searchOne = (req, res) => {
  //{where : {userId: req.params.id} }
  let q = req.body.q.toString()
  console.log(q.toString())
 // res.send(q);

 PartyHall.findAll({
    where: { "name":{[Op.like]:q+'%'}}
    //  include: [{
    //   model: PartyHall,
    //   as: 'partyhall',
    //   required: false
    // }, {
    //   model: Inviter,
    //   as: 'inviters',
    //   required: false
    // }]
  }).then(partyhall => {
    if (!partyhall) {
      res.status(200).send({ data: [] });
    } else {
      res.send({ data: partyhall });
    }
  }).catch(err => {
    console.log(err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the partyhall."
    });
  })
};
