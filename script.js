function enviarMensagem() {
    let input = document.querySelector(".msg");
    let secao = document.querySelector(".historico"); 
    if (input.value.trim() === "") {
        alert("Por favor, insira uma mensagem.");
        return;
    }

    let corpo = document.createElement("div");
    let msg = document.createElement("p");
    let bots = document.createElement("div");
    let edit = document.createElement("input");
    let exclu = document.createElement("input");

    msg.innerText = input.value;

    corpo.classList.add("conjunto");
    msg.classList.add("caixa");
    bots.classList.add("bots");
    edit.classList.add("edit");
    exclu.classList.add("exclude");

    edit.type = "button";
    edit.value = "Editar";
    exclu.type = "button";
    exclu.value = "Excluir";

    edit.addEventListener("click", () => editarMensagem(msg));
    exclu.addEventListener("click", () => excluirMensagem(corpo));

    bots.append(edit);
    bots.append(exclu);
    corpo.append(msg);
    corpo.append(bots);
    secao.append(corpo);

    input.value = "";
}

function editarMensagem(msgElement) {
    let novaMensagem = prompt("Edite sua mensagem:", msgElement.innerText);
    if (novaMensagem !== null && novaMensagem.trim() !== "") {
        msgElement.innerText = novaMensagem;
    }
}

function excluirMensagem(mensagemElement) {
    mensagemElement.remove();
}

document.querySelector(".send").addEventListener("click", enviarMensagem);
