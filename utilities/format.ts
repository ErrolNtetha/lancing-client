import { format, formatDefaultLocale } from 'd3-format';
import US from '../node_modules/d3-format/locale/en-ZA.json';

export const formatNumber = (number: number) => {
    const f = format(',.2r')(number);
    return f;
}

export const formatAmount = (amount: number | null, formatType = '$,') => {
        formatDefaultLocale(US);
        const f = format(formatType);
        return f(amount);
}

export const formatAmountSuffix = (amount: number | null) => {
    const f = format('.2s')(amount);
    return f;
}
