var origin = "";
var destination = "";

var originVar = "";

function storeInput() {
    let originElement = document.getElementById("origin");
    origin = originElement.value;
    localStorage.setItem(originVar, origin)

    let destinationElement = document.getElementById("destination");
    destination = destinationElement.value;
    
}

function redirectTo(pageURL) {
    if(origin !== "" && destination !== "") {       
            window.location.href = pageURL; 
    }
}

// var originPoint = document.getElementById("origin-point");
// originPoint.innerHTML = localStorage.getItem(originVar);

// var destPoint = document.getElementById("dest-point");
// destPoint.innerHTML = destination;