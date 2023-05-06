const {DataTypes } = require("sequelize");
const {sequelize} = require('../configs/db_connection')
const Invoice = require('./invoice_model')

const InvoiceLine = sequelize.define('invoiceLine', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: DataTypes.STRING,
    amount: DataTypes.INTEGER
});


InvoiceLine.belongsTo(Invoice)
Invoice.hasMany(InvoiceLine)

module.exports = InvoiceLine