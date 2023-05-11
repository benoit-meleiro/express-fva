module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Session', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date_session: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      jour_session: {
        type: DataTypes.STRING,
        allowNull: false
      },
      disponibilite_session: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      nom_responsable_ouverture: {
        type: DataTypes.STRING,
        allowNull: false
      },
      matchs_interclubs: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      nbre_inscrits: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      joueurs_présents: {
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