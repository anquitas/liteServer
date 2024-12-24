import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class iletisim_post extends Model {
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
    soyisim: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    eposta: {
      type: "VARCAHR(30)",
      allowNull: false
    },
    mesaj: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'iletisim_post',
    timestamps: false
  });
  }
}
