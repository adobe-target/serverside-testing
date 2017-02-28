const React = require("react");

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><h4><a>Products</a></h4></li>
        <li><a id="creative"><span>Adobe Creative Cloud</span></a></li>
        <li><a id="suite">Creative Suite 6</a></li>
        <li><a id="marketing">Adobe Marketing Cloud</a></li>
        <li><a id="acrobat">Acrobat</a></li>
        <li><a id="photoshop">Photoshop</a></li>
        <li><a id="dps">Digital Publishing Suite</a></li>
        <li><a id="elements">Elements family</a></li>
        <li><a>SiteCatalyst</a></li>
        <li><a>For education</a></li>
      </ul>

      <ul>
        <li><h4><a>Download</a></h4></li>
        <li><a>Product trials</a></li>
        <li><a>Adobe Reader</a></li>
        <li><a>Adobe Flash Player</a></li>
        <li><a>Adobe AIR</a></li>
      </ul>

      <ul>
        <li><h4><a>Support &amp; Learning</a></h4></li>
        <li><a>Product help</a></li>
        <li><a>Forums</a></li>
      </ul>

      <ul>
        <li><h4><a>Buy</a></h4></li>
        <li><a>For personal and professional use</a></li>
        <li><a>For students, educators, and staff</a></li>
        <li><a>For small and medium businesses</a></li>
        <li><a>Volume Licensing</a></li>
        <li><a>Special offers</a></li>
      </ul>

      <ul>
        <li><h4><a>Company</a></h4></li>
        <li><a>News room</a></li>
        <li><a>Partner programs</a></li>
        <li><a> Corporate responsibility</a></li>
        <li><a>Career opportunities</a></li>
        <li><a>Investor Relations</a></li>
        <li><a>Events</a></li>
        <li><a>Legal</a></li>
        <li><a>Security</a></li>
        <li><a>Contact Adobe</a></li>
      </ul>

      <div class="clear-left">
        <p class="emphasis"><a>Choose your region</a></p>

        <hr/>

        <p>Copyright © 2014 Adobe Systems Incorporated. All rights reserved.</p>

        <ul id="bottom" class="text-white">
          <li><a class="emphasis text-white">Cookies</a></li>
          <li><a class="emphasis text-white">Ad Choices</a></li>
        </ul>
      </div>
    </footer>
  );
};

module.exports = Footer;
