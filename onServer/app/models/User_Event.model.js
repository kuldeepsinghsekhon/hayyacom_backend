
module.exports = (sequelize, Sequelize) => {
    const User_Event = sequelize.define("User_Event", {
		      invitationLink:{
        allowNull: true,
        type: Sequelize.STRING
    },
    totalguest:{
      allowNull: true,
      type: Sequelize.INTEGER
  },
  language:{
        allowNull: true,
        type: Sequelize.STRING
    },
	  invitationLink:{
    allowNull: true,
    type: Sequelize.STRING
},
  title:{
        allowNull: true,
        type: Sequelize.STRING
    },
  message:{
        allowNull: true,
        type: Sequelize.STRING
    },
  description:{
        allowNull: true,
        type: Sequelize.STRING
    },
  reminderMessage:{
        allowNull: true,
        type: Sequelize.STRING
    }
      
    },{
	  timestamps: false,
  });
    return User_Event;
  };