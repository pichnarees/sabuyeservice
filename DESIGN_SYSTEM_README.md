# PEA Solar Request System - Design System

**เวอร์ชัน:** 1.0.0  
**ภาษา:** ไทย/อังกฤษ  
**Framework:** React + Tailwind CSS v4  
**Font:** IBM Plex Sans Thai

---

## 📋 สารบัญ

- [เกี่ยวกับ Design System](#เกี่ยวกับ-design-system)
- [การติดตั้ง](#การติดตั้ง)
- [Color Tokens](#color-tokens)
- [Typography](#typography)
- [Components](#components)
- [Spacing & Layout](#spacing--layout)
- [การใช้งาน](#การใช้งาน)
- [ตัวอย่างโค้ด](#ตัวอย่างโค้ด)

---

## เกี่ยวกับ Design System

Design System นี้พัฒนาขึ้นสำหรับระบบติดตามสถานะคำร้องติดตั้งโซลาร์เซลล์ของการไฟฟ้า (PEA) โดยมีจุดเน้นที่:

- **ดีไซน์มินิมอล** - เน้นความเรียบง่าย อ่านง่าย
- **สีหลัก #8E0369** - สีม่วงแดงของ PEA
- **ฟอนต์ IBM Plex Sans Thai** - รองรับภาษาไทยเต็มรูปแบบ
- **Component-based** - ใช้ components จาก Figma โดยตรง
- **Responsive** - รองรับทุกขนาดหน้าจอ

---

## การติดตั้ง

### 1. สำหรับโปรเจกต์ที่ใช้ CSS

```html
<!-- นำเข้าไฟล์ design-tokens.css -->
<link rel="stylesheet" href="path/to/design-tokens.css">

<!-- นำเข้า IBM Plex Sans Thai font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 2. สำหรับโปรเจกต์ที่ใช้ TypeScript/React

```bash
# คัดลอกไฟล์ design-tokens.ts ไปยังโปรเจกต์
cp design-tokens.ts /path/to/your/project/src/
```

```typescript
// Import ใน TypeScript/React
import { brandColors, statusColors, typography } from './design-tokens';
```

### 3. สำหรับโปรเจกต์ที่ใช้ Figma Components

```bash
# คัดลอกโฟลเดอร์ imports ทั้งหมด
cp -r /src/imports /path/to/your/project/src/
```

---

## Color Tokens

### Brand Colors (สีแบรนด์)

| Token | Color | Hex | Usage |
|-------|-------|-----|-------|
| Primary | ![#8E0369](https://via.placeholder.com/15/8E0369/000000?text=+) | `#8E0369` | สีหลัก - ใช้กับปุ่มหลัก, หัวข้อสำคัญ |
| Primary Hover | ![#7A0359](https://via.placeholder.com/15/7A0359/000000?text=+) | `#7A0359` | สีเมื่อ hover บนปุ่มหลัก |
| Primary Light | ![#A80589](https://via.placeholder.com/15/A80589/000000?text=+) | `#A80589` | สีหลักแบบอ่อน - ใช้กับปุ่มรอง |

### Status Colors (สีสถานะ)

#### ✅ Success (สำเร็จ)
```css
--color-status-success-bg: #ECFEF3
--color-status-success-text: #079455
--color-status-success-border: #C3F4D6
```
**Figma Component:** `Status-100-48`

#### ⚪ Cancelled (ยกเลิก)
```css
--color-status-cancelled-bg: #F4F4F4
--color-status-cancelled-text: #5E5E5E
--color-status-cancelled-border: #EAECF0
```
**Figma Component:** `Status-104-374`

#### ❌ Error (ข้อผิดพลาด)
```css
--color-status-error-bg: #FEF2F2
--color-status-error-text: #DC2626
--color-status-error-border: #FECACA
```
**Figma Component:** `Status-100-69`

#### 🔵 In Progress (กำลังดำเนินการ)
```css
--color-status-progress-bg: #EFF8FF
--color-status-progress-text: #175CD3
--color-status-progress-border: #B2DDFF
```
**Figma Component:** `Status-100-55`

#### 🟡 Waiting (รอดำเนินการ)
```css
--color-status-waiting-bg: #FFFAEB
--color-status-waiting-text: #DC6803
--color-status-waiting-border: #FEDF89
```
**Figma Component:** `Status-100-62`

### Neutral Colors (สีกลาง)

#### Background
- **Page:** `#FAFBFC` - พื้นหลังหน้าเว็บ
- **Card:** `#FFFFFF` - พื้นหลัง Card
- **Section:** `#F2F4F7` - พื้นหลังส่วนย่อย
- **Hover:** `#F9FAFB` - พื้นหลังเมื่อ hover

#### Text
- **Primary:** `#424957` - ข้อความหลัก
- **Secondary:** `#6A7282` - ข้อความรอง (label)
- **Tertiary:** `#99A1AF` - ข้อความเบาบาง (disabled)
- **Heading:** `#1E1E1E` - หัวข้อ

#### Border
- **Default:** `#E0E4EC`
- **Light:** `#E9EAEC`
- **Medium:** `#DEE2E6`
- **Dark:** `#D0D0D0`

---

## Typography

### Font Family
```css
font-family: 'IBM Plex Sans Thai', sans-serif;
```

### Font Sizes

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| H1 | 30px | 700 | หัวข้อหลัก เช่น หมายเลขคำร้อง |
| H2 | 24px | 700 | หัวข้อรอง เช่น ชื่อหน้า |
| H3 | 20px | 700 | หัวข้อส่วนย่อย |
| Body | 16px | 400 | ข้อความทั่วไป |
| Small | 14px | 400 | ข้อความขนาดเล็ก, ปุ่ม |
| Label | 12px | 400 | ป้ายกำกับ, หัวตาราง |

### Font Weights

- **Normal:** 400 - ข้อความทั่วไป
- **Medium:** 500 - ข้อความเน้นเล็กน้อย
- **Semibold:** 600 - ปุ่ม, ข้อความสำคัญ
- **Bold:** 700 - หัวข้อ, ข้อความสำคัญมาก

---

## Components

### 🏷️ Status Badge

**ขนาดคงที่:** 54px × 22px

#### การใช้งานแบบ Figma Component (แนะนำ)

```tsx
import Status10048 from './imports/Status-100-48';  // สำเร็จ
import Status10055 from './imports/Status-100-55';  // กำลังดำเนินการ
import Status10062 from './imports/Status-100-62';  // รอดำเนินการ
import Status10069 from './imports/Status-100-69';  // ข้อผิดพลาด
import Status104374 from './imports/Status-104-374'; // ยกเลิก

// ใช้งาน
<div className="w-[54px] h-[22px]">
  <Status10048 />
</div>
```

#### การใช้งานแบบ CSS (ทางเลือก)

```html
<!-- HTML -->
<span class="badge-success">สำเร็จ</span>
<span class="badge-cancelled">ยกเลิก</span>
<span class="badge-error">ข้อผิดพลาด</span>
<span class="badge-progress">กำลังดำเนินการ</span>
<span class="badge-waiting">รอดำเนินการ</span>
```

### 🔘 Button

#### Primary Button
```html
<button class="btn-primary">ยืนยัน</button>
```
```tsx
// Tailwind
<button className="px-8 py-3 bg-[#8E0369] rounded-lg text-white font-bold hover:bg-[#7A0359]">
  ยืนยัน
</button>
```

#### Secondary Button
```html
<button class="btn-secondary">ย้อนกลับ</button>
```
```tsx
// Tailwind
<button className="px-8 py-3 border border-[#8E0369] rounded-lg text-[#8E0369] font-bold hover:bg-[#8E0369]/5">
  ย้อนกลับ
</button>
```

### 📄 Card

```html
<div class="card">
  <!-- Content -->
</div>
```

```tsx
// Tailwind
<div className="bg-white rounded-[20px] p-7 shadow-md">
  {/* Content */}
</div>
```

### 📊 Table

```tsx
<div className="rounded-[16px] overflow-hidden border border-[#e0e4ec]">
  {/* Header */}
  <div className="flex bg-[#f9fafb] border-b border-[#e0e4ec]">
    <div className="px-5 py-3">
      <span className="text-[#424957] text-[14px] font-semibold">
        หัวตาราง
      </span>
    </div>
  </div>
  
  {/* Row */}
  <div className="flex hover:bg-gray-50">
    <div className="px-5 py-4">
      <span className="text-[#424957] text-[14px]">
        ข้อมูล
      </span>
    </div>
  </div>
</div>
```

### ⏩ Progress Stepper

```tsx
<div className="bg-white flex items-center border border-[#e6eaee] rounded-lg h-[73px]">
  {/* Step - Completed */}
  <div className="flex-1 flex items-center justify-center gap-2 px-4">
    <div className="w-[34px] h-[34px] rounded-full bg-[#a80589] flex items-center justify-center">
      {/* Checkmark Icon */}
    </div>
    <span className="text-[#424957] text-[16px] font-bold">
      ขั้นตอนที่ 1
    </span>
  </div>
  
  {/* Divider */}
  <svg width="17" height="72" className="shrink-0">
    {/* Divider path */}
  </svg>
  
  {/* Step - Current */}
  <div className="flex-1 flex items-center justify-center gap-2 px-4">
    <div className="w-[34px] h-[34px] rounded-full border-2 border-[#8e0369] flex items-center justify-center">
      <span className="text-[#8e0369] text-[14px] font-semibold">02</span>
    </div>
    <span className="text-[#8e0369] text-[16px] font-semibold">
      ขั้นตอนที่ 2
    </span>
  </div>
</div>
```

---

## Spacing & Layout

### Spacing Scale

| Token | Size | Usage |
|-------|------|-------|
| `xs` | 4px | ระยะห่างน้อยมาก |
| `sm` | 8px | ระยะห่างเล็ก |
| `md` | 12px | ระยะห่างกลาง |
| `lg` | 16px | ระยะห่างมาตรฐาน |
| `xl` | 20px | ระยะห่างใหญ่ |
| `2xl` | 24px | ระยะห่างใหญ่มาก |
| `3xl` | 28px | ระยะห่างใหญ่พิเศษ |
| `4xl` | 32px | ระยะห่างใหญ่มากพิเศษ |
| `5xl` | 40px | ระยะห่างใหญ่สุด |
| `6xl` | 60px | ระยะห่างใหญ่สุดพิเศษ |

### Border Radius

| Token | Size | Usage |
|-------|------|-------|
| `sm` | 8px | ปุ่ม, Input |
| `md` | 12px | Card เล็ก |
| `lg` | 16px | Section |
| `xl` | 20px | Card ใหญ่ |
| `full` | 9999px | Badge, Pill |

### Layout

```tsx
// Container
<div className="bg-white rounded-[20px] w-[1440px] px-[28px] pt-[120px] pb-[28px] mx-[40px]">
  {/* Content */}
</div>

// Grid System
<div className="grid grid-cols-3 gap-5">
  <div>{/* Column 1 */}</div>
  <div>{/* Column 2 */}</div>
  <div>{/* Column 3 */}</div>
</div>
```

---

## การใช้งาน

### 1. ใช้ CSS Variables

```css
.my-button {
  background-color: var(--color-brand-primary);
  color: white;
  padding: var(--spacing-button-vertical) var(--spacing-button-horizontal);
  border-radius: var(--radius-button);
  font-family: var(--font-family-primary);
}

.my-button:hover {
  background-color: var(--color-brand-primary-hover);
}
```

### 2. ใช้ TypeScript Tokens

```typescript
import { brandColors, buttonStyles } from './design-tokens';

const MyButton = () => (
  <button
    style={{
      backgroundColor: brandColors.primary.default,
      padding: `${buttonStyles.primary.paddingVertical} ${buttonStyles.primary.paddingHorizontal}`,
      borderRadius: buttonStyles.primary.borderRadius,
    }}
  >
    Click Me
  </button>
);
```

### 3. ใช้ Tailwind CSS

```tsx
<button className="px-8 py-3 bg-[#8E0369] rounded-lg text-white font-bold font-['IBM_Plex_Sans_Thai'] hover:bg-[#7A0359]">
  ยืนยัน
</button>
```

---

## ตัวอย่างโค้ด

### Card พร้อม Status Badge

```tsx
import Status10048 from './imports/Status-100-48';

const RequestCard = ({ title, status }) => (
  <div className="bg-white rounded-[20px] p-7 shadow-md">
    <h3 className="text-[20px] font-bold text-[#1e1e1e] mb-4">
      {title}
    </h3>
    
    <div className="flex items-center gap-3">
      <span className="text-[#6a7282] text-[12px]">สถานะ:</span>
      <div className="w-[54px] h-[22px]">
        <Status10048 />
      </div>
    </div>
  </div>
);
```

### Form Input

```tsx
const FormInput = ({ label, value, onChange }) => (
  <div className="space-y-2">
    <label className="text-[#6a7282] text-[12px] font-['IBM_Plex_Sans_Thai']">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2.5 border border-[#d0d0d0] rounded-lg text-[#424957] text-[14px] font-['IBM_Plex_Sans_Thai'] focus:border-[#8E0369] focus:outline-none"
    />
  </div>
);
```

### Modal

```tsx
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[20px] w-[800px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#e0e4ec]">
          <h2 className="text-[#424957] text-[24px] font-bold">
            หัวข้อ Modal
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg"
          >
            ✕
          </button>
        </div>
        
        {/* Content */}
        <div className="px-8 py-6">
          {children}
        </div>
      </div>
    </div>
  );
};
```

---

## Payment Timeline (การชำระเงิน)

ระบบรองรับการแสดงการชำระเงิน **3 งวด** ที่มีจำนวนเงินไม่เท่ากัน:

### โครงสร้างงวดชำระ

1. **งวดที่ 1** - ชำระเงินมัดจำ (30-40%) เมื่อเซ็นสัญญา
2. **งวดที่ 2** - ชำระเงินระหว่างติดตั้ง (30-40%) เมื่อเริ่มติดตั้ง
3. **งวดที่ 3** - ชำระเงินส่วนที่เหลือ (20-40%) เมื่อติดตั้งเสร็จสมบูรณ์

**หมายเหตุ:** จำนวนเงินเป็นจำนวนเต็มไม่มีทศนิยม

### ตัวอย่างการใช้งาน

```tsx
const PaymentTimeline = () => {
  const payments = [
    { stage: 1, amount: 150000, status: 'completed', date: '15/03/2568' },
    { stage: 2, amount: 120000, status: 'completed', date: '22/03/2568' },
    { stage: 3, amount: 80000, status: 'pending', date: '-' },
  ];
  
  return (
    <div className="space-y-4">
      {payments.map((payment) => (
        <div key={payment.stage} className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#e0e4ec]">
          <div>
            <p className="text-[#424957] text-[16px] font-semibold">
              งวดที่ {payment.stage}
            </p>
            <p className="text-[#6a7282] text-[14px]">
              {payment.amount.toLocaleString('th-TH')} บาท
            </p>
          </div>
          <div className="w-[54px] h-[22px]">
            {/* Status Badge */}
          </div>
        </div>
      ))}
    </div>
  );
};
```

---

## 📝 หมายเหตุสำคัญ

### ⚠️ การใช้ Status Badge

**ต้องใช้ Figma Components เท่านั้น!**

```tsx
// ✅ ถูกต้อง
import Status104374 from './imports/Status-104-374';

<div className="w-[54px] h-[22px]">
  <Status104374 />
</div>

// ❌ ไม่ถูกต้อง - ห้ามใช้ Tailwind สร้าง badge เอง
<span className="px-2.5 py-1 bg-[#f4f4f4] text-[#5e5e5e]">
  ยกเลิก
</span>
```

### 📐 ขนาดคงที่

Status Badge ทุกตัวต้องมีขนาด **54px × 22px** เสมอ

### 🎨 สีหลัก

สีหลักของระบบคือ `#8E0369` ไม่ควรเปลี่ยนแปลงเพื่อรักษา brand identity

### 🔤 ฟอนต์

ใช้ **IBM Plex Sans Thai** เท่านั้น เพื่อความสม่ำเสมอ

---

## 🔗 ไฟล์ที่เกี่ยวข้อง

- `design-system.json` - คำอธิบาย Design System แบบเต็ม (JSON)
- `design-tokens.css` - CSS Variables และ Utility Classes
- `design-tokens.ts` - TypeScript Constants และ Helper Functions
- `/src/imports/Status-*.tsx` - Figma Status Badge Components

---

## 📞 ติดต่อ

หากมีคำถามหรือต้องการความช่วยเหลือเพิ่มเติม กรุณาติดต่อทีมพัฒนา

---

**สร้างโดย:** PEA Development Team  
**อัปเดตล่าสุด:** March 2026  
**License:** Internal Use Only
