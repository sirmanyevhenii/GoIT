// Создать объект с методами, которые будут динамически генерировать DOM вот такой страницы. 
// Это будет тест, который мы будем разрабатывать в следующих заданиях. Сейчас вам нужно только 
// динамически создать html, методы должны храниться в одном объекте. Для того чтоб страница 
// выглядела красиво можете использовать Bootstrap и создавать DOM-элементы с готовыми бутстраповскими 
// классами. Изначально на странице должен быть только <body>, вызывая методы объекта нужно создать dom-элементы.

'use strict';

var test = {
  data: {
    title: 'Тест по програмуванню',
    questions: [
      {
        title: 'Питання №1',
        answers: ['Варіант відповіді 1', 'Варіант відповіді 2', 'Варіант відповіді 3']
      },
      {
        title: 'Питання №2',
        answers: ['Варіант відповіді 1', 'Варіант відповіді 2', 'Варіант відповіді 3']
      },
      {
        title: 'Питання №3',
        answers: ['Варіант відповіді 1', 'Варіант відповіді 1', 'Варіант відповіді 1']
      }
    ]
  },

  createTest: function (){
  	var testRoot = document.querySelector('#root');
    // created container for test
    var container = document.createElement('div');
    testRoot.classList.add('test-container');
    testRoot.appendChild(container);
    // created title for test
    var testTitle = document.createElement('h2');
    testTitle.classList.add('test-title');
    testTitle.innerHTML = this.data.title;
    container.appendChild(testTitle);
    // created function for questions and answers
    for (var q = 0; q < this.data.questions.length; q++) {
      var questionBox = document.createElement('div');
      container.appendChild(questionBox);
      var questionsText = document.createElement('h3');
      questionsText.classList.add('questions-title');
      questionsText.innerHTML = this.data.questions[q].title;
      questionBox.appendChild(questionsText);
      var answersBox = document.createElement('div');
      answersBox.classList.add('answers-container');
      questionBox.appendChild(answersBox);
      for (var a = 0; a < 3; a++) {
        var lable = document.createElement('lable');
        lable.classList.add('answers-lable');
        var input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        lable.appendChild(input);
        var inputText = document.createTextNode(this.data.questions[q].answers[a]);
        lable.appendChild(inputText);
        answersBox.appendChild(lable);
      }
    }
    // created button 
    var buttonBox = document.createElement('div');
    buttonBox.classList.add('button-box');
    container.appendChild(buttonBox);
    var button = document.createElement('button');
    button.classList.add('test-button');
    var buttonText = document.createTextNode('Перевірити мої результати');
    button.appendChild(buttonText);
    buttonBox.appendChild(button);
  }
};

test.createTest();
console.log(test);