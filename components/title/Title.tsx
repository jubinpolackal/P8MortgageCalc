import { Fragment } from 'react';
import classes from './Title.module.css';

const Title = () => {
    return (
        <Fragment >
            <h1 className={classes.title}>
                Get started with Digital Credit Experience
            </h1>
            <h4 className={classes.subtitle}>
                Qualify or apply your mortgage in minutes
            </h4>
        </Fragment>
    )
}

export default Title;