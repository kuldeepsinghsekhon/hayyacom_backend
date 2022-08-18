module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("Student", {
        studentID: {
            allowNull: false,
            type: Sequelize.STRING
        },
        token: {
            allowNull: true,
            type: Sequelize.STRING
        },
        totalGuest: {
            allowNull: true,
            type: Sequelize.INTEGER
        },
        eventid: {
            allowNull: true,
            type: Sequelize.STRING
        }
    },{
	  timestamps: false,
  });
    return Student;
  };