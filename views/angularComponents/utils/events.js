/**
 * Created by Sergiu Ghenciu on 08/12/2017
 */

'use strict';

angular.
    module('utils.events', []).
    factory('events', () => {
      return {
        events: {},

        on: function(id, callback) {
          if (!callback || typeof callback !== 'function') {
            console.warn(
              'You must pass a function as the second argument to events.on()');
          }

          if (this.events[id] === undefined) {
            this.events[id] = [];
          }
          this.events[id].push(callback);
        },

        off: function(id, callback) {
          if (this.events[id]) {
            for (let i = 0; i < this.events[id].length; i++) {
              if (this.events[id][i] === callback) {
                this.events[id].splice(i, 1);
                break;
              }
            }
            ;
          }
        },

        emit: function(id, payload) {
          if (this.events[id] && this.events[id].length) {
            this.events[id].forEach((callback) => callback(payload));
          }
        },
      };
    });

// const emitFactory = (event, payload) => {
//   return () => {
//     events.emit(event, payload);
//   };
// };
