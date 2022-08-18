const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require("./user.model.js")(sequelize, Sequelize);
db.Contacts = require("./contact.model.js")(sequelize, Sequelize);
db.Events = require("./event.model.js")(sequelize, Sequelize);
db.User_Event = require("./User_Event.model.js")(sequelize, Sequelize);
db.Invitations = require("./invitation.model.js")(sequelize, Sequelize);
db.Eventsseq = require("./eventseq.model.js")(sequelize, Sequelize);
db.Invitationsseq = require("./invitationseq.model.js")(sequelize, Sequelize);
db.HayyacomEvent = require("./Hayyacomevent.model.js")(sequelize, Sequelize);
db.Receptionistevent = require("./receptionistevent.model.js")(sequelize, Sequelize);
db.Receptionist = require("./receptionist.model.js")(sequelize, Sequelize);
db.PartyHall = require("./partyhall.model.js")(sequelize, Sequelize);
db.Inviter = require("./inviter.model.js")(sequelize, Sequelize);
db.PreviewInviter = require("./previewInviter.model")(sequelize, Sequelize);
db.Guestlistpaper = require("./guestlistpaper.model.js")(sequelize, Sequelize);
db.Guestlist = require("./guestlist.model.js")(sequelize, Sequelize);
db.Contacts.belongsTo(db.Users, {
    foreignKey: "userId",
    as: "user",
});
db.HayyacomEvent.belongsTo(db.PartyHall, {
    foreignKey: "partyhallid",
    as: "partyhall",
});
db.Events.belongsTo(db.PartyHall, {
    foreignKey: "partyhallId",
    as: "partyhall",
});
db.HayyacomEvent.hasMany(db.Inviter, { as: "inviters", foreignKey: "eventid"});
//db.Users.hasMany(db.Events, { as: "events", foreignKey: "eventId"});
/*  db.Events.belongsTo(db.Users, {
    foreignKey: "userId",
    as: "user",
}); */
 db.Users.belongsToMany(db.Events, {as: 'events',through: db.User_Event });
db.Events.belongsToMany(db.Users, {as: 'users', through: db.User_Event });
//db.Users.hasOne(db.Events);
db.Invitations.belongsTo(db.Users, {
    foreignKey: "userId",
    as: "user",
});

//db.Contacts.hasOne(db.E);
db.Contacts.hasMany(db.Invitations,{foreignKey: "contactId"});

db.Invitations.belongsTo(db.Contacts, {
    foreignKey: "contactId",
    as: "contact",
});

//db.Events.hasMany(db.Invitations, { as: "invitations", foreignKey: "invitationId" });
db.Invitations.belongsTo(db.Events, {
    foreignKey: "eventId",
    as: "event",
});

module.exports = db;