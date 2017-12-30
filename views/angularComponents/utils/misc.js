/**
 * Created by Sergiu Ghenciu on 08/12/2017
 */

'use strict';

angular.module('utils.misc', []).
    factory('misc', function() {
      const ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

      const flattenArr = (arr) => arr.reduce((a, e) => a.concat(e));

      const union = (arr) =>
          Object.keys(arr.reduce((a, e) => {
            a[e] = true;
            return a;
          }, {}));

      const intersection = (a, b) => a.filter((e) => b.indexOf(e) > -1);

      const difference = (a, b) => a.filter((e) => b.indexOf(e) === -1);

      const intersectionOfAll = (arrOfArrs) => arrOfArrs.reduce(intersection);

      const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) +
          min);

      const swap = (arr, i, j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr;
      };

      const shuffle = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          swap(arr, i, rand(i, arr.length - 1));
        }
        return arr;
      };

      return {
        ucFirst, flattenArr, union, intersection, difference, intersectionOfAll,
        rand, swap, shuffle,
      };
    });
