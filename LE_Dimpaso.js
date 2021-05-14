function getBinary() {
    //takes info from the user
    let number = document.getElementById("number").value;
    
    //calls function to be able to convert decimal to binary
    let result = convert(number);
    
    //displays the result
    document.getElementById("binary").innerText = result;
}

//function for decimal to binary
function convert(num) {
    let result;
    let i = 0;

    if (ifInteger(num) == 1) { 
        return result = convertInteger(num);
    }
    else { 
        return result = convertDecimal(num);
    }
}

//function for whole number to binary
function convertInteger(whole) {
    let i = 1, binary = 0, remainder;
   
    //conversion starts
    while (whole != 0) {
        remainder = (whole % 2) * i;
        whole = parseInt(whole/2, 10);
        binary = binary + remainder;
        i = i*10;
    }

    return binary;
}

//function for fractions to binary
function convertDecimal(dec) {
    let result = [];

    
    let whole = convertInteger(parseInt(dec, 10));

    let binaryDec = 0;

    
    let fraction = dec - parseInt(dec, 10);

    let integer;

 
    let digits = 0, i = 1000;

    //conversion starts
    while (digits != 4) {
        integer = (parseInt(fraction*2, 10));
        fraction = (fraction*2) - integer;
        binaryDec = binaryDec + (integer*i);
        digits++;
        i = i/10;
    }

   
    whole = whole.toString();
    binaryDec = binaryDec.toString();


    result = whole.concat('.', binaryDec);
    return result;
}

//checks if number given is integer or fraction
function ifInteger(num) {
    let confirm = 0;

    if (num % 1 == 0) {
        confirm = 1;
    }

    return confirm;
}