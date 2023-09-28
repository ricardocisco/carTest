function toggleMenu() {
    var body = document.querySelector('body');
    body.classList.toggle('menu-opened');
}

var slider = document.getElementById("mySlider");
var sliderValue = document.getElementById("sliderValue");

slider.oninput = function() {
    sliderValue.textContent = this.value;
}