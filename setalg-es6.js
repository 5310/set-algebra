/*jshint esnext: true*/

(function () {



    var union = function union( a, b ) {
        var c = new Set( a );
        for ( var e of b ) {
            c.add(e);
        }
        return c;
    };

    var complementation = function complementation( a, b ) {
        var c = new Set( a );
        for ( var e of b ) {
            c.delete(e);
        }
        return c;
    };

    var intersection = function intersection( a, b ) {
        return complementation( a, complementation( a, b ) );
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
