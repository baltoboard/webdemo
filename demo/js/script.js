function LEDfunction(val) {
  var xmlhttp;
  var command;

  switch (val) {
    case 0:
      command = "../cgi-bin/ledLD1off";
      break;
    case 1:
      command = "../cgi-bin/ledLD1on";
      break;
    case 2:
      command = "../cgi-bin/ledLD1hb";
      break;
  }

  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function() {
    if ((xmlhttp.readyState != 4) || (xmlhttp.status != 200)) {
      //alert("xmlhttp.readyState = " + xmlhttp.readyState + ", xmlhttp.status = " + xmlhttp.status + ", " + command);
    }
  }
  xmlhttp.open("GET", command, true);
  xmlhttp.send();
}

function SSHDfunction(val) {
  var xmlhttp;
  var command;

  if (val)
    command = "../cgi-bin/SSHDon";
  else
    command = "../cgi-bin/SSHDoff";

  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function() {
    if ((xmlhttp.readyState != 4) || (xmlhttp.status != 200)) {
      //alert("xmlhttp.readyState = " + xmlhttp.readyState + ", xmlhttp.status = " + xmlhttp.status + ", " + command);
    }
  }
  xmlhttp.open("GET", command, true);
  xmlhttp.send();
}


