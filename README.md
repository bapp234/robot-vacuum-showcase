# Xiaomi Robot Vacuum X20+ - Premium Landing Page

Một trang Landing Page cao cấp, hiện đại và tối ưu hiệu năng cao giới thiệu dòng sản phẩm robot hút bụi thông minh **Xiaomi Robot Vacuum X20+**.

## 🚀 Đường dẫn dự án
- **Demo trực tuyến (Deploy Link):** https://xiaomi-veccum-20x-plus.vercel.app/
- **Mã nguồn (GitHub Repository):** https://github.com/bapp234/robot-vacuum-showcase.git

---

## 🛠️ Công nghệ & Framework sử dụng
Lý do lựa chọn Stack công nghệ này nhằm tối ưu hóa trải nghiệm người dùng độc giả (UX) kết hợp xử lý SEO và Hiệu năng (Performance) tốt nhất:
- **Framework:** Next.js 14+ (App Router) - Tận dụng tối đa khả năng tối ưu hóa SEO, phân tách Server/Client component rõ ràng và cơ chế Hydration mượt mà.
- **Styling:** Tailwind CSS - Đảm bảo giao diện Clean, nhất quán hệ thống Design System (Spacing, Typography), tối ưu dung lượng CSS xuất xưởng.
- **Animations:** Framer Motion - Xử lý mượt mà các hoạt họa cuộn trang, trạng thái động và vi tương tác cao cấp (Micro-interactions).
- **Icons:** Lucide React - Bộ thư viện icon vector dạng SVG gọn nhẹ, sắc nét và hỗ trợ Tree-shaking tối đa.
- **Validation:** Zod - Đảm bảo tính hợp lệ dữ liệu chặt chẽ ở cả Client lẫn API Route Backend.

---

## 🎯 Tính năng cốt lõi (Đạt yêu cầu bắt buộc)
1. **Hero Section:** Thiết kế ấn tượng, không gian hiện đại độc bản làm nổi bật hình ảnh thương hiệu sản phẩm cùng thông điệp Call-to-Action (CTA) sắc nét.
2. **Features (Tính năng nổi bật):** Bố cục Grid đối xứng tâm sáng tạo xung quanh sản phẩm chính, tối ưu hóa không gian hiển thị trên mọi thiết bị.
3. **Specifications (Thông số kỹ thuật):** Phân chia luồng đọc thông tin khoa học cho cả tệp khách hàng đại chúng (Non-IT) thông qua cơ chế danh mục dữ liệu trực quan.
4. **Claim Offer Form:** Form tương tác thu thập thông tin khách hàng tiềm năng nhận ưu đãi, tích hợp kiểm tra ràng buộc nghiêm ngặt.
5. **Responsive Design:** Tương thích mượt mà 100% trên cả Desktop, Tablet lẫn Mobile (Không xảy ra hiện tượng vỡ khung, tràn viền).

---

## 💎 Điểm cộng nâng cao (Bonus Points)
- ✅ **Dark Mode (Chế độ giao diện tối):** Tích hợp sâu vào hệ thống CSS Variables thông qua `ThemeProvider`, chuyển đổi giao diện mượt mà không bị giật/nháy (Flicker effect).
- ✅ **Scrollytelling & Parallax:** Thiết kế dòng chảy kể chuyện cuốn hút. Các phần tử chỉ xuất hiện và chuyển động mịnh màng (`whileInView`) khi người dùng cuộn đến giúp tăng thời gian giữ chân khách hàng (Time-on-site).
- ✅ **Micro-interactions (Vi tương tác):**
  - **Accordion mở rộng thông minh:** Mô phỏng luồng trải nghiệm thu gọn/mở rộng mượt mà truyền cảm hứng từ các trang TMĐT lớn (Điện Máy Xanh), giúp tinh gọn chiều dài trang.
  - **Mini Gallery ảnh tương tác:** Sử dụng `AnimatePresence` xử lý hiệu ứng chuyển đổi góc nhìn sản phẩm mượt mà, sống động.
  - **Header UX Polish:** Sự kiện tự động cuộn trang mượt mà (Smooth scroll) về vị trí trung tâm Hero khi tương tác vào Logo ở bất kỳ phân khúc trang nào.
- ✅ **- Tích hợp Webhook & Validation: Xử lý luồng thông tin người dùng gửi về Webhook thực tế để thu thập lead, kết hợp kiểm soát dữ liệu đầu vào nghiêm ngặt ngay tại vòng ngoài bằng thư viện Zod.

---

## ⚡ Tối ưu hiệu năng (SEO & Performance)
- **Image Optimization:** Sử dụng component `next/image` xử lý tự động chuyển đổi định dạng ảnh thế hệ mới (.webp), tự động resize kích thước theo viewport và lazy-load hình ảnh khuất màn hình.
- **SEO Technical:** Cấu hình metadata chuẩn hóa từ file gốc bao gồm Open Graph (Title, Description, Images) giúp hiển thị thẻ chia sẻ mạng xã hội bắt mắt.
- **Google PageSpeed Insights:** Đạt điểm số tối ưu ấn tượng ở phiên bản di động (Mobile) **> 85/100** điểm nhờ hạn chế Javascript dư thừa và ứng dụng Tree Shaking triệt để.

---

## 💻 Cài đặt và Chạy nội bộ
```bash
# Clone dự án về máy
git clone https://github.com/bapp234/robot-vacuum-showcase.git

# Di chuyển vào thư mục dự án
cd <frontend>

# Cài đặt các thư viện phụ thuộc
npm install

# Khởi chạy môi trường phát triển (Development)
npm run dev
