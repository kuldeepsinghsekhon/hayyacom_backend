module.exports = (sequelize, Sequelize) => {
    const Receptionistevent = sequelize.define("receptionisteventr", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			 autoIncrement: true
		  },
        ReceptionistMobileNo: {
            allowNull: false,
            type: Sequelize.STRING
        },
        eventID: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        date: {
            allowNull: true,
            type: Sequelize.STRING
        }
		
    },{
	  timestamps: false,
	    freezeTableName: true

  });
    return Receptionistevent;
  };
