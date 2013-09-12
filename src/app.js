// include vendor libraries
//= ../vendor/lodash/lodash.compat.js
//= ../vendor/mongo-uuid/mongo-uuid.js

// include any local library from ../lib
//= ../lib/common_functions.js

// your code here.
db.test.remove()

var _greet = function(msg) {
    return {
        greet: msg
    };
};

var save = function(decorate, msg) {
    db.test.insert(_greet(msg));
};

var saveGreetings = _.partial(save, _greet)

_(['Wassup dude!', 'Hi mate!', 'Hi da!']).each(saveGreetings);

db.test.find({}).forEach(print_json);
