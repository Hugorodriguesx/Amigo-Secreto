
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

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos.");
        return;
    }

    let sorteio = [...amigos]; // Copia a lista original
    let resultado = [];

    amigos.forEach(amigo => {
        let indice;
        do {
            indice = Math.floor(Math.random() * sorteio.length);
        } while (sorteio[indice] === amigo); // Evita que a pessoa se sorteie

        resultado.push(`${amigo} -> ${sorteio[indice]}`);
        sorteio.splice(indice, 1); // Remove o sorteado da lista
    });

    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpa o resultado anterior
    resultado.forEach(par => {
        const item = document.createElement("li");
        item.textContent = par;
        listaResultado.appendChild(item);
    });
}