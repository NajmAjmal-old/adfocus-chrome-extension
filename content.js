// Content Script for Chrome Extension

// Append adfoc.us banner to top of body
const banner = '<a href="//adfoc.us/?refid=585030" target="_blank"><img src="///images/banners/userbar-1.png" border="0" alt="AdFoc.us Banner"></a>';
const body = document.getElementsByTagName("body")[0];
body.insertAdjacentHTML("afterbegin", banner);

// Function to modify <a> tags with adfoc.us serve sitelinks URL
function modifyLinks() {
  const id_user = 585030;
  const domains_exclude = ['adfoc.us','adf.ly',"ads.sintco.cloudns.nz"];

  const links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    let link = links[i];

    // Check if link already has adfoc.us domain or is excluded domain
    if (link.href.indexOf('adfoc.us') !== -1 || domains_exclude.includes(link.hostname) || window.location.hostname === 'adfoc.us') {
      continue;
    }

    // Append adfoc.us serve sitelinks URL with id_user
    const newUrl = `http://adfoc.us/serve/sitelinks/?id=585030&url=${link.href}`;
    link.href = newUrl;
  }
}

// Call modifyLinks function once when content script is first executed
modifyLinks();

// Listen for changes to the DOM and re-run modifyLinks function
const observer = new MutationObserver(() => {
  modifyLinks();
});
observer.observe(document, { subtree: true, childList: true });
