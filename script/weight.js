const factors = {
  milligram: 0.001, // 1 mg = 0.001 g
  gram: 1, // base
  kilogram: 1000, // 1 kg = 1000 g
  ounce: 28.34952, // 1 ounce = 28.34952 g
  pound: 453.5924, // 1 pound = 453.5924 g
};

export function weightConvertor() {
  const weightContainer = document.querySelector(".weight-container");
  const weightInputs = weightContainer.querySelectorAll("input");

  weightInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const unit = e.target.id;
      const value = parseFloat(e.target.value);

      if (isNaN(value)) {
        weightInputs.forEach((inp) => {
          if (inp !== e.target) inp.value = "";
        });
        return;
      }

      // Convert entered value to meters
      const grams = value * factors[unit];

      // Update all other fields
      weightInputs.forEach((inp) => {
        if (inp.id !== unit) {
          inp.value = grams / factors[inp.id];
        }
      });
    });
  });
}
