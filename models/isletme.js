import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class isletme extends Model {
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
    },
    eposta: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    telefon: {
      type: DataTypes.STRING(12),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'isletme',
    timestamps: false
  });
  }
}
