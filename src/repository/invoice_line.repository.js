const { db } = require('../configs/db_connection');

class InvoiceLineRepository {
    db = {}
    constructor() {
        this.db = db
    }
    async create(invoiceId, data) {
        const invoiceLine = await this.db.invoiceLine.create(data);
        await invoiceLine.invoiceId = invoiceId
        return invoiceLine;
    }

    async findAllByInvoiceId(invoiceId) {
        return await this.db.invoiceLine.findAll({
            where: {invoiceId},
        });
    }

    async updateOne(id, data) {
        const [rowsUpdated, [invoiceLine]] = await this.db.invoiceLine.update(data, {
            returning: true,
            where: { id },
        });
        if (rowsUpdated !== 1) {
            throw new Error('Error updating invoice line');
        }
        return invoiceLine;
    }

    async deleteOne(id) {
        const rowsDeleted = await this.db.invoiceLine.destroy({
            where: { id },
        });
        if (rowsDeleted !== 1) {
            throw new Error('Error deleting invoice line');
        }
        return true;
    }
}

module.exports = new InvoiceLineRepository();
