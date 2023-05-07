class InvoiceService {
    invoiceRepository = {}
    constructor() {
        this.invoiceRepository = require('../repository/InvoiceRepository')
    }
    async createOne(invoice){
        try{
            return this.invoiceRepository.createOne(invoice)
        } catch (err){
            console.error(err);
            throw new Error('Error creating invoice');
        }
    }
    async findAllInvoices(){
        try {
            return this.invoiceRepository.findAllInvoices()
        } catch (err) {
            console.error(err);
            throw new Error('Error finding invoices');
        }
    }
    async findById(id){
        try{
            return this.invoiceRepository.findById(id)
        } catch (err) {
            console.error(err);
            throw new Error('Error finding invoice by id');
        }
    }
    async updateOne(id, updatedInvoice){
        try {
            return this.invoiceRepository.updateOne(id, updatedInvoice)
        } catch (err){
            console.error(err);
            throw new Error('Error updating invoice');
        }
    }
    async deleteById(id){
        try{
            return this.invoiceRepository.deleteById(id)
        } catch (err) {
            console.error(err);
            throw new Error('Error deleting invoice');
        }
    }
}

module.exports = new InvoiceService()