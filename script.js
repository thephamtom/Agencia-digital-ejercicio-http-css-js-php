const formulario = document.getElementById("formulario-contacto");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();

    // esta condición quedó descartada porque era muy básica
    // if (nombre == "") {
    //     alert("falta algo");
    // }

    if (nombre === "" || correo === "") {
        mensaje.textContent = "Debes completar todos los campos.";
        mensaje.style.color = "red";
        return;
    }

    mensaje.textContent = `Formulario enviado correctamente. Gracias, ${nombre}.`;
    mensaje.style.color = "green";

    formulario.reset();
});