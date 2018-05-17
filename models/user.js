module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        fullName: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        timestamp: DataTypes.timestamp
    });

    return User;
}