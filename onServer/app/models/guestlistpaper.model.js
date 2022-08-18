module.exports = (sequelize, Sequelize) => {
    const Guestlistpaper = sequelize.define("guestlistpaper", {
		eventid: {
			type: Sequelize.INTEGER,
			primaryKey: true
		  },
          attendedguest: {
            allowNull: false,
            type: Sequelize.INTEGER
        }		
    },{
	  timestamps: false,
	  freezeTableName: true
  });
    return Guestlistpaper;
  };