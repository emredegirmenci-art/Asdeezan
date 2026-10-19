# 🕌 Namaz Vakitleri — Ezan Uygulaması

Diyanet İşleri Başkanlığı hesaplama metoduna dayalı namaz vakitleri uygulaması.

## Özellikler

- 📍 **81 il + konum** — İl merkezleri veya telefonun konumu (ilçeler için daha doğru)
- 🕐 **Gerçek zamanlı geri sayım** — Sonraki vakte saniye saniye
- 🔔 **Görsel vakit uyarısı** — Vakit girdiğinde uygulama açıksa ekranda uyarı (sessiz)
- 📱 **iPhone PWA** — Ana ekrana eklenebilir, tam ekran çalışır
- 🔄 **Otomatik güncelleme** — Gece yarısı yeni güne geçer
- 💾 **Offline destek** — Ayın tüm vakitleri telefona kaydedilir, internet olmadan da çalışır

> Not: iPhone'da PWA'lar arka planda çalışmaz; vakit uyarısı yalnızca uygulama açıkken görünür.

## Veri Kaynağı

[AlAdhan API](https://aladhan.com) aylık takvim — `method=13` (Diyanet İşleri Başkanlığı), `school=0` (İkindi asr-ı evvel, Diyanet takvimindeki gibi)

İmsak olarak AlAdhan'ın `Fajr` değeri gösterilir (AlAdhan'ın `Imsak` alanı 10 dk erkendir ve Diyanet takviminde yoktur).
Vakitleri arada bir [namazvakitleri.diyanet.gov.tr](https://namazvakitleri.diyanet.gov.tr) ile karşılaştırmanız önerilir.

## Kurulum (iPhone)

1. Safari'den **https://emredegirmenci-art.github.io/Asdeezan/** adresini aç
2. Alt menüden **Paylaş** → **Ana Ekrana Ekle** seçeneğine tıkla
3. Uygulama ana ekranda belirsin, tam ekran açılsın

## Teknik Detaylar

- **Sıfır bağımlılık** — Tek HTML dosyası, vanilla JavaScript
- **localStorage** — Seçilen şehir ve aylık vakit takvimi
- **Service Worker** — Uygulama dosyaları önce ağdan, ağ yoksa önbellekten (dosyalar değişince `sw.js` içindeki `CACHE_NAME` artırılmalı)
- **PWA Manifest** — Standalone uygulama deneyimi
- **CSS Custom Properties** — Tutarlı İslami tema

## Lisans

Bu proje kişisel kullanım için serbesttir.
