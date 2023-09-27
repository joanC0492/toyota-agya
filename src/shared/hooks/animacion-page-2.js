const divConfigurations = [
  {
    element: "box-1",
    delay: 0,
    duration: 1000,
  },
  {
    element: "box-2",
    delay: 500,
    duration: 1000,
  },
  {
    element: "box-3",
    delay: 800,
    duration: 1000,
  },
  {
    element: "box-4",
    delay: 1000,
    duration: 1000,
  },
  {
    element: "box-5",
    delay: 1200,
    duration: 1000,
  },
  {
    element: "box-6",
    delay: 900,
    duration: 1000,
  },
  {
    element: "box-7",
    delay: 2000,
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
