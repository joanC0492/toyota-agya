const divConfigurations = [
  {
    element: "box-title",
    delay: 0,
    duration: 1000,
  },
  {
    element: "box-eficiencia",
    delay: 500,
    duration: 1000,
  },
  {
    element: "box-transmision",
    delay: 800,
    duration: 1000,
  },
  {
    element: "box-transmision-text",
    delay: 1000,
    duration: 1000,
  },
  {
    element: "box-motor",
    delay: 1200,
    duration: 1000,
  },
  {
    element: "box-motor-img",
    delay: 1400,
    duration: 1000,
  },
  {
    element: "box-btn-aventura",
    delay: 1000,
    duration: 1000,
  },
  {
    element: "box-volante",
    delay: 1500,
    duration: 1000,
  },
  {
    element: "box-volante-text",
    delay: 1800,
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
