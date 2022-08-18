
module.exports = (sequelize, Sequelize) => {
    const User_Event = sequelize.define("User_Event", {
		 
    },{
	  timestamps: false,
  });
    return User_Event;
  };