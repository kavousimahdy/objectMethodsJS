//date release 1395/10/25   URL github is :    https://github.com/kavousimahdy
//object permissionsJs,processTextJs

var permissionsJs = {       ////start permissionsJs
    camera: function (videoId) {
        var video = document.getElementById(videoId);
        navigator.getUserMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia ||
            navigator.oGetUserMedia;
        if (navigator.getUserMedia) {
            navigator.getUserMedia({video: true}, handleVideo, videoError);
        }
        function handleVideo(stream) {
            video.src = window.URL.createObjectURL(stream);
        }

        function videoError(e) {
            // for handle error
        }
    },
    audio:function (audioId) {
    var audio = document.getElementById(audioId);
    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia ||
        navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
        navigator.getUserMedia({audio: true}, handleVideo, videoError);
    }
    function handleVideo(stream) {
        audio.src = window.URL.createObjectURL(stream);

    }

    function videoError(e) {
        // for handle error
    }
},
    notification: function (title, body, icon, urlPage, functionOnClickNotification, functionOnCloseNotification) {
        if (!("Notification" in window)) {
            alert('not support Notification browser');
        } else if (Notification.permission !== 'granted') {
            Notification.requestPermission()
        } else if (Notification.permission == 'granted') {
            var notify = new Notification('salam',
                {
                    body: body,
                    icon: icon
                    //data:data
                });
        }
        if (!(functionOnClickNotification === undefined || functionOnClickNotification === '') && typeof functionOnClickNotification == 'function') {
            notify.onclick = function (event) {
                functionOnClickNotification()
            }
        }
        if (!(functionOnCloseNotification === undefined || functionOnCloseNotification === '') && typeof functionOnCloseNotification == 'function') {
            notify.onclose = function (event) {
                functionOnCloseNotification()
            }
        }
        return notify;
    }
}

/* examples for permissionsJs object */
/* example for permissionsJs.camera()  */
//html:
//<video autoplay="true"  id="myvideo" width="280" style="border:2px solid gray;box-shadow: 10px 10px 50px inset " height="250"> </video>
// js:
//permissionsJs.camera('myvideo')


//example for permissionsJs.notification()
/* document.onclick = function () {
 permissionsJs.notification('titile me', 'body text me ', 'mypic.jpg', 'mypage.php',
 function () {
 window.open('m.php', '_blank')
 })
 }*/

/* example for permissionsJs.audio()  */
//html:
//<audio autoplay="true" style="display: none"  id="myaudio" > </audio>
//js:
//  permissionsJs.audio('myaudio');

//end permissionsJs


var locationJs = {            //start object location
    getQueryString: function (url) {    //if ommit url target current page
        var querystring;
        if (url === undefined) {
            querystring= (location.toString().slice(location.toString().indexOf('?') + 1, location.toString().length))
            if(querystring==location.href){
                return null;
            } else {
                return  querystring;
            }
        }
        querystring= (url.toString().slice(url.toString().indexOf('?') + 1, url.toString().length));
        if(querystring==url){
            return null;
        } else {
            return  querystring;
        }
    }
}

// alert(locationJs.getQueryString('m.php?id=20&fname=mahdi&lname=kavousi'))
// alert(locationJs.getQueryString())  //get queryString current page

//end object location


var processTextJs = {      //start processTextJs
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
    },  //end function abbrevation
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

}

//examples object processTextJs
//example for   processTextJs.charCodeAt()
//html:
// <input type="text" id="textid" />
// <p id="pid" />
//js:
/*
 document.getElementById('textid').onkeyup = function () {
 charCodevalue = processTextJs.charCodeAt('textid', ',');
 document.getElementById('pid').innerText = charCodevalue;
 }
 */

//example for   processTextJs.reverse()
//    document.getElementById('textid').onkeyup = function () {
//        var reverText = processTextJs.reverse("textid", '&#9865;');
//        document.getElementById('pid').innerHTML = reverText;
//    }
                      //end  processTextJs
var cssJs = {
  getValues: function (cssSelector, property) {
    if (property == undefined) {
      return (window.getComputedStyle(document.querySelectorAll(cssSelector)[document.querySelectorAll(cssSelector).length-1] , null).cssText).split(';').join('  <br />  ');

    } else {
      return (window.getComputedStyle(document.querySelectorAll(cssSelector)[document.querySelectorAll(cssSelector).length-1], null).getPropertyValue(property));
    }

  }

}

//example cssJs object
/// document.getElementById('mydiv').innerHTML= cssJs.getValues( "#mydiv");
// document.getElementById('mydiv').innerHTML= cssJs.getValues( "#mydiv",'margin-right');
// document.getElementsByClassName('mydiv')[0].innerHTML= cssJs.getValues( ".mydiv");
//<div id="mydiv" style="height: 20px;margin:50px;margin-right: 100px;margin-right: 2px"></div>

//end cssJs object