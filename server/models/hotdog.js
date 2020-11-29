const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Hotdog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hotdog.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      price: {
        type: DataTypes.REAL,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'Hotdog'
    }
  )
  return Hotdog
}
