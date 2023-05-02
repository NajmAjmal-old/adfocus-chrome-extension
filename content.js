const adFocUsBanner = '<a href="//adfoc.us/?refid=585030" target="_blank"><img src="///images/banners/userbar-1.png" border="0" alt="AdFoc.us Banner"></a>';

const adFocUsScript = '<script type="text/javascript">\n\tvar id_user = 585030;\n\tvar domains_exclude = [\'m.com\'];\n</script>\n<script type="text/javascript" src="http://adfoc.us/js/fullpage/script.js"></script>';

// Remove existing banners
const banners = document.getElementsByTagName('iframe');
for (let i = 0; i < banners.length; i++) {
  banners[i].remove();
}

// Add AdFoc.us banner at the top of the body
const body = document.getElementsByTagName('body')[0];
const bannerDiv = document.createElement('div');
bannerDiv.style.position = 'fixed';
bannerDiv.style.top = 0;
bannerDiv.style.left = 0;
bannerDiv.style.width = '100%';
bannerDiv.style.zIndex = '999999';
bannerDiv.innerHTML = adFocUsBanner;
body.insertBefore(bannerDiv, body.firstChild);

// Add AdFoc.us script to the head
const head = document.head || document.getElementsByTagName('head')[0];
head.insertAdjacentHTML('beforeend', adFocUsScript);

console.log('AdFoc.us extension loaded.');
