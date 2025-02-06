document.addEventListener("DOMContentLoaded", function () {
    const slogan = document.getElementById("slogan");
    const frases = ["Innovamos tu futuro.", "Tu éxito, nuestra misión.", "Calidad y compromiso."];
    let index = 0;
    let charIndex = 0;
    let escribiendo = true;

    function escribirTexto() {
        if (charIndex < frases[index].length && escribiendo) {
            slogan.textContent += frases[index][charIndex];
            charIndex++;
            setTimeout(escribirTexto, 100);
        } else {
            escribiendo = false;
            setTimeout(borrarTexto, 1500);
        }
    }

    function borrarTexto() {
        if (charIndex > 0) {
            slogan.textContent = slogan.textContent.slice(0, -1);
            charIndex--;
            setTimeout(borrarTexto, 50);
        } else {
            escribiendo = true;
            index = (index + 1) % frases.length;
            setTimeout(escribirTexto, 500);
        }
    }

    escribirTexto();
});
