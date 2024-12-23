


-- ## şirkete göre konu seçimi
DROP VIEW IF EXISTS  VI_isletme_kategoriler;
CREATE VIEW VI_isletme_kategoriler
AS
SELECT *
FROM isletme i
JOIN konu ko 
	ON isletme.id = konu.isletme_id;
-- tüm işletmelere ait tüm kategorileri getirir
-- sonrasında şart ile işletme seçilecek



-- ## kategorilere göre konu seçimi
DROP VIEW IF EXISTS  VI_kategori_geribildirimler
AS
SELECT *
FROM kategori ka
JOIN konu ko
	ON ka.id = ko.kategori_id;

	

-- ## bir konuya ait şikayet sayısı
DROP VIEW IF EXISTS 
SELECT *
FROM geribildirim ge
JOIN konu ko
	ON ge.




-- ## son bir güne ait şikayetler



	
