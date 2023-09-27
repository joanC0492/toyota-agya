const divConfigurations = [
  {
    element: "box-1",
    delay: 0,
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
