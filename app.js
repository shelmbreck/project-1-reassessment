fDegrees = 32
cDegrees = '0.00C'

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('convert').addEventListener('click', function() {
        convert()
    });
})

function convert() {
    document.getElementById('temp').textContent = fDegrees
    document.getElementById('result').textContent = "Results: " + cDegrees
    var fahrenheit = document.getElementById('temp').value;
    var celsius = ((fahrenheit - 32) * (5/9)).toFixed(2)
    document.getElementById('result').textContent = celsius;
}
