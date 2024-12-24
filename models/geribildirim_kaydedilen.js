import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class geribildirim_kaydedilen extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    geribildirim_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'geribildirim',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'geribildirim_kaydedilen',
    timestamps: false
  });
  }
}
