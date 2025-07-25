🛍️ Online Store - فروشگاه آنلاین
یک فروشگاه آنلاین کامل و واکنش‌گرا با Next.js 14، Tailwind CSS، TypeScript و App Router

این پروژه شامل نمایش محصولات، سبد خرید، فیلتر، مرتب‌سازی، صفحه تسویه حساب و جزئیات محصول است.

✨ امکانات
✅ نمایش لیست محصولات همراه با تصویر، تخفیف و امتیاز

✅ فیلتر و مرتب‌سازی محصولات (جدیدترین، ارزان‌ترین، گران‌ترین، محبوب‌ترین)

✅ سبد خرید حرفه‌ای با امکان افزایش، کاهش و حذف محصول

✅ محاسبه قیمت نهایی با تخفیف

✅ صفحه جزئیات محصول

✅ تسویه حساب و پاک‌سازی سبد

✅ ریسپانسیو کامل و طراحی زیبا با UX بالا

🛠️ تکنولوژی‌ها
Next.js 14 (App Router)

TypeScript

Tailwind CSS

React Hooks

Context API

🚀 راه‌اندازی پروژه
git clone https://github.com/Erfan8104/online-store.git
cd online-store
npm install
npm run dev

📁 ساختار پوشه‌ها
📦online-store/
┣ 📂public/
┣ 📂src/
┃ ┣ 📂app/
┃ ┃ ┣ 📂account/
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┣ 📂cart/
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┣ 📂checkout/
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┣ 📂context/
┃ ┃ ┃ ┗ 📜CartContext.tsx
┃ ┃ ┣ 📂products/
┃ ┃ ┃ ┣ 📂[id]/
┃ ┃ ┃ ┃ ┣ 📜page.tsx ← صفحه جزئیات محصول
┃ ┃ ┃ ┃ ┣ 📜layout.tsx
┃ ┃ ┃ ┃ ┗ 📜clientLayout.tsx
┃ ┃ ┃ ┗ 📜page.tsx ← صفحه لیست محصولات
┃ ┃ ┣ 📜favicon.ico
┃ ┃ ┣ 📜globals.css
┃ ┃ ┣ 📜layout.tsx ← لایه اصلی پروژه
┃ ┃ ┣ 📜not-found.tsx
┃ ┃ ┗ 📜page.tsx
┃ ┣ 📂components/
┃ ┃ ┣ 📜FeaturedProducts.tsx
┃ ┃ ┣ 📜FilterSidebar.tsx
┃ ┃ ┣ 📜Footer.tsx
┃ ┃ ┣ 📜Header.tsx
┃ ┃ ┣ 📜HeroSlider.tsx
┃ ┃ ┣ 📜ProductCard.tsx
┃ ┃ ┗ 📜SortDropdown.tsx
┃ ┣ 📂data/
┃ ┃ ┗ 📜mockData.ts ← داده‌های اولیه
┃ ┗ 📂utils/
┣ 📜.gitignore
┣ 📜eslint.config.mjs
┣ 📜next-env.d.ts
┣ 📜next.config.js
┣ 📜package-lock.json
┗ 📜package.json

📌 نکات مهم
برای سادگی، اطلاعات از mockData.ts خوانده می‌شود.

مدیریت وضعیت سبد خرید با Context انجام شده است.

👤 توسعه‌دهنده
Erfan
