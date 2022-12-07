module.exports = (sequelize, Sequelize) => {
    const Group = sequelize.define("group", {
      name: {
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
          isAlphanumeric: true
        }
      },
    });
  
    return Group;
  };