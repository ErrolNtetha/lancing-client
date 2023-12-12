import { format } from 'd3-format';
// import SA from 'd3-format/locale/ar-SA.json';


export const formatNumber = (number: number) => {
    const f = format(',.2r')(number);
    return f;
}

export const formatAmount = (amount: number | null) => {
    const f = format(',.2r')(amount);
    return f;
}

export const formatAmountSuffix = (amount: number | null) => {
    const f = format('.2s')(amount);
    return f;
}
