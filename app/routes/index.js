const jwt = require("jsonwebtoken");
const auth = require("./auth.routes");
const users = require("./user.routes");
const contacts = require("./contact.routes");
const events = require("./event.routes")
const hayyacom_events = require("./hayyacom-events.routes")
const hayyacom_inviter = require("./inviter.routes")
const invitations = require("./invitation.routes")
const receptionist = require("./receptionist.routes")
const eventreceptionists = require("./eventreceptionists.routes")
const partyhall=require('./partyhall.routes')

const db = require("../models");
const User = db.Users;

module.exports = app => {
    app.use('/auth', auth);
    app.use('/users', users);
    app.use('/contacts', authenticateToken, contacts);
    app.use('/events', authenticateToken, events);
	app.use('/hayyacom/events', hayyacom_events);
  app.use('/hayyacom/invitors', hayyacom_inviter);
  app.use('/partyhall', partyhall);
	app.use('/hayyacom/event/receptioninst', eventreceptionists);
    app.use('/invitations', invitations);
	app.use('/receptionist', receptionist);
}

function authenticateToken(req, res, next) {
    // Gather the jwt access token from the request header
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // if there isn't any token
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      const userData = await User.findByPk(user.id).then(data => {
        if(data)
            next() // pass the execution off to whatever request the client intended
        else {
            res.sendStatus(403)
        }
      })
    })
  }