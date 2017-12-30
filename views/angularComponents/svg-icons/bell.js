/**
 * Created by Sergiu Ghenciu on 22/11/2017
 */

'use strict';

angular.
    module('see').
    directive('svgBell', () => {
      return {
        scope: {
          opts: '=opts',
        },
        template: '<svg viewbox="0 0 23.999999999999996 23.999999999999996" data-ng-attr-width="{{opts.width || 24}}" data-ng-attr-height="{{opts.height || 24}}" xmlns="http://www.w3.org/2000/svg"><g><path stroke="{{opts.color}}" fill="none" stroke-width="0.5" d="m12,22c1.1,0 2,-0.9 2,-2l-4,0c0,1.1 0.9,2 2,2zm6,-6l0,-5c0,-3.07 -1.63,-5.64 -4.5,-6.32l0,-0.68c0,-0.83 -0.67,-1.5 -1.5,-1.5s-1.5,0.67 -1.5,1.5l0,0.68c-2.86,0.68 -4.5,3.24 -4.5,6.32l0,5l-2,2l0,1l16,0l0,-1l-2,-2z"></path></g></svg>',
      };
    });
