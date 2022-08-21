const user = document.getElementById("user");
const password = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
form.addEventListener("submit", e=>{
    e.preventDefault();
	let regexNombre = /^[A-Za-z\s]{3,25}$/
    var warnings = ""
    var entrar = false;
    parrafo.innerHTML = ""
    if(user.value != "admin"){
        warnings += `Usuario o contraseña no es correcto.<br>`
        entrar = true
    }else if(password.value != "admin"){
        warnings += `Usuario o contraseña no es correcto.<br>`
        entrar = true
    }
	
    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        window.location.href = "HTML/inicio.html";
		console.log(user.value +" " +password.value)
		form.reset();
		
	}
});    

