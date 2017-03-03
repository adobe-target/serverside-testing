const React = require("react");
const HERO_BANNER_MBOX = "hero-banner";

const Hero = ({customizations}) => {
  const hero = customizations && customizations[HERO_BANNER_MBOX];
  const img = hero ? hero : `<img src="images/1373981688502.jpg"/>`;

  return (
    <div id="hero">
      <div id="hero-banner" dangerouslySetInnerHTML={{__html: img}}/>
    </div>
  );
};

module.exports = Hero;
