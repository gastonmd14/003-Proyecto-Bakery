module.exports = (sequelize, datatypes) => {
    let alias = "Product"
    let cols = {

        id: {
            type: datatypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        name: {
            type: datatypes.STRING,
            allowNull: false
        },

        price: {
            type: datatypes.DECIMAL(10, 0),
            allowNull: false
        },

        image: {
            type: datatypes.STRING
        },

        description: {
            type: datatypes.TEXT('long')
        },
        
        createdAt: {
            type: datatypes.DATE
        },

        updatedAt: {
            type: datatypes.DATE
        }
    }

    let config = {
        timestamps: true

    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {  
        Product.belongsTo(models.Category, {
            as: "categories",                   
            foreignKey: "categories_id"  
        }), 
        Product.belongsToMany(models.Cart, {
            as: "products",					
            through: models.Cart_Detail,
            foreignKey: "products_id",
            otherKey: "carts_id",
            timestamps: true
        })
        
    };

    
    return Product;

};