// Utilizado a documentação do Mozilla e usando interpolação para impressão do horário e data na "DIV RELOGIO".
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

(function criarRelogio(){
    var relogioEl = document.getElementsByClassName("relogio")[0];
    var data = new Date();
    var calendario = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`; //recebe o calendário.

    var interval = setInterval(function() {
        var data = new Date();
        var relogio = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`; //recebe  as horas.
        
        relogioEl.innerText = `${calendario} ${relogio}`; // informa a data e as horas
    }, 1000); // após a virgula informa a quantidade de tempo que vai ser atualizado o Relógio.   
})()
