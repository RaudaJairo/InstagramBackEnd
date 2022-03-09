const {DataTypes} = require("@sequelize/core");
const nanoid = require("../../lib/nanoid");

const userModel = (sequelize) =>
    sequelize.define("User", {
        id: {
            primaryKey: true,
            type: DataTypes.STRING,
            defaultValue: nanoid
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            unique: true
        },
        password: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                is: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,29}$/i
            }
        },
        name: {
            type: DataTypes.STRING,
            validate: {isAlpha: true}
        }
    })

module.exports = userModel;