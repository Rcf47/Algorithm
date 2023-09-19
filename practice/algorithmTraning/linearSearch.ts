export function getValue(arr: (string | number)[], findValue: number | string): string | number | undefined {
  let result: number | string | undefined;
  for (const element of arr) {
    element === findValue ? result = element : undefined
  }
  return result
}
