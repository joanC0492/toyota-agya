const divConfigurations = [
  {
    element: "itemlist-1",
    // delay: 500,
    delay: 1750,
    duration: 1000,
  },
  {
    element: "itemlist-2",
    // delay: 1250,
    delay: 2500,
    duration: 1000,
  },
  {
    element: "itemlist-3",
    // delay: 2000,
    delay: 3250,
    duration: 1000,
  },
];

const animateElement = (element, delay, duration) => {
  anime({
    targets: `[data-animate="${element}"]`,
    opacity: 1,
    duration: duration,
    translateX: 0,
    translateY: 0,
    delay: delay,
    easing: "easeInOutQuad",
  });
};

function initAnimate() {
  divConfigurations.forEach((config) => {
    animateElement(config.element, config.delay, config.duration);
  });
}

module.exports = initAnimate;
