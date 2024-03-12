import { format, formatDefaultLocale } from 'd3-format';

export const formatNumber = (number: number) => {
    const f = format(',.2r')(number);
    return f;
}

export const formatAmount = (amount: number | null, formatType = '$,') => {
    /*
     * R12 400 ==> R12,4k (use '$,~s')
     *
     */
    formatDefaultLocale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["R", ""]
    });
    const f = format(formatType);
    return f(amount);
}

export const formatAmountSuffix = (amount: number | null) => {
    const f = format('.2s')(amount);
    return f;
}
