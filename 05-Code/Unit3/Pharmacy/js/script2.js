const codigo = document.getElementById("codigo");
const descripcion = document.getElementById("descripcion");
const medidas = document.getElementById("medidas");
const cantidad = document.getElementById("cantidad");
const costo = document.getElementById("costo");
const estado = document.getElementById("estado");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

class producto {
    constructor(codigo, descripcion, medidas, cantidad, costo, estado) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.medidas = medidas;
        this.cantidad = cantidad;
        this.costo = costo;
        this.estado = estado;
    }

}
var productos = new Array();
form.addEventListener("submit", e => {
    e.preventDefault();
    let regexNombre = /^[A-Za-z\s]{3,25}$/
    var warnings = ""
    var entrar = false;
    parrafo.innerHTML = ""
    if (codigo.value.length < 1) {
        warnings += `codigo no valido.<br>`
        entrar = true
    }
    if (descripcion.value.length < 1) {
        warnings += `descripcion no valida.<br>`
        entrar = true
    }
    if (medidas.value != "g") {
        if (medidas.value != "ml") {
            if (medidas.value != "mg") {
                warnings += `medida no valida.<br>`
                entrar = true
            }
        }
    }
    if (cantidad.value < 0) {
        warnings += `cantidad no valida.<br>`
        entrar = true
    }
    if (costo.value < 0) {
        warnings += `costo no valido.<br>`
        entrar = true
    }
    if (estado.value != "activo") {
        if (estado.value != "inactivo") {
            warnings += `estado no valido.<br>`
            entrar = true
        }
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";

        var producto1 = new producto(codigo.value.toString(), descripcion.value.toString(), medidas.value.toString(), cantidad.value.toString(), costo.value.toString(), estado.value.toString());
        productos.push(producto1);
        var imprimirAlumnos = "";
        console.log(producto1);
        var tablaDatos = document.getElementById("tablaDatos");
        var newFiladeTabla = tablaDatos.insertRow(-1);
        newFiladeTabla.insertCell(0).textContent = producto1.codigo;
        newFiladeTabla.insertCell(1).textContent = producto1.descripcion;
        newFiladeTabla.insertCell(2).textContent = producto1.medidas;
        newFiladeTabla.insertCell(3).textContent = producto1.cantidad;
        newFiladeTabla.insertCell(4).textContent = producto1.costo;
        newFiladeTabla.insertCell(5).textContent = producto1.estado;
        form.reset();

    }
}); // JavaScript Document