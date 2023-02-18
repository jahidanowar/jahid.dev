/**
 * Trucate String
 * @param str
 * @param length
 * @param sufix
 * @returns
 */
export function trunctate(str: string, length: number, sufix: string = "...") {
  if (str.length > length) {
    return str.substring(0, length) + sufix;
  }
  return str;
}

/**
 * Capitalize String
 * @param str
 * @returns
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
