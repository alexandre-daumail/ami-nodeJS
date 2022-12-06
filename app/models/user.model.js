module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      user: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
    });
  
    return User;
  };