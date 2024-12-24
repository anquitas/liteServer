import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class geribildirim_takip extends Model {
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
    geribildirim_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'geribildirim',
        key: 'id'
      }
    },
    takip_tip_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'takip_tip',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'geribildirim_takip',
    timestamps: false
  });
  }
}
