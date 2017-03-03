const React = require("react");
const HERO_BANNER_MBOX = "hero-banner";

const Hero = ({customization}) => {
  const hero = customization && customization[HERO_BANNER_MBOX];
  const img = hero ? hero : `<img src="https://dummyimage.com/940x350/fff/000.png&text=Default-Content"/>`;

  return (
    <div id="hero">
      <div id="hero-banner" dangerouslySetInnerHTML={{__html: img}}/>
    </div>
  );
};

module.exports = Hero;
