import { format, formatDefaultLocale } from 'd3-format';
import ZA from './en-ZA.json';

export const formatNumber = (number: number) => {
    const f = format(',.2r')(number);
    return f;
}

export const formatAmount = (amount: number | null, formatType = '$,') => {
        formatDefaultLocale(ZA);
        const f = format(formatType);
        return f(amount);
}

export const formatAmountSuffix = (amount: number | null) => {
    const f = format('.2s')(amount);
    return f;
}
