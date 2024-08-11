document.addEventListener("DOMContentLoaded", function () {
    const redSlider = document.getElementById("red-slider");
    const greenSlider = document.getElementById("green-slider");
    const blueSlider = document.getElementById("blue-slider");

    function updateBackgroundColor() {
        const redValue = redSlider.value;
        const greenValue = greenSlider.value;
        const blueValue = blueSlider.value;

        const backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        document.body.style.backgroundColor = backgroundColor;
    }

    redSlider.addEventListener("input", updateBackgroundColor);
    greenSlider.addEventListener("input", updateBackgroundColor);
    blueSlider.addEventListener("input", updateBackgroundColor);

    // Initial update
    updateBackgroundColor();
});
