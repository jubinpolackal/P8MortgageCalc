
const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

export const abbreviateNumber = (value: number) => {

    var tier = Math.log10(Math.abs(value)) / 3 | 0;

    if(tier == 0) return value;

    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    var scaled = value / scale;

    return "$"+scaled.toFixed(1) + suffix;
};

export const getInteger = (x: number): string => {
    if (x > 0.0) {
        return x.toString().split(".")[0];
    }
    return "00";
};

export const getDecimal = (x: number) => {
    let retVal:string = "00";
    if (x > 0.0) {
        let tempVal = x.toString().split(".");
        if (tempVal.length > 1) {
            return tempVal[1];
        }
    }
    return retVal;
};