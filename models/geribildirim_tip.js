import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class geribildirim_tip extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    isim: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'geribildirim_tip',
    timestamps: false
  });
  }
}