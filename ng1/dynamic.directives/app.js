(function (ng) {
  'use strict';

  ng.module('dynamic', [])
    .controller('mainCtrl', [mainCtrl]);

  function mainCtrl() {
    var mainVm = this;

    mainVm.questions = [
      {
        displayType: 'multipleGuess',
        questionText: 'Buddy the Elf, what\'s your favorite color?',
        options: [
          'blue',
          'red',
          'green',
          'purply-purple'
        ]
      },
      {
        displayType: 'multipleGuess',
        questionText: 'Choose your prez',
        options: [
          'Billary',
          'Drumpf',
          'Buddy the Elf',
          'Chuck Norris'
        ]
      },
      {
        displayType: 'freetext',
        questionText: 'What\'s your name?',
        badge: 'Name',
        placeholder: 'First and Last'
      },
      {
        displayType: 'freetext',
        questionText: 'What\'s your superpower?',
        placeholder: 'invisibility, fire-breathing, infinite doughnuts?'
      }
    ];

    mainVm.message = 'Dynamic Directive Example';
  }

})(angular);

// <label>{{questionVm.questionData.questionText}}</label>
// <div class="input-group">
//   <span class="input-group-addon">{{questionVm.questionData.badge}}</span>
//   <input type="text" class="form-control" placeholder="{{questionVm.questionData.placeholder}}">
