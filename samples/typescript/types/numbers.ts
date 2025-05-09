/** digit characters */
type DigitChar = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

/** digit characters in [1, 9] */
type DigitCharExcept0 = Exclude<DigitChar, '0'>;

/** digit characters in [0, 9] except 1 */
type DigitCharExcept1 = Exclude<DigitChar, '1'>;

/** digit characters in [2, 9] */
type DigitCharFrom2To9 = Exclude<DigitChar, '0' | '1'>;

/** digit characters in [4, 9] */
type DigitCharFrom4To9 = '4' | '5' | '6' | '7' | '8' | '9';

/** number string of integers in [10, 19] */
type TeenNumString = `1${DigitChar}`;

export type { DigitCharExcept0, DigitCharExcept1, DigitCharFrom2To9, DigitCharFrom4To9, TeenNumString };