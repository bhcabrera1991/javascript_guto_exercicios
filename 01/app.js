function fnCadastrar(){
    // criar variaveis
    //pegar o conteudo digitado nos campos 
    //mostrar com uma mensagem amigavel as informações
    // limpar os campos

    let nome ="", idade=0
    nome = document.getElementById("nome").value
    idade = document.getElementById("idade").value
    document.getElementById("resultado").innerText =`Ola seu nome é ${nome} e sua idade é ${idade}`
    document.getElementById("nome").value=""
    document.getElementById("idade").value=""
}