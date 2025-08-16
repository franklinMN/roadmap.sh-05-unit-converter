const formulas = {
  celsius: {
    toBase: (val) => val, // Base is Celsius
    fromBase: (val) => val,
  },
  fahrenheit: {
    toBase: (val) => (val - 32) * (5 / 9),
    fromBase: (val) => val * (9 / 5) + 32,
  },
  kelvin: {
    toBase: (val) => val - 273.15,
    fromBase: (val) => val + 273.15,
  },
};

export function temperatureConvertor() {
  const tempContainer = document.querySelector(".temperature-container");
  const tempInputs = tempContainer.querySelectorAll("input");

  tempInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const unit = e.target.id.toLowerCase();
      const value = parseFloat(e.target.value);

      if (isNaN(value)) {
        tempInputs.forEach((inp) => {
          if (inp !== e.target) inp.value = "";
        });
        return;
      }

      // Convert to Celsius (base)
      const baseValue = formulas[unit].toBase(value);

      // Convert from base to all units
      tempInputs.forEach((inp) => {
        if (inp.id.toLowerCase() !== unit) {
          inp.value = formulas[inp.id.toLowerCase()].fromBase(baseValue);
        }
      });
    });
  });
}
