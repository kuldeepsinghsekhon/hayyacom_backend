module.exports = (sequelize, Sequelize) => {
    const HayyacomEvent = sequelize.define("events", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true
		  },
        eventtitle: {
            allowNull: false,
            type: Sequelize.STRING
        },
        partyhallid: {
            allowNull: false,
            type: Sequelize.INTEGER,
			defaultValue:0
        },
        date: {
            allowNull: false,
            type: Sequelize.DATE
        },
		type: {
            allowNull: true,
            type: Sequelize.STRING
        },
        totalguest: {
            allowNull: true,
            type: Sequelize.STRING
        },
        packagetype: {
            allowNull: false,
            type: Sequelize.STRING
        },
        urlinvitationletter: {
            allowNull: true,
            type: Sequelize.STRING
        },
        type: {
            allowNull: false,
            type: Sequelize.STRING
        },
        notes: {
            allowNull: true,
            type: Sequelize.STRING
        }
		
    },{
	  timestamps: false,
	  freezeTableName: true
  });
    return HayyacomEvent;
  };