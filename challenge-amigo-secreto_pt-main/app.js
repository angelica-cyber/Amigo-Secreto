//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = []

// Função para adicionar amigo à lista
function adicionarAmigo() {
  const input = document.getElementById("amigo")
  const nome = input.value.trim()

  if (nome === "") {
    alert("Por favor, insira um nome.")
    return
  }

  amigos.push(nome)
  input.value = ""
  atualizarLista()
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  const lista = document.getElementById("listaAmigos")
  lista.innerHTML = ""

  amigos.forEach((amigo) => {
    const item = document.createElement("li")
    item.textContent = amigo
    lista.appendChild(item)
  })
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia. Adicione amigos antes de sortear.")
    return
  }

  const indice = Math.floor(Math.random() * amigos.length)
  const sorteado = amigos[indice]

  const resultado = document.getElementById("resultado")
  resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${sorteado}</strong></li>`
}

