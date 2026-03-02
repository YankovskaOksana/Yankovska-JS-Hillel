var str = "Brilliant Crystal Banana Wonderful Time Joyful Happiness Time Task Apple Freedom";

var re = /\b[^aA\s]{6,}\b/g;

var result = str.match(re);

console.log(result);