module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Registration route
    router.post("/register", users.register);
    
    // Authentication route
    router.post("/login", users.login);

    app.use('/api/authenticate/', router);
  };