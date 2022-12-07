module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          min: 8
        }
      },
      firstname: {
        type: Sequelize.STRING,
        validate: {
          isAlpha: true
        }
      },
      lastname: {
        type: Sequelize.STRING,
        validate: {
          isAlpha: true
        }
      },
    });
  
    return User;
  };