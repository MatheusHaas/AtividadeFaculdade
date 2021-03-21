function ValidaFormulario () {

    var status = 1;
    var nomeCad = document.getElementById("nome").value;
    var emailCad = document.getElementById("email").value;
    var idadeCad = document.getElementById("idade").value;

    if (nomeCad === ""){
        alert("Por favor, preencha o Nome");
        status = 0;
    }else if (emailCad === ""){
        alert("Por favor, preencha o Email");
        status = 0;
    }else if (idadeCad === ""){
        alert("Por favor, preencha a Idade");
        status = 0;
    }else if (status === 1) {
        alert("Formulário Validado com Sucesso.");
    }
}
function AoColar(){
    alert("Por favor, não copie e cole!");
    return false;
}

function ApenasNumeros(evt) {
    var teclado = (evt.which) ? evt.which : evt.keyCode;
    if ((teclado < 48 || teclado > 57)){
        return false;
    }
    return true;
}