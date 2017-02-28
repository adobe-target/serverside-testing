const React = require("react");
const Navigation = React.createFactory(require("./body/navigation.jsx"));
const Main = React.createFactory(require("./body/main.jsx"));
const Footer = React.createFactory(require("./body/footer.jsx"));

const Body = ({customizations}) => {
  const addHrefs = `$("a").attr("href", "javascript:window.open(this.location,'_self')")`;

  return (
    <body>
      <div id="container">
        <Navigation/>

        <Main customizations={customizations}/>

        <br class="clear"/>

        <Footer/>
      </div>

      <script dangerouslySetInnerHTML={{__html: addHrefs}} />
    </body>
  );
};

module.exports = Body;
