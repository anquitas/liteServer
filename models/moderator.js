import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class moderator extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    kullanici_adi: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    parola: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'moderator',
    timestamps: false
  });
  }
}
