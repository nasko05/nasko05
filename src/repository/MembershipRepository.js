const { db } = require('../configs/db_connection')

class MembershipRepository{
    db = {}
    constructor() {
        this.db = db
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
    }
    async getById(id){
        try{
            const res = await this.db.membership.findByPk(id)
            console.log("Result: " + res)
            return res
        } catch (e) {
            console.log("Error")
        }
    }
    async getAll(){
        try{
            const res = await this.db.membership.findAll()
            console.log("Result: " + res)
            return res
        } catch (e) {
            console.log("Error")
        }
    }
    async remove(id){
        try{
            const res = await this.db.membership.destroy({ where: {id}});
            console.log("Result: " + res)
            return res
        } catch (e) {
            console.log("Error")
        }
    }
    async createUser(membership){
        try{
            const res = await this.db.membership.create(membership)
            console.log("Result: " + res)
            return res
        } catch (e) {
            console.log("Error")
        }
    }
    async updateOne(membershipId, newMembership) {
        try {
            const [rowsUpdated, [updatedMembership]] = await this.db.membership.update(newMembership, {
                where: {
                    id: membershipId,
                },
                returning: true, // Add the returning option
            });

            if (rowsUpdated !== 1) {
                throw new Error('Error updating membership');
            }
            return updatedMembership;
        } catch (err) {
            console.error(err);
            throw new Error('Error updating post');
        }
    }
}

module.exports = new MembershipRepository()