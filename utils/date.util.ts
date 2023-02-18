import { format } from "date-fns";

/**
 * Format a date using the format string
 * @param date
 * @param formatString
 * @returns
 */
export function formatDate(
  date: string,
  formatString: string = "do MMM YYY"
): string {
  return format(new Date(date), formatString);
}
