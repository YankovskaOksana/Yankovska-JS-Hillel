var str = "Wonderful Joyful Happiness Time Task Apple";

var re = /\b[^aA\s]{6,}\b/g;

var result = str.match(re);

console.log(result);