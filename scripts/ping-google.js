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

// Ping Google về sitemap
const pingGoogle = () => {
  const url = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  
  https.get(url, (res) => {
    console.log(`✅ Đã ping Google về sitemap: ${sitemapUrl}`);
    console.log(`Status: ${res.statusCode}`);
    
    if (res.statusCode === 200) {
      console.log('✅ Google đã nhận được sitemap!');
    } else {
      console.log('⚠️ Có thể có vấn đề, kiểm tra lại.');
    }
  }).on('error', (err) => {
    console.error('❌ Lỗi khi ping Google:', err.message);
  });
};

// Ping Bing về sitemap (tùy chọn)
const pingBing = () => {
  const url = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  
  https.get(url, (res) => {
    console.log(`✅ Đã ping Bing về sitemap: ${sitemapUrl}`);
    console.log(`Status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error('❌ Lỗi khi ping Bing:', err.message);
  });
};

console.log('🚀 Đang ping search engines về sitemap...\n');
pingGoogle();
pingBing();

console.log('\n📝 Lưu ý:');
console.log('1. Đảm bảo website đã được deploy và accessible');
console.log('2. Đăng ký Google Search Console tại: https://search.google.com/search-console');
console.log('3. Submit sitemap trong Google Search Console');
console.log('4. Kiểm tra index status: site:taosclean.vn');

