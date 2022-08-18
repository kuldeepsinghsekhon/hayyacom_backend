module.exports = (sequelize, Sequelize) => {
    const Guestlist = sequelize.define("guestlist", {
        SN: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        guestname: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        totalperguest: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        guestgroup: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        guestmobile: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        eventid: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        invitermobile: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        date: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        time: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        canceled: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        children: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        childrenattended: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        confirmed: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        checkintime: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        attended: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        notattending: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        invitationurl: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
    return Guestlist;
};