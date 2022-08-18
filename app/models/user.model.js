module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    phoneNumber: {
      allowNull: false,
      type: Sequelize.STRING
    },
    eventSchedule: {
      allowNull: true,
      type: Sequelize.STRING
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    language: {
      allowNull: false,
      type: Sequelize.STRING,
      defaultValue: 'en_US'
    },
    totalGuestAllowed: {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 0

    },
    save_qr_message: {
      allowNull: false,
      type: Sequelize.STRING,
      defaultValue: 'فضلاً تصوير الشاشة لحفظ باركود الدخول'
    },
    snapcaht_lens_URL: {
      allowNull: true,
      type: Sequelize.STRING
    },
    media: {
      allowNull: true,
      type: Sequelize.STRING,
      defaultValue: 'image'
    },
    invitationLink: {
      allowNull: true,
      type: Sequelize.STRING
    },
    message: {
      allowNull: true,
      type: Sequelize.STRING
    },
    description: {
      allowNull: true,
      type: Sequelize.STRING
    },
    reminderMessage: {
      allowNull: true,
      type: Sequelize.STRING
    },
    title: {
      allowNull: true,
      type: Sequelize.STRING
    },
    entranceLink: {
      allowNull: true,
      type: Sequelize.STRING
    },
    thanksURL: {
      allowNull: true,
      type: Sequelize.STRING
    }
  }, {
    timestamps: false,
  });

  return User;
};