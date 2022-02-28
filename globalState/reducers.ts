import { ActionTypes, IAction } from "./actions";
import { IState } from "./store";

export const StateReducer: React.Reducer<IState, IAction> = (state, action) => {
    if (action.type === ActionTypes.UPDATE_CREDIT_DATA) {
        console.log("Calculate monthly payment");
        return {...state, creditData: action.creditData!};
    } else if (action.type === ActionTypes.DOWNLOADED_MORTGAGE_DATA) {
        console.log("Download data ... "+action.mortgageData!);
        return {...state, mortgageData: action.mortgageData!}
    }
    return state;
}
