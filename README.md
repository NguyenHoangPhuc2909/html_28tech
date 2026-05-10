# HTML 28Tech - Khoá học lập trình web

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)
![Language](https://img.shields.io/badge/languages-HTML%20|%20CSS%20|%20JavaScript%20|%20SCSS-brightgreen)
![Repository Size](https://img.shields.io/badge/size-5.6%20MB-blue)

Đây là một dự án học tập về **HTML, CSS, JavaScript** và **SCSS** từ khoá học 28Tech. Repository chứa các bài tập thực hành từ cơ bản đến nâng cao.

🔗 **Live Demo**: [https://html-28tech.vercel.app](https://html-28tech.vercel.app)

---

## 📋 Mục lục

- [Giới thiệu](#giới-thiệu)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Cách sử dụng](#cách-sử-dụng)
- [Danh sách bài tập](#danh-sách-bài-tập)
- [Hướng dẫn chi tiết](#hướng-dẫn-chi-tiết)

---

## 🎯 Giới thiệu

Repository **html_28tech** là một bộ sưu tập các bài tập lập trình web từ khoá học 28Tech. Mỗi bài tập được tổ chức thành một thư mục riêng biệt, chứa:

- **HTML** (50%) - Cấu trúc trang web
- **CSS** (18.1%) - Thiết kế và bố cục
- **JavaScript** (28.1%) - Tương tác và logic
- **SCSS** (3.8%) - Tiền xử lý CSS

Phù hợp cho những ai đang bắt đầu học lập trình web hoặc muốn ôn tập lại kiến thức cơ bản.

---

## 📁 Cấu trúc dự án

```
html_28tech/
├── bai1/           # Bài 1: ...
├── bai2/           # Bài 2: ...
├── bai3/           # Bài 3: Form HTML, iFrame, Semantic HTML
├── bai4/           # Bài 4: ...
├── bai5/           # Bài 5: CSS min-width, max-width, table styling
├── bai6/           # Bài 6: CSS layout, team card component
├── bai7/           # Bài 7: ...
├── bai8/           # Bài 8: ...
├── bai9/           # Bài 9: Bootstrap grid system
├── bai10/          # Bài 10: Bootstrap accordion
├── bai11/ - bai37/ # Bài 11 đến 37: Các bài tập khác
├── .gitignore      # File ignore cho Git
└── README.md       # File này
```

---

## 💻 Công nghệ sử dụng

### Frontend Stack

| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|---------|
| **HTML5** | - | Cấu trúc trang web |
| **CSS3** | - | Thiết kế và styling |
| **SCSS** | - | Tiền xử lý CSS |
| **JavaScript (Vanilla)** | ES6+ | Tương tác và DOM manipulation |
| **Bootstrap** | 4.6.2 | Framework CSS |
| **jQuery** | 3.5.1 | Thư viện JavaScript |
| **Font Awesome** | 6.0.0+ | Icon library |

### Tools & Platform

- **Git & GitHub** - Version control
- **Vercel** - Hosting & deployment
- **VS Code** - Code editor

---

## 🚀 Cách sử dụng

### 1. Clone Repository

```bash
git clone https://github.com/NguyenHoangPhuc2909/html_28tech.git
cd html_28tech
```

### 2. Mở file HTML

**Cách 1: Dùng Live Server (Recommended)**
- Cài đặt extension **Live Server** trong VS Code
- Click chuột phải vào file `.html` → **Open with Live Server**

**Cách 2: Mở trực tiếp**
- Double-click file `.html` để mở trong trình duyệt

**Cách 3: Dùng terminal**
```bash
# Trên macOS
open bai5/ex.html

# Trên Linux
xdg-open bai5/ex.html

# Trên Windows
start bai5/ex.html
```

### 3. Deploy lên Vercel

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 📚 Danh sách bài tập

### Cơ bản (Bài 1-5)

| Bài | Tên | Nội dung | File chính |
|-----|-----|---------|-----------|
| Bài 1 | - | Nền tảng HTML | - |
| Bài 2 | - | Cấu trúc cơ bản | - |
| Bài 3 | Form & Semantic | Form HTML, iFrame, Semantic HTML5 | `baitapform.html`, `index3.html` |
| Bài 4 | - | - | - |
| Bài 5 | CSS Box Model | min-width, max-width, table styling | `ex.html`, `BT_table.html` |

### Trung cấp (Bài 6-15)

| Bài | Tên | Nội dung | File chính |
|-----|-----|---------|-----------|
| Bài 6 | CSS Layout | Newsletter form, team card component | `cau4.html`, `cau5.html` |
| Bài 9 | Bootstrap Grid | Responsive grid system | `index2.html` |
| Bài 10 | Bootstrap Accordion | Accordion component, FAQ section | `index.html` |

### Nâng cao (Bài 16-37)

- **Bài 11 - 37**: Các bài tập nâng cao về:
  - CSS animations & transitions
  - JavaScript DOM manipulation
  - Form validation
  - Event handling
  - ES6+ syntax

---

## 🎓 Hướng dẫn chi tiết

### Bài 3: Form HTML & Semantic

**Học được gì:**
- Tạo form với các input types khác nhau
- Sử dụng semantic HTML5 tags (header, nav, main, footer)
- Nhúng iframe (map, video)

**File tham khảo:**
```bash
bai3/
├── baitapform.html    # Form registration
└── index3.html        # Semantic HTML + iFrame
```

**Keywords:** Form, Input types, Radio, Checkbox, Textarea, iFrame, Semantic HTML

---

### Bài 5: CSS Box Model

**Học được gì:**
- Hiểu min-width và max-width
- Table styling
- CSS properties: width, padding, margin

**File tham khảo:**
```bash
bai5/
├── ex.html           # min-width, max-width demo
├── BT_table.html     # Table styling example
└── style_table.css   # Table CSS
```

**Keywords:** Box Model, Min-Width, Max-Width, CSS Table

---

### Bài 6: CSS Layout & Components

**Học được gì:**
- Tạo reusable component (team card)
- Newsletter subscription form
- Responsive layout
- Icon integration (Font Awesome)

**File tham khảo:**
```bash
bai6/BaiTap6/
├── cau4.html        # Newsletter form
├── cau5.html        # Team card component
├── style4.css       # Form styling
└── style5.css       # Team card styling
```

**Keywords:** Components, Flexbox, Font Awesome, Responsive Design

---

### Bài 9: Bootstrap Grid System

**Học được gì:**
- Bootstrap grid (col-xl, col-lg, col-md, col-sm, col-12)
- Responsive breakpoints
- Container & container-fluid

**File tham khảo:**
```bash
bai9/index2.html    # Bootstrap grid demo
```

**Code snippet:**
```html
<div class="container-fluid">
  <div class="row">
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
      <!-- Content -->
    </div>
  </div>
</div>
```

**Keywords:** Bootstrap, Grid System, Responsive Design, Breakpoints

---

### Bài 10: Bootstrap Accordion

**Học được gì:**
- Accordion component
- Bootstrap collapse utility
- jQuery & data attributes

**File tham khảo:**
```bash
bai10/index.html    # FAQ accordion
```

**Keywords:** Accordion, Bootstrap, Collapse, Data Attributes

---

### Bài 21: JavaScript - This keyword

**Học được gì:**
- Global vs Local scope
- `this` trong function
- `this` trong object
- `this` trong arrow function

**File tham khảo:**
```bash
bai21/index1.html   # this keyword examples
```

**Code snippet:**
```javascript
// this trong arrow function: không tồn tại, gọi đến window
[...listItem].forEach(item => {
  item.addEventListener("click", () => {
    console.log(this);  // window object
  });
});

// this trong object
let info = {
  fullname: "Nguyen Hoang Phuc",
  getFullName: function() {
    console.log(this.fullname);  // Nguyen Hoang Phuc
  }
};
```

**Keywords:** JavaScript, This, Scope, Arrow Functions, Objects

---

## 📖 Tài nguyên học tập

### Công cụ online
- [Vercel](https://vercel.com/) - Hosting
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [MDN Web Docs](https://developer.mozilla.org/) - Tài liệu web
- [Font Awesome Icons](https://fontawesome.com/) - Icon library

### Tutorials
- [28Tech - Khoá học lập trình web](https://28tech.com.vn/)
- [W3Schools - HTML/CSS/JavaScript](https://www.w3schools.com/)

---

## 👨‍💻 Tác giả

**Nguyễn Hoàng Phúc**
- GitHub: [@NguyenHoangPhuc2909](https://github.com/NguyenHoangPhuc2909)
- Email: phucqaqs@gmail.com

---

## 📝 Ghi chú

### Cấu trúc thư mục bài tập

Mỗi bài tập thường có cấu trúc sau:

```
bai{N}/
├── index.html       # File HTML chính
├── style.css        # CSS styling
├── script.js        # JavaScript (nếu có)
├── assets/          # Hình ảnh, font, thư viện
│   ├── css/
│   ├── js/
│   └── images/
└── README.md        # Hướng dẫn bài tập (tùy chọn)
```

### Quy ước đặt tên file

- **HTML**: `index.html`, `ex.html`, `cau{N}.html`
- **CSS**: `style.css`, `style{N}.css`
- **JavaScript**: `script.js`, `app.js`
- **Ảnh**: Lưu trong folder `images/` hoặc `assets/images/`

---

## 🎯 Mục tiêu học tập

Sau khi hoàn thành khoá học này, bạn sẽ:

✅ Nắm vững **HTML5** - Cấu trúc semantic  
✅ Thành thạo **CSS3** - Layout, styling, responsive  
✅ Hiểu rõ **JavaScript** - DOM, events, scope  
✅ Sử dụng được **Bootstrap** - Framework phổ biến  
✅ Có thể tạo website responsive & hiện đại  
✅ Deploy ứng dụng lên production (Vercel)  

---

## 📞 Liên hệ & Hỗ trợ

- 📧 Email: phucqaqs@gmail.com
- 💬 GitHub Issues: [Report a problem](https://github.com/NguyenHoangPhuc2909/html_28tech/issues)
- 🌐 Website: [html-28tech.vercel.app](https://html-28tech.vercel.app)

---

## 📄 License

Dự án này được cấp phép dưới [MIT License](LICENSE).

---

**Cập nhật lần cuối**: 10/05/2026  
**Repository**: [NguyenHoangPhuc2909/html_28tech](https://github.com/NguyenHoangPhuc2909/html_28tech)

