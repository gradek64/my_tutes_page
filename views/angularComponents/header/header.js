/**
 * Created by Sergiu Ghenciu on 08/12/2017
 */

'use strict';

angular.
    module('myTutes.header', ['utils.events', 'utils.CONSTANTS']).
    directive('myTutesHeader', [
      'events', 'CONSTANTS.EVENTS', (events, EVENTS) => {
        const link = (scope, elm, attrs) => {
          scope.onHamburgerClick = ($event) => {
            $event.preventDefault();
            events.emit(EVENTS.HAMBURGER_MENU_CLICK);
          };

          scope.onBellClick = ($event) => {
            $event.preventDefault();
            events.emit(EVENTS.BELL_CLICK);
          };
        };
        return {
          restrict: 'EA',
          scope: {
            opts: '=opts',
          },
          templateUrl: 'angularComponents/header/header.html',
          link: link,
        };
      }]);
