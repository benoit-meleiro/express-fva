module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Session', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      dateSession: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      disponibiliteSession: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      nomResponsableOuverture: {
        type: DataTypes.STRING,
        allowNull: false
      },
      prenomResponsableOuverture: {
        type: DataTypes.STRING,
        allowNull: false
      },
      matchsInterclubs: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }