import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _alan from  "./alan.js";
import _geribildirim from  "./geribildirim.js";
import _geribildirim_durum from  "./geribildirim_durum.js";
import _geribildirim_kaydedilen from  "./geribildirim_kaydedilen.js";
import _geribildirim_takip from  "./geribildirim_takip.js";
import _geribildirim_tip from  "./geribildirim_tip.js";
import _iletisim_post from  "./iletisim_post.js";
import _islem from  "./islem.js";
import _isletme from  "./isletme.js";
import _kategori from  "./kategori.js";
import _konu from  "./konu.js";
import _kullanici from  "./kullanici.js";
import _kullanici_iletisim from  "./kullanici_iletisim.js";
import _kullanici_log from  "./kullanici_log.js";
import _kullanici_meta from  "./kullanici_meta.js";
import _moderator from  "./moderator.js";
import _rol from  "./rol.js";
import _takip_tip from  "./takip_tip.js";
import _yorum from  "./yorum.js";

export default function initModels(sequelize) {
  const alan = _alan.init(sequelize, DataTypes);
  const geribildirim = _geribildirim.init(sequelize, DataTypes);
  const geribildirim_durum = _geribildirim_durum.init(sequelize, DataTypes);
  const geribildirim_kaydedilen = _geribildirim_kaydedilen.init(sequelize, DataTypes);
  const geribildirim_takip = _geribildirim_takip.init(sequelize, DataTypes);
  const geribildirim_tip = _geribildirim_tip.init(sequelize, DataTypes);
  const iletisim_post = _iletisim_post.init(sequelize, DataTypes);
  const islem = _islem.init(sequelize, DataTypes);
  const isletme = _isletme.init(sequelize, DataTypes);
  const kategori = _kategori.init(sequelize, DataTypes);
  const konu = _konu.init(sequelize, DataTypes);
  const kullanici = _kullanici.init(sequelize, DataTypes);
  const kullanici_iletisim = _kullanici_iletisim.init(sequelize, DataTypes);
  const kullanici_log = _kullanici_log.init(sequelize, DataTypes);
  const kullanici_meta = _kullanici_meta.init(sequelize, DataTypes);
  const moderator = _moderator.init(sequelize, DataTypes);
  const rol = _rol.init(sequelize, DataTypes);
  const takip_tip = _takip_tip.init(sequelize, DataTypes);
  const yorum = _yorum.init(sequelize, DataTypes);

  konu.belongsTo(alan, { as: "alan", foreignKey: "alan_id"});
  alan.hasMany(konu, { as: "konus", foreignKey: "alan_id"});
  geribildirim_kaydedilen.belongsTo(geribildirim, { as: "geribildirim", foreignKey: "geribildirim_id"});
  geribildirim.hasMany(geribildirim_kaydedilen, { as: "geribildirim_kaydedilens", foreignKey: "geribildirim_id"});
  geribildirim_takip.belongsTo(geribildirim, { as: "geribildirim", foreignKey: "geribildirim_id"});
  geribildirim.hasMany(geribildirim_takip, { as: "geribildirim_takips", foreignKey: "geribildirim_id"});
  yorum.belongsTo(geribildirim, { as: "geribildirim", foreignKey: "geribildirim_id"});
  geribildirim.hasMany(yorum, { as: "yorums", foreignKey: "geribildirim_id"});
  kullanici_log.belongsTo(islem, { as: "islem", foreignKey: "islem_id"});
  islem.hasMany(kullanici_log, { as: "kullanici_logs", foreignKey: "islem_id"});
  konu.belongsTo(isletme, { as: "isletme", foreignKey: "isletme_id"});
  isletme.hasMany(konu, { as: "konus", foreignKey: "isletme_id"});
  geribildirim.belongsTo(kategori, { as: "kategori", foreignKey: "kategori_id"});
  kategori.hasMany(geribildirim, { as: "geribildirims", foreignKey: "kategori_id"});
  geribildirim.belongsTo(kullanici, { as: "kullanici", foreignKey: "kullanici_id"});
  kullanici.hasMany(geribildirim, { as: "geribildirims", foreignKey: "kullanici_id"});
  geribildirim_takip.belongsTo(kullanici, { as: "kullanici", foreignKey: "kullanici_id"});
  kullanici.hasMany(geribildirim_takip, { as: "geribildirim_takips", foreignKey: "kullanici_id"});
  kullanici_iletisim.belongsTo(kullanici, { as: "kullanici", foreignKey: "kullanici_id"});
  kullanici.hasMany(kullanici_iletisim, { as: "kullanici_iletisims", foreignKey: "kullanici_id"});
  kullanici_meta.belongsTo(kullanici, { as: "kullanici", foreignKey: "kullanici_id"});
  kullanici.hasMany(kullanici_meta, { as: "kullanici_meta", foreignKey: "kullanici_id"});
  yorum.belongsTo(kullanici, { as: "kullanici", foreignKey: "kullanici_id"});
  kullanici.hasMany(yorum, { as: "yorums", foreignKey: "kullanici_id"});
  geribildirim_takip.belongsTo(takip_tip, { as: "takip_tip", foreignKey: "takip_tip_id"});
  takip_tip.hasMany(geribildirim_takip, { as: "geribildirim_takips", foreignKey: "takip_tip_id"});

  return {
    alan,
    geribildirim,
    geribildirim_durum,
    geribildirim_kaydedilen,
    geribildirim_takip,
    geribildirim_tip,
    iletisim_post,
    islem,
    isletme,
    kategori,
    konu,
    kullanici,
    kullanici_iletisim,
    kullanici_log,
    kullanici_meta,
    moderator,
    rol,
    takip_tip,
    yorum,
  };
}
