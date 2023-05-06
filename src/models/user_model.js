const { DataTypes } = require("sequelize");
const {sequelize} = require('../configs/db_connection')

const Membership = require('./membership_model')

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

Membership.belongsTo(User)
User.hasMany(Membership)

module.exports = User