import type { DigitCharExcept0, DigitCharExcept1, DigitCharFrom2To9, DigitCharFrom4To9, TeenNumString } from './numbers';

/*
 * Ordinal numerals spelled out in English.
 */

/** __ordinal numeral__:: spelled-out positive 1-digit integers */
export type PositiveOneDigitOrdinal =
	  'first'
	| 'second'
	| 'third'
	| 'fourth'
	| 'fifth'
	| 'sixth'
	| 'seventh'
	| 'eighth'
	| 'ninth';

/** __ordinal numeral__:: spelled-out arbitrary 1-digit integers */
// type OneDigitOrdinal = `${'minus-' | ''}${PositiveOneDigitOrdinal}` | 'zeroth';

/** __ordinal numeral__:: spelled-out positive 2-digits integers  
 * _Ex.)_ `'tenth'`, `'eleventh'`, `'twelfth'`, …, `'ninety-ninth'` */
// type PositiveTwoDigitsOrdinal =
// 	  'tenth' // 10th
// 	| 'twentieth'
// 	| 'thirtieth'
// 	| 'fortieth'
// 	| 'fiftieth'
// 	| 'sixtieth'
// 	| 'seventieth'
// 	| 'eightieth'
// 	| 'ninetieth' // 90th
// 	| 'eleventh' // 11th
// 	| 'twelfth'
// 	| 'thirteenth'
// 	| 'fourteenth'
// 	| 'fifteenth'
// 	| 'sixteenth'
// 	| 'seventeenth'
// 	| 'eighteenth'
// 	| 'nineteenth' // 19th
// 	| `${'twenty-' | 'thirty-' | 'forty-' | 'fifty-' | 'sixty-' | 'seventy-' | 'eighty-' | 'ninety-'}${PositiveOneDigitOrdinal}`;

/** __ordinal numeral__:: spelled-out arbitrary 2-digits integers */
// type TwoDigitsOrdinal = `${'minus-' | ''}${PositiveTwoDigitsOrdinal}`;

/** __ordinal numeral__:: spelled-out positive 1 or 2 digits integers */
// type PositiveOrdinal = PositiveOneDigitOrdinal | PositiveTwoDigitsOrdinal;

/** __ordinal numeral__:: spelled-out arbitrary 1 or 2 digits integers */
// type Ordinal = OneDigitOrdinal | TwoDigitsOrdinal;


/*
 * Abbreviate ordinal numerals in English.
 */

/** __ordinal numeral__:: abbreviated integers in [10, 19] */
export type AbbrPositiveTeenOrbital = `${TeenNumString}th` | `${DigitCharExcept0}${'' | number}${TeenNumString}th`;

/** __ordinal numeral__:: abbreviated integers equal to 1 mod 10 except 11 mod 100 */
export type AbbrPositive1stOrbital = `${'' | DigitCharFrom2To9}1st` | `${DigitCharExcept0}${'' | number}${DigitCharExcept1}1st`;

/** __ordinal numeral__:: abbreviated integers equal to 2 mod 10 except 12 mod 100 */
export type AbbrPositive2ndOrbital = `${'' | DigitCharFrom2To9}2nd` | `${DigitCharExcept0}${'' | number}${DigitCharExcept1}2nd`;

/** __ordinal numeral__:: abbreviated integers equal to 3 mod 10 except 13 mod 100  
 * Ex.) `'3rd'`, `'23rd'`, `'33rd'`, …, `'103rd'`, `'123rd'`, … */
export type AbbrPositive3rdOrbital = `${'' | DigitCharFrom2To9}3rd` | `${DigitCharExcept0}${'' | number}${DigitCharExcept1}3rd`;

/** __ordinal numeral__:: abbreviated integers in [4, 10] mod 10 exclude [10, 19] mod 100  
 * Ex.) `'4th'`, `'5th'`, …, `'9th'`, `'20th'`, `'24th'`, …, …, `'100th'`, `'104th'`, … `'109th'`, `'120th'`, `'124th'`, … */
export type AbbrPositiveFrom4thTo10thOrbital = `${DigitCharFrom4To9}th` | `${DigitCharFrom2To9}${DigitCharFrom4To9 | '0'}th` | `${DigitCharExcept0}${number}${DigitCharExcept1}${DigitCharFrom4To9 | '0'}th`;


/** __ordinal numeral__:: positive 1-digit integers with suffix */
export type AbbrPositive1DigitOrdinal =
	  '1st'
	| '2nd'
	| '3rd'
	| `${DigitCharFrom4To9}th`;

/** __ordinal numeral__:: arbitrary 1-digit integers with suffix  
 * _Ex.)_ `'-9th'`, `'-8th'`, …, `'-1st'`, `'0th'`, `'1st'`, …, `'9th'` */
type Abbr1DigitOrdinal = `${'-' | ''}${AbbrPositive1DigitOrdinal}` | '0th';

/** __ordinal numeral__:: positive 2-digits integers with suffix  
 * _Ex.)_ `'10th'`, `'11th'`, …, `'53rd'`, `'54th'`, …, `'98th'`, `'99th'` */
