
export enum ActionTypes {
    UPDATE_CREDIT_DATA = "updateCreditData",
    DOWNLOADED_MORTGAGE_DATA = "downloadMortgageData",
    APPLY_FOR_MORTGAGE = "applyMortgage"
}

export enum StatusType  {
    NONE = "none",
    PENDING = "pending",
    SUCCESS = "success",
    FAILED = "failed"
}

export interface ICreditData {
    price: number;
    interest: number;
    numYears: number;
    monthlyPayment?: number;
};

export interface IMortgageData {
    monthlyValue: number;
    status: StatusType;
    error?: string|undefined|null;
}

export interface IAction {
    type: ActionTypes;
    creditData?:ICreditData;
    mortgageData?: IMortgageData;
}

export type ACTIONS = IAction;

export const updateCreditValues = (price: number, interest: number, numYears: number):IAction => ({
    type: ActionTypes.UPDATE_CREDIT_DATA,
    creditData: {price, interest, numYears}
});

export const downloadedMortgageData = (status: string, monthlyPayment: number, errorMsg: string|undefined|null):IAction => {
    let statusType = StatusType.NONE;
    switch(status) {
        case 'pending':
            statusType = StatusType.PENDING;
            break;

        case 'completed':
            statusType = StatusType.SUCCESS;
            break;

        case 'failed':
            statusType = StatusType.FAILED;
            break;
    }
    return {
        type: ActionTypes.DOWNLOADED_MORTGAGE_DATA,
        mortgageData: {
            monthlyValue: monthlyPayment, 
            status: statusType,
            error: errorMsg
        }
    };

}

  