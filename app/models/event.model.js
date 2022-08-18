
module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("W-Events", {
		id: {
			type: Sequelize.STRING,
			primaryKey: true
		  },
      
        locationurl: {
            allowNull: false,
            type: Sequelize.STRING
        },
       
		type: {
            allowNull: true,
            type: Sequelize.STRING
        },
        color: {
            allowNull: true,
            type: Sequelize.STRING
        },
		bgcolor: {
            allowNull: true,
            type: Sequelize.STRING
        },
		infocolor: {
            allowNull: true,
            type: Sequelize.STRING
        },
		qrsize: {
            allowNull: true,
            type: Sequelize.INTEGER
        },
        fontUrl: {
            allowNull: true,
            type: Sequelize.STRING
        },
		paperAttendance: {
            allowNull: false,
            type: Sequelize.INTEGER,
			defaultValue:0
        },
		eventDate : {
            allowNull: true,
            type: Sequelize.STRING
        },
		font_family:{
			allowNull: true,
            type: Sequelize.STRING
		},
		font_weight:{
			allowNull: true,
            type: Sequelize.STRING,
			defaultValue:'500'
		},
		font_size:{
			allowNull: true,
            type: Sequelize.STRING,
			defaultValue:'1rem'
		},
        notes: {
            allowNull: true,
            type: Sequelize.STRING
        }
    },{
	  timestamps: false,
	  freezeTableName: true
  });
    return Event;
  };