const project_button = document.querySelector("#project");
const hass_button = document.querySelector(".hass_button");

project_button.onclick = gotoproject;
hass_button.onclick = gotohass;

function gotoproject(){
    window.location.href = "projects.html";
}

function gotohass(){
    window.location.href = "index.html";
}
