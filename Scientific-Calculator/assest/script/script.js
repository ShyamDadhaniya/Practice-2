/*Initial Step*/
let operation = document.getElementById('operation');

/**
 * 
 * @param {*} input 
 * @returns 
 */
function getCurrentValue() {
    let  currentValue = operation.innerText.replace(/,/g, "");;
    return currentValue;
}

//-------------------------------------------Formate Of Digit Start-------------------------------------
/**
* @function numberFormate
* @description This step is for formate the input and put semi-colon between digits
* @param input
* @returns
*/
function numberFormate(input) {
    return input.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
//-------------------------------------------Formate Of Digit End---------------------------------------

//-------------------------------------------All Normal Function Start----------------------------------

/**
 * @function addNum
 * @description This function get the number when we click on button.
 * @param {*} e 
 */
function addNum(e) {
    let char = e.getAttribute("data-value");
    let currentValue = getCurrentValue();
    currentValue += char;
    operation.innerHTML = numberFormate(currentValue);
}
//-------------------------------------------All Normal Function End----------------------------------


//-------------------------------------------Clear Value Start------------------------------------------
/**
 * @function clearData
 * @description By Using This We can Clear All the Data
 */
function clearData() {
    operation.innerText = "";
}
//-------------------------------------------Clear Value End--------------------------------------------


//-------------------------------------------Equal Start------------------------------------------------
/**
 * @function clearData
 * @description By using below function we will get the final result of the operation.
 */
function cal() {
    let value = getCurrentValue();
    operation.innerText = numberFormate(eval(value).toString());
}
//-------------------------------------------Equal End--------------------------------------------------


//-------------------------------------------Backspace Start--------------------------------------------
/**
 * @function backspace
 * @description By using this function we can erase last digit or method of opration.
 */
function backspace() {
    let value = getCurrentValue();
    let valuelength = value.length;
    let newValue = value.substring(0, valuelength - 1);
    operation.innerText = numberFormate(newValue);
}
//-------------------------------------------Backspace End----------------------------------------------


//-------------------------------------------Plus-Minus Start-------------------------------------------
/**
 * @function plusminus()
 * @description By using this function we can change the value of the digits.(EX:We make sum of two digit and the final result of the operation is negative then by using this we can make that value plus)
 */
function plusminus() {
    let value = getCurrentValue();
    value *= -1;
    operation.innerText = numberFormate(value.toString());
}
//-------------------------------------------Plus-Minus End-------------------------------------------


//-------------------------------------------ln Start---------------------------------------------------
/**
 * @function ln()
 * @description Here ln stands for log Natural and this function help as to find the log of any digits.
 */
function ln() {
    let value = getCurrentValue();
    operation.innerText = Math.log(value).toString()
}
//-------------------------------------------ln End---------------------------------------------------


//-------------------------------------------Log Start--------------------------------------------------
/**
 * @function log()
 * @description Log generally refers to a logarithm to the base 10 this function help us to found log with base.
 */
function log() {
    let value = getCurrentValue();
    operation.innerText = Math.log10(value).toString();
}
//-------------------------------------------Log End----------------------------------------------------


//-------------------------------------------Power of Ten Start-----------------------------------------
/**
 * @function tenPower()
 * @description 10^x : It's means power of ten and this function is help us to calculate the power of 10 and here x means whatever power we want.
 */
function tenPower() {
    let value = getCurrentValue();
    operation.innerText = Math.pow(10, value).toString();
}
//-------------------------------------------Power of Ten End-------------------------------------------


//-------------------------------------------Root Start-------------------------------------------------
/**
 * @function root()
 * @description It's help to find the square root of any value.
 */
function root() {
    let value = getCurrentValue();
    operation.innerText = Math.sqrt(value).toString();
}
//-------------------------------------------Root End---------------------------------------------------


//-------------------------------------------Factorial Start--------------------------------------------
/**
 * @function factorial()
 * @description Factorial is a function that multiplies a number by every number below it.(EX: 5!= 5*4*3*2*1=120.)
 */
function factorial() {
    let value = getCurrentValue();
    let result = 1;
    let i = 0;
    for (let i = value; i >= 1; i--) {
        result *= i;
    }
    // result = Math.factorial(value);
    operation.innerText = result.toString();
}
//-------------------------------------------Factorial End----------------------------------------------



//-------------------------------------------Square Start-----------------------------------------------
/**
 * @function square()
 * @description By using this function we can find the square of any numbers.
 */
function square() {
    let value = getCurrentValue();
    value *= value;
    operation.innerText = value.toString();
}
//-------------------------------------------Square End-------------------------------------------------


//-------------------------------------------Exp Start--------------------------------------------------
/**
 * @function calExp()
 * @description This function is use to returns e^x value 
 */
function calExp() {
    let value = getCurrentValue();
    operation.innerText = Math.exp(value);
}
//-------------------------------------------Exp End----------------------------------------------------


//-------------------------------------------Absolute Start---------------------------------------------
/**
 * @function absolute()
 * @description This function is use the make any value absolute.
 */
function absolute() {
    let value = getCurrentValue();
    operation.innerText = Math.abs(value);
}
//-------------------------------------------Absolute End-----------------------------------------------


//-------------------------------------------Function Start---------------------------------------------
/**
 * @function mathsFunction()
 * @description By using this function we can make any value round, floor, ceil, trunc.
 */
function mathsFunction(fname) {
    let value = getCurrentValue();
    let result = 0;
    switch (fname) {
        case 'ceil':
            result = Math.ceil(value);
            break;
        case 'floor':
            result = Math.floor(value);
            break;
        case 'round':
            result = Math.round(value);
            break;
        case 'trunc':
            result = Math.trunc(value);
            break;
    }
    console.log(result);
    operation.innerText = numberFormate(result.toString());
}
//-------------------------------------------Function End-----------------------------------------------


//-------------------------------------------Trigonometry Start-----------------------------------------
/**
 * @function trigonometry()
 * @description By using this function we can make any value round, floor, ceil, trunc.
 */
function trigonometry(method) {
    let value = getCurrentValue();
    let result = 0;
    switch (method) {
        case "sin":
            result = Math.sin(value);
            break;
        case "cos":
            result = Math.cos(value);
            break;
        case "tan":
            result = Math.tan(value);
            break;
        case "cot":
            result = 1 / Math.tan(value);
            break;
    }
    if (result === NaN) {
        operation.innerText = "ERROR"
    } else {
        operation.innerText = numberFormate(result.toString());
    }
}
//-------------------------------------------Trigonometry End-------------------------------------------


//-------------------------------------------Degree Start-----------------------------------------------
/**
 * @function deg()
 * @description convert radian to degree.
 */
function deg() {
    let value = getCurrentValue();
    value *= (180 / Math.PI)
    operation.innerText = numberFormate(value.toString())
}
//-------------------------------------------Degree End-------------------------------------------------


//-------------------------------------------Exponential Start------------------------------------------
/**
 * @function exp()
 * @description This function is use to fixed value with exponent value.
 */
function exp() {
    let value = Number(operation.innerText.replace(/,/g, ""));
    operation.innerText = numberFormate(value.toExponential(3).toString());
}
//-------------------------------------------Exponential End--------------------------------------------


//-------------------------------------------Memory Function Start--------------------------------------

let mValue = 0;
/**
 * @function memoryStore()
 * @description The calculator has one memory that can be used for storing values temporarily.
 */
function memoryStore() {
    let value = Number(operation.innerText.replace(/,/g, ""));
    if (operation.innerText != "") {
        mValue = value;
        document.getElementById("mc-on").style.color = "black";
        document.getElementById("mr-on").style.color = "black";
    }
    operation.innerText = "";
}

/**
 * @function memoryPlus()
 * @description This function use to add the presently displayed number to the value in memory.
 */
function memoryPlus() {
    let value = Number(operation.innerText.replace(/,/g, ""));
    if (operation.innerText != "") {
        mValue += value;
        document.getElementById("mc-on").style.color = "black";
        document.getElementById("mr-on").style.color = "black";
    }
    operation.innerText = "";
}

/**
 * @function memoryPlus()
 * @description This function use to subtract the present value from the stored value.
 */
function memoryMinus() {
    let value = Number(operation.innerText.replace(/,/g, ""));
    if (operation.innerText != "") {
        mValue -= value;
        document.getElementById("mc-on").style.color = "black";
        document.getElementById("mr-on").style.color = "black";
    }
    operation.innerText = "";
}


/**
 * @function memoryPlus()
 * @description This function is used to display the number saved in memory,The calculator will show the stored number on screen, replacing any value already displayed.
 */
function memoryRecall() {
    console.log(mValue)
    operation.innerText = numberFormate(mValue.toString());
}

/**
 * @function memoryPlus()
 * @description The calculator has one memory that can be used for storing values temporarily to clear this memory we need to use this function.
 */
function memoryClear() {
    mValue = 0
    if (mValue == 0)
        document.getElementById("mc-on").style.color = "gray";
    document.getElementById("mr-on").style.color = "gray";
}

//-------------------------------------------Memory Function End----------------------------------------

