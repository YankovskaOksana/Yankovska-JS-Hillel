function pow(x, y) {
    if (y === 0) return 1; // якщо степінь 0 -> завжди 1

    let result = 1;
    const isNegative = y < 0;
    const power = isNegative ? -y : y;

    for (let i = 0; i < power; i++) {
        result = result * x; // множимо x само на себе power разів
    }

    return isNegative ? 1 / result : result; // якщо степінь від’ємний -> 1 / (x^|y|)
}

console.log(pow(-2,3))
console.log(pow(2,-3))
console.log(pow(0,3))
console.log(pow(2,0))
console.log(pow(1,3))
console.log(pow(2,1))