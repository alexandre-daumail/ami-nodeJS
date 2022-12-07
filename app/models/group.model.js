module.exports = (sequelize, Sequelize) => {
    const Group = sequelize.define("group", {
      name: {
        type: Sequelize.STRING,
        validate: {
          isAlpha: true
        }
      },
    });
  
    return Group;
  };