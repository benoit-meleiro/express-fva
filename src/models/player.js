module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Player', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      emailPlayer: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      man: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      joueur_interclubs: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "loisir"
      },
      joueur_capitaine: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "non"
      },
      droits: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "joueur"
      },
      jour_ouverture: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "non"
      },
      photos: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pas-de-photos.jpg"
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }