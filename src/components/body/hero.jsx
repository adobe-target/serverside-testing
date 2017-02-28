const React = require("react");
const HERO_BANNER_MBOX = "hero-banner";

const Hero = ({customizations}) => {
  const hero = customizations && customizations[HERO_BANNER_MBOX];
  const img = hero ? hero : `<img src="images/1373981688502.jpg"/>`;

  return (
    <div id="hero">
      <div id="hero-banner" dangerouslySetInnerHTML={{__html: img}}/>

      <header>
        <h1>Adobe Creative Cloud</h1>
        <h3>Existing CS customers can save on every creative tool, including all-new Photoshop CC, Illustrator CC, and InDesign CC. Only in Creative Cloud.</h3>
        <a title="Learn more" id="cta">Buy now</a>
      </header>
    </div>
  );
};

module.exports = Hero;
