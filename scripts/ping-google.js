/**
 * Script để ping Google về sitemap sau khi deploy
 * Chạy: node scripts/ping-google.js
 * 
 * Hoặc thêm vào package.json:
 * "scripts": {
 *   "ping-google": "node scripts/ping-google.js"
 * }
 */

const https = require('https');
const siteUrl = 'https://taosclean.vercel.app';
const sitemapUrl = `${siteUrl}/sitemap.xml`;

// Kiểm tra sitemap có accessible không
const checkSitemap = (callback) => {
  console.log('🔍 Đang kiểm tra sitemap...');
  console.log(`URL: ${sitemapUrl}\n`);
  
  https.get(sitemapUrl, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      if (res.statusCode === 200) {
        console.log('✅ Sitemap accessible!');
        console.log(`Status: ${res.statusCode}`);
        console.log(`Content-Type: ${res.headers['content-type']}\n`);
        callback(true);
      } else {
        console.log(`❌ Sitemap không accessible!`);
        console.log(`Status: ${res.statusCode}`);
        console.log('\n⚠️ Vui lòng kiểm tra:');
        console.log('1. Website đã được deploy chưa?');
        console.log('2. Truy cập thủ công: ' + sitemapUrl);
        console.log('3. Đảm bảo file app/sitemap.ts tồn tại\n');
        callback(false);
      }
    });
  }).on('error', (err) => {
    console.error('❌ Lỗi khi kiểm tra sitemap:', err.message);
    console.log('\n⚠️ Có thể website chưa được deploy hoặc domain không đúng.\n');
    callback(false);
  });
};

// Ping Google về sitemap
const pingGoogle = () => {
  const url = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  
  https.get(url, (res) => {
    console.log(`📤 Đã ping Google về sitemap`);
    console.log(`Status: ${res.statusCode}`);
    
    if (res.statusCode === 200) {
      console.log('✅ Google đã nhận được sitemap!\n');
    } else {
      console.log(`⚠️ Status ${res.statusCode} - Có thể sitemap chưa accessible\n`);
    }
  }).on('error', (err) => {
    console.error('❌ Lỗi khi ping Google:', err.message);
  });
};

// Ping Bing về sitemap (tùy chọn)
const pingBing = () => {
  const url = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  
  https.get(url, (res) => {
    console.log(`📤 Đã ping Bing về sitemap`);
    console.log(`Status: ${res.statusCode}\n`);
  }).on('error', (err) => {
    console.error('❌ Lỗi khi ping Bing:', err.message);
  });
};

// Chạy script
console.log('🚀 Kiểm tra và ping sitemap...\n');
checkSitemap((isAccessible) => {
  if (isAccessible) {
    console.log('🚀 Đang ping search engines...\n');
    pingGoogle();
    pingBing();
  } else {
    console.log('⏸️  Bỏ qua ping vì sitemap không accessible.');
    console.log('   Vui lòng deploy website trước, sau đó chạy lại script.\n');
  }
  
  console.log('📝 Hướng dẫn tiếp theo:');
  console.log('1. Đảm bảo website đã được deploy: ' + siteUrl);
  console.log('2. Kiểm tra sitemap: ' + sitemapUrl);
  console.log('3. Đăng ký Google Search Console: https://search.google.com/search-console');
  console.log('4. Submit sitemap trong Google Search Console');
  console.log('5. Kiểm tra index: site:taosclean.vercel.app\n');
});

