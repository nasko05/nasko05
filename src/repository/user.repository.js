const { db } = require('../configs/db_connection')

class UserRepository{
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
            const res = await this.db.user.findByPk(id)
            console.log("Result: " + res)
            return res
        } catch (e) {
            console.log("Error")
        }
    }
    async getAll(){
        try{
            const res = await this.db.user.findAll()
            console.log("Result: " + res)
            return res
        } catch (e) {
            console.log("Error")
        }
    }
    async remove(id){
        try{
            const res = await this.db.user.destroy({ where: {id}});
            console.log("Result: " + res)
            return res
        } catch (e) {
            console.log("Error")
        }
    }
    async createUser(user){
        try{
            const res = await this.db.user.create(user)
            console.log("Result: " + res)
            return res
        } catch (e) {
            console.log("Error")
        }
    }
    async update(id, newUser) {
        try {
            const [rowsUpdated, [post]] = await this.db.user.update(newUser, {
                returning: true,
                where: { id }
            });
            if (rowsUpdated !== 1) {
                throw new Error('Error updating post');
            }
            return post;
        } catch (err) {
            console.error(err);
            throw new Error('Error updating post');
        }
    }
}

module.exports = new UserRepository()