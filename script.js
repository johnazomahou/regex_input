// Notre code JS
var monformulaire = document.querySelector(".monformulaire");
console.log(monformulaire);
console.log(monformulaire.password);
monformulaire.password.oninput = () => {
  console.log(monformulaire.password.value);

  var blocmessage = document.querySelector(".message");
  // console.log(blocmessage)
  blocmessage.style.display = "block";
  var text = document.querySelector(".text");
  var password = monformulaire.password.value;
  var regexUppercase=/[A-Z]/;
  var regexChiffre=/\d/;
 switch (true) {
    case !regexUppercase.test(password):
        blocmessage.classList.remove("succes-message");
        blocmessage.classList.add("error-message");
        text.textContent="Au moins une majuscule";
        break;
        case !regexChiffre.test(password):
            blocmessage.classList.remove("succes-message");
            blocmessage.classList.add("error-message");
            text.textContent="Au moins une chiffre";
        break;
        case password.length<8:
            blocmessage.classList.remove("succes-message");
            blocmessage.classList.add("error-message");
            text.textContent="Au moins 8 caractere";
        break;
 
    default:
        blocmessage.classList.add("succes-message");
        blocmessage.classList.remove("error-message");
        text.textContent="Succes";
        break;
 }
};