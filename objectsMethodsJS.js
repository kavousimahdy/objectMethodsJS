//date release 1395/10/08  v1.0  URL github is :    https://github.com/kavousimahdy
//object text reverse,normal,abbrevation
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
    normal: function (elementId, seperate_character) {
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

    abbrevation: function (elementId) {
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
    }
}

//example
/*
html:
 <input type="tex" id="idtext" />
 <p id="idp"></p>

 js:
 document.getElementById('idtext').onkeyup=function(){
     var reverText= processTextJs.reverse("idtext",'&#9865;')  ;
     document.getElementById('idp').innerHTML=reverText;
 }

 */