
const botonTema = document.getElementById("tema-btn");

if (localStorage.getItem("tema") === "oscuro") {
    document.body.classList.add("modo-oscuro");
}

function actualizarBoton() {
    if (document.body.classList.contains("modo-oscuro")) {
        botonTema.textContent = "☀ Modo claro";
    } else {
        botonTema.textContent = "☾ Modo oscuro";
    }
}

actualizarBoton();

botonTema.addEventListener("click", function () {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        localStorage.setItem("tema", "oscuro");
    } else {
        localStorage.setItem("tema", "claro");
    }

    actualizarBoton();
});
