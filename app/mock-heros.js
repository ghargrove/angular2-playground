System.register(['./hero'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var hero_1;
    var HEROS;
    return {
        setters:[
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            // Create an array of heros
            exports_1("HEROS", HEROS = [
                new hero_1.Hero(11, 'Mr. Nice', 'Something'),
                new hero_1.Hero(12, 'Narco', 'Something'),
                new hero_1.Hero(13, 'Bombasto', 'Something'),
                new hero_1.Hero(14, 'Celeritas', 'Something'),
                new hero_1.Hero(15, 'Magneta', 'Something'),
                new hero_1.Hero(16, 'Rubberman', 'Something'),
                new hero_1.Hero(17, 'Dynama', 'Something'),
                new hero_1.Hero(18, 'Dr. IQ', 'Something'),
                new hero_1.Hero(19, 'Magma', 'Something'),
                new hero_1.Hero(20, 'Tornado', 'Something')
            ]);
        }
    }
});
//# sourceMappingURL=mock-heros.js.map