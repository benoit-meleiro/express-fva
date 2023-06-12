// const userRoles = ['loisir', 'équipe', 'capitaine', 'admin']

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Player', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg:"le nom ne peut pas être vide"},
          notNull: {msg: "le nom est une propriété requise"}
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      emailPlayer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isEmail: true
        },
        unique: {
          msg: 'Le mail doit être unique et associé à un seul joueur'
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sexe: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "masculin"
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
      jour_ouverture: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "non"
      },
      photos: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pas-de-photos.jpg"
      },
      roles: {
        type: DataTypes.STRING,
        defaultValue: 'loisir',
       
        get() {
          return this.getDataValue('roles').split(',');
        },
        set(roles) {
          if (Array.isArray(roles)) {
            this.setDataValue('roles', roles.join());
          } else {
            this.setDataValue('roles', roles);
          }
        },
        
        validate: {
          areRolesValid(roles){
            const userRoles = ['loisir', 'équipe', 'capitaine', 'admin']; 
            if (!roles) {
              throw new Error('Un utilisateur doit avoir au moins un rôle');
            }
            roles.split(',').forEach(role => {
              if (!userRoles.includes(role)) {
                throw new Error(`Les rôles d'un utilisateur doivent appartenir à la liste suivante : ${userRoles}`);
              }
            });
          }
        }
      }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false,
        scopes: {
          withoutPassword: {
              attributes: { exclude: ['password'] },
          }
      }
    },
    )
  }
  // get() {
        //   return this.getDataValue('roles').split(',');
        // },
        // set(roles) {
        //   this.setDataValue('roles', roles.join());
        // },
        
        // validate: {
        //   areRolesValid(roles){
        //     if(!roles){
        //       throw new Error('Un utilisateur doit avoir au moins un rôle')
        //     }
        //     roles.split(',').forEach(role => {
        //       if(!userRoles.includes(role)){
        //         throw new Error(`Les rôles d'un utilisateur doivent appartenir à la liste suivante : ${userRoles}`)
        //       }
        //     })
        //   }
        // }