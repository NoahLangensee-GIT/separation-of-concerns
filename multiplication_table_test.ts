import { expect } from "@std/expect";
import { calculateColumnWidth, generateTableString } from "./multiplication_table.ts";

Deno.test("calculateColumnWidth when biggest Product has 1 digit", () => {
  const columnWidth = calculateColumnWidth([1, 2])
  expect(columnWidth).toBe(2);
});

Deno.test("calculateColumnWidth when biggest Product has 2 digits", () => {
  const columnWidth =calculateColumnWidth([5]);
  expect(columnWidth).toBe(3);
});

Deno.test("calculateColumnWidth when biggest Product 3 digits", () => {
  const columnWidth = calculateColumnWidth([1, 2, 10])
  expect(columnWidth).toBe(4);
});

Deno.test("GenerateTableString Test with small Table", () => {
  const input = [1, 2];
  const result = generateTableString(input);
  const expected =
    " * || 1 | 2 |\n" +
    "=============\n" +
    " 1 || 1 | 2 |\n" +
    " 2 || 2 | 4 |";
  expect(result).toBe(expected);
});
