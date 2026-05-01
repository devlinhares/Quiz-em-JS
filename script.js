//========== ARRAY DE PERGUNTAS =========
const perguntas = [
  {
    pergunta: "O que significa JS em programação?",
    respostas: ["JavaStyle", "JavaScript", "JsonScript"],
    correta: 1  // índice da resposta certa (começa em 0)
  },
  {
    pergunta: "Qual comando exibe uma mensagem em alerta no navegador?",
    respostas: ["alert()", "print()", "msg()"],
    correta: 0
  },
  {
    pergunta: "Qual palavra é usada para declarar uma variável?",
    respostas: ["var", "loop", "if"],
    correta: 0
  },
  {
    pergunta: "Qual símbolo é usado para comentários de uma linha?",
    respostas: ["##", "//", "**"],
    correta: 1
  },
  {
    pergunta: "Qual estrutura é usada para tomar decisões?",
    respostas: ["if", "for", "while"],
    correta: 0
  },
  {
    pergunta: "Qual laço repete enquanto a condição for verdadeira?",
    respostas: ["switch", "while", "case"],
    correta: 1
  },
  {
    pergunta: "Qual operador representa igualdade estrita?",
    respostas: ["==", "===", "="],
    correta: 1
  },
  {
    pergunta: "Qual tipo de dado representa verdadeiro ou falso?",
    respostas: ["Number", "Boolean", "String"],
    correta: 1
  },
  {
    pergunta: "Qual método adiciona item ao final de um array?",
    respostas: ["push()", "pop()", "shift()"],
    correta: 0
  },
  {
    pergunta: "Qual comando imprime algo no console?",
    respostas: ["console.log()", "write.log()", "show.console()"],
    correta: 0
  }
];

// ========== ELEMENTOS DO DOM ==========
const quiz = document.querySelector('#quiz');           // onde as perguntas vão aparecer
const template = document.querySelector('template');    // molde de cada pergunta

const corretas = new Set()                              // guarda as perguntas que o usuário acertou
const totalDePerguntas = perguntas.length               // total = 10
const mostrarTotal = document.querySelector('#acertos span')  // elemento que mostra o placar

// ========== CRIAÇÃO DAS PERGUNTAS ==========
for (const item of perguntas) {                         // percorre cada pergunta do array

  const quizItem = template.content.cloneNode(true);    // clona o molde da pergunta

  quizItem.querySelector('h3').textContent = item.pergunta;  // coloca o texto da pergunta

  // Cria as alternativas de resposta
  for (let resposta of item.respostas) {                // percorre cada resposta

    const dt = quizItem.querySelector('dl dt').cloneNode(true);  // clona o modelo de alternativa

    dt.querySelector('span').textContent = resposta;    // coloca o texto da alternativa

    // Configura o botão de rádio
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))  // nome único por pergunta
    dt.querySelector('input').value = item.respostas.indexOf(resposta)  // value = 0, 1 ou 2
    
    // Evento disparado quando o usuário seleciona uma resposta
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta  // verifica se acertou
      corretas.delete(item)                                   // remove a pergunta do set de acertos
      if(estaCorreta) {
        corretas.add(item)                                    // adiciona de volta se acertou
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas  // atualiza placar
    }

    quizItem.querySelector('dl').appendChild(dt);   // adiciona alternativa na lista
  }

  quizItem.querySelector('dl dt').remove();   // remove o modelo de alternativa original

  quiz.appendChild(quizItem);  // coloca a pergunta pronta na tela
}