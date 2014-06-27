(function (self) {
  "use strict";
  if ((typeof console !== 'undefined') && (typeof console.log === 'function')) {
    self['ಠ_ಠ'] = Function.prototype.bind.call(console.log, console);
  } else {
    self['ಠ_ಠ'] = function () {}
  }
}(typeof window !== 'undefined'? window : typeof global !== 'undefined' ? global : self));
