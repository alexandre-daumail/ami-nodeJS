module.exports = (sequelize, Sequelize) => {
  const bcrypt = require('bcryptjs');
  const User = sequelize.define("user", {
    email: {
      type: Sequelize.STRING,
      allowNull:false,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull:false,
      validate: {
        min: 8,
      }
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull:false,
      validate: {
        isAlpha: true
      }
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull:false,
      validate: {
        isAlpha: true
      }
    },
    
  });
  
  User.addHook(
    "beforeCreate",
    user => (user.password = bcrypt.hashSync(user.password, 10))
  );
  return User;
};