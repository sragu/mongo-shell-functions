//= ../vendor/lodash/lodash.compat.js

// include any local library from ../lib
//= ../lib/common_functions.js

// your functions here

db.test.remove()

db.test.insert({
    greet: 'Wassup!'
});

db.test.insert({
    greet: 'hola!'
});

db.test.find({}).forEach(print_json);
