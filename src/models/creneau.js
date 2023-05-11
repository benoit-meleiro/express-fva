module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Creneau', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date_creneau: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      jour_creneau: {
        type: DataTypes.STRING,
        allowNull: false
      },
      disponibilite_creneau: {
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