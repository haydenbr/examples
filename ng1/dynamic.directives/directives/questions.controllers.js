(function (ng) {
  'use strict';

  ng.module('dynamic')
    .controller('multipleGuessCtrl', MultipleGuessCtrl)
    .controller('freetextCtrl', FreetextCtrl)
    ;

    function MultipleGuessCtrl() {
      var questionVm = this;

      // do stuff and handle inputs and such
    }

    function FreetextCtrl() {
      var questionVm = this;

      // do stuff and handle inputs and such
    }

})(angular);
