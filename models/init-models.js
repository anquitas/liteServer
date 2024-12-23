import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _alan from  "./alan.js";
import _geribildirim from  "./geribildirim.js";
import _isletme from  "./isletme.js";
import _kategori from  "./kategori.js";
import _kullanici from  "./kullanici.js";
import _kullanici_iletisim from  "./kullanici_iletisim.js";
import _kullanici_meta from  "./kullanici_meta.js";
import _urun from  "./urun.js";

export default function initModels(sequelize) {
  const alan = _alan.init(sequelize, DataTypes);
  const geribildirim = _geribildirim.init(sequelize, DataTypes);
  const isletme = _isletme.init(sequelize, DataTypes);
  const kategori = _kategori.init(sequelize, DataTypes);
  const kullanici = _kullanici.init(sequelize, DataTypes);
  const kullanici_iletisim = _kullanici_iletisim.init(sequelize, DataTypes);
  const kullanici_meta = _kullanici_meta.init(sequelize, DataTypes);
  const urun = _urun.init(sequelize, DataTypes);

  urun.belongsTo(alan, { as: "alan", foreignKey: "alan_id"});
  alan.hasMany(urun, { as: "uruns", foreignKey: "alan_id"});
  urun.belongsTo(isletme, { as: "isletme", foreignKey: "isletme_id"});
  isletme.hasMany(urun, { as: "uruns", foreignKey: "isletme_id"});
  urun.belongsTo(kategori, { as: "kategori", foreignKey: "kategori_id"});
  kategori.hasMany(urun, { as: "uruns", foreignKey: "kategori_id"});
  kullanici_iletisim.belongsTo(kullanici, { as: "kullanici", foreignKey: "kullanici_id"});
  kullanici.hasMany(kullanici_iletisim, { as: "kullanici_iletisims", foreignKey: "kullanici_id"});
  kullanici_meta.belongsTo(kullanici, { as: "kullanici", foreignKey: "kullanici_id"});
  kullanici.hasMany(kullanici_meta, { as: "kullanici_meta", foreignKey: "kullanici_id"});

  return {
    alan,
    geribildirim,
    isletme,
    kategori,
    kullanici,
    kullanici_iletisim,
    kullanici_meta,
    urun,
  };
}
