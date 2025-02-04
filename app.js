
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

    // Embaralha a lista
    for (let i = sorteio.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sorteio[i], sorteio[j]] = [sorteio[j], sorteio[i]];
    }

    // Verifica se há alguém se sorteando e ajusta se necessário
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === sorteio[i]) { 
            // Se alguém se sorteou, troca com o próximo (ou com o primeiro se for o último da lista)
            const swapIndex = (i === amigos.length - 1) ? 0 : i + 1;
            [sorteio[i], sorteio[swapIndex]] = [sorteio[swapIndex], sorteio[i]];
        }
    }

    // Exibir os pares sorteados
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    amigos.forEach((amigo, i) => {
        const item = document.createElement("li");
        item.textContent = `${amigo} -> ${sorteio[i]}`;
        listaResultado.appendChild(item);
    });
}