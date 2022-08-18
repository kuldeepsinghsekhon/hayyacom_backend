module.exports = (sequelize, Sequelize) => {
    const Receptionist = sequelize.define("Receptionist", {
		// id: {
		// 	type: Sequelize.INTEGER,
		// 	primaryKey: true,
		// 	 autoIncrement: true
		//   },
        MobileNo: {
            allowNull: false,
            type: Sequelize.STRING
        },
        Rname: {
            allowNull: false,
            type: Sequelize.STRING
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING
        },
		 city: {
            allowNull: false,
            type: Sequelize.STRING
        },
        fees: {
            allowNull: false,
            type: Sequelize.STRING
        }
		,
        timearrived: {
            allowNull: true,
            type: Sequelize.STRING
        }
		,
        timeleft: {
            allowNull: true,
            type: Sequelize.INTEGER
        }
		
    },{
	  timestamps: false,
	    freezeTableName: true

  });
    return Receptionist;
  };
