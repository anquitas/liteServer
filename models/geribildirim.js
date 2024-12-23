import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class geribildirim extends Model {
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
      allowNull: false
    },
    isletme_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    baslik: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    icerik: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_tarih: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    yayin_tarih: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cevaplama_tarih: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'geribildirim',
    timestamps: false
  });
  }
}
