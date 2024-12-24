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
      allowNull: false,
      references: {
        model: 'kullanici',
        key: 'id'
      }
    },
    konu_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kategori_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'kategori',
        key: 'id'
      }
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
      type: DataTypes.DATE,
      allowNull: false
    },
    yayin_tarih: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cevaplama_tarih: {
      type: DataTypes.DATE,
      allowNull: false
    },
    donut: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'geribildirim',
    timestamps: false
  });
  }
}
