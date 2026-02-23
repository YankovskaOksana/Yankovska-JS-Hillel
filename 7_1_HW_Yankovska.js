var services = {
  "Стрижка": "60.25 грн",
  "Гоління": "80.50 грн",
  "Миття голови": "100,25 грн"
}

services['Фарбування волосся'] = "200,40 грн";

function extractPrice(value) {
  const match = String(value).match(/-?\d+(?:[.,]\d+)?/);
  if (!match) return NaN;
  return Number(match[0].replace(",", "."));
}

function formatUAH(num) {
  return `${Number(num).toFixed(2)} грн`;
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
