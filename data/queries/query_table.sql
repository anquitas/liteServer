


-- ## KULLANICI --- --- ---

DROP TABLE IF EXISTS kullanici;
CREATE TABLE kullanici ( -- ASİL
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	isim VARCHAR(30) NOT NULL,
	soyisim VARCHAR(30) NOT NULL,
	parola VARCHAR(30) NOT NULL,
	eposta VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS kullanici_iletisim;
CREATE TABLE kullanici_iletisim (
	kullanici_id INTEGER PRIMARY KEY NOT NULL,
	telefon VARCHAR(12),
	adres TEXT,
	FOREIGN KEY (kullanici_id) REFERENCES kullanici(id)
);

DROP TABLE IF EXISTS kullanici_meta;
CREATE TABLE kullanici_meta (
	kullanici_id INTEGER PRIMARY KEY NOT NULL,
	uye_tarihi VARCHAR(50) NOT NULL,
	uyari_sayisi DEFAULT 0,
	FOREIGN KEY (kullanici_id) REFERENCES kullanici(id)
);



-- ## İSLETME --- --- ---

DROP TABLE IF EXISTS isletme;
CREATE TABLE isletme ( -- ASİL
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	isim VARCHAR(30) NOT NULL,
	eposta VARCHAR(50) NOT NULL,
	telefon VARCHAR(12) NOT NULL
);


DROP TABLE IF EXISTS konu;
CREATE TABLE konu (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	alan_id INTEGER,
	isletme_id INTEGER NOT NULL,
	isim VARCHAR(30) NOT NULL,
	FOREIGN KEY (alan_id) REFERENCES alan(id),
	FOREIGN KEY (isletme_id) REFERENCES isletme(id)
);

DROP TABLE IF EXISTS kategori;
CREATE TABLE kategori  (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	isim VARCHAR(30) NOT NULL,
);

DROP TABLE IF EXISTS alan;
CREATE TABLE alan (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	isim VARCHAR(30)
);



-- ## GERİ BİLDİRİM --- --- ---

DROP TABLE IF EXISTS geribildirim;
CREATE TABLE geribildirim (  -- ASİL
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	kullanici_id INTEGER NOT NULL,
	konu_id INTEGER NOT NULL,
	kategori_id INTEGER,
	baslik VARCHAR(256) NOT NULL,
	icerik TEXT NOT NULL,
	post_tarih DATETIME NOT NULL,
	yayin_tarih DATETIME NOT NULL,
	cevaplama_tarih DATETIME NOT NULL,
	donut INTEGER CHECK (donut BETWEEN 1 AND 5),
	FOREIGN KEY (kullanici_id) REFERENCES kullanici(id),
	FOREIGN KEY (isletme_id) REFERENCES isletme(id),
	FOREIGN KEY (kategori_id) REFERENCES kategori(id),	
);

DROP TABLE IF EXISTS yorum;
CREATE TABLE yorum (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	kullanici_id INTEGER NOT NULL,
	geribildirim_id INTEGER NOT NULL,
	yorum TEXT NOT NULL,
	FOREIGN KEY (kullanici_id) REFERENCES kullanici(id),
	FOREIGN KEY (geribildirim_id) REFERENCES geribildirim(id) 
);

DROP TABLE IF EXISTS geribildirim_tip;
CREATE TABLE geribildirim_tip (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	isim VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS geribildirim_kaydedilen;
CREATE TABLE geribildirim_kaydedilen (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	geribildirim_id INTEGER NOT NULL,
	FOREIGN KEY (geribildirim_id) REFERENCES geribildirim(id)
);

DROP TABLE IF EXISTS geribildirim_durum;
CREATE TABLE geribildirim_durum (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	isim VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS takip_tip ;
CREATE TABLE takip_tip(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	isim VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS geribildirim_takip;
CREATE TABLE geribildirim_takip (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	kullanici_id INTEGER NOT NULL,
	geribildirim_id INTEGER NOT NULL,
	takip_tip_id INTEGER NOT NULL,
	FOREIGN KEY (kullanici_id) REFERENCES kullanici(id),
	FOREIGN KEY (geribildirim_id) REFERENCES geribildirim(id),
	FOREIGN KEY (takip_tip_id) REFERENCES takip_tip(id)
);



-- ## SİTE --- --- ---
 
DROP TABLE IF EXISTS iletisim_post;
CREATE TABLE iletisim_post (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	isim VARCHAR(30) NOT NULL,
	soyisim VARCHAR(30) NOT NULL,
	eposta VARCAHR(30) NOT NULL,
	mesaj TEXT NOT NULL
 );



 
-- ## MODERASYON --- --- --- 

 DROP TABLE IF EXISTS moderator;
 CREATE TABLE moderator (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	kullanici_adi VARCHAR(30) NOT NULL,
	parola VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS rol;
CREATE TABLE rol (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	isim VARCHAR(30) NOT NULL
);

DROP TABLE IF EXISTS islem;
CREATE TABLE islem (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	isim VARCHAR(60) NOT NULL
);


DROP TABLE IF EXISTS kullanici_log;
CREATE TABLE kullanici_log (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	islem_id INTEGER NOT NULL,
	tarih DATETIME NOT NULL,
	FOREIGN KEY (islem_id) REFERENCES islem(id)
);

 -- --- --- --- 






