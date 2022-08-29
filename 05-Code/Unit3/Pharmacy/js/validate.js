var expressions = {
	full_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  address: /^[a-zA-Z0-9\s]{1,40}$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,10}$/,
  priceBox: /^\d{2,6}$/,
  age: /^\d{0-9}$/,
};

function validateName() {
  var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
  var full_nameName = document.getElementById("full_name");
    if (!expRegName.exec(full_nameName.value)) {
      alert("En nombre escriba solo letras");
      return false;
  } else {
      return true;
  }
}

function validateAddress() {
  var expReg = /^[a-zA-Z0-9-]$/;
  var addressName = document.getElementById("address");
    if (!expReg.exec(addressName.value)) {
      alert("Direccion Invalida");
      return false;
  } else {
      return true;
  }
}

function validatePhone() {
  if(isNaN(document.getElementById('phone').value)){ 
      alert("En telefono escriba solo numeros");
      return false; 
  } else {
    return true;
  }
}

function validatePriceBox() {
  if(isNaN(document.getElementById('priceBox').value)){ 
      alert("Escriba solo numeros");
      return false; 
  } else {
    return true;
  }
}

function validateAge(age) {
  var ageName = document.getElementById('age').value;
  if(!(expressions.age).test(ageName)){
    windows.alert("Solo numeros positivos");
    return false;
  } else {
    return true;
  } 
}

function validatePassword() {
  var passwordName = document.getElementById('password').value;
  if(!(expressions.password).test(passwordName)){
    windows.alert("Only 12 digits");
    return false;
  } else {
    return true;
  }  
}
