module.exports = app => {
    const groups = require("../controllers/group.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Group
    router.post("/", groups.create);
  
    // List Groups
    router.get("/", groups.findAllGroups);

    // List Groups with users collections
    router.get("/users", groups.findAllGroupsUsers);
  
    // Get a single Group
    router.get("/:id", groups.findOne);
  
    // Update a Group with id
    router.put("/:id", groups.update);
  
    // Delete a Group with id
    router.delete("/:id", groups.delete);
  
    // Delete all Groups
    router.delete("/", groups.deleteAll);
  
    app.use('/api/groups', router);
  };