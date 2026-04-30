// Array com todas as perguntas do quiz
const perguntas = [
  {
    pergunta: "O que significa JS em programação?",
    respostas: [
      "JavaStyle",
      "JavaScript",
      "JsonScript"
    ],
    correta: 1
  },
  {
    pergunta: "Qual comando exibe uma mensagem em alerta no navegador?",
    respostas: [
      "alert()",
      "print()",
      "msg()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual palavra é usada para declarar uma variável?",
    respostas: [
      "var",
      "loop",
      "if"
    ],
    correta: 0
  },
  {
    pergunta: "Qual símbolo é usado para comentários de uma linha?",
    respostas: [
      "##",
      "//",
      "**"
    ],
    correta: 1
  },
  {
    pergunta: "Qual estrutura é usada para tomar decisões?",
    respostas: [
      "if",
      "for",
      "while"
    ],
    correta: 0
  },
  {
    pergunta: "Qual laço repete enquanto a condição for verdadeira?",
    respostas: [
      "switch",
      "while",
      "case"
    ],
    correta: 1
  },
  {
    pergunta: "Qual operador representa igualdade estrita?",
    respostas: [
      "==",
      "===",
      "="
    ],
    correta: 1
  },
  {
    pergunta: "Qual tipo de dado representa verdadeiro ou falso?",
    respostas: [
      "Number",
      "Boolean",
      "String"
    ],
    correta: 1
  },
  {
    pergunta: "Qual método adiciona item ao final de um array?",
    respostas: [
      "push()",
      "pop()",
      "shift()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual comando imprime algo no console?",
    respostas: [
      "console.log()",
      "write.log()",
      "show.console()"
    ],
    correta: 0
  }
];

// Seleciona a div onde o quiz será exibido
const quiz = document.querySelector('#quiz');

// Seleciona o template HTML que será duplicado
const template = document.querySelector('template');


//Para cada objeto dentro do array perguntas, guarde esse objeto na variável item.
for (const item of perguntas) {

  // Clona o conteúdo do template
  const quizItem = template.content.cloneNode(true);

  // Substitui o título pela pergunta atual
  quizItem.querySelector('h3').textContent = item.pergunta;


  // Percorre cada resposta da pergunta
  for (let resposta of item.respostas) {

    // Clona o modelo de alternativa
    const dt = quizItem.querySelector('dl dt').cloneNode(true);

    // Troca o texto da alternativa
    dt.querySelector('span').textContent = resposta;

    // Adiciona a nova alternativa dentro da lista
    quizItem.querySelector('dl').appendChild(dt);
  }

  // Remove a alternativa modelo original do template
  quizItem.querySelector('dl dt').remove();

  // Adiciona a pergunta pronta na tela
  quiz.appendChild(quizItem);
}