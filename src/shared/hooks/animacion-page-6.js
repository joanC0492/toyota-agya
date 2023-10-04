const divConfigurations = [
  {
    element: "box-comprar",
    delay: 0,
    duration: 1000,
  },
  {
    element: "box-garantia",
    delay: 500,
    duration: 1000,
  },
  {
    element: "box-excelente",
    delay: 800,
    duration: 1000,
  },
  {
    element: "box-programa",
    delay: 1000,
    duration: 1000,
  },
  {
    element: "box-pago",
    delay: 1200,
    duration: 1000,
  },
  {
    element: "box-servicio",
    delay: 1400,
    duration: 1000,
  },
  {
    element: "box-logo",
    delay: 1000,
    duration: 1000,
  },
  {
    element: "box-auto-one",
    delay: 1500,
    duration: 1000,
  },
  {
    element: "btn-box-one",
    delay: 2000,
    duration: 1000,
  },
  {
    element: "btn-box-two",
    delay: 2200,
    duration: 1000,
  },
  {
    element: "box-infomacion-autos",
    delay: 2600,
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
  divConfigurations.forEach(({ element, delay, duration }) => {
    animateElement(element, delay, duration);
  });
}

module.exports = initAnimate;