/*
Directive for adding other directives and their controllers dynamically. The
directive you want to add must be enabled to be added as an attribute.

Only two attributes are necessary to use this directive: directive-name and
controller-name. In case it's not clear, directive-name is the name of the
directive you want to add, and controller-name is the name of the controller you
want to set for that directive. You would also add any other attributes
necessary for the directive specified by directive-name.

Only down side is that transclusion does not seem to work when adding directives
like this.

The use case for this would be when you need to add multiple directives at the
same time, based on incoming data and have to rely on interpolated values.

example:

  <directive ng-repeat="thing in vm.stuff"
      directive-name="{{thing.directiveName}}"
      controller-name="{{thing.controllerName}}"
      data="thing.data" title="thing.name">
  </directive>

  becomes:

  <directive ng-repeat="thing in vm.stuff"
    ...
    >

    <template for the directive gets put in here>
  </directive>

*/

(function (ng) {
  'use strict';

  ng.module('dynamic').directive('directive', DynamicDirective);

  /* @ngInject */
  function DynamicDirective($compile, $log) {
    return {
      restrict: 'E',
      link: setDirective
    };

    /* adds specified directive as attribute with its value being the name of
     the controller it should have:
      <directive>
        ...
        bobs-cool-directive="bobsCoolCtrl"
        ...
      </directive>
    */
    function setDirective(scope, elem, attrs) {
      var directiveName = attrs.directiveName,
          directiveNameNormalized = attrs.$normalize(directiveName);

      // add the diretive attribute if it hasnt already been added
      if(!attrs[directiveNameNormalized]) {
        var controllerName = attrs.controllerName;

        elem.attr(directiveName, controllerName);
        $compile(elem)(scope);
      }
    }
  }

})(angular);
