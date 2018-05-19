module.exports = function (sequelize, DataTypes) {
  var newUser = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        len: {
          args: [1, 36],
          msg: "First name must be between 1 and 36 letters"
        },
        is: {
          args: ["^[a-z]+$", 'i'],
          msg: "First name must not contain numbers or special characters"
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        len: {
          args: [1, 36],
          msg: "Last name must be between 1 and 36 letters"
        },
        is: {
          args: ["^[a-z]+$", 'i'],
          msg: "Last name must not contain numbers or special characters"
        }
      }
    },
    userName: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        len: {
          args: [6, 32],
          msg: "Username must be between 6 and 32 characters"
        },
      }
    },
    userEmail: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        len: {
          args: [6, 50],
          msg: "Email must be between 6 and 50 characters"
        },
        isEmail: {
          msg: "Must be in email format (foo@bar.com)"
        }
      },
    },
    userPassword: {
      type: DataTypes.STRING,
      notNull: true,
      validate: {
        len: {
          args: [8, 50],
          msg: "Password must be between 8 and 50 characters"
        }
      },
    },
    userVoice: {
      type: DataTypes.INTEGER,
      notNull: true,
    },
    userURLhistory: {
      type: DataTypes.STRING,
      validate: {
        isURL: true
      }
    },
    userURLqueue: {
      type: DataTypes.STRING,
      validate: {
        isURL: true
      }
    },
    userTimestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      validate: {
        isDate: true
      }
    },
  });
  return newUser;
};