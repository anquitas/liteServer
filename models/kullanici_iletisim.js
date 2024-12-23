import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class kullanici_iletisim extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    kullanici_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'kullanici',
        key: 'id'
      }
    },
    telefon: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    adres: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kullanici_iletisim',
    timestamps: false
  });
  }
}
