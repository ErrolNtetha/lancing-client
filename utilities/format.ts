import { format } from 'd3-format';
// import SA from 'd3-format/locale/ar-SA.json';


export const formatNumber = (number: number) => {
    const f = format(',.2r')(number);
    return f;
}

export const formatAmount = (amount: number) => {
    const f = format(',.2f')(amount);
    return f;
}
