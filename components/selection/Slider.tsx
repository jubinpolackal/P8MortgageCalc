import { Range, getTrackBackground } from 'react-range';
import { useState } from 'react';
import { abbreviateNumber } from '../../helpers/utils';
import classes from './Slider.module.css';

const Slider = (props: {min: number,
                        max: number,
                        title: string,
                        valuePrefix: string,
                        valueSuffix: string,
                        isCurrency: boolean,
                        disabled: boolean,
                        valueFinalCallback: (val: number)=> void}) => {

    const [values, setValues] = useState({ values: [props.min] });

    const onValueChangeCommitted = (value: Array<number>)=>{
        setValues({values: value});
        props.valueFinalCallback(value[0]);
    }

    const onValueChanged = (value: Array<number>)=>{
        setValues({values: value});
    }

    const getDisplayValue= (x: number) => {
        let retVal:string = "";

        if (props.valuePrefix) {
            retVal += props.valuePrefix;
        }

        if (props.isCurrency) {
            retVal += x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        } else {
            retVal += x;
        }

        if (props.valueSuffix) {
            retVal += props.valueSuffix;
        }

        return retVal;
    }

    return (
        <div>
            <h4 className={classes.title}>{props.title}</h4>
            <div className={classes.price}>{getDisplayValue(values.values[0])}</div>
            <Range
            values={values.values}
            min={props.min}
            max={props.max}
            disabled={props.disabled}
            onChange={onValueChanged}
            onFinalChange={onValueChangeCommitted}
            renderTrack={({ props, children }) => (
                <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                    ...props.style,
                    height: "25px",
                    display: "flex",
                    width: "100%"
                }}
                >
                <div
                    ref={props.ref}
                    style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                        values: values.values,
                        colors: ["#548BF4", "#ccc"],
                        min: 10,
                        max: 1000
                    }),
                    alignSelf: "center"
                    }}
                >
                    {children}
                </div>
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div
                {...props}
                style={{
                    ...props.style,
                    height: "30px",
                    width: "30px",
                    borderRadius: "8vh",
                    backgroundColor: "#5965ac",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA"
                }}
                >
                <div
                    style={{
                    height: "16px",
                    width: "5px",
                    backgroundColor: isDragged ? "#548BF4" : "#CCC"
                    }}
                />
                </div>
            )}
            />
            <div className={classes["footer-container"]}>
                <div className={classes['left-section']}>{abbreviateNumber(props.min)}</div>
                <div className={classes['right-section']}>{abbreviateNumber(props.max)}</div>
            </div>
        </div>
    )
}

export default Slider;