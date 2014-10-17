(function() {
  var union = function union(a, b) {
    var c = new Set(a);
    for (var $__0 = b[Symbol.iterator](),
        $__1; !($__1 = $__0.next()).done; ) {
      var e = $__1.value;
      {
        c.add(e);
      }
    }
    return c;
  };
  var complementation = function complementation(a, b) {
    var c = new Set(a);
    for (var $__0 = b[Symbol.iterator](),
        $__1; !($__1 = $__0.next()).done; ) {
      var e = $__1.value;
      {
        c.delete(e);
      }
    }
    return c;
  };
  var intersection = function intersection(a, b) {
    return complementation(a, complementation(a, b));
  };
  module.exports = {
    union: union,
    u: union,
    intersection: intersection,
    n: intersection,
    complementation: complementation,
    c: complementation
  };
}).call(this);
