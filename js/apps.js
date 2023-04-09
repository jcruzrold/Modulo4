let fSum = (nNumberA, nNumberB) => nNumberA + nNumberB;
let fSubtract = (nNumberA, nNumberB) => nNumberA - nNumberB;
let fMultiply = (nNumberA, nNumberB) => nNumberA * nNumberB;
let fDivide = (nNumberA, nNumberB) => nNumberA / nNumberB;

let fCalculatorButtonClick = (event) => {
    let nNumberA = parseFloat(document.getElementById("numberAinput").value);
    let nNumberB = parseFloat(document.getElementById("numberBinput").value);

    if(isNaN(nNumberA) || isNaN(nNumberB)) {
        document.getElementById("resultInput").value = "Error";
    }
    else {
        switch(event.srcElement.id) {
            case "sum-button":
                document.getElementById("resultInput").value = fSum(nNumberA,nNumberB);
                break;

            case "subtract-button":
                document.getElementById("resultInput").value = fSubtract(nNumberA,nNumberB);
                break;
                
            case "multiply-button":
                document.getElementById("resultInput").value = fMultiply(nNumberA,nNumberB);
                break;

            case "divide-button":
                document.getElementById("resultInput").value = 
                    (nNumberB === 0) ? "Error" : fDivide(nNumberA,nNumberB);
                break;

            default:
                document.getElementById("resultInput").value = "Error";
                break;
        }
    }
};

document.getElementById("sum-button").addEventListener("click",fCalculatorButtonClick);
document.getElementById("subtract-button").addEventListener("click",fCalculatorButtonClick);
document.getElementById("multiply-button").addEventListener("click",fCalculatorButtonClick);
document.getElementById("divide-button").addEventListener("click",fCalculatorButtonClick);