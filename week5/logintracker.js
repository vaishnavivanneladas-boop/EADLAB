function loginTracker(){

let attempts = 0;

return function(){

attempts++;
return attempts;

}

}

let login = loginTracker();

function trackLogin(){

document.getElementById("result").innerText =
"Attempts: " + login();

}