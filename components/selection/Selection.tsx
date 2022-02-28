import { Fragment, ChangeEvent, useState, useContext, DragEventHandler, DragEvent, useEffect } from 'react';
import classes from './Selection.module.css';
import { store } from '../../globalState/store';
import { updateCreditValues, downloadedMortgageData, StatusType } from '../../globalState/actions';
import useApiRequest, { ApiResponse } from '../../hooks/use-http';
import getPaymentData, {getMortgageUrl} from '../../helpers/mortgageHelper';
import Slider from './Slider';

const Selection = () => {
    const {globalState, globalDispatch} = useContext(store);

    const [price, setPrice] = useState(globalState.creditData.price);
    const [interest, setInterest] = useState(globalState.creditData.interest);
    const [years, setYears] = useState(globalState.creditData.numYears);

    const { status, data, error, sendRequest } = useApiRequest(getMortgageUrl(price, interest, years), "POST");

    const handleRadioSelection = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setYears(parseInt(value));
    }

    useEffect(()=>{
        globalDispatch(updateCreditValues(price, interest, years));
    },[price, interest, years, globalDispatch]);

    const onPriceChanged = (val: number) => {
        console.log("Final Value: " + val);
        setPrice(val);
    }

    const onInterestChanged = (val: number) => {
        console.log("Final interest rate: " + val);
        setInterest(val);
    };

    useEffect(()=>{
        if (error) {
            globalDispatch(downloadedMortgageData(status, 0.0, error));
        } else if (data) {
            globalDispatch(downloadedMortgageData(status, data.monthlyPayment, null))
        }
    },[status, data, error, globalDispatch]);



    return(
        <Fragment>

           <Slider min={50000} 
                   max={25000000} 
                   title="Purchase Price" 
                   isCurrency={true}
                   valuePrefix="$"
                   valueSuffix=""
                   disabled = {globalState.mortgageData.status === StatusType.PENDING}
                   valueFinalCallback={onPriceChanged}/>
           <Slider min={0} 
                   max={25} 
                   title="Interest Rate" 
                   valuePrefix=""
                   isCurrency={false}
                   valueSuffix='%' 
                   disabled = {globalState.mortgageData.status === StatusType.PENDING}
                   valueFinalCallback={onInterestChanged}/>
           <form>


              <h3 className={classes.caption}>Period</h3>
              <input type="radio" id="twenty" name="year" value="20" onChange={handleRadioSelection} checked={years === 20}/>
              <label htmlFor="twenty">20</label><br/>
              <input type="radio" id="twentyfive" name="year" value="25" onChange={handleRadioSelection } checked={years === 25}/>
              <label htmlFor="twentyfive">25</label><br/>
              <input type="radio" id="thirty" name="year" value="30" onChange={handleRadioSelection} checked={years === 30}/>
              <label htmlFor="thirty">30</label>
            </form>
        </Fragment>
    );
}

export default Selection;