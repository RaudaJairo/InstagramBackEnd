const {Sequelize} = require('@sequelize/core');
const {join} = require('path');

const Database = () => {
    const sequelize = new Sequelize({
        dialect: "sqlite",
        storage: join(__dirname, 'db.sqlite'),
        logging: false
    });

    const auth = async () => {
        await sequelize.authenticate();
    }

    return {
        auth
    }

}

module.exports = Database();