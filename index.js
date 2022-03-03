var areyou = '<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<title>You are an idiot!<\/title>\r\n<style>\r\nh1 {\r\n\tfont-family: \"Arial\";\r\n    \r\n}\r\nbody {\r\n\tbackground: white;\r\n}\r\nbutton {\r\n\tborder-radius: 25%;\r\n    border-color: black;\r\n    background: white;\r\n    color: black;\r\n}\r\nbutton:hover {\r\n\topacity: 0.7;\r\n}\r\n<\/style>\r\n<\/head>\r\n<body>\r\n<p id=\"removable\"><\/p><center>\r\n<h1 id=\"text\">Are you an idiot?<\/h1>\r\n<button onclick=\"any(document.getElementById(\'yes\'))\" id=\"yes\"><h1>Yes<\/h1><\/button> \r\n<button onclick=\"any(document.getElementById(\'no\'))\" id=\"no\"><h1>No<\/h1><\/button> \r\n<button onclick=\"any(document.getElementById(\'idk\'))\" id=\"idk\"><h1>I don\'t know<\/h1><\/button>\r\n<\/center>\r\n<script>\r\nfunction any(el) {\r\n\tif (el.id==\'yes\') {\r\n    \talert(\"Okay well, take some of this!\");\r\n    } else if (el.id==\'no\') {\r\n    \talert(\"I think you are!\");\r\n    } else {\r\n    \talert(\"Then let me tell you, you are an idiot!\");\r\n    }\r\n}\r\nfunction flash() {\r\n      let b1=document.getElementById(\'yes\');\r\n      let b2=document.getElementById(\'no\');\r\n      let b3=document.getElementById(\'idk\');\r\n      let tx=document.getElementById(\'text\');\r\n      if (document.body.style.background!=\'black\') {\r\n          b1.style.color=\'white\';\r\n          b1.style.background=\'black\';\r\n          b1.style.borderColor=\'white\';\r\n          document.body.style.background=\'black\';\r\n          b2.style.color=\'white\';\r\n          b2.style.background=\'black\';\r\n          b2.style.borderColor=\'white\';\r\n          b3.style.color=\'white\';\r\n          b3.style.background=\'black\';\r\n          b3.style.borderColor=\'white\';\r\n          tx.style.color=\'white\';\r\n\t} else {\r\n          b1.style.color=\'black\';\r\n          b1.style.background=\'white\';\r\n          b1.style.borderColor=\'black\';\r\n          document.body.style.background=\'white\';\r\n          b2.style.color=\'black\';\r\n          b2.style.background=\'white\';\r\n          b2.style.borderColor=\'black\';\r\n          b3.style.color=\'black\';\r\n          b3.style.background=\'white\';\r\n          b3.style.borderColor=\'black\';\r\n          tx.style.color=\'black\';\r\n    }\r\n}\r\nfunction sleep(time) { return new Promise(resolve => setTimeout(resolve,time));}\r\nasync function flashLoop() {\r\n\twhile (1) {\r\n    \tflash();\r\n    \tawait sleep(400);\r\n    }\r\n}\r\nflashLoop();\r\n<\/script>\r\n<\/body>\r\n<\/html>\r\n';
var a = window.open('about:blank', '_blank', 'resizable=no,width=400,height=300');
a.document.write(areyou);
function sleep(time) { return new Promise(resolve => setTimeout(resolve,time));}
var times_closed = 0;
var closed_msg =   [
    'Don\'t do it again.',
    'DO NOT DO IT AGAIN!',
    'LAST WARNING, DO NOT REPEAT!'
]
async function check() {
	while (1) {
    	if (a.closed) {
        	a = window.open('about:blank', '_blank', 'resizable=no,width=400,height=300');
          a.document.write('<script>alert("'+closed_msg[times_closed]+'")<\/script>');
          times_closed+=1;
          a.document.write(areyou);
      }
      await sleep(100);
  }
}
check();
