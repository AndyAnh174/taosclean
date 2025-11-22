# Hướng Dẫn Index Website lên Google

## Bước 1: Đăng ký Google Search Console

1. Truy cập: https://search.google.com/search-console
2. Đăng nhập bằng tài khoản Google
3. Click "Add Property" → Chọn "URL prefix"
4. Nhập domain: `https://taosclean.vn`
5. Click "Continue"

## Bước 2: Xác minh quyền sở hữu website

Có 4 cách xác minh (chọn 1 cách):

### Cách 1: HTML Tag (Dễ nhất)
1. Google sẽ cung cấp một đoạn code như:
   ```html
   <meta name="google-site-verification" content="ABC123..." />
   ```
2. Copy đoạn `content="ABC123..."` 
3. Cập nhật vào file `app/layout.tsx` trong phần `verification.google`
4. Deploy lại website
5. Quay lại Google Search Console và click "Verify"

### Cách 2: HTML File
1. Download file HTML từ Google
2. Upload file vào thư mục `public/` của website
3. Đảm bảo file có thể truy cập tại: `https://taosclean.vn/google1234567890.html`
4. Click "Verify"

### Cách 3: DNS Record
1. Thêm TXT record vào DNS của domain
2. Google sẽ cung cấp record cần thêm
3. Đợi DNS propagate (5-30 phút)
4. Click "Verify"

### Cách 4: Google Analytics
- Nếu đã có Google Analytics, có thể dùng để verify

## Bước 3: Submit Sitemap

1. Sau khi verify thành công, vào Google Search Console
2. Vào menu bên trái → "Sitemaps"
3. Nhập: `sitemap.xml`
4. Click "Submit"
5. Google sẽ tự động crawl sitemap

## Bước 4: Request Indexing (Tùy chọn)

1. Vào "URL Inspection" tool
2. Nhập URL: `https://taosclean.vn`
3. Click "Test Live URL"
4. Nếu URL hợp lệ, click "Request Indexing"
5. Google sẽ index trong vài giờ đến vài ngày

## Bước 5: Kiểm tra Index Status

### Cách kiểm tra nhanh:
1. Google Search: `site:taosclean.vn`
2. Nếu thấy kết quả → Website đã được index

### Trong Google Search Console:
1. Vào "Coverage" → Xem số trang đã index
2. Vào "Performance" → Xem traffic và queries

## Lưu ý quan trọng:

1. **Thời gian index**: Thường mất 1-7 ngày cho website mới
2. **Content quality**: Đảm bảo nội dung unique, có giá trị
3. **Mobile-friendly**: Website đã responsive ✓
4. **Page speed**: Tối ưu tốc độ tải trang
5. **Backlinks**: Tạo backlinks từ các website uy tín
6. **Social sharing**: Chia sẻ trên Facebook, Zalo để tăng traffic

## Các công cụ hỗ trợ:

- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com (để track traffic)
- **PageSpeed Insights**: https://pagespeed.web.dev (kiểm tra tốc độ)
- **Rich Results Test**: https://search.google.com/test/rich-results (kiểm tra structured data)

## Troubleshooting:

### Website chưa được index sau 1 tuần?
- Kiểm tra robots.txt không chặn Google
- Đảm bảo sitemap.xml accessible
- Kiểm tra có lỗi trong Google Search Console
- Tạo thêm backlinks
- Đăng bài trên social media

### Lỗi "Crawl errors"?
- Kiểm tra server không trả về 404
- Đảm bảo website accessible
- Kiểm tra SSL certificate (HTTPS)

