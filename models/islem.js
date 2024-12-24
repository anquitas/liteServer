import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class islem extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    isim: {
      type: DataTypes.STRING(60),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'islem',
    timestamps: false
  });
  }
}
