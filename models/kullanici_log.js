import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class kullanici_log extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    islem_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'islem',
        key: 'id'
      }
    },
    tarih: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'kullanici_log',
    timestamps: false
  });
  }
}
