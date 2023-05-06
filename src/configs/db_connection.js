// database.js
const { Sequelize } = require('sequelize');
const Invoice = require("../models/invoice_model");
const InvoiceLine = require("../models/invoice_line_model");
const User = require("../models/user_model");
const Membership = require("../models/membership_model");

const sequelize = new Sequelize('db', 'user', 'pass', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 20000,
        idle: 5000
    }
});
const db ={}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.invoice = Invoice;
db.invoiceLine = InvoiceLine;
db.membership = Membership;
db.user = User;

module.exports = {sequelize, db};