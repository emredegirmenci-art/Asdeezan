# 🕌 Namaz Vakitleri — Ezan Uygulaması

Diyanet İşleri Başkanlığı hesaplama metoduna dayalı namaz vakitleri ve ezan uygulaması.

## Özellikler

- 📍 **81 il desteği** — Tüm Türkiye il merkezleri koordinatlarıyla
- 🕐 **Gerçek zamanlı geri sayım** — Sonraki vakte saniye saniye
- 🎵 **Ezan melodisi** — Web Audio API ile Hicaz makamı sentezi
- 📱 **iPhone PWA** — Ana ekrana eklenebilir, tam ekran çalışır
- 🔄 **Otomatik güncelleme** — Gece yarısı yeni gün vakitlerini çeker
- 💾 **Offline destek** — Service Worker ile çevrimdışı çalışır

## Veri Kaynağı

[AlAdhan API](https://aladhan.com) — `method=13` (Diyanet İşleri Başkanlığı), `school=1` (Hanefi)

Doğruluk: Diyanet resmi sitesiyle ±1 dakika tolerans.

## Kurulum (iPhone)

1. Safari'den **https://emredegirmenci-art.github.io/Asdeezan/** adresini aç
2. Alt menüden **Paylaş** → **Ana Ekrana Ekle** seçeneğine tıkla
3. Uygulama ana ekranda belirsin, tam ekran açılsın

## Teknik Detaylar

- **Sıfır bağımlılık** — Tek HTML dosyası, vanilla JavaScript
- **Web Audio API** — Ezan melodisi için (Hicaz makamı)
- **Service Worker** — Offline çalışma ve cache yönetimi
- **PWA Manifest** — Standalone uygulama deneyimi
- **CSS Custom Properties** — Tutarlı İslami tema

## Lisans

Bu proje kişisel kullanım için serbesttir.
