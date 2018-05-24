module.exports = function (sequelize, DataTypes) {

    // Create table for new user
    const newUser = sequelize.define("user", {
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