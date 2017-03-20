const React = require("react");
const AB_ACTIVITY = "a1-serverside-ab";

const Hero = ({customization}) => {
  const hero = customization && customization[AB_ACTIVITY];
  const img = hero ? hero : `<img src="https://dummyimage.com/940x350/fff/000.png&text=Default-Content"/>`;

  return (
    <div id="hero">
      <div id="hero-banner" dangerouslySetInnerHTML={{__html: img}}/>
    </div>
  );
};

module.exports = Hero;
