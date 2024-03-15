const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Character", {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        height: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mass: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hair_color: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        skin_color: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        eye_color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth_year: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.ENUM("female", "male", "genderless", "unknown"),
            allowNull: false,
        },
        homeworld: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        midi_chlorians: { 
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        vehicles: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        starships: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
}