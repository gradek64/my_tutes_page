/**
 * Created by Sergiu Ghenciu on 22/11/2017
 */

'use strict';

angular.
    module('see').
    directive('svgMagnifyingGlass', () => {
      return {
        scope: {
          opts: '=opts',
        },
        template: '<svg viewBox="0 0 24.000000000000004 24.000000000000004" data-ng-attr-width="{{opts.width || 24}}" data-ng-attr-height="{{opts.height || 24}}" xmlns="http://www.w3.org/2000/svg"><g><ellipse stroke-width="0.5" transform="rotate(3 10.090603828430257,9.683909416198727)" stroke="{{opts.color}}" ry="8.369066" rx="8" id="svg_15" cy="9.683909" cx="10.090604" fill="none"></ellipse><rect stroke="{{opts.color}}" transform="rotate(-44.651065826416016 20.001754760742184,19.88848876953125) " id="svg_16" height="8.113637" width="1.790591" y="15.83167" x="19.106459" stroke-width="0.5" fill="none"></rect><rect stroke="{{opts.color}}" transform="rotate(-44.651065826416016 16.393535614013672,16.314237594604492) " id="svg_17" height="1.937527" width="1.000266" y="15.345474" x="15.893403" stroke-width="0.5" fill="none"></rect></g></svg>',
      };
    });
