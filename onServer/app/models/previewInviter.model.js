
module.exports = (sequelize, Sequelize) => {
    const PreviewInviter = sequelize.define("PreviewInviter", {
        id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
            autoIncrement: true
		  },
        	name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        totalguestallowed: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING
        },
		eventid: {
            allowNull: true,
            type: Sequelize.STRING
        },
        	entranceURL: {
            allowNull: true,
            type: Sequelize.STRING
        },
        LetterURL: {
            allowNull: true,
            type: Sequelize.STRING
        },
        QRcolor: {
            allowNull: true,
            type: Sequelize.STRING
        },
        QRW: {
            allowNull: false,
            type: Sequelize.DOUBLE
        },
        QRH: {
            allowNull: true,
            type: Sequelize.DOUBLE
        },
        QRsize: {
            allowNull: true,
            type: Sequelize.DOUBLE
        },
		Textcolor: {
            allowNull: false,
            type: Sequelize.STRING,
			defaultValue:0
        },
		TextType: {
            allowNull: false,
            type: Sequelize.STRING,
			defaultValue:0
        },
		TextW : {
            allowNull: true,
            type: Sequelize.DOUBLE
        },
		TextH : {
            allowNull: true,
            type: Sequelize.DOUBLE
        }
		,
		NumberW : {
            allowNull: true,
            type: Sequelize.DOUBLE
        },
		NumberH : {
            allowNull: true,
            type: Sequelize.DOUBLE
        },
		numberMessage : {
            allowNull: true,
            type: Sequelize.STRING
        },
		textTitle : {
            allowNull: true,
            type: Sequelize.STRING
        },
		SNW: {
            allowNull: true,
            type: Sequelize.DOUBLE
        },
		SNH: {
            allowNull: true,
            type: Sequelize.DOUBLE
        },
		LocationURL : {
            allowNull: true,
            type: Sequelize.STRING
        },
		Message : {
            allowNull: true,
            type: Sequelize.STRING
        }
    },{
	  timestamps: false,
	  freezeTableName: true
  });
    return PreviewInviter;
  };