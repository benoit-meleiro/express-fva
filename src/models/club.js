module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Club', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      equipe: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      numeroMatch: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dateInter: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      jourInter: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      heureInter: {
        type: DataTypes.STRING,
        allowNull: false,
     },
      receptionInter: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        
      },
      adversaireInter: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      lieuInter: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      joueursDisposEq: {
        type: DataTypes.TEXT,
        allowNull: false,
        
        
      },
      joueursNonDisposEq: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      joueurSh1: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      joueurSh2: {
        type: DataTypes.TEXT,
        allowNull: false,
       
      },
      joueurSd: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      joueur1Dh: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      joueur2Dh: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      joueur1Dd: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      joueur2Dd: {
        type: DataTypes.TEXT,
        allowNull: false,
       
      },
      joueur1Dm1: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      joueur2Dm1: {
        type: DataTypes.TEXT,
        allowNull: false,
       
      },
      joueur1Dm2: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      joueur2Dm2: {
        type: DataTypes.TEXT,
        allowNull: false,
       
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }