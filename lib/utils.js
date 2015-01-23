'use strict';

function _isInt(input) {
    return (Number(input) === input) && (input % 1 === 0);
}

function add(a, b) {
    if (_isInt(a) && _isInt(b)) {
        return a+b;
    }
    else {
        return null;
    }
}

function multiply(a, b) {
    if (_isInt(a) && _isInt(b)) {
        return a*b;
    }
    else {
        return null;
    }
}

function gg() {
    console.log("GG");
}

module.exports.add = add;