
module.exports = (sequelize, Sequelize) => {
    const PartyHall = sequelize.define("partyhalls", {
		id: {
			type: Sequelize.STRING,
			primaryKey: true
		  },
        name: {
            allowNull: true,
            type: Sequelize.STRING
        },
        city: {
            allowNull: true,
            type: Sequelize.STRING
        },
        country: {
            allowNull: true,
            type: Sequelize.STRING
        },
		locationURL: {
            allowNull: true,
            type: Sequelize.STRING
        }
    },{
	  timestamps: false,
	   freezeTableName: true
  });
    return PartyHall;
  };