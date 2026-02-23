var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
}

services['Розбити скло'] = "200 грн";

function extractPrice(value) {
  return parseInt(value)
}

services.price = function () {
  return Object.values(this)
    .filter(value => typeof value === "string")
    .reduce((sum, value) => sum + extractPrice(value), 0);
}

services.minPrice = function () {
  return Math.min(
    ...Object.values(this)
      .filter(value => typeof value === "string")
      .map(extractPrice)
  )
}

services.maxPrice = function () {
  return Math.max(
    ...Object.values(this)
      .filter(value => typeof value === "string")
      .map(extractPrice)
  )
}

console.log("Загальна вартість:", services.price(), "грн");
console.log("Мінімальна ціна:", services.minPrice(), "грн");
console.log("Максимальна ціна:", services.maxPrice(), "грн");