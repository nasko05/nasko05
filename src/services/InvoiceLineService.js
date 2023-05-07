class InvoiceLineService {
    invoiceLineRepository = {}
    constructor() {
        this.invoiceLineRepository = require('../repository/InvoiceLineRepository')
    }
    async createOne(invoice){
        try{
            return this.invoiceLineRepository.createOne(invoice)
        } catch (err){
            console.error(err);
            throw new Error('Error creating invoice');
        }
    }
    async findAllInvoices(){
        try {
            return this.invoiceLineRepository.findAllInvoices()
        } catch (err) {
            console.error(err);
            throw new Error('Error finding invoices');
        }
    }
    async findById(id){
        try{
            return this.invoiceLineRepository.findById(id)
        } catch (err) {
            console.error(err);
            throw new Error('Error finding invoice by id');
        }
    }
    async updateOne(id, updatedInvoice){
        try {
            return this.invoiceLineRepository.updateOne(id, updatedInvoice)
        } catch (err){
            console.error(err);
            throw new Error('Error updating invoice');
        }
    }
    async deleteById(id){
        try{
            return this.invoiceLineRepository.deleteById(id)
        } catch (err) {
            console.error(err);
            throw new Error('Error deleting invoice');
        }
    }
}

module.exports = new InvoiceLineService()