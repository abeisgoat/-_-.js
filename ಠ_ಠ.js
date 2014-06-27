(function (self) {
  "use strict";
  if ((typeof console !== 'undefined') && (typeof console.log === 'function')) {
    var log = window.console.log;
    self['ಠ_ಠ'] = Function.prototype.bind.call(log, console);
    window.console.log = undefined;
  } else {
    self['ಠ_ಠ'] = function () {}
  }
}(typeof window !== 'undefined'? window : typeof global !== 'undefined' ? global : self));
