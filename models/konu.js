import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class konu extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    alan_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'alan',
        key: 'id'
      }
    },
    isletme_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'isletme',
        key: 'id'
      }
    },
    isim: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'konu',
    timestamps: false
  });
  }
}
