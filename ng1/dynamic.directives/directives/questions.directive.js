/*
Directive for all question display types. Just need to define the template and
controller for each one. In each template, questionVm will be the name of the
reference to the controller.
*/

(function (ng) {
  'use strict';

  ng.module('dynamic')
    .directive('question', Question);

  /* @ngInject */
  function Question($log, $templateRequest, $compile) {
    return {
      restrict:'A',
      controller: '@',
      controllerAs: 'questionVm',
      bindToController: true,
      scope: {
          questionData: '='
      },
      link: setTemplate
    };

    // dynamically sets the proper template for the directive
    function setTemplate(scope, elem, attrs) {
      $templateRequest(getTemplateUrl(attrs.displayType))
        .then(function (html) {

          var template = angular.element(html);
          elem.append(template);

          $compile(template)(scope);
        });
    }

    // gets templateUrl according to the displayType of the question
    function getTemplateUrl(displayType) {
      if (displayType) {
        return 'directives/' + displayType + '.directive.html';
      } else {
        throw 'No display type specified for question display directive';
      }
    }
  }

})(angular);
