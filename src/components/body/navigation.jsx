const React = require("react");

const Navigation = () => {
  return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a className="navbar-brand" href="#">Adobe Target</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
             <ul className="nav navbar-nav navbar-right">
                <li><a href="/ab">AB</a></li>
                <li><a href="/xt">XT</a></li>
                <li><a href="/mbox-parameters">Mbox Parameters</a></li>
                <li><a href="/profile-parameters">Profile Parameters</a></li>
                <li><a href="/json-offer">JSON Offer</a></li>
                <li><a href="/third-party-id">Third Party Id</a></li>
                <li><a href="/customer-attributes">Customer Attributes</a></li>
                <li><a href="/recommendations">Recommendations</a></li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

module.exports = Navigation;
