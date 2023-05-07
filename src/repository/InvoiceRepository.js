const { db } = require('../configs/db_connection');

class InvoiceRepository {
    db = {}
    constructor() {
        this.db = db
    }
    async createOne(invoice) {
        try {
            return await this.db.invoice.create(invoice);
        } catch (err) {
            console.error(err);
            throw new Error('Error creating invoice');
        }
    }

    async findAllInvoices() {
        try {
            return await this.db.invoice.findAll();
        } catch (err) {
            console.error(err);
            throw new Error('Error finding invoices');
        }
    }

    async findById(id) {
        try {
            return await this.db.invoice.findByPk(id);
        } catch (err) {
            console.error(err);
            throw new Error('Error finding invoice by id');
        }
    }

    async updateOne(id, updatedInvoice) {
        try {
            const [rowsUpdated, [updatedRows]] = await this.db.invoice.update(updatedInvoice, {
                returning: true,
                where: { id },
            });
            if (rowsUpdated !== 1) {
                throw new Error('Error updating invoice');
            }
            return updatedRows;
        } catch (err) {
            console.error(err);
            throw new Error('Error updating invoice');
        }
    }

    async deleteById(id) {
        try {
            const rowsDeleted = await this.db.invoice.destroy({
                where: { id },
            });
            if (rowsDeleted !== 1) {
                throw new Error('Error deleting invoice');
            }
        } catch (err) {
            console.error(err);
            throw new Error('Error deleting invoice');
        }
    }
}

module.exports = new InvoiceRepository();
