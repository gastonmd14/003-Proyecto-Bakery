module.exports = (sequelize, datatypes) => {
    let alias = "Cart"
    let cols = {

        id: {
            type: datatypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        total: {
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
        tableName: "carts",
        timestamps: true

    }

    let Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models) {  
        Cart.belongsTo(models.User, {
            as: "users",                   
            foreignKey: "users_id"  
        }),
        Cart.belongsToMany(models.Product, {
            as: "carts",					
            through: models.Cart_Detail,
            foreignKey: "carts_id",
            otherKey: "products_id",
            timestamps: true
        })
        
    };

    
    return Cart;

};