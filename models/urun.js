import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class urun extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    isletme_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'isletme',
        key: 'id'
      }
    },
    alan_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'alan',
        key: 'id'
      }
    },
    kategori_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'kategori',
        key: 'id'
      }
    },
    isim: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'urun',
    timestamps: false
  });
  }
}
