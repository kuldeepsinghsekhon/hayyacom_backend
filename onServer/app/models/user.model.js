module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
/*       email: {
        allowNull: true,
        type: Sequelize.STRING
      }, */
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },language: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue:'en_US'
      },
	  totalGuestAllowed: {
        allowNull: false,
        type: Sequelize.INTEGER,
		defaultValue:0

      }
  },{
	  timestamps: false,
  });

  return User;
};