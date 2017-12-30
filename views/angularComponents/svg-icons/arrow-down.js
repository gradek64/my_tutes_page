/**
 * Created by Sergiu Ghenciu on 22/11/2017
 */

'use strict';

angular.
    module('see').
    directive('svgArrowDown', () => {
      return {
        scope: {
          opts: '=opts',
        },
        template: '<svg viewBox="0 0 24 24" data-ng-attr-width="{{opts.width || 24}}" data-ng-attr-height="{{opts.height || 24}}" xmlns="http://www.w3.org/2000/svg"><g><path transform="rotate(270 11.951939582824707,11.994384765625)" d="m17.196931,22.486418l-10.489989,-10.491632l10.489989,-10.492434" fill-opacity="null" stroke-width="0.5" stroke="{{opts.color}}" fill="none"></path></g></svg>',
      };
    });
