document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('convert').addEventListener('click', function(e) {
        // e.preventDefault();
        convert()
    });
})

function convert() {
    var fahrenheit = document.getElementById('temp').value;
    var celsius = (fahrenheit - 32) * (5/9);
    document.getElementById('display').textContent = celsius;
}
