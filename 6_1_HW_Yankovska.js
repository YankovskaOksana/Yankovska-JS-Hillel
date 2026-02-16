function checkProb(count) {{
  let evenCounter = 0;
  let oddCounder = 0;

  // LOOP with count as limit
  for (let i = 0; i < count; i++) {
    // generate random number btw 100 and 1000
    const num = Math.floor(Math.random() * 901) + 100;

    // if (num % 2 ===0)
    if (num % 2 === 0) {
      // increase even counter
      evenCounter++;
    } else {
      // else {increase odd counter}
      oddCounder++;
    }
  }

  const evenPrc = count ? (evenCounter / count) * 100 : 0;
  const oddPrc = count ? (oddCounder / count) * 100 : 0;

  return `Total numbers: ${count}\n` +
         `Even numbers: ${evenCounter}\n` +
         `Odd numbers: ${oddCounder}\n` +
         `prc: ${evenPrc.toFixed(2)}% / ${oddPrc.toFixed(2)}%`;
}
console.log(
    `Кількість згенерованих чисел: ${result.total}\n` +
    `Кількість арних чисел: ${result.even}\n` +
    `Кількість не парних чисел: ${result.odd}\n` +
    `Відсоток парних до не парних: ${result.prc}`
  );
}  
