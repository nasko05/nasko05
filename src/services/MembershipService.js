class MembershipService {
    membershipRepository = {}
    constructor() {
        this.membershipRepository = require('../repository/MembershipRepository')
    }
    async createOne(invoice){
        try{
            return this.membershipRepository.createOne(invoice)
        } catch (err){
            console.error(err);
            throw new Error('Error creating invoice');
        }
    }
    async findAllInvoices(){
        try {
            return this.membershipRepository.findAllInvoices()
        } catch (err) {
            console.error(err);
            throw new Error('Error finding invoices');
        }
    }
    async findById(id){
        try{
            return this.membershipRepository.findById(id)
        } catch (err) {
            console.error(err);
            throw new Error('Error finding invoice by id');
        }
    }
    async updateOne(id, updatedInvoice){
        try {
            return this.membershipRepository.updateOne(id, updatedInvoice)
        } catch (err){
            console.error(err);
            throw new Error('Error updating invoice');
        }
    }
    async deleteById(id){
        try{
            return this.membershipRepository.deleteById(id)
        } catch (err) {
            console.error(err);
            throw new Error('Error deleting invoice');
        }
    }
}

module.exports = new MembershipService()