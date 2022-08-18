module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("Contact", {
        name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        phoneNumber: {
            allowNull: false,
            type: Sequelize.STRING
        },
        totalGuest: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        eventSchedule: {
            allowNull: true,
            type: Sequelize.STRING
        },
        status: {
            allowNull: true,
            type: Sequelize.STRING
        },
		 totalChildren: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        totalChildren: {
            allowNull: false,
            type: Sequelize.INTEGER
        }
    },{
	  timestamps: false,
  });
    return Contact;
  };