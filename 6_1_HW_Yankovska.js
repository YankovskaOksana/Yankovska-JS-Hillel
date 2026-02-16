function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
    // rnd: випадкове ціле число від 100 до 1000 включно
    const rnd = Math.floor(Math.random() * 901) + 100;

    if (rnd % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  const evenPercent = count ? (evenCount / count) * 100 : 0;
  const oddPercent = count ? (oddCount / count) * 100 : 0;

  console.log("Кількість згенерованих чисел:", count);
  console.log("Парних чисел:", evenCount);
  console.log("Не парних чисел:", oddCount);
  console.log(`Відсоток парних до не парних: ${evenPercent.toFixed(2)}% / ${oddPercent.toFixed(2)}%`);
}