import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class yorum extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    kullanici_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'kullanici',
        key: 'id'
      }
    },
    geribildirim_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'geribildirim',
        key: 'id'
      }
    },
    yorum: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'yorum',
    timestamps: false
  });
  }
}
