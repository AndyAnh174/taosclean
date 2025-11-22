# 🚀 Hướng Dẫn Index Website lên Google - TAOS CLEAN

## ⚡ Các Bước Nhanh (5 phút)

### 1️⃣ Đăng ký Google Search Console
- Truy cập: https://search.google.com/search-console
- Click "Add Property" → Nhập: `https://taosclean.vn`
- Chọn phương thức xác minh (khuyến nghị: HTML tag)

### 2️⃣ Lấy Google Verification Code
- Copy code verification từ Google (dạng: `ABC123xyz...`)
- Mở file `app/layout.tsx`
- Tìm dòng: `google: "your-google-verification-code"`
- Thay thế bằng code của bạn
- Deploy lại website

### 3️⃣ Verify trong Google Search Console
- Quay lại Google Search Console
- Click "Verify"
- ✅ Thành công!

### 4️⃣ Submit Sitemap
- Vào menu "Sitemaps" (bên trái)
- Nhập: `sitemap.xml`
- Click "Submit"
- ✅ Xong!

### 5️⃣ Request Indexing (Tùy chọn)
- Vào "URL Inspection"
- Nhập: `https://taosclean.vn`
- Click "Request Indexing"

## 📊 Kiểm Tra Index Status

### Cách 1: Google Search
```
site:taosclean.vn
```
Nếu thấy kết quả → ✅ Đã được index

### Cách 2: Google Search Console
- Vào "Coverage" → Xem số trang đã index
- Vào "Performance" → Xem traffic

## 🔧 Sau Khi Deploy

Chạy lệnh để ping Google về sitemap:
```bash
npm run ping-google
```

Hoặc truy cập trực tiếp:
```
https://www.google.com/ping?sitemap=https://taosclean.vn/sitemap.xml
```

## ⏱️ Thời Gian

- **Verify**: Ngay lập tức
- **Index lần đầu**: 1-7 ngày
- **Index đầy đủ**: 2-4 tuần

## 📝 Checklist

- [ ] Đăng ký Google Search Console
- [ ] Verify website
- [ ] Submit sitemap.xml
- [ ] Request indexing cho trang chủ
- [ ] Kiểm tra robots.txt (đã có ✓)
- [ ] Kiểm tra sitemap.xml (đã có ✓)
- [ ] Ping Google sau khi deploy
- [ ] Kiểm tra sau 1 tuần: `site:taosclean.vn`

## 🆘 Gặp Vấn Đề?

1. **Website chưa index sau 1 tuần?**
   - Kiểm tra Google Search Console có lỗi không
   - Đảm bảo website accessible
   - Tạo backlinks từ website khác
   - Chia sẻ trên social media

2. **Lỗi "Crawl errors"?**
   - Kiểm tra server không trả về 404
   - Đảm bảo HTTPS hoạt động
   - Kiểm tra robots.txt

3. **Cần hỗ trợ thêm?**
   - Xem file `GOOGLE_INDEX_GUIDE.md` để biết chi tiết
   - Tham khảo: https://developers.google.com/search/docs

## 🎯 Mẹo Tăng Tốc Index

1. ✅ **Tạo backlinks**: Đăng link website lên Facebook, Zalo, forum
2. ✅ **Social sharing**: Chia sẻ website trên mạng xã hội
3. ✅ **Internal linking**: Liên kết giữa các trang trong website
4. ✅ **Fresh content**: Thêm bài viết/tin tức mới thường xuyên
5. ✅ **Page speed**: Tối ưu tốc độ tải trang (đã responsive ✓)

---

**Lưu ý**: Sau khi verify và submit sitemap, Google sẽ tự động crawl website. Không cần làm gì thêm, chỉ cần đợi!