type AbbrPositive2DigitsOrdinal =
	  `${TeenNumString}th`
	| `${DigitCharFrom2To9}${AbbrPositive1DigitOrdinal | '0th'}`;

/** __ordinal numeral__:: arbitrary 2-digits integers with suffix  
 * _Ex.)_ `'-99th'`, `'-98th'`, …, `'-10th'`, `'10th'`, `'11th'`, …, `'99th'` */
type Abbr2DigitsOrdinal = `${'-' | ''}${AbbrPositive2DigitsOrdinal}`;

/** __ordinal numeral__:: positive 3 or more digits integers with suffix  
 * _Ex.)_ `'100th'`, `'101st'`, …, `'999th'`, `'1000th'`, … */
type AbbrPositive3PlusDigitsOrdinal = `${DigitCharExcept0}${'' | number}${AbbrPositive2DigitsOrdinal | '00th'}`;

/** __ordinal numeral__:: arbitrary 3 or more digits integers with suffix  
 * _Ex.)_ … , `'-102nd'`, `'-101st'`, `'-100th'`, `'100th'`, `'101st'`, `'102nd'`, … */
type Abbr3PlusDigitsOrdinal = `${'-' | ''}${AbbrPositive3PlusDigitsOrdinal}`;

/** __ordinal numeral__:: arbitrary 2 or more digits integers with suffix  
 * _Ex.)_ `'10th'`, `'11th'`, `'12th'`, … , `'100th'` , `'101st'`, … */
export type AbbrPositive2PlusDigitsOrdinal = AbbrPositive2DigitsOrdinal | AbbrPositive3PlusDigitsOrdinal;

/** __ordinal numeral__:: arbitrary 2 or more digits integers with suffix  
 * _Ex.)_ … , `'-12th'`, `'-11th'`, `'-10th'`, `'10th'`, `'11th'`, `'12th'`, … */
export type Abbr2PlusDigitsOrdinal = Abbr2DigitsOrdinal | Abbr3PlusDigitsOrdinal;

/** __ordinal numeral__:: positive integers with suffix  
 * _Ex.)_ `'1st'`, `'2nd'`, `'3rd'`, …, `'99th'`, `'100th'`, `'101st'`, … */
export type AbbrPositiveOrdinal = AbbrPositive1DigitOrdinal | AbbrPositive2PlusDigitsOrdinal;

/** __ordinal numeral__:: arbitrary integers with suffix  
 * _Ex.)_ … , `'-3rd'`, `'-2nd'`, `'-1st'`, `'0th'`, `'1st'`, `'2nd'`, `'3rd'`, … */
export type AbbrOrdinal = Abbr1DigitOrdinal | Abbr2PlusDigitsOrdinal;


/*
 * Abbreviate ordinal numerals with super-script suffixes in English.
 */

/** __ordinal numeral__:: positive 1-digit integers with super-script suffix */
// type SuperPositive1DigitOrdinal =
// 	  '1ˢᵗ'
// 	| '2ⁿᵈ'
// 	| '3ʳᵈ'
// 	| `${DigitCharFrom4To9}ᵗʰ`;

/** __ordinal numeral__:: arbitrary 1-digit integers with super-script suffix */
// type Super1DigitOrdinal = `${'−' | ''}${SuperPositive1DigitOrdinal}` | '0ᵗʰ';

/** __ordinal numeral__:: positive 2-digits integers with super-script suffix */
// type SuperPositive2DigitsOrdinal =
// 	  `${TeenNumString}ᵗʰ`
// 	| `${DigitCharFrom2To9}${SuperPositive1DigitOrdinal | '0ᵗʰ'}`;

/** __ordinal numeral__:: arbitrary 2-digits integers with super-script suffix */
// type Super2DigitsOrdinal = `${'−' | ''}${SuperPositive2DigitsOrdinal}`;

/** __ordinal numeral__:: positive 1 or 2 digits integers with super-script suffix */
// type SuperPositiveOrdinal = SuperPositive1DigitOrdinal | SuperPositive2DigitsOrdinal;

/** __ordinal numeral__:: arbitrary 1 or 2 digits integers with super-script suffix */
// type SuperOrdinal = Super1DigitOrdinal | Super2DigitsOrdinal;

/*
 * Abbreviate ordinal numerals with character references of super-script suffixes in English.
 */

/** __ordinal numeral__:: positive 1-digit integers with character references of super-script suffix */
// type CharRefPositive1DigitOrdinal =
// 	  '1&#x02E2;&#x1D57;' // 1ˢᵗ
// 	| '2&#x207F;&#x1D48;' // 2ⁿᵈ
// 	| '3&#x02B3;&#x1D48;' // 3ʳᵈ
// 	| `${DigitCharFrom4To9}&#x1D57;&#x02B0;`; // 4ᵗʰ, … , 9ᵗʰ

/** __ordinal numeral__:: arbitrary 1-digit integers with character references of super-script suffix */
// type CharRef1DigitOrdinal = `${'&#x2212;' | ''}${CharRefPositive1DigitOrdinal}` | '0&#x1D57;&#x2B0;';