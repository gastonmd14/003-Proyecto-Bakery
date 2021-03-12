module.exports = (sequelize, datatypes) => {
    let alias = "Category"
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
        tableName: "categories",
        timestamps: true

    }

    let Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {  
        Category.hasMany(models.Product, {
            as: "products",                    
            foreignKey: "categories_id"  
        })
        
    };

    
    return Category;

};