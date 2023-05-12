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
      jourSession: {
        type: DataTypes.STRING,
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
      matchsInterclubs: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      nbreInscrits: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      joueursPresents: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "non"
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }