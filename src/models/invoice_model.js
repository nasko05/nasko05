const { DataTypes } = require("sequelize");
const {sequelize} = require('../configs/db_connection')
const InvoiceLines = require('./invoice_line_model')
// Invoice model
const Invoice = sequelize.define('invoice', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: DataTypes.DATE,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.INTEGER
});

Invoice.hasMany(InvoiceLines)
InvoiceLines.belongsTo(Invoice)

module.exports = Invoice