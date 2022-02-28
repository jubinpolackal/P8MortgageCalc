
const getPaymentData = async (price?: number, interest?: number, numYears?: number) => {
    let reqUrl = `/api/mortgageCalculation?principal=${price}&annualInterestRate=${interest}&termOfLoan=${numYears}`;

    const res = await fetch(reqUrl,{
        method: 'POST',
        headers: { "Content-Type": "application/json" }
    });
    
    let resp = await res.json();
    console.log(resp);
    return res;
}

export const getMortgageUrl = (price?: number, interest?: number, numYears?: number): string => {
    return `/api/mortgageCalculation?principal=${price}&annualInterestRate=${interest}&termOfLoan=${numYears}`;
}

export default getPaymentData;