/*
 * Modal
 * @author Sergiu Ghenciu, RUBYMAGE
 * License: Dedicated to the public domain.
 *
 */

'use strict';

angular.
    module('modal-rubymage', []).
    factory('modal', () => {
      function Modal(props) {
        const defaults = {
          autoOpen: false,
          className: 'fade-and-drop-rm',
          closeButton: true,
          el: null,
          overlay: true,
          bindEvents: true,
          pubSub: null,
        };

        function bindEvents() {
          if (closeButton) {
            closeButton.addEventListener('click', close);
          }
          if (overlay) {
            overlay.addEventListener('click', close);
          }
        }

        function onTransitionEnd(e) {
          e.target.classList.remove(options.className);
          e.target.removeEventListener(e.type, onTransitionEnd); // Self-Remove
        }

        function close() {
          if (isOpen()) {
            modal.classList.remove('open-rm');
            overlay && overlay.classList.remove('open-rm');
            modal.addEventListener(transitionEventName, onTransitionEnd);
            overlay &&
            overlay.addEventListener(transitionEventName, onTransitionEnd);
          }
        }

        function isOpen() {
          return modal.classList.contains('open-rm');
        }

        function open() {
          modal.classList.add(options.className);
          overlay && overlay.classList.add(options.className);

          resetTop();

          setTimeout(function() {
            modal.classList.add('open-rm');
            overlay && overlay.classList.add('open-rm');
          }, 0);
        }

        function resetTop() {
          const top = isAnchored ?
              options.marginTopAnchored :
              options.marginTop;
          modal.style.top = 'calc(' + window.scrollY + 'px + ' + top + ')';
        }

        function anchor() {
          isAnchored = true;
          modal.classList.add('anchored-rm');
          resetTop();
        }

        function unAnchor() {
          isAnchored = false;
          modal.classList.remove('anchored-rm');
          resetTop();
        }

        function buildOut() {
          modal = options.el;
          modal.classList.add('modal-rm');
          if (!options.marginTop) {
            options.marginTop = window.getComputedStyle(modal).top || '10%';
          } // from css
          if (!options.marginTopAnchored) {
            options.marginTopAnchored = '0px';
          }

          // If closeButton option is true, add a close button
          if (options.closeButton === true) {
            closeButton = document.createElement('button');
            closeButton.className = 'close-rm close-button';
            modal.appendChild(closeButton);
          }

          // If overlay is true, add one
          if (options.overlay === true) {
            overlay = document.createElement('div');
            overlay.className = 'overlay-rm';
            // modal.parentNode.insertBefore(overlay, modal);
            document.querySelector('body').appendChild(overlay);
          }
        }

        function transitionSelect() {
          const el = document.createElement('div');
          if (el.style.WebkitTransition) {
            return 'webkitTransitionEnd';
          }
          if (el.style.OTransition) {
            return 'oTransitionEnd';
          }
          return 'transitionend';
        }

        function changeClassName(newClass) {
          const oldClass = options.className;
          options.className = newClass;

          if (isOpen()) {
            modal.classList.add('transition-off');
            modal.classList.add(newClass);
            if (overlay) {
              overlay.classList.add(newClass);
            }
            if (oldClass !== newClass) {
              modal.classList.remove(oldClass);
              if (overlay) {
                overlay.classList.remove(oldClass);
              }
            }
            setTimeout(function() {
              modal.classList.remove('transition-off');
            }, 100);
          }
        }

        function destroy() {
          close();
          overlay && overlay.remove();
        }

        // init
        let modal = null;
        let overlay = null;
        let closeButton = null;
        const transitionEventName = transitionSelect();
        let isAnchored = false;
        let options = Object.assign({}, defaults, props);
        buildOut();
        if (options.bindEvents === true) {
          bindEvents();
        }
        if (options.autoOpen === true) {
          open();
        }

        return {
          overlay: overlay,
          closeButton: closeButton,
          isOpen: isOpen,
          open: open,
          close: close,
          anchor: anchor,
          unAnchor: unAnchor,
          resetTop: resetTop,
          changeClassName: changeClassName,
          options: options,
          destroy: destroy,
        };
      }

      return Modal;
    });
