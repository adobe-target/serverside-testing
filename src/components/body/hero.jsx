const React = require("react");
const AB_ACTIVITY = "a1-serverside-xt";

const Hero = ({customization}) => {
  const hero = customization && customization[AB_ACTIVITY];
  const img = hero ? hero : `<h3>You received the default content. Your activity is either inactive or you didn't qualify for any of the active experiences.</h3>`;

  return (
    <div id="hero">
      <div id="hero-banner" dangerouslySetInnerHTML={{__html: img}}/>
    </div>
  );
};

module.exports = Hero;
