//Get the required Elements
let inputElem = document.getElementById("calcinput");
let resetElemAC = document.getElementById("reset");
let btnElems = document.querySelectorAll(".number");



//Func to set the Reset Input value to zero 
let resetInput = () => {
    inputElem.value = 0;
}
//Func to Add EventListener to Buttons and Place the value to Input Box

let btnElemEventList = (e) => { 
    e.addEventListener("click", () => {
        let currentValueOfInputElem = inputElem.value;
       if (currentValueOfInputElem == 0 || currentValueOfInputElem == "") {
            inputElem.value = e.innerHTML;
        }
        else {
            inputElem.value = "" + currentValueOfInputElem.toString() + e.innerHTML;
        }
    });
};


//Reset on AC Click
resetElemAC.addEventListener("click", resetInput);

//Button EventListner
btnElems.forEach(btnElemEventList);



