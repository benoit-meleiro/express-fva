module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Interclub', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      equipe_inter: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      numero_match: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date_inter: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      jour_inter: {
        type: DataTypes.STRING,
        allowNull: false
      },
      heure_inter: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reception_inter: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      adversaire_inter: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lieu_inter: {
        type: DataTypes.STRING,
        allowNull: false
      },
      joueurs_dispos_eq: {
        type: DataTypes.STRING,
        allowNull: false
      },
      joueurs_non_dispos_eq: {
        type: DataTypes.STRING,
        allowNull: true
      },
      joueur_sh_1: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pas_de_photos.jpg"
      },
      joueur_sh_2: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pas_de_photos.jpg"
      },
      joueur_sd: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pas_de_photos.jpg"
      },
      joueur_1_dh: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pas_de_photos.jpg"
      },
      joueur_2_dh: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pas_de_photos.jpg"
      },
      joueur_1_dd: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pas_de_photos.jpg"
      },
      joueur_2_dd: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pas_de_photos.jpg"
      },
      joueur_1_dm_1: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pas_de_photos.jpg"
      },
      joueur_2_dm_1: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pas_de_photos.jpg"
      },
      joueur_1_dm_2: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pas_de_photos.jpg"
      },
      joueur_2_dm_2: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pas_de_photos.jpg"
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }