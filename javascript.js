function Enviar () {
    var nome = document.getElementById("nomeid")

    if (nome.value != "") {
        window.alert('Obrigada Sr (a) ' + nome.value + '! Os seus dados foram encaminhados com sucesso!')
    }
}