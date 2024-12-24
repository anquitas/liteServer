import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class kullanici_meta extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    kullanici_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'kullanici',
        key: 'id'
      }
    },
    uye_tarihi: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    uyari_sayisi: {
      type: "",
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'kullanici_meta',
    timestamps: false
  });
  }
}
