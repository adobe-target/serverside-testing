const React = require("react");

const Navigation = () => {
  return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Adobe Target</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
             <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="./ab">AB <span className="sr-only">(current)</span></a></li>
                <li><a href="/xt">XT</a></li>
                <li><a href="/mboxparameters">Mbox Parameters</a></li>
                <li><a href="/profileparameters">Profile Parameters</a></li>
                <li><a href="/jsonoffer">JSON Offer</a></li>
                <li><a href="/thirdpartyid">thirdPartyId</a></li>
                <li><a href="/customerattributes">Customer Attributes</a></li>
                <li><a href="/recommedations">Recommendations</a></li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

module.exports = Navigation;
