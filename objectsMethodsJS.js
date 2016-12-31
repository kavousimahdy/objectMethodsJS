//date release 1395/10/11    URL github is :    https://github.com/kavousimahdy
//object text reverse,normal,abbrevation,charCodeAt
var processTextJs = {
    reverse: function (elementId, seperate_character) {
        var trimValue;
        if (document.getElementById(elementId).nodeName == 'INPUT') {
            trimValue = document.getElementById(elementId).value.trim();
            return trimValue.split('').reverse().join(seperate_character);
        } else {
            trimValue = document.getElementById(elementId).innerText.trim();
            return trimValue.split('').reverse().join(seperate_character);
        }
    },
    normal: function (elementId, seperate_character) {  //normal text elementId with characters
        var trimValue;
        if (document.getElementById(elementId).nodeName == 'INPUT') {
            trimValue = document.getElementById(elementId).value.trim();
            return trimValue.split('').join(seperate_character);
        } else {
            trimValue = document.getElementById(elementId).innerText.trim();
            return trimValue.split('').join(seperate_character);
        }
    },
    //return document.getElementById(idtext).value.split('').join(seperate_character);

    abbrevation: function (elementId) { //convert elementId to  abbrevation elementId
        trimValue = document.getElementById(elementId).value.trim();
        var i, abbrevation = '';
        if (document.getElementById(elementId).nodeName == 'INPUT') {
            arrayvalue = document.getElementById(elementId).value.split(' ');

        } else {
            arrayvalue = document.getElementById(elementId).innerText.split(' ');
        }
        for (i = 0; i < arrayvalue.length; i++) {
            str = arrayvalue[i].toString()
            abbrevation += str[0];
        }
        return abbrevation.toUpperCase();
    },  //return function abbrevation
    charCodeAt: function (elementId, seperateCharCode) {  //return CODE ASCII characters
        var charCode = '';
        if (document.getElementById(elementId).nodeName == 'INPUT') {
            elementIdValue = document.getElementById(elementId).value;

        } else {
            elementIdValue = document.getElementById(elementId).innerText;
        }
        for (i = 0; i < elementIdValue.length; i++) {
            charCode += elementIdValue.charCodeAt(i) + seperateCharCode;
        }
        return charCode;

    } //end function charCodeAt

}   //end  processTextJs


//examples
document.getElementById('textid').onkeyup = function () {
    charCodevalue = processTextJs.charCodeAt('textid', ',');
    document.getElementById('pid').innerText = charCodevalue;
}

document.getElementById('textid').onkeyup = function () {
    var reverText = processTextJs.reverse("textid", '&#9865;');
    document.getElementById('pid').innerHTML = reverText;
}
