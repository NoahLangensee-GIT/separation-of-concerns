export function calculateColumnWidth(numbers: Array<number>): number {
  if (numbers.length === 0) return 0;
  const biggest = numbers.reduce((acc, n) => (n > acc ? n : acc));
  let biggestResult = biggest * biggest;
  let magnitude = 0;
  while (biggestResult > 0) {
    magnitude++;
    biggestResult = Math.round(biggestResult / 10);
  }
  magnitude++;
  return magnitude;
}

export function generateTableString(numbers: Array<number>): string {
  const magnitude = calculateColumnWidth(numbers);
  const lines: string[] = [];
  let titleRow = "*";
  while (titleRow.length < magnitude) {
    titleRow = " " + titleRow;
  }
  titleRow += " ||";
  for (const n of numbers) {
    let cell = `${n}`;
    while (cell.length < magnitude) {
      cell = " " + cell;
    }
    titleRow += `${cell} |`;
  }
  lines.push(titleRow);
  let sep = "";
  for (let i = 0; i < titleRow.length; i++) {
    sep += "=";
  }
  lines.push(sep);
  for (const n of numbers) {
    let row = `${n}`;
    while (row.length < magnitude) {
      row = ` ${row}`;
    }
    row = `${row} ||`;
    for (const m of numbers) {
      const product = n * m;
      let cell = `${product}`;
      while (cell.length < magnitude) {
        cell = ` ${cell}`;
      }
      cell += " |";
      row += cell;
    }
    lines.push(row);
  }
  return lines.join("\n");
}

export function printMultiplicationTable(numbers: Array<number>) {
  const output = generateTableString(numbers);
  console.log(output);
}