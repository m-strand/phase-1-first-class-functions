function receivesAFunction (callback) {
    return callback();
}

function returnsANamedFunction () {
    return function namedFunction() {
        console.log(`Returning a named function`);
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log(`Returning an anonymous function`);
    }
}