const React = require("react");

const Navigation = () => {
  return (
    <header>
      <nav>
        <form id="search"><input type="search"/>
        </form>

        <ul id="primary">
          <li id="logo"><img src="images/logo.png"/></li>
          <li><a>Products</a></li>
          <li><a>Business Solutions</a></li>
          <li><a>Support &amp; Learning</a></li>
          <li><a>Download</a></li>
          <li><a>Company</a></li>
          <li><a>Buy</a></li>
        </ul>
      </nav>
    </header>
  );
};

module.exports = Navigation;
