var Localize = require('localize');
 
var myLocalize = new Localize({
    "Testing...": {
        "es": "Pruebas...",
        "sr": "тестирање..."
    },
    "Substitution: $[1]": {
        "es": "Sustitución: $[1]",
        "sr": "замена: $[1]"
    }
});
 
console.log(myLocalize.translate("Testing...")); // Testing... 
console.log(myLocalize.translate("Substitution: $[1]", 5)); // Substitution: 5 
 
myLocalize.setLocale("es");
console.log(myLocalize.translate("Testing...")); // Pruebas... 
 
myLocalize.setLocale("sr");
console.log(myLocalize.translate("Substitution: $[1]", 5)); // замена: 5 
