module.exports = (sequelize, datatypes) => {
    let alias = "Cart_Detail"
    let cols = {

        id: {
            type: datatypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        quantity: {
            type: datatypes.INTEGER.UNSIGNED,
            allowNull: false
        },

        salePrice: {
            type: datatypes.DECIMAL(10, 0),
            allowNull: false
        },

        subTotal: {
            type: datatypes.DECIMAL(10, 0),
            allowNull: false
        },

        createdAt: {
            type: datatypes.DATE
        },

        updatedAt: {
            type: datatypes.DATE
        }
    }

    let config = {
        tableName: "cart_detail",
        timestamps: true

    }

    let Cart_Detail = sequelize.define(alias, cols, config);
    
    return Cart_Detail;

};