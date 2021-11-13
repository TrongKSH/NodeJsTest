
module.exports = (sequelize, DataTypes) => {
    const Issue = sequelize.define('issue', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        statusId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        submitterName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Issue
}