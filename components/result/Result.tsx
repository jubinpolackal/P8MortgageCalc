import { useContext, useState, useEffect } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import classes from './Result.module.css';
import { store } from '../../globalState/store';
import LoadingSpinner from '../ui/LoadingSpinner';
import { StatusType } from '../../globalState/actions';
import { getInteger, getDecimal } from '../../helpers/utils';

const Result = () => {
    const {globalState, globalDispatch} = useContext(store);

    const onApplyClicked = () => {
        console.log("Proceed to application ...");
    }

    useEffect(()=>{
        console.log(`Result component - ${globalState.mortgageData.monthlyValue} - ${globalState.mortgageData.status} - ${globalState.mortgageData.error}`);
    },[globalState]);

    if (globalState.mortgageData.status === StatusType.PENDING) {
        return (
          <Card className = {classes['result-container']}>
            <LoadingSpinner />
          </Card>
        );
    }

    if (globalState.mortgageData.error) {
        return (<Card className = {classes['result-container']}>
                    <p className='centered focused'>{ globalState.mortgageData.error }</p>
                </Card>
                );
    }

    return (
        <Card className = {classes['result-container']}>
            <h3 className={classes.caption}>
                Your total monthly payment will be
            </h3>
            <div className={classes.mortgage}>
                <div className={classes.currency}>$</div>
                <div className={classes.integer}>{ getInteger(globalState.mortgageData.monthlyValue) }</div>
                <div>{ getDecimal(globalState.mortgageData.monthlyValue) }</div>
            </div>
            <h1>
               
            </h1>
            <h4 className={classes.month}>
                /month
            </h4>
            <Button className={classes['result-button']} onClick={onApplyClicked} >
                Apply Today
            </Button>
        </Card>
    );
}

export default Result;