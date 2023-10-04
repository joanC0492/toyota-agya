const divConfigurations = [
  {
    element: "box-bienvenido",
    delay: 0,
    duration: 1000,
  },
  {
    element: "box-pantalla",
    delay: 500,
    duration: 1000,
  },
  {
    element: "box-panel",
    delay: 800,
    duration: 1000,
  },
  {
    element: "box-aire",
    delay: 1000,
    duration: 1000,
  },
  {
    element: "box-espacio",
    delay: 1500,
    duration: 1000,
  },
  {
    element: "box-360",
    delay: 2000,
    duration: 1000,
  },
  {
    element: "box-meletera",
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
