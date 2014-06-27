(function (self) {
  "use strict";
  if ((typeof console !== 'undefined') && (typeof console.warn === 'function')) {
    var warn = window.console.warn;
    self['ಠ_ಠ'] = Function.prototype.bind.call(warn, console);
    window.console.warn = undefined;
  } else {
    self['ಠ_ಠ'] = function () {}
  }
}(typeof window !== 'undefined'? window : typeof global !== 'undefined' ? global : self));
