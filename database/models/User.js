module.exports = (sequelize, datatypes) => {
    let alias = "User"
    let cols = {

        id: {
            type: datatypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        userName: {
            type: datatypes.STRING,
            allowNull: false
        },

        firstName: {
            type: datatypes.STRING
        },

        lastName: {
            type: datatypes.STRING
        },

        email: {
            type: datatypes.STRING,
            allowNull: false
        },

        password: {
            type: datatypes.STRING,
            allowNull: false,
            defaultValue: "0"
        },

        image: {
            type: datatypes.STRING
        },

        admin: {
            type: datatypes.INTEGER,
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
        tableName: "users",
        timestamps: true

    }

    let User = sequelize.define(alias, cols, config);

    User.associate = function(models) { 
        User.hasMany(models.Cart, {
            as: "carts",                   
            foreignKey: "users_id"  
        })    
        
    };

    
    return User;

};