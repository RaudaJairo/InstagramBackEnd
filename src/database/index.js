const {Sequelize} = require('@sequelize/core');
const {join} = require('path');

const Database = () => {
    const sequelize = new Sequelize({
        dialect: "sqlite",
        storage: join(__dirname, 'db.sqlite'),
        logging: false,
        dialectOptions: {
            charset: "utf8mb4",
            collate: "utf8mb4_unicode_ci",
        }
    });

    const auth = async () => {
        await sequelize.authenticate();
    }

    return {
        auth
    }

}

module.exports = Database();