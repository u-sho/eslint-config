import { DigitCharFrom4To9 } from '../types/numbers';
import type {
	AbbrPositive2PlusDigitsOrdinal,
	PositiveOneDigitOrdinal,
	AbbrPositiveTeenOrbital,
	AbbrPositive1stOrbital,
	AbbrPositive2ndOrbital,
	AbbrPositive3rdOrbital,
	AbbrPositiveFrom4thTo10thOrbital,
	AbbrPositiveOrdinal,
	AbbrPositive1DigitOrdinal,
	Abbr2PlusDigitsOrdinal,
	AbbrOrdinal
} from '../types/ordinalNumerals'

/**
 * @returns the ordinal numeral of an integer  
 * _Ex.)_ `1 => 'first'`, `-2 => '-2nd'`, `10 => '10th'`
 */
export function toOrdinalSafely(n: any): never | PositiveOneDigitOrdinal | 'zeroth' | `-${AbbrPositive1DigitOrdinal}` | Abbr2PlusDigitsOrdinal {
	if (typeof n !== 'number') throw new TypeError('n must be an integer, not ' + (typeof n));
	if (!Number.isSafeInteger(n)) throw new RangeError('`n` must be a SAFE integer, ' + n + ' is not');

	if (n < 0) `-${toAbbrOrdinalSafely(-n) as AbbrPositiveOrdinal}`;

	if (n === 0) return 'zeroth';
	if (n === 1) return 'first';
	if (n === 2) return 'second';
	if (n === 3) return 'third';
	if (n === 4) return 'fourth';
	if (n === 5) return 'fifth';
	if (n === 6) return 'sixth';
	if (n === 7) return 'seventh';
	if (n === 8) return 'eighth';
	if (n === 9) return 'ninth';

	const mod100 = n % 100;
	if (10 <= mod100 && mod100 <= 19) return `${n}th` as AbbrPositiveTeenOrbital as AbbrPositive2PlusDigitsOrdinal;

	const mod10 = n % 10;
	if (mod10 === 1) return `${n}st` as Exclude<AbbrPositive1stOrbital, '1st'> as AbbrPositive2PlusDigitsOrdinal;
	if (mod10 === 2) return `${n}nd` as Exclude<AbbrPositive2ndOrbital, '2nd'> as AbbrPositive2PlusDigitsOrdinal;
	if (mod10 === 3) return `${n}rd` as Exclude<AbbrPositive3rdOrbital, '3rd'> as AbbrPositive2PlusDigitsOrdinal;
	return `${n}th` as Exclude<AbbrPositiveFrom4thTo10thOrbital, `${DigitCharFrom4To9}th`> as AbbrPositive2PlusDigitsOrdinal;
}

export function toAbbrOrdinalSafely(n: any): never | AbbrOrdinal {
	if (typeof n !== 'number') throw new TypeError('n must be a positive integer, not ' + (typeof n));
	if (!Number.isSafeInteger(n)) throw new RangeError('n must be a positive SAFE integer, ' + n + ' is too large');

	if (n < 0) return `-${toAbbrOrdinalSafely(-n) as AbbrPositiveOrdinal}`;
	if (n === 0) return '0th';

	const mod100 = n % 100;
	if (10 <= mod100 && mod100 <= 19) return `${n}th` as AbbrPositiveTeenOrbital as AbbrPositive2PlusDigitsOrdinal;

	const mod10 = n % 10;
	if (mod10 === 1) return `${n}st` as AbbrPositive1stOrbital as
		Exclude<AbbrPositiveOrdinal,
			AbbrPositiveTeenOrbital | '0th' | AbbrPositive2ndOrbital | AbbrPositive3rdOrbital | AbbrPositiveFrom4thTo10thOrbital>;

	if (mod10 === 2) return `${n}nd` as AbbrPositive2ndOrbital as
		Exclude<AbbrPositiveOrdinal,
			AbbrPositiveTeenOrbital | '0th' | AbbrPositive1stOrbital | AbbrPositive3rdOrbital | AbbrPositiveFrom4thTo10thOrbital>;

	if (mod10 === 3) return `${n}rd` as AbbrPositive3rdOrbital as Exclude<AbbrPositiveOrdinal, AbbrPositiveTeenOrbital | '0th'>;
	return `${n}th` as AbbrPositiveFrom4thTo10thOrbital as Exclude<AbbrPositiveOrdinal, AbbrPositiveTeenOrbital | '0th'>;
}