const db = require('../models');
const Group = db.groups;
const Operator = db.Sequelize.Op;

// Create and Save a new Group
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name){
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    // Create a Group
    const group = {
        name: req.body.name,
       
    }

    // Save Group in the database
    Group.create(group)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message:
                    error.message || "Some error occured while creating the Group"
            });
        });
    
};

// Retrieve all Groups from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Operator.like]: `%${name}%` } } : null;
  
    Group.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
};

// Find a single Group with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Group.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Group with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Error retrieving Group with id=${id}.`
        });
      });
};

// Update a Group by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Group.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Group was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Group with id=${id}. Maybe Group was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Error updating Group with id=${id}`
        });
      });
};

// Delete a Group with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

  Group.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Group was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Group with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Tutorial with id=${id}`
      });
    });
};

// Delete all Groups from the database.
exports.deleteAll = (req, res) => {
    Group.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Groups were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Groups."
          });
        });
};