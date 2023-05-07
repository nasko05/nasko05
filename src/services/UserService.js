class UserService {
    userRepository = {}
    constructor() {
        this.userRepository = require('../repository/UserRepository')
    }
    async createOne(invoice){
        try{
            return this.userRepository.createOne(invoice)
        } catch (err){
            console.error(err);
            throw new Error('Error creating invoice');
        }
    }
    async findAllInvoices(){
        try {
            return this.userRepository.findAllInvoices()
        } catch (err) {
            console.error(err);
            throw new Error('Error finding invoices');
        }
    }
    async findById(id){
        try{
            return this.userRepository.findById(id)
        } catch (err) {
            console.error(err);
            throw new Error('Error finding invoice by id');
        }
    }
    async updateOne(id, updatedInvoice){
        try {
            return this.userRepository.updateOne(id, updatedInvoice)
        } catch (err){
            console.error(err);
            throw new Error('Error updating invoice');
        }
    }
    async deleteById(id){
        try{
            return this.userRepository.deleteById(id)
        } catch (err) {
            console.error(err);
            throw new Error('Error deleting invoice');
        }
    }
}

module.exports = new UserService()