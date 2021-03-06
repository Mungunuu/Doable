module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        jobsHiring: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        jobsDone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        specialty: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    User.associate = function (models) {

        User.hasMany(models.Task, {
            onDelete: "cascade"
        });
    };

    return User;
}