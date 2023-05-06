const {sequelize} = require('../configs/db_connection')
const {DataTypes} = require('sequelize')

const User = require('./user_model')

const Membership = sequelize.define('membership', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Active'
    },
    credits: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    start_date: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
    },
    end_date: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
    }
})

Membership.belongsTo(User)
User.hasMany(Membership)

module.exports = Membership