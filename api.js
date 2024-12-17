const names = require("./names");
const sayHi = require("./sayHi");
const items = require("./alternativeExport");

sayHi(names.peter);
sayHi(names.john);
sayHi("susan");
sayHi(items.items[0]);
