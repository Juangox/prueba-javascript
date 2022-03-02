//inicio y funciones onmouseover onmouseout

window.onload = function() {
    document.getElementById("btn-1").onmouseover = function() {
        document.body.style.backgroundImage = "url('assets/img/arica.jpg')";
    };
    document.getElementById("btn-2").onmouseover = function() {
        document.body.style.backgroundImage = "url('assets/img/iquique.jpg')";
    };
    document.getElementById("btn-3").onmouseover = function() {
        document.body.style.backgroundImage = "url('assets/img/serena.jpg')";
    };
    document.getElementById("btn-4").onmouseover = function() {
        document.body.style.backgroundImage = "url('assets/img/santiago.jpg')";
    };
    document.getElementById("btn-5").onmouseover = function() {
        document.body.style.backgroundImage = "url('assets/img/talca.jpg')";
    };
    document.getElementById("btn-6").onmouseover = function() {
        document.body.style.backgroundImage = "url('assets/img/conce.jpg')";
    };

    //Fondos vacios negros

    document.getElementById("btn-1").onmouseout = function() {
        document.body.style.backgroundImage = "url('assets/img/fondo1.jpg')";
    };
    document.getElementById("btn-2").onmouseout = function() {
        document.body.style.backgroundImage = "url('assets/img/fondo1.jpg')";
    };
    document.getElementById("btn-3").onmouseout = function() {
        document.body.style.backgroundImage = "url('assets/img/fondo1.jpg')";
    };
    document.getElementById("btn-4").onmouseout = function() {
        document.body.style.backgroundImage = "url('assets/img/fondo1.jpg')";
    };
    document.getElementById("btn-5").onmouseout = function() {
        document.body.style.backgroundImage = "url('assets/img/fondo1.jpg')";
    };
    document.getElementById("btn-6").onmouseout = function() {
        document.body.style.backgroundImage = "url('assets/img/fondo1.jpg')";
    };

}

//jugador 1

function leo1() {
    element = document.getElementById("img1");
    element.src = "assets/img/leo.png";
}

function rafa1() {
    element = document.getElementById("img1");
    element.src = "assets/img/raphael.png";
}

function migue1() {
    element = document.getElementById("img1");
    element.src = "assets/img/mikey.png";
}

function dona1() {
    element = document.getElementById("img1");
    element.src = "assets/img/donny.png";
}

//jugador 2


function leo2() {
    element = document.getElementById("img2");
    element.src = "assets/img/leo.png";
}

function rafa2() {
    element = document.getElementById("img2");
    element.src = "assets/img/raphael.png";
}

function migue2() {
    element = document.getElementById("img2");
    element.src = "assets/img/mikey.png";
}

function dona2() {
    element = document.getElementById("img2");
    element.src = "assets/img/donny.png";
}