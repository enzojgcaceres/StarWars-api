const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Movie", 
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4
            },
            films: {
                type: DataTypes.ENUM(
                    "Episode I - The Phantom Menace",
                    "Episode II - Attack of the Clones",
                    "Episode III - Revenge of the Sith",
                    "Episode IV - A New Hope",  
                    "Episode V - The Empire Strikes Back", 
                    "Episode VI - Return of the Jedi", 
                    "Episode VII - The Force Awakens", 
                    "Episode VIII - The Last Jedi", 
                    "Episode IX - The Rise of Skywalker"  
                ), 
                allowNull: false,    
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            }
        }
    )
}


