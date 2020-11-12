const db = require("../models");
const User = db.user;


exports.userProfile = (req, res) => {
  User.findOne({
    where: {
      id: req.userId
    }
  }).then(user => {
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
      gender: user.gender
    });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};
