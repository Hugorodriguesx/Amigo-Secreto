
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "" || amigos.includes(nome)) {
        alert("Nome inválido ou já adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;

        const NomeAdicionadosNaTela = document.createElement(amigo);
        
        
        item.appendChild(NomeAdicionadosNaTela);
        lista.appendChild(item);
    }); // Adiciona os nomes adicionados na lista na Tela
}