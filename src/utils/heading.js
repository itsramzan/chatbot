import figlet from "figlet";
import chalkAnimation from "chalk-animation";
import sleep from "./sleep.js";

const heading = async (headingText = "C H A T B O T") => {
  const text = figlet.textSync(headingText, { font: "Doom" });
  const rainbow = chalkAnimation.rainbow(text);
  rainbow.start();
  await sleep(1000);
  rainbow.stop();
};

export default heading;
