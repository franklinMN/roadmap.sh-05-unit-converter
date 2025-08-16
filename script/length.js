const factors = {
  millimeter: 0.001, // 1 mm = 0.001 m
  centimeter: 0.01, // 1 cm = 0.01 m
  meter: 1, // base unit
  kilometer: 1000, // 1 km = 1000 m
  inch: 0.0254, // 1 inch = 0.0254 m
  foot: 0.3048, // 1 foot = 0.3048 m
  yard: 0.9144, // 1 yard = 0.9144 m
  mile: 1609.34, // 1 mile = 1609.34 m
};

export function lengthConvertor() {
  const lengthContainer = document.querySelector(".length-container");
  const lengthInputs = lengthContainer.querySelectorAll("input");

  lengthInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const unit = e.target.id;
      const value = parseFloat(e.target.value);

      if (isNaN(value)) {
        lengthInputs.forEach((inp) => {
          if (inp !== e.target) inp.value = "";
        });
        return;
      }

      // Convert entered value to meters
      const meters = value * factors[unit];

      // Update all other fields
      lengthInputs.forEach((inp) => {
        if (inp.id !== unit) {
          inp.value = meters / factors[inp.id];
        }
      });
    });
  });
}
