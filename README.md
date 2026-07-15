# عراجين | Arajeen Premium Experience

الموقع الرقمي الفاخر لعلامة عراجين للتمور، مبني وفق **ARAJEEN MASTER SPECIFICATION v1.0** (20 جزءًا).

## 🚀 التشغيل محليًا

لا يحتاج المشروع أي بناء (Build) — HTML/CSS/JS خام.

```bash
# أي خادم ملفات ثابتة يعمل، مثال:
npx serve .
# أو
python3 -m http.server 8080
```

ثم افتح `http://localhost:8080`.

## 📁 هيكل المشروع

```
Arajeen/
├── index.html              # جميع الأقسام الـ 15 في صفحة واحدة
├── assets/
│   ├── css/
│   │   ├── variables.css   # الألوان، الخطوط، المسافات، نقاط التوقف
│   │   ├── reset.css
│   │   ├── typography.css
│   │   ├── layout.css      # الحاويات، الهيدر، الشبكة
│   │   ├── components.css  # الأزرار، البطاقات، النماذج، المعرض...
│   │   ├── animations.css  # Splash، Reveal، Particles
│   │   ├── utilities.css
│   │   └── style.css       # يجمع كل الطبقات + خلفيات الأقسام
│   └── js/
│       ├── app.js          # نقطة الدخول
│       ├── navigation.js
│       ├── scroll.js       # Reveal + Parallax + Journey Progress
│       ├── counters.js
│       ├── gallery.js      # الفلاتر + Lightbox
│       ├── forms.js
│       ├── accessibility.js
│       ├── lazyload.js
│       ├── animations.js   # الجسيمات الذهبية + توهج البطاقات
│       └── helpers.js
├── robots.txt
├── sitemap.xml
└── manifest.webmanifest
```

## 🎨 الهوية البصرية

| العنصر | القيمة |
|---|---|
| كحلي أساسي | `#1D2746` |
| ذهبي | `#B8922A` |
| ذهبي فاتح | `#E7C66A` |
| بيج دافئ | `#F5EFE4` |
| خلفية داكنة | `#0B1224` |
| خط عربي | Tajawal |
| خط إنجليزي | Manrope |

## ➕ إضافة قسم جديد

1. أضف `<section class="section bg-ambient" id="new-section">` داخل `index.html`.
2. استخدم المكونات الجاهزة (`.glass-card`, `.product-card`, `.value-card`, `.stat-card`...) من `components.css`.
3. أضف `class="reveal"` لأي عنصر تريد له حركة ظهور عند التمرير.
4. أضف رابط القسم في `.main-nav` و`.mobile-nav`.

## 🖼️ استبدال الصور التوضيحية

جميع الصور حاليًا عبارة عن رسوم SVG توضيحية (Placeholders) داخل `<symbol>` في أعلى `index.html`.
لاستبدالها بصور حقيقية:

```html
<img class="lazy" data-src="assets/images/products/majdool-royal.avif" alt="مجدول ملكي">
```

`lazyload.js` جاهز لتفعيل هذا النمط تلقائيًا.

## ✅ قائمة الجودة قبل الإطلاق

- [ ] استبدال جميع الصور التوضيحية بصور تصوير احترافي حقيقي.
- [ ] تعبئة بيانات التواصل الفعلية (هاتف، بريد، خريطة Google).
- [ ] ربط نموذج التواصل بخادم فعلي (Fetch/AJAX حسب `forms.js`).
- [ ] تحديث الإحصائيات في قسم Impact & Statistics ببيانات حقيقية.
- [ ] فحص Lighthouse (الهدف: 95+ في كل المحاور).
- [ ] اختبار على الأجهزة المذكورة في PART 17 من المواصفات.

## 📦 النشر

المشروع جاهز للنشر مباشرة على Netlify / Vercel / GitHub Pages دون أي تعديل — ملفات ثابتة بالكامل.
