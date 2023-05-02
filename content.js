const code = `
  <script type="text/javascript">
    var adfly_id = 24692891;
    var adfly_advert = 'int';
    var adfly_protocol = 'http';
    var adfly_domain = 'ads.doc.sintco.cloudns.nz';
    var exclude_domains = ['example.com'];
    var frequency_cap = '5';
    var frequency_delay = '5';
    var init_delay = '3';
    var popunder = true;
  </script>
  <script src="https://cdn.adf.ly/js/link-converter.js"></script>
  <script src="https://cdn.adf.ly/js/entry.js"></script>
`;

const banner = `
  <!-- Start of adf.ly banner code -->
  <div style="position:relative;width: 728px; height:90px; text-align: center; font-family: verdana; font-size: 10px;">
    <div style="position:absolute; top:0; left:0;">
      <a href="https://join-adf.ly/24692891">
        <img border="0" src="https://cdn.adf.ly/images/banners/adfly.728x90.2.gif" width="728" height="90" title="AdF.ly - shorten links and earn money!" />
      </a>
    </div>
    <div style="height:90px;"></div>
  </div>
  <!-- End of adf.ly banner code -->
`;

const body = document.body || document.getElementsByTagName("body")[0];
body.insertAdjacentHTML("afterbegin", banner);
console.log("Adf.ly banner inserted into the body element at the top-middle!");

const head = document.head || document.getElementsByTagName("head")[0];
head.insertAdjacentHTML("beforeend", code);
console.log("Adf.ly script inserted into the head element!");
