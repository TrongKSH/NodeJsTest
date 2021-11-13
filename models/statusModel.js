
module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define('status', {
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Status
}