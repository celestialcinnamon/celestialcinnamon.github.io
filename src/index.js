particlesJS.load("particles-js", "/src/particles.json");
particlesJS.load("particles-1-js", "/src/particles.1.json");

(function() {
    const canvas = document.getElementById('decoration')
    const ctx = canvas.getContext('2d');

    console.log("Setting color")
    console.log("Setting color")
    ctx.beginPath();
    ctx.strokeStyle = "#fff"
    ctx.moveTo(10, 0)
    ctx.lineTo(30, 50)
    ctx.stroke();
    ctx.closePath()
})();